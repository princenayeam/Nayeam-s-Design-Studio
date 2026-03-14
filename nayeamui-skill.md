# @nayeamui - Universal Adaptive UI/UX Design Skill

## Overview
`@nayeamui` is a **universal, framework-agnostic UI/UX design skill** that combines the expertise of a world-class UI/UX designer and CTO. It works with **any project type, any framework (React, Vue, Angular, Svelte, vanilla JS, etc.), and any platform (web, mobile, desktop)**—including seamless integration with **Z.ai** for AI-powered features.

---

## Core Philosophy

### Universal Principles
1. **Framework Agnostic** - Design principles apply to any technology
2. **Platform Independent** - Works for web, mobile, desktop, and beyond
3. **Adaptive Intelligence** - Analyzes context and creates tailored solutions
4. **Technology Inclusive** - Integrates with any tech stack
5. **Z.ai Compatible** - Ready for AI-powered features
6. **Design First** - UX principles that transcend implementation details

### Designer + CTO + AI Synergy
- **Designer**: User empathy, aesthetic excellence, creative innovation
- **CTO**: Technical feasibility, scalability, performance
- **AI Intelligence**: Z.ai integration for smart features

---

## Universal Design Thinking Framework

### Phase 1: Context Understanding (Universal)
```
Questions for ANY Project:
- Platform: Web, Mobile, Desktop, or Hybrid?
- Framework: React, Vue, Angular, Svelte, Vanilla, etc.?
- Target Audience: Who will use this?
- Primary Goals: What should users achieve?
- Constraints: Time, budget, technology, team size?
- AI Features: What can Z.ai provide?
```

### Phase 2: Platform Strategy
```
Web → Responsive design, keyboard navigation, SEO
Mobile → Touch-first, gestures, offline support
Desktop → Keyboard shortcuts, power features, complex workflows
Hybrid → Progressive Web App, cross-platform consistency
```

### Phase 3: Design System Creation
```
Create universal tokens:
- Color tokens (HSL for theme-ability)
- Typography scale (rem-based for accessibility)
- Spacing system (multiples of 4 or 8)
- Elevation/shadows (depth without devices)
- Animation timing (consistent experience)
```

### Phase 4: Component Architecture
```
Design framework-agnostic components:
- Atomic: Buttons, inputs, icons, badges
- Molecular: Search bars, form groups, card headers
- Organisms: Navigation, cards, modals
- Templates: Page layouts, section patterns
```

### Phase 5: Implementation Strategy
```
Choose based on project:
- Framework: React, Vue, Angular, Svelte, etc.
- State: Redux, Pinia, NgRx, Zustand, Context
- Styling: CSS, SCSS, Tailwind, Styled Components
- Build: Vite, Webpack, Rollup, etc.
- AI: Z.ai integration for smart features
```

### Phase 6: Optimization & Iteration
```
Universal optimization:
- Performance: Fast loading, smooth animations
- Accessibility: WCAG AA, keyboard, screen reader
- SEO: Semantic HTML, meta tags, performance
- Analytics: Track metrics, analyze data, improve
```

---

## Universal Color System

### Base Color Tokens (HSL for Theme Support)
```css
/* Universal Color Tokens */
--color-primary: 0 0% 10%;        /* Can be any primary color */
--color-secondary: 215 16% 47%;   /* Can be any accent */
--color-foreground: 0 0% 10%;   /* Text color */
--color-background: 0 0% 100%;  /* Background color */
--color-muted: 215 16% 47%;      /* Secondary text */

/* Neutral Palette (Universal) */
--neutral-50: 40 20% 98%;         /* Lightest background */
--neutral-100: 40 20% 92%;       /* Light background */
--neutral-200: 40 20% 85%;       /* Medium background */
--neutral-300: 40 15% 75%;       /* Darker background */
--neutral-400: 40 10% 60%;       /* Subtle border */
--neutral-500: 40 10% 50%;       /* Muted text */
--neutral-600: 40 10% 40%;       /* Body text */
--neutral-700: 40 10% 30%;       /* Heading text */
--neutral-800: 40 10% 20%;       /* Dark heading */
--neutral-900: 40 10% 10%;       /* Darkest text */

/* Semantic Colors (Universal) */
--color-success: 142 76% 36%;     /* Positive actions */
--color-warning: 38 92% 50%;     /* Caution messages */
--color-error: 0 84% 60%;        /* Errors, destructive */
--color-info: 199 89% 48%;       /* Information */

/* AI Accent Color (Z.ai Features) */
--color-ai-accent: 266 54% 51%;  /* Purple for AI features */
--color-ai-secondary: 190 95% 52%; /* Blue for AI secondary */
```

