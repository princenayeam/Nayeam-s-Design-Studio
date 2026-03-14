# @nayeamui - Universal UI/UX Design Skill

## 📋 Overview

`@nayeamui` is a **universal, framework-agnostic UI/UX design skill** that combines the expertise of a world-class UI/UX designer and CTO. It works with **any project type, any framework, and any platform**—including seamless integration with **Z.ai** for AI-powered features.

---

## 🎯 What Makes It Universal?

### ✅ Framework Agnostic
Works with ANY frontend framework:
- React, Next.js, Vue, Nuxt, Svelte, SvelteKit
- Angular, Vue, Solid, Qwik
- Vanilla JavaScript, TypeScript
- Web Components, Lit, Stencil

### ✅ Platform Independent
Works on ANY platform:
- Web (PWA, SPA, MPA)
- Mobile (React Native, Flutter, Native)
- Desktop (Electron, Tauri)
- Cross-Platform (React Native Web, Ionic)

### ✅ Styling Agnostic
Works with ANY styling solution:
- Tailwind CSS, CSS Modules, SCSS
- Styled Components, Emotion
- Shadcn/ui, Radix UI
- Plain CSS, PostCSS

### ✅ Z.ai Compatible
Ready for AI-powered features:
- Image generation (Image Generation Skill)
- Image understanding (VLM Skill)
- Text generation (LLM Skill)
- Text-to-speech (TTS Skill)
- Speech-to-text (ASR Skill)
- Video generation (Video Generation Skill)
- Web search (Web Search Skill)
- Web reading (Web Reader Skill)

---

## 🚀 Quick Start

### 1. Copy the Skill Files
```
nayeamui-skill.md          # Complete design system
NAYEAMUI-QUICK-REF.md      # Quick reference guide
```

### 2. Use in Your Project

#### Option A: Direct Usage (Recommended)
Simply reference the skill files when working with any AI assistant:

```
"Please use @nayeamui skill to design a [project type] using [framework]."
```

#### Option B: Import into Documentation
Add to your project's documentation:

```markdown
## UI/UX Design System
We use the @nayeamui universal design system. See:
- nayeamui-skill.md for complete guidelines
- NAYEAMUI-QUICK-REF.md for quick decisions
```

#### Option C: Integration with AI Tools
When using Z.ai or other AI tools:

```
"I'm using the @nayeamui universal design system. Please follow its guidelines for [specific task]."
```

---

## 📦 How to Use in Different Projects

### Next.js Project (React)
```typescript
// When requesting AI assistance:
"@nayeamui I'm building a Next.js 16 landing page with shadcn/ui and Tailwind CSS. Create a modern hero section with glassmorphism effects."

// The skill will provide:
// - React component code
// - Tailwind CSS classes
// - Framer Motion animations
// - Responsive design
// - Accessibility features
```

### Vue 3 Project
```vue
<!-- When requesting AI assistance: -->
"@nayeamui Create a Vue 3 dashboard component using Vite, Pinia, and Tailwind CSS with data visualization."

<!-- The skill will provide: -->
<!-- - Vue 3 Composition API code -->
<!-- - Tailwind styling -->
<!-- - Pinia state management -->
<!-- - Responsive layout -->
```

### Angular Project
```typescript
// When requesting AI assistance:
"@nayeamui Design an Angular 17 admin panel with Angular Material and RxJS for real-time data."

// The skill will provide:
// - Angular component code
// - Material Design integration
// - RxJS data flow patterns
// - Type-safe TypeScript
```

### SvelteKit Project
```svelte
<!-- When requesting AI assistance: -->
"@nayeamui Build a SvelteKit blog with Skeleton UI, MDX for content, and Vercel deployment."

<!-- The skill will provide: -->
<!-- - Svelte components -->
<!-- - Skeleton UI styling -->
<!-- - SvelteKit routing -->
<!-- - SEO optimization -->
```

