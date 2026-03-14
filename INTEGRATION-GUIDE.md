# @nayeamui Universal Integration Guide

## 📖 Introduction

This guide explains how to use the `@nayeamui` universal UI/UX design skill in **any project**, regardless of:
- Frontend framework (React, Vue, Angular, Svelte, vanilla)
- Platform (web, mobile, desktop)
- Styling solution (Tailwind, CSS, styled-components)
- AI integration (Z.ai or none)

---

## 🎯 Core Philosophy

`@nayeamui` is **design-first, implementation-agnostic**. This means:

1. **Design principles** are universal and apply to any project
2. **Implementation details** adapt to your chosen technology
3. **Code generation** respects your framework and conventions
4. **AI integration** follows your project's architecture

---

## 📂 File Structure

```
your-project/
├── nayeamui-skill.md          # Complete design system (read only)
├── NAYEAMUI-QUICK-REF.md      # Quick reference (read only)
├── README-UNIVERSAL.md        # Universal documentation (this file)
├── INTEGRATION-GUIDE.md       # This file
└── [your project files]
```

**Important:** Never modify the skill files directly. They serve as reference material for AI assistants.

---

## 🚀 Quick Start (3 Steps)

### Step 1: Copy the Skill Files
Copy these files to your project root:
- `nayeamui-skill.md`
- `NAYEAMUI-QUICK-REF.md`

### Step 2: Reference in Your Prompt
When working with an AI assistant, include:

```
"Please use the @nayeamui universal design system for this task."
```

### Step 3: Specify Your Tech Stack
Add your technology details:

```
"Tech stack:
- Framework: [React/Vue/Angular/Svelte/vanilla]
- Styling: [Tailwind/CSS/styled-components]
- Platform: [web/mobile/desktop]
- AI: [Z.ai/none/other]"
```

---

## 💡 Usage Patterns

### Pattern 1: New Project Setup
```
"Using @nayeamui, help me set up a new [project type] project.

Tech details:
- Framework: [your framework]
- Version: [version number]
- Build tool: [Vite/Webpack/Next.js/etc.]
- Styling: [your choice]
- Additional libs: [libraries]

I need:
1. Project structure
2. Design tokens setup
3. Core components
4. Page layouts
5. [specific requirements]"
```

### Pattern 2: Component Design
```
"Using @nayeamui, design a [component type] component.

Requirements:
- Purpose: [what it does]
- Variants: [primary/secondary/etc.]
- States: [default/hover/focus/etc.]
- Accessibility: [ARIA labels, keyboard nav]
- Responsive: [mobile-first behavior]

Framework: [your framework]
Styling: [your approach]"
```

### Pattern 3: Page/Section Design
```
"Using @nayeamui, design a [page/section type] section.

Content:
- Headline: [text]
- Subheadline: [text]
- Features: [list of features]
- Call-to-action: [text and action]

Design requirements:
- Layout: [grid/stacked/split/etc.]
- Visual style: [minimal/premium/playful/etc.]
- Responsive: [breakpoint behavior]
- Animation: [type and timing]"
```

### Pattern 4: Z.ai Integration
```
"Using @nayeamui, integrate Z.ai [feature name].

Requirements:
- Feature: [VLM/LLM/TTS/ASR/Image Gen/Video Gen]
- Use case: [specific use case]
- UI: [how user interacts]
- Framework: [your framework]
- Architecture: [client/server/both]

Provide:
1. Component design
2. API integration code
3. State management
4. Error handling
5. Loading states"
```

---

## 🎨 Design Token Implementation

