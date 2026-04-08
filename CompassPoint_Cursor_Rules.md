# CompassPoint Advisory — Cursor Rules (Multipage Website)

> **Project:** CompassPoint Advisory — compasspointadvisory.com.au
> **Client:** Amelia Ghofrany
> **Stack:** Next.js 14+ (App Router), TypeScript, Tailwind CSS, Framer Motion
> **Last Updated:** April 2026

---

## 1. Project Overview

CompassPoint Advisory is a Melbourne-based strategic consulting firm for Australian SMEs and startups ($5M–$20M revenue). The website must project **premium authority**, **warmth**, and **strategic clarity** — positioning the firm as a Fortune 500-grade partner purpose-built for growing businesses.

**Tagline:** *Guiding Businesses Toward Clarity, Growth, and Transformation*
**Hero Headline:** *Big Business Thinking. Built for Yours.*

---

## 2. Brand Design System

### 2.1 Colour Palette

```css
:root {
  /* Core */
  --royal-plum: #5B184C;         /* Primary — backgrounds, banners, hero sections */
  --metallic-gold: #D4AF37;      /* Accent — logo, highlights, headings */
  --bright-gold: #FFD700;        /* Highlight — gradient highlight in gold texture */
  --antique-gold: #B8860B;       /* Shadow — gradient depth, embossed finish */
  --charcoal: #2E2E2E;           /* Secondary — body text, icons */
  --soft-ivory: #F6F1E7;         /* Neutral — backgrounds, contrast sections */

  /* Extended (for UI elements) */
  --plum-light: #7A2868;         /* Hover states on plum */
  --plum-dark: #3E0F34;          /* Deeper plum for footer/dark sections */
  --ivory-warm: #FAF6EE;         /* Lighter ivory for cards */
  --gold-gradient: linear-gradient(135deg, #D4AF37 0%, #FFD700 50%, #B8860B 100%);
  --white: #FFFFFF;
}
```

**Rules:**
- Hero and feature sections use `--royal-plum` background with `--metallic-gold` or `--soft-ivory` text.
- Body/content sections use `--soft-ivory` or `--white` background with `--charcoal` text.
- Gold is used for accents, dividers, icons, and CTAs — never as a large background fill.
- Maintain WCAG AA contrast minimum (4.5:1 for body text, 3:1 for large text/headings).
- Plum-on-ivory and ivory-on-plum are the two primary section treatments. Alternate them for rhythm.

### 2.2 Typography

```css
/* Import from Google Fonts */
@import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;700&family=Cormorant+Garamond:wght@400;700&family=Lato:wght@300;400;700&family=Montserrat:wght@400;500;600&display=swap');

:root {
  --font-display: 'Cinzel', serif;              /* Logo wordmark, hero headings, section titles */
  --font-heading: 'Cormorant Garamond', serif;   /* H2, H3 headings */
  --font-body: 'Lato', sans-serif;               /* Body copy, paragraphs, nav links */
  --font-accent: 'Montserrat', sans-serif;        /* CTAs, captions, labels, metadata */
}
```

**Type Scale (desktop):**
| Element | Font | Weight | Size | Line Height | Transform |
|---------|------|--------|------|-------------|-----------|
| Hero H1 | Cinzel | 700 | 48–56px | 1.15 | Uppercase |
| Section H2 | Cormorant Garamond | 700 | 36–40px | 1.2 | Title Case |
| Card H3 | Cormorant Garamond | 700 | 24–28px | 1.3 | Title Case |
| Body | Lato | 400 | 16–18px | 1.7 | Sentence case |
| Small/Caption | Montserrat | 500 | 13–14px | 1.5 | Uppercase tracking 0.08em |
| CTA Button | Montserrat | 600 | 14–16px | 1 | Uppercase tracking 0.1em |
| Nav Links | Lato | 400 | 15px | 1 | Title Case |

**Rules:**
- Never use more than 2 font families on a single page view.
- Cinzel is reserved for hero-level headings and the wordmark only.
- Body text must always be `--charcoal` on light backgrounds or `--soft-ivory` on dark backgrounds.
- Minimum body font size: 16px.

### 2.3 Logo Usage

