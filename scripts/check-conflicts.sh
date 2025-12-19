#!/usr/bin/env bash
set -euo pipefail

# Find unresolved Git merge conflict markers in tracked files. Anchor the search
# so the script's own pattern literal does not produce a false positive.
matches=$(git grep -nE '^[<>=]{7} ' -- $(git ls-files) || true)

if [[ -n "$matches" ]]; then
  echo "Unresolved merge conflicts detected:" >&2
  echo "$matches" >&2
  exit 1
fi

echo "No merge conflict markers found."