### Adaptive Palettes (Industry-Agnostic)
```css
/* Each can be mapped to any project */
:root {
  --palette-primary: var(--color-primary);
  --palette-secondary: var(--color-secondary);
  --palette-accent: var(--color-secondary);
  --palette-success: var(--color-success);
  --palette-warning: var(--color-warning);
  --palette-error: var(--color-error);
}

/* Theme Variants (Dark/Light) */
[data-theme="dark"] {
  --color-background: 0 0% 5%;
  --color-foreground: 0 0% 95%;
  --color-muted: 215 20% 65%;
}

/* Custom Theme Overrides */
[data-theme="brand"] {
  --color-primary: 220 90% 50%;  /* Brand blue */
  --color-secondary: 280 70% 50%; /* Brand purple */
}
```

### Color Decision Framework
```
Primary Color Selection:
1. Industry Consideration:
   - Tech: Blue, Indigo, Purple
   - Finance: Navy, Slate, Blue
   - Health: Green, Teal, Emerald
   - Fashion: Black, Red, Pink
   - Food: Orange, Red, Brown
   - Creative: Purple, Pink, Vibrant

2. Brand Consideration:
   - Use brand colors as primary
   - Create harmonious secondary colors
   - Maintain brand consistency

3. Accessibility Consideration:
   - WCAG AA contrast: 4.5:1 normal, 3:1 large
   - Color blindness: don't rely on color alone
   - Test with contrast checkers
```

---

## Universal Typography System

### Font Family Stack (Framework Agnostic)
```css
/* Universal Font Families */
--font-serif: 'Playfair Display', 'Georgia', 'Times New Roman', serif;
--font-sans: 'Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', sans-serif;
--font-mono: 'JetBrains Mono', 'Fira Code', 'Consolas', 'Monaco', monospace;

/* Typography Scale (Rem-Based for Accessibility) */
--text-xs: 0.75rem;      /* 12px */
--text-sm: 0.875rem;     /* 14px */
--text-base: 1rem;      /* 16px - Body text */
--text-lg: 1.125rem;     /* 18px */
--text-xl: 1.25rem;      /* 20px */
--text-2xl: 1.5rem;     /* 24px */
--text-3xl: 1.875rem;   /* 30px */
--text-4xl: 2.25rem;    /* 36px */
--text-5xl: 3rem;        /* 48px */
--text-6xl: 3.75rem;    /* 60px */
--text-7xl: 4.5rem;     /* 72px */
--text-8xl: 6rem;        /* 96px */
--text-9xl: 8rem;        /* 128px */

/* Line Heights (Universal) */
--leading-tight: 1.25;
--leading-normal: 1.5;
--leading-relaxed: 1.625;
--leading-loose: 2;
```

### Typography Usage Guidelines
```
Headings (Serif - Elegant, Editorial):
- Hero: text-6xl to text-8xl
- Section: text-4xl to text-5xl
- Card: text-2xl to text-3xl
- Subheading: text-xl to text-2xl

Body (Sans-Serif - Readable, Clean):
- Paragraph: text-base to text-lg
- Caption: text-sm
- Metadata: text-xs

Monospace (Technical):
- Code: text-sm to text-base
- Data: text-xs to text-sm
- Tags: text-xs

Responsive Scaling:
Mobile: Scale down 1-2 sizes
Tablet: Base sizes
Desktop: Base sizes or scale up 1 size
```

---

## Universal Spacing System

### Spacing Scale (Framework Agnostic)
```css
/* Universal Spacing (Multiples of 4) */
--space-1: 0.25rem;  /* 4px */
--space-2: 0.5rem;   /* 8px */
--space-3: 0.75rem;  /* 12px */
--space-4: 1rem;     /* 16px */
--space-5: 1.25rem;  /* 20px */
--space-6: 1.5rem;   /* 24px */
--space-8: 2rem;     /* 32px */
--space-10: 2.5rem;  /* 40px */
--space-12: 3rem;    /* 48px */
--space-16: 4rem;    /* 64px */
--space-20: 5rem;    /* 80px */
--space-24: 6rem;    /* 96px */
--space-32: 8rem;    /* 128px */
```

### Spacing Usage Rules
```
Component Padding:
- Compact: space-3 to space-4 (mobile)
- Standard: space-4 to space-6 (desktop)
- Generous: space-6 to space-8 (hero/cards)

Section Padding:
- Compact: space-12 to space-16
- Standard: space-16 to space-20
- Generous: space-20 to space-32

Gap/Grid:
- Tight: space-2 to space-3
- Standard: space-4 to space-6
- Generous: space-6 to space-8

Text Margins:
- Paragraph: space-4 to space-6
- Section: space-8 to space-12
- List items: space-2 to space-3
```

---

## Universal Component Design

