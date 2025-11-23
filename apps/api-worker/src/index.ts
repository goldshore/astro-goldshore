import { Hono } from 'hono';

const app = new Hono();

app.get('/health', c => c.json({ status: "ok"}));
app.get('/version', c => c.json({ version: "1.0.0" }));

export default app;