### Z.ai Project (With AI Features)
```typescript
// When requesting AI assistance:
"@nayeamui Create a photo gallery with Z.ai integration for:
- Image search using VLM
- Auto-tagging using LLM
- Image generation
- Text-to-speech for accessibility"

// The skill will provide:
// - Framework-agnostic design
// - Z.ai SDK integration patterns
// - Component architecture
// - API implementation guidance
```

---

## 🎨 Universal Design Tokens

### Color System (HSL for Theme Support)
```css
:root {
  /* Primary - Can be any color */
  --color-primary: 0 0% 10%;
  
  /* Semantic */
  --color-success: 142 76% 36%;
  --color-warning: 38 92% 50%;
  --color-error: 0 84% 60%;
  
  /* AI Accent */
  --color-ai-accent: 266 54% 51%;
  
  /* Neutral Palette */
  --neutral-50: 40 20% 98%;
  --neutral-100: 40 20% 92%;
  --neutral-200: 40 20% 85%;
  --neutral-300: 40 15% 75%;
  --neutral-400: 40 10% 60%;
  --neutral-500: 40 10% 50%;
  --neutral-600: 40 10% 40%;
  --neutral-700: 40 10% 30%;
  --neutral-800: 40 10% 20%;
  --neutral-900: 40 10% 10%;
}

/* Dark Theme */
[data-theme="dark"] {
  --color-background: 0 0% 5%;
  --color-foreground: 0 0% 95%;
  --neutral-50: 40 20% 10%;
  --neutral-100: 40 20% 15%;
}
```

### Typography Scale (rem-based)
```css
:root {
  --text-xs: 0.75rem;      /* 12px */
  --text-sm: 0.875rem;     /* 14px */
  --text-base: 1rem;      /* 16px */
  --text-lg: 1.125rem;     /* 18px */
  --text-xl: 1.25rem;      /* 20px */
  --text-2xl: 1.5rem;     /* 24px */
  --text-3xl: 1.875rem;   /* 30px */
  --text-4xl: 2.25rem;    /* 36px */
  --text-5xl: 3rem;       /* 48px */
  --text-6xl: 3.75rem;    /* 60px */
  --text-7xl: 4.5rem;     /* 72px */
  --text-8xl: 6rem;       /* 96px */
  
  --font-serif: 'Playfair Display', 'Georgia', serif;
  --font-sans: 'Inter', system-ui, sans-serif;
  --font-mono: 'JetBrains Mono', monospace;
  
  --leading-tight: 1.25;
  --leading-normal: 1.5;
  --leading-relaxed: 1.625;
}
```

### Spacing Scale (multiples of 4)
```css
:root {
  --space-1: 0.25rem;   /* 4px */
  --space-2: 0.5rem;    /* 8px */
  --space-3: 0.75rem;   /* 12px */
  --space-4: 1rem;      /* 16px */
  --space-5: 1.25rem;   /* 20px */
  --space-6: 1.5rem;    /* 24px */
  --space-8: 2rem;      /* 32px */
  --space-10: 2.5rem;   /* 40px */
  --space-12: 3rem;     /* 48px */
  --space-16: 4rem;     /* 64px */
  --space-20: 5rem;     /* 80px */
  --space-24: 6rem;     /* 96px */
  --space-32: 8rem;     /* 128px */
}
```

### Border Radius
```css
:root {
  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 12px;
  --radius-xl: 16px;
  --radius-2xl: 24px;
  --radius-3xl: 32px;
  --radius-full: 9999px;
}
```

---

## 🧩 Universal Component Patterns

### Button
**Properties (Framework Agnostic):**
- Height: 40px (mobile minimum), 44px (touch-friendly)
- Padding: 12px 24px (standard), 16px 32px (generous)
- Border Radius: 8px (rounded), 9999px (pill)
- Font Weight: 500-600
- Transitions: 150-300ms ease-in-out

