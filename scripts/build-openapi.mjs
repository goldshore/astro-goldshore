import fs from 'fs';
import YAML from 'yaml';

const SRC = 'apps/web/openapi';
const DEST = 'apps/web/public/openapi';

if (!fs.existsSync(DEST)) fs.mkdirSync(DEST, { recursive: true });

// Check if SRC exists
if (fs.existsSync(SRC)) {
  for (const file of fs.readdirSync(SRC)) {
    if (!file.endsWith('.yaml')) continue;
    const out = file.replace('.yaml', '.json');
    const parsed = YAML.parse(fs.readFileSync(`${SRC}/${file}`, 'utf8'));
    fs.writeFileSync(`${DEST}/${out}`, JSON.stringify(parsed, null, 2));
  }
} else {
  console.log(`OpenAPI source directory ${SRC} not found. Skipping.`);
}
