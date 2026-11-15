# QLORA Website — SEO Technical Audit

**Website:** https://www.qloratech.com

**Audit date:** November 14, 2026

**Scope:** Read-only source-code and live HTTP audit

## A. Executive Summary

1. **Critical: route-specific SEO metadata is client-rendered only.**

   Live requests to product, contact, OEM, and unknown URLs all returned the homepage title and homepage canonical in the initial HTML. Search engines must execute JavaScript before seeing the correct metadata. This can materially weaken indexing and page differentiation.

2. **High: unknown routes return the homepage with HTTP 200.**

   A fabricated URL returned 200 and homepage content, creating confirmed soft-404 behavior. Unknown product slugs also fall back to Home.

3. **High: no dedicated Inline Water Filters page exists.**

   QLORA has an Inline Shower Filter page, but no page, navigation entry, homepage link, metadata, canonical, sitemap entry, or focused content for commercial inline water filters such as PP, GAC, CTO, UF, and post-carbon cartridges.

4. **Tankless RO is substantially stronger, but not yet complete for procurement intent.**

   The landing page has strong B2B metadata, 600/800 GPD coverage, OEM copy, model links, manufacturing content, specifications, and quotation CTAs. Quick-change cartridges and sample-request information are absent, and the homepage only links indirectly through `/ro-systems`.

5. **Indexing signals are diluted by duplicate and thin routes.**

   `/oem-solutions` duplicates `/oem-private-label` without a redirect; trailing-slash URLs return 200; and an internally linked placeholder article is thin and indexable. These are credible contributors to GSC's non-indexed URL categories, though the available data cannot prove attribution.

The current GSC figures—152 impressions, 4 clicks, position 25.1—indicate an early visibility problem rather than enough data to establish search demand or conversion trends.

## B. Technical SEO Issues

| Issue | Affected route | Evidence | Severity | Recommended fix |
|---|---|---|---|---|
| Initial HTML always contains homepage metadata | All SPA routes | `index.html:6` contains only homepage title, description, canonical and OG tags. Route-specific tags are injected with `useEffect` in `src/lib/seo.ts:51`. Live product and contact requests returned the homepage metadata. | **Critical** | Pre-render or server-render every indexable route so title, description, canonical, OG and JSON-LD are present in the HTTP response. |
| Unknown routes produce soft 404s | Any invalid route or product slug | `src/App.tsx:20` defaults to Home; `src/pages/ProductPage.tsx:84` does the same. The global rewrite is in `vercel.json:2`. A fabricated live route returned 200. | **High** | Add a real Not Found route and ensure unknown URLs return HTTP 404, not homepage content. |
| No Inline Water Filters landing page | Entire site | No matching route in `src/App.tsx:22`, navigation in `src/components/Header.tsx:33`, or sitemap. | **High** | Create one focused category landing page after approval, preferably `/products/inline-water-filters`. |
| Duplicate OEM route without redirect | `/oem-solutions` | Both URLs render the same component in `src/App.tsx:28`; the component declares `/oem-private-label` in `src/pages/OEMPrivateLabel.tsx:37`. Live alias returned 200. | **Medium** | 308 redirect `/oem-solutions` to `/oem-private-label`. |
| Trailing-slash variants are not redirected | All routes | Client code strips the slash in `src/App.tsx:19`, but the live trailing-slash Tankless URL returned 200 rather than a redirect. | **Medium** | Configure a consistent server-level trailing-slash policy and 308 redirects. |
| Thin placeholder is internally linked and indexable | `/technical-knowledge/how-to-choose-the-right-water-filter` | It calls itself an upcoming article in `src/pages/TechnicalGuidePlaceholder.tsx:9` and is linked from `src/pages/TechnicalKnowledge.tsx:25`, but is omitted from the sitemap. | **Medium** | Publish the full article or temporarily remove the internal link and apply `noindex`. |
| Contact canonical is correct only after rendering | `/contact?...` | `applySEO` receives the clean `/contact` path in `src/pages/ContactPage.tsx:35`, but raw live HTML reports the homepage canonical. | **High**, as part of CSR issue | Pre-render `/contact` with canonical `/contact`; continue reading query parameters only to populate the form. |
| Lead event is not fired on the current AJAX success path | `/contact` | `generate_lead` runs only when `sent=true` is detected at `src/pages/ContactPage.tsx:50`. AJAX success at `src/pages/ContactPage.tsx:82` only updates component state. | **Medium** | Fire `generate_lead` once immediately after confirmed AJAX success. |
| Homepage priority-page linking is unbalanced | Homepage | Tankless RO links indirectly through `/ro-systems` in `src/components/ROSystem.tsx:18`; Inline Water Filters has neither a page nor a link. | **Medium** | Add direct, descriptive homepage links to both priority landing pages. |

