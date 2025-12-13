import { Hono } from 'hono';
import { secureHeaders } from 'hono/secure-headers';
import { checkAuth } from './auth';

type Env = {
  API: Fetcher;
  GATEWAY_KV: KVNamespace;
  AI: any;
  ENV: string;
};

// Sentinel: Add security headers to all responses (X-Frame-Options, X-XSS-Protection, etc.)
app.use('*', secureHeaders());

const API_ORIGIN = 'https://api.goldshore.ai';
const app = new Hono<{ Bindings: Env }>();

// Sentinel: Add security headers to all responses
app.use('*', secureHeaders());

// Authentication Middleware
app.use('*', async (c, next) => {
    // Skip auth for health check and OPTIONS requests (CORS preflight)
    if (c.req.path === '/health' || c.req.method === 'OPTIONS') {
        await next();
        return;
    }

    const authorized = await checkAuth(c.req.raw, c.env);
    if (!authorized) {
        return c.json({ error: 'Unauthorized' }, 401);
    }
    await next();
});

app.get('/health', (c) => c.json({ status: 'ok', service: 'gs-gateway' }));

// Example specific routes
app.get('/user/login', (c) => c.json({ message: 'Gateway Login Placeholder' }));
app.post('/v1/chat', (c) => c.json({ message: 'Gateway Chat Placeholder' }));

// Forwarding fallback
app.all('*', async (c) => {
    // If we have an API binding, use it (recommended for Service Bindings)
    if (c.env.API) {
        return c.env.API.fetch(c.req.raw);
    }

    // Fallback to fetch if no binding (e.g. local dev without binding simulation)
    // Note: The original code used API_ORIGIN, but Service Bindings are preferred.
    // If API is missing, we return 500 or implement fetch logic.
    return c.text('Upstream API not configured', 500);
});

export default app;
