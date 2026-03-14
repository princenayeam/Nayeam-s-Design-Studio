# Complete Landing Page Recreation Prompt for Z.AI

Copy and paste this entire prompt into Z.AI to recreate the entire landing page from scratch.

---

## 📋 PROJECT OVERVIEW

Create a modern, professional photography portfolio landing page for a design studio named "Nayeam Design Studio". The page should showcase photography services, portfolio work, journal/blog entries, and allow users to book sessions.

**Tech Stack:**
- Framework: Next.js 16 with App Router (TypeScript)
- Styling: Tailwind CSS with custom design tokens
- UI Components: shadcn/ui (Card, Button, Input, Select, Badge)
- Animations: Framer Motion
- Icons: Lucide React
- Database: Prisma ORM with SQLite (for bookings data)
- API: Next.js API routes
- State Management: React hooks (useState, useEffect)

**Design Philosophy:**
- Clean, minimalist aesthetic with subtle glassmorphism effects
- Mobile-first responsive design (breakpoints: 640px, 768px, 1024px, 1280px)
- Stone/neutral color palette with soft, warm tones (NOT blue or indigo)
- Serif font for headings, sans-serif for body text
- Smooth, subtle animations (avoid flashy/excessive animations)
- Proper visual hierarchy and whitespace
- WCAG AA accessibility compliant

---

## 🎨 DESIGN SYSTEM SPECIFICATIONS

### Color System (HSL-based)

**Base Colors:**
```css
--color-primary: 0 0% 10%;       /* Nearly black/dark gray */
--color-foreground: 0 0% 10%;   /* Main text */
--color-background: 0 0% 100%;  /* White background */
--color-muted: 215 16% 47%;      /* Muted gray */

/* Neutral Palette (Stone-based) */
--neutral-50: 40 20% 98%;   /* Lightest backgrounds */
--neutral-100: 40 20% 92%;  /* Light backgrounds */
--neutral-200: 40 20% 85%;  /* Medium backgrounds */
--neutral-300: 40 15% 75%;  /* Darker backgrounds */
--neutral-400: 40 10% 60%;   /* Borders */
--neutral-500: 40 10% 50%;   /* Muted text */
--neutral-600: 40 10% 40%;   /* Body text */
--neutral-700: 40 10% 30%;   /* Heading text */
--neutral-800: 40 10% 20%;   /* Dark heading */
--neutral-900: 40 10% 10%;   /* Darkest text */

/* Semantic Colors */
--color-success: 142 76% 36%;  /* Positive actions */
--color-warning: 38 92% 50%;   /* Caution messages */
--color-error: 0 84% 60%;      /* Errors, destructive */
```

**Typography Scale (rem-based):**
```css
--font-serif: 'Playfair Display', 'Georgia', 'Times New Roman', serif;  /* For headings */
--font-sans: 'Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', sans-serif;  /* For body */

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

--leading-tight: 1.25;
--leading-normal: 1.5;
--leading-relaxed: 1.625;
```

**Spacing Scale (multiples of 4):**
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

**Border Radius:**
```css
--radius-sm: 4px;   /* Small badges */
--radius-md: 8px;   /* Inputs, buttons */
--radius-lg: 12px;  /* Cards */
--radius-xl: 16px;  /* Large cards */
--radius-2xl: 24px;  /* Large containers */
--radius-3xl: 32px;  /* Hero sections */
--radius-full: 9999px; /* Pills, avatars */
```

**Shadows:**
```css
--shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
--shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);
--shadow-md: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1);
--shadow-lg: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1);
--shadow-xl: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
--shadow-2xl: 0 50px 100px -25px rgba(0, 0, 0, 0.25);
```

**Transitions:**
```css
--transition-fast: 150ms ease-out;   /* Hover, focus */
--transition-base: 200ms ease-out;  /* Toggles, menus */
--transition-slow: 300ms ease-out;   /* Modals, transitions */
```

---

## 📄 PAGE STRUCTURE

Create a single-page landing page with the following sections (in order):

### 1. Navigation Bar (Sticky, Fixed)
- Logo on left (text "Nayeam" in serif font)
- Navigation links in center (Galleries, Journal, Book, About)
- CTA button on right ("Book Session")
- Mobile: Hamburger menu with drawer/sheet

### 2. Hero Section (Full viewport height, ~85vh)
**Layout:**
- Left: Text content (centered on mobile, left-aligned on desktop)
- Right: Featured image (aspect ratio 4:5 on mobile, 3:4 on desktop)

**Left Content:**
- Main heading: "Nayeam" (serif, text-5xl to text-8xl, responsive)
- Subheading: "Design Studio" (serif, text-2xl to text-5xl, muted-foreground, muted-foreground)
- Tagline paragraph: "Photography is like a room—light determines the narrative. We capture moments that transcend time." (sans-serif, text-base to text-xl, muted-foreground/90)
- Designer info: Camera icon + name + "Designer & Creative Director"
- Two CTA buttons: "Explore" (outline) and "Book Session" (filled primary)

**Right Content:**
- Featured image in rounded-3xl container
- Image aspect ratio: 4:5 (mobile), 3:4 (desktop)
- Background: stone-100 with shadow
- Bottom overlay with gradient (from-black/50)
- Featured badge overlay: "Featured" + "Glass & Light"

**Background:**
- Gradient background: from stone-50 via background to stone-100/50
- Subtle animated blob shapes (amber-100/20, stone-200/30)
- Use backdrop-blur for glass effects

**Animations (Framer Motion):**
- Text fade-in from bottom (0.8s)
- Subheading fade-in with delay (0.6s)
- Icon hover scale animation (1.05)
- Button hover: translateY(-2px), whileTap scale(0.98)
- Featured image scale on hover (1.03)
- Spring animation for kinetic typography on heading (useSpring hooks: stiffness: 100, damping: 15)

### 3. Stats Section (Compact)
**Layout:**
- 4-column grid (2 cols on mobile, 4 on desktop)
- Cards with icon, number, and label

**Stats Data:**
1. "150+" - Projects (Camera icon)
2. "50K+" - Photos (Sparkles icon)
3. "8+" - Years (Award icon)
4. "98%" - Satisfaction (Heart icon)

**Card Design:**
- Background: white/50 backdrop-blur-sm
- Border: stone-100
- Padding: p-4 (16px)
- Border radius: rounded-2xl (16px)
- Hover: bg-white, shadow-md, translateY(-4px)
- Icon: text-muted-foreground/60, w-5 h-5
- Number: font-serif, text-2xl to text-3xl, tabular-nums
- Label: text-xs text-muted-foreground/80

