// Downloads Unsplash photos into public/images.
// Unsplash License — free for commercial and non-commercial use.
import { writeFileSync, mkdirSync, existsSync } from "node:fs";
import { resolve } from "node:path";

const OUT = resolve("public/images");
if (!existsSync(OUT)) mkdirSync(OUT, { recursive: true });

// Each: { file, url } — Unsplash CDN URLs are stable by photo ID.
const IMAGES = [
  // Hero — soft warm portrait/workspace
  { file: "hero-portrait.jpg", url: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=1600&q=80" },
  // Workshop bench (warm-lit) — already used
  { file: "workshop.jpg",      url: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1800&q=80" },
  // Hands at keyboard (low light, moody)
  { file: "hands-keyboard.jpg", url: "https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&w=1800&q=80" },
  // Code on monitor
  { file: "code-screen.jpg",   url: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1600&q=80" },
  // Tokyo street at night
  { file: "tokyo-night.jpg",   url: "https://images.unsplash.com/photo-1542931287-023b922fa89b?auto=format&fit=crop&w=1800&q=80" },
  // Earth from space (dark) — world stats backdrop
  { file: "earth-night.jpg",   url: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=2000&q=80" },
  // Pastel silk — hero atmosphere
  { file: "pastel-silk.jpg",   url: "https://images.unsplash.com/photo-1492136344046-866c85e0bf04?auto=format&fit=crop&w=1800&q=80" },
  // Picture frames on wood — for the "soft-edge" statement
  { file: "frames.jpg",        url: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=1600&q=80" },
  // Notebook + coffee — flat lay
  { file: "notebook.jpg",      url: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?auto=format&fit=crop&w=1600&q=80" },
  // Empty studio — bright editorial setting
  { file: "studio.jpg",        url: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1800&q=80" },
  // Plant / botanical detail — visual breather
  { file: "plant.jpg",         url: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=1400&q=80" },
  // Abstract gradient texture
  { file: "gradient.jpg",      url: "https://images.unsplash.com/photo-1543857778-c4a1a3e0b2eb?auto=format&fit=crop&w=1600&q=80" },
];

async function download({ file, url }) {
  const t0 = Date.now();
  const r = await fetch(url, { redirect: "follow" });
  if (!r.ok) throw new Error(`${file} -> ${r.status}`);
  const buf = Buffer.from(await r.arrayBuffer());
  writeFileSync(resolve(OUT, file), buf);
  console.log(`✓ ${file.padEnd(22)} ${(buf.length / 1024).toFixed(1).padStart(8)} KB  ${((Date.now() - t0)/1000).toFixed(2)}s`);
}

const results = await Promise.allSettled(IMAGES.map(download));
const fails = results.filter((r) => r.status === "rejected");
if (fails.length) {
  fails.forEach((f) => console.error("FAIL:", f.reason?.message ?? f.reason));
  process.exit(2);
}
console.log(`\nAll ${IMAGES.length} images downloaded.`);