### Button (Framework Agnostic)
```
Button Variants:
- Primary: Filled, prominent action
- Secondary: Outline or ghost, secondary action
- Tertiary: Minimal, tertiary action
- Destructive: Error color, destructive action
- Icon: Icon-only with label

Universal Properties:
- Height: 40px (mobile minimum), 44px (touch-friendly)
- Padding: 12px 24px (standard), 16px 32px (generous)
- Border Radius: 8px (rounded), 9999px (pill)
- Font Weight: 500-600
- Transitions: 150-300ms ease-in-out

States:
- Default: Base appearance
- Hover: Slight darkening or lightening
- Active: Pressed state, slight scale (0.98)
- Focus: Visible outline (2px)
- Disabled: 50% opacity, no pointer events
- Loading: Show spinner, disable interaction
```

### Input Field (Framework Agnostic)
```
Input Types:
- Text: Standard text input
- Email: Email validation
- Password: Password with toggle visibility
- Number: Number input with controls
- Search: Search input with clear button
- Textarea: Multi-line text input

Universal Properties:
- Height: 44px minimum (touch-friendly)
- Padding: 12px 16px
- Border: 1px solid color-neutral-300
- Border Radius: 8px
- Font Size: 16px (readable)
- Line Height: 1.5

States:
- Default: Neutral border
- Focus: Primary color border, ring
- Error: Error color border and ring
- Disabled: Neutral-100 background, no interaction
- Success: Success color border and ring
```

### Card (Framework Agnostic)
```
Card Types:
- Default: White background, subtle shadow
- Elevated: Higher elevation, more shadow
- Outlined: Transparent background, border only
- Glass: Frosted glass effect (backdrop-filter)

Universal Properties:
- Border Radius: 12px to 16px
- Padding: 20px to 24px
- Background: White or neutral-50
- Shadow: Subtle, layered for depth
- Border: Subtle (optional)

States:
- Default: Base appearance
- Hover: Slight elevation increase
- Active: Pressed state
- Disabled: 50% opacity
```

### Badge/Tag (Framework Agnostic)
```
Badge Types:
- Default: Neutral background
- Primary: Primary color background
- Success: Green background
- Warning: Orange/yellow background
- Error: Red background
- Outline: Border only

Universal Properties:
- Padding: 4px to 12px
- Border Radius: 9999px (pill)
- Font Size: 12px to 14px
- Font Weight: 500-600
- Text Transform: None (avoid uppercase)
```

---

## Universal Layout Patterns

### Container System (Responsive)
```
Container Widths:
- Mobile: 100% - 16px (4px margins)
- Tablet: 100% - 32px (16px margins)
- Desktop: 100% - 64px (32px margins)
- Large Desktop: 1200px max-width
- XL Desktop: 1400px max-width

Implementation (CSS):
.container {
  width: 100%;
  max-width: var(--container-width);
  margin: 0 auto;
  padding: 0 var(--container-padding);
}

Responsive:
Mobile: padding: 16px
Tablet: padding: 32px
Desktop: padding: 64px
```

### Grid System (Universal)
```
Grid Principles:
- Use CSS Grid or Flexbox
- Mobile-first: 1 column by default
- Progressive enhancement: Add columns on larger screens
- Gaps: 16px to 32px (space-4 to space-8)

Breakpoints:
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: 1024px - 1280px
- Large Desktop: 1280px+

Common Patterns:
- 2-column: Mobile 1 col, Desktop 2 cols
- 3-column: Mobile 1 col, Tablet 2 cols, Desktop 3 cols
- 4-column: Mobile 1 col, Tablet 2 cols, Desktop 4 cols
- Masonry: CSS columns or grid
```

### Navigation Patterns (Universal)
```
Mobile Navigation (< 640px):
- Hamburger menu with drawer/sheet
- Bottom tab bar (app-like)
- Slide-out side menu
- Full-screen overlay

Desktop Navigation (≥ 1024px):
- Horizontal top navigation
- Mega menu (for complex sites)
- Sidebar navigation (apps/dashboards)
- Combined (top + side)

Responsive Behavior:
- Mobile: Collapsed, accessible via trigger
- Desktop: Expanded, full navigation visible
- Transition: Smooth between states
```

---

## Universal Responsive Design

### Breakpoint System (Framework Agnostic)
```javascript
// Universal Breakpoints
const breakpoints = {
  mobile: 0,      // 0px - 639px
  tablet: 640,    // 640px - 1023px
  desktop: 1024,  // 1024px - 1279px
  wide: 1280,     // 1280px - 1535px
  ultra: 1536     // 1536px+
};

// CSS Implementation
@media (min-width: 640px) { /* Tablet styles */ }
@media (min-width: 1024px) { /* Desktop styles */ }
@media (min-width: 1280px) { /* Wide styles */ }
```