**Variants:**
- **Primary**: Filled, prominent action
- **Secondary**: Outline or ghost, secondary action
- **Tertiary**: Minimal, tertiary action
- **Destructive**: Error color, destructive action

**States:**
- Default → Hover → Active → Focus → Disabled → Loading

### Input Field
**Properties:**
- Height: 44px minimum (touch-friendly)
- Padding: 12px 16px
- Border: 1px solid neutral-300
- Border Radius: 8px
- Font Size: 16px (readable)

**States:**
- Default → Focus → Error → Success → Disabled

### Card
**Variants:**
- **Default**: White background, subtle shadow
- **Elevated**: Higher elevation, more shadow
- **Outlined**: Transparent background, border only
- **Glass**: Frosted glass effect (backdrop-filter)

**Properties:**
- Border Radius: 12px to 16px
- Padding: 20px to 24px
- Shadow: Subtle, layered for depth

---

## 📱 Responsive Design

### Universal Breakpoints
```css
/* CSS Media Queries */
@media (min-width: 640px) { /* Tablet */ }
@media (min-width: 1024px) { /* Desktop */ }
@media (min-width: 1280px) { /* Wide */ }
@media (min-width: 1536px) { /* Ultra */ }
```

### Mobile-First Approach
```
1. Start with mobile layout (default)
2. Add tablet enhancements (640px+)
3. Add desktop enhancements (1024px+)
4. Add wide/ultra enhancements (1280px+)
```

### Touch Optimization
- Minimum touch targets: 44px × 44px
- Increased vertical spacing on mobile
- Larger margins between items
- Support for gestures where appropriate

---

## 🤖 Z.ai Integration Patterns

### Vision (VLM)
```typescript
// Framework-agnostic pattern
async function analyzeImage(imageUrl: string, prompt: string) {
  const response = await fetch('/api/vision', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ imageUrl, prompt })
  });
  return response.json();
}

// Use cases:
// - Image analysis and understanding
// - Generate alt text for accessibility
// - Visual search
// - Image moderation
```

### Text Generation (LLM)
```typescript
// Framework-agnostic pattern
async function generateText(prompt: string, options = {}) {
  const response = await fetch('/api/llm', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ prompt, ...options })
  });
  return response.json();
}

// Use cases:
// - Generate product descriptions
// - Create blog content
// - Generate FAQs
// - Chatbot responses
```

### Image Generation
```typescript
// Framework-agnostic pattern
async function generateImage(prompt: string, options = {}) {
  const response = await fetch('/api/image-generation', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ prompt, size: '1024x1024', ...options })
  });
  return response.json();
}

// Use cases:
// - Generate placeholder images
// - Create custom illustrations
// - Generate thumbnails
// - AI-powered design assets
```

---

## 🎯 Universal Design Patterns

### Hero Section
**Purpose:** Capture attention, communicate value proposition

**Elements:**
- Headline: Clear, compelling, benefit-focused
- Subheadline: Supporting context
- Primary CTA: Main desired action
- Secondary CTA: Learn more
- Visual: Product, illustration, or image

**Layout Options:**
- Centered: Headline centered, visual below
- Split: Text left, visual right (desktop)
- Full-width: Full-width image, text overlay

### Features/Benefits Section
**Purpose:** Communicate value and capabilities

**Layout Options:**
- Grid: 3-column grid (2 on tablet, 1 on mobile)
- List: Vertical list with icons
- Cards: Card-based layout

### Social Proof Section
**Purpose:** Build trust and credibility

**Elements:**
- Testimonials: Customer quotes
- Logos: Client/partner logos
- Metrics: Key numbers

---

## ✅ Universal Quality Checklist

### Visual Quality
- [ ] Consistent spacing throughout
- [ ] Proper visual hierarchy
- [ ] Appropriate color contrast
- [ ] No broken layouts at any breakpoint
- [ ] Images optimized and properly sized
- [ ] Typography is readable and consistent
- [ ] Animations are smooth and purposeful