- **Primary logo:** Gold compass emblem above "COMPASSPOINT ADVISORY" wordmark.
- **Minimum clear space:** Equal to the height of the "C" in COMPASSPOINT on all sides.
- **Minimum size:** 150px height digital, 2.5cm print.
- **File references:** Use `/public/images/logo-full.png` for primary, `/public/images/compass-icon.png` for favicon/emblem only.
- **Do not:** Stretch, rotate, recolour, add shadows, place on busy/low-contrast backgrounds.
- On plum backgrounds: use gold logo.
- On white/ivory backgrounds: use gold logo or plum wordmark variant.

### 2.4 Imagery & Photography

- Warm-toned, soft highlights — avoid cold/blue-tinted stock.
- Subjects: directional metaphors (compass, horizon, road ahead, skyline).
- People: confident, approachable, mid-action. Not staged or overly corporate.
- Optional filters: subtle gold tint or plum overlay at 20–30% opacity.
- Prefer Melbourne/Australian imagery where possible.

### 2.5 UI Components

**Buttons:**
```
Primary CTA → gold background (#D4AF37), plum text (#5B184C), Montserrat SemiBold uppercase
  Hover: brighten to #FFD700, slight scale(1.02)
Secondary CTA → transparent, gold 1.5px border, gold text
  Hover: gold fill with plum text
Ghost CTA → no border, gold text with arrow →, underline on hover
```

**Dividers:**
- Use 1px `--metallic-gold` lines as section dividers.
- Compass rose icon can be used as a decorative divider between major sections.

**Cards:**
- Ivory or white background, subtle shadow (`0 4px 24px rgba(91,24,76,0.08)`).
- Gold top-border accent (3px).
- Heading in Cormorant Garamond, body in Lato.

**Icons:**
- Line-style icons, 1.5px stroke weight, gold colour on dark backgrounds, plum on light.
- Use Lucide React or Phosphor Icons for consistency.

---

## 3. Site Architecture

```
/                          → Home (single-page style with sectioned scroll)
/about                     → About Amelia & CompassPoint
/services                  → Services overview + individual service detail
/services/[slug]           → Individual service pages (7 services)
/methodology               → How We Work (4-step process)
/faq                       → FAQ page
/contact                   → Contact + Calendly embed
/blog                      → Blog listing (future)
/blog/[slug]               → Blog post (future)
/privacy-policy            → Privacy Policy
/terms                     → Terms of Service
```

### Service Slugs:
1. `/services/business-strategy-consulting`
2. `/services/operations-process-optimisation`
3. `/services/change-leadership-culture-transformation`
4. `/services/ai-digital-transformation-consulting`
5. `/services/executive-coaching`
6. `/services/on-demand-advisory`
7. `/services/growth-accelerator-workshop`

---

## 4. Page-by-Page Content & Layout

### 4.1 Home Page (`/`)

**Sections in order:**

1. **Hero**
   - Full-viewport plum background
   - Gold compass emblem (animated subtle rotation or pulse on load)
   - H1: "Big Business Thinking. Built for Yours."
   - Subheadline: "Strategic consulting for Australian SMEs and Startups ready to grow smarter, scale faster, and lead with confidence."
   - Two CTAs: "Book a Free Discovery Call" (primary) | "Explore Our Services" (secondary)
   - Calendly link: `https://calendly.com/ameliaghofrany`

2. **Intro / Value Proposition**
   - Ivory background
   - Medium headline: "Strategic Clarity. Sustainable Growth."
   - Body: "CompassPoint Advisory partners with Australian small and medium businesses and startups to unlock the strategy, structure, and systems that ambitious founders need — without the corporate price tag."

3. **About Snapshot**
   - H2: "About CompassPoint Advisory — Melbourne-Based Business Consultants for Australian SMEs"
   - Condensed version of about page content (2–3 paragraphs max)
   - CTA: "Learn More About Us →"

4. **Services Overview**
   - H2: "Consulting and Advisory Services for Growing Australian Businesses"
   - Intro: "Every engagement with CompassPoint Advisory is tailored to your business, your industry, and your goals. Here's how we work with SMEs across Australia."
   - Grid/cards for 7 services (number + title + one-line summary + "Learn More →")

