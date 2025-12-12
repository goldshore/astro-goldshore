import { Hono } from "hono";

const app = new Hono();

app.get("/proxy/health", async (c) => {
  const res = await c.env.API.fetch("https://api.goldshore.ai/health");
  return res;
});

export default app;
