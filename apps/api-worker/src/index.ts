import { Hono } from 'hono'

type Env = {
  API_KV: KVNamespace
  DB: D1Database
  ASSETS: R2Bucket
  AI: any
}

const app = new Hono<{ Bindings: Env }>()

app.get('/', (c) => c.text('GoldShore API'))

// Health check
app.get('/health', (c) => c.json({ status: 'ok', service: 'gs-api' }))

// V1 Routes
const v1 = new Hono<{ Bindings: Env }>()

v1.get('/users', (c) => c.json({ users: ['user1', 'user2'] }))
v1.get('/agents', (c) => c.json({ agents: ['agent-alpha', 'agent-beta'] }))
v1.get('/models', (c) => c.json({ models: ['gpt-4', 'claude-3'] }))
v1.get('/logs', (c) => c.json({ logs: ['log1', 'log2'] }))

app.route('/v1', v1)

export default app
