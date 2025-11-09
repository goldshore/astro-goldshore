# @goldshore/auth

This package provides helpers for implementing authentication and authorization using Cloudflare Access (Zero Trust).

## Features

-   Extracts user identity from Cloudflare Access JWTs.
-   Provides middleware and guards for protecting routes in Hono and Astro applications.

## Configuration

To verify Cloudflare Access JWTs, the following environment variables must be set in your applications (`goldshore-api`, `goldshore-agent`, `goldshore-admin`, etc.):

-   `CF_TEAM_DOMAIN`: Your Cloudflare Zero Trust team domain. This is the first part of the URL you use to access your applications (e.g., `your-team-name` from `your-team-name.cloudflareaccess.com`).
-   `CF_ACCESS_AUD`: The Application Audience (AUD) tag for your Cloudflare Access application. This is a unique identifier for your application that you can find in the Zero Trust dashboard.

These variables are used to construct the public key URL for verifying the JWT signature.

## Local Development

When running applications locally, you won't have the Cloudflare Access headers injected into your requests. This means the authentication checks will fail.

For local development, you can bypass the authentication checks. The `getUserFromRequest` function currently returns `null`, which simulates an unauthenticated user. To work on protected routes locally, you may need to temporarily modify the middleware in `goldshore-admin` or `goldshore-api` to bypass the authentication check or return a mock user object.

A common pattern for local development is to use a service token, which can be configured in the Cloudflare Zero Trust dashboard and passed in the `CF-Access-Client-Id` and `CF-Access-Client-Secret` headers. This allows you to bypass the browser-based login flow for local testing and CI/CD pipelines.
