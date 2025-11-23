import { syncDNS } from "./tasks/syncDNS";
import { rotateKeys } from "./tasks/rotateKeys";

export interface Env {
  CONTROL_LOGS: KVNamespace;
}

export default {
  async scheduled(controller: ScheduledController, env: Env, ctx: ExecutionContext) {
    await env.CONTROL_LOGS.put(Date.now().toString(), "control-run");
    await syncDNS(env);
    await rotateKeys(env);
  }
};
