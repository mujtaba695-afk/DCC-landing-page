# Copilot Instructions - C&W Core Landing Page Template

## Architecture Overview

This is a **templated marketing landing page system** for commercial real estate properties. Key design principle: **maximize content customization with minimal code changes**.

### Component Structure
- **index.html**: Template with `{{PLACEHOLDER}}` markers (not dynamic—all placeholders replaced via Find & Replace)
- **style.css**: Premium glassmorphism + responsive design (1430 lines—avoid edits unless refactoring)
- **script.js**: Client-side animations, form handling, analytics, mobile menu (323 lines)
- **images/**: Hero (1920×1080px), offering cards (800×600px), amenities (800×800px)

### Data Flow
Users fill placeholders → Find & Replace in HTML → Images loaded from `images/` folder → CSS applies styling → JS adds interactions.

---

## Critical Developer Workflows

### Content Customization (Primary Use Case)
1. **Find & Replace workflow**: All content changes via Ctrl+H in index.html
2. **Placeholder groups** (from CUSTOMIZATION_GUIDE.md):
   - Meta/SEO: `{{PROPERTY_NAME}}`, `{{LOCATION}}`
   - Hero section: `{{HERO_IMAGE_PATH}}`, `{{HERO_HEADLINE_LINE1/2}}`, badge, trust indicators
   - Offerings: `{{OFFERING_1/2_*}}` (image, title, features)
   - Specs/Badges: `{{SPEC_*}}`, `{{BADGE_*}}`
   - Floor stats: `{{STAT_*_*}}`

3. **Image paths** must match folder structure: `images/hero.jpg`, `images/office.jpg`, etc.
4. **Font Awesome icons** for specs: use icon names only (e.g., `wind`, not `fa-wind`)

### Code-Level Changes (Rare)
- **CSS modifications**: Only for responsive breakpoints or new sections. Search for media queries at bottom of style.css
- **JS form handling**: Modify `.open-calc-form` button listeners if changing form behavior
- **Mobile menu**: Toggle logic in `.mobile-toggle` event listener (~70 lines)

### Testing & Deployment
- **Local testing**: Open index.html directly in browser; no build process needed
- **Mobile preview**: DevTools device toolbar (JS handles viewport scaling)
- **Form validation**: Triggered on button click; prevents duplicate submissions via localStorage

---

## Form Handling & Lead Capture

### Form Architecture
The template uses a **slide-over form modal** triggered by `.open-calc-form` buttons throughout the page. The form lifecycle:

1. **User clicks any CTA button** (class `.open-calc-form`)
2. **Form slide-over opens** (`#calc-slide-over` element) with overlay fade
3. **CTA source auto-populated** (e.g., "Hero Primary", "Brochure Download") via `data-cta` attribute
4. **User submits form** → Data captured in `dccSubmission` localStorage key
5. **Duplicate prevention**: Button updates to "Already Submitted" (grayed out, disabled)

### Placeholder Integration Points
The form connects to contact placeholders:
- `{{CONTACT_EMAIL}}` - Displayed on form, used for mailto link
- `{{CONTACT_PHONE}}` - Click-to-call button format: `tel:{{PHONE_NUMBER}}`
- `{{WHATSAPP_NUMBER}}` - Numbers-only format (no +971), used for WhatsApp link

### Form Submission Handling
**Current behavior (vanilla)**: Form captures CTA source but does NOT auto-submit to backend. Expected workflow:
1. **Backend integration required**: Wire form submission to your CRM/email service
2. **For Email**: Post form data to server-side email handler or use Formspree/Basin
3. **For WhatsApp**: `https://wa.me/{{WHATSAPP_NUMBER}}?text=` (mobile users)
4. **For Direct Call**: Phone buttons use `tel:` protocol (opens phone app)

### Brochure Download Feature
When user clicks "Download Brochure" button:
- `data-download="true"` flag is set on button
- Form opens with context "Brochure Download"
- After form submission, server should:
  1. Log lead capture with CTA source
  2. Trigger PDF download for `property-brochure.pdf` in root folder
  3. Prevent duplicate submissions within 24 hours

**Testing**: Check localStorage after form submission—key `dccSubmission` should contain submitted data as JSON.

---

## Deployment Specifics

### Static Hosting (Recommended)
This template requires **only static file hosting**. No server-side code needed unless using backend form processing.

**Recommended platforms**:
- **Netlify**: Drag-drop folder, auto-deploy from Git, built-in form handler (Forms API)
- **Vercel**: Zero-config deployment, excellent for Next.js if future enhancement needed
- **GitHub Pages**: Free, works with custom domain, no form processing
- **Traditional hosting**: FTP upload to C&W Core servers (IIS/Apache)

**Steps for Netlify/Vercel**:
1. Commit folder to Git repository
2. Connect repo to Netlify/Vercel dashboard
3. Build command: `(leave empty)`
4. Publish directory: `./` (root)
5. Deploy → Site URL generated automatically

### File Structure for Deployment
```
dcc-landing/
├── index.html              (serves at /index.html or / by default)
├── style.css               (must be in same folder)
├── script.js               (must be in same folder)
├── logo-core.jpg           (must be in same folder)
├── images/
│   ├── dcc-hero-main.jpg
│   ├── office-modern.jpg
│   ├── warehouse-facility.jpg
│   └── amenity-*.jpg
├── property-brochure.pdf   (optional, for brochure download)
└── .github/
    └── copilot-instructions.md
```

**Critical**: All relative paths in index.html assume flat structure. If deploying to subdirectory (`/properties/dcc/`), update paths:
```html
<!-- BAD: won't find files in subdirectory -->
<link rel="stylesheet" href="style.css">

<!-- GOOD: if deployed to /properties/dcc/ -->
<link rel="stylesheet" href="/properties/dcc/style.css">
```

### Custom Domain & SSL
- Set custom domain in hosting provider dashboard
- SSL certificate auto-provisioned by Netlify/Vercel (Let's Encrypt free)
- DNS CNAME record points to hosting provider
- Redirect www to non-www (or vice versa) in hosting settings

### Performance Checklist Pre-Launch
- **Image optimization**: All images <500KB (hero) / <300KB (cards). Use [TinyPNG](https://tinypng.com/) if needed
- **Browser caching**: Enable on hosting platform (static assets cached 30+ days)
- **Lazy loading**: All images use `loading="lazy"` except logo (already set)
- **CDN**: Font Awesome and Google Fonts served via CDN (no action needed)
- **Page speed**: Target <3 second load time. Test at [PageSpeed Insights](https://pagespeed.web.dev/)

---

## Animation Performance & Customization

### Reveal Animations (Intersection Observer)
Animations trigger when elements enter viewport using `IntersectionObserver`:

```javascript
// Trigger threshold: 5% of element visible
// Loads 100px before viewport (rootMargin)
const revealOptions = {
    threshold: 0.05,
    rootMargin: '0px 0px 100px 0px'
};
```

**Animation classes**:
- `.reveal-fade` - Fade-in effect with slight up movement
- `.reveal-text` - Text slides up line-by-line (used for h1)
- `.reveal-card` - Card scales in with fade

**Stagger timing**: `delay-1`, `delay-2`, `delay-3` classes in CSS cascade animation start times by ~200ms each.

**Customizing animation speed**: Edit `--transition-smooth` in `:root`:
```css
/* Current: 500ms cubic-bezier curve */
--transition-smooth: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);

