/**
 * Pre-render SPA routes to static HTML so crawlers (and Google) get full content.
 * Run after: npm run build:client
 * Usage: node scripts/prerender.mjs
 *
 * Output: dist/spa/index.html, dist/spa/services/index.html, etc.
 */

import http from "http";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const SPA_DIR = path.join(__dirname, "..", "dist", "spa");
const PORT = 4174;

const ROUTES = [
  "/",
  "/services",
  "/about",
  "/contact",
  "/faq",
  "/bridal-nail-art-siliguri",
  "/acrylic-nail-extension-siliguri",
  "/gel-nails-home-service-siliguri",
];

// Serve dist/spa with SPA fallback: missing paths serve index.html
function createServer() {
  return http.createServer((req, res) => {
    const urlPath = req.url?.split("?")[0] || "/";
    let filePath = path.join(SPA_DIR, urlPath === "/" ? "index.html" : urlPath);
    const hasExt = path.extname(filePath);
    if (!hasExt) {
      filePath = path.join(SPA_DIR, urlPath === "/" ? "index.html" : path.join(urlPath, "index.html"));
    }
    fs.readFile(filePath, (err, data) => {
      if (err) {
        // SPA fallback: serve index.html so React Router can handle the route
        fs.readFile(path.join(SPA_DIR, "index.html"), (err2, indexData) => {
          if (err2) {
            res.writeHead(404);
            res.end();
            return;
          }
          res.writeHead(200, { "Content-Type": "text/html" });
          res.end(indexData);
        });
        return;
      }
      const contentType = path.extname(filePath) === ".html" ? "text/html" : "application/octet-stream";
      res.writeHead(200, { "Content-Type": contentType });
      res.end(data);
    });
  });
}

async function run() {
  if (!fs.existsSync(SPA_DIR)) {
    console.error("Run build:client first (npm run build:client). dist/spa not found.");
    process.exit(1);
  }

  const puppeteer = await import("puppeteer").catch(() => null);
  if (!puppeteer) {
    console.error("Install puppeteer: npm i -D puppeteer");
    process.exit(1);
  }

  const server = createServer().listen(PORT, "127.0.0.1");
  const baseUrl = `http://127.0.0.1:${PORT}`;

  await new Promise((r) => server.on("listening", r));

  const browser = await puppeteer.default.launch({ headless: true });
  const page = await browser.newPage();

  // Ensure we get full content (wait for React to render)
  await page.setDefaultNavigationTimeout(15000);
  await page.setDefaultTimeout(10000);

  for (const route of ROUTES) {
    try {
      await page.goto(`${baseUrl}${route}`, { waitUntil: "networkidle0" });
      // Wait for at least one meaningful element (h1 or main) so crawlers see content
      await page.waitForSelector("h1, main, [role='main']", { timeout: 8000 }).catch(() => {});
      await page.evaluate(() => new Promise((r) => setTimeout(r, 300))); // allow any late render
      const html = await page.content();

      const outPath = route === "/" ? path.join(SPA_DIR, "index.html") : path.join(SPA_DIR, route, "index.html");
      if (route !== "/") {
        fs.mkdirSync(path.dirname(outPath), { recursive: true });
      }
      fs.writeFileSync(outPath, html, "utf8");
      console.log("Pre-rendered:", route === "/" ? "/" : route);
    } catch (e) {
      console.warn("Prerender failed for", route, e.message);
    }
  }

  await browser.close();
  server.close();
  console.log("Pre-render done. Deploy dist/spa for crawler-friendly HTML.");
}

run().catch((e) => {
  console.error(e);
  process.exit(1);
});
