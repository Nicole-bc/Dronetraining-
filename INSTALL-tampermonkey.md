# Installing via Tampermonkey / Violentmonkey (recommended)

This is the reliable, persistent, self-updating way to run the mod. It auto-loads on the
Bondage Club URLs in the script header and updates itself when you bump the version.

## 1. Install a userscript manager
- **Tampermonkey** (Chrome, Edge, Firefox, Safari) or **Violentmonkey** (Chrome, Firefox).
- Install it from your browser's extension store and enable it.

## 2. Prepare `dts.user.js`
You already have the mod script (the file you have locally). You only need to add two
header lines so the manager can auto-update it from your repo.

Open the script, find the block at the very top:

```
// ==UserScript==
// @name DroneTrainingSystem English Local
// ...
// @grant none
// @run-at document-end
// ==/UserScript==
```

Add these two lines inside that block (alongside the other `@` lines), using YOUR repo path:

```
// @updateURL   https://raw.githubusercontent.com/<USER>/<REPO>/main/dts.user.js
// @downloadURL https://raw.githubusercontent.com/<USER>/<REPO>/main/dts.user.js
```

Save the file named exactly **`dts.user.js`** (the `.user.js` ending is what triggers
one-click install).

## 3. Put it in your repo
Commit `dts.user.js` to your GitHub repo (branch usually `main`). Its raw URL becomes:

```
https://raw.githubusercontent.com/<USER>/<REPO>/main/dts.user.js
```

(jsDelivr mirror, often faster to update:
`https://cdn.jsdelivr.net/gh/<USER>/<REPO>@main/dts.user.js`)

## 4. Install
Open that raw URL in your browser. Tampermonkey/Violentmonkey detects the `.user.js`
and shows an install page. Click **Install**.

## 5. Use it
- Open Bondage Club on one of the sites in the `@include` lines. The script loads
  automatically — you don't click anything.
- To confirm it's active: the manager's icon shows a number (scripts running on the page),
  and in-game you'll get the "Link to Drone Training System established" panel on entering a room.

## Updating later
1. Edit `dts.user.js` in the repo.
2. Bump the `@version` number (e.g. `1.5.20260614` → `1.5.20260615`).
3. The manager checks `@updateURL` periodically and pulls the new version. You can also
   force it: Tampermonkey dashboard → **Utilities** → **Check for userscript updates**.

> Raw GitHub has a few-minutes cache, so updates aren't instant. That's normal.

## If it doesn't load
- Check the `@include` patterns match the site you actually play on. The defaults cover
  `bondageprojects.elementfx.com`, `bondage-europe.com`, and `bondageprojects.com`. If you
  use a different mirror, add a matching `@include` line for it.
- Make sure the script is toggled **on** in the manager and the manager itself is enabled.
