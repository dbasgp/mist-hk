# Mist.hk

Showcase site for **DBA 迪比亞's** evaporative air cooler and industrial fan range. Sister to `dba.hk` (manufacturer) and `cooler.hk` (sales/rental).

## Domains

| Domain          | Role                                |
| --------------- | ----------------------------------- |
| `www.mist.hk`   | **Primary / canonical**             |
| `www.mist.com.hk` | 301 → `https://www.mist.hk/$path` |
| `www.hkmist.com`  | 301 → `https://www.mist.hk/$path` |

## Stack

- Pure static HTML/CSS/JS — no framework, no build step.
- 22 product detail pages auto-generated from `products_data.json`.
- Imagery sourced from `dba.hk` Shopify CDN, downloaded into `images/`.

## Files

```
clients/mist-hk/
├── index.html              # kinetic landing
├── style.css               # global theme
├── product.css             # product detail styles
├── script.js               # cursor / particles / drag / dial / lineup
├── products/               # 22 generated detail pages
├── images/                 # 76 product photos + favicon
├── products_data.json      # source of truth — title / cmh / images / variants
├── client.json             # client metadata
├── sitemap.xml             # all 23 URLs
└── robots.txt
```

## Design notes (deliberate departure from prior client sites)

| Prior pattern (dryeaz, erv, ervee) | Mist.hk does                         |
| ---------------------------------- | ------------------------------------ |
| White / light theme, blue accents  | Pure black + electric cyan/mint mist |
| Static product grid                | Draggable, throwable product cosmos  |
| Vertical card layout               | Diagonal apps grid + asymmetric flow |
| Standard nav-hero-grid             | Kinetic typography + parallax words  |
| No interactive specs               | Wind-console dial → live SKU match   |
| No motion                          | Particle field, marquee, fan blades, scroll-driven big-type |

## Multi-domain redirect (deploy step)

Same Render setup as the other client sites. In Render dashboard for the `mist-hk` static site:

1. Add `www.mist.hk` as the **canonical** custom domain (this becomes the `$RENDER_EXTERNAL_HOSTNAME`).
2. Add `www.mist.com.hk` and `www.hkmist.com` as additional custom domains.
3. In **Settings → Redirects/Rewrites** add two host-based 301 rules:
   - Host: `www.mist.com.hk` → `https://www.mist.hk/:splat` (status 301)
   - Host: `www.hkmist.com` → `https://www.mist.hk/:splat` (status 301)
   - (Plus apex `mist.hk` / `mist.com.hk` / `hkmist.com` → `www.*` on the registrar side)

Note: pure DNS can't do path-preserving redirects across hosts — keep this at the Render edge.

## Run locally

```bash
cd clients/mist-hk
python3 -m http.server 8765
open http://localhost:8765/
```
