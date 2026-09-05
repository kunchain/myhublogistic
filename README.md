# Myhublogistic — Landing Page

Premium, conversion-focused landing page for **Myhublogistic**: one intelligent hub for order, purchase, customer, and tracking management.

Single self-contained file. No build step, no dependencies, no backend.

## 🚀 Deploy on GitHub Pages (2 minutes)

1. Create a new repository on GitHub (e.g. `myhublogistic`) — public.
2. Upload `index.html`, `README.md`, and `.nojekyll` to the repo (drag & drop on the "upload files" page, or use git).
3. Go to **Settings → Pages**
   - **Source:** Deploy from a branch
   - **Branch:** `main` · **Folder:** `/ (root)` → **Save**
4. Wait ~1 minute. Your site is live at:

   ```
   https://<your-username>.github.io/myhublogistic/
   ```

## 📦 The Manager app

`app/index.html` is a self-contained client-side app.
- Data is stored in the browser's localStorage (per device/browser) — use **Settings → Export backup** to move data between devices.
- Login-free by design; a hosted multi-user database can be added later without changing the interface.

## ✏️ Update the site later

Replace `index.html` in the repo (web UI or `git push`) — GitHub Pages redeploys automatically, usually within a minute.

## 🌐 Custom domain (optional)

**Settings → Pages → Custom domain** → enter e.g. `myhublogistic.com`, then add the shown `CNAME` record at your DNS provider. Enforce HTTPS once the certificate is issued.

## 📁 What's inside

| File | Purpose |
|---|---|
| `index.html` | The entire landing page — inline CSS, SVG icons, and JS |
| `app/index.html` | **Myhublogistic Manager** — the working app: orders, customers, tracking, purchasing (saves data in the browser, export/import from Settings) |
| `.nojekyll` | Tells GitHub Pages to serve files as-is (skip Jekyll processing) |
| `README.md` | This file |

## 🛠 Local preview

Just double-click `index.html` — it works offline (Google Fonts falls back to system fonts).
