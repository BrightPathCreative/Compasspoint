# CompassPoint Advisory — Animation & Design Inspiration Guide

> **Purpose:** Creative direction, animation techniques, and reference links for building an Awwwards-quality consulting website.
> **Stack:** Next.js 14+ · GSAP (ScrollTrigger, SplitText) · Lenis Smooth Scroll · Framer Motion · Tailwind CSS

---

## 1. Creative Direction: "Refined Opulence"

The aesthetic for CompassPoint should feel like walking into a private members' club — that moment where everything is quietly, unmistakably expensive. Not flashy. Not loud. Just *certain*.

**Design pillars:**

- **Cinematic pacing** — Sections reveal like chapters in a story, not a brochure
- **Metallic warmth** — Gold that feels forged, not filtered. Plum that feels deep, not dark
- **Quiet confidence** — Animations that feel inevitable, not eager
- **Tactile depth** — Textures, shadows, and layering that make a flat screen feel three-dimensional

**The one thing someone will remember:** The compass emblem. It should feel alive — subtly rotating on scroll, glowing with a warm shimmer, like a living brand mark woven throughout the experience.

---

## 2. Animation Stack & Setup

### 2.1 Core Libraries

```bash
npm install gsap @gsap/react lenis
```

**GSAP plugins to register:**

- `ScrollTrigger` — Scroll-linked animations (free)
- `SplitText` — Character/word/line text reveals (Club GSAP — paid, worth it)
- `CustomEase` — Bespoke easing curves
- `ScrollSmoother` — Alternative to Lenis (pick one, not both)

**Lenis + GSAP sync (recommended approach):**

```typescript
// lib/smooth-scroll.ts
"use client";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function initSmoothScroll() {
  const lenis = new Lenis({
    lerp: 0.08,        // Lower = smoother, slower feel (luxury)
    duration: 1.6,      // Scroll duration
    smoothWheel: true,
  });

  lenis.on("scroll", ScrollTrigger.update);

  gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
  });

  gsap.ticker.lagSmoothing(0);

  return lenis;
}
```

### 2.2 GSAP Context Pattern for React/Next.js

Always use `gsap.context()` for proper cleanup in React:

```typescript
"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function AnimatedSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // All GSAP animations in here
      gsap.from(".fade-up", {
        y: 60,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });
    }, containerRef);

    return () => ctx.revert(); // Clean up
  }, []);

  return <div ref={containerRef}>...</div>;
}
```

### 2.3 Custom Easing (The Secret Sauce)

Generic `ease-in-out` screams template. Custom eases feel designed:

```typescript
import { CustomEase } from "gsap/CustomEase";
gsap.registerPlugin(CustomEase);

// "Compass ease" — sharp entry, gentle settle. Feels authoritative.
CustomEase.create("compass", "0.625, 0.05, 0, 1");

// "Regal ease" — slow start, confident finish.
CustomEase.create("regal", "0.22, 0.61, 0.36, 1");

// Usage
gsap.to(element, { y: 0, duration: 1.2, ease: "compass" });
```

---

## 3. Hero Section — The Money Shot

This is the single most important section. It needs to stop someone mid-scroll and make them think: "These people are serious."

### 3.1 Recommended Hero Animation Sequence

**Timeline (total ~2.8s):**

1. **0.0s** — Plum background fades in from black
2. **0.3s** — Compass emblem draws in (SVG stroke animation) then fills with gold gradient
3. **0.8s** — "BIG BUSINESS THINKING." reveals word-by-word from below (masked reveal with SplitText)
4. **1.4s** — "Built for Yours." fades up with slight scale
5. **1.8s** — Subheadline fades in
6. **2.2s** — CTA buttons slide up with stagger
7. **2.5s** — Subtle gold particle/shimmer effect begins (CSS animation, infinite loop)

### 3.2 Compass SVG Draw Animation

```typescript
// Compass stroke animation on load
const compassPaths = document.querySelectorAll(".compass-svg path");

compassPaths.forEach((path) => {
  const length = path.getTotalLength();
  gsap.set(path, {
    strokeDasharray: length,
    strokeDashoffset: length,
    fill: "transparent",
    stroke: "#D4AF37",
    strokeWidth: 1.5,
  });
});

gsap.to(".compass-svg path", {
  strokeDashoffset: 0,
  duration: 2,
  stagger: 0.1,
  ease: "power2.inOut",
  onComplete: () => {
    // Fill in with gold after drawing
    gsap.to(".compass-svg path", {
      fill: "#D4AF37",
      stroke: "transparent",
      duration: 0.8,
      ease: "power1.inOut",
    });
  },
});
```