5. **Methodology Preview**
   - H2: "How We Work"
   - Visual 4-step process (horizontal on desktop, vertical on mobile)
   - Steps: Discovery & Audit → Strategic Roadmap → Execution & Alignment → Ongoing Optimisation
   - CTA: "See Our Full Methodology →"

6. **Why CompassPoint (Differentiators)**
   - H2: "Why Australian SMEs Choose CompassPoint Advisory"
   - Intro paragraph: "We're not a generalist consulting firm. We're not a freelance marketplace. And we're not a coaching program that hands you a workbook and wishes you luck. We are a dedicated strategic partner — one that rolls up its sleeves, learns your business deeply, and works alongside you to drive real, measurable outcomes."
   - 5 differentiators displayed as icon + title + description:
     1. Enterprise Experience, SME Focus — 20+ years of senior corporate expertise, now exclusively for SMEs
     2. Results-First, Not Hours-First — Every project scoped around your outcomes, not billing targets
     3. AI-Ready Advisory — We stay at the leading edge of AI and digital transformation so you don't have to
     4. Built for the $5M–$20M Business — Designed around the specific challenges of this growth stage
     5. Melbourne-Based, Nationally Active — In-person, remote, or hybrid across Australia

7. **Testimonials** (placeholder)
   - H2: "What Our Clients Say"
   - Design the section with placeholder cards (TBA — client will supply)

8. **Closing CTA**
   - Plum background section
   - H2: "Ready to Grow Your Business with Confidence?"
   - Body: "Whether you're navigating a growth inflection point, looking to sharpen your strategy, or exploring how AI can future-proof your operations — CompassPoint Advisory is your trusted partner."
   - CTA: "Book Your Free Discovery Call →"
   - Subtext: "Confidential. No sales pressure. Just straight-talking strategic advice."

9. **Footer**
   - Dark plum background
   - Logo, nav links, contact info, Calendly link
   - Social links (LinkedIn primarily)
   - © 2026 CompassPoint Advisory Pty Ltd. All rights reserved.
   - Links to Privacy Policy and Terms

---

### 4.2 About Page (`/about`)

**Key Content Blocks:**

- H1: "About CompassPoint Advisory"
- Full about copy (see Section 1.2 from content doc)
- Founder bio section with photo placeholder for Amelia Ghofrany
- Credentials: IBM, Fujitsu, DXC Technology, Bupa — 20+ years
- Vision and Mission statements
- "Scaling a business shouldn't mean sacrificing control" section
- CTA to book discovery call

---

### 4.3 Services Page (`/services`)

- H1: "Consulting and Advisory Services for Growing Australian Businesses"
- Intro paragraph
- 7 service cards in a stacked or grid layout, each with:
  - Number badge (01–07)
  - Service title
  - Lead question (italic)
  - Description paragraph
  - "Best for:" tags
  - CTA to individual service page

---

### 4.4 Individual Service Pages (`/services/[slug]`)

Each service page should include:
- H1: Service title
- Lead question as subheading
- Full description
- "Best for" section with tags/pills
- Related services sidebar or bottom section
- CTA: Book a Discovery Call

**Service Content:**

**01 — Business Strategy Consulting**
- Question: "Is your business growing — but without a clear plan for where it's heading?"
- Body: "We work with SME founders and leadership teams to build future-ready strategies grounded in market insight, competitive positioning, and financial discipline. From annual planning to three-year growth roadmaps, we help you define where you're going and exactly how to get there."
- Best for: Founders preparing to scale | Businesses entering new markets | Leadership teams needing alignment

**02 — Operations and Process Optimisation**
- Question: "Are inefficiencies quietly costing your business time and money?"
- Body: "We map, assess, and redesign your core business processes to eliminate waste, reduce cost, and create the operational foundations your business needs to scale. We also identify where AI and automation can replace manual effort — freeing your team for higher-value work."
- Best for: Businesses experiencing growing pains | Teams stretched too thin | Owners preparing for growth or sale

