# Balestrand Fjord Angling - Design System & Style Guide

**Version:** 1.0  
**Last Updated:** February 26, 2025  
**Philosophy:** Scandinavian Minimalism with Subtle Borders & Defined Edges

---

## 🎯 Design Philosophy

This design system emphasizes **clarity, subtlety, and defined structure**. Inspired by Norwegian digital design principles (digdir.no), we use:

- **Subtle, light borders** to define and separate content without being aggressive
- **Minimal color palette** dominated by neutral grays and whites
- **Clear visual hierarchy** through typography and spacing, not decorative elements
- **Rounded corners** (4-8px) for a modern, friendly aesthetic
- **Consistent cards and components** that stand out as distinct elements without popping

**Core principle:** Cards and components are clearly defined through subtle borders and spacing, allowing content to breathe while maintaining visual structure.

---

## 🎨 Color Palette

### Primary Brand Colors
```
Orange Accent (Primary CTA):      #e09a00  - Warm, action-oriented
Orange Hover (Interactive):        #d08900  - Darker orange for feedback
```

### Background Colors
```
White (Primary):                   #ffffff  - Main content background
Stone Light (Secondary):           #f3f7f6  - Subtle alternate sections
Ocean Blue (Featured sections):    #769ba4  - Nature-inspired accent
Forest Green (Nature highlight):   #05694c  - Secondary accent color
```

### Neutral Foundation (90% of site)
```
Dark Gray (Footer, high contrast): #111827  - Deep charcoal
Text Primary (Headings):           #111827  - Same as dark gray
Text Secondary (Body):             #374151  - Medium gray
Text Muted (Supporting):           #6b7280  - Light gray
```

### Border & Divider Colors
```
Border Primary:                    #d1d5db  - Medium gray (form inputs, cards)
Border Light:                      #e5e7eb  - Light gray (subtle separators)
Border Subtle:                     #f3f7f6  - Stone color (minimal dividers)
```

### Usage Rules
✅ **DO:**
- Use `border border-gray-300` or `border border-gray-200` for all card components
- Use `#e09a00` (orange) ONLY for primary CTAs and interactive elements
- White or `#f3f7f6` (stone) for 90% of backgrounds
- Ocean blue or forest green only for featured content sections
- Use subtle borders instead of heavy background colors to define elements

❌ **DON'T:**
- Add background colors to create definition (use borders instead)
- Mix multiple accent colors in the same section
- Use borders on full-width sections (only on cards/components)
- Create custom colors outside this palette
- Use heavy shadows when subtle borders work better

---

## 📐 Typography System

### Heading Hierarchy (Consistent across all pages)
```
H1 (Page/Hero Titles):    text-3xl md:text-4xl lg:text-5xl font-bold
H2 (Section Titles):      text-2xl md:text-3xl lg:text-4xl font-bold
H3 (Subsections):         text-xl md:text-2xl font-bold
H4 (Card/Subsection):     text-lg md:text-xl font-bold
```

### Body Text & Labels
```
Large Body:               text-lg md:text-xl leading-relaxed
Regular Body:             text-base leading-relaxed
Small Text:               text-sm
Button Text:              text-lg font-semibold
Labels & Captions:        text-sm font-semibold text-gray-500
```

### Font Size Scale (Responsive)
```
text-xs:   0.75rem (12px)
text-sm:   0.875rem (14px)  → Use for labels, small text, UI elements
text-base: 1rem (16px)      → Default body text
text-lg:   1.125rem (18px)  → Large body, button text
text-xl:   1.25rem (20px)   → Sub-headings, highlights
text-2xl:  1.5rem (24px)    → Secondary headings (H3)
text-3xl:  1.875rem (30px)  → Page titles (H1 mobile)
text-4xl:  2.25rem (36px)   → Page titles (H1 tablet)
text-5xl:  3rem (48px)      → Page titles (H1 desktop)
```

### Rules
- Use `font-bold` for ALL headings (H1-H4)
- Use `leading-relaxed` (1.625) for body text
- All H1s are the same size across the entire site
- No custom font sizes outside this system
- Use `text-sm font-semibold` for labels and captions with `text-gray-500` for color
- Labels should be visually distinct but not overwhelming

---

## 📏 Spacing & Layout

### Vertical Spacing (Margins) - Consistent & Predictable
```
Between major sections:   mb-12 (48px)  - Breathing room between sections
Between elements:         mb-6  (24px)  - Standard gap between content
Between small items:      mb-4  (16px)  - Compact spacing
Between text elements:    mb-3  (12px)  - Minimal spacing
```

### Typography Spacing Pattern (Critical for hierarchy)
```
H1/H2/H3 to following element:  mb-6 (24px) - CONSISTENT
H3 to description:               mb-4 (16px) - Tighter
Description to button:           inherit     - No added margin
```

