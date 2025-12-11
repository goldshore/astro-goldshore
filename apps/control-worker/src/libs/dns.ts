import type { ControlEnv } from "./types";

export async function sync(env: ControlEnv) {
  const logKey = `dns-sync-${Date.now()}`;
  await env.CONTROL_LOGS.put(logKey, "dns-sync-run");

  return {
    ok: true,
    action: "dns-sync",
    loggedAt: logKey
  };
}