**03 — Change Leadership and Culture Transformation**
- Question: "Is your team struggling to keep up with the pace of change?"
- Body: "Change fails when people are left behind. We guide SME leaders through complex transformations — restructures, technology rollouts, culture shifts — with a human-centred approach that delivers measurable results and builds lasting capability."
- Best for: Businesses implementing new technology | Post-merger integration | Rebuilding team culture

**04 — AI and Digital Transformation Consulting**
- Question: "Not sure how AI fits into your business — or where to start?"
- Body: "AI is no longer just for large enterprises. We help Australian SMEs identify practical, high-impact AI opportunities — from automating routine tasks to using data for smarter decision-making. We build a digital transformation roadmap that's right-sized for your business and budget."
- Best for: SMEs exploring AI adoption | Businesses modernising legacy systems | Founders wanting competitive edge

**05 — Executive Coaching for Senior Leaders**
- Question: "Are you performing at the level your business needs you to?"
- Body: "Designed for ambitious founders, CEOs, and senior female leaders navigating complex organisations and male-dominated industries, our executive coaching program provides clarity, strategy, and accountability to accelerate your leadership impact."
- Best for: Founders and CEOs | Senior women in leadership | Leaders managing teams through change

**06 — On-Demand Advisory**
- Question: "Need expert support without a long-term commitment?"
- Body: "Access senior consulting expertise by the hour — when you need a trusted sounding board, a second opinion on a major decision, or specialist support on a pressing challenge. No retainer. No lock-in."
- Best for: Founders who need occasional expert input | Leaders between engagements | Specific challenges

**07 — Growth Accelerator Workshop**
- Question: "Ready to get serious about growth — but not sure where to start?"
- Body: "The Growth Accelerator is CompassPoint Advisory's signature workshop experience — a focused, high-impact engagement designed to cut through the noise and build a clear, actionable growth plan for your business. In a single facilitated session, we work with you and your leadership team to diagnose what's holding the business back, identify your biggest growth opportunities, and map out exactly what needs to happen over the next 12 months to get there."
- Best for: Founders ready to get serious about growth | Businesses at a strategic crossroads | Leadership teams who need clarity and alignment

---

### 4.5 Methodology Page (`/methodology`)

- H1: "How We Work"
- Intro: "A disciplined, collaborative process — from first conversation to sustained momentum. We take a data-driven approach to consulting, and our approach is highly customisable to meet the unique needs of each business."
- 4 steps displayed as a vertical timeline or horizontal stepper:
  1. **Discovery and Audit** — "We begin every engagement with a structured discovery process. We examine your business model, your market position, your team, your financials, and your goals. This gives us a clear, unbiased picture of where you are and what is standing between you and where you want to be."
  2. **Strategic Roadmap** — "From the discovery findings, we build a clear, prioritised strategic roadmap. This is not a theoretical document; it is a practical guide that your team can execute against, with defined milestones, owners, and success metrics."
  3. **Execution and Alignment** — "Strategy without execution is just planning. We work alongside your team during the implementation phase, providing guidance, accountability, and course corrections as the plan meets reality. We help you build the internal capability to execute with confidence."
  4. **Ongoing Optimisation** — "The best strategies evolve. We maintain an ongoing advisory relationship with our clients, reviewing progress, adapting the roadmap as conditions change, and ensuring that the momentum built in the early phases is sustained over the long term."
- CTA to book discovery call

---

### 4.6 FAQ Page (`/faq`)

- H1: "Frequently Asked Questions — Business Consulting for Australian SMEs"
- Accordion-style Q&A
- Questions and answers:

**Q: What is a business consultant and what do they do for SMEs?**
A: A business consultant works alongside SME owners and leadership teams to solve strategic, operational, and organisational challenges. At CompassPoint Advisory, we help Australian small and medium businesses build growth strategies, improve their operations, manage change, and adopt AI and digital tools — giving them access to expert thinking previously available only to large corporations.

**Q: I already have an Accountant — why do I need a business consultant?**
A: Your accountant manages financial health — compliance, tax, reporting. A business consultant focuses on growth: identifying strategies, initiatives, and operational improvements to scale your business, enter new markets, and build long-term value. Think of your accountant as keeping score — and your business consultant as helping you win the game.