**Animations:**
- Fade-in from bottom (0.4s)
- Staggered delay per item (0.1s)
- Hover lift effect (translateY -4px)

### 4. Services Section
**Layout:**
- Section title: "Services" (serif, text-3xl to text-5xl)
- 4-column grid (2 cols on mobile, 4 on desktop)
- Gap: gap-3 (mobile), gap-4 (desktop)

**Services Data:**
1. "Portrait" - "Headshots & lifestyle" (Camera icon)
2. "Architecture" - "Interiors & exteriors" (Layers icon)
3. "Travel" - "Storytelling" (Map icon)
4. "Events" - "Special occasions" (Calendar icon)

**Card Design:**
- Background: white/60 backdrop-blur-sm
- Border: stone-100
- Padding: p-5 (mobile), p-6 (desktop)
- Border radius: rounded-2xl (16px)
- Hover: bg-white, shadow-lg, translateY(-4px)
- Icon container: w-11 h-11, rounded-xl, bg-stone-100, hover: bg-stone-200
- Icon: w-5 h-5, text-foreground
- Title: font-serif, text-base to text-lg, text-foreground
- Description: text-xs to text-sm, text-muted-foreground/70

**Animations:**
- Fade-in from bottom (0.4s)
- Staggered delay per item (0.1s)
- Hover lift effect (translateY -4px)

### 5. Featured Works (Infinite Carousel)
**Layout:**
- Section title: "Featured Works" (serif, text-3xl to text-5xl)
- Infinite horizontal carousel (auto-scrolling)
- Duplicated images for seamless loop

**Carousel Behavior:**
- Continuous infinite scroll from right to left
- Speed: 30 seconds for full cycle
- Easing: linear
- On hover: pause the animation
- Each image: w-56 h-72 (mobile), w-64 h-80 (tablet), w-72 h-96 (desktop)
- Rounded-2xl (16px)
- Gap: gap-4

**Image Design:**
- Background: bg-stone-100 as placeholder
- Hover: scale(1.03), translateY(-4px)
- Click: Opens lightbox modal
- Overlay: gradient from black/70 (bottom), opacity 0→0 → 100% on hover
- Caption overlay: shows series name and caption on hover

**Data Source:**
- Flatten all gallery images from all series
- Duplicate array for infinite scroll

**Animations:**
- Staggered fade-in on load (0.03s per item)
- Hover: scale and translate
- Carousel: animate x from '0%' to '-50%'

### 6. Portfolio Section
**Layout:**
- Section title: "Portfolio" (serif, text-3xl to text-5xl)
- Grouped by series (3 series)

**Each Series:**
- Series header with:
  - Series name (font-serif, text-2xl to text-3xl)
  - Description (text-sm, text-muted-foreground/70)
  - Work count and arrow icon (hidden on mobile)
- Grid layout: 2 columns mobile, 3 columns desktop
- Gap: gap-3 (mobile), gap-4 (desktop)

**Image Cards:**
- Aspect ratio: aspect-square mobile, aspect-[4/3] or aspect-[3/4] desktop
- Background: bg-stone-100
- Border radius: rounded-2xl (16px)
- Every 3rd image (index % 3 === 0): spans 2 rows (md:row-span-2)
- Hover: translateY(-4px)
- Click: Opens lightbox modal
- Image hover: scale(1.10)
- Overlay: gradient from black/60, shows caption on hover

**Loading State:**
- Show Loader2 spinner (w-8 h-8, animate-spin) if loading=true

**Animations:**
- Series fade-in with staggered delay (0.15s per series)
- Image fade-in with staggered delay (0.08s per image)
- Hover lift effect

### 7. Journal Section
**Layout:**
- Section title: "Journal" (serif, text-3xl to text-5xl)
- Show only first 3 entries (slice(0, 3))
- Vertical stack of cards with gap-4

**Card Design:**
- Background: white/60 backdrop-blur-sm
- Border: border-stone-100
- Border radius: rounded-2xl (16px)
- Padding: p-5 (mobile), p-6 (desktop)
- Hover: shadow-md

**Each Journal Entry:**
- Image: Left side, aspect-[4/3], w-full mobile, w-44 desktop
- Content: Right side
- Title: font-serif, text-lg to text-xl, group-hover: text-foreground/80
- Date badge: font-mono, text-xs, text-muted-foreground/60, bg-stone-100, px-2.5 py-1, rounded-md
- Tags: pills with bg-stone-100/80, hover:bg-stone-200/80, hover:text-foreground
- Content text: text-muted-foreground/80, leading-relaxed
- Expandable on click: Shows full text + "Copy Quote" button
- Truncated by default: line-clamp-2 (WebkitLineClamp)
- Image hover: scale(1.05)

**Copy Quote Button:**
- Appears when expanded
- Rounded-full, bg-stone-100, hover:bg-stone-200
- Icon: Copy (w-3.5 h-3.5 mobile, w-4 h-4 desktop)
- Text: "Copy Quote"

**Loading State:**
- Show Loader2 spinner if loading=true

**Animations:**
- Staggered fade-in (0.1s per entry)
- Height animation when expanding/collapsing
- Hover effects on image

### 8. Book a Session Section
**Layout:**
- Section title: "Book a Session" (serif, text-3xl to text-5xl)
- 2-column grid on desktop: 2/3 form, 1/3 info panel
- Single column on mobile

**Booking Form (2/3 column):**
- Container: bg-white/70 backdrop-blur-sm, rounded-3xl, p-6 sm:p-8, shadow-lg, border-stone-100
- Form fields:
  1. Name (required): Input, height 44px, px-4 py-3, rounded-xl, bg-white/80, border-stone-200, focus:ring-2 focus:ring-stone-400/50
  2. Email (required): Input, same styling as name
  3. Shoot Type (optional): Select dropdown with options: Portrait, Architecture, Travel
  4. Budget Range (optional): Select dropdown with options: ¥2,000-¥5,000, ¥5,000-¥10,000, ¥10,000-¥15,000, ¥15,000-¥20,000, ¥20,000+
  5. Notes (required): Textarea, rows=4, same styling as inputs, min-length=10

**Submit Button:**
- Full width, py-4, bg-foreground text-background, hover:bg-foreground/90
- Rounded-xl, font-semibold
- Hover: hover:shadow-lg, translateY(-2px)
- ArrowRight icon on right
- Text: "Send Request"

**Success State:**
- Centered content with:
  - Green circle (w-16 h-16) with CheckCircle icon (w-8 h-8, text-green-600)
  - Heading: "Request Sent!" (font-serif, text-xl)
  - Message: "We'll contact you within 24 hours." (text-muted-foreground/80, text-sm)

