import { syncDNS } from "./tasks/syncDNS";
import { rotateKeys } from "./tasks/rotateKeys";

export default {
  async scheduled(controller, env, ctx) {
    await env.CONTROL_LOGS.put(Date.now().toString(), "control-run");
    await syncDNS(env);
    await rotateKeys(env);
  }
};