### CSS Variables (Universal)
```css
/* In your global CSS file */
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
  --shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  --shadow-md: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  --shadow-lg: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
  --shadow-xl: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  
  /* Transitions */
  --transition-fast: 150ms ease-out;
  --transition-base: 200ms ease-out;
  --transition-slow: 300ms ease-out;
}

/* Dark Theme */
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

### JavaScript/TypeScript (For Dynamic Access)
```typescript
// design-tokens.ts
export const tokens = {
  colors: {
    primary: '0 0% 10%',
    secondary: '215 16% 47%',
    foreground: '0 0% 10%',
    background: '0 0% 100%',
    muted: '215 16% 47%',
    success: '142 76% 36%',
    warning: '38 92% 50%',
    error: '0 84% 60%',
    aiAccent: '266 54% 51%',
    neutral: {
      50: '40 20% 98%',
      100: '40 20% 92%',
      200: '40 20% 85%',
      300: '40 15% 75%',
      400: '40 10% 60%',
      500: '40 10% 50%',
      600: '40 10% 40%',
      700: '40 10% 30%',
      800: '40 10% 20%',
      900: '40 10% 10%',
    }
  },
  typography: {
    xs: '0.75rem',
    sm: '0.875rem',
    base: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
    '2xl': '1.5rem',
    '3xl': '1.875rem',
    '4xl': '2.25rem',
    '5xl': '3rem',
    '6xl': '3.75rem',
    '7xl': '4.5rem',
    '8xl': '6rem',
  },
  spacing: {
    1: '0.25rem',
    2: '0.5rem',
    3: '0.75rem',
    4: '1rem',
    5: '1.25rem',
    6: '1.5rem',
    8: '2rem',
    10: '2.5rem',
    12: '3rem',
    16: '4rem',
    20: '5rem',
    24: '6rem',
    32: '8rem',
  },
  radii: {
    sm: '4px',
    md: '8px',
    lg: '12px',
    xl: '16px',
    '2xl': '24px',
    '3xl': '32px',
    full: '9999px',
  }
} as const;
```

---

## 🔧 Framework-Specific Setup

### React / Next.js

#### Project Structure
```
src/
├── components/
│   ├── ui/              # Basic UI components (button, input, etc.)
│   ├── layout/          # Layout components (header, footer, etc.)
│   └── features/        # Feature-specific components
├── lib/
│   ├── design-tokens.ts # Token definitions
│   ├── utils.ts         # Utility functions
│   └── constants.ts     # Constants
├── styles/
│   └── globals.css      # Global CSS with tokens
└── app/
    ├── layout.tsx       # Root layout
    ├── page.tsx         # Home page
    └── [dynamic]/       # Dynamic routes
```

#### Global CSS (styles/globals.css)
```css
@import 'tailwindcss';

:root {
  /* Design tokens from @nayeamui */
  --color-primary: 0 0% 10%;
  --color-secondary: 215 16% 47%;
  --color-foreground: 0 0% 10%;
  --color-background: 0 0% 100%;
  --color-muted: 215 16% 47%;
  
  /* Add all other tokens from design system... */
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: var(--font-sans);
  background: hsl(var(--color-background));
  color: hsl(var(--color-foreground));
  line-height: var(--leading-normal);
}
```

#### Tailwind Config (tailwind.config.ts)
```typescript
import type { Config } from 'tailwindcss'

const config: Config = {
  theme: {
    extend: {
      colors: {
        primary: 'hsl(var(--color-primary))',
        secondary: 'hsl(var(--color-secondary))',
        foreground: 'hsl(var(--color-foreground))',
        background: 'hsl(var(--color-background))',
        muted: 'hsl(var(--color-muted))',
        success: 'hsl(var(--color-success))',
        warning: 'hsl(var(--color-warning))',
        error: 'hsl(var(--color-error))',
        aiAccent: 'hsl(var(--color-ai-accent))',
        neutral: {
          50: 'hsl(var(--neutral-50))',
          100: 'hsl(var(--neutral-100))',
          200: 'hsl(var(--neutral-200))',
          300: 'hsl(var(--neutral-300))',
          400: 'hsl(var(--neutral-400))',
          500: 'hsl(var(--neutral-500))',
          600: 'hsl(var(--neutral-600))',
          700: 'hsl(var(--neutral-700))',
          800: 'hsl(var(--neutral-800))',
          900: 'hsl(var(--neutral-900))',
        }
      },
      fontSize: {
        xs: 'var(--text-xs)',
        sm: 'var(--text-sm)',
        base: 'var(--text-base)',
        lg: 'var(--text-lg)',
        xl: 'var(--text-xl)',
        '2xl': 'var(--text-2xl)',
        '3xl': 'var(--text-3xl)',
        '4xl': 'var(--text-4xl)',
        '5xl': 'var(--text-5xl)',
        '6xl': 'var(--text-6xl)',
        '7xl': 'var(--text-7xl)',
        '8xl': 'var(--text-8xl)',
      },
      spacing: {
        1: 'var(--space-1)',
        2: 'var(--space-2)',
        3: 'var(--space-3)',
        4: 'var(--space-4)',
        5: 'var(--space-5)',
        6: 'var(--space-6)',
        8: 'var(--space-8)',
        10: 'var(--space-10)',
        12: 'var(--space-12)',
        16: 'var(--space-16)',
        20: 'var(--space-20)',
        24: 'var(--space-24)',
        32: 'var(--space-32)',
      },
      borderRadius: {
        sm: 'var(--radius-sm)',
        md: 'var(--radius-md)',
        lg: 'var(--radius-lg)',
        xl: 'var(--radius-xl)',
        '2xl': 'var(--radius-2xl)',
        '3xl': 'var(--radius-3xl)',
        full: 'var(--radius-full)',
      }
    }
  }
}

