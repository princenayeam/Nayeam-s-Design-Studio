# @nayeamui Universal Quick Reference

## 🎯 Universal Decision Trees

### By Project Type
```
E-commerce → Conversions, trust, product discovery
SaaS → Signups, engagement, retention
Portfolio → Impress, showcase, contact
Blog/Content → Readability, engagement, discovery
Dashboard → Data clarity, efficiency, insights
Landing Page → Conversions, message delivery, CTAs
Mobile App → Engagement, retention, task completion
```

### By Framework
```
React → Hooks, Framer Motion, Tailwind, Zustand
Vue → Composition API, VueUse, Pinia, Vite
Angular → Signals, RxJS, Angular Material
Svelte → Svelte stores, Skeleton UI
Vanilla JS → Plain JS, CSS Modules, Web Components
```

### By Platform
```
Web → Responsive, keyboard nav, SEO
Mobile → Touch-first, gestures, offline
Desktop → Keyboard shortcuts, power features
Cross-Platform → React Native, Flutter, native look-and-feel
```

---

## 🎨 Universal Color System

### Base Colors (HSL - Theme-able)
```css
--color-primary: 0 0% 10%;        /* Your primary */
--color-secondary: 215 16% 47%;   /* Your accent */
--color-foreground: 0 0% 10%;   /* Text */
--color-background: 0 0% 100%;  /* Background */
--color-muted: 215 16% 47%;      /* Secondary text */
```

### Neutrals
```css
--neutral-50: 40 20% 98%;   /* Lightest bg */
--neutral-100: 40 20% 92%;  /* Light bg */
--neutral-200: 40 20% 85%;  /* Medium bg */
--neutral-300: 40 15% 75%;  /* Darker bg */
--neutral-400: 40 10% 60%;  /* Border */
--neutral-500: 40 10% 50%;  /* Muted text */
--neutral-600: 40 10% 40%;  /* Body text */
--neutral-700: 40 10% 30%;  /* Heading */
--neutral-800: 40 10% 20%;  /* Dark heading */
--neutral-900: 40 10% 10%;   /* Darkest text */
```

### Semantic Colors
```css
--color-success: 142 76% 36%;  /* Positive */
--color-warning: 38 92% 50%;   /* Caution */
--color-error: 0 84% 60%;      /* Destructive */
--color-info: 199 89% 48%;     /* Info */
--color-ai-accent: 266 54% 51%;  /* AI features */
```

---

## 📏 Universal Spacing Scale

### Multipliers of 4
```css
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
```

### Usage
```
Component Padding:
  Compact: space-3 to space-4
  Standard: space-4 to space-6
  Generous: space-6 to space-8

Section Padding:
  Compact: space-12 to space-16
  Standard: space-16 to space-20
  Generous: space-20 to space-32

Gap/Grid:
  Tight: space-2 to space-3
  Standard: space-4 to space-6
  Generous: space-6 to space-8
```

---

## 📝 Universal Typography

### Font Stacks
```css
--font-serif: 'Playfair Display', 'Georgia', serif;
--font-sans: 'Inter', 'system-ui', sans-serif;
--font-mono: 'JetBrains Mono', monospace;
```

### Scale (rem-based)
```css
--text-xs: 0.75rem;      /* 12px */
--text-sm: 0.875rem;     /* 14px */
--text-base: 1rem;      /* 16px - Body */
--text-lg: 1.125rem;     /* 18px */
--text-xl: 1.25rem;      /* 20px */
--text-2xl: 1.5rem;     /* 24px */
--text-3xl: 1.875rem;   /* 30px */
--text-4xl: 2.25rem;    /* 36px */
--text-5xl: 3rem;        /* 48px */
--text-6xl: 3.75rem;    /* 60px */
--text-7xl: 4.5rem;     /* 72px */
--text-8xl: 6rem;        /* 96px */
```