**Info Panel (1/3 column):**
- Vertical stack of cards with gap-4
- Cards: bg-white/70 backdrop-blur-sm, rounded-2xl, border-stone-100

**Card 1 - Connect:**
- Title: "Connect" with Share2 icon
- Links:
  - GitHub (Github icon) - link to https://github.com/princenayeam
  - Email (Mail icon) - mailto:hello@nayeams.studio
- Hover: translateX(2px), text-foreground

**Card 2 - Availability:**
- Title: "Availability" with Calendar icon
- Time slots:
  - Mon - Fri: 9:00 - 18:00
  - Sat: 10:00 - 16:00
  - Sun: Closed
- Display: Clock icon + text (text-sm, text-muted-foreground/80)

**Card 3 - Recent Booking (conditional):**
- Only show if recentBookings.length > 0
- Title: "Recent" with Calendar icon
- Show name, email, shoot type, budget
- Text sizes: name (font-medium), others (text-xs, text-muted-foreground/60)

**Animations:**
- Fade-in with staggered delay (left form: x=-20, right panel: x=20 with delay 0.2s)
- Button hover: translateY(-2px), whileTap scale(0.98)

### 9. CTA Section
**Layout:**
- Full-width section centered content
- Container: bg-white/80 backdrop-blur-sm, rounded-3xl, p-8 sm:p-10 md:p-12, shadow-lg, border-stone-100
- Max width: max-w-4xl

**Content:**
- Heading: "Ready to Create?" (serif, text-2xl to text-4xl)
- Paragraph: "Let's work together to capture your most precious moments with artistic vision." (text-muted-foreground/80, text-sm sm:text-base)
- CTA button: "Start Your Journey" (bg-foreground, text-background, hover:bg-foreground/90, hover:shadow-lg, rounded-full, px-8 py-3.5, text-sm sm:text-base, ArrowRight icon)
- Button hover: translateY(-2px), whileTap scale(0.98)

**Animations:**
- Fade-in from bottom (0.6s)

### 10. Lightbox Modal (Fullscreen Overlay)
**Layout:**
- Full-screen overlay: bg-black/95 backdrop-blur-sm
- Centered image container: max-w-6xl w-full, max-h-[85vh]
- Previous button: left-4, top-1/2 -translate-y-1/2
- Next button: right-4, top-1/2 -translate-y-1/2
- Close button: top-4, right-4

**Image Container:**
- Aspect ratio: aspect-video (16:9)
- Border radius: rounded-2xl
- Background: bg-black/50
- Image: object-contain

**Bottom Overlay:**
- Gradient: from-black/80 via transparent
- Padding: p-6
- Content:
  - Image alt text (text-white, font-serif, text-xl sm:text-2xl)
  - Image caption (text-white/90, text-sm)
  - Metadata (text-white/60, text-xs, font-mono tabular-nums): "series · index / total"

**Navigation Buttons:**
- Circular buttons: p-3, rounded-full, bg-white/10, hover:bg-white/20
- ArrowRight icons: w-6 h-6
- Previous button: rotate-180

**Animations:**
- Fade-in/out (opacity 0 to 1)
- Image scale-in/scale-out (scale 0.9 to 1)
- Slide buttons (x: -20/0 to 0, y: center)

**Navigation:**
- Previous/Next: cycle through all gallery images
- Click outside overlay: close lightbox
- Close button: close lightbox
- Keyboard: Escape to close, Arrow keys to navigate

### 11. Process Section
**Layout:**
- Section title: "How We Work" (serif, text-3xl sm:text-4xl md:text-5xl)
- 4-column grid (1 col mobile, 2 tablet, 4 desktop)
- Gap: gap-4 sm:gap-6

**Process Steps:**
1. "01 Discovery" - "Consultation to understand your vision and story." (Lightbulb icon)
2. "02 Planning" - "Detailed plan with locations and creative direction." (Workflow icon)
3. "03 Creation" - "Capturing images with precision and artistry." (Camera icon)
4. "04 Delivery" - "Professionally edited images in a private gallery." (Sparkles icon)

**Card Design:**
- Background: white/60 backdrop-blur-sm
- Border: border-stone-100
- Padding: p-5 sm:p-6
- Border radius: rounded-2xl (16px)
- Hover: hover:shadow-md, translateY(-4px)

**Each Step Card:**
- Step number: text-xs, text-muted-foreground/60, font-mono, mb-2
- Icon container: w-12 h-12, rounded-xl, bg-stone-100
- Icon: w-6 h-6, text-foreground
- Title: font-serif, text-lg text-foreground, mb-2
- Description: text-sm, text-muted-foreground/70, leading-relaxed

**Animations:**
- Staggered fade-in (0.15s per card)
- Hover lift effect (translateY -4px)

### 12. Awards Section
**Layout:**
- Section title: "Awards" (serif, text-3xl sm:text-4xl md:text-5xl)
- 4-column grid (1 col mobile, 2 tablet, 4 desktop)
- Gap: gap-4

**Awards Data:**
1. "Best Portfolio 2024" - "Design Awards" - "2024"
2. "Visual Storytelling" - "Creative Excellence" - "2023"
3. "Top 100 Photographers" - "Global Photo" - "2023"
4. "Editor's Choice" - "Photography Monthly" - "2022"

**Card Design:**
- Background: white/60 backdrop-blur-sm
- Border: border-stone-100
- Padding: p-6 text-center
- Border radius: rounded-2xl (16px)
- Hover: hover:shadow-md, translateY(-4px)

**Each Award Card:**
- Icon container: w-14 h-14, rounded-xl, bg-stone-100, mx-auto, mb-4, shadow-sm
- Icon: Trophy, w-7 h-7, text-foreground
- Title: font-serif, text-sm sm:text-base text-foreground, mb-1
- Organization: text-xs, text-muted-foreground/70, mb-2
- Year badge: Badge variant="outline", border-stone-200, text-xs

**Animations:**
- Staggered fade-in (0.1s per card)
- Hover lift effect

### 13. FAQ Section
**Layout:**
- Section title: "FAQ" (serif, text-3xl sm:text-4xl md:text-5xl)
- Vertical stack of accordion items, gap-3
- Max width: max-w-3xl mx-auto

**FAQ Data:**
1. "What types of photography do you specialize in?"
   Answer: "We specialize in portrait photography, architectural photography, travel documentation, and event coverage. Each service is tailored to capture the unique essence of your vision."
2. "How long does a typical photo session last?"
   Answer: "Session lengths vary by project type. Portrait sessions typically last 1-2 hours, while event coverage can range from 4-8 hours. We'll discuss the specific timeline during our initial consultation."