**Q: How much does business consulting cost for a small business in Australia?**
A: Fees vary depending on scope, duration, and engagement type. CompassPoint Advisory offers flexible models — from project-based engagements to on-demand hourly advisory — so SMEs can access support without a large upfront commitment. We offer a free discovery call to understand your needs and provide a tailored proposal. Consider consulting fees as an investment — the right advice at the right time can unlock revenue, reduce waste, and accelerate decisions.

**Q: How do I know if my business needs a consultant?**
A: If you're experiencing rapid growth without systems to support it, a clear ambition but no strategic roadmap, operational inefficiencies eating into margins, a major change underway, or leadership challenges affecting team performance — consulting support could be transformative.

**Q: What size businesses does CompassPoint Advisory work with?**
A: We primarily work with Australian SMEs generating between $5M and $20M in annual revenue — businesses past the startup phase and actively looking to scale, optimise, or transform.

**Q: Does CompassPoint Advisory offer AI consulting for small businesses?**
A: Yes. We help SMEs understand where AI can genuinely improve their business — from automating repetitive tasks to using data for smarter decisions and building AI-enabled customer experiences. We cut through the hype and focus on practical, high-ROI applications.

**Q: Where is CompassPoint Advisory based?**
A: We are headquartered in Melbourne, Victoria, and work with businesses across Australia — including Sydney, Brisbane, Perth, Hobart and Adelaide — both in-person and remotely.

**Q: How do I get started with CompassPoint Advisory?**
A: The first step is a free, confidential discovery call with our founder, Amelia Ghofrany. In 30 minutes, we'll explore your goals, your challenges, and whether we're the right partner. Book directly via our Calendly link — no commitment required.

---

### 4.7 Contact Page (`/contact`)

- H1: "Get in Touch"
- Calendly embed for discovery call booking
- Direct contact info:
  - Email: amelia.ghofrany@gmail.com
  - Website: www.ameliaghofrany.com.au
  - Location: Melbourne, Victoria, Australia
- Simple contact form (Name, Email, Phone, Message, Submit)
- Map embed (Melbourne, optional)

---

## 5. SEO Strategy

### 5.1 Technical SEO

- **Framework:** Next.js App Router with static generation (SSG) where possible.
- **Meta tags:** Every page must have unique `<title>` and `<meta name="description">`.
- **Canonical URLs:** Self-referencing canonical on every page.
- **Sitemap:** Auto-generate `/sitemap.xml` using `next-sitemap` or App Router metadata API.
- **Robots.txt:** Allow all crawlers, reference sitemap.
- **Open Graph & Twitter Cards:** Every page needs `og:title`, `og:description`, `og:image`, `og:url`, `twitter:card`.
- **Structured Data (JSON-LD):** See Section 5.3.
- **Performance:** Target Lighthouse 90+ on all metrics. Use `next/image` for all images, lazy load below-the-fold content, preload critical fonts.
- **Mobile-first:** Fully responsive, all interactive elements touch-friendly (min 44px tap targets).
- **Core Web Vitals:** LCP < 2.5s, FID < 100ms, CLS < 0.1.
- **HTTPS:** Enforced site-wide.
- **Trailing slashes:** Consistent — pick one convention and enforce it.

### 5.2 Page-Level SEO Metadata