export default config
```

### Vue 3

#### Project Structure
```
src/
├── components/
│   ├── ui/              # UI components
│   └── features/        # Feature components
├── composables/         # Composable functions
├── styles/
│   ├── tokens.css       # Design tokens
│   └── main.css         # Global styles
└── App.vue
```

#### Global CSS (styles/tokens.css)
```css
:root {
  /* Same tokens as React example */
}
```

#### Component Example
```vue
<script setup lang="ts">
// Button.vue
import { computed } from 'vue'

const props = defineProps<{
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  disabled?: boolean
}>()

const emit = defineEmits<{
  click: [event: MouseEvent]
}>()

const classes = computed(() => {
  const base = 'inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2'
  
  const variants = {
    primary: 'bg-primary text-white hover:bg-primary/90 focus:ring-primary',
    secondary: 'bg-secondary text-white hover:bg-secondary/90 focus:ring-secondary',
    outline: 'border-2 border-primary text-primary hover:bg-primary hover:text-white'
  }
  
  const sizes = {
    sm: 'px-3 py-1.5 text-sm h-8',
    md: 'px-4 py-2 text-base h-10',
    lg: 'px-6 py-3 text-lg h-12'
  }
  
  return [
    base,
    variants[props.variant || 'primary'],
    sizes[props.size || 'md'],
    props.disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'
  ].join(' ')
})
</script>

<template>
  <button
    :class="classes"
    :disabled="disabled"
    @click="(e) => !disabled && emit('click', e)"
  >
    <slot />
  </button>
</template>
```

### Angular

#### Project Structure
```
src/
├── app/
│   ├── components/
│   │   ├── ui/          # UI components
│   │   └── features/    # Feature components
│   ├── core/
│   │   ├── services/    # Core services
│   │   └── models/      # Data models
│   └── styles/
│       ├── tokens.scss  # Design tokens
│       └── global.scss  # Global styles
└── main.ts
```

#### Global SCSS (styles/tokens.scss)
```scss
:root {
  /* Design tokens */
}

button {
  // Use tokens in component styles
}
```

### Svelte / SvelteKit

#### Project Structure
```
src/
├── lib/
│   ├── components/
│   │   ├── ui/
│   │   └── features/
│   └── styles/
│       ├── tokens.css
│       └── app.css
└── routes/
    └── +layout.svelte
```

### Vanilla JavaScript

#### Project Structure
```
src/
├── js/
│   ├── components/     # Component classes
│   ├── utils/          # Utility functions
│   └── api/            # API calls
├── css/
│   ├── tokens.css      # Design tokens
│   └── main.css       # Global styles
└── index.html
```

---

## 🤖 Z.ai Integration (Framework Agnostic)

### Backend API Pattern
```typescript
// Universal API wrapper for Z.ai
class ZaiService {
  private baseUrl: string;
  private apiKey: string;

  constructor(apiKey: string, baseUrl: string = '/api/zai') {
    this.apiKey = apiKey;
    this.baseUrl = baseUrl;
  }

