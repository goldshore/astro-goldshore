import { Hono } from 'hono';

type Env = {
  CONTROL_LOGS: KVNamespace;
  STATE: R2Bucket;
  API: Fetcher;
  GATEWAY: Fetcher;
};

const app = new Hono<{ Bindings: Env }>();

app.get('/health', (c) => {
  return c.json({ status: 'ok', service: 'gs-control' });
});

// Example cron handler – Cloudflare will call this entrypoint
export default {
  fetch: app.fetch,
  scheduled: async (event: ScheduledEvent, env: Env, ctx: ExecutionContext) => {
    const ts = new Date().toISOString();
    await env.CONTROL_LOGS.put(`cron:${ts}`, `control cron ran at ${ts}`);
  }
};