### Horizontal/Card Padding (Ensures consistent borders)
```
Large cards:        p-8 md:p-12 lg:p-16      (32px → 48px → 64px)
Standard cards:     p-6 md:p-8               (24px → 32px)
Compact:            p-4 md:p-6               (16px → 24px)
Buttons/inputs:     px-6 py-3                (24px horizontal, 12px vertical)
```

### Grid Spacing - Always Consistent
```
All grids:          gap-6 md:gap-8           (24px → 32px) - NO VARIATION
Grid to next:       mb-12                    (After grid)
```

### Section Padding
```
Main sections:      py-12 md:py-16           (Container has padding)
Compact sections:   py-8 md:py-12
Card sections:      p-8 md:p-12 lg:p-16      (Inside cards)
```

### Container Usage
```
<section>                          (No padding - section control)
  <div class="container">          (Includes padding: py-12 md:py-16)
    <!-- Content -->
  </div>
</section>
```

### Rules - CRITICAL for consistency
✅ **DO:**
- Use `.container` for all main content sections (includes padding)
- Heading: `mt-0 mb-6` (always)
- Text after heading: `mb-6` or `mb-4` (same spacing down)
- Between sections: `mb-12` (consistent breathing room)
- Grids: `gap-6 md:gap-8` (NEVER vary this)
- Card padding: `p-8 md:p-12 lg:p-16` or `p-6 md:p-8` (no custom values)

❌ **DON'T:**
- Mix margin sizes randomly (mb-3, mb-8, mb-10 in same area)
- Add `py-` padding to sections that already use `.container`
- Use inconsistent gap sizes in grids
- Have different spacing between similar elements
- Create ad-hoc padding values (e.g., `p-10`, `p-7`)
- Leave headings with `mt-` (use `mt-0` always)

---

## 🧩 Component Pattern: Cards with Subtle Borders

### Standard Card Component
```html
<article class="bg-white rounded-lg shadow-lg border border-gray-300 
                hover:shadow-xl transition-all duration-300 p-6 md:p-8">
  <!-- Content here -->
</article>
```

**Key Features:**
- `bg-white` - Always white background
- `border border-gray-300` - Subtle light gray border (defines the edge)
- `rounded-lg` - Slightly rounded corners (consistent aesthetic)
- `shadow-lg` - Subtle shadow, not `shadow-xl`
- `p-6 md:p-8` or `p-8 md:p-12 lg:p-16` - Generous padding inside

### Hero Card (2-column with image)
```html
<div class="bg-white rounded-lg shadow-lg border border-gray-300 
            grid grid-cols-1 xl:grid-cols-2 overflow-hidden">
  <div class="p-8 md:p-12 lg:p-16 flex items-center">
    <!-- Content with heading -->
  </div>
  <div class="flex items-center justify-center h-full">
    <!-- Image -->
  </div>
</div>
```

### Featured Content Card (Single column with accent)
```html
<article class="bg-white rounded-lg shadow-lg border border-gray-300 
                p-8 md:p-12 lg:p-16">
  <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">Title</h2>
  <!-- Content -->
</article>
```

### Section Wrapper (NO border, NO background)
```html
<section>
  <div class="container">
    <!-- Content uses .container which has padding -->
  </div>
</section>
```

---

## 📱 Responsive Breakpoints

**Mobile First Approach:**
```
Base:       320px+  (Mobile)
md:         768px+  (Tablet)
lg:         1024px+ (Desktop)
xl:         1280px+ (Large Desktop)
```

**Common Responsive Patterns:**
```
text-3xl md:text-4xl lg:text-5xl           - Progressive text scaling
p-6 md:p-8 lg:p-12                         - Progressive padding
gap-6 md:gap-8                             - Progressive gaps
grid-cols-1 md:grid-cols-2 lg:grid-cols-3  - Progressive grid columns
rounded-none md:rounded-lg                 - Rounded only on desktop
```

---

## 🎨 Specific Component Rules

### Navigation & Buttons
- **Primary CTA:** `bg-[#e09a00] hover:bg-[#d08900] text-white`
- **Secondary CTA:** `bg-[#f3f7f6] hover:bg-gray-100 text-gray-900`
- **Text Button:** `text-[#e09a00] hover:text-[#d08900]`

### Form Elements
- **Input:** `border border-gray-300 focus:ring-[#e09a00] focus:border-[#e09a00]`
- **Label:** `text-base font-semibold text-gray-900`

### Featured Sections (Full Width)
- **Ocean Blue Section:** `bg-[#769ba4] text-white`
- **Forest Green Section:** `bg-[#05694c] text-white`
- **Stone Background:** `bg-[#f3f7f6]`

