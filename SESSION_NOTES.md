# True Sun Website - Session Notes

## Project Overview
- **Repo:** https://github.com/brettlake/True-Sun-Website_v1
- **Live Site:** https://truesunfilm1.netlify.app
- **Stack:** React 19 + Vite 7 + Tailwind CSS 3 + Netlify
- **Purpose:** Promotional site for "True Sun" documentary (redemption & mentorship in Washington, DC)
- **Premiere Date:** March 1, 2026

## What Was Done This Session

### Bug Fixes
- Fixed missing `animate-fade-in-up` CSS keyframe (modal animation was broken)
- Fixed Privacy Policy footer link (was dead `#`, now opens a real modal)
- Fixed countdown timer (used `setInterval` instead of recursive `setTimeout`)

### Refactored to Components
Broke monolithic `App.jsx` (350 lines) into 8 components:
- `src/components/Button.jsx`
- `src/components/Navbar.jsx`
- `src/components/Countdown.jsx` - shows "Now Available" after premiere date
- `src/components/EmailForm.jsx`
- `src/components/TrailerPreview.jsx`
- `src/components/EmailPopup.jsx` - 10s delay, localStorage dismiss, Escape key
- `src/components/PrivacyPolicy.jsx` - full privacy policy modal
- `src/components/Footer.jsx`

### UX Improvements
- Popup delay increased from 2s to 10s
- Popup remembers dismissal via localStorage (won't reappear)
- Popup closes on Escape key and auto-dismisses on email signup
- Focus management on modals

### Accessibility
- ARIA labels, roles, keyboard navigation
- Screen reader support (`sr-only` class, `role="dialog"`, `aria-modal`)
- Focus trapping on modals

### SEO / Meta
- Proper `<title>`: "True Sun | A Documentary Film"
- Meta description, Open Graph tags, Twitter Card tags
- Custom sun-themed SVG favicon
- `theme-color` meta tag for mobile browsers
- Smooth scroll behavior

### Cleanup
- Removed unused files: `vite.svg`, `react.svg`, `App.css`
- Removed dead Netlify Function (`netlify/functions/subscribe.js`)

### Commit
- **Commit:** `d0c8d06` pushed to `main`, deployed to Netlify successfully

---

## Open Items / Next Steps

### Email Capture Service
Currently using **Netlify Forms** (just stores submissions, can't send emails).
Options discussed:
- **Kit (ConvertKit)** - Recommended. Free up to 10k subs, creator-focused, email sequences
- **Mailchimp** - Free up to 500 contacts
- **Substack** - May already have account (`truesun.substack.com` was in old code)
- Decision: **TBD**

### Video Gating (Email-to-Watch)
Want to put the documentary on the site, gated behind email capture.
Two approaches discussed:
- **Simple client-side gate** - Enter email, video unlocks. Low friction, easy to build
- **Magic link (secure)** - Enter email, get link via email. Confirms real addresses, more friction
- Decision: **TBD**

### Other Items Not Yet Addressed
- Social media links still point to `#` (need real YouTube/Instagram URLs)
- Trailer preview is still a static placeholder (need video URL to embed)
- May want to collect name in addition to email (TBD)
- No analytics set up yet
