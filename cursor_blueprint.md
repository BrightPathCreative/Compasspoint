# Cursor Blueprint: Amelia Ghofrany & CompassPoint Advisory
### Full Site Specification for Next.js + Tailwind CSS + GSAP

**Prepared by:** Manus AI
**Date:** March 2026
**Purpose:** This document is the complete, production-ready specification for building the redesigned digital presence for Amelia Ghofrany and CompassPoint Advisory. It is structured for direct ingestion by Cursor AI. All five deliverables are included: site content outline, component structure guide, layout specifications, section hierarchy, and GSAP animation cues.

---

## Part 1: Global Design System

### 1.1. Technology Stack

The site should be built on **Next.js (App Router)** with **Tailwind CSS** for styling. Animations are handled exclusively by **GSAP** using the `@gsap/react` package. Icons should use **Lucide React** for consistency and minimal bundle size. Fonts are loaded via **Google Fonts** (Playfair Display and Inter). Deployment target is **Vercel**.

### 1.2. Colour Palette

The entire site operates on a "Dark Luxury" theme, extending the existing CompassPoint brand mark (gold compass rose on deep maroon) into a full digital design system.

| Token Name | Hex Value | Usage |
|---|---|---|
| `bg-primary` | `#0A0A0A` | Main page background |
| `bg-secondary` | `#141414` | Cards, alternate section backgrounds |
| `bg-accent` | `#7A1B22` | CTA section backgrounds, active nav states |
| `accent-gold` | `#D4AF37` | Primary CTA buttons, key icons, thin dividers |
| `accent-gold-light` | `#E8C84A` | Gold hover states |
| `text-primary` | `#F3F4F6` | Headings, high-contrast text |
| `text-secondary` | `#9CA3AF` | Body copy, supporting text, labels |
| `border-subtle` | `#2A2A2A` | Subtle card borders, section dividers |

### 1.3. Typography

The type system pairs a refined serif for authority with a modern sans-serif for clarity. Both fonts should be loaded from Google Fonts.

| Role | Font | Weights | Usage |
|---|---|---|---|
| Display / Headings | Playfair Display | 400, 600, 700 | H1, H2, H3, pull quotes |
| Body / UI | Inter | 300, 400, 500, 600 | Body copy, nav, buttons, labels |

**Type Scale (Tailwind-aligned):**

| Element | Class Equivalent | Size |
|---|---|---|
| H1 (Hero Headline) | `text-5xl md:text-7xl` | 48px / 72px |
| H2 (Section Heading) | `text-3xl md:text-5xl` | 30px / 48px |
| H3 (Card/Sub Heading) | `text-xl md:text-2xl` | 20px / 24px |
| Body Large | `text-lg` | 18px |
| Body Default | `text-base` | 16px |
| Label / Caption | `text-sm` | 14px |

### 1.4. Spacing & Layout

The site uses a 12-column grid with a maximum content width of `1280px` (`max-w-7xl`), centred with horizontal padding of `px-6 md:px-12 lg:px-24`. Sections use `py-24 md:py-32` for generous vertical breathing room, which is a hallmark of premium advisory site design. The overall feel should be spacious and unhurried.

---

## Part 2: Component Structure Guide

All components live in `/src/components/`. Each section of the page has a corresponding component file. Global components are in `/src/components/global/` and section components in `/src/components/sections/`.

### 2.1. Global Components

**`<Navbar />`** (`/src/components/global/Navbar.tsx`)

The navigation bar is sticky and starts fully transparent. On scroll past 80px, it transitions to a backdrop-blurred, semi-transparent dark background (`bg-black/80 backdrop-blur-md`) with a subtle bottom border (`border-b border-border-subtle`). The left side contains the CompassPoint logo (SVG). The right side contains navigation links (About, Services, Methodology, Testimonials) and a gold "Book a Consultation" button. On mobile, the nav collapses to a hamburger menu with a full-screen overlay drawer. The active link state uses a gold underline.

**`<Footer />`** (`/src/components/global/Footer.tsx`)

The footer uses the brand maroon (`bg-accent`) as its background. It is divided into three columns: brand identity (logo, short positioning statement, social links), quick links (navigation), and contact/newsletter (email address, a minimal newsletter signup form). The copyright line sits in a darker strip at the very bottom.

**`<Button />`** (`/src/components/global/Button.tsx`)

