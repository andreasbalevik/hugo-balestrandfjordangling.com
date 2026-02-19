# GitHub Copilot Instructions
## Hugo Balestrand Fjord Angling Website - Technical Optimization Only

### ⚠️ PRIMARY RULE: MINIMAL VISUAL CHANGES

**When optimizing layouts, you MUST:**
- ✅ Keep visual appearance as similar as possible
- ✅ Make small improvements where beneficial (consistency, polish)
- ✅ Improve semantic HTML and code structure
- ✅ Add accessibility features
- ✅ Remove code duplication (if visually identical)
- ⚠️ Make MINIMAL visual changes only when they improve quality
- ❌ DO NOT make major visual redesigns
- ❌ DO NOT add significant new features or content

**Allowed Minimal Visual Improvements:**
- ✅ Add smooth transitions to existing hover states (e.g., `transition-colors duration-300`)
- ✅ Fix inconsistent spacing within same page (e.g., if one section uses `py-12`, another `py-8`, make consistent)
- ✅ Add subtle shadows or polish to existing elements
- ✅ Improve responsive breakpoints if missing
- ✅ Add aspect ratios to prevent layout shift
- ❌ DO NOT change typography sizes significantly
- ❌ DO NOT change color schemes
- ❌ DO NOT add new decorative elements

---

### Visual Design System (Reference Only - Do Not Modify)

#### Current Color Palette
- **Primary Accent:** `#e09a00` (Orange)
- **Secondary:** `#f5b13d` (Light Orange)
- **Backgrounds:** `bg-white`, `bg-stone-50`, `bg-[#f3f7f6]`, `bg-[#769ba4]`, `bg-[#05694c]`
- **Text:** `text-gray-700`, `text-gray-900`

#### Current Typography (Do Not Change)
- **Hero:** Various sizes per page
- **Sections:** `text-2xl` or `text-3xl`
- **Body:** `text-base` or `text-lg`
- **Preserve existing values exactly**

#### Current Spacing (Do Not Change)
- **Container:** `py-8`, `px-4`, `max-w-[1250px]`
- **Sections:** `py-12` or `py-8`
- **Preserve existing values exactly**

---

### Technical Optimization Formula

#### Phase 1: Semantic HTML (No Visual Changes)

**Goal:** Improve HTML semantics without affecting visual output

✅ **DO:**
```html
<!-- Replace generic divs with semantic tags -->
<section class="bg-white">  <!-- was: <div class="bg-white"> -->
  <article>                  <!-- was: <div> -->
    <h1>Title</h1>
  </article>
</section>
```

❌ **DON'T:**
```html
<!-- Don't change classes or structure that affects layout -->
<section class="bg-white py-16">  <!-- was: py-12 - Visual change! -->
```

**Actions:**
- Replace `<div>` with `<section>`, `<article>`, `<aside>`, `<nav>`, `<header>`, `<footer>`
- Keep ALL existing classes unchanged
- Maintain exact DOM structure if it affects layout

#### Phase 2: Remove Duplication (Preserve Visual Output)

**Goal:** Consolidate duplicate code that renders identically

✅ **DO:**
```html
<!-- Before: Duplicate mobile/desktop -->
<div class="hidden md:block">
  <h1 class="text-3xl md:text-5xl">{{ .Title }}</h1>
</div>
<div class="md:hidden">
  <h1 class="text-3xl">{{ .Title }}</h1>
</div>

<!-- After: Single responsive version -->
<h1 class="text-3xl md:text-5xl">{{ .Title }}</h1>
```

❌ **DON'T:**
```html
<!-- Don't merge if visual output differs -->
<!-- Desktop: white text, Mobile: dark text → Keep separate! -->
```

**Actions:**
- Merge `hidden md:block` + `md:hidden` patterns if content identical
- Use Tailwind responsive prefixes: `class="p-4 md:p-8"`
- **Test:** Build and verify visual output unchanged

#### Phase 3: Accessibility (No Visual Changes)

**Goal:** WCAG AA compliance without visual impact

✅ **DO:**
```html
<svg class="w-6 h-6" aria-hidden="true"><!-- Decorative --></svg>
<a href="/about" aria-label="Learn more about us">
  <svg><!-- Icon only link --></svg>
</a>
<img src="photo.jpg" alt="Description" loading="lazy" />
```

