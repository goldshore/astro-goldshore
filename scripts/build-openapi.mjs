import fs from 'fs';
import YAML from 'yaml';

const SRC = 'apps/web/openapi';
const DEST = 'apps/web/src/data';

if (!fs.existsSync(DEST)) fs.mkdirSync(DEST, { recursive: true });

for (const file of fs.readdirSync(SRC)) {
  if (!file.endsWith('.yaml')) continue;
  const out = file.replace('.yaml', '.json');
  const parsed = YAML.parse(fs.readFileSync(`${SRC}/${file}`, 'utf8'));
  fs.writeFileSync(`${DEST}/${out}`, JSON.stringify(parsed, null, 2));
}