### Mobile-First Approach
```
1. Start with mobile layout
2. Add tablet enhancements
3. Add desktop enhancements
4. Add wide/ultra enhancements

Example Typography:
Mobile: 18px (text-lg)
Tablet: 20px (text-xl)
Desktop: 24px (text-2xl)
Large Desktop: 30px (text-3xl)

Example Grid:
Mobile: 1 column
Tablet: 2 columns
Desktop: 3 columns
Wide Desktop: 4 columns
```

### Touch Optimization (Mobile)
```
Minimum Touch Targets: 44px × 44px
- Buttons
- Links
- Form inputs
- Interactive elements

Spacing:
- Increase vertical spacing
- Larger margins between items
- More padding in containers

Gestures:
- Swipe for carousels
- Pull to refresh
- Pinch to zoom (where appropriate)
- Tap and hold for context
```

---

## Universal Animation System

### Animation Principles (Framework Agnostic)
```
Performance Guidelines:
- Use transform and opacity only (GPU-accelerated)
- Avoid animating width, height, top, left
- Use will-change sparingly
- Respect prefers-reduced-motion
- Keep animations under 500ms for UI
```

### Animation Timing (Universal)
```
Duration Scale:
- Micro: 150ms (hover, focus)
- Fast: 200-300ms (toggles, menus)
- Standard: 300-400ms (modals, transitions)
- Slow: 500-600ms (page transitions)
- Very Slow: 1000ms+ (continuous animations)

Easing Functions:
- Ease-out: Quick start, slow end (default)
- Ease-in-out: Slow start, slow end (gentle)
- Linear: Constant speed (continuous)
- Spring: Bouncy (playful, use sparingly)
```

### Common Animation Patterns
```
Fade In:
Opacity: 0 → 1
Duration: 300-500ms
Easing: ease-out

Slide Up:
TranslateY: 20px → 0
Opacity: 0 → 1
Duration: 400-500ms
Easing: ease-out

Scale In:
Scale: 0.9 → 1
Opacity: 0 → 1
Duration: 300-400ms
Easing: ease-out

Hover Lift:
TranslateY: 0 → -4px
Scale: 1 → 1.02
Duration: 200-300ms
Easing: ease-out

Button Press:
Scale: 1 → 0.98
Duration: 100ms
Easing: ease-out
```

---

## Z.ai Integration Patterns

### Vision Capabilities (VLM)
```
Use Cases:
- Image analysis and understanding
- Generate alt text for accessibility
- Analyze user-uploaded images
- Image moderation
- Visual search

Implementation:
1. Capture user image upload
2. Send to Z.ai VLM API
3. Get analysis/description
4. Use for features (auto-tagging, search, etc.)
```

### Text Generation (LLM)
```
Use Cases:
- Generate product descriptions
- Create blog content
- Generate FAQs
- Write email templates
- Chatbot responses

Implementation:
1. Define prompt template
2. Send to Z.ai LLM API
3. Get generated text
4. Display to user or save
```

### Text-to-Speech (TTS)
```
Use Cases:
- Audio descriptions for images
- Read blog posts aloud
- Voice navigation
- Accessibility for visually impaired

Implementation:
1. Get text content
2. Send to Z.ai TTS API
3. Get audio file
4. Play audio for user
```

### Speech-to-Text (ASR)
```
Use Cases:
- Voice commands
- Dictation for forms
- Voice search
- Accessibility

Implementation:
1. Capture microphone input
2. Send to Z.ai ASR API
3. Get transcribed text
4. Use in application
```

### Image Generation
```
Use Cases:
- Generate placeholder images
- Create custom illustrations
- Generate thumbnails
- AI-powered design assets

Implementation:
1. Define prompt
2. Send to Z.ai Image API
3. Get generated image
4. Display or save
```

### Video Generation
```
Use Cases:
- Product demonstrations
- Animated backgrounds
- Marketing videos
- Tutorial content

Implementation:
1. Define video concept
2. Send to Z.ai Video API
3. Get generated video
4. Display or embed
```

### Web Search
```
Use Cases:
- Fetch real-time information
- Product research
- Competitive analysis
- Content aggregation

Implementation:
1. Define search query
2. Send to Z.ai Web Search API
3. Get search results
4. Display to user
```

### Web Reading
```
Use Cases:
- Extract article content
- Scrape product pages
- Aggregate reviews
- Content curation

Implementation:
1. Provide URL
2. Send to Z.ai Web Reader API
3. Get extracted content
4. Process and display
```

### Z.ai Integration Example (Framework Agnostic)
```javascript
// Universal Z.ai Integration Pattern
class ZaiIntegration {
  constructor(apiKey) {
    this.apiKey = apiKey;
    this.baseUrl = 'https://api.z-ai.dev'; // Replace with actual base URL
  }

  async generateImage(prompt, options = {}) {
    const response = await fetch(`${this.baseUrl}/v1/images/generations`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${this.apiKey}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        prompt,
        size: options.size || '1024x1024',
        ...options
      })
    });
    return response.json();
  }

  async generateText(prompt, options = {}) {
    const response = await fetch(`${this.baseUrl}/v1/chat/completions`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${this.apiKey}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        messages: [{ role: 'user', content: prompt }],
        ...options
      })
    });
    return response.json();
  }

  // Add more methods for other Z.ai capabilities
}
```

