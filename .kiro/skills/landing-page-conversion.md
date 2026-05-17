---
name: landing-page-conversion
description: Build and audit landing pages for conversion. Use for lead-gen LPs, ad destinations, and any page where the goal is a single primary action (form submit, demo book, signup).
keywords: landing page, conversion, CRO, lead gen, hero, CTA, form, ad destination
---

# Landing Page Conversion

You design and build landing pages whose **only** job is to convert traffic into leads. This is not a homepage. Every section earns its place by moving the visitor toward the form.

## The Non-Negotiable Structure

Above the fold (visible without scrolling on a 1366×768 laptop):

1. **Headline** — the offer in plain words. Specific outcome, specific audience, specific timeframe if possible.
2. **Subheadline** — one sentence: who it's for + how it works.
3. **Primary CTA** — visible, single, contrasting color. Action verb + outcome ("Get my free audit", not "Submit").
4. **Hero visual** — product shot, dashboard screenshot, or short looping video (no autoplay sound). Not a stock photo of people laughing at a laptop.
5. **Trust signal** — logos, "trusted by 2,400+ teams", a star rating, or a single testimonial line.

Below the fold, in this order:

6. **Problem agitation** — name the pain in their language. 2–3 short paragraphs or a 3-icon row.
7. **Solution / How it works** — 3 steps, max. Numbered, scannable, with icons.
8. **Proof** — testimonials with full name + photo + company, case study numbers, before/after, awards.
9. **Features → Benefits** — never list features alone. Format: "[Feature] so you can [benefit]".
10. **Objection handling / FAQ** — address the top 4–6 reasons people don't convert.
11. **Final CTA** — repeat the offer with a different framing. Reduce risk ("No credit card", "Cancel anytime", "30-day guarantee").
12. **Footer** — minimal. Privacy, terms, contact. **No nav menu** that lets them escape.

## Hero Headline Formulas

Pick one, fill it in:

- **[Specific outcome] for [specific audience] in [timeframe], without [pain]**
  → "Booked sales meetings for B2B SaaS founders in 30 days, without cold calling."
- **The [category] that [unique mechanism]**
  → "The CRM that updates itself from your calendar."
- **[Question matching their internal monologue]?**
  → "Tired of running ads that don't convert?"
- **Get [outcome] without [unwanted thing]**
  → "Get qualified leads without managing a sales team."

**Banned:** "Welcome to…", "We are…", "Your partner in…", "Innovative solutions for…". These are about you, not them.

## CTA Rules

- **One** primary CTA color. Use it nowhere else on the page.
- Action + outcome: "Start my free trial" beats "Sign up". "Get my pricing" beats "Contact us".
- First-person phrasing converts higher: "Start **my** trial" > "Start **your** trial".
- Show the CTA at minimum: hero, after solution section, after proof, final section.
- Sticky CTA on mobile after the user scrolls past hero.

## Form Rules

- **Field count is the single biggest lever.** Each field added drops conversion ~5–10%.
- Lead-gen LP fields, ranked by ROI:
  1. Email (always)
  2. First name (personalization downstream)
  3. Company (B2B qualification)
  4. Phone (only if sales follows up by phone)
- **Don't ask for** title, company size, country, "how did you hear about us" on the first form. Ask post-conversion or enrich with a tool.
- Use inline validation, not on-submit error walls.
- Submit button text = the outcome, not "Submit". "Send me the playbook".
- Below the button: micro-trust ("We'll never share your email", "GDPR compliant").

## Trust Signal Hierarchy (most → least powerful)

1. **Specific results from named customers** — "Acme grew MRR 4.2x in 90 days. — Jane Doe, CEO"
2. **Recognizable logos** — only if they're actually impressive to your audience
3. **Quantitative proof** — "$340M in pipeline generated", "12,400 paying customers"
4. **Press / awards** — "Featured in TechCrunch" if recent and relevant
5. **Generic testimonials** — last resort, only with photo + full attribution
6. **Star ratings** — only if from a recognized source (G2, Capterra, Trustpilot)

## Page Speed Targets (these directly impact ad costs)

| Metric | Target | Why |
|---|---|---|
| LCP (Largest Contentful Paint) | < 2.5s | Hero image must load fast |
| INP (Interaction to Next Paint) | < 200ms | Form must feel responsive |
| CLS (Cumulative Layout Shift) | < 0.1 | No jumping content |
| Total page weight | < 1.5MB | Mobile data caps |
| Time to Interactive | < 3.5s | Beyond this, ad cost rises sharply on Meta |

**Concrete actions:**
- Hero image as WebP/AVIF, served at 2x device width max
- Defer all non-critical JS (analytics, chat widgets)
- No web fonts > 2 weights, use `font-display: swap`
- Lazy-load everything below the fold
- Inline critical CSS (< 14KB) for hero render

## Mobile Specifics (60–80% of paid traffic)

- Hero CTA must be visible **without** scrolling on a 375×667 viewport
- Tap targets ≥ 44×44px
- Form on mobile: one field per row, large inputs (16px+ font to prevent iOS zoom)
- Sticky bottom CTA bar after hero scroll-out
- No hover-only interactions

## Conversion-Killing Anti-Patterns (refuse these)

- Carousels in the hero (auto-rotating). Conversion data is unanimous: they hurt.
- Multiple competing CTAs in the hero
- Navigation menu with links that exit the page
- "Learn more" buttons (vague, low-commitment language)
- Stock photos of generic happy people
- Walls of text without subheadings
- Pop-ups within 5 seconds of arrival
- Asking for phone number before email
- Long videos without a "skip to form" affordance

## When Building or Reviewing a Page

Run this checklist:

- [ ] Headline names the outcome, audience, and (ideally) timeframe
- [ ] One primary CTA color, repeated 3+ times
- [ ] CTA copy is action + outcome, in first person
- [ ] Form has ≤ 4 fields
- [ ] Trust signals appear above the fold
- [ ] At least 2 named-customer testimonials with photos
- [ ] FAQ addresses top 4 objections
- [ ] No navigation menu (or only logo, no exit links)
- [ ] LCP < 2.5s tested on throttled 4G
- [ ] Mobile sticky CTA after hero
- [ ] Reduced-motion respected on any animations
- [ ] Single conversion event fires correctly to ad platform pixel

## When Asked to Audit a Page

Score each section 1–5 and identify the **single highest-impact change**. Don't list 20 small things — find the one fix that will move conversion 20%+, and propose it with rationale.
