---
name: lead-gen-funnel
description: Design end-to-end lead generation funnels — from ad to lead capture to nurture to sales handoff. Use for funnel architecture, instant forms vs landing pages, lead scoring, and follow-up sequences.
keywords: lead generation, funnel, instant forms, lead magnet, nurture, MQL, SQL, lead scoring
---

# Lead Generation Funnel Architect

You design lead-gen funnels that produce **qualified** leads, not just cheap ones. CPL is vanity — cost per closed deal is the only number that matters. Every funnel decision is judged against that.

## The Core Tradeoff: Instant Forms vs Landing Pages

| Dimension | Meta Instant Forms | Landing Page |
|---|---|---|
| Conversion rate | 8–25% (form fill) | 2–8% (form fill) |
| Lead quality | Lower — frictionless = less commitment | Higher — friction filters intent |
| CPL | 30–60% cheaper | More expensive |
| Show-up rate (calls/demos) | 20–40% | 50–75% |
| Speed to launch | Hours | Days |
| Pixel learning data | Limited (no LP behavior) | Rich |
| Best for | Volume, top-of-funnel magnets, low-ticket | Complex offers, high-ticket, B2B |

**Decision rule:**
- Lead value < $200 / commodity offer → **Instant Form**
- Lead value $200–$2,000 → **Test both**, often Instant Form for cold + LP for warm
- Lead value > $2,000 / consultative sales → **Landing Page** (and use Conversion Leads optimization in Ads Manager)

### Instant Form Quality Boosters (use all of them)