  async generateImage(prompt: string, options = {}) {
    const response = await fetch(`${this.baseUrl}/image-generation`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.apiKey}`
      },
      body: JSON.stringify({
        prompt,
        size: options.size || '1024x1024',
        ...options
      })
    });
    
    if (!response.ok) {
      throw new Error(`Image generation failed: ${response.statusText}`);
    }
    
    return response.json();
  }

  async generateText(prompt: string, options = {}) {
    const response = await fetch(`${this.baseUrl}/llm`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.apiKey}`
      },
      body: JSON.stringify({
        messages: [{ role: 'user', content: prompt }],
        ...options
      })
    });
    
    if (!response.ok) {
      throw new Error(`Text generation failed: ${response.statusText}`);
    }
    
    return response.json();
  }

  async analyzeImage(imageUrl: string, question: string) {
    const response = await fetch(`${this.baseUrl}/vlm`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.apiKey}`
      },
      body: JSON.stringify({
        messages: [{
          role: 'user',
          content: [
            { type: 'text', text: question },
            { type: 'image_url', image_url: { url: imageUrl } }
          ]
        }]
      })
    });
    
    if (!response.ok) {
      throw new Error(`Image analysis failed: ${response.statusText}`);
    }
    
    return response.json();
  }

  async textToSpeech(text: string, options = {}) {
    const response = await fetch(`${this.baseUrl}/tts`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.apiKey}`
      },
      body: JSON.stringify({
        text,
        voice: options.voice || 'default',
        speed: options.speed || 1.0,
        ...options
      })
    });
    
    if (!response.ok) {
      throw new Error(`Text-to-speech failed: ${response.statusText}`);
    }
    
    return response.json();
  }

  async speechToText(audioFile: File, options = {}) {
    const formData = new FormData();
    formData.append('file', audioFile);
    
    const response = await fetch(`${this.baseUrl}/asr`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${this.apiKey}`
      },
      body: formData
    });
    
    if (!response.ok) {
      throw new Error(`Speech-to-text failed: ${response.statusText}`);
    }
    
    return response.json();
  }

  async webSearch(query: string, options = {}) {
    const response = await fetch(`${this.baseUrl}/web-search`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.apiKey}`
      },
      body: JSON.stringify({
        query,
        ...options
      })
    });
    
    if (!response.ok) {
      throw new Error(`Web search failed: ${response.statusText}`);
    }
    
    return response.json();
  }

  async webRead(url: string, options = {}) {
    const response = await fetch(`${this.baseUrl}/web-reader`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.apiKey}`
      },
      body: JSON.stringify({
        url,
        ...options
      })
    });
    
    if (!response.ok) {
      throw new Error(`Web read failed: ${response.statusText}`);
    }
    
    return response.json();
  }

  async generateVideo(prompt: string, options = {}) {
    const response = await fetch(`${this.baseUrl}/video-generation`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.apiKey}`
      },
      body: JSON.stringify({
        prompt,
        duration: options.duration || 5,
        ...options
      })
    });
    
    if (!response.ok) {
      throw new Error(`Video generation failed: ${response.statusText}`);
    }
    
    return response.json();
  }
}

// Usage Example
const zai = new ZaiService('your-api-key');

// Generate an image
const image = await zai.generateImage('A beautiful sunset over mountains');

// Generate text
const text = await zai.generateText('Write a product description for a camera');

// Analyze image
const analysis = await zai.analyzeImage('https://example.com/photo.jpg', 'Describe this image');
```

### Component Integration Pattern
```typescript
// Framework-agnostic component with Z.ai integration

// 1. Define the component interface/props
interface ImageGeneratorProps {
  onGenerate?: (imageUrl: string) => void;
  disabled?: boolean;
}