### 3.3 SplitText Masked Headline Reveal

This is the technique used by top luxury/fashion sites — text slides up from behind a mask:

```typescript
import { SplitText } from "gsap/SplitText";
gsap.registerPlugin(SplitText);

const headline = document.querySelector(".hero-headline");
const split = SplitText.create(headline, {
  type: "lines, words",
  mask: "lines",       // Each line is clipped
  linesClass: "line",
  wordsClass: "word",
});

gsap.from(split.words, {
  yPercent: 120,
  duration: 1,
  stagger: 0.08,
  ease: "compass",     // Our custom ease
  delay: 0.8,
});
```

**CSS required for masked reveal:**

```css
.hero-headline .line {
  overflow: hidden;
}
```

### 3.4 Gold Shimmer CSS Effect (for headings)

Adapted from CodePen techniques — a subtle moving light across gold text:

```css
.gold-shimmer {
  background: linear-gradient(
    90deg,
    #B8860B 0%,
    #D4AF37 20%,
    #B8860B 39%,
    #FFD700 50%,
    #B8860B 60%,
    #D4AF37 80%,
    #B8860B 100%
  );
  background-size: 200% auto;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: goldShimmer 4s linear infinite;
}

@keyframes goldShimmer {
  to { background-position: 200% center; }
}
```

**Important:** Use this sparingly — on the hero headline and maybe one other accent. Overuse kills the magic.

### 3.5 Compass Emblem — Scroll-Linked Slow Rotation

As the user scrolls down the page, the compass subtly rotates. It should feel almost subliminal:

```typescript
gsap.to(".compass-watermark", {
  rotation: 360,
  ease: "none",
  scrollTrigger: {
    trigger: "body",
    start: "top top",
    end: "bottom bottom",
    scrub: 3,   // 3-second smoothing — feels glacial, intentional
  },
});
```

---

## 4. Section-by-Section Animation Choreography

### 4.1 General Section Reveals

Every content section should use a consistent reveal pattern:

```typescript
// Reusable section reveal
function createSectionReveal(trigger: string) {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger,
      start: "top 75%",
      toggleActions: "play none none reverse",
    },
  });

  tl.from(`${trigger} .section-heading`, {
    y: 40,
    opacity: 0,
    duration: 0.8,
    ease: "power3.out",
  })
  .from(`${trigger} .section-body`, {
    y: 30,
    opacity: 0,
    duration: 0.6,
    ease: "power3.out",
  }, "-=0.4")
  .from(`${trigger} .gold-divider`, {
    scaleX: 0,
    transformOrigin: "left center",
    duration: 0.8,
    ease: "power2.out",
  }, "-=0.3");

  return tl;
}
```

### 4.2 Service Cards — Staggered Cascade

Cards shouldn't all appear at once. They cascade in, each slightly after the last:

```typescript
gsap.from(".service-card", {
  y: 80,
  opacity: 0,
  duration: 0.8,
  stagger: {
    amount: 0.6,    // Total stagger time
    from: "start",
  },
  ease: "power3.out",
  scrollTrigger: {
    trigger: ".services-grid",
    start: "top 70%",
  },
});
```

**Card hover effect (CSS + JS hybrid):**

```css
.service-card {
  transition: transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94),
              box-shadow 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.service-card:hover {
  transform: translateY(-8px);
  box-shadow:
    0 20px 60px rgba(91, 24, 76, 0.12),
    0 4px 16px rgba(212, 175, 55, 0.08);
}

/* Gold top border expands on hover */
.service-card::before {
  content: "";
  position: absolute;
  top: 0;
  left: 50%;
  width: 40px;
  height: 3px;
  background: linear-gradient(90deg, #D4AF37, #FFD700, #D4AF37);
  transform: translateX(-50%);
  transition: width 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.service-card:hover::before {
  width: 100%;
  left: 0;
  transform: translateX(0);
}
```

### 4.3 Methodology Steps — Pinned Horizontal Scroll or Vertical Timeline

**Option A: Pinned stepper (more dramatic)**

The methodology section pins in place while the 4 steps animate through:

```typescript
const steps = gsap.utils.toArray(".method-step");

const tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".methodology-section",
    pin: true,
    scrub: 1,
    start: "top top",
    end: `+=${steps.length * 100}%`,
    anticipatePin: 1,
  },
});

steps.forEach((step, i) => {
  if (i > 0) {
    tl.fromTo(step,
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 0.5 }
    );
  }
  if (i < steps.length - 1) {
    tl.to(step, { opacity: 0, y: -40, duration: 0.5 }, "+=0.5");
  }
});
```

**Option B: Vertical timeline with connecting line animation**

A gold line draws down as you scroll past each step:

```typescript
gsap.to(".timeline-line", {
  scaleY: 1,
  transformOrigin: "top center",
  ease: "none",
  scrollTrigger: {
    trigger: ".methodology-section",
    start: "top 60%",
    end: "bottom 40%",
    scrub: true,
  },
});
```

### 4.4 Differentiators — Counter/Number Animation

For the "20+ years" and "$5M–$20M" stats, animate the numbers counting up:

```typescript
gsap.from(".stat-number", {
  textContent: 0,
  duration: 2,
  ease: "power1.out",
  snap: { textContent: 1 },
  scrollTrigger: {
    trigger: ".differentiators-section",
    start: "top 70%",
  },
});
```

### 4.5 FAQ Accordion — Smooth Height Animation

Don't use `display: none`. Animate `max-height` or use GSAP Flip for smooth open/close:

```typescript
function toggleAccordion(item: HTMLElement) {
  const content = item.querySelector(".faq-answer");
  const isOpen = item.classList.contains("open");

  if (isOpen) {
    gsap.to(content, {
      height: 0,
      opacity: 0,
      duration: 0.4,
      ease: "power2.inOut",
      onComplete: () => item.classList.remove("open"),
    });
  } else {
    item.classList.add("open");
    gsap.fromTo(content,
      { height: 0, opacity: 0 },
      { height: "auto", opacity: 1, duration: 0.5, ease: "power2.out" }
    );
  }
}
```

### 4.6 Closing CTA — Parallax Background + Floating Compass

```typescript
// Subtle parallax on the plum CTA section
gsap.to(".cta-background", {
  yPercent: -15,
  ease: "none",
  scrollTrigger: {
    trigger: ".closing-cta",
    start: "top bottom",
    end: "bottom top",
    scrub: true,
  },
});

// Floating compass emblem
gsap.to(".cta-compass", {
  y: -20,
  rotation: 15,
  duration: 3,
  ease: "sine.inOut",
  yoyo: true,
  repeat: -1,
});
```

---

## 5. Signature Effects (The Wow Moments)

### 5.1 Gold Divider Line Animation

Between sections, a thin gold line draws across:

```css
.gold-divider {
  height: 1px;
  background: linear-gradient(
    90deg,
    transparent,
    #D4AF37 20%,
    #FFD700 50%,
    #D4AF37 80%,
    transparent
  );
  transform-origin: left center;
}
```

```typescript
gsap.from(".gold-divider", {
  scaleX: 0,
  duration: 1.2,
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".gold-divider",
    start: "top 85%",
  },
});
```

### 5.2 Grain/Noise Texture Overlay

Luxury sites almost always have a subtle film grain. It adds depth and prevents the "too clean" digital feel:

```css
.grain-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 9999;
  opacity: 0.03;
  background-image: url("data:image/svg+xml,..."); /* inline noise SVG */
  /* Or use a tiny repeating PNG noise texture */
}
```

**Alternative — CSS-only grain using SVG filter:**

```css
.grain-overlay::before {
  content: "";
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: 9999;
  opacity: 0.04;
  background: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
}
```

### 5.3 Subtle Vignette on Hero

A gentle darkening around the edges of the hero adds cinematic depth:

```css
.hero::after {
  content: "";
  position: absolute;
  inset: 0;
  background: radial-gradient(
    ellipse at center,
    transparent 50%,
    rgba(59, 15, 52, 0.4) 100%
  );
  pointer-events: none;
}
```

### 5.4 Cursor Follower (Optional — Desktop Only)

A subtle gold dot that follows the cursor adds premium feel. Use sparingly:

```typescript
const cursor = document.querySelector(".custom-cursor");

document.addEventListener("mousemove", (e) => {
  gsap.to(cursor, {
    x: e.clientX,
    y: e.clientY,
    duration: 0.5,
    ease: "power2.out",
  });
});

// Expand on hover over interactive elements
document.querySelectorAll("a, button").forEach((el) => {
  el.addEventListener("mouseenter", () => {
    gsap.to(cursor, { scale: 2.5, opacity: 0.5, duration: 0.3 });
  });
  el.addEventListener("mouseleave", () => {
    gsap.to(cursor, { scale: 1, opacity: 1, duration: 0.3 });
  });
});
```

