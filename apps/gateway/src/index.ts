import { Hono } from 'hono';

const app = new Hono();

const API_ORIGIN = 'https://api.goldshore.ai';

app.all('/*', async (c) => {
  const url = new URL(c.req.url);
  const target = API_ORIGIN + url.pathname + url.search;

  const req = new Request(target, {
    method: c.req.method,
    headers: c.req.raw.headers,
    body: c.req.method !== "GET" && c.req.method !== "HEAD" ? c.req.raw.body : undefined
  });

  const res = await fetch(req);
  return res;
});

export default app;
import { Hono } from 'hono'

type Env = {
  API: Fetcher
  GATEWAY_KV: KVNamespace
  AI: any
}

const app = new Hono<{ Bindings: Env }>()

app.get('/health', (c) => c.json({ status: 'ok', service: 'gs-gateway' }))

// Example specific routes for Gateway processing
app.get('/user/login', (c) => c.json({ message: 'Gateway Login Placeholder' }))
app.post('/v1/chat', (c) => c.json({ message: 'Gateway Chat Placeholder' }))

// Forwarding fallback
app.all('*', (c) => {
  return c.env.API.fetch(c.req.raw)
})

export default app