3. "What is included in your packages?"
   Answer: "Our packages include pre-shoot consultation, on-location photography, professional editing and retouching, digital files in high resolution, and a private online gallery for easy sharing and downloading."
4. "How far in advance should I book a session?"
   Answer: "We recommend booking at least 2-4 weeks in advance for standard sessions. For larger events or weekend bookings, 4-8 weeks advance notice is preferred to ensure availability."
5. "Do you travel for shoots?"
   Answer: "Yes! We love traveling for projects. Travel fees apply for locations outside our local area. We've shot across the country and internationally for destination weddings and brand campaigns."

**Accordion Item Design:**
- Container: bg-white/60 backdrop-blur-sm, rounded-2xl, border-stone-100, overflow-hidden
- Button: w-full text-left, px-5 py-4, flex items-center justify-between
- Question: font-serif, text-base, text-foreground, pr-4
- ChevronDown icon: w-5 h-5, text-muted-foreground/60, animate rotation
- Answer: text-sm, text-muted-foreground/80, leading-relaxed, px-5 pb-5

**Animations:**
- Fade-in with staggered delay (0.08s per item)
- Accordion height animation
- Chevron rotation on toggle (180 degrees)
- Hover: hover:bg-stone-50/50 on button

### 14. Newsletter Section
**Layout:**
- Section without title
- Container: bg-white/80 backdrop-blur-sm, rounded-3xl, p-8 sm:p-12 md:p-16, shadow-lg, border-stone-100
- 2-column grid on desktop: 1/2 left (content), 1/2 right (form)
- Single column on mobile
- Max width: max-w-7xl mx-auto
- Background gradient: from-cream-50/30 to-background

**Left Column (Content):**
- Badge: "Newsletter" (bg-foreground text-background, hover:bg-foreground/90, mb-4)
- Heading: "Stay Updated" (serif, text-2xl sm:text-3xl md:text-4xl, mb-4)
- Paragraph: "Subscribe for exclusive insights, behind-the-scenes content, and early access to new projects." (text-muted-foreground/80, text-sm sm:text-lg, leading-relaxed, mb-6)
- Feature list:
  - Weekly inspiration (CheckCircle icon)
  - No spam (CheckCircle icon)

**Right Column (Form):**
- Subscribe form or success message

**Success State:**
- Container: bg-stone-50 rounded-2xl, p-8 text-center
- Green circle (w-16 h-16, bg-green-100, mx-auto, mb-4, rounded-full, flex items-center justify-center)
- CheckCircle icon (w-8 h-8, text-green-600)
- Heading: "Welcome!" (font-serif, text-xl text-foreground, mb-2)
- Message: "Check your inbox for a welcome message." (text-sm text-muted-foreground/80)

**Subscribe Form:**
- Email input field: px-4 py-3, rounded-xl, bg-white/80, border-stone-200, focus:ring-2 focus:ring-stone-400/50
- Submit button: full width, py-4, bg-foreground text-background, hover:bg-foreground/90, hover:shadow-lg, rounded-xl, text-sm font-medium, "Subscribe", Mail icon

**Animations:**
- Staggered fade-in (left: x=-20, right: x=20 with delay 0.2s)
- Scale-in animation for success state
- Button hover: translateY(-2px), whileTap scale(0.98)

### 15. Footer (Sticky at Bottom)
**Layout:**
- Full-width, dark or light background
- Multi-column layout
- Links, social media, copyright

**Footer Sections:**
1. Brand/Logo
2. Navigation links (Galleries, Journal, Book, About)
3. Contact info (Email, GitHub, etc.)
4. Social media icons
5. Copyright notice

**Sticky Behavior:**
- Should stick to bottom when content is shorter than viewport
- Push down naturally when content exceeds viewport
- Use: min-h-screen flex flex-col and mt-auto on footer

---

## 🎭 ANIMATIONS SPECIFICATIONS

### Global Animation Settings
```typescript
// Framer Motion
- Hover: duration: 0.2-0.3s, ease: ease-out
- Page load: duration: 0.4-0.8s, ease: [0.4, 0, 0.2, 1]
- Modal: duration: 0.3-0.4s, ease: ease-out
- Carousel: duration: 30s, ease: linear (infinite loop)
```

### Animation Patterns

**1. Fade In (From Bottom)**
```typescript
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
>
```

**2. Scale In**
```typescript
<motion.div
  initial={{ scale: 0.8 }}
  whileInView={{ scale: 1 }}
  viewport={{ once: true }}
  transition={{ duration: 0.4 }}
>
```

**3. Staggered Animation**
```typescript
{items.map((item, index) => (
  <motion.div
    key={index}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4, delay: index * 0.1 }}
  >
```

**4. Hover Lift**
```typescript
<motion.div
  whileHover={{ y: -4, scale: 1.02 }}
  whileTap={{ scale: 0.98 }}
  transition={{ duration: 0.2 }}
>
```

**5. Button Press**
```typescript
<motion.button
  whileTap={{ scale: 0.98 }}
  transition={{ duration: 0.1 }}
>
```

**6. Image Scale on Hover**
```typescript
<motion.div
  whileHover={{ scale: 1.03 }}
  transition={{ duration: 0.6 }}
>
```

**7. Kinetic Typography**
```typescript
// At component top level (MUST be outside of render)
const scaleY = useSpring(1, { stiffness: 100, damping: 15 });
const scaleX = useSpring(1, { stiffness: 100, damping: 15 });

// In render
<motion.h1
  className="..."
  style={{ scaleY, scaleX }}
>
```

**8. Accordion Expand/Collapse**
```typescript
<AnimatePresence>
  {isOpen && (
    <motion.div
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: 'auto' }}
      exit={{ opacity: 0, height: 0 }}
      transition={{ duration: 0.3 }}
    >
```

---

## 🎨 COMPONENT SPECIFICATIONS

### Button Component
**Variants:**
- Primary: bg-foreground text-background, rounded-full, hover:bg-foreground/90, hover:shadow-lg
- Secondary: bg-white/70 backdrop-blur-sm border-stone-200/50, rounded-full, hover:bg-white hover:shadow-md
- Outline: same as secondary (bg-white/70, border-stone-200/50)
- Destructive: bg-red-600 text-white, rounded-full
- Ghost: bg-transparent

**Sizes:**
- Small: px-6 py-3, text-sm
- Medium: px-8 py-3.5, text-sm sm:text-base
- Large: px-8 py-4, text-base

**States:**
- Default, Hover, Focus, Disabled, Loading
- Focus ring: focus:ring-2 focus:ring-stone-400/50