### Confirmed healthy items

- `robots.txt` is accessible, permits crawling, and declares the sitemap.
- The live sitemap is accessible and lists 28 preferred URLs.
- HTTPS and `www` canonical-host redirects work with 308 responses.
- No source-level `noindex` directives were found.
- Major product detail pages are reachable through category-card links, even where links are dynamically generated.

## C. Inline Water Filters Assessment

### Current status

A dedicated Inline Water Filters page **does not exist**.

- Exact URL: none.
- Main navigation: absent.
- Homepage link: absent.
- Unique title, description, H1 and canonical: absent.
- Sitemap entry: absent.
- Related-page links: absent.

The existing `/products/inline-shower-filter` is a different product category and is correctly positioned around shower filtration. It must not be reused as an inline drinking-water filter page.

The closest existing route is `/water-filtration`, but it is a broad replacement-filter hub. It lists PP Sediment, Carbon, UF, Mineral and Alkaline filters in `src/pages/WaterFiltration.tsx:9` and uses generic metadata at `src/pages/WaterFiltration.tsx:84`.

### Recommended future structure

Use:

`/products/inline-water-filters`

This matches the existing product-family routing pattern and keeps it clearly distinct from Inline Shower Filters.

The future page should include:

- PP sediment, GAC, CTO, UF and post-carbon configurations.
- Connection sizes, dimensions, flow rate, service life and media options—but only where verified.
- Housing/cartridge construction and application compatibility.
- OEM/private-label, labels and packaging options.
- Neutral packaging and sample availability only if operationally confirmed.
- Distributor/wholesale quotation CTA.
- Links from the homepage, Water Filtration navigation, `/water-filtration`, OEM page and relevant technical guides.

Avoid creating separate thin pages for every media type initially. One authoritative commercial landing page can support the media variants without cannibalizing `/water-filtration`.

## D. Tankless RO Assessment

### Strong existing elements

The Tankless RO landing page is the site's best-aligned priority page:

- Title: `Tankless RO Systems for OEM & Wholesale | QLORA`
- Description explicitly includes 600/800 GPD and OEM/private-label support.
- Clean canonical path and a dedicated social image.
- `ItemList` structured data for the four product platforms.
- Strong H1 and B2B introduction for distributors, importers and private-label projects.
- H2 coverage for models, capacity, manufacturing, quality control and OEM support.
- Internal links to four Tankless RO model pages.
- Links to the RO comparison guide, OEM page, contact page and RO category.
- Descriptive factory and product image alt text.
- Multiple quotation CTAs.

Evidence: `src/pages/TanklessROSystemPage.tsx:40` and `src/data/tanklessROProducts.ts:27`.

### Gaps

- No explicit quick-change cartridge information.
- No clearly labeled sample inquiry.
- Common configuration information is broad—75–1200 GPD—while procurement searches may need more directly comparable 600/800 GPD information.
- MOQ, lead time, electrical configuration, plug type, packaging dimensions, logistics data and market compliance are absent. These should only be added after verification.
- The homepage has no direct anchor to `/products/tankless-ro-system`.
- Initial HTML still exposes homepage metadata until JavaScript runs.
- The landing's `ItemList` is appropriate for a category page; individual model pages should remain the place for model-level `Product` data.

Recommended additions, once facts are confirmed:

- “Request sample / evaluation unit” CTA.
- A verified cartridge replacement and maintenance section.
- A compact 600-vs-800 GPD comparison.
- Downloadable specification sheet or enquiry checklist.
- Project fields in the inquiry form: target market, capacity, quantity, voltage, branding and packaging.

## E. Indexing & Canonical Assessment

### Sitemap and robots

The sitemap lists 28 preferred URLs, including all major category pages, Tankless RO landing/details, Inline Shower Filter and water-dispenser products. It excludes:

- The duplicate `/oem-solutions` alias—correct if it becomes a redirect.
- The thin water-filter placeholder—reasonable, but it remains internally linked and crawlable.
- Any Inline Water Filters page because none exists.

`robots.txt` is valid and does not block important paths.

### Redirect behavior

Live verification on November 14, 2026 found:

- `https://qloratech.com/` → 308 to `https://www.qloratech.com/`
- `http://www.qloratech.com/` → 308 to HTTPS
- `http://qloratech.com/` uses a two-hop path through HTTPS non-www and then www
- Trailing-slash application routes return 200 instead of redirecting
- `/oem-solutions` returns 200 instead of redirecting
- Invalid URLs return 200

The three redirect URLs reported by GSC may simply be legitimate protocol/host variants; redirects are not inherently indexing errors.

### Contact parameters

The application's intended canonical is safely fixed to `/contact`, while `subject` and `message` populate the form at `src/pages/ContactPage.tsx:50`. This is conceptually correct.

However, because metadata is client-rendered, a raw request to the parameterized URL returns the homepage canonical. After pre-rendering is introduced:

1. Always output canonical `https://www.qloratech.com/contact`.
2. Read query parameters into form state.
3. Optionally replace the browser URL with `/contact` after values are captured.
4. Keep parameter URLs out of the sitemap.
5. Prefer shorter internal contact links where prefill is not essential.

### GSC interpretation

The 13 “discovered, not indexed” and one “crawled, not indexed” URL could plausibly reflect:

- Client-dependent metadata and content.
- Soft 404s.
- Duplicate route/slash/parameter variants.
- Thin placeholder content.
- Limited internal authority and very low overall visibility.
- Recently added product pages awaiting recrawl.

This is a hypothesis set, not proof that all non-indexed URLs are defective.

## F. B2B Content & Conversion Assessment

### Homepage

The homepage meta description mentions OEM support, brands and distributors, but the visible H1—“Better Water for Everyday Life”—is broad and consumer-oriented at `src/components/Hero.tsx:10`.

The B2B message becomes clearer later through OEM and contact sections. For search engines and procurement buyers, the first screen should communicate more quickly:

- Water filtration systems and replacement filters.
- OEM/private-label and wholesale supply.
- Tankless RO and Inline Water Filters as equal priorities.
- Catalog, specification and quotation routes.

Retain the brand headline if desired, but add a concise supply-focused supporting sentence and direct priority-product links.

### Internal linking

Recommended hierarchy:

- Homepage → Tankless RO landing and Inline Water Filters landing.
- Water Filtration hub → Inline Water Filters landing.
- RO category → Tankless RO landing.
- Both priority pages → OEM, relevant technical guide and prefilled contact form.
- OEM page → both priority pages.
- Technical guides → commercially relevant category pages.
- Footer → both priority pages once the Inline Water Filters page exists.

Anchor text should be descriptive: “600 & 800 GPD Tankless RO Systems” and “OEM Inline Water Filters,” not repeated generic “Learn More.”

### Conversion implementation

Positive findings:

- Required browser validation for name, company, country, email, product interest and message.
- Loading, success and error states.
- Email and WhatsApp alternatives.
- Accessible `role="status"` and `role="alert"`.
- Full-width mobile submit button.
- Catalog-download event tracking.
- Multiple quotation and OEM CTAs.

Risks/gaps:

- The form posts to third-party FormSubmit at `src/pages/ContactPage.tsx:150`; delivery was not tested.
- Current AJAX success does not trigger `generate_lead`.
- “Inline Water Filters” and “Tankless RO Systems” are not separate Product Interest options.
- There are no procurement fields for expected quantity, market, capacity, sample requirement or customization.
- WhatsApp opens a direct external chat, but message prefill and production delivery were not verified.

