# GitHub Copilot Instructions
## Hugo Balestrand Fjord Angling Website

---

## 🎯 Design System: "Nordic Coastal Minimalism with Adventure Warmth"

### Visual Philosophy
- **Generous whitespace** - Let content breathe (py-12 md:py-16)
- **Bold typography** - Clear hierarchy, confident headings
- **Functional simplicity** - Remove the unnecessary
- **Natural warmth** - Balance minimalism with adventure
- **Subtle interactions** - Smooth 300ms transitions

**One-Liner:** *"Clean Norwegian minimalism meets warm fjord adventures—generous whitespace, bold typography, and a single orange accent for purpose."*

---

## 🎨 Color System

### Primary Palette
```css
/* Brand Colors */
Primary Accent:   #e09a00  /* Warm Orange - CTAs, highlights */
Hover State:      #d08900  /* Darker Orange - interactive feedback */
Secondary:        #f5b13d  /* Light Orange - accents, badges */

/* Nature-Inspired Backgrounds */
Ocean Blue:       #769ba4  /* Featured sections, calm water */
Forest Green:     #05694c  /* Highlights, nature connection */
Stone:            #f3f7f6  /* Subtle backgrounds */
Light Stone:      bg-stone-50  /* Alternative neutral */

/* Neutral Foundation (90% of the site) */
White:            #ffffff  /* Primary background */
Dark Gray:        #111827  /* Footer, high contrast */
Text Primary:     #111827  /* Headings */
Text Secondary:   #374151  /* Body text */
Text Muted:       #6b7280  /* Supporting text */
Border Light:     #e5e7eb  /* Subtle separators */
Border Medium:    #d1d5db  /* Input borders, cards */
```

