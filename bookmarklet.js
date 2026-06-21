/*
 * DTS bookmarklet loader (readable source)
 * -----------------------------------------
 * Fetches the hosted script and injects it into the page once, for the current session.
 *
 * EDIT THIS: set SCRIPT_URL to your raw GitHub or jsDelivr URL.
 *   raw:      https://raw.githubusercontent.com/<USER>/<REPO>/<BRANCH>/dts.user.js
 *   jsDelivr: https://cdn.jsdelivr.net/gh/<USER>/<REPO>@<BRANCH>/dts.user.js
 *
 * Notes / limitations:
 *  - Run this AFTER the Bondage Club page has fully loaded (be in the game, ideally in a room).
 *  - This re-introduces remote loading, which the original "local pinned" build deliberately
 *    avoids. Use only with your own hosted copy.
 *  - If the page's CSP blocks the injected script, nothing will happen — use the userscript
 *    install instead (that path is not subject to this).
 *  - It guards against double-injection within a session.
 */
(function () {
    var SCRIPT_URL = "https://raw.githubusercontent.com/<USER>/<REPO>/<BRANCH>/dts.user.js";

    if (window.__DTS_BOOKMARKLET_LOADED__) {
        alert("DTS already loaded this session.");
        return;
    }
    if (!window.Player) {
        alert("Bondage Club not detected yet — open the game first, then click again.");
        return;
    }

    fetch(SCRIPT_URL, { cache: "no-store" })
        .then(function (r) {
            if (!r.ok) throw new Error("HTTP " + r.status);
            return r.text();
        })
        .then(function (code) {
            var s = document.createElement("script");
            s.textContent = code;
            document.documentElement.appendChild(s);
            s.remove();
            window.__DTS_BOOKMARKLET_LOADED__ = true;
            alert("DTS injected.");
        })
        .catch(function (e) {
            alert("DTS load failed: " + e.message +
                  "\nIf this keeps failing, install as a userscript instead.");
        });
})();