### Input Field
**Height:** 44px minimum (touch-friendly)
**Padding:** px-4 py-3
**Border:** 1px solid stone-300 (neutral-400)
**Border Radius:** rounded-xl (8px)
**Font Size:** text-base (16px)

**States:**
- Default: neutral-300 border
- Focus: primary color border, ring-2 ring-primary/20
- Error: error color border, ring-2 ring-error/20
- Disabled: neutral-100 background, text-neutral-400, no interaction
- Success: success color border

### Card Component
**Variants:**
- Default: white/60 backdrop-blur-sm, border-stone-100, shadow-sm
- Elevated: white/60, shadow-lg
- Glass: rgba(255,255,255,0.7) backdrop-blur-sm

**Properties:**
- Border Radius: rounded-2xl (16px)
- Padding: p-5 to p-6
- Hover: hover:shadow-md, translateY(-4px)

### Badge Component
**Variants:**
- Default: bg-stone-100 text-foreground
- Primary: bg-primary text-primary-foreground
- Success: bg-success text-success-foreground
- Warning: bg-warning text-warning-foreground
- Error: bg-error text-error-foreground
- Outline: border-2

**Properties:**
- Padding: px-3 py-1.5 to px-4 py-1.5
- Border Radius: rounded-full (9999px)
- Font Size: text-xs to text-sm
- Font Weight: font-medium

---

## 📱 RESPONSIVE DESIGN SPECIFICATIONS

### Breakpoints
```css
Mobile: < 640px
Tablet: 640px - 1023px
Desktop: 1024px - 1279px
Wide: 1280px - 1535px
Ultra: 1536px+
```

### Mobile-First Strategy

**Typography Scaling:**
- Mobile: Use -1 to -2 sizes from base
- Tablet: Use base sizes
- Desktop: Use base or +1 size
- Wide: Use +1 to +2 sizes

**Grid Columns:**
- Mobile: 1 column
- Tablet: 2 columns
- Desktop: 3 columns
- Wide: 4 columns

**Container Padding:**
- Mobile: px-4 (16px margins)
- Tablet: px-8 (32px margins)
- Desktop: px-8 (32px margins)
- Large Desktop: px-8 (32px margins)

**Section Padding:**
- Compact: py-12
- Standard: py-16
- Generous: py-20

### Touch Optimization
- Minimum touch targets: 44px × 44px
- Increase vertical spacing between interactive elements
- Larger padding for buttons, inputs
- Support for gestures where appropriate (swipe, pinch)

---

## 🔌 API ENDPOINTS REQUIRED

Create the following API routes in `/app/api/`:

### 1. `/api/gallery`
**Method:** GET
**Response:**
```typescript
{
  success: true,
  data: [
    {
      name: string;          // Series name
      description: string;     // Series description
      images: [
        {
          src: string;       // Image path
          alt: string;       // Alt text
          caption: string;    // Image caption
        }
      ]
    }
  ]
}
```

### 2. `/api/journal`
**Method:** GET
**Response:**
```typescript
{
  success: true,
  data: [
    {
      title: string;
      date: string;        // YYYY-MM-DD format
      tags: string[];     // Array of tag strings
      image: string;        // Image path
      imageAlt: string;    // Alt text
      content: string;     // Blog post content
    }
  ]
}
```

### 3. `/api/bookings`
**Method:** GET
**Query Params:** `?limit={number}` (e.g., `?limit=1`)
**Response:**
```typescript
{
  success: true,
  data: [
    {
      name: string;
      email: string;
      shoot_type: string;
      budget: string;
      notes: string;
      created_at: string;
    }
  ]
}
```

### 4. `/api/bookings`
**Method:** POST
**Request Body:**
```typescript
{
  name: string;
  email: string;
  shootType?: string;
  budget?: string;
  notes: string;
}
```
**Response:**
```typescript
{
  success: true,
  data: { /* created booking record */ }
}
```

### 5. `/api/setup/status`
**Method:** GET
**Response:**
```typescript
{
  success: boolean;
  needsSetup: boolean;
}
```

### 6. `/api/setup`
**Method:** POST
**Response:**
```typescript
{
  success: true;
  results: {
    updatedCount: number;
  };
}
```

---

## 💾 DATABASE SCHEMA (Prisma)

Create the following schema in `prisma/schema.prisma`:

```prisma
model Gallery {
  id        String   @id @default(cuid())
  name      String   @unique
  description String
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
  images    Image[]
}

model Image {
  id        String   @id @default(cuid())
  galleryId  String
  src       String
  alt       String
  caption   String
  position  Int
  gallery    Gallery   @relation(fields: [galleryId], references: [id], onDelete: Cascade)
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt

  @@index([galleryId])
}

model Journal {
  id        String   @id @default(cuid())
  title     String
  date      String
  tags      String   // Store as JSON array string
  content   String
  image     String
  imageAlt  String
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}

model Booking {
  id        String   @id @default(cuid())
  name      String
  email     String
  shootType String?
  budget    String?
  notes     String
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}
```

---

## 📊 DATA STRUCTURES

### Fallback Gallery Data (if API fails)
```typescript
const fallbackGallerySeries = {
  'Horizon City': {
    description: 'City of Horizons',
    images: [
      {
        src: '/images/horizon-city-1.png',
        alt: 'Urban cityscape at golden hour',
        caption: 'Gentle silhouette of city skyline at dusk'
      },
      {
        src: '/images/horizon-city-2.png',
        alt: 'Contemporary building facade',
        caption: 'Poetry of light and shadow on modern architecture'
      },
      {
        src: '/images/horizon-city-3.png',
        alt: 'City street view',
        caption: 'Architectural rhythm in quiet streets'
      },
      {
        src: '/images/horizon-city-4.png',
        alt: 'Skyscraper vertical shot',
        caption: 'Geometric aesthetics looking up at glass towers'
      },
      {
        src: '/images/horizon-city-5.png',
        alt: 'Urban rooftop view',
        caption: 'Composed view from city rooftops'
      },
      {
        src: '/images/horizon-city-6.png',
        alt: 'City window reflection',
        caption: 'Urban dreams reflected in window frames'
      }
    ]
  },
  'Soft Wind': {
    description: 'Gentle Breeze',
    images: [
      {
        src: '/images/soft-wind-1.png',
        alt: 'Soft wind through grass field',
        caption: 'Gentle ripples of breeze across the meadow'
      },
      {
        src: '/images/soft-wind-2.png',
        alt: 'Tree branches swaying',
        caption: 'Light dancing steps of wind among branches'
      },
      {
        src: '/images/soft-wind-3.png',
        alt: 'Curtains blowing in wind',
        caption: 'Elegant posture of curtains dancing with wind'
      },
      {
        src: '/images/soft-wind-4.png',
        alt: 'Dandelion seeds floating',
        caption: 'Aerial journey of dandelion seeds'
      },
      {
        src: '/images/soft-wind-5.png',
        alt: 'Wheat field bending',
        caption: 'Expressive brushstrokes of wind in wheat fields'
      },
      {
        src: '/images/soft-wind-6.png',
        alt: 'Fabric scarf flowing',
        caption: 'Soft flowing lines of silk in the wind'
      }
    ]
  },
  'Quiet Lake': {
    description: 'Serene Waters',
    images: [
      {
        src: '/images/quiet-lake-1.png',
        alt: 'Serene lake at dawn',
        caption: 'Peaceful reflection on lake surface at dawn'
      },
      {
        src: '/images/quiet-lake-2.png',
        alt: 'Calm lake surface',
        caption: 'Poetry of light in the ripples'
      },
      {
        src: '/images/quiet-lake-3.png',
        alt: 'Lakeside dock reflection',
        caption: 'Quiet beauty of dock reflections'
      },
      {
        src: '/images/quiet-lake-4.png',
        alt: 'Water lily on lake',
        caption: 'Serene moment of water lily blooming'
      },
      {
        src: '/images/quiet-lake-5.png',
        alt: 'Mountain reflected in lake',
        caption: 'Magnificent painting of mountain and lake'
      },
      {
        src: '/images/quiet-lake-6.png',
        alt: 'Still water surface',
        caption: 'Ethereal Zen of still water'
      }
    ]
  }
};
```

