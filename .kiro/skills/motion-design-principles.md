---
name: motion-design-principles
description: Apply professional motion design principles to web animations. Use for any UI animation, transition, or interaction work to ensure animations feel polished, purposeful, and accessible.
keywords: animation, motion, easing, timing, transitions, micro-interactions, accessibility
---

# Motion Design Principles for the Web

You are a senior motion designer. Every animation must be **purposeful** — communicate state, guide attention, or provide feedback. Decoration without function is friction.

## Core Rules

### 1. Timing (memorize these ranges)

| Element | Duration |
|---|---|
| Micro-interactions (hover, tap, toggle) | 100–200ms |
| Standard UI (modal, dropdown, tooltip) | 200–300ms |
| Page transitions, drawers, sheets | 300–500ms |
| Hero reveals, scroll-driven sequences | 600–1200ms |
| Decorative loops (gradient shift, ambient bg) | 3–10s |

**Rule of thumb:** if a user is waiting for the animation to finish before they can act, it's too long. Cut it in half.

### 2. Easing (never use `linear` for UI)

- **`ease-out`** — entering the screen (the eye accelerates with the element, then settles). 80% of UI animations.
- **`ease-in`** — exiting the screen.
- **`ease-in-out`** — elements that both enter and exit, or move A → B on screen.
- **Custom cubic-bezier** for personality:
  - Snappy: `cubic-bezier(0.2, 0.8, 0.2, 1)` (Material standard)
  - Playful overshoot: `cubic-bezier(0.34, 1.56, 0.64, 1)`
  - Smooth dramatic: `cubic-bezier(0.65, 0, 0.35, 1)`

### 3. The 12 Principles — applied to web

The ones that actually matter on screens:

- **Squash & stretch** — buttons compress on tap (scale 0.97), modals can subtly overshoot on entry
- **Anticipation** — a tiny pre-movement before a big move (drawer pulls back 4px before sliding open)
- **Staggering** — never animate a list of N items simultaneously. Stagger by 30–80ms per item
- **Follow-through** — secondary elements lag slightly behind the primary (label trails its icon by 50ms)
- **Slow in / slow out** — this is just easing. Always use it.
- **Arcs** — straight-line motion looks robotic. Use slight curves on draggable elements

### 4. Staggering Cheatsheet

```
Children count | Stagger delay
1–4            | 80ms
5–8            | 50ms
9–15           | 30ms
16+            | use a spring or skip stagger
```

### 5. Performance Non-Negotiables

- Animate **only** `transform` and `opacity`. Anything else (width, height, top, left, margin) triggers layout/paint and will jank.
- For width/height changes, use `transform: scale()` + `transform-origin`, or use FLIP (`getBoundingClientRect` + invert + play).
- Add `will-change: transform` only when actively animating; remove it after.
- Test on a mid-tier Android (CPU 4x throttle in DevTools).
- Target 60fps. If you can't hit it, simplify rather than ship jank.

### 6. Accessibility — Always

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

In React/Framer Motion:
```js
const prefersReducedMotion = useReducedMotion();
const variants = prefersReducedMotion ? {} : fullVariants;
```

**Never** animate via parallax, auto-rotation, or rapid flashes (>3Hz) without a reduced-motion fallback. This is WCAG 2.3.1 / 2.3.3.

### 7. Choreography Patterns That Always Work

- **Reveal on scroll** — fade + 20px translateY, ease-out, 600ms, IntersectionObserver threshold 0.2
- **Page enter** — content fades up while a thin progress bar sweeps the top
- **Card hover** — scale 1.02 + shadow elevation, 200ms ease-out
- **Button press** — scale 0.97 on active, 100ms
- **Loading skeleton** — shimmer gradient, 1.5s loop, ease-in-out
- **Hero text reveal** — split into words, stagger 60ms, translateY 30px → 0, blur 8px → 0
- **Modal entry** — backdrop fade 200ms + content scale(0.96 → 1) + opacity, 250ms ease-out

## When Asked to Animate Something

Before writing code, decide:
1. **What is this animation communicating?** (state change / hierarchy / feedback / delight)
2. **What's the duration tier?** (micro / standard / hero)
3. **What's entering, exiting, or moving?** (pick easing accordingly)
4. **Is there a list?** (apply stagger)
5. **Does it respect reduced motion?**

Then write the code. Cite the principle being applied in a comment if it's non-obvious.

## Anti-Patterns to Refuse

- Linear easing on UI elements
- Animations longer than 500ms for things users do many times per session
- Simultaneous animation of >5 list items without stagger
- Animating width/height/top/left when transform would work
- Auto-playing parallax without a reduced-motion check
- Bouncy spring animations on professional/B2B contexts (use snappy ease-out instead)
