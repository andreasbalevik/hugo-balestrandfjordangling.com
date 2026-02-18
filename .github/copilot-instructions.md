# GitHub Copilot Instructions
## Hugo Balestrand Fjord Angling Website - Optimization Framework

### Visual Design System & Tailwind CSS v4 Standards

#### Color Palette
- **Primary Accent:** `#e09a00` (Orange) - CTAs, badges, decorative elements
- **Secondary Accent:** `#f5b13d` (Light Orange) - Gradients
- **Backgrounds:** `bg-white`, `bg-stone-50/100`, `bg-[#f3f7f6]`, `bg-[#769ba4]`, `bg-[#05694c]`
- **Text:** `text-gray-700`, `text-gray-900`

#### Typography Scale (Mobile-First Progressive Enhancement)
- **Hero:** `text-3xl md:text-4xl lg:text-5xl xl:text-6xl`
- **Sections:** `text-2xl md:text-3xl`
- **Body:** `text-base md:text-lg lg:text-xl`
- **Prose:** `prose md:prose-lg lg:prose-xl`

#### Spacing Rhythm
- **Container:** `py-8 lg:py-10 xl:py-12 px-4 xl:px-0 max-w-[1250px]`
- **Sections:** `py-12 md:py-16 lg:py-20`
- **Gaps:** `gap-4 md:gap-6` or `gap-6 md:gap-8`
- **Content:** `max-w-3xl` to `max-w-4xl`, Highlights: `max-w-5xl`

---

### Advanced Optimization Formula (2026 Best Practices)

#### Phase 1: Remove & Consolidate
1. **Eliminate Duplication**
   - Merge separate mobile/desktop code blocks into single responsive implementation
   - Replace `hidden md:flex` patterns with unified responsive layouts
   - Use Tailwind responsive prefixes over Hugo conditionals where possible

2. **Simplify Markup**
   - Remove unnecessary wrapper divs
   - Flatten DOM structure while maintaining functionality
   - Use CSS utilities instead of structural HTML for spacing

#### Phase 2: Enhance Visual Hierarchy
1. **Consistent Aspect Ratios**
   - Use `aspect-[21/9] md:aspect-[21/7]` for hero sections
   - Use `aspect-[4/3]` or `aspect-square` for galleries
   - Prevents layout shift (CLS) and ensures predictability

2. **Strategic Gradients & Overlays**
   - Hero overlays: `bg-gradient-to-t from-black/75 via-black/40 to-transparent`
   - Hover overlays: `bg-black/0 group-hover:bg-black/10`
   - Ensure text contrast meets WCAG AA standards (4.5:1 minimum)

3. **Progressive Typography**
   - Scale headings across 4-5 breakpoints for optimal readability
   - Limit line length to 60-75 characters (max-w-3xl to max-w-4xl)
   - Use `leading-relaxed` (1.625) for body text

#### Phase 3: Add Micro-Interactions
1. **Hover States** (Gate with prefers-reduced-motion)
   ```
   hover:scale-[1.02] transition-transform duration-300
   shadow-lg hover:shadow-2xl transition-shadow duration-300
   ```

2. **Group Coordination**
   ```html
   <div class="group">
     <img class="group-hover:scale-105 transition-transform" />
     <div class="group-hover:bg-black/10 transition-colors"></div>
   </div>
   ```

3. **Entrance Animations** (Optional enhancement)
   - Consider scroll-triggered animations for featured content
   - Use `opacity-0 transition-opacity duration-500`

#### Phase 4: Performance Optimization
1. **Image Strategy**
   - Use Hugo's image processing for responsive variants
   - Generate WebP/AVIF formats: `$image.Resize "800x webp"`
   - Implement lazy loading: `loading="lazy"` (except above-fold)
   - Preload hero images: `<link rel="preload" as="image">`

2. **Critical Rendering Path**
   - Inline critical CSS for above-fold content
   - Defer non-essential JavaScript
   - Use `fetchpriority="high"` on hero images