// 2. Implement the component
function ImageGenerator({ onGenerate, disabled }: ImageGeneratorProps) {
  const [prompt, setPrompt] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleGenerate = async () => {
    if (!prompt.trim()) return;
    
    setLoading(true);
    setError('');
    
    try {
      const result = await zai.generateImage(prompt);
      
      if (result.success && result.data?.imageUrl) {
        onGenerate?.(result.data.imageUrl);
      } else {
        setError('Failed to generate image');
      }
    } catch (err) {
      setError('An error occurred');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="image-generator">
      <textarea
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Describe the image you want to generate..."
        rows={3}
      />
      
      {error && <div className="error">{error}</div>}
      
      <button
        onClick={handleGenerate}
        disabled={disabled || loading}
        className="btn-primary"
      >
        {loading ? 'Generating...' : 'Generate Image'}
      </button>
    </div>
  );
}
```

---

## 📊 Design System Integration

### Step 1: Set Up Design Tokens

Choose your approach:

**Option A: CSS Variables (Recommended)**
```css
/* global.css */
:root {
  /* All design tokens from @nayeamui */
}
```

**Option B: Tailwind Config**
```typescript
/* tailwind.config.ts */
export default {
  theme: {
    extend: {
      colors: { /* tokens */ },
      fontSize: { /* tokens */ },
      spacing: { /* tokens */ },
      borderRadius: { /* tokens */ }
    }
  }
}
```

**Option C: JavaScript/TypeScript Object**
```typescript
/* design-tokens.ts */
export const tokens = { /* tokens */ };
```

### Step 2: Create Base Components

Start with atomic components:
- Button
- Input
- Card
- Badge
- Modal/Dialog

### Step 3: Create Layout Components

Build higher-level components:
- Header/Navigation
- Footer
- Container
- Grid
- Section

### Step 4: Build Feature Components

Combine atomic and layout components:
- Hero Section
- Features Grid
- Testimonials
- Pricing Cards
- Contact Form

---

## ✅ Quality Assurance

### Universal QA Checklist

#### Visual Design
- [ ] Consistent spacing using spacing scale
- [ ] Proper visual hierarchy with typography scale
- [ ] Color contrast meets WCAG AA (4.5:1 normal, 3:1 large)
- [ ] No broken layouts at any breakpoint
- [ ] Images optimized (WebP/AVIF, responsive)
- [ ] Typography is readable (line-height 1.5+)
- [ ] Animations are smooth and purposeful

#### Functionality
- [ ] All links work correctly
- [ ] Forms validate and submit properly
- [ ] Error messages are clear and actionable
- [ ] Loading states for all async operations
- [ ] Empty states with helpful messaging
- [ ] Success feedback after completed actions
- [ ] Undo capability for destructive actions

#### Responsiveness
- [ ] Works on mobile (320px-640px)
- [ ] Works on tablet (640px-1024px)
- [ ] Works on desktop (1024px-1280px)
- [ ] Works on wide screens (1280px+)
- [ ] No horizontal scrolling
- [ ] Touch targets are 44px minimum
- [ ] Text is readable without zoom
- [ ] Layout adapts gracefully

#### Accessibility
- [ ] Passes WCAG AA checker
- [ ] Fully keyboard navigable
- [ ] Screen reader compatible
- [ ] Focus indicators are visible
- [ ] Alt text on all images
- [ ] ARIA labels where needed
- [ ] Color contrast compliant
- [ ] Reduced motion support

#### Performance
- [ ] Lighthouse score 90+ on all metrics
- [ ] First Contentful Paint < 1.8s
- [ ] Largest Contentful Paint < 2.5s
- [ ] Time to Interactive < 3.8s
- [ ] Cumulative Layout Shift < 0.1
- [ ] Total Blocking Time < 200ms
- [ ] Images are optimized
- [ ] Code is minified and split

---

## 🎓 Best Practices

### 1. Always Be Explicit About Your Stack
```
Good:
"Using @nayeamui, create a button component for React 18 with TypeScript and Tailwind CSS."

Bad:
"Create a button component."
```

### 2. Specify Requirements Clearly
```
Good:
"Using @nayeamui, create a hero section with:
- Large headline (text-6xl)
- Subheadline (text-lg)
- Two CTAs (primary and secondary)
- Background image with overlay
- Responsive: stacked on mobile, split on desktop"

Bad:
"Create a hero section."
```

### 3. Mention Accessibility Requirements
```
Good:
"Create a form with:
- All inputs have associated labels
- Error messages with aria-live
- Keyboard navigation support
- Focus indicators visible
- Touch targets 44px minimum"

Bad:
"Create a form."
```

### 4. Ask for Framework-Specific Code
```
Good:
"Provide React TypeScript code using hooks and Tailwind CSS classes."

Bad:
"Provide code."
```

### 5. Include Z.ai Requirements When Needed
```
Good:
"Integrate Z.ai VLM for image auto-tagging:
- Use z-ai-web-dev-sdk in backend
- Create API endpoint for image analysis
- Display tags in UI after upload
- Show loading and error states"

Bad:
"Add image auto-tagging."
```

---

## 📚 Additional Resources

### Core Documentation
- `nayeamui-skill.md` - Complete design system
- `NAYEAMUI-QUICK-REF.md` - Quick reference
- `README-UNIVERSAL.md` - Universal overview

### External Resources
- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [MDN Web Docs](https://developer.mozilla.org/)
- [Can I Use](https://caniuse.com/)
- [Lighthouse](https://developers.google.com/web/tools/lighthouse)

### Framework Documentation
- [React](https://react.dev/)
- [Vue 3](https://vuejs.org/)
- [Angular](https://angular.dev/)
- [Svelte](https://svelte.dev/)
- [Tailwind CSS](https://tailwindcss.com/)

---

## 🚀 Getting Help

When you need help, be specific:

```
"Using @nayeamui, I need help with:

[What you're trying to do]

Context:
- Framework: [your framework]
- Styling: [your approach]
- Platform: [web/mobile/desktop]
- Current issue: [describe the problem]

What I've tried:
[show your code or approach]

Expected behavior:
[what you want to happen]"
```

---

## 🌟 Summary

The `@nayeamui` universal UI/UX design skill is now ready for use in **ANY project**:

✅ **Framework Agnostic** - React, Vue, Angular, Svelte, vanilla  
✅ **Platform Independent** - Web, mobile, desktop, cross-platform  
✅ **Styling Agnostic** - Tailwind, CSS, styled-components, SCSS  
✅ **Z.ai Ready** - Seamless AI integration patterns  
✅ **Universal Tokens** - Colors, typography, spacing, radii  
✅ **Component Patterns** - Framework-agnostic design specs  
✅ **Quality Assured** - Accessibility, performance, responsive  
✅ **Well Documented** - Complete guides and examples  

**Start using @nayeamui in your next project for world-class UI/UX design!** 🚀✨
