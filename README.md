# Hivemind Robotics — FTC Team 23892 Website

A responsive static website for FTC Team 23892 Hivemind, based in the Charlotte, North Carolina area and part of QCRA.

## Files

- `index.html` — site content and page structure
- `styles.css` — responsive styling and visual theme
- `script.js` — mobile navigation and email-draft contact form
- `assets/hivemind.jpg` — the supplied team logo

## Before publishing

1. Open `script.js`.
2. Replace `REPLACE_WITH_TEAM_EMAIL@example.com` with an email address the team monitors.
3. Review all facts and the reported outreach metrics. The site describes 60,000+ people reached in the past two months and international outreach/mentorship involving Portugal, Belgium, the Netherlands, Luxembourg, and Germany, based on the information supplied by the team.
4. Optionally add team/robot photos, social links, sponsor logos, and specific sponsorship levels after confirming what the team can offer.

The contact form intentionally uses `mailto:`. It opens the visitor's email application and does not store or transmit form data through a server. If you want submissions collected directly on the website, connect a form service or build a backend before publishing.

## Preview locally

Double-click `index.html` to open it in a browser. For a local server, run this command from the project directory:

```bash
python -m http.server 8000
```

Then visit `http://localhost:8000`.

## Publish free with GitHub Pages

1. Create a GitHub repository, for example `hivemind-robotics-site`.
2. Upload the contents of this folder (keep `assets/` and its logo file in place).
3. In the repository, open **Settings → Pages**.
4. Choose **Deploy from a branch**, select `main` and `/ (root)`, and save.
5. Once GitHub Pages publishes the site, use the provided URL. A custom domain can be connected later.

Netlify and Cloudflare Pages can also host this static site.

## Design notes

The design uses the supplied yellow-and-black bee logo, responsive navigation, impact highlights, sponsor benefits, and a contact section. Google Fonts are loaded from Google Fonts; if offline, the site falls back to system sans-serif fonts.