3. **Core Web Vitals Focus**
   - **LCP:** Optimize hero image loading (<2.5s)
   - **CLS:** Use aspect ratios, reserve space for dynamic content
   - **INP:** Minimize JavaScript, optimize event handlers

#### Phase 5: Accessibility First
1. **Semantic Structure**
   ```html
   <article>
     <header><!-- Hero --></header>
     <section><!-- Content --></section>
     <aside><!-- Gallery --></aside>
     <section><!-- Related --></section>
   </article>
   ```

2. **ARIA & Focus Management**
   - `aria-hidden="true"` for decorative icons
   - `aria-label` for icon-only buttons
   - Maintain visible focus indicators: `focus-visible:ring-2 focus-visible:ring-[#e09a00]`

3. **Motion Preferences**
   ```css
   @media (prefers-reduced-motion: reduce) {
     * { animation-duration: 0.01ms !important; }
   }
   ```

#### Phase 6: User-Centric Refinement
1. **F-Pattern & Z-Pattern Layouts**
   - Place featured badge and title in natural eye path (top-left to center)
   - Position CTAs at pattern terminals (bottom-right or center)

2. **Cognitive Load Reduction**
   - Limit choices in related activities (3-6 items maximum)
   - Use white space generously (min 16px/1rem between elements)
   - Clear visual grouping with backgrounds and borders

3. **Touch Targets** (Mobile Optimization)
   - Minimum 44x44px for interactive elements
   - Adequate spacing between clickable items: `gap-4` minimum
   - Use `px-6 py-3` or larger for buttons

---

### Component Library

#### Hero Section (Optimized Pattern)
```html
<div class="relative overflow-hidden">
    <div class="relative aspect-[21/9] md:aspect-[21/7]">
        {{ partial "components/images/image-banner" . }}
        <div class="absolute inset-0 bg-gradient-to-t from-black/75 via-black/40 to-transparent"></div>
    </div>
    <div class="absolute inset-0 flex items-end">
        <div class="container py-8 md:py-12 lg:py-16">
            <div class="max-w-4xl">
                <!-- Badge, Title, Description -->
            </div>
        </div>
    </div>
</div>
```

#### Featured Badge (Interactive)
```html
<div class="inline-flex items-center gap-2 md:gap-3 mb-4 md:mb-6 bg-[#e09a00] px-4 md:px-6 py-2 md:py-3 rounded-full shadow-2xl backdrop-blur-sm hover:scale-105 transition-transform duration-300">
    <svg class="w-4 h-4 md:w-5 md:h-5 text-white" fill="currentColor" aria-hidden="true">
        <!-- Icon path -->
    </svg>
    <span class="text-white text-xs md:text-sm font-bold uppercase tracking-widest">Featured</span>
</div>
```

#### Image Gallery (Performance + UX)
```html
<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
    {{ range . }}
    <div class="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] aspect-[4/3]">
        {{ partial "components/images/image-dynamic" . }}
        <div class="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 pointer-events-none"></div>
    </div>
    {{ end }}
</div>
```

#### Section Heading (Brand Consistency)
```html
<div class="mb-8 md:mb-12 text-center">
    <div class="inline-flex items-center gap-3">
        <div class="h-1 w-12 bg-[#e09a00] rounded-full"></div>
        <h2 class="text-2xl md:text-3xl font-bold text-gray-900 m-0">Title</h2>
        <div class="h-1 w-12 bg-[#e09a00] rounded-full"></div>
    </div>
</div>
```

#### CTA Button (Gradient with State)
```html
<a href="#" 
   class="text-white bg-gradient-to-r from-[#e09a00] to-[#f5b13d] hover:from-[#d08900] hover:to-[#e09a00] px-6 py-3 inline-flex items-center gap-2 no-underline rounded-lg shadow-lg font-semibold transition-all duration-300 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#e09a00]">
    Button Text
    {{ partial "arrow.html" . }}
</a>
```

