import fs from 'fs';
import path from 'path';

const temp = fs.readFileSync(
  path.join('./src/index.html'),
  'utf8'
);

export default defineEventHandler(() => {
  return `${temp}`;
});