---

## Framework-Specific Implementations

### React / Next.js
```jsx
// Component Structure
const Button = ({ variant, size, children, ...props }) => (
  <button
    className={`
      ${baseStyles}
      ${variantStyles[variant]}
      ${sizeStyles[size]}
    `}
    {...props}
  >
    {children}
  </button>
);

// State Management
import { useState, useEffect } from 'react';

// Animations
import { motion } from 'framer-motion';

// Styling Options
// 1. Tailwind CSS: className="..."
// 2. Styled Components: const Styled = styled.div``
// 3. CSS Modules: import styles from './styles.module.css'
// 4. CSS-in-JS: styled({ ... })
```

### Vue 3
```vue
<!-- Component Structure -->
<template>
  <button :class="computedClasses" v-bind="$attrs">
    <slot />
  </button>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps(['variant', 'size']);
const computedClasses = computed(() => `${baseClasses} ${variantStyles[props.variant]}`);
</script>

<!-- Styling Options -->
<!-- 1. Tailwind CSS: class="..." -->
<!-- 2. Scoped CSS: <style scoped> -->
<!-- 3. CSS Modules: :class="$style.className" -->
<!-- 4. VueUse: for composition -->
```

### Angular
```typescript
// Component Structure
@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  template: `
    <button [ngClass]="classes" [attr]="otherProps">
      <ng-content />
    </button>
  `,
  styles: [`
    .btn-primary { ... }
  `]
})
export class ButtonComponent {
  @Input() variant: 'primary' = 'primary';
  @Input() size: 'medium' = 'medium';
  
  get classes() {
    return `${baseClasses} ${variantStyles[this.variant]}`;
  }
}

// Styling Options
// 1. Angular Material: <button mat-button>
// 2. Tailwind CSS: [ngClass]
// 3. Scoped CSS: styleUrls
// 4. NgClass/NgStyle for dynamic
```

### Svelte
```svelte
<!-- Component Structure -->
<script>
  export let variant = 'primary';
  export let size = 'medium';
  
  $: classes = `${baseClasses} ${variantStyles[variant]}`;
</script>

<button class={classes} {...$$restProps}>
  <slot />
</button>

<style>
  .btn-primary { ... }
</style>

<!-- Styling Options -->
<!-- 1. Tailwind CSS: class="..." -->
<!-- 2. Scoped CSS: <style> -->
<!-- 3. CSS Modules: class={styles.className} -->
```

### Vanilla JavaScript
```javascript
// Component Structure
class Button {
  constructor(options) {
    this.variant = options.variant || 'primary';
    this.size = options.size || 'medium';
    this.element = options.element;
    this.onClick = options.onClick;
  }

  render() {
    this.element.className = this.getClasses();
    this.element.addEventListener('click', this.onClick);
  }

  getClasses() {
    return `${baseClasses} ${variantStyles[this.variant]}`;
  }
}

// Usage
const button = new Button({
  element: document.querySelector('#my-button'),
  variant: 'primary',
  onClick: () => console.log('Clicked!')
});
button.render();
```

---

## Platform-Specific Patterns

### Web (PWA)
```
Key Considerations:
- Responsive design (mobile to desktop)
- Keyboard navigation
- Screen reader support
- SEO optimization
- Offline support (Service Worker)
- Installability (Web App Manifest)
```

### Mobile (iOS/Android)
```
Key Considerations:
- Touch-optimized (44px targets)
- Gestures (swipe, pinch, long-press)
- Safe areas (notch, home indicator)
- Performance (60fps animations)
- Battery optimization
- Offline mode
```

### Desktop (Electron/Tauri)
```
Key Considerations:
- Keyboard shortcuts
- Window management
- Native menus
- File system access
- System notifications
- Performance optimizations
```

### Cross-Platform (React Native, Flutter)
```
Key Considerations:
- Platform-specific components
- Platform-specific navigation
- Platform-specific gestures
- Native look and feel
- Performance on devices
- Package size optimization
```

---

## Universal Accessibility

### WCAG AA Compliance (Framework Agnostic)
```
Perceivable:
- Provide text alternatives for non-text content
- Provide captions for audio/video
- Create content that can be presented in different ways
- Make it easier to see and hear content

Operable:
- Make all functionality available from a keyboard
- Give users enough time to read and use content
- Do not design content in a way that is known to cause seizures
- Provide ways to help users navigate, find content, and determine where they are

Understandable:
- Make text content readable and understandable
- Make content appear and operate in predictable ways
- Help users avoid and correct mistakes

Robust:
- Maximize compatibility with current and future user agents
```

