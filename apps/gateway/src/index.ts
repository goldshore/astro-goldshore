import { Hono } from 'hono';

type Env = {
  API: Fetcher; // service binding to gs-api
  AI: any;
};

const app = new Hono<{ Bindings: Env }>();

app.get('/health', (c) => {
  return c.json({ status: 'ok', service: 'gs-gateway' });
});

app.get('/api/:path{.*}', async (c) => {
  const path = c.req.param('path') || '';
  const url = new URL(c.req.url);
  const qs = url.search;
  const target = `https://dummy/${path}${qs}`;

  const req = new Request(target, {
    method: c.req.method,
    headers: c.req.raw.headers,
    body: ['GET', 'HEAD'].includes(c.req.method) ? null : await c.req.raw.text()
  });

  const res = await c.env.API.fetch(req);
  return res;
});

export default app;