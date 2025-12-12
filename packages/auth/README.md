# @goldshore/auth

This package provides helpers for implementing authentication and authorization using Cloudflare Access (Zero Trust).

## Features

-   Verifies Cloudflare Access JWTs using the `jose` library.
-   Provides middleware for Hono and Astro applications to protect routes.
-   Includes helpers for role-based access control (RBAC).

## Configuration

To verify Cloudflare Access JWTs, the following environment variables must be set in your applications (`goldshore-api`, `goldshore-agent`, `goldshore-admin`, etc.):

-   `CF_TEAM_DOMAIN`: Your Cloudflare Zero Trust team domain. This is the first part of the URL you use to access your applications (e.g., `your-team-name` from `your-team-name.cloudflareaccess.com`).
-   `CF_ACCESS_AUD`: The Application Audience (AUD) tag for your Cloudflare Access application. This is a unique identifier for your application that you can find in the Zero Trust dashboard.

These variables are used to construct the public key URL for verifying the JWT signature.

## Usage

### Hono (e.g., `goldshore-api`)

In your Hono application, you can use the `createAuthMiddleware` to protect all routes and the `requireRole` middleware for role-based access control.

```typescript
// src/index.ts
import { Hono } from 'hono';
import { createAuthMiddleware, requireRole, AuthContext } from '@goldshore/auth';

type Bindings = {
  CF_TEAM_DOMAIN: string;
  CF_ACCESS_AUD: string;
};

const app = new Hono<{ Bindings: Bindings } & AuthContext>();

// Apply the auth middleware to all routes
app.use('*', async (c, next) => {
  const authMiddleware = createAuthMiddleware({
    teamDomain: c.env.CF_TEAM_DOMAIN,
    audience: c.env.CF_ACCESS_AUD,
  });
  return authMiddleware(c, next);
});

// A route accessible to any authenticated user
app.get('/v1/me', (c) => c.json(c.get('user')));

// A route accessible only to users with the 'admin' role
app.get('/v1/admin', requireRole('admin'), (c) => {
  return c.json({ message: 'Welcome, admin!' });
});

export default app;
```

### Astro (e.g., `goldshore-admin`)

In your Astro application, create a middleware file at `src/middleware.ts` to protect all pages.

```typescript
// src/middleware.ts
import { defineMiddleware } from 'astro:middleware';
import { verifyCfAccessJwt } from '@goldshore/auth';

export const onRequest = defineMiddleware(async (context, next) => {
  const teamDomain = context.locals.runtime?.env?.CF_TEAM_DOMAIN;
  const audience = context.locals.runtime?.env?.CF_ACCESS_AUD;

  if (!teamDomain || !audience) {
    return new Response('App is misconfigured', { status: 500 });
  }

  const user = await verifyCfAccessJwt(context.request, teamDomain, audience);

  if (!user) {
    return new Response('Unauthorized', { status: 401 });
  }

  context.locals.user = user;
  return next();
});
```

You also need to update `src/env.d.ts` to provide type safety for `context.locals.user`:

```typescript
// src/env.d.ts
/// <reference types="astro/client" />

declare namespace App {
    interface Locals {
        user?: import('@goldshore/auth').AccessUser;
    }
}
```

## Local Development

When running applications locally, you will not have the `CF-Access-JWT-Assertion` header injected into your requests, so authentication will fail.

To develop locally, you can use a **service token**.

1.  Create a service token in the Cloudflare Zero Trust dashboard.
2.  In your local terminal, use a tool like `curl` or a browser extension to send requests to your local server with the following headers:
    -   `CF-Access-Client-Id`: Your service token's Client ID.
    -   `CF-Access-Client-Secret`: Your service token's Client Secret.

This will bypass the browser-based login flow and allow you to test authenticated routes.