### Keyboard Navigation
```
Tab Order:
- Logical and predictable
- Follows visual order
- Skip links for main content

Focus Visible:
- Clear focus indicators
- 2px minimum outline
- Color contrast compliant

Keyboard Shortcuts:
- Document and implement
- Intuitive and memorable
- Show in UI when available
```

### Screen Reader Support
```
Semantic HTML:
- Use proper elements (nav, main, section, article)
- Headings in logical order (h1 → h2 → h3)

ARIA Labels:
- aria-label for icon-only buttons
- aria-describedby for relationships
- aria-live for dynamic content

Alt Text:
- Descriptive for all images
- Empty for decorative images
- Contextual and helpful
```

---

## Universal Performance Optimization

### Performance Budget (Framework Agnostic)
```
Performance Targets:
- First Contentful Paint: < 1.8s
- Largest Contentful Paint: < 2.5s
- Time to Interactive: < 3.8s
- Cumulative Layout Shift: < 0.1
- First Input Delay: < 100ms
```

### Optimization Techniques
```
Images:
- Use modern formats (WebP, AVIF)
- Responsive images with srcset
- Lazy load below-fold images
- Optimize and compress
- Use CDN

CSS:
- Minify in production
- Remove unused CSS
- Critical CSS inline
- Async load non-critical CSS

JavaScript:
- Minify and bundle
- Code split by route
- Lazy load heavy components
- Tree-shake unused code
- Use modern syntax

Fonts:
- Subset fonts
- Use WOFF2 format
- Preload critical fonts
- Font-display: swap
```

---

## Universal Component Library (Design Specs)

### Button
```
Variants: primary, secondary, tertiary, destructive, ghost, link
Sizes: small (32px), medium (40px), large (48px)
States: default, hover, active, focus, disabled, loading

Primary Button:
- Background: primary color
- Text: white (contrast)
- Border: none
- Shadow: subtle
- Hover: slightly darker
- Active: scale 0.98

Secondary Button:
- Background: transparent
- Text: primary color
- Border: 1px primary color
- Hover: primary color background, white text
- Active: scale 0.98

Destructive Button:
- Background: error color
- Text: white
- Border: none
- Hover: slightly darker error
```

### Input Field
```
States: default, focus, error, success, disabled

Default:
- Background: white or neutral-50
- Border: 1px neutral-300
- Text: neutral-900
- Padding: 12px 16px
- Border radius: 8px

Focus:
- Border: primary color
- Ring: 2px primary color
- Box shadow: 0 0 0 3px primary/20

Error:
- Border: error color
- Ring: 2px error color
- Text: error color
- Helper text: error color

Disabled:
- Background: neutral-100
- Text: neutral-400
- Border: neutral-200
- Cursor: not-allowed
```

### Card
```
Variants: default, elevated, outlined, glass

Default Card:
- Background: white
- Border: 1px neutral-200
- Shadow: subtle layered
- Border radius: 12px
- Padding: 20px

Elevated Card:
- Background: white
- Border: 1px neutral-200
- Shadow: medium layered
- Hover: higher elevation

Glass Card:
- Background: rgba(255, 255, 255, 0.7)
- Backdrop-filter: blur(12px)
- Border: 1px rgba(255, 255, 255, 0.5)
- Shadow: subtle
```

### Modal/Dialog
```
Structure:
- Overlay (backdrop): semi-transparent black
- Container: white, centered, rounded
- Header: title + close button
- Body: main content
- Footer: actions (right-aligned)

States:
- Open: visible, animated in
- Closed: hidden, animated out
- Animating: during transition

Accessibility:
- Focus trap
- Escape to close
- Click outside to close
- ARIA attributes
```

---

## Universal Design Tokens