**Actions:**
- Add `aria-hidden="true"` to decorative icons
- Add `aria-label` to links without text
- Add `loading="lazy"` to below-fold images
- Ensure proper heading hierarchy (h1 → h2 → h3)
- Add semantic landmark roles if missing

#### Phase 4: Performance (No Visual Changes)

**Goal:** Improve performance without layout shift

✅ **DO (Only if no visual change):**
```html
<div class="relative aspect-[4/3]">
  <img src="photo.jpg" class="object-cover" />
</div>
```

⚠️ **WARNING:**
- Test aspect ratio doesn't change image sizing
- Verify no layout shift (CLS) introduced
- If unsure, skip this optimization

**Actions:**
- Add `aspect-ratio` only if preventing CLS
- Add `loading="lazy"` to images
- Keep image sizing exactly as current

#### Phase 5: Code Quality (No Visual Changes)

**Goal:** Cleaner, more maintainable code

✅ **DO:**
```html
<!-- Add comments for clarity -->
<!-- Hero Section -->
<section class="bg-white">
  <!-- Title -->
  <h1>{{ .Title }}</h1>
</section>

<!-- Type-safe data access -->
{{ with .Params.duration }}
  {{ if reflect.IsMap . }}
    {{ .hours }}h {{ .minutes }}m
  {{ else }}
    {{ . }}h
  {{ end }}
{{ end }}
```

**Actions:**
- Add HTML comments for section boundaries
- Add type checks for variable data (`reflect.IsMap`)
- Use `{{ with }}` for nil-safe access
- Extract repeated patterns to partials (if appropriate)

---

### Optimization Checklist

**Before making ANY change, ask:**

1. **Will this change how the page looks?**
   - Typography different? ❌ Stop
   - Spacing different? ❌ Stop
   - Colors different? ❌ Stop
   - Layout different? ❌ Stop
   - Looks identical? ✅ Proceed

2. **Am I adding new content/features?**
   - New decorative elements? ❌ Stop
   - New text/labels? ❌ Stop
   - New sections? ❌ Stop
   - Only code improvement? ✅ Proceed

3. **Am I removing information?**
   - Removing content? ❌ Stop
   - Removing functionality? ❌ Stop
   - Only removing code duplication? ✅ Proceed (test output!)

---

### What TO DO ✅

- Replace `<div>` with semantic HTML (keep classes)
- Add `aria-hidden="true"` to decorative SVGs
- Add `aria-label` to icon-only links
- Add `loading="lazy"` to images
- Consolidate duplicate responsive code (if output identical)
- Remove unnecessary wrapper divs (if no layout change)
- Add type checks: `{{ if reflect.IsMap . }}`
- Add HTML comments for sections
- Ensure proper heading hierarchy

### What NOT TO DO ❌

- Change `text-2xl` → `text-3xl` (typography)
- Change `mb-4` → `mb-6` (spacing)
- Change `p-4` → `p-6` (padding)
- Add decorative elements (badges, lines, icons)
- Add/remove content or sections
- Change colors or backgrounds
- Add hover effects not currently present
- Change button/label text
- Reorder sections
- Change grid columns or breakpoints

---

### Example: Correct Minimal Optimization

**Before:**
```html
<div class="bg-white">
    <div class="container">
        <div class="prose">
            <h1>{{.Title}}</h1>
            {{ partial "components/prose-content.html" .}}
        </div>
    </div>
</div>
```

**After (Semantic + Accessible):**
```html
<!-- Content Section -->
<article class="bg-white">
    <div class="container">
        <div class="prose">
            <h1>{{ .Title }}</h1>
            {{ partial "components/prose-content.html" .}}
        </div>
    </div>
</article>
```

**Changed:** `<div>` → `<article>`, added comment  
**Visual:** Identical (same classes, structure, spacing)  
**Improved:** Semantics, SEO, accessibility

---

### Hugo Partials Reference

- `components/images/image-banner` - Hero images
- `components/images/image-dynamic` - Responsive images
- `components/images/carousel-square` - Image carousels
- `components/prose-content.html` - Content with typography
- `activity/*` - Activity-specific components

### Technical Stack

- **Hugo:** Static site generator
- **Tailwind CSS:** v4.0.0 + @tailwindcss/typography
- **Theme:** balevikit-tailwindcss-hugo-theme

### Development Commands

```bash
hugo                    # Build site
hugo server            # Dev server
hugo --templateMetrics # Performance analysis
```

---

**Last Updated:** 2026-02-18  
**Philosophy:** Technical excellence WITHOUT visual changes