### Line Heights
```css
--leading-tight: 1.25;
--leading-normal: 1.5;
--leading-relaxed: 1.625;
--leading-loose: 2;
```

---

## 🧩 Universal Components

### Button
```
Variants: primary, secondary, tertiary, destructive, ghost, link
Sizes: small (32px), medium (40px), large (48px)
Touch: minimum 44px height

Primary:
  Background: primary color
  Text: white (contrast)
  Border: none

Secondary:
  Background: transparent
  Text: primary color
  Border: 1px primary color

Destructive:
  Background: error color
  Text: white
  Border: none
```

### Input Field
```
States: default, focus, error, success, disabled

Default:
  Height: 44px (touch-friendly)
  Padding: 12px 16px
  Border: 1px neutral-300
  Border Radius: 8px

Focus:
  Border: primary color
  Ring: 2px primary color

Error:
  Border: error color
  Text: error color
```

### Card
```
Variants: default, elevated, outlined, glass

Default:
  Background: white
  Border: 1px neutral-200
  Shadow: subtle
  Radius: 12px
  Padding: 20px

Glass:
  Background: rgba(255, 255, 255, 0.7)
  Backdrop-filter: blur(12px)
  Border: 1px rgba(255, 255, 255, 0.5)
```

---

## 📱 Responsive Breakpoints

### Universal Breakpoints
```css
--breakpoint-mobile: 0px;      /* Mobile */
--breakpoint-tablet: 640px;    /* Tablet */
--breakpoint-desktop: 1024px;  /* Desktop */
--breakpoint-wide: 1280px;     /* Wide */
--breakpoint-ultra: 1536px;   /* Ultra */
```

### Responsive Patterns
```
Grid Columns:
  Mobile: 1 column
  Tablet: 2 columns
  Desktop: 3 columns
  Wide: 4 columns

Typography:
  Mobile: -1 to -2 sizes
  Tablet: Base sizes
  Desktop: Base to +1 size
  Wide: +1 to +2 sizes

Spacing:
  Mobile: space-3 to space-4
  Tablet: space-4 to space-6
  Desktop: space-6 to space-8
```

---

## ✨ Animation Patterns

### Timing
```
Micro: 150ms (hover, focus)
Fast: 200-300ms (toggles, menus)
Standard: 300-400ms (modals, transitions)
Slow: 500-600ms (page transitions)
```

### Common Patterns
```
Fade In: Opacity 0 → 1, 300-500ms
Slide Up: Y 20px → 0, Opacity 0 → 1, 400-500ms
Scale In: Scale 0.9 → 1, 300-400ms
Hover Lift: Y 0 → -4px, Scale 1 → 1.02, 200-300ms
Button Press: Scale 1 → 0.98, 100ms
```

### Performance Rules
```
✓ Use transform and opacity only (GPU-accelerated)
✓ Avoid animating width, height, top, left
✓ Use will-change sparingly
✓ Respect prefers-reduced-motion
✓ Keep under 500ms for UI animations
```

---

## 🤖 Z.ai Integration

### Vision (VLM)
```
Use: Image analysis, alt text generation, visual search
API: POST /v1/vision/chat/completions
Content: [{type: 'text', text: prompt}, {type: 'image_url', ...}]
```

### Text Generation (LLM)
```
Use: Content generation, chatbots, descriptions
API: POST /v1/chat/completions
Content: [{role: 'user', content: prompt}]
```

### Text-to-Speech (TTS)
```
Use: Audio descriptions, voice features
API: POST /v1/audio/speech
Params: {text, voice, speed}
```

### Speech-to-Text (ASR)
```
Use: Voice commands, dictation
API: POST /v1/audio/transcriptions
Params: {file, language}
```

### Image Generation
```
Use: Placeholders, illustrations, thumbnails
API: POST /v1/images/generations
Params: {prompt, size: '1024x1024'}
```

### Video Generation
```
Use: Demos, backgrounds, marketing
API: POST /v1/videos/generations
Params: {prompt, duration}
```