### Fallback Journal Data (if API fails)
```typescript
const fallbackJournalEntries = [
  {
    title: 'First Light of Morning',
    date: '2025-01-15',
    tags: ['Light', 'Daily'],
    image: '/images/journal-1.png',
    imageAlt: 'Morning coffee scene',
    content: 'The morning light is exceptionally gentle, spilling through the gaps in curtains onto the desk. The coffee cup steams, and time seems to stand still in this moment. I think this is the meaning of photography—to capture those fleeting moments of beauty.'
  },
  {
    title: 'Time on the Bookshelf',
    date: '2025-01-12',
    tags: ['Architecture', 'Life'],
    image: '/images/journal-2.png',
    imageAlt: 'Books on shelf',
    content: 'While organizing the bookshelf, I found old photographs—those frozen moments remain vivid. Every book is a journey, every photo is a story. We grow through reading and remember through recording.'
  },
  {
    title: 'The Weight of a Camera',
    date: '2025-01-10',
    tags: ['Photography', 'Passion'],
    image: '/images/journal-3.png',
    imageAlt: 'Hand holding camera',
    content: 'The camera in hand is not just a tool, but an eye for observing the world. Each shutter press is a choice—choosing what enters the frame, choosing what to keep. This weight of choice is precisely the photographer\'s mission.'
  },
  {
    title: 'Order on the Desktop',
    date: '2025-01-08',
    tags: ['Life', 'Minimalism'],
    image: '/images/journal-4.png',
    imageAlt: 'Minimalist desk setup',
    content: 'Minimalist life aesthetics start with a clean desk. Everything in its place, each item useful. Photography is the same—subtract the superfluous, leave only the most essential expression.'
  },
  {
    title: 'The City Outside the Window',
    date: '2025-01-05',
    tags: ['Architecture', 'Travel'],
    image: '/images/journal-5.png',
    imageAlt: 'Looking through window',
    content: 'Looking down from the high building, the city unfolds like a chessboard. Everyone is a chess piece, yet each writes their own story. Photography taught me to look down from above, and also to gaze closely.'
  },
  {
    title: 'The Ritual of Tea',
    date: '2025-01-03',
    tags: ['Life', 'Ritual'],
    image: '/images/journal-6.png',
    imageAlt: 'Evening tea ritual',
    content: 'The ritual of tea lies in the focus of every movement. Water temperature, time, the amount of tea leaves—all are variables. Photography is the same: light, composition, timing, each essential.'
  }
];
```

---

## 🧩 IMAGE REQUIREMENTS

### Required Images (Place in `/public/images/`):
1. **hero-featured.png** - Hero section featured image (aspect 4:5 to 3:4)
2. **Horizon City series (6 images):**
   - horizon-city-1.png to horizon-city-6.png
3. **Soft Wind series (6 images):**
   - soft-wind-1.png to soft-wind-6.png
4. **Quiet Lake series (6 images):**
   - quiet-lake-1.png to quiet-lake-6.png
5. **Journal entries (6 images):**
   - journal-1.png to journal-6.png

**Image Specifications:**
- Use placeholder images (bg-stone-100) if actual images not available
- All images should have alt text and captions
- Optimize for web (WebP/AVIF preferred)
- Implement lazy loading for below-fold images

---

## ⚡ PERFORMANCE REQUIREMENTS

### Performance Targets
- First Contentful Paint (FCP): < 1.8s
- Largest Contentful Paint (LCP): < 2.5s
- Time to Interactive (TTI): < 3.8s
- Cumulative Layout Shift (CLS): < 0.1
- Total Blocking Time (TBT): < 200ms

### Optimization Techniques
1. Images:
   - Use Next.js Image component for automatic optimization
   - Implement lazy loading for below-fold images
   - Use appropriate sizes (avoid oversized images)
   - Use modern formats (WebP/AVIF)

2. CSS:
   - Minify in production
   - Use CSS Modules or styled-components
   - Remove unused CSS
   - Critical CSS inline

3. JavaScript:
   - Code split by route
   - Lazy load heavy components
   - Tree-shake unused code
   - Use React Server Components for static content

4. Loading:
   - Show loading skeleton for async content
   - Implement optimistic UI where appropriate
   - Use Suspense boundaries for data fetching

---

## ♿ ACCESSIBILITY REQUIREMENTS (WCAG AA)

### Keyboard Navigation
- [ ] All interactive elements keyboard accessible
- [ ] Logical tab order (follows visual flow)
- [ ] Visible focus indicators (2px minimum outline)
- [ ] Escape key closes modals
- [ ] Skip links for main content

### Screen Reader Support
- [ ] Semantic HTML (nav, main, section, article)
- [ ] Heading hierarchy (h1 → h2 → h3)
- [ ] Alt text on all images
- [ ] ARIA labels for icon-only buttons
- [ ] aria-live regions for dynamic content
- [ ] aria-describedby for form help text
- [ ] aria-expanded for collapsible content

### Color Contrast
- [ ] Normal text: 4.5:1 minimum contrast
- [ ] Large text (18pt+): 3:1 minimum contrast
- [ ] Interactive elements: 3:1 minimum contrast
- [ ] Test with contrast checker tools

