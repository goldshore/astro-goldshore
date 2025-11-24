import { Hono } from 'hono';

type Env = {
  KV: KVNamespace;
  DB: D1Database;
  ASSETS: R2Bucket;
  AI: any; // Cloudflare AI binding
};

const app = new Hono<{ Bindings: Env }>();

app.get('/health', (c) => {
  return c.json({ status: 'ok', service: 'gs-api' });
});

app.get('/v1/info', (c) => {
  return c.json({
    name: 'GoldShore API',
    version: '0.0.1',
    time: new Date().toISOString()
  });
});

// Example KV test route
app.get('/v1/kv/:key', async (c) => {
  const key = c.req.param('key');
  const value = await c.env.KV.get(key);
  return c.json({ key, value });
});

export default app;