```css
.custom-cursor {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: #D4AF37;
  position: fixed;
  top: 0;
  left: 0;
  pointer-events: none;
  z-index: 10000;
  mix-blend-mode: difference;
  transform: translate(-50%, -50%);
}

@media (pointer: coarse) {
  .custom-cursor { display: none; }
}
```

### 5.5 Sticky Header with Backdrop Blur

```typescript
const header = document.querySelector("header");

ScrollTrigger.create({
  start: "top -80",
  onUpdate: (self) => {
    if (self.direction === 1) {
      header.classList.add("scrolled");
    }
  },
  onToggle: (self) => {
    if (!self.isActive) {
      header.classList.remove("scrolled");
    }
  },
});
```

```css
header {
  position: fixed;
  width: 100%;
  z-index: 100;
  transition: background 0.4s ease, backdrop-filter 0.4s ease;
}

header.scrolled {
  background: rgba(91, 24, 76, 0.85);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-bottom: 1px solid rgba(212, 175, 55, 0.15);
}
```

---

## 6. Key CodePen & Resource References

### Gold & Metallic Text Effects


| Technique                                 | Link                                                                                           |
| ----------------------------------------- | ---------------------------------------------------------------------------------------------- |
| Gold CSS text with gradient + text-shadow | [https://codepen.io/mandymichael/pen/xpLNeV](https://codepen.io/mandymichael/pen/xpLNeV)       |
| Gold shimmer animation (CSS keyframes)    | [https://codepen.io/ponycorn/pen/LYRJOxW](https://codepen.io/ponycorn/pen/LYRJOxW)             |
| Metallic gold + silver with shine sweep   | [https://codepen.io/ueple/pen/vYYNMVJ](https://codepen.io/ueple/pen/vYYNMVJ)                   |
| Gold shimmer with JS delay                | [https://codepen.io/angel_crawford/pen/xxGQbya](https://codepen.io/angel_crawford/pen/xxGQbya) |
| Gold & silver button with shine overlay   | [https://codepen.io/sgenius168/pen/RwVpbrb](https://codepen.io/sgenius168/pen/RwVpbrb)         |


### GSAP Text Animations


| Technique                                  | Link                                                                                         |
| ------------------------------------------ | -------------------------------------------------------------------------------------------- |
| GSAP SplitText — masked line reveal (Osmo) | [https://codepen.io/osmosupply/pen/pvvKezw](https://codepen.io/osmosupply/pen/pvvKezw)       |
| SplitText word reveal with stagger         | [https://codepen.io/shshaw/pen/KXwawQ](https://codepen.io/shshaw/pen/KXwawQ)                 |
| SplitText line reveal (official)           | [https://codepen.io/GreenSock/pen/ExLqopj](https://codepen.io/GreenSock/pen/ExLqopj)         |
| Text reveal with rotation + stagger        | [https://codepen.io/BrunoMarcorio/pen/yLOOdKe](https://codepen.io/BrunoMarcorio/pen/yLOOdKe) |
| Scroll-driven word opacity reveal          | [https://codepen.io/yasingencnet/pen/mdaEGqW](https://codepen.io/yasingencnet/pen/mdaEGqW)   |
| Full GSAP text collection                  | [https://codepen.io/collection/ExBwoK](https://codepen.io/collection/ExBwoK)                 |


### Scroll & Layout Inspiration


| Technique                        | Link                                                                                                                                               |
| -------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| Lenis + GSAP full page demo      | [https://freefrontend.com/code/lenis-smooth-scroll-gsap-page-2026-03-17/](https://freefrontend.com/code/lenis-smooth-scroll-gsap-page-2026-03-17/) |
| GSAP ScrollTrigger examples (57) | [https://freefrontend.com/scroll-trigger-js/](https://freefrontend.com/scroll-trigger-js/)                                                         |
| Lenis GitHub + docs              | [https://github.com/darkroomengineering/lenis](https://github.com/darkroomengineering/lenis)                                                       |
| Next.js + Lenis + GSAP tutorial  | [https://devdreaming.com/blogs/nextjs-smooth-scrolling-with-lenis-gsap](https://devdreaming.com/blogs/nextjs-smooth-scrolling-with-lenis-gsap)     |
| GSAP ScrollTrigger official docs | [https://gsap.com/docs/v3/Plugins/ScrollTrigger/](https://gsap.com/docs/v3/Plugins/ScrollTrigger/)                                                 |


### Luxury/Editorial Web Design Inspiration


| Site                                | Why It Matters                                                                         |
| ----------------------------------- | -------------------------------------------------------------------------------------- |
| Awwwards luxury collection          | [https://www.awwwards.com/websites/luxury/](https://www.awwwards.com/websites/luxury/) |
| Juri Jewelry brand (Awwwards HM)    | Dark + gold palette, editorial type                                                    |
| The Obsidian Assembly (Awwwards HM) | Premium consulting aesthetic                                                           |
| Casper's Caviar (Awwwards HM)       | Luxury product with gold accents                                                       |
| Paul Fredrick (Awwwards)            | Heritage brand, editorial photography                                                  |


### CSS Technique References


| Technique                            | Link                                                                                                                                                                             |
| ------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| CSS shine/shimmer effects collection | [https://medium.com/@forfrontendofficial/14-css-shine-effects-for-frontend-3194b796c174](https://medium.com/@forfrontendofficial/14-css-shine-effects-for-frontend-3194b796c174) |
| Metallic CSS effects collection      | [https://speckyboy.com/metallic-effects-css-javascript/](https://speckyboy.com/metallic-effects-css-javascript/)                                                                 |
| CSS hero section examples (38)       | [https://freefrontend.com/css-hero-sections/](https://freefrontend.com/css-hero-sections/)                                                                                       |
| Gold text effect tutorial + CodePen  | [https://texteffects.dev/posts/gold-text-effect](https://texteffects.dev/posts/gold-text-effect)                                                                                 |


---

## 7. Performance & Accessibility Guardrails

### 7.1 Reduced Motion

Always respect user preferences:

```typescript
const prefersReducedMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)"
).matches;

if (prefersReducedMotion) {
  // Skip all scroll animations — just show everything
  gsap.globalTimeline.timeScale(100); // Instant
  // Or selectively disable
  ScrollTrigger.getAll().forEach((st) => st.kill());
}
```

**In CSS:**

```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

### 7.2 Performance Rules

- All GSAP animations should target `transform` and `opacity` only (GPU-composited)
- Never animate `width`, `height`, `top`, `left`, `margin`, or `padding`
- Use `will-change: transform` sparingly and only on elements about to animate
- Lenis `lerp` of 0.08–0.1 provides luxury smoothness without feeling laggy
- Kill ScrollTriggers on route change in Next.js (use `gsap.context()`)
- Lazy load everything below the fold
- Test on mobile — disable smooth scroll on touch devices if performance suffers:

```typescript
const isTouchDevice = "ontouchstart" in window;
if (!isTouchDevice) {
  initSmoothScroll();
}
```

### 7.3 Mobile Considerations

- Pinned sections can be problematic on iOS — test thoroughly or convert to simple fade reveals on mobile
- `matchMedia` for responsive GSAP:

```typescript
ScrollTrigger.matchMedia({
  "(min-width: 768px)": function () {
    // Desktop-only animations (pinning, parallax, etc.)
  },
  "(max-width: 767px)": function () {
    // Simpler mobile animations
  },
});
```

---

## 8. Recommended Package Versions

```json
{
  "gsap": "^3.13.0",
  "lenis": "^1.3.21",
  "framer-motion": "^11.x",
  "@gsap/react": "^2.x"
}
```

**Note on GSAP licensing:** SplitText, CustomEase, ScrollSmoother, and MorphSVG require a Club GSAP membership (~$99/year). ScrollTrigger is free. For a client site of this calibre, Club GSAP is worth it — SplitText alone transforms the text animations from "nice" to "luxury editorial."

---

## 9. Implementation Priority Order

Build these in order for maximum impact with least risk:

1. **Lenis smooth scroll** — Instant upgrade, minimal code
2. **Hero sequence** — Compass draw + headline reveal + CTA stagger
3. **Section fade-up reveals** — Consistent pattern across all pages
4. **Gold divider animations** — Small detail, big polish
5. **Service card stagger + hover effects** — Interactive engagement
6. **Sticky header with blur** — Professional UX pattern
7. **Methodology stepper** — Choose pinned or timeline approach
8. **Gold shimmer on key headings** — Selective use only
9. **Film grain overlay** — The finishing touch
10. **Custom cursor** — Last — only if everything else is solid first

