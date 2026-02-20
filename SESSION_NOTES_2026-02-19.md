# True Sun Website - Session Notes (February 19, 2026)

## What Was Done This Session

### Privacy Policy Update
- Updated "Last updated" date from January 2026 to February 2026
- Changed Data Storage section: replaced Netlify reference with Kit (ConvertKit), added link to kit.com/privacy
- Updated Your Rights section: added mention of unsubscribe link in every email
- Updated Contact section: replaced "contact Lake Media" with link to /contact page

### Bug Fixes
- **Contact form input uppercase** — inputs had `uppercase font-bold tracking-wider` applied, meaning user-typed text rendered in ALL CAPS. Removed `uppercase` from all three inputs (name, email, message textarea). Placeholders remain uppercase as hardcoded strings.
- **Scroll arrow was decorative only** — bouncing arrow at bottom of hero had no click behavior. First implemented as `<a href="#synopsis">` anchor link, but this caused jank due to conflict between browser native hash-scroll and the parallax `useParallax` hook. Fixed by switching to a `<button>` with `scrollIntoView({ behavior: 'smooth' })` and adding `id="synopsis"` to the Synopsis section.

### Performance / Reliability
- Downloaded hero grain texture (`concrete-wall.png`) from external CDN (`transparenttextures.com`) into `public/` and updated the reference to `/concrete-wall.png`. Eliminates external dependency that could cause broken texture if that CDN goes down.

### Typography
- Added **Playfair Display** (Google Fonts) as a third typeface — italic serif for emotional contrast against the condensed sans-serif headings
  - Applied to pull quote text in `HomePage.jsx` (`font-serif italic`)
  - Applied to director's statement blockquote in `FilmmakerPage.jsx`
- Added `font-serif: ['Playfair Display', 'serif']` to `tailwind.config.js`
- Added Playfair Display to Google Fonts import in `index.css`

### Layout / Visual Noise
- Reduced homepage section dividers from 5 to 2
  - **Kept:** divider after hero (before Synopsis), divider after The People (before Pull Quote 2)
  - **Removed:** dividers that boxed in Pull Quote 1 and Pull Quote 2 on both sides
  - Pull quotes now flow freely into adjacent sections

### GitHub SSH Setup
- Generated Ed25519 SSH key pair (`~/.ssh/id_ed25519`)
- Added public key to GitHub account
- Switched remote URL from HTTPS to SSH (`git@github.com:brettlake/True-Sun-Website_v1.git`)
- All future pushes work without password prompts

## Commits
- `8dd20f5` — Fix privacy policy, remove external texture dependency, and improve homepage UX
- `6d189cb` — Improve typography, fix contact form UX, and reduce visual noise

## Style Recommendations Discussed (Not Yet Implemented)

### High Priority
- **Hero background image** — biggest single visual upgrade; the hero is all text + glow. A film still or cinematic DC photo would be transformative
- **Trailer URL** — TrailerPreview is a dead button; needs a YouTube/Vimeo URL
- **Open Graph image** — no social sharing image; blank card on every share (1200×630 title card)
- **Contact form backend** — form shows success but sends nothing; wire to Netlify Forms or Kit

### Typography
- Global `h1-h6` forced uppercase in `index.css` is too aggressive for inner pages; section headings like "Synopsis" and "Director's Bio" don't need to shout
- Heading weights have no variation — almost everything is `font-black` (900); use `font-bold` (700) for secondary headings to create real hierarchy

### Color & Atmosphere
- Neutral/blue-black backgrounds (`#0a0a0a` etc.) feel cold for warm subject matter; shifting to slightly warm blacks (`#0d0a06`, `#100d08`) would make gold pop harder and feel more cinematic
- `vintage-shadow` gold glow is too saturated; `rgba(200, 150, 0, 0.15)` would feel more like candlelight than LED

### Layout
- Inner page headers (About, Filmmaker, Contact) are all identical — same gold label → giant title → gold line treatment on every page
- Hero email form is buried below the trailer on desktop; primary CTA is hidden below the fold
- Mobile nav overlay lacks identity — adding the TrueSun logotype at the top of the overlay would ground it

### Subtitle
- "A Documentary Film — Coming 2026" — with premiere March 1, 2026 this should be updated (deferred per user preference)

## Open Items (Carried Forward)
- Social media links still point to `#` (need real YouTube/Instagram URLs)
- Trailer preview is still a dead placeholder (need video URL)
- Cast names, photos, pull quotes are placeholders (need real content)
- Director bio and photo are placeholders
- Contact form has no backend
- No Open Graph image
- No analytics
- Filmmaker page is 100% placeholder content — publicly accessible
- No custom 404 page
