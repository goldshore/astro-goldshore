# Sentinel Journal

## 2025-12-16 - Unprotected Internal API Exposure
**Vulnerability:** The `gs-api` worker (`api.goldshore.ai`) was configured with a Cloudflare Access "bypass" policy but lacked application-level authentication. This exposed the internal API publicly.
**Learning:** Infrastructure-as-Code (`desired-state.yaml`) assumed "bypass" meant "handle auth elsewhere" (e.g., via Gateway), but the API worker didn't implement it. Reliance on network-layer security alone (which was disabled) caused a gap.
**Prevention:** Always implement "Defense in Depth". Internal APIs should verify authentication tokens (e.g., Service Tokens or JWTs) even if they are expected to be behind a gateway. Never assume upstream protection is sufficient.