### Functional Quality
- [ ] All links work correctly
- [ ] Forms validate and submit properly
- [ ] Error messages are clear and helpful
- [ ] Loading states for async operations
- [ ] Empty states where appropriate
- [ ] Success feedback for completed actions

### Responsive Quality
- [ ] Works on mobile (320px-640px)
- [ ] Works on tablet (640px-1024px)
- [ ] Works on desktop (1024px+)
- [ ] No horizontal scrolling
- [ ] Touch targets are 44px minimum
- [ ] Text is readable without zoom

### Accessibility Quality
- [ ] Passes WCAG AA checker
- [ ] Keyboard navigable
- [ ] Screen reader compatible
- [ ] Focus indicators visible
- [ ] Alt text on all images
- [ ] ARIA labels where needed
- [ ] Color contrast meets standards

### Performance Quality
- [ ] Lighthouse score 90+ on all metrics
- [ ] First Contentful Paint < 1.8s
- [ ] Time to Interactive < 3.8s
- [ ] Cumulative Layout Shift < 0.1
- [ ] Total Blocking Time < 200ms

---

## 📚 Documentation Files

### Main Skill File
**`nayeamui-skill.md`** - Complete adaptive design system
- Design thinking framework
- Universal design tokens
- Component patterns
- Framework-specific implementations
- Z.ai integration patterns
- Platform-specific patterns
- Quality assurance

### Quick Reference
**`NAYEAMUI-QUICK-REF.md`** - Fast decision helper
- Decision trees
- Color system
- Typography scale
- Spacing scale
- Component specs
- Responsive patterns
- Framework examples

---

## 🚀 Usage Examples

### Example 1: React Landing Page
```
"@nayeamui Create a modern SaaS landing page with:
- Framework: React + Next.js 16
- Styling: Tailwind CSS + shadcn/ui
- Sections: Hero, Features, Pricing, Testimonials, FAQ, CTA
- Theme: Light mode with glassmorphism effects
- Responsive: Mobile-first design
- Accessibility: WCAG AA compliant"

Result: Complete, production-ready React components
```

### Example 2: Vue Dashboard
```
"@nayeamui Build a dashboard with:
- Framework: Vue 3 + Vite
- State: Pinia
- Styling: Tailwind CSS
- Features: Data table, charts, filters, search
- Theme: Dark mode support
- Performance: Optimized for large datasets

Result: Vue 3 Composition API components with Pinia store
```

### Example 3: Z.ai Photo Gallery
```
"@nayeamui Create a photo gallery with Z.ai integration:
- Framework: Next.js 16 (but design is framework-agnostic)
- Features:
  - Upload images
  - AI auto-tagging using VLM
  - AI search using natural language
  - AI image generation
  - Text-to-speech for accessibility
- Design: Masonry grid, lightbox, responsive

Result: Complete design system + Z.ai integration code
```

### Example 4: Angular Admin Panel
```
"@nayeamui Design an admin panel with:
- Framework: Angular 17
- UI: Angular Material
- State: NgRx
- Features: User management, settings, analytics
- Accessibility: Full ARIA support
- Performance: Lazy loading, code splitting

Result: Angular components with RxJS data flow
```

---

## 🌟 Summary

`@nayeamui` is a **universal UI/UX design skill** that:

✅ Works with **ANY framework** (React, Vue, Angular, Svelte, vanilla)  
✅ Works on **ANY platform** (web, mobile, desktop, cross-platform)  
✅ Compatible with **ANY styling** solution (Tailwind, CSS, styled-components)  
✅ Ready for **Z.ai** AI integration  
✅ Provides **production-ready** designs  
✅ Ensures **accessibility** and **performance**  

**Use `@nayeamui` in ANY project to get world-class, adaptive UI/UX design!** 🚀✨
