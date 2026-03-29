# Italy by Amy — Landing Page

Private day trips, luxury transfers and personalised experiences around Lake Como, Italy.

## Tech stack
- Pure HTML5 / CSS3 / Vanilla JavaScript (no build step required)
- Google Analytics 4 (replace `G-XXXXXXXXXX` in `index.html` with your real Measurement ID)
- Deployed via GitHub Pages

## How to update contact links
Open `index.html` and replace:
- WhatsApp: `https://wa.me/39XXXXXXXXXX` → your Italian WhatsApp number in international format (e.g. `https://wa.me/393351234567`)
- Line: `https://line.me/ti/p/XXXXXXXXXX` → your Line ID link
- Email: `hello@italybyamy.com` → your real email

## How to update Google Analytics
In `index.html` (lines 8–13) replace `G-XXXXXXXXXX` with your GA4 Measurement ID.

## GitHub Pages deployment
1. Push this repo to GitHub (a repo named `italybyamy.com` or similar)
2. Go to **Settings → Pages**
3. Source: **Deploy from a branch** → branch `main`, folder `/ (root)`
4. Your site will be live at `https://YOUR-USERNAME.github.io/italybyamy.com/`

## Customisation checklist
- [ ] Replace `G-XXXXXXXXXX` with real GA4 Measurement ID
- [ ] Replace WhatsApp number
- [ ] Replace Line ID
- [ ] Replace email address
- [ ] Add trip prices when ready (search for "Contact for quote" in `app.js`)