### Web Search
```
Use: Real-time info, research
API: POST /v1/web/search
Params: {query}
```

### Web Reading
```
Use: Content extraction, scraping
API: POST /v1/web/reader
Params: {url}
```

---

## 🔧 Framework Examples

### React
```jsx
// Component
const Button = ({ variant, size, children, ...props }) => (
  <button className={`btn btn-${variant} btn-${size}`} {...props}>
    {children}
  </button>
);

// State
const [count, setCount] = useState(0);

// Styling
// Option 1: Tailwind
className="px-6 py-3 rounded-lg"

// Option 2: Styled Components
const StyledButton = styled.button``

// Option 3: CSS Modules
import styles from './Button.module.css'
```

### Vue 3
```vue
<!-- Component -->
<script setup>
import { ref, computed } from 'vue';

const props = defineProps(['variant', 'size']);
const count = ref(0);
</script>

<template>
  <button :class="`btn btn-${props.variant}`" @click="count++">
    {{ count }}
  </button>
</template>

<style scoped>
.btn { ... }
</style>
```

### Angular
```typescript
@Component({
  selector: 'app-button',
  template: `<button [class]="classes">...</button>`,
  styles: [`.btn { ... }`]
})
export class ButtonComponent {
  @Input() variant = 'primary';
  count = signal(0);
  
  get classes() {
    return `btn btn-${this.variant}`;
  }
}
```

### Svelte
```svelte
<script>
  let variant = 'primary';
  let count = 0;
</script>

<button class="btn btn-{variant}" on:click={() => count++}>
  {count}
</button>

<style>
  .btn { ... }
</style>
```

### Vanilla JS
```javascript
class Button {
  constructor(element, options = {}) {
    this.element = element;
    this.variant = options.variant || 'primary';
    this.count = 0;
    
    this.element.className = `btn btn-${this.variant}`;
    this.element.addEventListener('click', () => this.count++);
  }
}
```

---

## ♿ Accessibility Quick Checks

### Contrast
```
Normal text: 4.5:1 minimum
Large text (18pt+): 3:1 minimum
Interactive: 3:1 minimum
```

### Keyboard
```
Tab order: Logical and predictable
Focus visible: 2px minimum outline
Escape: Close modals/menus
Shortcuts: Document and implement
```

### Screen Reader
```
Semantic HTML: nav, main, section, article
ARIA labels: Icon-only buttons
Alt text: All images
Live regions: Dynamic content
```

### Motion
```
Respect: prefers-reduced-motion
Avoid: Auto-playing, non-essential
Control: Pause/stop when possible
Duration: Under 5 seconds
```

---

## ⚡ Performance Quick Wins

### Images
```
✓ Use modern formats (WebP, AVIF)
✓ Responsive images (srcset)
✓ Lazy load below-fold
✓ Optimize and compress
✓ Use CDN
```

### CSS
```
✓ Minify in production
✓ Remove unused CSS
✓ Critical CSS inline
✓ Async load non-critical
```

### JavaScript
```
✓ Minify and bundle
✓ Code split by route
✓ Lazy load heavy components
✓ Tree-shake unused
✓ Use modern syntax
```

---

## 📊 Project Type Templates

### E-Commerce
```
Header: Search, categories, cart, account
Hero: Featured product, promotion
Products: Grid with filters, sorting
Product Page: Gallery, info, reviews, add to cart
Cart: Items, summary, checkout
Footer: Policies, links, social
```

### SaaS
```
Header: Logo, nav, CTA (get started)
Hero: Value prop, demo video, CTA
Features: Benefit-driven with demos
Pricing: 3 tiers, highlight recommended
Social Proof: Testimonials, logos, metrics
FAQ: Accordion with common questions
CTA: Free trial, no credit card
```

### Portfolio
```
Header: Minimal, logo, menu, contact
Hero: Best work, statement, CTA
Work: Gallery of projects, case studies
About: Story, services, process, team
Contact: Easy methods, form
Footer: Social links, minimal
```

