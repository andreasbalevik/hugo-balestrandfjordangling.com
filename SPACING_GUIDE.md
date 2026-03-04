# Spacing & Padding System - Complete Guide

## Overview
This guide ensures **consistent, predictable spacing** throughout the entire website. All spacing follows a standardized rhythm to create a professional, balanced appearance.

## Core Spacing Scale

### Vertical Spacing (Margins)
The spacing system uses these values for margins:

```
12px  = mb-3
16px  = mb-4
24px  = mb-6  ← Primary spacing between content
32px  = mb-8
48px  = mb-12 ← Major section breaks
64px  = mb-16
```

### Horizontal/Card Padding (Inside containers)
The padding system uses these values:

```
12px  = p-3
16px  = p-4, px-4, py-4
24px  = p-6, px-6, py-6
32px  = p-8, px-8, py-8
48px  = p-12, px-12, py-12
64px  = p-16, px-16, py-16
```

## Standard Patterns

### 1. Hero/Card Content Pattern
**Inside a card with `p-8 md:p-12 lg:p-16`:**

```html
<div class="p-8 md:p-12 lg:p-16">
  <h1 class="mt-0 mb-6 text-3xl md:text-4xl lg:text-5xl font-bold">
    Heading
  </h1>
  <p class="mb-6 text-lg md:text-xl leading-relaxed text-gray-700">
    Body text here
  </p>
  <button>Action</button>  <!-- No margin needed -->
</div>
```

**Result:** Heading → (6 margin) → Text → (6 margin) → Button ✅

### 2. Section Heading Pattern
**For h2/h3 followed by descriptive text:**

```html
<h2 class="mt-0 mb-6 text-2xl md:text-3xl lg:text-4xl font-bold">
  Section Title
</h2>
<p class="mb-12 text-base leading-relaxed text-gray-700">
  Description text
</p>
```

**Result:** Heading → (6 margin) → Text → (12 margin) → Next Section ✅

### 3. List/Grid Items Pattern
**For content in grids:**

```html
<div class="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
  <div class="flex flex-col">
    <h3 class="mt-0 mb-4 text-xl font-bold">
      Item Title
    </h3>
    <p class="text-gray-700 leading-relaxed">
      Item description
    </p>
  </div>
  <!-- More items -->
</div>
```

**Key:** `gap-6 md:gap-8` ensures consistent spacing between grid items.

### 4. Card Padding Pattern
**Standard card (appears throughout site):**

```html
<article class="bg-white border border-gray-300 rounded-xl shadow-lg p-8 md:p-12">
  <h3 class="mt-0 mb-4 text-xl font-bold">
    Card Title
  </h3>
  <p class="text-gray-700 leading-relaxed">
    Card content
  </p>
</article>
```

**Alternatives:**
- Large cards: `p-8 md:p-12 lg:p-16`
- Standard cards: `p-6 md:p-8`
- Compact cards: `p-4 md:p-6`

## Rules & Best Practices

### ✅ ALWAYS Do This:

1. **Headings start with `mt-0`**
   ```html
   <h1 class="mt-0 mb-6 ...">
   ```
   Never leave headings with top margin.

2. **Consistent heading-to-text spacing**
   - H1 to text: `mb-6` on heading
   - H2 to text: `mb-6` on heading
   - H3 to text: `mb-4` on heading
   ```html
   <h3 class="mt-0 mb-4 text-xl font-bold">Title</h3>
   <p>Text here</p>
   ```

3. **Use `.container` for main sections**
   ```html
   <section>
     <div class="container">
       <!-- Content inside gets padding from container -->
     </div>
   </section>
   ```

4. **Grid gaps are ALWAYS `gap-6 md:gap-8`**
   ```html
   <div class="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
   ```
   Never use `gap-4`, `gap-10`, `gap-12`, etc.

5. **Major sections separated by `mb-12`**
   ```html
   <div class="mb-12">
     <!-- Content block -->
   </div>
   <div>
     <!-- Next section -->
   </div>
   ```

6. **Card padding uses these values only**
   - `p-8 md:p-12 lg:p-16` (Large/Hero cards)
   - `p-6 md:p-8` (Standard cards)
   - `p-4 md:p-6` (Compact cards)

7. **Between similar elements: `mb-6`**
   - Between heading and description
   - Between elements in a content block
   - Between cards in sequence

### ❌ NEVER Do This:

1. **Random margin values**
   ```html
   ❌ mb-2, mb-3, mb-5, mb-7, mb-9, mb-10, mb-11
   ✅ mb-4, mb-6, mb-8, mb-12 only
   ```

2. **Headings with top margin**
   ```html
   ❌ <h2 class="mt-4 mb-6">
   ✅ <h2 class="mt-0 mb-6">
   ```