This is a reusable component with two variants. The **Primary** variant uses a gold background (`bg-accent-gold`) with black text and a hover state that brightens the gold and scales the button slightly (`scale-105`). The **Secondary** variant is transparent with a gold border and gold text, transitioning to a filled gold background on hover. Both variants include a subtle `transition-all duration-300` for smoothness.

**`<SectionWrapper />`** (`/src/components/global/SectionWrapper.tsx`)

A utility wrapper component that applies consistent `max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-24 md:py-32` to every section. All section components should be wrapped in this.

### 2.2. Section Components

**`<HeroSection />`** (`/src/components/sections/HeroSection.tsx`)

Full viewport height (`min-h-screen`). Uses a full-bleed background: either a high-quality, darkened photograph of a strategic setting (boardroom, compass, abstract financial imagery) or a deep radial gradient from `#1A0A0C` (dark maroon-tinted black) to `#0A0A0A`. Content is centred both vertically and horizontally. Contains the H1 headline, subheadline, two CTA buttons, and a subtle scroll indicator arrow at the bottom.

**`<ProblemSection />`** (`/src/components/sections/ProblemSection.tsx`)

Two-column grid on desktop (text left, abstract graphic or animated SVG right). Uses `bg-secondary` background to create a subtle visual break from the hero. Contains an H2 heading and two to three paragraphs of body copy that articulate the core problem Amelia's clients face.

**`<ServicesSection />`** (`/src/components/sections/ServicesSection.tsx`)

Centred H2 heading, followed by a three-column card grid on desktop and a single column on mobile. Each card is a `<ServiceCard />` component. The section background is `bg-primary`.

**`<ServiceCard />`** (`/src/components/sections/ServiceCard.tsx`)

Background `bg-secondary`, rounded corners (`rounded-xl`), and a subtle border (`border border-border-subtle`). On hover, the top border transitions to gold (`border-t-2 border-accent-gold`). Contains a Lucide icon in gold, an H3 title, a short paragraph description, and a ghost "Learn More" link with a right-pointing arrow.

**`<AboutSection />`** (`/src/components/sections/AboutSection.tsx`)

Two-column grid on desktop: text and credentials on the left, a high-quality professional portrait of Amelia on the right. The image should have a subtle gold-tinted border or frame. Below the text, a row of greyscale client/company logos (Telstra, Qantas, etc.) fades in on scroll. The background is `bg-secondary`.

**`<MethodologySection />`** (`/src/components/sections/MethodologySection.tsx`)

This is the most complex section. On desktop, it uses a pinned layout: the left column (containing the H2 heading and a short description) is pinned via GSAP ScrollTrigger while the right column (containing the four methodology steps) scrolls normally. Each step has a large gold step number, an H3 title, and a paragraph description. On mobile, it collapses to a standard vertical timeline.

**`<TestimonialsSection />`** (`/src/components/sections/TestimonialsSection.tsx`)

Centred H2 heading, followed by a masonry grid (two columns on desktop, one on mobile) of quote cards. Each card has a large gold quotation mark, the quote text, the client's name, title, and company. Background is `bg-primary`.

**`<CtaSection />`** (`/src/components/sections/CtaSection.tsx`)

Full-width section with `bg-accent` (deep maroon) background. Centred H2 heading, a short supporting paragraph, and the primary gold CTA button. This section should feel like a confident, warm close to the page narrative.

---

## Part 3: Full Site Content Outline

This section contains the actual copy for each section of the site, corrected and elevated from the existing website content.

### Section 1: Hero

**Headline (H1):** Strategic Clarity. Sustainable Growth.

**Subheadline:** Enterprise-grade advisory and investment strategy for ambitious SMEs and founders. Guided by Amelia Ghofrany, CompassPoint Advisory helps you navigate complexity and build businesses that are ready for the next stage.

**Primary CTA:** Book a Strategy Session

**Secondary CTA:** Explore Our Services

### Section 2: The Problem

**Heading (H2):** Scaling a business shouldn't mean sacrificing control.

**Body:** Many founders reach a point where passion and momentum outpace structure and strategy. The decisions become more complex, the stakes grow higher, and the gap between where you are and where you need to be starts to feel wider. That is precisely where CompassPoint Advisory comes in. We bridge the space between entrepreneurial vision and institutional execution, bringing the rigour of enterprise strategy to the businesses that need it most.

### Section 3: Core Services

**Section Heading (H2):** Our Expertise

**Card 1: Strategic Advisory**
Icon: Compass (Lucide)
Description: We work alongside founders and leadership teams to build the strategic foundations that support sustainable scale. From business model refinement and operational efficiency to market positioning and growth frameworks, we bring clarity to complexity.

