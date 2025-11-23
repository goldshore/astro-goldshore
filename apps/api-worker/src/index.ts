import { Hono } from 'hono';
import users from './routes/users';
import health from './routes/health';
import ai from './routes/ai';

const app = new Hono();

app.route('/health', health);
app.route('/users', users);
app.route('/ai', ai);

export default app;