#### Prose Customization (Enhanced)
```
prose md:prose-lg lg:prose-xl max-w-none
prose-headings:font-bold prose-headings:text-gray-900 prose-headings:scroll-mt-24
prose-p:text-gray-700 prose-p:leading-relaxed
prose-a:text-[#e09a00] prose-a:no-underline hover:prose-a:underline prose-a:transition-colors
prose-img:rounded-lg prose-img:shadow-lg
prose-strong:text-gray-900 prose-strong:font-semibold
```

---

### Tailwind CSS v4 Advanced Features

#### Container Queries (New in v4)
```html
<div class="@container">
    <div class="@lg:grid-cols-2"><!-- Responds to parent, not viewport --></div>
</div>
```

#### CSS Theme Variables (v4 Pattern)
```css
@theme {
  --color-brand-primary: #e09a00;
  --color-brand-secondary: #f5b13d;
  --font-size-hero: clamp(2rem, 5vw, 4rem);
}
```

#### Cascade Layers
```css
@layer base {
  /* Foundation styles */
}
@layer components {
  /* Reusable components */
}
@layer utilities {
  /* Utility overrides */
}
```

---

### Hugo-Specific Optimizations

#### Image Processing (Performance Critical)
```go
{{ $image := resources.Get .src }}
{{ $webp := $image.Resize "800x webp q85" }}
{{ $avif := $image.Resize "800x avif q85" }}
<picture>
  <source srcset="{{ $avif.RelPermalink }}" type="image/avif">
  <source srcset="{{ $webp.RelPermalink }}" type="image/webp">
  <img src="{{ $image.RelPermalink }}" loading="lazy" decoding="async">
</picture>
```

#### Partial Caching
```go
{{ partialCached "expensive-component.html" . .Section }}
```

#### Build Configuration
```toml
[build]
  writeStats = true
  
[minify]
  minifyOutput = true
  
[imaging]
  resampleFilter = "lanczos"
  quality = 85
  anchor = "smart"
```

---

### Testing & Validation Checklist

#### Performance Metrics
- [ ] Lighthouse score >90 (all categories)
- [ ] LCP <2.5s, FID <100ms, CLS <0.1
- [ ] Total page weight <1MB (initial load)
- [ ] CSS size <50KB (compressed)

#### Responsive Testing
- [ ] Test on mobile (375px), tablet (768px), desktop (1440px)
- [ ] Verify touch targets ≥44px on mobile
- [ ] Check text readability at all breakpoints
- [ ] Validate image loading and aspect ratios

#### Accessibility Audit
- [ ] WCAG AA color contrast (4.5:1 text, 3:1 UI)
- [ ] Keyboard navigation works completely
- [ ] Screen reader announces content logically
- [ ] Focus indicators visible and clear
- [ ] Motion respects user preferences

#### User Experience
- [ ] F-pattern/Z-pattern flow is intuitive
- [ ] Featured content stands out clearly
- [ ] CTAs are obvious and actionable
- [ ] Related content encourages exploration
- [ ] Loading states prevent frustration

---

### Development Workflow

```bash
# Local development with live reload
hugo server --disableFastRender

# Build with minification
hugo --minify

# Analyze build stats
hugo --templateMetrics --templateMetricsHints

# Performance testing
npx unlighthouse --site http://localhost:1313
```

---

### Advanced Patterns to Consider

#### 1. **Skeleton Loading States**
```html
<div class="animate-pulse bg-gray-200 rounded-lg aspect-[4/3]"></div>
```

#### 2. **Intersection Observer for Lazy Content**
```html
<img data-src="image.jpg" class="lazy" loading="lazy">
```

#### 3. **Smart Grid with Auto-Fill**
```
grid-cols-[repeat(auto-fill,minmax(300px,1fr))]
```

#### 4. **Container Query Cards**
```html
<div class="@container">
    <div class="grid @lg:grid-cols-2 gap-4">
        <!-- Adapts to parent width, not viewport -->
    </div>
</div>
```