**Card 2: Investment Readiness**
Icon: TrendingUp (Lucide)
Description: Whether you are preparing for your first raise or a Series B, we help you tell your story with precision. Our investment readiness service covers pitch deck development, financial modelling, due diligence preparation, and ongoing investor relations support.

**Card 3: Executive Coaching**
Icon: Users (Lucide)
Description: Leadership is the single greatest lever in any business. Amelia works directly with founders and executives in a structured 1:1 coaching engagement, covering high-stakes decision-making, leadership development, and navigating the personal and professional challenges of building at scale.

### Section 4: About Amelia

**Heading (H2):** Guiding Your True North.

**Body Paragraph 1:** Amelia Ghofrany founded CompassPoint Advisory after more than two decades operating at the intersection of corporate strategy and entrepreneurial growth. Her career has spanned some of Australia's most recognised organisations, including Telstra and Qantas, as well as a diverse portfolio of high-growth startups across technology, professional services, and consumer sectors.

**Body Paragraph 2:** She is not a consultant who observes from the outside. Amelia has sat in the founder's chair, navigated board rooms, and made the difficult calls that define a business's trajectory. That lived experience is what she brings to every client engagement, combining the analytical rigour of enterprise strategy with the practical empathy of someone who has built and scaled businesses herself.

**Body Paragraph 3:** As an active investor and advisor, Amelia brings a network and perspective that extends well beyond the advisory engagement itself. Her clients gain not just a strategist, but a genuine partner in their growth.

### Section 5: The Methodology

**Heading (H2):** How We Work

**Step 1: Discovery and Audit**
We begin every engagement with a structured discovery process. We examine your business model, your market position, your team, your financials, and your goals. This gives us a clear, unbiased picture of where you are and what is standing between you and where you want to be.

**Step 2: Strategic Roadmap**
From the discovery findings, we build a clear, prioritised strategic roadmap. This is not a theoretical document; it is a practical guide that your team can execute against, with defined milestones, owners, and success metrics.

**Step 3: Execution and Alignment**
Strategy without execution is just planning. We work alongside your team during the implementation phase, providing guidance, accountability, and course corrections as the plan meets reality. We help you build the internal capability to execute with confidence.

**Step 4: Ongoing Optimisation**
The best strategies evolve. We maintain an ongoing advisory relationship with our clients, reviewing progress, adapting the roadmap as conditions change, and ensuring that the momentum built in the early phases is sustained over the long term.

### Section 6: Testimonials

**Section Heading (H2):** What Our Clients Say

*Note: Placeholder copy below. Replace with real client testimonials before launch.*

**Quote 1:** "Amelia helped us see our business with fresh eyes. Within six months of working with CompassPoint, we had a clear investment thesis, a refined pitch, and our first term sheet. The clarity she brought was transformative." - Sarah M., Founder, [Tech Startup]

**Quote 2:** "The strategic roadmap Amelia built for us became the operating document for our entire leadership team. It was the first time we all felt aligned on where we were going and how we were going to get there." - James T., CEO, [Professional Services Firm]

**Quote 3:** "I came to Amelia feeling overwhelmed and leaving every session feeling equipped. Her coaching is direct, practical, and deeply informed by real experience. She doesn't tell you what you want to hear; she tells you what you need to hear." - Priya K., Founder, [Consumer Brand]

### Section 7: Final CTA

**Heading (H2):** Ready to chart your course?

**Body:** Every significant business journey begins with a single, clear decision. If you are ready to bring strategic rigour and experienced guidance to your next stage of growth, let's talk.

**Primary CTA:** Schedule Your Introductory Call

---

## Part 4: Layout Specifications

### 4.1. Navbar Layout

The navbar is a fixed, full-width bar with a height of `64px` on desktop and `56px` on mobile. The logo sits at the far left. Navigation links are spaced evenly in the centre on desktop and hidden on mobile. The "Book a Consultation" button sits at the far right. On mobile, a hamburger icon replaces the links and button, opening a full-screen overlay drawer with large, vertically stacked navigation links and the CTA button at the bottom.

### 4.2. Hero Section Layout

The hero is a full-viewport-height section (`min-h-screen`) with content centred both horizontally and vertically using flexbox (`flex flex-col items-center justify-center`). The text content is constrained to a maximum width of `max-w-3xl` to ensure readability. The H1 headline uses `text-5xl md:text-7xl` with `font-playfair font-bold`. The subheadline uses `text-lg md:text-xl text-text-secondary max-w-2xl`. The two CTA buttons sit side by side on desktop (with `gap-4`) and stack vertically on mobile. A subtle scroll indicator (animated down arrow) is absolutely positioned at the bottom centre of the section.

