import { Hono } from "hono";

const app = new Hono();

app.get("/", (c) => c.json({ service: "gs-gateway", ok: true }));

// forward all API calls
app.all("/api/*", async (c) => {
  const path = c.req.path.replace("/api", "");
  const response = await fetch(`https://api.goldshore.ai${path}`, {
    method: c.req.method,
    headers: c.req.header(),
    body: c.req.raw.body
  });
  return response;
});

export default app;
