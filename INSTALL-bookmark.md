# Loading via a Bookmark (bookmarklet)

A one-click way to inject the mod into the current session. Less reliable than the
userscript install — read the caveats at the bottom before relying on it.

## What it does
The bookmarklet fetches your hosted `dts.user.js` and injects it into the Bondage Club
page for the current session. It does **not** persist — you click it each time.

## 1. Host the script
You need `dts.user.js` reachable at a raw URL (see the Tampermonkey guide for assembling
the file and committing it). Your URL will be one of:

```
https://raw.githubusercontent.com/<USER>/<REPO>/main/dts.user.js
https://cdn.jsdelivr.net/gh/<USER>/<REPO>@main/dts.user.js   (often faster)
```

## 2. Set your URL in the loader
Open `loaders/bookmarklet.js` (the readable version) and set:

```js
var SCRIPT_URL = "https://raw.githubusercontent.com/<USER>/<REPO>/main/dts.user.js";
```

The ready-to-paste one-liner lives in `loaders/bookmarklet.url.txt` — edit the same
`<USER>/<REPO>/<BRANCH>` placeholder inside it to your real path before using it.

## 3. Create the bookmark
1. Make any new bookmark (bookmark this page, then edit it — easiest way to get an
   editable bookmark).
2. Set its **name** to something like `Load DTS`.
3. Set its **URL** to the entire line from `bookmarklet.url.txt`
   (it starts with `javascript:`).

> Some browsers strip the `javascript:` prefix when you paste into the URL field as a
> security measure. If that happens, type `javascript:` manually at the front after
> pasting, or save the bookmark first and edit the URL afterward.

## 4. Use it
1. Open Bondage Club and load fully into the game (ideally enter a room).
2. Click the **Load DTS** bookmark.
3. You'll get an alert: "DTS injected." (or an error explaining what went wrong).

The loader guards against:
- double-loading in the same session,
- being clicked before the game is ready (it tells you to open the game first).

## Caveats (why the userscript route is preferred)
- **Re-introduces remote loading.** The original script is a *local pinned, no-remote-loader*
  build by design. The bookmarklet fetches and runs remote code, which is the opposite of
  that choice. Only point it at your own hosted copy.
- **Page CSP may block it.** If clicking does nothing and no alert appears, the page's
  content-security policy is likely blocking the injected script. There is no workaround
  from the bookmarklet side — use the Tampermonkey install instead.
- **No persistence.** You re-click every session, and it can't perfectly reproduce the
  manager's `@run-at document-end` timing.

If you want "set it and forget it," use the Tampermonkey guide. Treat the bookmarklet as
a convenience fallback.