### Motion
- [ ] Respect prefers-reduced-motion
- [ ] Avoid auto-playing non-essential animations
- [ ] Provide pause/stop controls for continuous animations
- [ ] Keep animations under 5 seconds duration

### Form Accessibility
- [ ] All inputs have associated labels
- [ ] Error messages with aria-live
- [ ] Success feedback after submission
- [ ] Form validation with clear error messages
- [ ] Accessible form error handling

---

## 🎬 INTERACTION DESIGN

### Hover Effects
- Buttons: translateY(-2px), shadow-lg
- Cards: translateY(-4px), shadow-md
- Images: scale(1.03), translateY(-4px)
- Links: color change, underline

### Focus States
- Clear focus ring (2px minimum)
- High contrast (ring-primary/20 or ring-error/20)
- Visible on all interactive elements

### Loading States
- Skeleton loaders for async content
- Spinner buttons for form submissions
- Skeleton cards for grid layouts
- Loading overlays for modals

### Empty States
- Clear messaging when no data available
- Call-to-action when no items
- Helpful illustrations or icons

### Error States
- Clear, actionable error messages
- Recovery options (retry, cancel, go back)
- Error boundaries for robustness

---

## 📐 LAYOUT PATTERNS

### Container System
```css
.container {
  max-width: 7xl;
  margin: 0 auto;
  padding: 0 1rem; /* 16px margins */
}

@media (min-width: 640px) {
  .container { padding: 0 2rem; /* 32px margins */ }
}

@media (min-width: 1024px) {
  .container { padding: 0 4rem; /* 64px margins */ }
}
```

### Grid System
```css
/* Mobile: 1 column */
.grid { grid-template-columns: 1fr; }

/* Tablet: 2 columns */
@media (min-width: 640px) {
  .grid { grid-template-columns: repeat(2, 1fr); }
}

/* Desktop: 3 columns */
@media (min-width: 1024px) {
  .grid { grid-template-columns: repeat(3, 1fr); }
}

/* Wide: 4 columns */
@media (min-width: 1280px) {
  .grid { grid-template-columns: repeat(4, 1fr); }
}
```

---

## 🔧 KEY FEATURES TO IMPLEMENT

### 1. Kinetic Typography (Hero Heading)
- Use Framer Motion's useSpring hooks for subtle spring animation
- Apply to main heading ("Nayeam")
- Hooks must be at component top level, not in render

### 2. Infinite Image Carousel
- Auto-scrolling horizontal carousel (30s full cycle)
- Duplicated image array for seamless loop
- Pause on hover
- Click to open lightbox

### 3. Lightbox Image Viewer
- Fullscreen modal with image
- Previous/Next navigation with keyboard support
- Click outside to close
- Escape to close
- Shows series name, caption, and index

### 4. Expandable Journal Entries
- Click to expand/collapse full content
- Copy quote button when expanded
- Animated height transitions

### 5. Accordion FAQ
- Click to expand/collapse answers
- Chevron rotation animation
- Keyboard accessible
- Smooth height transitions

### 6. Booking Form
- Client-side and server-side validation
- Loading and success states
- Toast notifications (using shadcn/ui toast)
- Auto-reset after 3 seconds

### 7. Newsletter Subscription
- Email validation
- Loading and success states
- Toast notifications
- Auto-reset after 3 seconds

### 8. Sticky Footer
- Pushes down when content exceeds viewport
- Sticky when content is shorter
- Mobile safe area support

---

## 🎨 UI/UX BEST PRACTICES

### Visual Hierarchy
- Clear distinction between headings, subheadings, and body text
- Consistent use of color, size, and weight
- Adequate whitespace between elements

### Spacing Consistency
- Use 8px system for spacing (4px, 8px, 16px, 24px, 32px, 48px, 64px, etc.)
- Consistent padding: p-4, p-6, p-8
- Consistent gaps: gap-3, gap-4, gap-6, gap-8

### Color Usage
- Primary color for primary CTAs and important actions
- Neutral colors for text, backgrounds, borders
- Semantic colors for status (success, warning, error)
- Maintain sufficient contrast for readability
- Use stone/neutral palette (NOT blue or indigo)

### Typography
- Serif for headings (elegant, editorial)
- Sans-serif for body text (clean, readable)
- Monospace for code/data (technical)
- Proper line-height (1.5 for body text)
- Clear visual hierarchy

### Borders and Shadows
- Subtle borders (stone-200, stone-300)
- Layered shadows for depth
- Glass effects with backdrop-blur
- Consistent border radius throughout

### Animations
- Subtle and purposeful (not flashy)
- Smooth easing (ease-out)
- Short duration (150-300ms for most interactions)
- Respect prefers-reduced-motion

### Responsive Design
- Mobile-first approach
- Consistent breakpoints (640px, 1024px, 1280px)
- Touch targets 44px minimum
- Readable without zoom on mobile
- No horizontal scrolling

---

## 📝 COMPONENT STRUCTURE

### Create the following components in `src/components/`:

1. **Navigation.tsx** - Sticky navigation bar
2. **Footer.tsx** - Sticky footer with links
3. **Button.tsx** - Universal button component (if not using shadcn/ui)
4. **Input.tsx** - Input field (if not using shadcn/ui)
5. **Card.tsx** - Card component (if not using shadcn/ui)
6. **Badge.tsx** - Badge component (if not using shadcn/ui)
7. **Modal.tsx** - Modal component (for lightbox)
8. **Skeleton.tsx** - Loading skeleton component

---

## 🗂️ API IMPLEMENTATION PRIORITY

Implement these API endpoints in `/app/api/`:

1. **setup/route.ts** - Database setup
   - GET /api/setup/status - Check if setup needed
   - POST /api/setup - Run database setup

2. **gallery/route.ts** - Gallery data
   - GET /api/gallery - Return all gallery series and images

3. **journal/route.ts** - Journal data
   - GET /api/journal - Return all journal entries

4. **bookings/route.ts** - Booking functionality
   - GET /api/bookings - Get recent bookings
   - POST /api/bookings - Create new booking

---

## 🎯 DELIVERABLES

Please provide:

1. **Complete Next.js 16 project structure** with:
   - src/app/page.tsx (main landing page component)
   - src/app/layout.tsx (root layout)
   - src/components/ (all necessary components)
   - src/lib/ (utilities, types, etc.)
   - prisma/schema.prisma (database schema)
   - src/app/api/ (all API routes)

2. **TypeScript types** for all data structures

3. **Tailwind configuration** with custom design tokens