### 4.3. Services Section Layout

The section heading is centred (`text-center`). The three service cards use a CSS grid: `grid grid-cols-1 md:grid-cols-3 gap-6`. Each card has `p-8` internal padding, a minimum height of `320px`, and uses flexbox internally to stack the icon, title, description, and link vertically with `justify-between` to push the link to the bottom.

### 4.4. About Section Layout

On desktop, this section uses a two-column grid (`grid grid-cols-2 gap-16 items-center`). The text column (left) contains the heading, three body paragraphs, and a row of client logos. The image column (right) contains a portrait photograph with a subtle gold border or shadow treatment. On mobile, the image appears above the text in a single column. The client logo row uses `flex flex-wrap gap-8 items-center opacity-50` to render them in greyscale at reduced opacity, creating a subtle trust signal without visual clutter.

### 4.5. Methodology Section Layout

On desktop, this section uses a two-column sticky layout. The left column (`sticky top-32 h-fit`) contains the H2 heading and a short description. The right column contains the four steps, each in its own block with `pb-24` padding to create scroll space for the pin effect. Each step uses a large gold step number (`text-6xl font-playfair text-accent-gold opacity-20`) as a background element, with the H3 title and paragraph overlaid. On mobile, the sticky behaviour is disabled and the section renders as a standard vertical list.

### 4.6. CTA Section Layout

This section is full-width with `bg-accent` (maroon) background. Content is centred with a maximum width of `max-w-2xl`. The H2 heading, body paragraph, and primary button are stacked vertically with `gap-6`. The section uses `py-32` for generous vertical padding to give it visual weight as the final section before the footer.

---

## Part 5: GSAP Animation Cues

**Critical Implementation Note for Cursor:** All GSAP code must use the `@gsap/react` package and the `useGSAP()` hook. Do not use `useEffect` directly for GSAP animations. Register all plugins at the top of the relevant component file using `gsap.registerPlugin(ScrollTrigger)`. For Next.js App Router, add `"use client"` at the top of any component that uses GSAP.

### 5.1. Global: Smooth Scrolling

Implement Lenis (a lightweight smooth scroll library) as a global provider in the root layout. This gives the site a premium, fluid scroll feel that is characteristic of high-end advisory and luxury brand sites. Lenis integrates cleanly with GSAP's ScrollTrigger via the `lenis.on('scroll', ScrollTrigger.update)` pattern.

```
// In /src/app/layout.tsx or a dedicated LenisProvider component
import Lenis from '@studio-freight/lenis'
// Initialise Lenis and connect to GSAP ScrollTrigger ticker
```

### 5.2. Navbar: Scroll-Triggered Background

```typescript
// In Navbar.tsx
useGSAP(() => {
  ScrollTrigger.create({
    start: "top -80",
    onEnter: () => navbar.classList.add("scrolled"),
    onLeaveBack: () => navbar.classList.remove("scrolled"),
  });
});
// CSS: .scrolled { background: rgba(0,0,0,0.8); backdrop-filter: blur(12px); }
```

### 5.3. Hero Section: Staggered Page Load Reveal

This animation fires once on page load. The headline words, subheadline, and buttons each animate in sequentially, creating a cinematic opening sequence.

```typescript
// In HeroSection.tsx
useGSAP(() => {
  const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

  // Split headline into words and animate each word
  tl.from(".hero-headline .word", {
    y: 80,
    opacity: 0,
    duration: 1,
    stagger: 0.08,
  })
  .from(".hero-subheadline", {
    y: 30,
    opacity: 0,
    duration: 0.8,
  }, "-=0.4")
  .from(".hero-cta-group", {
    y: 20,
    opacity: 0,
    duration: 0.6,
  }, "-=0.3")
  .from(".hero-scroll-indicator", {
    opacity: 0,
    duration: 0.5,
  }, "-=0.2");
}, { scope: containerRef });
```

### 5.4. Services Section: Staggered Card Reveal on Scroll

```typescript
// In ServicesSection.tsx
useGSAP(() => {
  gsap.from(".service-card", {
    y: 80,
    opacity: 0,
    duration: 0.8,
    stagger: 0.2,
    ease: "back.out(1.4)",
    scrollTrigger: {
      trigger: ".services-grid",
      start: "top 80%",
      toggleActions: "play none none none",
    },
  });
}, { scope: containerRef });
```

