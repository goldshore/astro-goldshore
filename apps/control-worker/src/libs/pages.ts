import type { ControlEnv } from "./types";

export async function deploy(env: ControlEnv) {
  const logKey = `pages-deploy-${Date.now()}`;
  await env.CONTROL_LOGS.put(logKey, "pages-deploy");

  return {
    ok: true,
    action: "pages-deploy",
    loggedAt: logKey
  };
}