| Page | Title | Meta Description |
|------|-------|------------------|
| Home | CompassPoint Advisory — Strategic Business Consulting for Australian SMEs | CompassPoint Advisory partners with Australian SMEs and startups to deliver growth strategy, operational excellence, AI consulting, and executive coaching. Melbourne-based, nationally active. |
| About | About CompassPoint Advisory — Melbourne Business Consultants | Founded by Amelia Ghofrany with 20+ years at IBM, Fujitsu, DXC and Bupa. Strategic consulting purpose-built for Australian SMEs turning $5M–$20M. |
| Services | Business Consulting Services for Australian SMEs — CompassPoint Advisory | From strategy and operations to AI transformation and executive coaching. Explore CompassPoint Advisory's tailored consulting services for growing Australian businesses. |
| Business Strategy | Business Strategy Consulting for SMEs — CompassPoint Advisory | Build future-ready growth strategies with CompassPoint Advisory. Market insight, competitive positioning, and financial discipline for Australian SMEs. |
| Operations | Operations & Process Optimisation — CompassPoint Advisory | Eliminate waste, reduce costs, and build scalable operations. Process optimisation and AI automation consulting for Australian SMEs. |
| Change Leadership | Change Leadership & Culture Transformation — CompassPoint Advisory | Navigate restructures, technology rollouts, and culture shifts with human-centred change management for Australian SMEs. |
| AI & Digital | AI and Digital Transformation Consulting — CompassPoint Advisory | Practical AI adoption for Australian SMEs. Automate tasks, unlock data insights, and build a digital transformation roadmap right-sized for your business. |
| Executive Coaching | Executive Coaching for Founders & Senior Leaders — CompassPoint Advisory | Clarity, strategy, and accountability for ambitious founders, CEOs, and senior female leaders navigating complex organisations. |
| On-Demand Advisory | On-Demand Business Advisory — CompassPoint Advisory | Access senior consulting expertise by the hour. No retainer, no lock-in — just expert support when you need it. |
| Growth Accelerator | Growth Accelerator Workshop — CompassPoint Advisory | A focused, high-impact workshop to diagnose what's holding your business back and build a 12-month growth plan. |
| Methodology | How We Work — CompassPoint Advisory's Consulting Process | Discovery, strategy, execution, and optimisation. A disciplined, collaborative consulting process for Australian SMEs. |
| FAQ | Business Consulting FAQ — CompassPoint Advisory | Answers to common questions about business consulting for Australian SMEs, including costs, AI consulting, and how to get started. |
| Contact | Contact CompassPoint Advisory — Book a Free Discovery Call | Get in touch with CompassPoint Advisory. Book a free, confidential discovery call with founder Amelia Ghofrany. Melbourne-based, serving all of Australia. |

### 5.3 Structured Data (JSON-LD)

**Every page — Organization:**
```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "CompassPoint Advisory",
  "url": "https://www.compasspointadvisory.com.au",
  "logo": "https://www.compasspointadvisory.com.au/images/logo-full.png",
  "description": "Strategic consulting for Australian SMEs and startups. Growth strategy, operations, AI transformation, and executive coaching.",
  "founder": {
    "@type": "Person",
    "name": "Amelia Ghofrany"
  },
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Melbourne",
    "addressRegion": "VIC",
    "addressCountry": "AU"
  },
  "areaServed": {
    "@type": "Country",
    "name": "Australia"
  },
  "sameAs": []
}
```

**Home page — LocalBusiness:**
```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "CompassPoint Advisory",
  "description": "Melbourne-based strategic consulting firm for Australian SMEs and startups.",
  "url": "https://www.compasspointadvisory.com.au",
  "telephone": "",
  "email": "amelia.ghofrany@gmail.com",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Melbourne",
    "addressRegion": "VIC",
    "addressCountry": "AU"
  },
  "priceRange": "$$"
}
```

**Services pages — Service schema:**
```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Business Strategy Consulting",
  "provider": {
    "@type": "Organization",
    "name": "CompassPoint Advisory"
  },
  "areaServed": {
    "@type": "Country",
    "name": "Australia"
  },
  "description": "..."
}
```

**FAQ page — FAQPage schema:**
```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is a business consultant and what do they do for SMEs?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "..."
      }
    }
  ]
}
```

**About page — Person schema for Amelia:**
```json
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Amelia Ghofrany",
  "jobTitle": "Founder & Principal Consultant",
  "worksFor": {
    "@type": "Organization",
    "name": "CompassPoint Advisory"
  },
  "description": "Strategic business leader with over 20 years of senior experience at IBM, Fujitsu, DXC Technology, and Bupa."
}
```

### 5.4 Internal Linking Strategy

- Every service page links to related services and to the methodology page.
- FAQ answers link to relevant service pages where applicable.
- All pages include a footer CTA linking to `/contact` or the Calendly URL.
- Blog posts (future) should interlink with relevant services pages.
- Use descriptive anchor text — avoid "click here" or "learn more" in isolation.