#### 5. **Fluid Typography with Clamp**
```
text-[clamp(1rem,2vw+0.5rem,2rem)]
```

---

### User Experience Research Integration

#### Eye-Tracking Patterns
- **F-Pattern:** Users scan top-left → right, then down left side
  - Place featured badge and logo top-left
  - Position hero title in the scan path
  
- **Z-Pattern:** Eyes move horizontally across, diagonally down, then across again
  - Use for landing pages with hero → features → CTA flow

#### Cognitive Load Principles
1. **Hick's Law:** Fewer choices = faster decisions
   - Limit related activities to 3-6 items
   - Single primary CTA per section

2. **Miller's Law:** Users remember 7±2 items
   - Group gallery images in sets of 6-9
   - Break long content into digestible chunks

3. **Gestalt Principles:**
   - Proximity: Group related elements with white space
   - Similarity: Consistent styling for similar elements
   - Continuity: Guide eye flow with lines and alignment

#### Engagement Optimization
- **Above-fold CTA:** 73% more effective than below-fold
- **White space:** 20-50% improves comprehension by 20%
- **Load time:** Each second delay = 7% conversion loss
- **Mobile-first:** 60%+ traffic from mobile devices

---

### Performance Budget

| Metric | Target | Critical |
|--------|--------|----------|
| First Contentful Paint | <1.8s | <1.0s |
| Largest Contentful Paint | <2.5s | <1.5s |
| Cumulative Layout Shift | <0.1 | <0.05 |
| Total Blocking Time | <300ms | <150ms |
| CSS Size (compressed) | <50KB | <30KB |
| JS Size (compressed) | <100KB | <50KB |
| Images (hero, optimized) | <200KB | <100KB |

---

### Quality Gates (Pre-Deployment)

#### Code Quality
```bash
# Validate HTML structure
hugo && npx html-validate public/**/*.html

# Check accessibility
npx pa11y-ci public/index.html

# Performance audit
npx lighthouse-ci autorun
```

#### Visual Regression
- Compare screenshots before/after changes
- Verify responsive breakpoints render correctly
- Check cross-browser compatibility (Chrome, Safari, Firefox)

---

### Hugo Partials & Components

**Image Components:**
- `components/images/image-banner` - Hero images with optimization
- `components/images/image-dynamic` - Responsive with multiple formats
- `components/images/image-square` - Square aspect ratio
- `components/images/carousel-square` - Image carousel

**Content Components:**
- `components/prose-content.html` - Typography-rich content
- `arrow.html` - Directional icon for CTAs
- `activity/*` - Activity-specific modules

---

### Code Quality Standards

1. **Minimal Changes:** Only modify necessary code
2. **Semantic HTML:** Use proper elements (`<article>`, `<section>`, `<aside>`)
3. **Utility-First:** Prefer Tailwind over custom CSS
4. **Accessibility:** WCAG AA compliance minimum
5. **Performance:** Measure before/after with Lighthouse
6. **DRY Principle:** Extract reusable patterns
7. **Mobile-First:** Start small, scale up
8. **Brand Consistency:** Follow established design system

---

### Continuous Improvement

#### Analytics to Track
- Bounce rate on featured pages
- Time on page / scroll depth
- Click-through rate on CTAs
- Image gallery engagement
- Related content click rate

#### A/B Testing Ideas
- Hero text positioning (left vs center)
- CTA button placement and copy
- Gallery grid density (2 vs 3 columns)
- Related activities count (3 vs 6 items)

#### Feedback Loops
1. Monitor Lighthouse scores in CI/CD
2. Review analytics weekly
3. Conduct user testing quarterly
4. Update based on web.dev guidance

---

**Tech Stack:**
- Hugo (Static Site Generator)
- Tailwind CSS v4.0.0 + @tailwindcss/typography
- Theme: balevikit-tailwindcss-hugo-theme

**Last Updated:** 2026-02-18  
**Applied to:** layouts/featured/single.html  
**Based on:** Tailwind v4 best practices, Hugo performance guides, UX research 2026
