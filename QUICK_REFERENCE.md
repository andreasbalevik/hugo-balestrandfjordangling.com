# Design System - Quick Reference Guide

## Color Palette

| Name | Hex | Usage |
|------|-----|-------|
| Orange Accent | #e09a00 | Primary buttons, interactive elements |
| Orange Hover | #d08900 | Button hover states |
| White | #ffffff | Main backgrounds |
| Stone Light | #f3f7f6 | Secondary section backgrounds |
| Ocean Blue | #769ba4 | Featured sections |
| Forest Green | #05694c | Secondary featured sections |
| Dark Gray | #111827 | Text, footer |
| Text Secondary | #374151 | Body text |
| Text Muted | #6b7280 | Supporting text |
| Border Primary | #d1d5db | Card borders, form inputs |

## Typography Classes

```
H1: text-3xl md:text-4xl lg:text-5xl font-bold
H2: text-2xl md:text-3xl lg:text-4xl font-bold
H3: text-xl md:text-2xl font-bold
H4: text-lg md:text-xl font-bold
Body: text-base leading-relaxed
Large body: text-lg md:text-xl leading-relaxed
Labels: text-sm font-semibold text-gray-500
```

## Spacing - DO's & DON'Ts

### ✅ DO - Use These Values
```
Margins:        mb-4 | mb-6 | mb-8 | mb-12
Grid gaps:      gap-6 md:gap-8 (ALWAYS THIS ONLY)
Padding:        p-4 md:p-6 | p-6 md:p-8 | p-8 md:p-12 lg:p-16
Vertical:       py-12 md:py-16 (in sections via .container)
```

### ❌ DON'T - Avoid These
```
Random margins:  mb-2, mb-3, mb-5, mb-7, mb-9, mb-10
Inconsistent gaps: gap-2, gap-3, gap-4, gap-10, gap-12, gap-16
Custom padding:   p-7, p-10, p-11, p-13, p-14, p-15
```

## Section Template (REQUIRED PATTERN)

```html
<section class="bg-white">      <!-- or bg-stone-50 -->
  <div class="container">
    <h2 class="mt-0 mb-6 text-2xl md:text-3xl lg:text-4xl font-bold">
      Section Title
    </h2>
    <!-- Content -->
  </div>
</section>
```

**Background Alternation:**
```
Section 1: bg-white
Section 2: bg-stone-50
Section 3: bg-white
Section 4: bg-stone-50
(or break pattern with bg-[#769ba4] or bg-[#05694c] for featured)
```

## Card Component

```html
<article class="bg-white rounded-lg shadow-lg border border-gray-300 
                hover:shadow-xl transition-all duration-300 p-6 md:p-8">
  <h3 class="mt-0 mb-4 text-xl font-bold">Card Title</h3>
  <p class="text-gray-700 leading-relaxed">Card content</p>
</article>
```

## Buttons

**Primary CTA:**
```html
<a href="/path" 
   class="text-lg font-semibold bg-[#e09a00] hover:bg-[#d08900] 
          text-white px-6 py-4 md:px-8 md:py-4 rounded-xl shadow-lg 
          hover:shadow-xl transition-all duration-300">
  Button Text
</a>
```

**Secondary CTA:**
```html
<a href="/path"
   class="text-lg font-semibold bg-white border border-gray-300 
          text-gray-900 px-6 py-4 md:px-8 md:py-4 rounded-xl shadow-lg
          hover:bg-gray-50 transition-all duration-300">
  Button Text
</a>
```

## Grid Layouts

```html
<!-- 3-column responsive -->
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
  <!-- Items -->
</div>

<!-- Hero with image (2-col) -->
<div class="grid grid-cols-1 xl:grid-cols-2 gap-6 md:gap-8">
  <!-- Left: text -->
  <!-- Right: image -->
</div>
```

## Icons (Lucide)

```html
<!-- Simple icon -->
<i data-lucide="camera"></i>

<!-- Styled icon -->
<i data-lucide="user" class="w-6 h-6 text-[#e09a00] mr-2"></i>

<!-- Icon in button -->
<button class="flex items-center gap-2">
  <i data-lucide="arrow-right" class="w-5 h-5"></i>
  <span>Click me</span>
</button>
```

**Find icons:** https://lucide.dev/icons

## Responsive Breakpoints

```
Base:   320px+  (Mobile)
md:     768px+  (Tablet)
lg:     1024px+ (Desktop)
xl:     1280px+ (Large desktop)
```

**Example:**
```html
<div class="text-base md:text-lg lg:text-xl">
  Responsive text
</div>
```

## Shadows

```
✅ DO:   shadow-lg (standard)
❌ DON'T: shadow-xl (only on very special hover states)
```

## Rounded Corners

```
✅ DO:   rounded-lg (standard - 8px)
⚠️ LIMIT: rounded-xl (12px - use sparingly for featured content)
```

## Common Mistakes to Avoid

1. **Don't add py- to sections** - `.container` already has padding
   ```html
   ❌ <section class="py-12">
        <div class="container py-12">
   ✅ <section>
        <div class="container">  <!-- Has built-in py-12 md:py-16 -->
   ```

2. **Don't skip mt-0 on headings** - Always reset top margin
   ```html
   ❌ <h2 class="mb-6">Title</h2>
   ✅ <h2 class="mt-0 mb-6">Title</h2>
   ```

3. **Don't use random gap sizes** - Consistency is key
   ```html
   ❌ gap-3, gap-4, gap-10, gap-12
   ✅ gap-6 md:gap-8  (ONLY THIS)
   ```

4. **Don't mix background colors** - Use alternation pattern
   ```html
   ❌ bg-white → bg-stone-50 → bg-stone-50 (consecutive same)
   ✅ bg-white → bg-stone-50 → bg-white → bg-stone-50
   ```

5. **Don't forget border-gray-300** on cards - Defines edges
   ```html
   ❌ <div class="bg-white rounded-lg">
   ✅ <div class="bg-white border border-gray-300 rounded-lg">
   ```

## Quick Checklist for New Content

- [ ] All headings start with `mt-0`
- [ ] H1 is `text-3xl md:text-4xl lg:text-5xl font-bold`
- [ ] Labels are `text-sm font-semibold text-gray-500`
- [ ] Card padding is `p-8 md:p-12 lg:p-16` or `p-6 md:p-8`
- [ ] Cards have `border border-gray-300`
- [ ] Cards have `shadow-lg` (not shadow-xl)
- [ ] Grids have `gap-6 md:gap-8`
- [ ] Sections use `<section><div class="container">`
- [ ] Section backgrounds alternate: white → stone → white
- [ ] Buttons use orange #e09a00 or white with gray border
- [ ] All interactive elements have `transition-all duration-300`
- [ ] Images have `rounded-lg` in card, not on img element
- [ ] Text colors: headings gray-900, body gray-700, muted gray-500

---

**For Complete Details:** See DESIGN_GUIDE.md, TYPOGRAPHY_HIERARCHY.md, SPACING_GUIDE.md
