const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const serverDir = path.join(root, '.next', 'server');
const chunksDir = path.join(serverDir, 'chunks');

if (!fs.existsSync(serverDir)) {
  throw new Error(`Missing .next/server directory at ${serverDir}`);
}

if (!fs.existsSync(chunksDir)) {
  throw new Error(`Missing .next/server/chunks directory at ${chunksDir}`);
}

const entries = fs.readdirSync(chunksDir, { withFileTypes: true });
const filesToCopy = entries.filter(
  (entry) => entry.isFile() && entry.name.endsWith('.js')
);

for (const file of filesToCopy) {
  const src = path.join(chunksDir, file.name);
  const dest = path.join(serverDir, file.name);
  fs.copyFileSync(src, dest);
}

console.log(`Copied ${filesToCopy.length} server chunk files from ${chunksDir} to ${serverDir}`);
