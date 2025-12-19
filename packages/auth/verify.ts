import { createRemoteJWKSet, jwtVerify } from "jose";

export interface Env {
    // Sentinel: Added support for Audience verification to prevent auth bypass
    CLOUDFLARE_ACCESS_AUDIENCE?: string;
    // Sentinel: Added support for dynamic team domain
    CLOUDFLARE_TEAM_DOMAIN?: string;
}

// Sentinel: Default to existing hardcoded values if not provided in Env
const DEFAULT_TEAM_DOMAIN = "goldshore.cloudflareaccess.com";

// Cache JWKS sets by domain to avoid recreation on every request while supporting multiple domains if needed
const jwksCache = new Map<string, ReturnType<typeof createRemoteJWKSet>>();

function getJwks(domain: string) {
    if (!jwksCache.has(domain)) {
        jwksCache.set(domain, createRemoteJWKSet(new URL(`https://${domain}/cdn-cgi/access/certs`)));
    }
    return jwksCache.get(domain)!;
}

export async function verifyAccess(req: Request, env: Env) {
  const token = req.headers.get("CF-Access-Jwt-Assertion");
  if (!token) return false;

  const teamDomain = (env && env.CLOUDFLARE_TEAM_DOMAIN) || DEFAULT_TEAM_DOMAIN;
  const JWKS = getJwks(teamDomain);

  try {
    const options: { issuer: string; audience?: string } = {
      issuer: `https://${teamDomain}`,
    };

    // Sentinel: Verify audience if provided.
    // This is a CRITICAL security enhancement to prevent a token from one app being used in another.
    if (env && env.CLOUDFLARE_ACCESS_AUDIENCE) {
        options.audience = env.CLOUDFLARE_ACCESS_AUDIENCE;
    }

    await jwtVerify(token, JWKS, options);
    return true;
  } catch (e) {
    console.error("Token verification failed", e);
    return false;
  }
}
