import { serve } from '@hono/node-server'
import { Hono } from 'hono'

const app = new Hono()

app.get('/', (c) => c.json({ name: 'tavernclaw-server', status: 'ok' }))

app.get('/health', (c) => c.json({ ok: true }))

// Placeholder for hub instances API
app.get('/api/instances', (c) => c.json({ instances: [] }))

const port = Number(process.env.PORT) || 3001
serve({ fetch: app.fetch, port })

console.log(`Server running at http://localhost:${port}`)
