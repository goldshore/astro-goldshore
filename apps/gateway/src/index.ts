import { Hono } from 'hono';

type Env = {
  API: Fetcher;
  AI: any;
};

const app = new Hono<{ Bindings: Env }>();

app.get('/', (c) => c.text('Goldshore Gateway'));

app.get('/api/*', async (c) => {
  // Proxy to API
  const response = await c.env.API.fetch(c.req.raw);
  return response;
});

app.get('/v1/health', (c) => c.json({ status: 'ok', service: 'gs-gateway' }));

export default app;