### 5.5 Heading Hierarchy

- Every page has exactly one `<h1>`.
- Subheadings follow logical `<h2>` → `<h3>` → `<h4>` nesting. Never skip levels.
- Include target keywords naturally in H1 and H2 tags.

---

## 6. LLM & AI Discoverability

To ensure the site is well-represented by LLMs (ChatGPT, Gemini, Claude, Perplexity, etc.):

### 6.1 Content Principles for LLM Readability

- Write in clear, declarative sentences. LLMs extract factual statements well.
- Front-load key information: who, what, where, for whom.
- Use natural Q&A patterns in content (the FAQ page is critical for this).
- Include entity-defining statements on key pages:
  - "CompassPoint Advisory is a Melbourne-based strategic consulting firm..."
  - "Founded by Amelia Ghofrany..."
  - "We work with Australian SMEs generating $5M–$20M in revenue..."
- Avoid jargon-heavy paragraphs without context. Every term should be self-explanatory.

### 6.2 llms.txt File

Create `/public/llms.txt` at the site root:

```
# CompassPoint Advisory

> Strategic consulting for Australian SMEs and startups.

CompassPoint Advisory is a Melbourne-based strategic consulting firm purpose-built for Australian small and medium enterprises (SMEs) and startups. Founded by Amelia Ghofrany, a strategic business leader with 20+ years of senior experience at IBM, Fujitsu, DXC Technology, and Bupa.

## Services
- Business Strategy Consulting
- Operations and Process Optimisation
- Change Leadership and Culture Transformation
- AI and Digital Transformation Consulting
- Executive Coaching for Senior Leaders
- On-Demand Advisory
- Growth Accelerator Workshop

## Key Facts
- Location: Melbourne, Victoria, Australia
- Serves businesses across Australia (Sydney, Brisbane, Perth, Hobart, Adelaide)
- Target clients: SMEs generating $5M–$20M annual revenue
- Offers free 30-minute discovery call via Calendly
- Website: https://www.compasspointadvisory.com.au
- Contact: amelia.ghofrany@gmail.com

## Links
- [Home](https://www.compasspointadvisory.com.au/)
- [About](https://www.compasspointadvisory.com.au/about)
- [Services](https://www.compasspointadvisory.com.au/services)
- [How We Work](https://www.compasspointadvisory.com.au/methodology)
- [FAQ](https://www.compasspointadvisory.com.au/faq)
- [Contact](https://www.compasspointadvisory.com.au/contact)
- [Book a Discovery Call](https://calendly.com/ameliaghofrany)
```

### 6.3 Structured Data for AI

- JSON-LD on every page (see Section 5.3) — LLMs parse structured data.
- FAQ schema is especially valuable — LLMs love pulling from FAQ structured data.
- Keep `<meta name="description">` factual and entity-rich, not marketing-fluffy.

### 6.4 robots.txt for AI Crawlers

```
User-agent: *
Allow: /
Sitemap: https://www.compasspointadvisory.com.au/sitemap.xml

User-agent: GPTBot
Allow: /

User-agent: Google-Extended
Allow: /

User-agent: anthropic-ai
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: Bytespider
Disallow: /
```

---

## 7. Animations & Interactions

