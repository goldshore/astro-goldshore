import { Hono } from 'hono'

const app = new Hono()

app.get('/', (c) => {
  return c.text('Hello Hono!')
})

app.get('/v1/health', (c) => c.json({ status: 'ok', service: 'gs-api' }))

export default app
