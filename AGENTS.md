# Repository Guidelines

## Project Structure & Module Organization

This repository is a static website built only with HTML, CSS, and JavaScript. Keep all implementation files in the project root:

- `index.html` contains the page structure and accessible content.
- `style.css` contains all visual styling and responsive layout rules.
- `script.js` contains browser behavior and interactions.

Do not introduce frameworks, package managers, build tools, or external libraries. Reference local assets with relative paths. If images or fonts are later required, confirm their placement before adding new directories.

## Development and Verification

There is no build step. Open `index.html` directly in a browser for a quick check, or run a simple local server when browser security rules require one:

- `python3 -m http.server 8000` — serve the repository at `http://localhost:8000`.

After every change, verify that `index.html` loads `style.css` and `script.js` using valid relative paths. Check the browser console for JavaScript and resource-loading errors. Validate HTML, CSS, and JavaScript syntax, and manually test the page at both narrow mobile and wide desktop viewport sizes.

## Coding Style & Naming Conventions

Use two-space indentation in HTML, CSS, and JavaScript. Prefer semantic HTML elements, meaningful heading order, explicit form labels, and useful alternative text. Name CSS classes in lowercase kebab-case, such as `.feature-card`; use camelCase for JavaScript variables and functions. Use `const` by default and `let` only for reassigned values. Avoid inline styles and inline event handlers so structure, presentation, and behavior remain separated.

## Responsive Design

Use a mobile-first approach. Start with styles for small screens, then add media queries for wider layouts. Prefer flexible sizing, CSS Grid or Flexbox, and relative units over fixed widths. Ensure text remains readable, controls remain touch-friendly, and layouts do not cause horizontal scrolling.

## Testing Guidelines

No automated test framework is configured. Test all interactions manually, including keyboard use and common failure states. Confirm the page in at least one Chromium-based browser and, when available, another browser engine. Recheck navigation, focus states, responsive breakpoints, and console output after edits.

## Commit & Pull Request Guidelines

The repository has no established commit history. Use concise, imperative subjects such as `feat: add responsive navigation` or `fix: prevent form reload`. Pull requests should summarize the change, list manual verification performed, and include before-and-after screenshots for visible updates. Keep each change narrowly scoped and avoid unrelated formatting edits.