### Blog
```
Header: Logo, search, categories
Hero: Featured article, latest posts
Content: Cards with excerpt, date, author
Article: Large typography, readable width
Sidebar: About, categories, popular
Footer: Newsletter, links
```

---

## 🚀 How to Use

### Basic Usage
```
Type: "@nayeamui [your project description]"

Example:
"@nayeamui Create a modern SaaS landing page using React and Tailwind CSS"

The skill will:
1. Analyze your project (SaaS, React, Tailwind)
2. Choose appropriate design decisions
3. Create framework-specific components
4. Provide implementation code
5. Optimize for performance
6. Ensure accessibility
```

### Framework-Specific Examples
```
React:
"@nayeamui Build an e-commerce store with Next.js, shadcn/ui, and Stripe"

Vue:
"@nayeamui Create a dashboard with Vue 3, Vite, and Chart.js"

Angular:
"@nayeamui Design a corporate website with Angular 17, Material, and NgRx"

Svelte:
"@nayeamui Build a portfolio with SvelteKit, Skeleton, and Framer Motion"

Vanilla:
"@nayeamui Create a landing page with vanilla JS, Tailwind, and Alpine.js"
```

### Platform-Specific Examples
```
Web:
"@nayeamui Design a responsive e-commerce website"

Mobile Web:
"@nayeamui Create a mobile-first PWA with offline support"

Desktop App:
"@nayeamui Build an Electron app for productivity tools"

Cross-Platform:
"@nayeamui Create a React Native app for iOS and Android"
```

### With Z.ai Features
```
"@nayeamui Create a photo gallery with AI-powered image search and auto-tagging"

"@nayeamui Build a blog with AI content generation and text-to-speech"

"@nayeamui Design a dashboard with AI data insights and natural language queries"
```

---

## 🎯 Quality Checklist

### Visual
- [ ] Consistent spacing
- [ ] Proper hierarchy
- [ ] Good contrast
- [ ] No broken layouts
- [ ] Optimized images
- [ ] Consistent typography
- [ ] Smooth animations

### Functional
- [ ] All links work
- [ ] Forms validate correctly
- [ ] Error messages clear
- [ ] Loading states present
- [ ] Empty states handled
- [ ] Success feedback shown
- [ ] Undo for destructive actions

### Responsive
- [ ] Works on mobile (320-640px)
- [ ] Works on tablet (640-1024px)
- [ ] Works on desktop (1024px+)
- [ ] No horizontal scroll
- [ ] Touch targets 44px+
- [ ] Text readable without zoom
- [ ] Layout adapts gracefully

### Accessible
- [ ] WCAG AA passes
- [ ] Keyboard navigable
- [ ] Screen reader compatible
- [ ] Focus indicators visible
- [ ] Alt text on images
- [ ] ARIA labels where needed
- [ ] Color contrast compliant

### Performance
- [ ] Lighthouse 90+ score
- [ ] FCP < 1.8s
- [ ] LCP < 2.5s
- [ ] TTI < 3.8s
- [ ] CLS < 0.1
- [ ] TBT < 200ms
```

---

## 📚 Documentation

### Full Skill
`nayeamui-skill.md` - Complete adaptive design system

### Quick Reference
This file - Fast decision helper

---

## 🌟 Summary

`@nayeamui` is now:

✅ **Universal** - Works with ANY framework and platform  
✅ **Adaptive** - Analyzes and tailors to each project  
✅ **Z.ai Ready** - Seamless AI integration  
✅ **Framework Agnostic** - React, Vue, Angular, Svelte, vanilla  
✅ **Platform Independent** - Web, mobile, desktop, cross-platform  
✅ **Production Ready** - Performance, accessibility, quality  

**Use `@nayeamui` in ANY project to get world-class, adaptive UI/UX design that works with YOUR technology stack!** 🚀✨