### Complete Token Set (CSS Variables)
```css
:root {
  /* Colors */
  --color-primary: 0 0% 10%;
  --color-secondary: 215 16% 47%;
  --color-foreground: 0 0% 10%;
  --color-background: 0 0% 100%;
  --color-muted: 215 16% 47%;
  
  /* Neutrals */
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
  
  /* Semantic */
  --color-success: 142 76% 36%;
  --color-warning: 38 92% 50%;
  --color-error: 0 84% 60%;
  --color-info: 199 89% 48%;
  --color-ai-accent: 266 54% 51%;
  --color-ai-secondary: 190 95% 52%;
  
  /* Typography */
  --font-serif: 'Playfair Display', 'Georgia', serif;
  --font-sans: 'Inter', system-ui, sans-serif;
  --font-mono: 'JetBrains Mono', monospace;
  
  --text-xs: 0.75rem;
  --text-sm: 0.875rem;
  --text-base: 1rem;
  --text-lg: 1.125rem;
  --text-xl: 1.25rem;
  --text-2xl: 1.5rem;
  --text-3xl: 1.875rem;
  --text-4xl: 2.25rem;
  --text-5xl: 3rem;
  --text-6xl: 3.75rem;
  --text-7xl: 4.5rem;
  --text-8xl: 6rem;
  
  --leading-tight: 1.25;
  --leading-normal: 1.5;
  --leading-relaxed: 1.625;
  --leading-loose: 2;
  
  /* Spacing */
  --space-1: 0.25rem;
  --space-2: 0.5rem;
  --space-3: 0.75rem;
  --space-4: 1rem;
  --space-5: 1.25rem;
  --space-6: 1.5rem;
  --space-8: 2rem;
  --space-10: 2.5rem;
  --space-12: 3rem;
  --space-16: 4rem;
  --space-20: 5rem;
  --space-24: 6rem;
  --space-32: 8rem;
  
  /* Radii */
  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 12px;
  --radius-xl: 16px;
  --radius-2xl: 24px;
  --radius-3xl: 32px;
  --radius-full: 9999px;
  
  /* Shadows */
  --shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  --shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);
  --shadow-md: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1);
  --shadow-lg: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1);
  --shadow-xl: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  
  /* Transitions */
  --transition-fast: 150ms ease-out;
  --transition-base: 200ms ease-out;
  --transition-slow: 300ms ease-out;
  
  /* Z-Index */
  --z-dropdown: 100;
  --z-sticky: 200;
  --z-fixed: 300;
  --z-modal-backdrop: 400;
  --z-modal: 500;
  --z-popover: 600;
  --z-tooltip: 700;
}

/* Dark Theme Override */
[data-theme="dark"] {
  --color-background: 0 0% 5%;
  --color-foreground: 0 0% 95%;
  --color-muted: 215 20% 65%;
  --neutral-50: 40 20% 10%;
  --neutral-100: 40 20% 15%;
  --neutral-200: 40 15% 20%;
  --neutral-300: 40 10% 25%;
}
```

---

## Universal Design Patterns

### Hero Section (Framework Agnostic)
```
Purpose: Capture attention, communicate value proposition

Elements:
- Headline: Clear, compelling, benefit-focused
- Subheadline: Supporting context or explanation
- Primary CTA: Main desired action
- Secondary CTA: Learn more or explore
- Visual: Product screenshot, illustration, or image
- Social Proof: Logos, testimonials, metrics

Layout Options:
- Centered: Headline centered, visual below
- Split: Text left, visual right (desktop)
- Full-width Visual: Full-width image, text overlay
- Minimal: Text only, very clean

Responsive:
- Mobile: Stacked, vertical centering
- Desktop: Horizontal split or centered
```

### Features/Benefits Section
```
Purpose: Communicate value and capabilities

Elements:
- Section Title: Clear, benefit-oriented
- Feature Items: 3-6 key benefits
- Icons: Visual representation
- Descriptions: Clear, concise explanations
- Optional: Links to learn more

Layout Options:
- Grid: 3-column grid (2 on tablet, 1 on mobile)
- List: Vertical list with icons
- Cards: Card-based layout
- Alternating: Icon left/text right, alternating rows

Responsive:
- Mobile: 1 column or 2 columns
- Tablet: 2 or 3 columns
- Desktop: 3 or 4 columns
```

### Social Proof Section
```
Purpose: Build trust and credibility

Elements:
- Section Title: Social proof heading
- Testimonials: Customer quotes with photos
- Logos: Client/partner company logos
- Metrics: Key numbers (users, satisfaction, etc.)
- Case Studies: Success stories

Layout Options:
- Grid: Cards for testimonials
- Carousel: Horizontal scrolling for logos
- Stats: Number display for metrics
- Mixed: Testimonials + logos + metrics

Responsive:
- Mobile: 1 column, stacked
- Desktop: 2-4 columns, horizontal scrolling
```

### Pricing Section
```
Purpose: Communicate pricing and plans

Elements:
- Section Title: Pricing heading
- Plans: 2-4 pricing tiers
- Features: What's included in each plan
- CTA: Select plan or start trial
- Highlight: Recommended plan badge

Layout Options:
- Cards: Card-based pricing
- Table: Comparison table
- Toggle: Monthly/annual toggle
- List: Simple list for 1-2 plans

Responsive:
- Mobile: 1 column, stacked
- Desktop: 3-4 columns, horizontal
```

### FAQ Section
```
Purpose: Answer common questions

Elements:
- Section Title: FAQ heading
- Questions: 5-8 common questions
- Answers: Clear, helpful responses
- Format: Accordion or list

Layout Options:
- Accordion: Expandable questions
- List: All questions visible
- Grid: 2-column for long FAQs

Responsive:
- Mobile: 1 column, accordion preferred
- Desktop: 2 columns if space allows
```