### Cards and Content
- **All cards:** `border border-gray-300 bg-white`
- **Card hover:** `hover:shadow-xl transition-all duration-300`
- **Card padding:** `p-8 md:p-12` minimum

### Images
- **Rounded images:** `rounded-lg shadow-lg`
- **Hero images:** No rounded corners on image itself, rounded on card wrapper
- **Image containers:** `overflow-hidden` to respect card border radius

---

## ✅ Quality Checklist (For Every Update)

### Visual Design
- [ ] All cards have `border border-gray-300` for defined edges
- [ ] Sections without cards have NO background color or border
- [ ] Generous whitespace (mb-12 between sections, p-8+ in cards)
- [ ] Large, bold headings (H1: text-3xl+, H2: text-2xl+)
- [ ] All shadows are `shadow-lg`, not `shadow-xl`
- [ ] Rounded corners only on cards/components, not full sections
- [ ] Only orange (#e09a00) for CTAs

### Spacing & Layout
- [ ] All headings: `mt-0` (no top margin)
- [ ] H1 to text: `mb-6` (consistent)
- [ ] H2 to text: `mb-6` (consistent)
- [ ] H3 to text: `mb-4` (consistent)
- [ ] Between major sections: `mb-12` (breathing room)
- [ ] Card padding: `p-8 md:p-12 lg:p-16` or `p-6 md:p-8` (no custom values)
- [ ] All grids: `gap-6 md:gap-8` (no variation)
- [ ] Container used for all main sections (includes padding)
- [ ] No random spacing values (mb-3, mb-5, mb-7, mb-10, etc.)
- [ ] Visual consistency: spacing looks smooth and intentional

### Typography
- [ ] H1 is text-3xl md:text-4xl lg:text-5xl (consistent)
- [ ] H2 is text-2xl md:text-3xl lg:text-4xl
- [ ] H3 is text-xl md:text-2xl
- [ ] Body text has `leading-relaxed`
- [ ] All headings are `font-bold`
- [ ] Text color is either `text-gray-900` (headings) or `text-gray-700` (body)
- [ ] Labels use `text-sm font-semibold text-gray-500`
- [ ] Clear visual hierarchy through consistent font sizing

### Components
- [ ] Cards have white background + gray border + shadow
- [ ] No unnecessary background colors on sections
- [ ] Buttons use orange or light gray, no custom colors
- [ ] All interactive elements have `:hover` and `duration-300` transition
- [ ] Images in cards have `overflow-hidden` and rounded corners on card, not image

---

## 🚫 Common Mistakes to Avoid

### Visual
❌ Adding borders to full-width sections
❌ Mixing multiple background colors to define sections
❌ Using colors outside the defined palette
❌ Insufficient whitespace (cramped layout)
❌ Multiple shadow sizes (stick to `shadow-lg`)
❌ Rounded corners on hero images (apply to card wrapper instead)

### Spacing
❌ Adding `py-` padding to sections that already have `.container`
❌ Using inconsistent gap sizes (always `gap-6 md:gap-8`)
❌ Spacing between elements not following 12-24-32-48 rhythm
❌ Card padding below 6-8px minimum

### Typography
❌ Custom heading sizes (always use system sizes)
❌ H1 varying across pages
❌ Body text without `leading-relaxed`
❌ Text colors outside gray-700/gray-900 palette

---

## 📝 Implementation Notes for AI

When creating or updating any page/component:

1. **For content sections:** Use `.container` wrapper (padding included), NO background color, NO border
2. **For cards/highlighted content:** Use `border border-gray-300 bg-white rounded-lg shadow-lg p-8 md:p-12`
3. **For featured sections:** Use solid background color (`bg-[#769ba4]`, `bg-[#05694c]`, or `bg-[#f3f7f6]`), NO borders
4. **For typography:** Use consistent heading sizes across all pages
5. **For spacing:** Use `gap-6 md:gap-8` for grids, `mb-12` between sections, `p-8 md:p-12 lg:p-16` for cards
6. **For images:** Apply rounded corners to card wrapper with `overflow-hidden`, not to image element
7. **For borders:** Use `border-gray-300` ONLY on cards; never on sections
8. **For hover states:** Always include `transition-all duration-300`

---

## 🎯 Visual Summary: "Defined Yet Minimal"

Your design is about **clarity through subtlety**:
- Content is clearly **defined** by subtle borders, not by flashy colors or heavy shadows
- The interface **breathes** through generous whitespace and consistent spacing
- **Hierarchy** comes from typography scale and strategic use of the orange accent
- The design is **Scandinavian** — clean, efficient, professional, and refined

Every component should feel like a **distinct, well-crafted element** without being loud or ornamental.
