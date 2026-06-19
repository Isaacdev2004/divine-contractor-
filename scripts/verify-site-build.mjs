import fs from "node:fs";
import path from "node:path";

const distDir = path.resolve("artifacts/divine-contractor/dist/public");
const indexPath = path.join(distDir, "index.html");

if (!fs.existsSync(indexPath)) {
  console.error(`Missing build output: ${indexPath}`);
  process.exit(1);
}

const html = fs.readFileSync(indexPath, "utf8");

if (html.includes("/src/main.tsx")) {
  console.error("Build output still references the dev entrypoint.");
  process.exit(1);
}

if (!html.includes("/assets/")) {
  console.error("Build output is missing bundled assets.");
  process.exit(1);
}

fs.copyFileSync(indexPath, path.join(distDir, "404.html"));
console.log("Site build verified.");
