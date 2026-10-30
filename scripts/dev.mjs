// Local development: rebuilds the frontend on every change (esbuild watch) and serves the repository for the
// preview page (http://localhost:8765/preview/index.html), which reloads itself when a bundle or a preview file changes.
// No dependencies. `npm run dev` in frontend/ starts it.

import { spawn } from "node:child_process";
import { createReadStream, existsSync, statSync, watch } from "node:fs";
import { createServer } from "node:http";
import { extname, join, normalize, resolve, sep } from "node:path";

const root = resolve(import.meta.dirname, "..");
const port = Number(process.env.PORT ?? 8765);
const TYPES = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".gif": "image/gif",
  ".webp": "image/webp",
  ".svg": "image/svg+xml",
  ".woff2": "font/woff2",
};

// the build in watch mode: unminified bundles, rewritten into custom_components/ on every change
const build = spawn(process.execPath, ["build.mjs", "--watch"], { cwd: join(root, "frontend"), stdio: "inherit" });
build.on("exit", (code) => process.exit(code ?? 0));
process.on("exit", () => build.kill());

const clients = new Set();
let timer;
const changed = (name) => {
  if (!name || /\.(map|tmp)$/.test(name)) return;
  // one reload for the burst of files a build writes
  clearTimeout(timer);
  timer = setTimeout(() => clients.forEach((res) => res.write("data: reload\n\n")), 400);
};
for (const dir of ["custom_components/neonplan3d/frontend", "preview"]) watch(join(root, dir), { recursive: true }, (_, name) => changed(name));

createServer((req, res) => {
  const url = new URL(req.url ?? "/", "http://localhost");
  if (url.pathname === "/__reload") {
    res.writeHead(200, { "content-type": "text/event-stream", "cache-control": "no-cache", connection: "keep-alive" });
    res.write(": connected\n\n");
    clients.add(res);
    req.on("close", () => clients.delete(res));
    return;
  }
  const file = normalize(join(root, decodeURIComponent(url.pathname)));
  // only inside the repository
  if (file !== root && !file.startsWith(root + sep)) return void res.writeHead(403).end();
  if (!existsSync(file) || !statSync(file).isFile()) return void res.writeHead(404).end();
  res.writeHead(200, { "content-type": TYPES[extname(file)] ?? "application/octet-stream", "cache-control": "no-store" });
  createReadStream(file).pipe(res);
}).listen(port, "127.0.0.1", () => console.log(`Preview: http://localhost:${port}/preview/index.html (reloads by itself)`));