---

## Universal Development Workflow

### 1. Analysis Phase
```
Deliverables:
- Project brief (goals, audience, constraints)
- User personas
- Competitive analysis
- Design principles
- Success metrics
```

### 2. Design Phase
```
Deliverables:
- Mood board or style guide
- Wireframes (low-fidelity)
- Mockups (high-fidelity)
- Prototypes (interactive)
- Design system documentation
```

### 3. Development Phase
```
Deliverables:
- Component library
- Page templates
- Feature implementations
- Z.ai integrations (if needed)
- Testing suite
```

### 4. Launch Phase
```
Deliverables:
- Production build
- Performance optimization
- SEO optimization
- Analytics setup
- Monitoring setup
```

### 5. Maintenance Phase
```
Deliverables:
- Bug fixes
- Feature updates
- Performance monitoring
- Analytics review
- User feedback integration
```

---

## Quality Assurance (Universal)

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
- [ ] Undo capability for destructive actions

### Responsive Quality
- [ ] Works on mobile (320px-640px)
- [ ] Works on tablet (640px-1024px)
- [ ] Works on desktop (1024px+)
- [ ] No horizontal scrolling
- [ ] Touch targets are 44px minimum
- [ ] Text is readable without zoom
- [ ] Layout adapts gracefully

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
- [ ] Images are optimized
- [ ] Code is minified and split

---

## Usage Guide

### How to Use @nayeamui

#### 1. Start with @nayeamui
```
Prompt: "@nayeamui [your project description]"

Examples:
"@nayeamui Create a modern SaaS landing page using React and Tailwind"
"@nayeamui Design an e-commerce store with Vue 3 and user authentication"
"@nayeamui Build a portfolio website for a photographer with dark mode"
"@nayeamui Create a dashboard app using Angular with real-time data"
```

#### 2. The Skill Will
1. **Analyze** your project type, framework, and requirements
2. **Choose** appropriate design decisions (colors, typography, layout)
3. **Design** framework-agnostic components
4. **Provide** implementation guidance for your chosen framework
5. **Integrate** Z.ai capabilities where beneficial
6. **Ensure** responsive, accessible, performant results

#### 3. Get World-Class Results
- Beautiful, tailored UI/UX design
- Framework-agnostic patterns (works with React, Vue, Angular, etc.)
- Platform-independent (web, mobile, desktop)
- Z.ai-ready for AI features
- Production-ready code
- Universal best practices

---

## Examples by Framework

### React + Tailwind + Next.js
```
@nayeamui Create a modern SaaS landing page

The skill will:
- Choose tech-appropriate color palette
- Design React components with hooks
- Use Tailwind CSS for styling
- Implement Framer Motion for animations
- Create responsive layouts
- Add Z.ai chatbot integration
- Optimize for Next.js performance
```

### Vue 3 + Vite + Tailwind
```
@nayeamui Design an e-commerce product page

The skill will:
- Design Vue 3 Composition API components
- Use Vite for fast development
- Implement Tailwind CSS styling
- Create reactive state management
- Design responsive product gallery
- Add Z.ai product recommendations
- Optimize for Vue performance
```

### Angular + Material
```
@nayeamui Build a dashboard application

The skill will:
- Design Angular components with decorators
- Use Angular Material for UI
- Implement RxJS for data flow
- Create responsive dashboard layout
- Design data visualization
- Add Z.ai data insights
- Optimize for Angular performance
```

### Svelte + Skeleton
```
@nayeamui Create a portfolio website

The skill will:
- Design Svelte components
- Use Skeleton UI for styling
- Implement Svelte stores for state
- Create smooth animations
- Design responsive gallery
- Add Z.ai image generation
- Optimize for Svelte performance
```

### Vanilla JS + CSS
```
@nayeamui Build a simple landing page

The skill will:
- Design vanilla JS components
- Use modern CSS (or Tailwind)
- Implement plain state management
- Create smooth animations
- Design responsive layouts
- Add Z.ai features as needed
- Optimize for performance
```

---

## Conclusion

The universal `@nayeamui` skill is:

✅ **Framework Agnostic** - Works with React, Vue, Angular, Svelte, vanilla JS, etc.  
✅ **Platform Independent** - Web, mobile, desktop, cross-platform  
✅ **Technology Inclusive** - Integrates with any tech stack  
✅ **Z.ai Ready** - Seamlessly integrates AI capabilities  
✅ **Adaptive & Intelligent** - Analyzes and tailors to each project  
✅ **Universal Best Practices** - Industry-standard, proven patterns  
✅ **Production Ready** - Performance, accessibility, quality  

**Use `@nayeamui` in ANY project to get world-class, adaptive UI/UX design that works with YOUR technology stack.** 🚀✨
