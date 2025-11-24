import { Hono } from "hono";

type Bindings = {
  KV: KVNamespace;
  ASSETS: R2Bucket;
  DB: D1Database;
  AI: any; // Using 'any' to be safe, or 'Ai' if sure. Scaffold used 'Ai'.
};

const app = new Hono<{ Bindings: Bindings }>();

app.get("/health", (c) => c.json({ ok: true, service: "gs-api" }));

app.get("/v1/hello", (c) =>
  c.json({
    message: "Hello from gs-api",
    time: new Date().toISOString()
  })
);

// Merged routes from previous work
app.get('/v1/users', (c) => c.json({ users: ['user1', 'user2'] }))
app.get('/v1/agents', (c) => c.json({ agents: ['agent-alpha', 'agent-beta'] }))
app.get('/v1/models', (c) => c.json({ models: ['gpt-4', 'claude-3'] }))
app.get('/v1/logs', (c) => c.json({ logs: ['log1', 'log2'] }))

export default app;
