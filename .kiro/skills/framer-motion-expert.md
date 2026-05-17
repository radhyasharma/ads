---
name: framer-motion-expert
description: Expert-level Framer Motion (motion/react) implementation. Use when building animations in React projects with framer-motion or the newer motion package.
keywords: framer-motion, motion, react, animation, variants, AnimatePresence, layout, scroll
---

# Framer Motion Expert

You write production-grade Framer Motion code. As of 2024, the library was renamed to `motion` (npm: `motion`, import: `motion/react`). Both APIs are nearly identical — match whichever the project already uses.

## Setup Decision Tree

```
Project uses framer-motion?  → keep it, import from "framer-motion"
New project?                 → use motion: npm i motion, import from "motion/react"
Need server components?      → import from "motion/react-client" or use motion/react in client comps
```

## The Patterns You Reach For

### 1. Variants (always prefer over inline props for anything non-trivial)

```jsx
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.06, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.2, 0.8, 0.2, 1] } },
};

<motion.ul variants={container} initial="hidden" animate="show">
  {items.map(i => <motion.li key={i.id} variants={item}>{i.label}</motion.li>)}
</motion.ul>
```

Why variants: stagger works automatically, children inherit, no prop drilling, animation states are named/reusable.

### 2. AnimatePresence — exit animations

```jsx
<AnimatePresence mode="wait">
  {isOpen && (
    <motion.div
      key="modal"
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
    />
  )}
</AnimatePresence>
```

**Critical:** every direct child of `AnimatePresence` needs a stable `key`. Forgetting this is the #1 bug.

`mode` options:
- `"sync"` (default) — both animate at once
- `"wait"` — exit completes before enter starts (use for tab switches)
- `"popLayout"` — removed item is taken out of layout flow during exit (prevents jumps)

### 3. Layout Animations — the killer feature

```jsx
// Auto-animates position/size when layout changes
<motion.div layout>...</motion.div>

// Shared element across components (FLIP under the hood)
<motion.div layoutId="card-hero" />

// Layout + custom transition
<motion.div layout transition={{ type: "spring", stiffness: 300, damping: 30 }} />
```

Use cases: reorderable lists, expand/collapse cards, tab indicators, master-detail transitions.

### 4. Scroll-Linked Animations

```jsx
import { useScroll, useTransform, motion } from "motion/react";

function Parallax() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  return <motion.div style={{ y }} />;
}

// Element-relative scroll
const ref = useRef(null);
const { scrollYProgress } = useScroll({
  target: ref,
  offset: ["start end", "end start"], // [target, viewport]
});
```

Offset reference frame: `"start end"` = "when target's start hits viewport's end (bottom)".

### 5. Whileinview — reveal on scroll, no observer needed

```jsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.3 }}
  transition={{ duration: 0.5, ease: [0.2, 0.8, 0.2, 1] }}
/>
```

`amount: 0.3` = trigger when 30% visible. `once: true` = don't replay on scroll back up (use this for hero reveals; omit for ambient effects).

### 6. Gestures

```jsx
<motion.button
  whileHover={{ scale: 1.04 }}
  whileTap={{ scale: 0.97 }}
  transition={{ duration: 0.15 }}
/>
```

For drag: `drag="x"`, `dragConstraints={{ left: 0, right: 200 }}`, `dragElastic={0.2}`.

### 7. Springs — when to use, when not to

Springs (`type: "spring"`) are great for: drag release, layout animations, playful B2C UI.
Avoid for: data viz transitions, professional B2B, anything where exact timing matters.

```jsx
transition={{ type: "spring", stiffness: 400, damping: 30, mass: 1 }}
```

- Higher `stiffness` = faster
- Higher `damping` = less bounce (30+ = barely bouncy, 10 = very bouncy)
- `mass` rarely needs to change

## Reduced Motion (always include)

```jsx
import { useReducedMotion } from "motion/react";

const prefersReduced = useReducedMotion();
const variants = prefersReduced
  ? { hidden: { opacity: 0 }, show: { opacity: 1 } }
  : { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } };
```

Or globally with `MotionConfig`:
```jsx
<MotionConfig reducedMotion="user">
  <App />
</MotionConfig>
```

## Performance Rules

- Prefer `motion()` HOCs on existing components: `const MotionLink = motion(Link)`
- Use `LazyMotion` + `domAnimation` features for smaller bundles in heavy sites
- For long lists, virtualize first, animate second
- `layout` is expensive on lists >50 items — use `layoutId` only on the active item

## Common Bugs

| Symptom | Cause |
|---|---|
| Exit animation doesn't run | Missing `key` on AnimatePresence child, or component unmounting from parent re-render |
| Stagger doesn't work | Children don't have `variants={item}` (must reference, not redefine) |
| Layout animation jumps | Parent missing `layout` prop, or `position: absolute` without layout context |
| Whileinview never triggers | `amount` too high for short element — try `0.1` |
| Spring overshoots into infinity | `damping` too low (< 8) |

## When You Receive a Request

1. Default to **variants** for anything with >2 states or any list
2. Default to **`whileInView` with `once: true`** for scroll reveals (no IntersectionObserver hookery)
3. Default to **`ease: [0.2, 0.8, 0.2, 1]`** and **300ms** if not told otherwise
4. **Always** include reduced-motion handling for hero/heavy animations
5. Cite the motion-design-principles skill for timing/easing decisions when relevant
