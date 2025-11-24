import { Hono } from "hono";
import { cors } from "hono/cors";

type Bindings = {
  API: Fetcher; // service binding to gs-api
  AI: any;
};

const app = new Hono<{ Bindings: Bindings }>();

app.use('*', cors());

app.get("/health", (c) => c.json({ ok: true, service: "gs-gateway" }));

// Forward all requests to API (matching wiring requirement gw.goldshore.ai/* -> API)
app.all("*", async (c) => {
  return c.env.API.fetch(c.req.raw);
});

export default app;
