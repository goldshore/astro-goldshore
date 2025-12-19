#!/usr/bin/env bash
set -euo pipefail

# Find unresolved Git merge conflict markers in tracked files.
matches=$(git grep -n "<<<<<<<" -- $(git ls-files) || true)

if [[ -n "$matches" ]]; then
  echo "Unresolved merge conflicts detected:" >&2
  echo "$matches" >&2
  exit 1
fi

echo "No merge conflict markers found."
