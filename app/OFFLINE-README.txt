MYHUBLOGISTIC MANAGER — OFFLINE SOFTWARE PACKAGE
=================================================

WHAT'S IN THIS FOLDER
  index.html            The complete app (everything in one file)
  sw.js                 Offline cache worker (used when hosted)
  manifest.webmanifest  Install-as-app settings (used when hosted)
  icon-192.png          App icon
  icon-512.png          App icon (large)

HOW TO USE — 3 OPTIONS

OPTION A · EASIEST (no download, recommended)
  Open https://kunchain.github.io/myhublogistic/app/ once while online,
  then use your browser menu:
    Android Chrome : ⋮  -> "Install app"
    iPhone Safari  : Share -> "Add to Home Screen"
    Windows/Mac    : Chrome/Edge address-bar install icon
  It then works with NO internet. Data stays on the device as "myhub".

OPTION B · RUN THIS DOWNLOAD ON YOUR COMPUTER (no internet ever needed)
  1. Unzip this folder anywhere (e.g. Desktop)
  2. Double-click index.html — the app opens in your browser
  3. Enter data normally; it saves on that computer as "myhub"
  (Install-as-app features need Option A or C, but data entry + saving
   work perfectly from the double-clicked file.)

OPTION C · HOST IT YOURSELF (full offline + installable on your network)
  Copy this folder to any web server (GitHub Pages, Netlify, XAMPP, NAS).
  Everyone who opens it can install it as an app (Option A steps).

YOUR DATA
  - Stored in the browser's local storage on THIS device, name: "myhub"
  - Never sent to any server
  - Backup: Settings -> "Export backup (JSON)"  (myhub-backup-DATE.json)
  - Restore: Settings -> "Import backup (JSON)"
  - Each device/browser has its own separate data.
