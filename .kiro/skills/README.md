# Kiro Skills — Animated Sites + Meta Lead-Gen Ads

Skills installed in this repo. Kiro auto-discovers and activates them by name when their keywords match your prompt.

## Web Design / Animation
- **motion-design-principles.md** — timing, easing, accessibility, performance rules for any UI animation
- **framer-motion-expert.md** — production patterns for Framer Motion / `motion/react`
- **landing-page-conversion.md** — the bridge: how to build an LP that actually converts ad traffic

## Meta Ads / Lead Gen
- **meta-ads-copywriter.md** — hooks, frameworks (PAS / AIDA / 4Ps / BAB), character limits, compliance
- **meta-targeting-strategy.md** — Advantage+, lookalikes, exclusions, CBO vs ABO, diagnostics
- **lead-gen-funnel.md** — instant forms vs LP, lead scoring, nurture, CAPI, sales handoff

## How to use

Just describe what you're working on. Mention the relevant domain ("write Meta ad copy for...", "build a hero animation with...") and Kiro will pull in the matching skill's expertise.

You can also explicitly activate a skill by name in a prompt: *"Using the meta-ads-copywriter skill, write 3 hooks for..."*

## How to extend

- Edit any `.md` file above to tune it to your voice / industry
- Add new skills by dropping `.md` files into this folder with the same frontmatter pattern
- For preferences that should apply to **every** session in this repo (not just specific tasks), put them in `.kiro/steering/` instead