## G. Prioritized Implementation Plan

| Phase / task | Priority | Files/pages | Benefit | Effort | Dependencies/risks |
|---|---|---|---|---|---|
| Phase 1 — Pre-render or SSR all indexable routes | P0 | Build/deployment architecture, `seo.ts`, page routes | Correct metadata and schema in initial HTML | High | Must preserve Vite deployment and analytics |
| Phase 1 — Return real 404s for unknown routes/slugs | P0 | `App.tsx`, product routers, Vercel config | Removes soft-404 signals and crawl waste | Medium | Static hosting needs server/edge handling |
| Phase 1 — Add 308 redirect for `/oem-solutions` and slash variants | P1 | `vercel.json` | Consolidates duplicates | Low | Check inbound links before deployment |
| Phase 1 — Resolve placeholder guide | P1 | Placeholder and Technical Knowledge page | Removes thin indexable content | Low–Medium | Requires completed article or temporary noindex |
| Phase 2 — Create Inline Water Filters landing page | P1 | New approved route, nav, sitemap, category/home links | Establishes primary commercial search target | Medium–High | Requires verified product specs and assets |
| Phase 2 — Improve Tankless RO procurement content | P1 | Tankless landing and inquiry flow | Better match for wholesale/OEM intent | Medium | Verify cartridge, samples, MOQ and lead-time facts |
| Phase 2 — Add direct homepage links to both priority lines | P1 | Homepage RO/filtration sections | Improves crawl depth and buyer discovery | Low | Inline page must exist first |
| Phase 2 — Repair lead-event tracking | P1 | `ContactPage.tsx` | More reliable conversion measurement | Low | Validate once-only event behavior |
| Phase 3 — Add structured B2B inquiry fields | P2 | Contact form | Better-qualified enquiries | Low–Medium | Coordinate with sales workflow |
| Phase 3 — Build supporting buyer guides | P2 | Technical Knowledge | Topical authority and internal links | Medium | Avoid unsupported technical claims |
| Phase 3 — Monitor GSC by canonical URL | P2 | GSC/sitemap workflow | Measures indexing improvement | Ongoing | Allow recrawl time after deployment |

## H. Proposed SEO Titles & Meta Descriptions

These are proposals only.

### Homepage

**Title:**

`QLORA Water Filtration Systems | OEM & Wholesale`

**Description:**

`Source tankless RO systems, inline water filters, replacement filters and water dispensers with OEM and private-label support for global distributors.`

### Inline Water Filters

**Title:**

`Inline Water Filters for OEM & Wholesale | QLORA`

**Description:**

`Explore PP, GAC, CTO, UF and post-carbon inline water filter options for wholesale, replacement and private-label water filtration projects.`

### Tankless RO Systems

**Title:**

`600 & 800 GPD Tankless RO Systems | OEM Supplier | QLORA`

**Description:**

`Source configurable 600 and 800 GPD tankless RO systems with model selection, branding, packaging and OEM support for distributors and importers.`

### OEM Solutions

**Title:**

`OEM Water Filtration & Private Label Solutions | QLORA`

**Description:**

`Develop private-label water filtration products with support for product configuration, branding, labels, packaging and international B2B supply.`

## I. Verification Limitations

- The full local routing, metadata, sitemap, robots, page content, links and inquiry implementation were inspected.
- Live read-only HTTP checks covered primary routes, redirects, slash variants, parameterized contact URLs and an invalid URL.
- The search tool returned no `site:` results, but this is **not evidence of zero Google indexing**; the supplied GSC report is more authoritative.
- Direct access was not available to GSC URL Inspection, crawl logs, GA4 reports or Vercel domain configuration.
- The contact form was not submitted; email delivery was not verified.
- Search volume, keyword trends, backlinks, Core Web Vitals and real conversion rates were not validated.
- A production build was not run because the audit was explicitly read-only and a build would modify generated files.
- No website source files were modified, committed, pushed or deployed during the audit.
