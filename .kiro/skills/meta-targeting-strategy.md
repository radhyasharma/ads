---
name: meta-targeting-strategy
description: Design Meta ad targeting, audiences, and campaign structure for lead generation. Use for audience strategy, lookalikes, exclusions, budget allocation, and campaign architecture.
keywords: meta ads, facebook targeting, audiences, lookalikes, advantage+, CBO, ABO, retargeting
---

# Meta Targeting Strategy

You architect Meta ad accounts for performance. As of 2024–2026, Meta has shifted hard toward AI-driven delivery (Advantage+). Manual interest targeting still has a place, but the playbook has changed.

## Modern Targeting Hierarchy (in order of preference)

### 1. Advantage+ Shopping / Lead Campaigns (default for most accounts)
Meta's AI selects audiences with minimal input. You provide:
- Pixel / Conversions API events
- A few "audience suggestions" (optional — interests, demographics)
- Existing customer list (for exclusion or as a seed)

**When to use:** Account has > 50 conversions/week to learn from. Most lead-gen accounts post-launch.

**When NOT to use:** Brand new pixel with no event history; very narrow geo (< 500k people); Special Ad Category.

### 2. Lookalikes (still strong, especially 1–3%)
Built from a high-quality source audience.

| Source quality (best → worst) | Notes |
|---|---|
| Past 90-day purchasers / paying customers | Highest LTV signal |
| Past 180-day high-value leads (qualified, sales accepted) | Best for B2B |
| All form submitters (last 90 days) | Volume play |
| Page engagers / video viewers | Weakest, only if no conversion data |

**Sizing:**
- **1%** — tightest, best for cold cold audiences in mature accounts
- **1–3%** — primary scaling lookalike
- **3–5%** — when 1–3% is exhausted
- **5–10%** — broad scale, near-prospecting territory
- **Stack lookalikes** (1–3% from leads + 1–3% from buyers) into one ad set

Source audience needs **minimum 100 people**, ideally **1,000+** for a meaningful lookalike.

### 3. Detailed (Interest) Targeting — narrower role now
Use when:
- New account with no pixel data
- Niche B2B where Advantage+ is too broad
- Special Ad Category limits lookalikes

**Stack don't single-target:** Combine 5–15 related interests in one ad set, not one ad set per interest. Audience size 500k–5M for cold, 100k–500k for refined.

**Layer:** interests AND (job title OR behavior). Don't layer too tight — Advantage+ Detailed Targeting Expansion will broaden anyway in most cases.

### 4. Custom Audiences (retargeting + lookalike sources)
Build these from day one:

| Audience | Window | Use |
|---|---|---|
| Pixel: All visitors | 180 days | Broad retargeting |
| Pixel: Form viewers, non-submitters | 30 days | Hot retargeting |
| Pixel: Pricing page visitors | 30 days | High-intent retargeting |
| Engagement: IG + FB page (any) | 365 days | Warm cold-ish |
| Engagement: Video 75%+ watched | 90 days | Best engagement audience |
| CRM upload: Leads | refreshed weekly | Lookalike source + exclusion |
| CRM upload: Customers | refreshed monthly | Highest-value lookalike source |

## Campaign Structure That Works

### The Standard 3-Tier Funnel

```
TOF (Top of Funnel) — Cold
├─ Advantage+ Lead Campaign (60–70% budget)
└─ Lookalike Stack 1–3% (educational creative)

MOF (Middle of Funnel) — Warm engagement
├─ Video viewers 75%+ (90 days)
├─ Page/IG engagers (180 days)
└─ Creative: case studies, demos, deeper proof

BOF (Bottom of Funnel) — High intent
├─ Pixel: visitors not converted (30 days)
├─ Pixel: form abandoners (14 days)
└─ Creative: testimonials, urgency, risk reversal
```

**Budget split (lead gen, mature account):** 60% TOF / 25% MOF / 15% BOF.
**Budget split (new account, no warm data):** 90% TOF / 10% MOF / 0% BOF — build the warm pool first.

### CBO vs ABO

- **CBO (Campaign Budget Optimization)** — Meta distributes budget across ad sets in a campaign. Use when ad sets are similar in audience quality and you want Meta to find winners.
- **ABO (Ad Set Budget Optimization)** — You set budget per ad set. Use during testing when you need to force spend into each variant for clean reads.

**Standard practice:** ABO during the first 7–14 days for testing → CBO once you know which audiences/creatives win.

## Exclusions — The Quiet Profit Lever

Always exclude from cold campaigns:
- Existing customers (don't pay to reach paying users)
- Existing leads in your CRM (don't pay for re-conversion)
- Past 30-day visitors (let retargeting handle them)
- Employees / team email addresses

Failing to exclude inflates CPL by 20–40% on most accounts.

## Placements

**Default to Advantage+ Placements** (Meta auto-distributes across Feed, Reels, Stories, Audience Network).

Manual placement only when:
- You have placement-specific creative (vertical 9:16 for Stories/Reels, square for Feed)
- Audience Network is producing junk leads (common — exclude it for B2B)
- You're testing IG-only or FB-only for a specific audience

For lead gen specifically: **exclude Audience Network and in-stream video** unless data proves otherwise. Lead quality from these placements is consistently lower.

## Creative-Audience Fit (the quietly biggest factor)

The creative IS the targeting now. Meta delivers the creative to whoever it converts on. So:

- **Test 3–5 creative concepts per ad set**, each with 2–3 hook variants
- **Short-form video** (15–30s, vertical 9:16) outperforms static for cold lead-gen ~70% of the time
- **UGC-style creative** (single person talking to camera, low production) beats polished brand creative on lead-gen by a wide margin
- **Refresh creative every 7–14 days** at scale to fight ad fatigue (frequency > 2.5 = warning)

## Budget Math for Launch

Minimum daily spend per ad set: **$30–50** for a standard CPL of $20–80. Below this, Meta can't exit learning phase (50 conversions/week required).

Launch testing rule: budget = (target CPL × 50) ÷ 7 days. So a $40 CPL target → ~$285/day across the campaign in testing.

## Key Diagnostic Metrics

| Metric | What it tells you | Action threshold |
|---|---|---|
| CPM | Auction competitiveness | Rising CPM + falling CTR = ad fatigue |
| Hook rate (3-sec video views / impressions) | Creative is stopping scroll | < 25% = new hook |
| Hold rate (15-sec views / 3-sec views) | Creative is holding attention | < 25% = new mid-section |
| CTR (link) | Hook + offer alignment | < 1% on cold = new creative |
| CPC | Auction + relevance | Rising CPC + flat CTR = audience fatigue |
| CVR (LP) | Page is matching ad promise | < 5% on lead gen = LP audit |
| CPL | Bottom-line | vs. target CPL |
| Frequency | Saturation | > 2.5 in 7 days = refresh creative |

## When Asked to Build a Strategy

Always clarify:
1. **Offer** + average customer LTV / lead value
2. **Pixel maturity** — how many conversions tracked in last 30 days?
3. **Existing customer list size** — for lookalikes
4. **Geo** — country, state, city radius?
5. **Budget** — daily testing budget available
6. **Special Ad Category** — credit, employment, housing, social issues?

Then deliver:
- Campaign structure (campaigns + ad sets), with explicit audience definition for each
- Budget allocation by tier
- Exclusion list
- Placement recommendation
- Testing plan: which variables to test in week 1, 2, 4
- Diagnostic dashboard: metrics + thresholds to watch
- Kill / scale rules (e.g., "kill ad if $20 spent + 0 leads", "scale ad set 20% if CPL is 30% below target for 3 consecutive days")
