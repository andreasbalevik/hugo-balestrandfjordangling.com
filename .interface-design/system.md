# Balestrand Fjord Angling — Interface Design System

## Product Identity

**Who:** A traveler — mid-planning, probably on mobile, between ferry timetable tabs. They found Captain Tor through Google or TripAdvisor and need to go from *interested* → *confident* → *booked*.

**Signature:** The feeling of stepping into someone's story, not browsing a catalog. Captain Tor is a 4th-generation local — the interface should feel personal and grounded, not polished and generic.

**Domain vocabulary:** Sognefjord, fjord angling, glacier-fed waterfalls, wooden boat tradition, heritage knowledge, northern light, slow travel, digital detox, authentic storytelling.

---

## Color Palette

| Token | Hex | Role |
|-------|-----|------|
| Fjord deep | `#1d3640` | Dark backgrounds, featured sections, icon tints |
| Nordic amber | `#e09a00` | Primary CTA, decorative accents, active nav, star icons |
| Fjord surface | `#769ba4` | Eyebrow labels, icon containers, accent lines, info box borders |
| Stone | `bg-stone-50` / `#f8f7f4` | Alternating section backgrounds |
| Canvas | `bg-white` | Cards, content sections |
| Text primary | `text-gray-900` | Headings |
| Text body | `text-gray-700` | Body copy |
| Text meta | `text-gray-600` | Supporting metadata |

**Off-brand:** Never use blue (`#1976d2`, `text-blue-700`, etc.). Blue was a theme default — the brand uses amber for interactive elements and fjord surface for informational highlights.

---

## Depth Strategy

**Approach: Subtle shadows on stone-50 backgrounds**

- White cards on `bg-stone-50`: `shadow-lg border border-gray-300 rounded-lg` — card lifts off the surface
- White cards on `bg-white`: avoid — no contrast. Change section bg to `bg-stone-50` instead
- Hover: `hover:shadow-xl` with optional `hover:scale-[1.02]` for interactive cards
- No dramatic shadows. No mixed depth strategies.

---

## Spacing

Base container: `mx-auto py-12 lg:py-16 2xl:py-20 px-4 xl:px-0 max-w-[1280px]`

Content inside cards (when `.container` cannot be used): `px-8 md:px-12 lg:px-16 py-10 md:py-12`

**Rule:** Never nest `.container` inside `.container`. When content lives inside a card/article that is already inside a container, use explicit padding instead.

---

## Typography

- **Eyebrow labels:** `text-sm font-semibold text-[#769ba4] uppercase tracking-widest` + spacing below
- **Section headings:** `text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mt-0`
- **Decorative underline (standard):** `<div class="w-12 h-1 bg-[#e09a00] mx-auto rounded-full"></div>` — single centered line below h2, NOT flanking lines
- **Quote accent:** large `"` at `text-8xl font-serif text-[#e09a00]/15` as absolute background element

---

## Section Header Pattern

```html
<div class="text-center mb-12">
    <p class="text-sm font-semibold text-[#769ba4] uppercase tracking-widest mb-3">[eyebrow]</p>
    <h2 class="mt-0 mb-4 text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900">[title]</h2>
    <div class="w-12 h-1 bg-[#e09a00] mx-auto rounded-full"></div>
</div>
```

---

## Button System

| Variant | Usage | Key classes |
|---------|-------|-------------|
| Primary | Main CTA | `bg-[#e09a00] hover:bg-[#d08900] text-white rounded-xl shadow-lg` |
| Secondary | Ghost CTA | `bg-white border border-gray-300 rounded-xl text-gray-900` |
| Booking | Sticky nav CTA | `bg-gradient-to-br from-[#e09a00] to-[#c58700] rounded-lg` |
| Submit | Form submission | Same gradient as booking, `rounded-xl` |

All buttons include an inline SVG arrow `→` with `group-hover:translate-x-1`.

---

## Navigation

Active link: `text-[#e09a00]`  
Hover: `lg:hover:text-[#e09a00]` with `transition-colors duration-300`  
Header: `bg-white`, `border-b border-gray-200`, fixed at `h-[56px]`

**Note:** Header is overridden in `layouts/partials/layout/header.html` (theme default used `text-blue-700`).

---

## Card Patterns

### Activity card (li.html)
White, `border border-gray-200`, `shadow-lg hover:shadow-xl`, `rounded-lg`. Structure: image → (tags + Private Tour badge floating over image bottom with `bg-gradient-to-t from-black/60`) → quality/Varde row → title → metadata row. Metadata row: amber icons, `border-t border-gray-100`, right-aligned "View →" that goes amber on `group-hover`. No footer strip. Price badge: `bg-[#1d3640]` with `text-[#769ba4]` "From" label.

### Inspiration card (li.html)
Dark overlay on image, text centered over image, `border-white` outline button

### Category tag cards
`relative overflow-hidden`, dynamic `background-color`, `from-white/15` gradient overlay, `hover:scale-[1.02]`

### Featured highlight card (highlight.html)
Two-column, `bg-[#1d3640]` wrapper section, `bg-white` card inside, amber featured badge

---

## Info Box Pattern (for notices/callouts)

```html
<div class="p-6 bg-[#1d3640]/5 border-l-4 border-[#769ba4] rounded-lg">
    <div class="flex gap-3">
        <svg class="h-6 w-6 text-[#769ba4]">...</svg>
        <div>
            <h3 class="text-sm font-semibold text-[#1d3640]">Title</h3>
            <p class="text-sm text-[#1d3640]/80">Content</p>
        </div>
    </div>
</div>
```

---

## Section Background Alternation

Standard rhythm for multi-section pages:
```
bg-white → bg-stone-50 → bg-[#1d3640] (for featured/dark) → bg-white → bg-stone-50 → ...
```

Colored sections (inspirations, tags) use dynamic `background-color` from content params.

---

## Icons

All inline SVGs. No Lucide icon library in production templates — use inline paths for reliability.  
Arrow: `d="M19 12H5m14 0-4 4m4-4-4-4"` stroke-based, `w-5 h-5`.