/* Faster (250ms): */
--transition-smooth: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);

/* Slower (800ms): */
--transition-smooth: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);
```

### Parallax Scroll Performance
Hero background + property images use GPU-accelerated transforms:

```javascript
// Hero parallax: 40% of scroll distance
heroBg.style.transform = `translate3d(0, ${scrolled * 0.4}px, 0)`;

// Image parallax: 5% of scroll distance (subtle)
img.style.transform = `translate3d(0, ${distance * 0.05}px, 0)`;
```

**Performance notes**:
- `translate3d()` uses GPU acceleration (better than `transform: translateY()`)
- Parallax disabled on mobile (CSS rule: `@media (max-width: 768px)` removes parallax)
- Scroll listener throttled with low threshold (only recalculates on large scroll)

**Mobile considerations**: On devices <768px, parallax is deactivated by CSS. Parallax at 0.4x scale can cause jank on older mobile devices—test on budget Android if targeting that audience.

**Disabling parallax**: Remove `.parallax-img` class from image elements or comment out parallax code in script.js (lines 28-42).

### Sticky Header Performance
Header slides up/down based on scroll direction:

```javascript
// Hide after 500px scroll down
// Show on any upward scroll
if (currentScroll > 500 && currentScroll > lastScroll) {
    header.style.transform = 'translateY(-100%)'; // Hide
} else {
    header.style.transform = 'translateY(0)'; // Show
}
```

**Performance**: Uses `transform` (GPU), not `top`/`position` changes (CPU-heavy).

---

## Accessibility Best Practices

### Semantic HTML Requirements
Ensure these semantic elements are **never replaced with div**:
- `<header>` - Navigation wrapper (keyboard focus management)
- `<main>` - Content container (landmark for screen readers)
- `<button>` - All CTAs (NOT `<div class="btn">`)
- `<section>` - Content areas with IDs (#offerings, #amenities)
- `<nav>` - Navigation menu

**Why it matters**: Screen readers announce semantic role changes (e.g., "navigation" when entering `<nav>`). `<div>` elements are ignored.

### Color Contrast & Brand Colors
All existing colors pass WCAG AA (4.5:1 contrast):
- **C&W Red (#E30613) on white**: 5.8:1 ✓ Pass
- **White on red background**: 5.8:1 ✓ Pass
- **Gray text (#666666) on white**: 7.4:1 ✓ Pass

**If adding custom colors**: Use [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/) to verify 4.5:1 minimum (AA standard).

### Keyboard Navigation
Users must navigate page using Tab/Enter/Arrow keys:
- **Tab**: Cycles through links and buttons (order set by HTML source order)
- **Enter**: Activates focused button or link
- **Escape**: Closes slide-over form modal
- **Arrow keys**: Scroll on mobile menu (if implemented)

**Testing**: Open DevTools → Type Tab repeatedly → Verify focus outline visible on all buttons/links.

### Mobile Accessibility
- **Touch targets**: All buttons/links must be ≥48×48px (CSS: `min-height: 48px` on buttons)
- **Font size**: Minimum 16px on inputs (prevents auto-zoom on iOS)
- **Mobile menu**: Must support keyboard navigation when open

**Current template compliance**: All `.btn` elements already have `height: 48px` or padding equivalent.

### Alt Text for Images
All `<img>` tags require meaningful alt text:
```html
<!-- Good: descriptive alt text -->
<img src="images/office-modern.jpg" alt="Modern DCC Fitted Office Interior" loading="lazy">