4. **Global CSS** with design tokens

5. **All API routes** as specified above

6. **Prisma client** setup (src/lib/db.ts)

7. **Responsive design** implemented throughout

8. **Accessibility features** (ARIA labels, keyboard navigation, focus states)

9. **Loading and error states** for all async operations

10. **Animations** with Framer Motion as specified

---

## 🎨 DESIGN GUIDELINES

**Overall Aesthetic:**
- Clean, minimalist, professional
- Soft, warm color palette (stone/neutral tones)
- Subtle glassmorphism effects
- Elegant serif typography
- Generous whitespace
- Refined shadows (not heavy shadows)

**What to Avoid:**
- Blue or indigo colors
- Heavy shadows or glows
- Flashy animations
- Excessive gradients
- Cluttered layouts
- Harsh colors
- Generic-looking templates

**Visual Style Inspiration:**
- Editorial photography portfolios
- Minimalist design studios
- Creative agency websites
- Modern portfolio sites

---

## ✅ QUALITY CHECKLIST

Please ensure the landing page meets these requirements:

### Visual Design
- [ ] Consistent spacing throughout (using spacing scale)
- [ ] Proper visual hierarchy (typography scale)
- [ ] Appropriate color contrast (WCAG AA)
- [ ] No broken layouts at any breakpoint
- [ ] Images optimized and properly sized
- [ ] Typography is readable (line-height 1.5+)
- [ ] Animations are smooth and subtle (not flashy)

### Functional Quality
- [ ] All links work correctly
- [ ] Forms validate and submit properly
- [ ] Error messages are clear and actionable
- [ ] Loading states for async operations
- [ ] Empty states with helpful messaging
- [ ] Success feedback after completed actions

### Responsive Quality
- [ ] Works on mobile (320px-640px)
- [ ] Works on tablet (640px-1024px)
- [ ] Works on desktop (1024px-1280px)
- [ ] Works on wide screens (1280px+)
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
- [ ] Color contrast compliant
- [ ] Reduced motion support

### Performance Quality
- [ ] Lighthouse score 90+ on all metrics
- [ ] First Contentful Paint < 1.8s
- [ ] Largest Contentful Paint < 2.5s
- [ ] Time to Interactive < 3.8s
- [ ] Cumulative Layout Shift < 0.1
- [ ] Total Blocking Time < 200ms

---

## 🚀 GETTING STARTED INSTRUCTIONS

### Step 1: Initialize Project
- Create Next.js 16 project with TypeScript, Tailwind CSS, shadcn/ui
- Install dependencies: framer-motion, lucide-react

### Step 2: Configure Tailwind
- Add custom design tokens to tailwind.config.ts
- Configure colors, typography, spacing, radii, shadows, transitions
- Add custom font families (Playfair Display, Inter, JetBrains Mono)

### Step 3: Set Up Prisma
- Create prisma/schema.prisma with all models
- Run `bun run db:push` to create database
- Create Prisma client in src/lib/db.ts

### Step 4: Create Components
- Build all necessary UI components (if not using shadcn/ui)
- Navigation, Footer, Button, Input, Card, Badge, Modal, Skeleton

### Step 5: Implement API Routes
- Create all API routes as specified
- Handle errors gracefully
- Return proper TypeScript types

### Step 6: Build Main Page
- Create src/app/page.tsx with all sections
- Implement all state management (useState, useEffect)
- Add all animations with Framer Motion
- Implement all interactive features (lightbox, accordion, form, etc.)
- Add loading and error states

### Step 7: Add Design Tokens
- Create src/app/globals.css with CSS variables
- Include all color, typography, spacing, radius, shadow, transition tokens

### Step 8: Test and Refine
- Test all breakpoints
- Verify all animations
- Check accessibility
- Test all interactive features
- Optimize performance
- Fix any bugs

---

## 📸 IMAGE PLACEHOLDER SPECIFICATIONS

If actual images are not available, create placeholder images or use colored placeholders:

**Hero Featured Image:**
- Aspect ratio: 4:5 (mobile), 3:4 (desktop)
- Background: gradient from stone-100 to stone-200
- Overlay: text "Glass & Light Interplay"

**Gallery Images:**
- Series: 3 series (Horizon City, Soft Wind, Quiet Lake)
- Images per series: 6 images each
- Aspect ratios: square (1:1) or landscape (4:3 or 3:4)
- Background: stone-100
- Caption overlay on hover

**Journal Images:**
- 6 images for journal entries
- Aspect ratio: 4:3
- Background: stone-100

---

## 🎯 SUCCESS CRITERIA

The landing page is successfully recreated when:

1. ✅ All sections are present and properly ordered
2. ✅ Responsive design works on all breakpoints
3. ✅ All animations are smooth and subtle (not flashy)
4. ✅ Color palette uses stone/neutral tones (NOT blue or indigo)
5. ✅ Typography uses serif for headings, sans-serif for body
6. ✅ Whitespace is generous and consistent
7. ✅ Glassmorphism effects are subtle and elegant
8. ✅ All interactive elements have hover/focus states
9. ✅ Loading and error states are implemented
10. ✅ Lightbox modal works with keyboard navigation
11. ✅ Infinite carousel auto-scrolls smoothly
12. ✅ FAQ accordion expands/collapses smoothly
13. ✅ Form validation and feedback works
14. ✅ Toast notifications are implemented
15. ✅ Accessibility (WCAG AA) requirements are met
16. ✅ Performance targets are met (LCP, FCP, TTI, CLS, TBT)
17. ✅ TypeScript types are properly defined
18. ✅ Code is clean, organized, and maintainable

---

## 📋 IMPORTANT NOTES

1. **DO NOT** use blue, indigo, or purple as primary colors - use stone/neutral palette only
2. **DO NOT** make animations flashy or excessive - keep them subtle and smooth
3. **DO** prioritize mobile-first responsive design
4. **DO** ensure touch targets are at least 44px
5. **DO** maintain consistent spacing using the 8px system
6. **DO** use serif fonts for headings, sans-serif for body text
7. **DO** implement proper loading and error states
8. **DO** test accessibility thoroughly (keyboard navigation, screen readers, contrast)
9. **DO** optimize for performance (image optimization, lazy loading, code splitting)
10. **DO** make the footer sticky at the bottom

---

## 🎨 FINAL REMINDER

This landing page represents a **professional photography portfolio** with:
- Elegant, minimalist design
- Soft, warm stone/neutral color palette
- Subtle glassmorphism
- Smooth, refined animations
- Excellent responsiveness
- Full accessibility
- High performance

**Copy this entire prompt into Z.AI and start recreating the landing page!** 🚀
