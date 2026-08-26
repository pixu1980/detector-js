# example-devices - Device gallery

A static page that parses **sample user agents from real devices** (desktop, mobile, tablet,
TV, consoles, webviews and bots) live with `new Detector(ua)` and shows what DetectorJS reports:

- browser + version, engine, OS + version name (macOS Tahoe via the Safari token, …), platform class
- paste any User-Agent and press **Analyze** to test your own
- "copy" button per card

Run from the repo root: open `examples/devices/index.html` in a browser (or via `pnpm serve`,
`http://localhost:<port>/examples/devices/`).

> Hardware (CPU/GPU) is intentionally not simulated: it depends on the runtime environment
> (WebGL / Client Hints) of the browser that runs the page, not on the UA.
