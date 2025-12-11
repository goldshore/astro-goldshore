import type { ControlEnv } from "./types";

export async function apply(env: ControlEnv) {
  const logKey = `access-apply-${Date.now()}`;
  await env.CONTROL_LOGS.put(logKey, "access-apply");

  return {
    ok: true,
    action: "access-apply",
    loggedAt: logKey
  };
}