### 5.5. About Section: Parallax Image and Text Slide-In

```typescript
// In AboutSection.tsx
useGSAP(() => {
  // Parallax on the portrait image
  gsap.to(".about-image", {
    yPercent: -15,
    ease: "none",
    scrollTrigger: {
      trigger: ".about-section",
      start: "top bottom",
      end: "bottom top",
      scrub: true,
    },
  });

  // Text block slides in from the left
  gsap.from(".about-text", {
    x: -60,
    opacity: 0,
    duration: 1,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".about-text",
      start: "top 75%",
    },
  });

  // Client logos fade in with stagger
  gsap.from(".client-logo", {
    opacity: 0,
    y: 20,
    duration: 0.5,
    stagger: 0.1,
    scrollTrigger: {
      trigger: ".client-logos-row",
      start: "top 85%",
    },
  });
}, { scope: containerRef });
```

### 5.6. Methodology Section: Pinned Left Column

This is the most sophisticated animation on the page. The left column (heading and description) is pinned in place while the right column (the four steps) scrolls past it. The pin is released when the last step exits the viewport.

```typescript
// In MethodologySection.tsx
useGSAP(() => {
  // Only apply pin on desktop (min-width: 768px)
  const mm = gsap.matchMedia();

  mm.add("(min-width: 768px)", () => {
    ScrollTrigger.create({
      trigger: ".methodology-section",
      start: "top top",
      end: "bottom bottom",
      pin: ".methodology-left-column",
      pinSpacing: false,
    });

    // Animate each step as it enters the viewport
    gsap.utils.toArray(".methodology-step").forEach((step: any) => {
      gsap.from(step, {
        opacity: 0,
        x: 40,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: step,
          start: "top 70%",
        },
      });
    });
  });
}, { scope: containerRef });
```

### 5.7. Testimonials Section: Staggered Card Reveal

```typescript
// In TestimonialsSection.tsx
useGSAP(() => {
  gsap.from(".testimonial-card", {
    y: 60,
    opacity: 0,
    duration: 0.7,
    stagger: 0.15,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".testimonials-grid",
      start: "top 80%",
    },
  });
}, { scope: containerRef });
```

### 5.8. CTA Section: Background Scale Reveal

```typescript
// In CtaSection.tsx
useGSAP(() => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".cta-section",
      start: "top 75%",
    },
  });

  tl.from(".cta-bg-fill", {
    scaleX: 0,
    transformOrigin: "left center",
    duration: 1,
    ease: "power3.inOut",
  })
  .from(".cta-content", {
    opacity: 0,
    y: 30,
    duration: 0.7,
    ease: "power2.out",
  }, "-=0.3");
}, { scope: containerRef });
```

### 5.9. Service Cards: Hover Micro-Interaction

```typescript
// In ServiceCard.tsx - using contextSafe for interaction-triggered animations
const { contextSafe } = useGSAP({ scope: cardRef });

const onMouseEnter = contextSafe(() => {
  gsap.to(cardRef.current, {
    y: -8,
    duration: 0.3,
    ease: "power2.out",
  });
  gsap.to(".card-icon", {
    scale: 1.15,
    color: "#D4AF37",
    duration: 0.3,
  });
});

const onMouseLeave = contextSafe(() => {
  gsap.to(cardRef.current, {
    y: 0,
    duration: 0.3,
    ease: "power2.out",
  });
  gsap.to(".card-icon", {
    scale: 1,
    duration: 0.3,
  });
});
```

---

## Part 6: File Structure Reference

```
/src
  /app
    layout.tsx          # Root layout: fonts, Lenis provider, metadata
    page.tsx            # Home page: assembles all section components
    /about              # Optional: dedicated About page
    /services           # Optional: dedicated Services page
  /components
    /global
      Navbar.tsx
      Footer.tsx
      Button.tsx
      SectionWrapper.tsx
    /sections
      HeroSection.tsx
      ProblemSection.tsx
      ServicesSection.tsx
      ServiceCard.tsx
      AboutSection.tsx
      MethodologySection.tsx
      TestimonialsSection.tsx
      CtaSection.tsx
  /lib
    gsap-config.ts      # Central GSAP plugin registration
    lenis.ts            # Lenis smooth scroll initialisation
  /styles
    globals.css         # Tailwind base, custom CSS variables, font declarations
```

---

*End of Blueprint. This document is complete and formatted for direct use in Cursor AI to build the Amelia Ghofrany / CompassPoint Advisory website.*
