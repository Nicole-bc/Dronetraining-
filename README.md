# DTS Local (English) — personal host

A personal hosted copy of the **DroneTrainingSystem** local English build for Bondage Club,
set up for one-click install and auto-update via a userscript manager, plus an optional
bookmarklet loader.

> Original mod by **zajucd** — MIT licensed. The author credit and license are preserved
> (see `LICENSE` and the header of the script). This repo is a personal copy for convenient
> install/update only.

## Repo layout

```
dts-repo/
├─ README.md                     ← this file
├─ LICENSE                       ← MIT (keep zajucd's copyright line)
├─ dts.user.js                   ← the mod (userscript). MUST end in .user.js
└─ loaders/
   ├─ bookmarklet.js             ← human-readable source of the bookmarklet
   └─ bookmarklet.url.txt        ← the one-line javascript: URL to paste into a bookmark
```

## Setup

1. Create a GitHub repo (public is simplest for raw URLs).
2. Upload these files, keeping `dts.user.js` named exactly that.
3. Edit the two `@updateURL` / `@downloadURL` lines near the top of `dts.user.js`
   to point at YOUR repo (replace `<USER>` / `<REPO>` / `<BRANCH>`).

### Option A — Userscript (recommended, persistent + auto-updating)

- Install Tampermonkey or Violentmonkey.
- Open the raw URL of `dts.user.js`, e.g.
  `https://raw.githubusercontent.com/<USER>/<REPO>/main/dts.user.js`
  (or the jsDelivr equivalent below). The manager offers a one-click install.
- It will auto-load on the BC URLs in the `@include` lines and self-update when you
  bump `@version` in the repo.

jsDelivr (often updates faster than raw GitHub):
`https://cdn.jsdelivr.net/gh/<USER>/<REPO>@<BRANCH>/dts.user.js`

### Option B — Bookmarklet (one-click manual load per session)

See `loaders/bookmarklet.url.txt`. Create a bookmark, paste that one line as the URL,
edit the `SCRIPT_URL` inside it to your raw/jsDelivr URL. Click it after the BC page has
loaded to inject the mod for that session.

**Caveats for the bookmarklet route** (read these — the userscript route avoids all of them):
- The original is a *local pinned, no-remote-loader* build. The bookmarklet re-introduces
  remote loading (it fetches the script and runs it), which is the opposite of that design
  choice. Use it only on your own copy.
- BC's page may block injected remote script depending on browser/CSP. If it silently does
  nothing, the userscript route is the reliable one.
- It does not persist — you re-click each session, and it can't reproduce the manager's
  `@run-at document-end` timing perfectly.
