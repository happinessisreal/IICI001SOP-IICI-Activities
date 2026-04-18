/**
 * IICI Activities — Slide Index
 * Assembles individual slide files into the MODULE_SLIDES array.
 * Load order: each slide file (01–10) must be loaded BEFORE this file.
 *
 * To add a new slide:
 *   1. Create data/slides/11-your-slide-name.js  →  window._SLIDE_11 = { ... }
 *   2. Add a <script> tag for it in index.html BEFORE this index file
 *   3. Add window._SLIDE_11 to the array below
 */
window.MODULE_SLIDES = [
  window._SLIDE_01,
  window._SLIDE_02,
  window._SLIDE_03,
  window._SLIDE_04,
  window._SLIDE_05,
  window._SLIDE_06,
  window._SLIDE_07,
  window._SLIDE_08,
  window._SLIDE_09,
  window._SLIDE_10,
];
