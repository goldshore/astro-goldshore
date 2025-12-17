export interface Env {
    // Add bindings if needed here
}

export async function verifyAccess(req: Request, env: Env) {
  const token = req.headers.get("CF-Access-Jwt-Assertion");
  if (!token) return false;

  // Validate via Access JWKS
  // TODO: add JOSE verification

  return true;
}