<!-- Bad: generic or missing -->
<img src="images/office-modern.jpg" alt="image">
```

**Alt text guidelines**:
- Describe what the image shows (for decorative images, use `alt=""`)
- Include property features (e.g., "Glass facades, natural lighting, open floor plan")
- Keep under 125 characters

### Screen Reader Testing
Test with free screen reader:
- **Windows**: NVDA (free, open-source)
- **Mac**: VoiceOver (built-in: Cmd+F5)
- **iOS**: VoiceOver (Settings → Accessibility)

**Things to test**:
1. Page title announced (from `<title>` tag)
2. Navigation menu readable and traversable
3. Form fields labeled (use `<label>` tag or aria-label)
4. Decorative images skipped (empty `alt=""`)
5. Buttons announced with action (e.g., "Enquire Now, button")

### ARIA Attributes (Advanced)
Only add ARIA if semantic HTML isn't sufficient:
```html
<!-- Slide-over modal should have aria-hidden when closed -->
<div id="calc-slide-over" aria-hidden="true">...</div>

<!-- On open, toggle: -->
<div id="calc-slide-over" aria-hidden="false" role="dialog">...</div>

<!-- Form labels -->
<label for="email-input">Email Address</label>
<input id="email-input" type="email" required>
```

Currently template uses minimal ARIA—add only if extending functionality.

---

## Project-Specific Patterns & Conventions

### Placeholder System (Critical)
- Format: `{{UPPERCASE_WITH_UNDERSCORES}}`
- Always replace ALL occurrences in a Find & Replace pass
- Never hardcode values—use placeholders even for template customization
- Image placeholders require full paths: `images/property-name.jpg`

### CSS Architecture
- **Design tokens in `:root`**: Colors (CW red #E30613), spacing (--section-padding), transitions (--transition-smooth)
- **Glass morphism baseline**: `--glass-bg: rgba(255,255,255,0.9)` + `backdrop-filter: blur(10px)` applied to header
- **Reveal animations**: All `.reveal-*` classes use Intersection Observer; elements added via class `reveal-fade`, `reveal-text`, `reveal-card`
- **Responsive breakpoints**: 1300px max-width container; mobile-first approach with media queries from 768px down

### JavaScript Patterns
1. **Reveal Observer**: Triggers animations when elements enter viewport; unobserves after reveal (performance optimization)
2. **Parallax effect**: Hero background + property images scale by `0.4x` and `0.05x` on scroll
3. **Sticky header**: Transforms -100% (hides) on scroll down after 500px; shows on scroll up
4. **Form tracking**: `localStorage['dccSubmission']` prevents duplicate submissions; button UI updates to "Already Submitted"
5. **Mobile menu**: Body `overflow: hidden` when menu open to prevent background scrolling

### Naming Conventions
- CSS classes: kebab-case (`.hero-premium`, `.offering-card`)
- JS functions: camelCase (toggleForm, checkPreviousSubmission)
- Data attributes: `data-cta`, `data-download` for button tracking
- IDs: Only for major elements (#offerings, #amenities, #contact)

---

## Integration Points & Dependencies

### External Resources
- **Font Awesome 6.4.0 CDN**: Icons loaded from `cdnjs.cloudflare.com`
- **Google Fonts**: Montserrat weights 300–900 preloaded
- **No framework dependencies**: Pure vanilla HTML/CSS/JS (no jQuery, React, etc.)
- **localStorage API**: Browser storage for duplicate submission prevention (no backend required)

### SEO & Meta Tags
- Title, description, keywords in `<head>` for DCC specifically
- Semantic HTML5: `<header>`, `<main>`, `<section>`, `<footer>` (critical for accessibility)
- Alt text on all images (required for lazy loading + screen readers)
- Structured data ready: Can add JSON-LD schema for properties if needed

---

## Common Customization Patterns

### Adding a New Section
1. Copy an existing section block (e.g., spec-item)
2. Add placeholder names following the pattern: `{{SECTION_NAME_PROPERTY}}`
3. Add reveal class: `reveal-fade delay-{n}` for staggered animation
4. Update CUSTOMIZATION_GUIDE.md with new placeholder table

### Changing Colors
- Update `:root` CSS variables (--cw-red, --cw-black, etc.)
- All components reference variables—single update propagates globally
- Gold accents use `--gold-gradient` for text fill effect

### Mobile Menu Issues
- Check media query at `@media (max-width: 768px)` in style.css
- Mobile-specific nav styling includes `.mobile-active` class toggle
- Body overflow management prevents unwanted scroll behavior

---

## Document References
- [README.md](../README.md): 30-minute setup guide + placeholder checklist
- [CUSTOMIZATION_GUIDE.md](../CUSTOMIZATION_GUIDE.md): Complete placeholder reference table
- [ASSET_GUIDELINES.md](../ASSET_GUIDELINES.md): Image specs (hero 1920×1080, cards 800×600, amenities 800×800)
- [TEMPLATE_OVERVIEW.md](../TEMPLATE_OVERVIEW.md): Feature overview + performance specs