### Usage Rules
✅ **DO:**
- Orange (#e09a00) ONLY for primary CTAs and interactive elements
- Use ocean blue (#769ba4) or forest green (#05694c) for featured content sections
- White or stone-50 for 90% of backgrounds
- Single border color: border-gray-200

❌ **DON'T:**
- Mix multiple accent colors in same section
- Use orange on colored backgrounds
- Create custom colors outside this palette

---

## 📐 Typography System

### Font Hierarchy
```css
/* Headings - Bold, Clear, Scannable */
H1 (Hero):        text-4xl md:text-5xl lg:text-6xl font-bold
                  /* 36px → 48px → 60px */
H2 (Sections):    text-3xl md:text-4xl lg:text-5xl font-bold
                  /* 30px → 36px → 48px */
H3 (Subsections): text-xl md:text-2xl font-bold
                  /* 20px → 24px */

/* Body Text - Readable, Relaxed */
Large Body:       text-lg md:text-xl leading-relaxed
                  /* Introductions, hero descriptions */
Regular Body:     text-base leading-relaxed
                  /* 16px - Standard content */
Small Text:       text-sm
                  /* 14px - Metadata, footnotes */

/* Interactive Elements */
Button Text:      text-lg font-semibold
                  /* 18px - Clear, confident CTAs */
Tab Navigation:   text-base font-semibold
                  /* 16px - Clear navigation */
```

### Rules
- Use `font-bold` for ALL headings
- Use `leading-relaxed` (1.625) for body text
- Use `leading-tight` for large headings
- Keep line length 60-80 characters max
- No font sizes outside this system

---

## 📏 Spacing & Layout

### Container System
```html
<!-- Standard Page Container -->
<div class="container mx-auto px-4">
  <!-- Max width ~1250px, responsive padding -->
</div>

<!-- Narrow Content (Articles, Forms) -->
<div class="max-w-4xl mx-auto px-4">
  <!-- ~896px max width -->
</div>

<!-- Medium Content (Activities) -->
<div class="md:max-xl:max-w-screen-md">
  <!-- Responsive medium container -->
</div>
```

### Spacing Rhythm
```css
/* Vertical Rhythm */
Large Sections:   py-12 md:py-16        /* 48px → 64px */
Standard:         py-8 md:py-12         /* 32px → 48px */
Compact:          py-6 md:py-8          /* 24px → 32px */

/* Content Spacing */
Between Sections: mb-12                 /* 48px */
Between Elements: mb-6 to mb-8          /* 24px → 32px */
Between Items:    mb-4                  /* 16px */

/* Internal Padding */
Large Cards:      p-8 md:p-12           /* 32px → 48px */
Cards/Forms:      p-6 md:p-8            /* 24px → 32px */
Buttons:          px-6 py-3 to px-8 py-4 /* Generous touch targets */
```

### Layout Patterns
```html
<!-- Two-Column Hero/Content -->
<div class="grid grid-cols-1 xl:grid-cols-2 gap-6 md:gap-8">
  <!-- Content Left / Image Right -->
</div>

<!-- Three-Column Cards -->
<div class="grid grid-cols-1 lg:grid-cols-3 gap-4">
  <!-- Category cards, features -->
</div>

<!-- Responsive Card Grid -->
<div class="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
  <!-- Inspiration items, activities -->
</div>
```

---

## 🧩 Component Patterns

### 1. Primary CTA Button
```html
<a href="..."
   class="text-lg font-semibold bg-[#e09a00] hover:bg-[#d08900] text-white 
          px-6 py-3 md:px-8 md:py-4 inline-flex items-center rounded-lg 
          transition-all duration-300 shadow-lg hover:shadow-xl">
  Button Text
  <svg><!-- Arrow icon --></svg>
</a>
```

### 2. Hero Section
```html
<section>
  <div class="py-12 md:py-16">
    <div class="container md:max-xl:max-w-screen-lg">
      <div class="bg-white grid grid-cols-1 xl:grid-cols-2 shadow-lg rounded-lg overflow-hidden">
        <!-- Content Column -->
        <div class="p-8 md:p-12 h-full flex">
          <div class="prose lg:prose-xl my-auto">
            <h1 class="mt-0 text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Hero Title
            </h1>
            <p class="text-lg md:text-xl leading-relaxed text-gray-700">
              Engaging description text
            </p>
            <!-- CTA Button -->
          </div>
        </div>
        <!-- Image Column -->
        <div class="lg:p-4">
          <img src="..." class="w-full h-full object-cover rounded-lg" />
        </div>
      </div>
    </div>
  </div>
</section>
```

### 3. Card Component
```html
<article class="bg-white border border-gray-200 rounded-lg shadow-lg 
                hover:shadow-xl transition-all duration-300 overflow-hidden">
  <div class="p-6 md:p-8">
    <h3 class="text-xl md:text-2xl font-bold mb-4">Card Title</h3>
    <p class="text-base text-gray-700 leading-relaxed">Description text</p>
  </div>
</article>
```

### 4. Form Input
```html
<div>
  <label class="block mb-2 text-base font-semibold text-gray-900">
    Label Text *
  </label>
  <input type="text" 
         class="bg-gray-50 border border-gray-300 text-gray-900 
                text-base rounded-lg 
                focus:ring-[#e09a00] focus:border-[#e09a00] 
                block w-full p-3 transition-colors duration-300"
         placeholder="Placeholder text" required>
</div>
```

### 5. Section Background Pattern
```html
<!-- White Section -->
<section class="bg-white">
  <div class="py-12 md:py-16">
    <div class="container">
      <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12">
        Section Title
      </h2>
      <!-- Content -->
    </div>
  </div>
</section>

<!-- Alternating Stone Background -->
<section class="bg-stone-50">
  <div class="py-12 md:py-16">
    <!-- Same structure -->
  </div>
</section>

<!-- Accent Section (Ocean Blue) -->
<section class="bg-[#769ba4]">
  <div class="py-12 md:py-16">
    <div class="container">
      <h2 class="text-white text-3xl md:text-4xl lg:text-5xl font-bold">
        Featured Content
      </h2>
    </div>
  </div>
</section>
```

---

## 📱 Responsive Design

### Breakpoint Strategy
```css
/* Mobile First Approach */
Base:       /* Mobile (320px+) */
md:         /* Tablet (768px+) */
lg:         /* Desktop (1024px+) */
xl:         /* Large Desktop (1280px+) */

/* Common Patterns */
text-4xl md:text-5xl lg:text-6xl      /* Progressive typography scale */
py-12 md:py-16                        /* Larger spacing on desktop */
gap-6 md:gap-8                        /* Increased gaps */
p-6 md:p-8 lg:p-12                    /* Progressive padding */
grid-cols-1 md:grid-cols-2 lg:grid-cols-3  /* Responsive grids */
```

---

## 📝 Content Writing Guidelines

### Voice & Tone
**Personality:** Professional yet warm, knowledgeable yet approachable

✅ **DO:**
- Write conversationally: "Join us for an unforgettable fishing experience"
- Be specific: "3-hour guided fjord fishing tour"
- Show expertise: "Captain Tor's 20 years of local knowledge"
- Use action verbs: "Explore," "Discover," "Experience," "Book"
- Short paragraphs (3-4 sentences max)

❌ **DON'T:**
- Generic CTAs: "Click here," "Submit"
- Overly formal: "Please be advised that..."
- Vague: "Various activities available"
- Long paragraphs (>5 lines)
- ALL CAPS FOR EMPHASIS

### Content Structure
```markdown
## Headings: Clear, Descriptive, Action-Oriented
- "Book Your Fjord Adventure" ✅ (not "Booking")
- "What's Included in Your Tour" ✅ (not "Inclusions")

## Body Text: Scannable, Benefit-Focused
- Short paragraphs (3-4 lines)
- Bullet points for lists
- Bold key information
- Lead with benefits, not features
```

---

## 🎯 Nordic Minimal Principles

### Visual Hierarchy Checklist
```
1. Generous Whitespace
   ✓ py-12 md:py-16 minimum for sections
   ✓ mb-12 between content blocks
   ✓ Don't fear empty space

2. Typography as Hero
   ✓ Large, bold headings (text-4xl+ for H1)
   ✓ Clear contrast between heading/body
   ✓ Limited font sizes (use system)

3. Subtle Depth
   ✓ shadow-lg for cards (not shadow-xl everywhere)
   ✓ Single border color (gray-200)
   ✓ Minimal use of colored backgrounds

4. Purposeful Color
   ✓ Orange only for primary actions
   ✓ White/light gray for 90% of backgrounds
   ✓ Color accent sections sparingly

5. Clean Interactions
   ✓ Smooth transitions (duration-300)
   ✓ Hover states that add subtle depth
   ✓ No complex animations
```

---

## ✅ Quality Checklist

### Before Creating/Modifying UI

**Visual Design (Critical)**
- [ ] Generous whitespace (py-12 md:py-16, mb-12)
- [ ] Large, bold headings (H1: text-4xl+, H2: text-3xl+)
- [ ] Limited color palette (90% white/gray + orange accent)
- [ ] Consistent spacing rhythm (12, 16, 24, 32, 48)
- [ ] Subtle shadows (shadow-lg)
- [ ] Clean borders (border-gray-200 only)
- [ ] Smooth transitions (duration-300)

**Typography (Critical)**
- [ ] H1: text-4xl md:text-5xl lg:text-6xl
- [ ] H2: text-3xl md:text-4xl lg:text-5xl
- [ ] Body text has leading-relaxed
- [ ] Clear hierarchy visible

**Simplicity (Critical)**
- [ ] No unnecessary decorative elements
- [ ] Only one accent color per section
- [ ] No complex gradients or effects
- [ ] Content breathes (not cramped)

**Responsive (Important)**
- [ ] Mobile-first approach
- [ ] Consistent padding scale
- [ ] Grid layouts collapse properly

**Content (Important)**
- [ ] Short paragraphs (3-4 sentences)
- [ ] Action-oriented CTAs
- [ ] Scannable headings

---

## 🚫 Common Mistakes to Avoid

### Visual
❌ Too much color/backgrounds (90% should be white/stone)
❌ Insufficient whitespace (cramped layout)
❌ Small, timid headings (go bold!)
❌ Complex animations or effects
❌ Inconsistent spacing rhythm
❌ Using shadow-xl everywhere (prefer shadow-lg)
❌ Multiple border colors (use gray-200 only)

### Content
❌ Generic CTAs: "Click here," "Submit"
❌ Long paragraphs (>5 lines)
❌ Vague headings: "Information," "Details"
❌ Overly formal language

### Code
❌ Inline styles (except background-image)
❌ Duplicate mobile/desktop code
❌ Missing transitions on hover states
❌ Inconsistent spacing units

---

## 📚 Quick Reference

### Copy-Paste Prompts for AI

**For New Pages:**
```
Create a new Hugo page using Nordic Coastal Minimalism style:
- Large hero section with text-5xl heading and py-12 md:py-16 padding
- White background with stone-50 alternating sections
- Bold headings (text-3xl md:text-4xl lg:text-5xl for H2)
- Orange CTA buttons (bg-[#e09a00] hover:bg-[#d08900])
- Subtle shadow-lg cards with rounded-lg corners
- Grid layouts: grid-cols-1 md:grid-cols-2 lg:grid-cols-3
```

**For Components:**
```
Create a card component:
- bg-white border border-gray-200 rounded-lg shadow-lg
- hover:shadow-xl transition-all duration-300
- p-6 md:p-8 padding
- text-3xl md:text-4xl font-bold heading
- text-gray-700 body text with leading-relaxed
```

**For Sections:**
```
Create a content section:
- bg-white or bg-stone-50 background
- py-12 md:py-16 vertical padding
- container mx-auto px-4 wrapper
- mb-12 spacing between elements
- text-3xl md:text-4xl lg:text-5xl centered heading
- grid grid-cols-1 md:grid-cols-2 gap-8 for content
```

### Color Cheat Sheet
```
Primary CTA:     bg-[#e09a00] hover:bg-[#d08900]
Section Accent:  bg-[#769ba4] (ocean) or bg-[#05694c] (forest)
Info Box:        bg-[#f3f7f6] or bg-stone-50
Border:          border-gray-200
Text Heading:    text-gray-900
Text Body:       text-gray-700
```

### Spacing Cheat Sheet
```
Section:         py-12 md:py-16
Between blocks:  mb-12
Between items:   mb-6 to mb-8
Card padding:    p-6 md:p-8 or p-8 md:p-12
Button:          px-6 py-3 to px-8 py-4
Container:       px-4 (always)
Grid gaps:       gap-6 md:gap-8
```

### Typography Cheat Sheet
```
H1:     text-4xl md:text-5xl lg:text-6xl font-bold
H2:     text-3xl md:text-4xl lg:text-5xl font-bold
H3:     text-xl md:text-2xl font-bold
Body:   text-base leading-relaxed
Large:  text-lg md:text-xl leading-relaxed
Button: text-lg font-semibold
```

---

## 🔧 Technical Stack

- **Hugo:** Static site generator
- **Tailwind CSS:** v4.0.0 + @tailwindcss/typography
- **Theme:** balevikit-tailwindcss-hugo-theme

### Hugo Partials Reference
- `components/images/image-banner` - Hero images
- `components/images/image-dynamic` - Responsive images
- `components/images/image-square` - Square images
- `components/images/carousel-square` - Image carousels
- `components/prose-content.html` - Content with typography
- `activity/*` - Activity-specific components
- `arrow.html` - Arrow icon for links/buttons

### Development Commands
```bash
hugo                    # Build site
hugo server            # Dev server (localhost:1313)
hugo --templateMetrics # Performance analysis
```

---

**Last Updated:** 2025-02-19  
**Version:** 2.0  
**Philosophy:** Nordic Coastal Minimalism with Adventure Warmth  
**Focus:** Create beautiful, functional interfaces that inspire adventure while maintaining Norwegian simplicity

