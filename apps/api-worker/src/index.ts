import { Hono } from "hono";
import health from "./routes/health";
import user from "./routes/user";
import system from "./routes/system";

const app = new Hono();

// health
app.route("/health", health);

// user
app.route("/user", user);

// system
app.route("/system", system);

export default app;
