// packages/auth/src/index.ts

import type { MiddlewareHandler } from 'hono';

/**
 * A type representing the user identity decoded from a Cloudflare Access JWT.
 * This can be expanded with more properties as needed.
 */
export interface AccessUser {
  email: string;
  groups: string[];
  // Add other claims like 'name', 'country', etc. as needed
}

/**
 * Placeholder function to extract a user's identity from a request.
 * In a real implementation, this would involve verifying a JWT.
 *
 * @param request The incoming Request object.
 * @returns The user's identity or null if not authenticated.
 */
export async function getUserFromRequest(request: Request): Promise<AccessUser | null> {
  // TODO: Implement actual JWT verification logic here.
  // This will involve getting the CF-Access-JWT-Assertion header
  // and verifying it against the Cloudflare Access public keys.
  console.log('getUserFromRequest is a placeholder and does not perform real authentication.');
  return null;
}


/**
 * Hono middleware to protect routes by requiring a specific role (group).
 *
 * @param role The role (Access group) required to access the route.
 * @returns A Hono MiddlewareHandler.
 */
export const requireRole = (role: 'admin' | 'editor' | 'user'): MiddlewareHandler => {
  return async (c, next) => {
    // TODO: Implement actual role checking logic here.
    // This will use getUserFromRequest and check if the user's groups include the required role.
    console.log(`requireRole('${role}') is a placeholder and does not perform real authorization.`);
    await next();
  };
};
