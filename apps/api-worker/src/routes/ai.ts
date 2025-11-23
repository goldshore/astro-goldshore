import { Hono } from "hono";

const ai = new Hono();

ai.get("/", async (c) => {
  return c.json({ message: "AI route" });
});

export default ai;
