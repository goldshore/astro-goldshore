import { handleCors } from "./cors";
import { routeRequest } from "./router";

export default {
  async fetch(req: Request, env: Env): Promise<Response> {
    const cors = handleCors(req);
    if (cors) return cors;

    return routeRequest(req, env);
  }
};