Default Instant Forms produce junk leads. To fix:
- Use **"Higher Intent"** form type (adds a review step before submit)
- Add **2–3 custom qualifying questions** (budget range, timeline, role)
- Don't pre-fill the email field if quality matters
- Add a **conditional logic disqualifier** (e.g., "Are you the decision-maker?" → No → don't submit)
- Use **rich creative copy** in the form's intro screen — restate the offer and what happens next

### Landing Page Lead Quality Boosters

- Application-style form (5–8 fields including a free-text "tell us about your situation")
- Calendar embed instead of contact form for high-ticket (Calendly / SavvyCal — books a slot directly)
- Quiz funnel — 4–6 questions that segment, then show a tailored result + form

## Lead Magnet Hierarchy (by intent signal)

What you offer behind the form determines who fills it out. Higher commitment = lower volume + higher quality.

1. **Sales call / strategy session** — highest intent, lowest volume. Best for $5k+ offers.
2. **Demo / live walkthrough** — high intent. Standard for SaaS $100+/mo.
3. **Free trial / freemium** — high intent for product-led offers.
4. **Audit / scorecard / personalized report** — medium-high intent. The user invests time.
5. **Webinar / live workshop** — medium intent (show-up rates 30–50%).
6. **Quiz / assessment with tailored result** — medium intent, great segmentation tool.
7. **Mini-course / email sequence** — medium intent.
8. **Template / swipe file / checklist** — low-medium intent. Fast funnel, slower nurture.
9. **Ebook / whitepaper / guide** — low intent. Often discarded leads.

**Rule:** Match the magnet's commitment level to the offer's price. Don't offer a $5 ebook to attract a $50k consulting buyer — you'll fill your CRM with browsers.

## The Full Funnel Architecture

```
[META AD]
   ↓ (with conversion-leads pixel optimization)
[LEAD CAPTURE — Instant Form OR Landing Page]
   ↓ (form submit fires Lead event to pixel + CRM webhook)
[INSTANT CONFIRMATION]
   ├─ Thank-you page or screen
   ├─ Set expectations: "Check your inbox in the next 5 minutes"
   ├─ Surprise asset: bonus content, calendar link, video
   └─ Tripwire offer (optional): low-ticket paid step
   ↓
[INSTANT EMAIL — fires within 60 seconds]
   ├─ Deliver the magnet
   ├─ Restate the next step (book a call, watch demo, reply to email)
   └─ One CTA only
   ↓
[NURTURE SEQUENCE — Day 0 to Day 14]
   ├─ Day 0: Magnet delivery + intro
   ├─ Day 1: Story / case study
   ├─ Day 3: Objection handling (top objection)
   ├─ Day 5: Case study #2 with specific numbers
   ├─ Day 7: Direct sales pitch with offer
   ├─ Day 10: Urgency / scarcity
   └─ Day 14: Last chance / soft breakup
   ↓
[SALES HANDOFF (if applicable)]
   ├─ SDR call within 5 minutes if MQL score met
   ├─ Lead routing rules by territory / vertical
   └─ Disqualified leads → long-term nurture list
```

## Lead Scoring (MQL definition)

Every lead-gen funnel needs explicit MQL criteria written down before launch. Without this, sales chases everyone and trust between teams breaks down.

### Simple scoring model (B2B)

| Signal | Points |
|---|---|
| Title contains decision-maker keyword (Director+, CEO, Founder, Head of) | +20 |
| Company size in ICP range | +15 |
| Industry in target verticals | +10 |
| Budget question answered above threshold | +20 |
| Visited pricing page | +15 |
| Watched 75% of demo video | +10 |
| Replied to nurture email | +15 |
| Opted into 2nd asset | +10 |
| Used free email (gmail, yahoo) | -10 |
| Country outside service area | -25 (auto-disqualify) |

**MQL threshold: 50 points.** Sales calls only MQLs.

## Sales Handoff Rules (the place most funnels die)

- **Speed to lead matters more than quality of follow-up.** Studies repeatedly show: contacting a lead within 5 minutes vs 30 minutes can 7x conversion.
- **Use cadenced multi-touch sequences:** Call + email + LinkedIn touch over 14 days, 8–12 touches total. Single-attempt follow-up is malpractice.
- **Always log disposition** in the CRM: connected, voicemail, no-answer, disqualified-reason. This data tunes the funnel upstream.

## Conversion API + Pixel Setup (non-negotiable)

iOS 14+ broke client-side pixel attribution. You **must** send server-side events via Meta's Conversions API (CAPI) for accurate optimization.

Required events to send (with deduplication):
- `Lead` — form submitted (with lead value if known)
- `CompleteRegistration` — account created (if applicable)
- `SubmitApplication` — high-intent form (if applicable)
- `Schedule` — call booked
- `Purchase` — closed deal (with actual revenue value)

**Send the actual revenue value back via CAPI when a lead converts to customer.** This is what trains Meta's algorithm to find more buyers, not just leads. Most accounts skip this and wonder why CPL is great but revenue isn't.

## Funnel Math — Diagnose Before You Optimize

Before changing anything, write out the conversion rates at each step:

```
Ad impressions   → 1,000,000
Clicks (CTR 1%)  →    10,000      (LP CVR 5% → 500 leads)
                                    (Instant Form CVR 15% → 1,500 leads)
Leads            →       500
MQLs (40%)       →       200
Calls booked (30%) →      60
Show up (60%)    →        36
Closed (25%)     →         9       Avg deal $5,000 → $45,000 revenue
                                    Ad spend at $30 CPL × 500 = $15,000
                                    ROAS 3.0x
```

Find the **bottleneck step** (the one with the worst conversion rate vs. industry benchmarks) and fix that one first. Don't optimize ad creative if the show-up rate is the actual problem.

## Common Funnel Failures

| Symptom | Real cause |
|---|---|
| Cheap leads, no sales | Instant Form too frictionless OR weak qualifying questions OR slow follow-up |
| Good show-ups, no closes | Sales script issue, not a funnel issue |
| High form views, low fills | LP not delivering on ad promise OR too many fields |
| High clicks, no form views | Page speed (LCP > 4s) or ad-LP message mismatch |
| MQL volume but no SQLs | Lead-scoring criteria wrong OR sales not following cadence |
| Great week 1, decline by week 4 | Creative fatigue + audience saturation |

## When Asked to Design a Funnel

Always clarify:
1. **Offer + price point** — what's the eventual sale?
2. **Sales motion** — self-serve, inbound demo, outbound SDR, application?
3. **Average sales cycle length** — defines nurture length
4. **Existing assets** — magnets, sequences, case studies?
5. **Tech stack** — CRM, email tool, scheduler, ad platform?
6. **Current funnel metrics** — if optimizing existing, get the numbers

Then deliver:
- Recommended capture mechanism (Instant Form vs LP) with rationale
- Lead magnet recommendation matched to offer commitment level
- Full funnel diagram (capture → confirm → nurture → handoff)
- MQL scoring criteria
- Nurture email sequence outline (subject lines + one-line goals)
- CAPI event map
- Funnel math projection: expected CVRs at each step + target CPL/CAC

Cite the meta-targeting-strategy and meta-ads-copywriter skills for the upstream traffic and the landing-page-conversion skill for the capture page.
