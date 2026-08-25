// Zero-dependency static dev server for the site (serves repo root).
// Usage: pnpm serve   (first free port in 3000-6000, or PORT env)
import http from 'node:http';
import net from 'node:net';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.mjs': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.md': 'text/markdown; charset=utf-8',
  '.map': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.ico': 'image/x-icon',
};

function firstFreePort(from = 3000, to = 6000) {
  return new Promise((resolve) => {
    const tryPort = (port) => {
      const srv = net.createServer();
      srv.once('error', () => srv.close(() => (port < to ? tryPort(port + 1) : resolve(null))));
      srv.listen(port, () => {
        const p = srv.address().port;
        srv.close(() => resolve(p));
      });
    };
    tryPort(from);
  });
}

function resolveFile(urlPath) {
  let p = decodeURIComponent(urlPath).split('?')[0];
  if (p === '/') p = '/index.html';
  const file = path.normalize(path.join(ROOT, p));
  if (!file.startsWith(ROOT)) return null;
  if (!fs.existsSync(file)) return null;
  if (fs.statSync(file).isDirectory()) {
    const idx = path.join(file, 'index.html');
    return fs.existsSync(idx) ? idx : null; // directory listing → its index.html
  }
  return file;
}

async function main() {
  const server = http.createServer((req, res) => {
    const file = resolveFile(req.url || '/');

    if (!file) {
      res.writeHead(404, { 'content-type': 'text/plain; charset=utf-8' });
      res.end('404 Not Found');
      return;
    }

    res.writeHead(200, { 'content-type': MIME[path.extname(file)] || 'application/octet-stream' });
    fs.createReadStream(file).pipe(res);
  });

  const port = Number(process.env.PORT) || (await firstFreePort());
  if (!port) {
    console.error('No free port in 3000-6000. Aborting.');
    process.exit(1);
  }
  server.listen(port, () => {
    console.log(`DetectorJS site: http://localhost:${port}/  (demo: http://localhost:${port}/demo.html)`);
  });
}

main();