3. **Inconsistent grid gaps**
   ```html
   ❌ gap-4, gap-10, gap-12, gap-16, gap-20
   ✅ gap-6 md:gap-8 (always!)
   ```

4. **Padding around `.container`**
   ```html
   ❌ <section class="py-12">
        <div class="container py-12">
   ✅ <section>
        <div class="container">  <!-- Has py-12 md:py-16 built-in -->
   ```

5. **Custom card padding**
   ```html
   ❌ p-7, p-10, p-11, p-13, p-14, p-15
   ✅ p-4 md:p-6, p-6 md:p-8, p-8 md:p-12 lg:p-16
   ```

6. **Inconsistent section spacing**
   ```html
   ❌ Some sections mb-8, some mb-10, some mb-12
   ✅ All use mb-12 (or mb-8 in compact sections)
   ```

## Spacing Reference Table

| Element | Spacing | Example |
|---------|---------|---------|
| H1 top | `mt-0` | Always |
| H1 bottom | `mb-6` | Before text |
| H2 top | `mt-0` | Always |
| H2 bottom | `mb-6` | Before text |
| H3 top | `mt-0` | Always |
| H3 bottom | `mb-4` | Before text |
| Text below heading | `mb-6` | Standard paragraph |
| Between major blocks | `mb-12` | Section separator |
| Grid gaps | `gap-6 md:gap-8` | All grids |
| Card padding | `p-8 md:p-12` | Standard cards |
| Section padding | `py-12 md:py-16` | In `.container` |

## Real-World Examples

### Example 1: Hero Section (Home Page)
```html
<section>
  <div class="container">
    <div class="bg-white p-8 md:p-12 lg:p-16 rounded-xl shadow-lg">
      <h1 class="mt-0 mb-6 text-3xl md:text-4xl lg:text-5xl font-bold">
        Page Title
      </h1>
      <p class="mb-6 text-lg md:text-xl leading-relaxed text-gray-700">
        Description text
      </p>
      <button class="...">Action Button</button>
    </div>
  </div>
</section>
```

### Example 2: Section with Grid
```html
<section class="bg-stone-50">
  <div class="container">
    <div class="text-center mb-12">
      <h2 class="mt-0 mb-6 text-2xl md:text-3xl lg:text-4xl font-bold">
        Why Choose Us
      </h2>
      <p class="text-gray-600 leading-relaxed max-w-2xl mx-auto">
        Description here
      </p>
    </div>
    
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
      <div class="bg-white p-6 md:p-8 rounded-lg">
        <h3 class="mt-0 mb-4 text-xl font-bold">Item 1</h3>
        <p class="text-gray-700">Description</p>
      </div>
      <!-- More items -->
    </div>
  </div>
</section>
```

### Example 3: Content Section with Cards
```html
<section class="bg-white">
  <div class="container">
    <h2 class="mt-0 mb-12 text-2xl md:text-3xl lg:text-4xl font-bold">
      Featured Items
    </h2>
    
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
      <article class="bg-white border border-gray-300 p-8 md:p-12 rounded-lg shadow-lg">
        <h3 class="mt-0 mb-6 text-xl font-bold">
          Card Title
        </h3>
        <p class="mb-6 text-gray-700 leading-relaxed">
          Card content here
        </p>
        <a href="#" class="text-[#e09a00] font-semibold">Learn More →</a>
      </article>
      <!-- More cards -->
    </div>
  </div>
</section>
```

## Browser DevTools Checklist

When inspecting an element, verify:

1. **Headings**: Should show `margin-top: 0` (mt-0)
2. **Heading to text**: Space should be `24px` (mb-6)
3. **Grid gaps**: Should show `24px` (mobile) or `32px` (tablet) between items
4. **Card padding**: Should be consistent throughout site
5. **Section breaks**: Should have `48px` (mb-12) between major sections

## Implementation Tips

### Using VS Code/Sublime Find & Replace

To find inconsistent spacing, search for:
```
mb-[0-9]+ 
```

This will highlight ALL margin-bottom classes so you can verify they're standard values only.

To find headings without `mt-0`:
```
<h[1-4] class="(?!.*mt-0)
```

### Hugo Template Tips

When creating a new section:

1. Start with the container
2. Add the major heading with `mt-0 mb-6`
3. If there's descriptive text, add `mb-6` to it
4. If there's a grid, use `gap-6 md:gap-8`
5. Verify spacing before committing

## Testing for Consistency

Run this command to check all files for inconsistent spacing:

```bash
grep -r "mb-[0-9]" layouts/ | grep -o 'mb-[0-9]*' | sort | uniq -c
```

Result should show only: `mb-4`, `mb-6`, `mb-8`, `mb-12`

---

**Status:** ✅ Implementation Complete  
**Last Updated:** March 2026  
**Version:** 1.0

Follow these guidelines to keep the website looking smooth, balanced, and professionally crafted! 🎯
