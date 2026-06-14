import { getStore } from "@netlify/blobs";

/* Global leaderboard for "Build the Monument".
   Stores the top scores only — no names, no personal data. */

const STORE = "monument-leaderboard";
const KEY = "top";
const MAX = 10;          // how many scores we keep
const CEILING = 2000;    // sanity cap on a single submitted score

export default async (req) => {
  const store = getStore(STORE);
  try {
    if (req.method === "POST") {
      let body = {};
      try { body = await req.json(); } catch (e) {}
      let score = parseInt(body.score, 10);
      if (!Number.isFinite(score)) score = 0;
      score = Math.max(0, Math.min(CEILING, score));

      let scores = (await store.get(KEY, { type: "json" })) || [];
      if (!Array.isArray(scores)) scores = [];
      scores.push(score);
      scores.sort((a, b) => b - a);
      scores = scores.slice(0, MAX);
      await store.setJSON(KEY, scores);
      return Response.json({ scores });
    }

    // GET — return the current board
    let scores = (await store.get(KEY, { type: "json" })) || [];
    if (!Array.isArray(scores)) scores = [];
    return Response.json({ scores });
  } catch (e) {
    // never break the game — return an empty board on any error
    return Response.json({ scores: [], error: String(e) });
  }
};

export const config = { path: "/api/leaderboard" };