- **Page load:** Staggered fade-up reveals for hero text (Framer Motion). Compass emblem: subtle pulse or slow rotation.
- **Scroll:** Sections fade in on scroll (IntersectionObserver or Framer Motion `whileInView`).
- **Hover:** Buttons scale slightly (1.02), cards lift with shadow increase.
- **Gold shimmer:** Optional CSS gradient animation on gold accents (subtle, not distracting).
- **Navigation:** Smooth scroll for anchor links on home page. Sticky header with backdrop blur on scroll.
- **Mobile menu:** Slide-in from right, plum background, gold accent links.
- **Page transitions:** Subtle crossfade between pages (optional, don't sacrifice performance).

**Performance rule:** All animations must be GPU-accelerated (transform/opacity only). No layout-triggering animations.

---

## 8. Component Architecture

```
src/
├── app/
│   ├── layout.tsx              # Root layout (fonts, metadata, analytics)
│   ├── page.tsx                # Home page
│   ├── about/page.tsx
│   ├── services/
│   │   ├── page.tsx            # Services listing
│   │   └── [slug]/page.tsx     # Individual service
│   ├── methodology/page.tsx
│   ├── faq/page.tsx
│   ├── contact/page.tsx
│   ├── blog/                   # Future
│   ├── privacy-policy/page.tsx
│   └── terms/page.tsx
├── components/
│   ├── layout/
│   │   ├── Header.tsx          # Sticky nav with mobile menu
│   │   ├── Footer.tsx
│   │   └── Container.tsx       # Max-width wrapper
│   ├── ui/
│   │   ├── Button.tsx          # Primary, Secondary, Ghost variants
│   │   ├── Card.tsx
│   │   ├── Accordion.tsx       # For FAQ
│   │   ├── SectionHeading.tsx
│   │   └── GoldDivider.tsx
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── ServicesGrid.tsx
│   │   ├── MethodologySteps.tsx
│   │   ├── Differentiators.tsx
│   │   ├── Testimonials.tsx
│   │   └── ClosingCTA.tsx
│   └── seo/
│       ├── JsonLd.tsx          # Reusable JSON-LD component
│       └── MetaTags.tsx
├── lib/
│   ├── constants.ts            # Brand colours, links, service data
│   ├── services.ts             # Service content data
│   └── metadata.ts             # SEO metadata helpers
├── styles/
│   └── globals.css             # Tailwind + CSS variables + font imports
└── public/
    ├── images/
    │   ├── logo-full.png
    │   ├── compass-icon.png
    │   └── og-image.jpg        # 1200x630 OG image
    ├── llms.txt
    ├── robots.txt
    └── sitemap.xml
```

---

## 9. Accessibility

- All images have descriptive `alt` text.
- Focus states visible on all interactive elements (gold outline, 2px offset).
- Skip-to-content link at top of page.
- Semantic HTML: `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`.
- Accordion FAQ uses `aria-expanded`, `aria-controls`, keyboard navigable.
- Colour contrast meets WCAG AA (verify plum/gold and gold/ivory combinations).
- Form inputs have associated `<label>` elements.

---

## 10. Analytics & Tracking

- Google Analytics 4 (GA4) — page views, scroll depth, CTA clicks.
- Google Tag Manager for event tracking.
- Track: "Book Discovery Call" clicks, Calendly opens, service page views, FAQ expansions.
- Google Search Console — verify ownership, monitor indexing.
- Microsoft Clarity or Hotjar (optional) for heatmaps.

---

## 11. Performance & Deployment

- **Hosting:** Vercel (recommended for Next.js) or Netlify.
- **Images:** WebP format via `next/image`, responsive srcsets, lazy loading.
- **Fonts:** Preload critical font files. Use `font-display: swap`.
- **Bundle:** Keep JS bundle under 200KB gzipped for initial load.
- **Caching:** Leverage Vercel's edge caching. Static pages = ISR or full SSG.
- **Domain:** compasspointadvisory.com.au (configure DNS, SSL).

---

## 12. Content Style Rules for Copywriting

- Australian English spelling throughout (optimisation, colour, organisation, programme vs. program for formal contexts).
- Tone: confident, strategic, human, warm. Never salesy or pushy.
- Use "we" for CompassPoint, "you" for the reader.
- Avoid: jargon without explanation, passive voice where active is clearer, filler phrases.
- Numbers: spell out one through nine, use numerals for 10+. Exception: "$5M–$20M" always uses numerals.
- Em dashes (—) with no spaces on either side.

---

## 13. Future Considerations

- **Blog/Insights:** Content marketing for SEO. Target long-tail keywords like "AI consulting for small business Australia", "SME growth strategy Melbourne", "business consultant vs accountant".
- **Case Studies:** When client testimonials are available, create dedicated case study pages with results data.
- **Newsletter:** Email capture for a monthly insights newsletter.
- **Calendly Pro:** If upgraded, embed inline rather than popup for better UX.
- **Google Business Profile:** Set up and link to website for local SEO.
- **LinkedIn integration:** Link to Amelia's LinkedIn thought leadership content.
