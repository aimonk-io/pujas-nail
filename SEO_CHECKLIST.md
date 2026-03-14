# SEO checklist (pujanails.com / pujasnailstudio.com)

## Fix for “blank page” / crawlers see no content (biggest ranking blocker)

The site is a client-rendered SPA, so the initial HTML had no H1, no body text, no FAQ — only the title. **Pre-rendering** fixes this.

- **Build with pre-render** so the first response includes full HTML:
  - Run: **`npm run build:client:prerender`** (builds the SPA, then pre-renders each route with Puppeteer).
  - Output: `dist/spa/index.html`, `dist/spa/services/index.html`, `dist/spa/contact/index.html`, etc., each with full content (H1, service text, areas, FAQ).
- **On Vercel**: set **Build Command** to **`npm run build:client:prerender`** and **Output Directory** to **`dist/spa`**. So each deploy serves pre-rendered HTML; Google and other crawlers get the full page on first fetch.
- **Hydration**: The client uses `hydrateRoot` when `#root` already has content (pre-rendered), so the same HTML is preserved and React attaches to it.

After deploying, use “View crawled page” in Google Search Console (URL Inspection) to confirm the response includes H1, body text, and FAQ.

## Done in code
- **NailSalon schema** — Homepage `<head>` has a full **NailSalon** JSON-LD block (schema.org) with phone (+918617682768), address (Dabgram, Siliguri, West Bengal 734006), geo, opening hours (10:00–20:00, 7 days), areaServed (all neighbourhoods), and offer catalog. Test it at [search.google.com/test/rich-results](https://search.google.com/test/rich-results).
- **Service area section** — Homepage has a dedicated “Home Nail Service in These Siliguri Areas” section (id="areas") that names every neighbourhood: Pradhan Nagar, Sevoke Road, Hakimpara, Matigara, Dabgram, Hill Cart Road, Siliguri Bazar, Ashram Para, Punjabi Para, Desh Bandhu Para, Khopalasi, and nearby. This helps with hyper-local search.
- **Dedicated service pages** — Live and in sitemap:
  - `/bridal-nail-art-siliguri` — Bridal Nail Art Siliguri
  - `/acrylic-nail-extension-siliguri` — Acrylic Nail Extension at Home
  - `/gel-nails-home-service-siliguri` — Gel Nails Home Service
- **Internal links** — Homepage service cards and Services page link to these URLs.
- **Sitemap** — `public/sitemap.xml` includes the new pages.

## Do yourself (off-site)

1. **Google Business Profile** (free)  
   - Create/claim at [business.google.com](https://business.google.com).  
   - Use: Puja's Nail Studio, Siliguri, phone +91 8617682768, website, opening hours 10:00–20:00.  
   - Helps you show up for “nail art near me” and local searches.

2. **Justdial**  
   - List your business and add your website link.  
   - Good for local enquiries and a backlink.

3. **Sulekha**  
   - Same as above: business listing + link to your site.  
   - Builds visibility and one more quality backlink.

After going live, submit `https://yourdomain.com/sitemap.xml` in [Google Search Console](https://search.google.com/search-console) and test rich results with [Google Rich Results Test](https://search.google.com/test/rich-results).
