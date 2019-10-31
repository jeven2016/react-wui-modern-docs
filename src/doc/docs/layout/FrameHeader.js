export const FrameHeader = `
<head>
  <meta charset="utf-8">
  <style type="text/css">svg:not(:root).svg-inline--fa {
  overflow: visible;
}

.svg-inline--fa {
  display: inline-block;
  font-size: inherit;
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.225em;
}
.svg-inline--fa.fa-w-1 {
  width: 0.0625em;
}
.svg-inline--fa.fa-w-2 {
  width: 0.125em;
}
.svg-inline--fa.fa-w-3 {
  width: 0.1875em;
}
.svg-inline--fa.fa-w-4 {
  width: 0.25em;
}
.svg-inline--fa.fa-w-5 {
  width: 0.3125em;
}
.svg-inline--fa.fa-w-6 {
  width: 0.375em;
}
.svg-inline--fa.fa-w-7 {
  width: 0.4375em;
}
.svg-inline--fa.fa-w-8 {
  width: 0.5em;
}
.svg-inline--fa.fa-w-9 {
  width: 0.5625em;
}
.svg-inline--fa.fa-w-10 {
  width: 0.625em;
}
.svg-inline--fa.fa-w-11 {
  width: 0.6875em;
}
.svg-inline--fa.fa-w-12 {
  width: 0.75em;
}
.svg-inline--fa.fa-w-13 {
  width: 0.8125em;
}
.svg-inline--fa.fa-w-14 {
  width: 0.875em;
}
.svg-inline--fa.fa-w-15 {
  width: 0.9375em;
}
.svg-inline--fa.fa-w-16 {
  width: 1em;
}
.svg-inline--fa.fa-w-17 {
  width: 1.0625em;
}
.svg-inline--fa.fa-w-18 {
  width: 1.125em;
}
.svg-inline--fa.fa-w-19 {
  width: 1.1875em;
}
.svg-inline--fa.fa-w-20 {
  width: 1.25em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: 0.3em;
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: 0.3em;
  width: auto;
}
.svg-inline--fa.fa-border {
  height: 1.5em;
}
.svg-inline--fa.fa-li {
  width: 2em;
}
.svg-inline--fa.fa-fw {
  width: 1.25em;
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: #ff253a;
  border-radius: 1em;
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
  color: #fff;
  height: 1.5em;
  line-height: 1;
  max-width: 5em;
  min-width: 1.5em;
  overflow: hidden;
  padding: 0.25em;
  right: 0;
  text-overflow: ellipsis;
  top: 0;
  -webkit-transform: scale(0.25);
          transform: scale(0.25);
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: 0;
  right: 0;
  top: auto;
  -webkit-transform: scale(0.25);
          transform: scale(0.25);
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: 0;
  left: 0;
  right: auto;
  top: auto;
  -webkit-transform: scale(0.25);
          transform: scale(0.25);
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  right: 0;
  top: 0;
  -webkit-transform: scale(0.25);
          transform: scale(0.25);
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: 0;
  right: auto;
  top: 0;
  -webkit-transform: scale(0.25);
          transform: scale(0.25);
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-lg {
  font-size: 1.3333333333em;
  line-height: 0.75em;
  vertical-align: -0.0667em;
}

.fa-xs {
  font-size: 0.75em;
}

.fa-sm {
  font-size: 0.875em;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: 2.5em;
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: -2em;
  position: absolute;
  text-align: center;
  width: 2em;
  line-height: inherit;
}

.fa-border {
  border: solid 0.08em #eee;
  border-radius: 0.1em;
  padding: 0.2em 0.25em 0.15em;
}

.fa-pull-left {
  float: left;
}

.fa-pull-right {
  float: right;
}

.fa.fa-pull-left,
.fas.fa-pull-left,
.far.fa-pull-left,
.fal.fa-pull-left,
.fab.fa-pull-left {
  margin-right: 0.3em;
}
.fa.fa-pull-right,
.fas.fa-pull-right,
.far.fa-pull-right,
.fal.fa-pull-right,
.fab.fa-pull-right {
  margin-left: 0.3em;
}

.fa-spin {
  -webkit-animation: fa-spin 2s infinite linear;
          animation: fa-spin 2s infinite linear;
}

.fa-pulse {
  -webkit-animation: fa-spin 1s infinite steps(8);
          animation: fa-spin 1s infinite steps(8);
}

@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}

@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=1)";
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=2)";
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=3)";
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1)";
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)";
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both, .fa-flip-horizontal.fa-flip-vertical {
  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)";
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

:root .fa-rotate-90,
:root .fa-rotate-180,
:root .fa-rotate-270,
:root .fa-flip-horizontal,
:root .fa-flip-vertical,
:root .fa-flip-both {
  -webkit-filter: none;
          filter: none;
}

.fa-stack {
  display: inline-block;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: #fff;
}

.sr-only {
  border: 0;
  clip: rect(0, 0, 0, 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
}

.sr-only-focusable:active, .sr-only-focusable:focus {
  clip: auto;
  height: auto;
  margin: 0;
  overflow: visible;
  position: static;
  width: auto;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: 1;
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: 0.4;
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: 0.4;
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: 1;
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse {
  color: #fff;
}</style><link rel="shortcut icon" href="/favicon.ico">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="msapplication-tap-highlight" content="no">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <meta name="theme-color" content="#000000">
  <!--
    manifest.json provides metadata used when your web app is installed on a
    user's mobile device or desktop. See https://developers.google.com/web/fundamentals/web-app-manifest/
  -->
  <link rel="manifest" href="/manifest.json">
  <!--
    Notice the use of  in the tags above.
    It will be replaced with the URL of the \`public\` folder during the build.
    Only files inside the \`public\` folder can be referenced from the HTML.

    Unlike "/favicon.ico" or "favicon.ico", "/favicon.ico" will
    work correctly both with client-side routing and a non-root public URL.
    Learn how to configure a non-root public URL by running \`npm run build\`.
  -->
  <title>React Wui</title>
<style type="text/css"></style><style type="text/css">@charset "UTF-8";
/*! wui | MIT License | github.com/wheel-ui */
/**
* Generate components
 */
/*! wui | MIT License | github.com/wheel-ui */
/*import global configuration files */
/*Base components*/
/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */
/* Document
   ========================================================================== */
/**
 * 1. Correct the line height in all browsers.
 * 2. Prevent adjustments of font size after orientation changes in iOS.
 */
html {
  line-height: 1.15;
  /* 1 */
  -webkit-text-size-adjust: 100%;
  /* 2 */ }

/* Sections
   ========================================================================== */
/**
 * Remove the margin in all browsers.
 */
body {
  margin: 0; }

/**
 * Render the \`main\` element consistently in IE.
 */
main {
  display: block; }

/**
 * Correct the font size and margin on \`h1\` elements within \`section\` and
 * \`article\` contexts in Chrome, Firefox, and Safari.
 */
h1 {
  font-size: 2em;
  margin: 0.67em 0; }

/* Grouping content
   ========================================================================== */
/**
 * 1. Add the correct box sizing in Firefox.
 * 2. Show the overflow in Edge and IE.
 */
hr {
  box-sizing: content-box;
  /* 1 */
  height: 0;
  /* 1 */
  overflow: visible;
  /* 2 */ }

/**
 * 1. Correct the inheritance and scaling of font size in all browsers.
 * 2. Correct the odd \`em\` font sizing in all browsers.
 */
pre {
  font-family: monospace, monospace;
  /* 1 */
  font-size: 1em;
  /* 2 */ }

/* Text-level semantics
   ========================================================================== */
/**
 * Remove the gray background on active links in IE 10.
 */
a {
  background-color: transparent; }

/**
 * 1. Remove the bottom border in Chrome 57-
 * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.
 */
abbr[title] {
  border-bottom: none;
  /* 1 */
  text-decoration: underline;
  /* 2 */
  -webkit-text-decoration: underline dotted;
          text-decoration: underline dotted;
  /* 2 */ }

/**
 * Add the correct font weight in Chrome, Edge, and Safari.
 */
b,
strong {
  font-weight: bolder; }

/**
 * 1. Correct the inheritance and scaling of font size in all browsers.
 * 2. Correct the odd \`em\` font sizing in all browsers.
 */
code,
kbd,
samp {
  font-family: monospace, monospace;
  /* 1 */
  font-size: 1em;
  /* 2 */ }

/**
 * Add the correct font size in all browsers.
 */
small {
  font-size: 80%; }

/**
 * Prevent \`sub\` and \`sup\` elements from affecting the line height in
 * all browsers.
 */
sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline; }

sub {
  bottom: -0.25em; }

sup {
  top: -0.5em; }

/* Embedded content
   ========================================================================== */
/**
 * Remove the border on images inside links in IE 10.
 */
img {
  border-style: none; }

/* Forms
   ========================================================================== */
/**
 * 1. Change the font styles in all browsers.
 * 2. Remove the margin in Firefox and Safari.
 */
button,
input,
optgroup,
select,
textarea {
  font-family: inherit;
  /* 1 */
  font-size: 100%;
  /* 1 */
  line-height: 1.15;
  /* 1 */
  margin: 0;
  /* 2 */ }

/**
 * Show the overflow in IE.
 * 1. Show the overflow in Edge.
 */
button,
input {
  /* 1 */
  overflow: visible; }

/**
 * Remove the inheritance of text transform in Edge, Firefox, and IE.
 * 1. Remove the inheritance of text transform in Firefox.
 */
button,
select {
  /* 1 */
  text-transform: none; }

/**
 * Correct the inability to style clickable types in iOS and Safari.
 */
button,
[type="button"],
[type="reset"],
[type="submit"] {
  -webkit-appearance: button; }

/**
 * Remove the inner border and padding in Firefox.
 */
button::-moz-focus-inner,
[type="button"]::-moz-focus-inner,
[type="reset"]::-moz-focus-inner,
[type="submit"]::-moz-focus-inner {
  border-style: none;
  padding: 0; }

/**
 * Restore the focus styles unset by the previous rule.
 */
button:-moz-focusring,
[type="button"]:-moz-focusring,
[type="reset"]:-moz-focusring,
[type="submit"]:-moz-focusring {
  outline: 1px dotted ButtonText; }

/**
 * Correct the padding in Firefox.
 */
fieldset {
  padding: 0.35em 0.75em 0.625em; }

/**
 * 1. Correct the text wrapping in Edge and IE.
 * 2. Correct the color inheritance from \`fieldset\` elements in IE.
 * 3. Remove the padding so developers are not caught out when they zero out
 *    \`fieldset\` elements in all browsers.
 */
legend {
  box-sizing: border-box;
  /* 1 */
  color: inherit;
  /* 2 */
  display: table;
  /* 1 */
  max-width: 100%;
  /* 1 */
  padding: 0;
  /* 3 */
  white-space: normal;
  /* 1 */ }

/**
 * Add the correct vertical alignment in Chrome, Firefox, and Opera.
 */
progress {
  vertical-align: baseline; }

/**
 * Remove the default vertical scrollbar in IE 10+.
 */
textarea {
  overflow: auto; }

/**
 * 1. Add the correct box sizing in IE 10.
 * 2. Remove the padding in IE 10.
 */
[type="checkbox"],
[type="radio"] {
  box-sizing: border-box;
  /* 1 */
  padding: 0;
  /* 2 */ }

/**
 * Correct the cursor style of increment and decrement buttons in Chrome.
 */
[type="number"]::-webkit-inner-spin-button,
[type="number"]::-webkit-outer-spin-button {
  height: auto; }

/**
 * 1. Correct the odd appearance in Chrome and Safari.
 * 2. Correct the outline style in Safari.
 */
[type="search"] {
  -webkit-appearance: textfield;
  /* 1 */
  outline-offset: -2px;
  /* 2 */ }

/**
 * Remove the inner padding in Chrome and Safari on macOS.
 */
[type="search"]::-webkit-search-decoration {
  -webkit-appearance: none; }

/**
 * 1. Correct the inability to style clickable types in iOS and Safari.
 * 2. Change font properties to \`inherit\` in Safari.
 */
::-webkit-file-upload-button {
  -webkit-appearance: button;
  /* 1 */
  font: inherit;
  /* 2 */ }

/* Interactive
   ========================================================================== */
/*
 * Add the correct display in Edge, IE 10+, and Firefox.
 */
details {
  display: block; }

/*
 * Add the correct display in all browsers.
 */
summary {
  display: list-item; }

/* Misc
   ========================================================================== */
/**
 * Add the correct display in IE 10+.
 */
template {
  display: none; }

/**
 * Add the correct display in IE 10.
 */
[hidden] {
  display: none; }

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, .blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header,
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0; }

/**
* set the group's border radius property
 */
.base-btn:disabled, .button:disabled, .base-btn.disabled, .disabled.button, .button-group:disabled > .button, .button-group.disabled > .button, .checkbox:disabled, .checkbox.disabled, .radio:disabled, .radio.disabled, .input:disabled, .input.disabled, .icon-input:disabled, .icon-input.disabled, .submenu > .menu-list > .menu-item:disabled, .menu > .menu-list > .menu-item:disabled, .submenu > .menu-list > .menu-item.disabled, .menu > .menu-list > .menu-item.disabled, .submenu .menu-header:disabled, .menu .menu-header:disabled, .submenu .menu-header.disabled, .menu .menu-header.disabled {
  cursor: not-allowed;
  opacity: 0.7; }

.input.large, .button.large, .button-group.large > .button {
  font-size: 1.5rem;
  padding: 0.75rem 1.5rem; }

.input.medium, .button.medium, .button-group.medium > .button {
  font-size: 1rem;
  padding: 0.5rem 1rem; }

.input.small, .button.small, .button-group.small > .button {
  font-size: 0.75rem;
  padding: 0.25rem 0.5rem; }

.dialog > .dialog-container > .content > .header > .title, .dialog > .dialog-container > .content > .header > .icon, .date-time-picker {
  position: relative;
  display: inline-block; }

.mask, .dialog {
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 100;
  overflow: hidden; }

.mask, .dialog {
  -webkit-transition: opacity .3s ease-in-out;
  transition: opacity .3s ease-in-out; }
  .mask.active, .active.dialog {
    visibility: visible;
    opacity: 1; }
  .mask.inactive, .inactive.dialog {
    visibility: hidden;
    opacity: 0; }

.pull-left {
  float: left !important;
  margin-right: auto; }

.pull-right {
  float: right !important;
  margin-left: auto; }

.pull-center {
  margin: auto;
  text-align: center;
  vertical-align: middle; }

.clear-radius {
  border-radius: 0 !important; }

.global-with-border {
  border: 1px solid #ccc; }

.global-with-box {
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.14); }

.with-box {
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.14); }

.clear-fix::after, .dialog > .dialog-container > .content > .header::after {
  content: '';
  display: table;
  clear: both; }

.clear-border {
  border-width: 0 !important; }

.clear-min-width {
  min-width: 0 !important; }

.hide {
  display: none; }

@media (min-width: 576px) {
  .width-sm {
    max-width: 22.5rem; }
  .width-md {
    max-width: 34.375rem; }
  .width-lg {
    max-width: 53.125rem; }
  .width-xl {
    max-width: 68.75rem; } }

.text.bold {
  font-weight: 700; }

.text.align-left {
  text-align: left !important; }

.text.align-center {
  text-align: center !important; }

.text.align-right {
  text-align: right !important; }

.text.comment {
  color: #818a91 !important; }
  .text.comment-hover {
    color: inherit !important; }
    .text.comment-hover:hover, .text.comment-hover:focus {
      color: #818a91 !important; }
    .text.comment-hover.active {
      color: #747d85 !important; }

.text.ok {
  color: #49b847 !important; }
  .text.ok-hover {
    color: inherit !important; }
    .text.ok-hover:hover, .text.ok-hover:focus {
      color: #49b847 !important; }
    .text.ok-hover.active {
      color: #42a640 !important; }

.text.error {
  color: #ff350e !important; }
  .text.error-hover {
    color: inherit !important; }
    .text.error-hover:hover, .text.error-hover:focus {
      color: #ff350e !important; }
    .text.error-hover.active {
      color: #f42700 !important; }

.text.color-primary {
  color: #007aff !important; }
  .text.color-primary-hover {
    color: inherit !important; }
    .text.color-primary-hover:hover, .text.color-primary-hover:focus {
      color: #007aff !important; }
    .text.color-primary-hover.active {
      color: #006ee6 !important; }

.text.color-secondary {
  color: #ccc !important; }
  .text.color-secondary-hover {
    color: inherit !important; }
    .text.color-secondary-hover:hover, .text.color-secondary-hover:focus {
      color: #ccc !important; }
    .text.color-secondary-hover.active {
      color: #bfbfbf !important; }

.text.color-info {
  color: #199cb8 !important; }
  .text.color-info-hover {
    color: inherit !important; }
    .text.color-info-hover:hover, .text.color-info-hover:focus {
      color: #199cb8 !important; }
    .text.color-info-hover.active {
      color: #1689a2 !important; }

.text.color-success {
  color: #49b847 !important; }
  .text.color-success-hover {
    color: inherit !important; }
    .text.color-success-hover:hover, .text.color-success-hover:focus {
      color: #49b847 !important; }
    .text.color-success-hover.active {
      color: #42a640 !important; }

.text.color-warning {
  color: #fbbe11 !important; }
  .text.color-warning-hover {
    color: inherit !important; }
    .text.color-warning-hover:hover, .text.color-warning-hover:focus {
      color: #fbbe11 !important; }
    .text.color-warning-hover.active {
      color: #eeb104 !important; }

.text.color-danger {
  color: #ff350e !important; }
  .text.color-danger-hover {
    color: inherit !important; }
    .text.color-danger-hover:hover, .text.color-danger-hover:focus {
      color: #ff350e !important; }
    .text.color-danger-hover.active {
      color: #f42700 !important; }

.text.color-black {
  color: #000000 !important; }
  .text.color-black-hover {
    color: inherit !important; }
    .text.color-black-hover:hover, .text.color-black-hover:focus {
      color: #000000 !important; }
    .text.color-black-hover.active {
      color: black !important; }

.text.color-blue {
  color: #007aff !important; }
  .text.color-blue-hover {
    color: inherit !important; }
    .text.color-blue-hover:hover, .text.color-blue-hover:focus {
      color: #007aff !important; }
    .text.color-blue-hover.active {
      color: #006ee6 !important; }

.text.color-brown {
  color: #a5742f !important; }
  .text.color-brown-hover {
    color: inherit !important; }
    .text.color-brown-hover:hover, .text.color-brown-hover:focus {
      color: #a5742f !important; }
    .text.color-brown-hover.active {
      color: #916629 !important; }

.text.color-cyan {
  color: #199cb8 !important; }
  .text.color-cyan-hover {
    color: inherit !important; }
    .text.color-cyan-hover:hover, .text.color-cyan-hover:focus {
      color: #199cb8 !important; }
    .text.color-cyan-hover.active {
      color: #1689a2 !important; }

.text.color-dark {
  color: #6c757d !important; }
  .text.color-dark-hover {
    color: inherit !important; }
    .text.color-dark-hover:hover, .text.color-dark-hover:focus {
      color: #6c757d !important; }
    .text.color-dark-hover.active {
      color: #60686f !important; }

.text.color-green {
  color: #49b847 !important; }
  .text.color-green-hover {
    color: inherit !important; }
    .text.color-green-hover:hover, .text.color-green-hover:focus {
      color: #49b847 !important; }
    .text.color-green-hover.active {
      color: #42a640 !important; }

.text.color-gray {
  color: #ccc !important; }
  .text.color-gray-hover {
    color: inherit !important; }
    .text.color-gray-hover:hover, .text.color-gray-hover:focus {
      color: #ccc !important; }
    .text.color-gray-hover.active {
      color: #bfbfbf !important; }

.text.color-gray-darker {
  color: #6c757d !important; }
  .text.color-gray-darker-hover {
    color: inherit !important; }
    .text.color-gray-darker-hover:hover, .text.color-gray-darker-hover:focus {
      color: #6c757d !important; }
    .text.color-gray-darker-hover.active {
      color: #60686f !important; }

.text.color-light {
  color: #f8f9fa !important; }
  .text.color-light-hover {
    color: inherit !important; }
    .text.color-light-hover:hover, .text.color-light-hover:focus {
      color: #f8f9fa !important; }
    .text.color-light-hover.active {
      color: #e9ecef !important; }

.text.color-light-gray {
  color: #f5f5f5 !important; }
  .text.color-light-gray-hover {
    color: inherit !important; }
    .text.color-light-gray-hover:hover, .text.color-light-gray-hover:focus {
      color: #f5f5f5 !important; }
    .text.color-light-gray-hover.active {
      color: #e8e8e8 !important; }

.text.color-orange {
  color: #f2791a !important; }
  .text.color-orange-hover {
    color: inherit !important; }
    .text.color-orange-hover:hover, .text.color-orange-hover:focus {
      color: #f2791a !important; }
    .text.color-orange-hover.active {
      color: #e56c0d !important; }

.text.color-pink {
  color: #e02c92 !important; }
  .text.color-pink-hover {
    color: inherit !important; }
    .text.color-pink-hover:hover, .text.color-pink-hover:focus {
      color: #e02c92 !important; }
    .text.color-pink-hover.active {
      color: #d31f85 !important; }

.text.color-purple {
  color: #9935c8 !important; }
  .text.color-purple-hover {
    color: inherit !important; }
    .text.color-purple-hover:hover, .text.color-purple-hover:focus {
      color: #9935c8 !important; }
    .text.color-purple-hover.active {
      color: #8a30b4 !important; }

.text.color-red {
  color: #ff350e !important; }
  .text.color-red-hover {
    color: inherit !important; }
    .text.color-red-hover:hover, .text.color-red-hover:focus {
      color: #ff350e !important; }
    .text.color-red-hover.active {
      color: #f42700 !important; }

.text.color-yellow {
  color: #fbbe11 !important; }
  .text.color-yellow-hover {
    color: inherit !important; }
    .text.color-yellow-hover:hover, .text.color-yellow-hover:focus {
      color: #fbbe11 !important; }
    .text.color-yellow-hover.active {
      color: #eeb104 !important; }

.text.color-teal {
  color: #0d806d !important; }
  .text.color-teal-hover {
    color: inherit !important; }
    .text.color-teal-hover:hover, .text.color-teal-hover:focus {
      color: #0d806d !important; }
    .text.color-teal-hover.active {
      color: #0b6959 !important; }

.text.color-violet {
  color: #5f33c9 !important; }
  .text.color-violet-hover {
    color: inherit !important; }
    .text.color-violet-hover:hover, .text.color-violet-hover:focus {
      color: #5f33c9 !important; }
    .text.color-violet-hover.active {
      color: #552eb5 !important; }

.text.color-white {
  color: #fff !important; }
  .text.color-white-hover {
    color: inherit !important; }
    .text.color-white-hover:hover, .text.color-white-hover:focus {
      color: #fff !important; }
    .text.color-white-hover.active {
      color: #f2f2f2 !important; }

.bg-comment {
  background-color: #818a91 !important; }

.bg-ok {
  background-color: #49b847 !important; }

.bg-error {
  background-color: #ff350e !important; }

.bg-color-primary {
  background-color: #007aff !important; }

.bg-color-secondary {
  background-color: #ccc !important; }

.bg-color-info {
  background-color: #199cb8 !important; }

.bg-color-success {
  background-color: #49b847 !important; }

.bg-color-warning {
  background-color: #fbbe11 !important; }

.bg-color-danger {
  background-color: #ff350e !important; }

.bg-color-black {
  background-color: #000000 !important; }

.bg-color-blue {
  background-color: #007aff !important; }

.bg-color-brown {
  background-color: #a5742f !important; }

.bg-color-cyan {
  background-color: #199cb8 !important; }

.bg-color-dark {
  background-color: #6c757d !important; }

.bg-color-green {
  background-color: #49b847 !important; }

.bg-color-gray {
  background-color: #ccc !important; }

.bg-color-gray-darker {
  background-color: #6c757d !important; }

.bg-color-light {
  background-color: #f8f9fa !important; }

.bg-color-light-gray {
  background-color: #f5f5f5 !important; }

.bg-color-orange {
  background-color: #f2791a !important; }

.bg-color-pink {
  background-color: #e02c92 !important; }

.bg-color-purple {
  background-color: #9935c8 !important; }

.bg-color-red {
  background-color: #ff350e !important; }

.bg-color-yellow {
  background-color: #fbbe11 !important; }

.bg-color-teal {
  background-color: #0d806d !important; }

.bg-color-violet {
  background-color: #5f33c9 !important; }

.bg-color-white {
  background-color: #fff !important; }

.bg-transparent {
  background: transparent !important; }

html {
  line-height: 1.15;
  font-family: sans-serif;
  -webkit-tap-highlight-color: transparent;
  -webkit-text-size-adjust: 100%; }

body {
  font: 1rem/1.5 -apple-system, BlinkMacSystemFont, 'Segoe UI', "Helvetica Neue", Helvetica, Arial, "PingFang SC", "Hiragino Sans GB", "Heiti SC", "Microsoft YaHei", "WenQuanYi Micro Hei", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  color: #333;
  background-color: #fff;
  text-rendering: optimizeLegibility;
  font-smooth: antialiased;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale; }

*, *::after, *::before {
  box-sizing: border-box; }

a {
  color: inherit;
  text-decoration: none;
  cursor: pointer; }

.svg {
  display: inline-block;
  fill: currentColor;
  width: 1em;
  height: 1em;
  flex-shrink: 0;
  -webkit-user-select: none;
     -moz-user-select: none;
      -ms-user-select: none;
          user-select: none; }

@-webkit-keyframes change-width {
  from {
    width: 0; }
  to {
    width: 100%; } }

@keyframes change-width {
  from {
    width: 0; }
  to {
    width: 100%; } }

@-webkit-keyframes change-width-smoothly {
  0% {
    width: 0;
    left: 100%; }
  20% {
    width: 20%;
    left: 40%; }
  40% {
    width: 40%;
    left: 30%; }
  60% {
    width: 60%;
    left: 20%; }
  80% {
    width: 80%;
    left: 10%; }
  100% {
    width: 100%;
    left: 0; } }

@keyframes change-width-smoothly {
  0% {
    width: 0;
    left: 100%; }
  20% {
    width: 20%;
    left: 40%; }
  40% {
    width: 40%;
    left: 30%; }
  60% {
    width: 60%;
    left: 20%; }
  80% {
    width: 80%;
    left: 10%; }
  100% {
    width: 100%;
    left: 0; } }

@-webkit-keyframes show-menu-list {
  from {
    top: 6rem; }
  to {
    top: 2.625rem; } }

@keyframes show-menu-list {
  from {
    top: 6rem; }
  to {
    top: 2.625rem; } }

@-webkit-keyframes close-menu {
  from {
    max-height: 20rem; }
  to {
    max-height: 0;
    opacity: 0; } }

@keyframes close-menu {
  from {
    max-height: 20rem; }
  to {
    max-height: 0;
    opacity: 0; } }

/*
@keyframes alert-leave {
  from {
    transform: scaleY(1);
    max-height: 200px;
    opacity: 1;
  }
  to {
    max-height: 0;
    opacity: 0;
    transform: scaleY(0);
  }

}*/
@-webkit-keyframes move-stripe {
  to {
    background-position-x: 1rem; } }
@keyframes move-stripe {
  to {
    background-position-x: 1rem; } }

@-webkit-keyframes move-stripe-2 {
  to {
    background-position-x: 100%; } }

@keyframes move-stripe-2 {
  to {
    background-position-x: 100%; } }

.flex-align {
  display: flex;
  align-items: center; }
  .flex-align.left {
    justify-content: flex-start; }
  .flex-align.right {
    justify-content: flex-end; }
  .flex-align.center {
    justify-content: center; }

.base-btn, .button {
  position: relative;
  display: inline-block;
  padding: 0.5rem 1rem;
  cursor: pointer;
  outline: none;
  line-height: 1.5;
  text-align: center;
  text-decoration: none;
  border-radius: 0.25rem;
  overflow: overflow;
  -webkit-tap-highlight-color: transparent;
  -webkit-appearance: none;
  -moz-appearance: none;
       appearance: none;
  -webkit-transition: box-shadow ease 0.2s, border-color ease 0.2s, -webkit-transform ease 0.4s;
  transition: box-shadow ease 0.2s, border-color ease 0.2s, -webkit-transform ease 0.4s;
  transition: box-shadow ease 0.2s, border-color ease 0.2s, transform ease 0.4s;
  transition: box-shadow ease 0.2s, border-color ease 0.2s, transform ease 0.4s, -webkit-transform ease 0.4s; }
  .base-btn.min-width, .min-width.button {
    min-width: 5rem; }
  .base-btn.bold, .bold.button {
    font-weight: bold; }

blockquote, .blockquote {
  display: block;
  border-left: 0.4rem solid #ccc;
  margin: 0 0 0.5rem 0;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem; }
  blockquote.border, .border.blockquote {
    border-top: 1px solid #ccc;
    border-right: 1px solid #ccc;
    border-bottom: 1px solid #ccc; }
  blockquote.with-bg, .with-bg.blockquote {
    background: #f8f5f5; }
  blockquote.primary, .primary.blockquote {
    border-left: 0.4rem solid #007aff; }
    blockquote.primary.border, .primary.border.blockquote {
      border-top: 1px solid #ccc;
      border-right: 1px solid #ccc;
      border-bottom: 1px solid #ccc; }
    blockquote.primary.with-bg, .primary.with-bg.blockquote {
      background: #adcfef; }
  blockquote.secondary, .secondary.blockquote, .blockquote.loader.third, blockquote.loader.third {
    border-top: 0.4rem solid #007aff;
    border-bottom: 0.4rem solid #007aff;
    border-left-width: 0; }
    blockquote.secondary.border, .secondary.border.blockquote, .border.blockquote.loader.third, blockquote.border.loader.third {
      border-left: 1px solid #ccc;
      border-right: 1px solid #ccc; }
    blockquote.secondary.with-bg, .secondary.with-bg.blockquote, .with-bg.blockquote.loader.third, blockquote.with-bg.loader.third {
      background: #adcfef; }

.badge {
  position: relative;
  display: inline-block;
  background: transparent; }
  .badge.tag > .content, .badge.normal > .content, .badge.dot > .content {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    font-weight: 500;
    padding: 0.5rem;
    color: #fff; }
  .badge.tag > .content {
    line-height: 1rem;
    font-size: 0.875rem;
    padding: 0.25em 0.5em;
    border-radius: 4rem; }
  .badge.normal > .content, .badge.dot > .content {
    z-index: 10;
    position: absolute;
    font-size: 0.75rem;
    padding: 0 0.25rem;
    top: 0;
    right: 0;
    color: #fff;
    border-radius: 100%;
    height: 1.25rem;
    min-width: 1.25rem;
    -webkit-transform: scale(1) translate(50%, -50%);
            transform: scale(1) translate(50%, -50%); }
  .badge.dot > .content {
    height: 0.5rem;
    min-width: 0.5rem; }
  .badge.ok > .content {
    background: #49b847; }
  .badge.gray > .content {
    background: #f5f5f5;
    color: #333; }
  .badge.info > .content {
    background: #007aff; }
  .badge.warning > .content {
    background: #fbbe11; }
  .badge.error > .content {
    background: #ff350e; }
  .badge.dark > .content {
    background: #000000; }
  .badge.with-box {
    box-shadow: none; }
    .badge.with-box > .content {
      box-shadow: 0 3px 10px rgba(0, 0, 0, 0.14); }

.checkbox, .radio {
  display: inline-flex;
  position: relative;
  align-items: center;
  vertical-align: middle; }
  .checkbox:not(:last-child), .radio:not(:last-child) {
    margin-right: 0.5rem; }
  .checkbox.checked > .icon, .radio.checked > .icon {
    color: #007aff; }
  .checkbox.unchecked > .icon, .radio.unchecked > .icon {
    color: #ccc; }
  .checkbox > .hidden-input, .radio > .hidden-input {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    cursor: pointer;
    z-index: 1; }
  .checkbox > .icon, .radio > .icon {
    font-size: 1.5rem;
    vertical-align: -0.15rem;
    width: 1em;
    height: 1em;
    position: relative;
    cursor: pointer; }
  .checkbox > .label, .radio > .label {
    font-size: 1em;
    padding: 0 0.25rem; }

h1 {
  font-size: 2em; }

h2 {
  font-size: 1.5em; }

h3 {
  font-size: 1.17em; }

h4 {
  font-size: 1.12em; }

h5 {
  font-size: .83em; }

h6 {
  font-size: .75em; }

h1, h2, h3, h4, h5, h6 {
  font-weight: 400; }

.input:not(:disabled):not(.disabled):focus, .input:not(:disabled):not(.disabled):hover, .input:not(:disabled):not(.disabled):active, .input.active:not(:disabled):not(.disabled), .icon-input:not(:disabled):not(.disabled):focus > .input, .icon-input:not(:disabled):not(.disabled):hover > .input, .icon-input:not(:disabled):not(.disabled):active > .input, .icon-input.active:not(:disabled):not(.disabled) > .input, .select-multiple:not(:disabled):not(.disabled):focus, .select-multiple:not(:disabled):not(.disabled):hover, .select-multiple:not(:disabled):not(.disabled):active, .select-multiple.active:not(:disabled):not(.disabled) {
  border-color: #007aff;
  box-shadow: 0 0 0 0.2rem #cce4ff;
  z-index: 10;
  position: relative; }

.input {
  padding: 0.5rem 1rem;
  border: 1px solid #ccc;
  border-radius: 0.25rem;
  outline: 0;
  height: calc(1.5em + 1rem + 2px);
  line-height: 1.5;
  -webkit-appearance: none;
  -webkit-transition: all 0.2s ease-in-out;
  transition: all 0.2s ease-in-out;
  font-size: 1rem;
  outline: 0;
  /**
  * Simple input
   */ }
  .input::-ms-clear {
    width: 0;
    height: 0; }
  .input.block, .icon-input.block, .icon-input > .input {
    display: flex;
    width: 100%; }
  .input.large {
    height: calc(1.5em + 1.5rem + 2px); }
  .input.medium {
    height: calc(1.5em + 1rem + 2px); }
  .input.small {
    height: calc(1.5em + 0.5rem + 2px); }
  .input::-webkit-input-placeholder, .input::-moz-placeholder, .input:-ms-input-placeholder {
    color: #818a91;
    opacity: 1; }
  .input.simple {
    border-radius: 0;
    border-left: none;
    border-top: none;
    border-right: none;
    -webkit-transition: all 0.2s;
    transition: all 0.2s; }
    .input.simple:active, .input.simple:focus {
      border-bottom-width: 1px;
      box-shadow: 0 1px 0 0 rgba(61, 139, 234, 0.24); }
  .input:not(:disabled):not(.disabled):active {
    -webkit-transform: scale(0.97);
            transform: scale(0.97); }

textarea.input {
  max-width: 100%; }

/**
* Icon input
 */
.icon-input {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: relative; }
  .icon-input.large > .input {
    font-size: 1.5rem;
    padding: 0.75rem 2.5rem 0.75rem 1rem;
    height: calc(1.5em + 1.5rem + 2px); }
  .icon-input.large > .icon {
    font-size: 1.5rem;
    line-height: 1.5rem;
    width: 1.5rem; }
  .icon-input.small > .input {
    font-size: 0.75rem;
    padding: 0.25rem 1.5rem 0.25rem 0.75rem;
    height: calc(1.5em + 0.5rem + 2px); }
  .icon-input.small > .icon {
    font-size: 0.75rem;
    width: 0.75rem;
    right: 0.375rem; }
  .icon-input.left-icon > .input {
    padding-right: 1rem;
    padding-left: 2rem; }
  .icon-input.left-icon > .icon {
    right: 0;
    left: 0.5rem; }
  .icon-input.left-icon.large > .input {
    padding: 0.75rem 1rem 0.75rem 2.5rem; }
  .icon-input.left-icon.small > .input {
    padding: 0.25rem 0.75rem 0.25rem 1.5rem; }
  .icon-input.left-icon.small > .icon {
    left: 0.375rem; }
  .icon-input > .input {
    padding-right: 2rem; }
  .icon-input > .icon {
    position: absolute;
    color: #ccc;
    line-height: 1rem;
    cursor: pointer;
    width: 1rem;
    right: 0.5rem;
    z-index: 10;
    top: 50%;
    -webkit-transform: translateY(-50%);
            transform: translateY(-50%); }
    .icon-input > .icon:hover, .icon-input > .icon:focus {
      color: #007aff; }

.input-ok.input, .input-ok.icon-input > .input {
  border-color: #49b847; }

.input-ok.input:active, .input-ok.input:focus {
  box-shadow: 0 2px 6px 0 rgba(73, 184, 71, 0.24); }

.input-ok.icon-input .icon {
  color: #49b847; }

.input-ok.icon-input > .input:active, .input-ok.icon-input > .input:focus {
  box-shadow: 0 2px 6px 0 rgba(73, 184, 71, 0.24); }
  .input-ok.icon-input > .input:active ~ .icon, .input-ok.icon-input > .input:focus ~ .icon {
    color: #49b847; }

.input-warning.input, .input-warning.icon-input > .input {
  border-color: #fbbe11; }

.input-warning.input:active, .input-warning.input:focus {
  box-shadow: 0 2px 6px 0 rgba(251, 190, 17, 0.24); }

.input-warning.icon-input .icon {
  color: #fbbe11; }

.input-warning.icon-input > .input:active, .input-warning.icon-input > .input:focus {
  box-shadow: 0 2px 6px 0 rgba(251, 190, 17, 0.24); }
  .input-warning.icon-input > .input:active ~ .icon, .input-warning.icon-input > .input:focus ~ .icon {
    color: #fbbe11; }

.input-error.input, .input-error.icon-input > .input {
  border-color: #ff350e; }

.input-error.input:active, .input-error.input:focus {
  box-shadow: 0 2px 6px 0 rgba(255, 53, 14, 0.24); }

.input-error.icon-input .icon {
  color: #ff350e; }

.input-error.icon-input > .input:active, .input-error.icon-input > .input:focus {
  box-shadow: 0 2px 6px 0 rgba(255, 53, 14, 0.24); }
  .input-error.icon-input > .input:active ~ .icon, .input-error.icon-input > .input:focus ~ .icon {
    color: #ff350e; }

.input-group {
  display: inline-flex;
  align-items: stretch;
  justify-content: center; }
  .input-group > .label {
    display: flex;
    align-items: center;
    justify-content: center;
    line-height: 1.5;
    padding: 0.5rem 1rem;
    border: 1px solid #ccc;
    background-color: #eceeef;
    border-radius: 0.25rem; }
  .input-group > *.input, .input-group > *.icon-input {
    flex: 1 1 auto;
    width: 1%; }
  .input-group > *.popup-ctrl {
    display: inline-flex;
    justify-content: center;
    align-items: center; }
  .input-group > *:first-child:not(:last-child) {
    border-radius: 0.25rem 0 0 0.25rem;
    margin-right: -1px; }
    .input-group > *:first-child:not(:last-child).button-dropdown > .title > .button,
    .input-group > *:first-child:not(:last-child).icon-input > .input {
      border-radius: 0.25rem 0 0 0.25rem; }
    .input-group > *:first-child:not(:last-child).button-group > .button:last-child,
    .input-group > *:first-child:not(:last-child).button-group > .button-dropdown:last-child > .title > .button {
      border-radius: 0; }
  .input-group > *:last-child:not(:first-child) {
    border-radius: 0 0.25rem 0.25rem 0; }
    .input-group > *:last-child:not(:first-child).button-dropdown > .title > .button {
      border-radius: 0 0.25rem 0.25rem 0; }
    .input-group > *:last-child:not(:first-child).button-group > .button-dropdown:last-child > .title > .button,
    .input-group > *:last-child:not(:first-child).icon-input > .input {
      border-radius: 0 0.25rem 0.25rem 0; }
    .input-group > *:last-child:not(:first-child).button-group > .button:first-child {
      border-radius: 0; }
  .input-group > *:not(:first-child):not(:last-child) {
    border-radius: 0;
    margin-right: -1px; }
    .input-group > *:not(:first-child):not(:last-child).button-dropdown > .title > .button,
    .input-group > *:not(:first-child):not(:last-child).button-group > .button,
    .input-group > *:not(:first-child):not(:last-child).button-group > .button-dropdown:last-child > .title > .button,
    .input-group > *:not(:first-child):not(:last-child).icon-input > .input {
      border-radius: 0; }
  .input-group.block {
    display: flex;
    width: 100%; }
    .input-group.block > .expanded {
      flex-grow: 1; }

.popup {
  display: none;
  opacity: 0;
  position: absolute;
  -webkit-transform-origin: center;
          transform-origin: center;
  z-index: 10;
  color: #333; }
  .popup-enter {
    display: inline-block;
    -webkit-transform: scaleY(0);
            transform: scaleY(0); }
  .popup-enter-done {
    display: inline-block;
    opacity: 1;
    -webkit-transform: scaleY(1);
            transform: scaleY(1);
    -webkit-transition: opacity 0.2s ease-out, -webkit-transform 0.2s ease-out;
    transition: opacity 0.2s ease-out, -webkit-transform 0.2s ease-out;
    transition: opacity 0.2s ease-out, transform 0.2s ease-out;
    transition: opacity 0.2s ease-out, transform 0.2s ease-out, -webkit-transform 0.2s ease-out; }
  .popup-exit {
    display: inline-block;
    opacity: 1; }
  .popup-exit-active {
    display: inline-block;
    -webkit-transform: scaleY(0);
            transform: scaleY(0);
    opacity: 0;
    -webkit-transition: opacity 0.2s ease-out, -webkit-transform 0.2s ease-out;
    transition: opacity 0.2s ease-out, -webkit-transform 0.2s ease-out;
    transition: opacity 0.2s ease-out, transform 0.2s ease-out;
    transition: opacity 0.2s ease-out, transform 0.2s ease-out, -webkit-transform 0.2s ease-out; }
  .popup-exit-done {
    display: none; }

.dropdown-menu {
  max-height: 20rem;
  overflow-y: auto;
  overflow-x: hidden; }
  .dropdown-menu > .menu .menu-item:not(.disabled):active {
    color: #fff !important;
    background-color: #007aff; }

.dropdown-title {
  display: inline-flex;
  flex-wrap: wrap; }

.drawer {
  overflow: auto;
  visibility: hidden;
  opacity: 0;
  position: fixed;
  z-index: 1000;
  height: 100%;
  box-shadow: 0 2px 7px 0 rgba(0, 0, 0, 0.4);
  background-color: #fff;
  width: 30%; }
  .drawer.normal {
    width: 30%; }
  .drawer.left {
    top: 0; }
    .drawer.left.drawer-enter {
      left: -100%;
      visibility: visible;
      opacity: 1; }
    .drawer.left.drawer-enter-active {
      left: 0;
      -webkit-transition: left 0.3s;
      transition: left 0.3s; }
    .drawer.left.drawer-enter-done {
      left: 0;
      visibility: visible;
      opacity: 1; }
    .drawer.left.drawer-exit {
      left: 0;
      visibility: visible;
      opacity: 1; }
    .drawer.left.drawer-exit-active {
      left: -100%;
      -webkit-transition: left 0.3s linear;
      transition: left 0.3s linear; }
  .drawer.top, .popover .drawer.popover-arrow.top-left, .tooltip .drawer.popover-arrow.top-left, .popover .drawer.popover-arrow.top-right, .tooltip .drawer.popover-arrow.top-right {
    width: 100%;
    height: 30%;
    left: 0; }
    .drawer.top.drawer-enter, .popover .drawer.drawer-enter.popover-arrow.top-left, .tooltip .drawer.drawer-enter.popover-arrow.top-left, .popover .drawer.drawer-enter.popover-arrow.top-right, .tooltip .drawer.drawer-enter.popover-arrow.top-right {
      top: -100%;
      visibility: visible;
      opacity: 1; }
    .drawer.top.drawer-enter-active, .popover .drawer.drawer-enter-active.popover-arrow.top-left, .tooltip .drawer.drawer-enter-active.popover-arrow.top-left, .popover .drawer.drawer-enter-active.popover-arrow.top-right, .tooltip .drawer.drawer-enter-active.popover-arrow.top-right {
      top: 0;
      -webkit-transition: top 0.3s;
      transition: top 0.3s; }
    .drawer.top.drawer-enter-done, .popover .drawer.drawer-enter-done.popover-arrow.top-left, .tooltip .drawer.drawer-enter-done.popover-arrow.top-left, .popover .drawer.drawer-enter-done.popover-arrow.top-right, .tooltip .drawer.drawer-enter-done.popover-arrow.top-right {
      top: 0;
      visibility: visible;
      opacity: 1; }
    .drawer.top.drawer-exit, .popover .drawer.drawer-exit.popover-arrow.top-left, .tooltip .drawer.drawer-exit.popover-arrow.top-left, .popover .drawer.drawer-exit.popover-arrow.top-right, .tooltip .drawer.drawer-exit.popover-arrow.top-right {
      top: 0;
      visibility: visible;
      opacity: 1; }
    .drawer.top.drawer-exit-active, .popover .drawer.drawer-exit-active.popover-arrow.top-left, .tooltip .drawer.drawer-exit-active.popover-arrow.top-left, .popover .drawer.drawer-exit-active.popover-arrow.top-right, .tooltip .drawer.drawer-exit-active.popover-arrow.top-right {
      top: -100%;
      -webkit-transition: top 0.3s linear;
      transition: top 0.3s linear; }
  .drawer.right {
    top: 0;
    right: 0;
    width: 30%;
    height: 100%; }
    .drawer.right.drawer-enter {
      right: -100%;
      visibility: visible;
      opacity: 1; }
    .drawer.right.drawer-enter-active {
      right: 0;
      -webkit-transition: right 0.3s;
      transition: right 0.3s; }
    .drawer.right.drawer-enter-done {
      right: 0;
      visibility: visible;
      opacity: 1; }
    .drawer.right.drawer-exit {
      right: 0;
      visibility: visible;
      opacity: 1; }
    .drawer.right.drawer-exit-active {
      right: -100%;
      -webkit-transition: right 0.3s linear;
      transition: right 0.3s linear; }
  .drawer.bottom, .popover .drawer.popover-arrow.bottom-left, .tooltip .drawer.popover-arrow.bottom-left, .popover .drawer.popover-arrow.bottom-right, .tooltip .drawer.popover-arrow.bottom-right {
    left: 0;
    bottom: 0;
    height: 30%;
    width: 100%; }
    .drawer.bottom.drawer-enter, .popover .drawer.drawer-enter.popover-arrow.bottom-left, .tooltip .drawer.drawer-enter.popover-arrow.bottom-left, .popover .drawer.drawer-enter.popover-arrow.bottom-right, .tooltip .drawer.drawer-enter.popover-arrow.bottom-right {
      bottom: -100%;
      visibility: visible;
      opacity: 1; }
    .drawer.bottom.drawer-enter-active, .popover .drawer.drawer-enter-active.popover-arrow.bottom-left, .tooltip .drawer.drawer-enter-active.popover-arrow.bottom-left, .popover .drawer.drawer-enter-active.popover-arrow.bottom-right, .tooltip .drawer.drawer-enter-active.popover-arrow.bottom-right {
      bottom: 0;
      -webkit-transition: bottom 0.3s;
      transition: bottom 0.3s; }
    .drawer.bottom.drawer-enter-done, .popover .drawer.drawer-enter-done.popover-arrow.bottom-left, .tooltip .drawer.drawer-enter-done.popover-arrow.bottom-left, .popover .drawer.drawer-enter-done.popover-arrow.bottom-right, .tooltip .drawer.drawer-enter-done.popover-arrow.bottom-right {
      bottom: 0;
      visibility: visible;
      opacity: 1; }
    .drawer.bottom.drawer-exit, .popover .drawer.drawer-exit.popover-arrow.bottom-left, .tooltip .drawer.drawer-exit.popover-arrow.bottom-left, .popover .drawer.drawer-exit.popover-arrow.bottom-right, .tooltip .drawer.drawer-exit.popover-arrow.bottom-right {
      bottom: 0;
      visibility: visible;
      opacity: 1; }
    .drawer.bottom.drawer-exit-active, .popover .drawer.drawer-exit-active.popover-arrow.bottom-left, .tooltip .drawer.drawer-exit-active.popover-arrow.bottom-left, .popover .drawer.drawer-exit-active.popover-arrow.bottom-right, .tooltip .drawer.drawer-exit-active.popover-arrow.bottom-right {
      bottom: -100%;
      -webkit-transition: bottom 0.3s linear;
      transition: bottom 0.3s linear; }

.button {
  background-color: #fff;
  color: #333;
  border: 1px solid #ccc; }
  .button:not(:disabled):not(.disabled):focus, .button:not(:disabled):not(.disabled):hover {
    background-color: white;
    color: #333;
    border-color: #c4c4c4; }
  .button:not(:disabled):not(.disabled):focus, .button.active:not(:disabled):not(.disabled) {
    box-shadow: 0 0 0 0.2rem #d9d9d9;
    z-index: 10;
    position: relative; }
  .button:not(.disabled):active {
    -webkit-transform: scale(0.97);
            transform: scale(0.97); }
  .button.active:not(.disabled) {
    color: #333;
    background-color: white; }
  .button.ok {
    background-color: #49b847;
    color: #fff;
    border: 1px solid #45ad43; }
    .button.ok:not(:disabled):not(.disabled):focus, .button.ok:not(:disabled):not(.disabled):hover {
      background-color: #5bbf59;
      color: #fff;
      border-color: #40a23e; }
    .button.ok:not(:disabled):not(.disabled):focus, .button.ok.active:not(:disabled):not(.disabled) {
      box-shadow: 0 0 0 0.2rem #b6e3b5;
      z-index: 10;
      position: relative; }
    .button.ok:not(.disabled):active {
      -webkit-transform: scale(0.97);
              transform: scale(0.97); }
    .button.ok.active:not(.disabled) {
      color: #fff;
      background-color: #5bbf59; }
  .button.error {
    background-color: #ff350e;
    color: #fff;
    border: 1px solid #fe2900; }
    .button.error:not(:disabled):not(.disabled):focus, .button.error:not(:disabled):not(.disabled):hover {
      background-color: #ff4a28;
      color: #fff;
      border-color: #ee2700; }
    .button.error:not(:disabled):not(.disabled):focus, .button.error.active:not(:disabled):not(.disabled) {
      box-shadow: 0 0 0 0.2rem #ffb5a7;
      z-index: 10;
      position: relative; }
    .button.error:not(.disabled):active {
      -webkit-transform: scale(0.97);
              transform: scale(0.97); }
    .button.error.active:not(.disabled) {
      color: #fff;
      background-color: #ff4a28; }
  .button.primary {
    background-color: #007aff;
    color: #fff;
    border: 1px solid #0073f0; }
    .button.primary:not(:disabled):not(.disabled):focus, .button.primary:not(:disabled):not(.disabled):hover {
      background-color: #1a87ff;
      color: #fff;
      border-color: #006be0; }
    .button.primary:not(:disabled):not(.disabled):focus, .button.primary.active:not(:disabled):not(.disabled) {
      box-shadow: 0 0 0 0.2rem #99caff;
      z-index: 10;
      position: relative; }
    .button.primary:not(.disabled):active {
      -webkit-transform: scale(0.97);
              transform: scale(0.97); }
    .button.primary.active:not(.disabled) {
      color: #fff;
      background-color: #1a87ff; }
  .button.secondary, .button.loader.third {
    background-color: #6c757d;
    color: #fff;
    border: 1px solid #656d75; }
    .button.secondary:not(:disabled):not(.disabled):focus, .button.loader.third:not(:disabled):not(.disabled):focus, .button.secondary:not(:disabled):not(.disabled):hover, .button.loader.third:not(:disabled):not(.disabled):hover {
      background-color: #78828a;
      color: #fff;
      border-color: #5e666d; }
    .button.secondary:not(:disabled):not(.disabled):focus, .button.loader.third:not(:disabled):not(.disabled):focus, .button.secondary.active:not(:disabled):not(.disabled), .button.active.loader.third:not(:disabled):not(.disabled) {
      box-shadow: 0 0 0 0.2rem #bcc1c6;
      z-index: 10;
      position: relative; }
    .button.secondary:not(.disabled):active, .button.loader.third:not(.disabled):active {
      -webkit-transform: scale(0.97);
              transform: scale(0.97); }
    .button.secondary.active:not(.disabled), .button.active.loader.third:not(.disabled) {
      color: #fff;
      background-color: #78828a; }
  .button.info {
    background-color: #199cb8;
    color: #fff;
    border: 1px solid #1791ab; }
    .button.info:not(:disabled):not(.disabled):focus, .button.info:not(:disabled):not(.disabled):hover {
      background-color: #1cafce;
      color: #fff;
      border-color: #15859d; }
    .button.info:not(:disabled):not(.disabled):focus, .button.info.active:not(:disabled):not(.disabled) {
      box-shadow: 0 0 0 0.2rem #7dd9ed;
      z-index: 10;
      position: relative; }
    .button.info:not(.disabled):active {
      -webkit-transform: scale(0.97);
              transform: scale(0.97); }
    .button.info.active:not(.disabled) {
      color: #fff;
      background-color: #1cafce; }
  .button.success {
    background-color: #49b847;
    color: #fff;
    border: 1px solid #45ad43; }
    .button.success:not(:disabled):not(.disabled):focus, .button.success:not(:disabled):not(.disabled):hover {
      background-color: #5bbf59;
      color: #fff;
      border-color: #40a23e; }
    .button.success:not(:disabled):not(.disabled):focus, .button.success.active:not(:disabled):not(.disabled) {
      box-shadow: 0 0 0 0.2rem #b6e3b5;
      z-index: 10;
      position: relative; }
    .button.success:not(.disabled):active {
      -webkit-transform: scale(0.97);
              transform: scale(0.97); }
    .button.success.active:not(.disabled) {
      color: #fff;
      background-color: #5bbf59; }
  .button.warning {
    background-color: #fbbe11;
    color: #fff;
    border: 1px solid #f9b904; }
    .button.warning:not(:disabled):not(.disabled):focus, .button.warning:not(:disabled):not(.disabled):hover {
      background-color: #fbc52a;
      color: #fff;
      border-color: #e9ae04; }
    .button.warning:not(:disabled):not(.disabled):focus, .button.warning.active:not(:disabled):not(.disabled) {
      box-shadow: 0 0 0 0.2rem #fee7a7;
      z-index: 10;
      position: relative; }
    .button.warning:not(.disabled):active {
      -webkit-transform: scale(0.97);
              transform: scale(0.97); }
    .button.warning.active:not(.disabled) {
      color: #fff;
      background-color: #fbc52a; }
  .button.danger {
    background-color: #ff350e;
    color: #fff;
    border: 1px solid #fe2900; }
    .button.danger:not(:disabled):not(.disabled):focus, .button.danger:not(:disabled):not(.disabled):hover {
      background-color: #ff4a28;
      color: #fff;
      border-color: #ee2700; }
    .button.danger:not(:disabled):not(.disabled):focus, .button.danger.active:not(:disabled):not(.disabled) {
      box-shadow: 0 0 0 0.2rem #ffb5a7;
      z-index: 10;
      position: relative; }
    .button.danger:not(.disabled):active {
      -webkit-transform: scale(0.97);
              transform: scale(0.97); }
    .button.danger.active:not(.disabled) {
      color: #fff;
      background-color: #ff4a28; }
  .button.black {
    background-color: #000000;
    color: #fff;
    border: 1px solid black; }
    .button.black:not(:disabled):not(.disabled):focus, .button.black:not(:disabled):not(.disabled):hover {
      background-color: #0d0d0d;
      color: #fff;
      border-color: black; }
    .button.black:not(:disabled):not(.disabled):focus, .button.black.active:not(:disabled):not(.disabled) {
      box-shadow: 0 0 0 0.2rem #4d4d4d;
      z-index: 10;
      position: relative; }
    .button.black:not(.disabled):active {
      -webkit-transform: scale(0.97);
              transform: scale(0.97); }
    .button.black.active:not(.disabled) {
      color: #fff;
      background-color: #0d0d0d; }
  .button.blue {
    background-color: #007aff;
    color: #fff;
    border: 1px solid #0073f0; }
    .button.blue:not(:disabled):not(.disabled):focus, .button.blue:not(:disabled):not(.disabled):hover {
      background-color: #1a87ff;
      color: #fff;
      border-color: #006be0; }
    .button.blue:not(:disabled):not(.disabled):focus, .button.blue.active:not(:disabled):not(.disabled) {
      box-shadow: 0 0 0 0.2rem #99caff;
      z-index: 10;
      position: relative; }
    .button.blue:not(.disabled):active {
      -webkit-transform: scale(0.97);
              transform: scale(0.97); }
    .button.blue.active:not(.disabled) {
      color: #fff;
      background-color: #1a87ff; }
  .button.brown {
    background-color: #a5742f;
    color: #fff;
    border: 1px solid #996c2c; }
    .button.brown:not(:disabled):not(.disabled):focus, .button.brown:not(:disabled):not(.disabled):hover {
      background-color: #b98235;
      color: #fff;
      border-color: #8d6328; }
    .button.brown:not(:disabled):not(.disabled):focus, .button.brown.active:not(:disabled):not(.disabled) {
      box-shadow: 0 0 0 0.2rem #dfbd8e;
      z-index: 10;
      position: relative; }
    .button.brown:not(.disabled):active {
      -webkit-transform: scale(0.97);
              transform: scale(0.97); }
    .button.brown.active:not(.disabled) {
      color: #fff;
      background-color: #b98235; }
  .button.cyan {
    background-color: #199cb8;
    color: #fff;
    border: 1px solid #1791ab; }
    .button.cyan:not(:disabled):not(.disabled):focus, .button.cyan:not(:disabled):not(.disabled):hover {
      background-color: #1cafce;
      color: #fff;
      border-color: #15859d; }
    .button.cyan:not(:disabled):not(.disabled):focus, .button.cyan.active:not(:disabled):not(.disabled) {
      box-shadow: 0 0 0 0.2rem #7dd9ed;
      z-index: 10;
      position: relative; }
    .button.cyan:not(.disabled):active {
      -webkit-transform: scale(0.97);
              transform: scale(0.97); }
    .button.cyan.active:not(.disabled) {
      color: #fff;
      background-color: #1cafce; }
  .button.dark {
    background-color: #6c757d;
    color: #fff;
    border: 1px solid #656d75; }
    .button.dark:not(:disabled):not(.disabled):focus, .button.dark:not(:disabled):not(.disabled):hover {
      background-color: #78828a;
      color: #fff;
      border-color: #5e666d; }
    .button.dark:not(:disabled):not(.disabled):focus, .button.dark.active:not(:disabled):not(.disabled) {
      box-shadow: 0 0 0 0.2rem #bcc1c6;
      z-index: 10;
      position: relative; }
    .button.dark:not(.disabled):active {
      -webkit-transform: scale(0.97);
              transform: scale(0.97); }
    .button.dark.active:not(.disabled) {
      color: #fff;
      background-color: #78828a; }
  .button.green {
    background-color: #49b847;
    color: #fff;
    border: 1px solid #45ad43; }
    .button.green:not(:disabled):not(.disabled):focus, .button.green:not(:disabled):not(.disabled):hover {
      background-color: #5bbf59;
      color: #fff;
      border-color: #40a23e; }
    .button.green:not(:disabled):not(.disabled):focus, .button.green.active:not(:disabled):not(.disabled) {
      box-shadow: 0 0 0 0.2rem #b6e3b5;
      z-index: 10;
      position: relative; }
    .button.green:not(.disabled):active {
      -webkit-transform: scale(0.97);
              transform: scale(0.97); }
    .button.green.active:not(.disabled) {
      color: #fff;
      background-color: #5bbf59; }
  .button.gray {
    background-color: #ccc;
    color: #fff;
    border: 1px solid #c4c4c4; }
    .button.gray:not(:disabled):not(.disabled):focus, .button.gray:not(:disabled):not(.disabled):hover {
      background-color: #d9d9d9;
      color: #fff;
      border-color: #bdbdbd; }
    .button.gray:not(:disabled):not(.disabled):focus, .button.gray.active:not(:disabled):not(.disabled) {
      box-shadow: 0 0 0 0.2rem white;
      z-index: 10;
      position: relative; }
    .button.gray:not(.disabled):active {
      -webkit-transform: scale(0.97);
              transform: scale(0.97); }
    .button.gray.active:not(.disabled) {
      color: #fff;
      background-color: #d9d9d9; }
  .button.gray-darker {
    background-color: #6c757d;
    color: #fff;
    border: 1px solid #656d75; }
    .button.gray-darker:not(:disabled):not(.disabled):focus, .button.gray-darker:not(:disabled):not(.disabled):hover {
      background-color: #78828a;
      color: #fff;
      border-color: #5e666d; }
    .button.gray-darker:not(:disabled):not(.disabled):focus, .button.gray-darker.active:not(:disabled):not(.disabled) {
      box-shadow: 0 0 0 0.2rem #bcc1c6;
      z-index: 10;
      position: relative; }
    .button.gray-darker:not(.disabled):active {
      -webkit-transform: scale(0.97);
              transform: scale(0.97); }
    .button.gray-darker.active:not(.disabled) {
      color: #fff;
      background-color: #78828a; }
  .button.light {
    background-color: #f8f9fa;
    color: #fff;
    border: 1px solid #eff1f4; }
    .button.light:not(:disabled):not(.disabled):focus, .button.light:not(:disabled):not(.disabled):hover {
      background-color: white;
      color: #fff;
      border-color: #e6eaed; }
    .button.light:not(:disabled):not(.disabled):focus, .button.light.active:not(:disabled):not(.disabled) {
      box-shadow: 0 0 0 0.2rem white;
      z-index: 10;
      position: relative; }
    .button.light:not(.disabled):active {
      -webkit-transform: scale(0.97);
              transform: scale(0.97); }
    .button.light.active:not(.disabled) {
      color: #fff;
      background-color: white; }
  .button.light-gray {
    background-color: #f5f5f5;
    color: #fff;
    border: 1px solid #ededed; }
    .button.light-gray:not(:disabled):not(.disabled):focus, .button.light-gray:not(:disabled):not(.disabled):hover {
      background-color: white;
      color: #fff;
      border-color: #e6e6e6; }
    .button.light-gray:not(:disabled):not(.disabled):focus, .button.light-gray.active:not(:disabled):not(.disabled) {
      box-shadow: 0 0 0 0.2rem white;
      z-index: 10;
      position: relative; }
    .button.light-gray:not(.disabled):active {
      -webkit-transform: scale(0.97);
              transform: scale(0.97); }
    .button.light-gray.active:not(.disabled) {
      color: #fff;
      background-color: white; }
  .button.orange {
    background-color: #f2791a;
    color: #fff;
    border: 1px solid #ef710e; }
    .button.orange:not(:disabled):not(.disabled):focus, .button.orange:not(:disabled):not(.disabled):hover {
      background-color: #f38732;
      color: #fff;
      border-color: #e16a0d; }
    .button.orange:not(:disabled):not(.disabled):focus, .button.orange.active:not(:disabled):not(.disabled) {
      box-shadow: 0 0 0 0.2rem #faceab;
      z-index: 10;
      position: relative; }
    .button.orange:not(.disabled):active {
      -webkit-transform: scale(0.97);
              transform: scale(0.97); }
    .button.orange.active:not(.disabled) {
      color: #fff;
      background-color: #f38732; }
  .button.pink {
    background-color: #e02c92;
    color: #fff;
    border: 1px solid #dc208b; }
    .button.pink:not(:disabled):not(.disabled):focus, .button.pink:not(:disabled):not(.disabled):hover {
      background-color: #e3429d;
      color: #fff;
      border-color: #cf1e82; }
    .button.pink:not(:disabled):not(.disabled):focus, .button.pink.active:not(:disabled):not(.disabled) {
      box-shadow: 0 0 0 0.2rem #f4b1d7;
      z-index: 10;
      position: relative; }
    .button.pink:not(.disabled):active {
      -webkit-transform: scale(0.97);
              transform: scale(0.97); }
    .button.pink.active:not(.disabled) {
      color: #fff;
      background-color: #e3429d; }
  .button.purple {
    background-color: #9935c8;
    color: #fff;
    border: 1px solid #9032bc; }
    .button.purple:not(:disabled):not(.disabled):focus, .button.purple:not(:disabled):not(.disabled):hover {
      background-color: #a348cf;
      color: #fff;
      border-color: #862fb0; }
    .button.purple:not(:disabled):not(.disabled):focus, .button.purple.active:not(:disabled):not(.disabled) {
      box-shadow: 0 0 0 0.2rem #d6ade9;
      z-index: 10;
      position: relative; }
    .button.purple:not(.disabled):active {
      -webkit-transform: scale(0.97);
              transform: scale(0.97); }
    .button.purple.active:not(.disabled) {
      color: #fff;
      background-color: #a348cf; }
  .button.red {
    background-color: #ff350e;
    color: #fff;
    border: 1px solid #fe2900; }
    .button.red:not(:disabled):not(.disabled):focus, .button.red:not(:disabled):not(.disabled):hover {
      background-color: #ff4a28;
      color: #fff;
      border-color: #ee2700; }
    .button.red:not(:disabled):not(.disabled):focus, .button.red.active:not(:disabled):not(.disabled) {
      box-shadow: 0 0 0 0.2rem #ffb5a7;
      z-index: 10;
      position: relative; }
    .button.red:not(.disabled):active {
      -webkit-transform: scale(0.97);
              transform: scale(0.97); }
    .button.red.active:not(.disabled) {
      color: #fff;
      background-color: #ff4a28; }
  .button.yellow {
    background-color: #fbbe11;
    color: #fff;
    border: 1px solid #f9b904; }
    .button.yellow:not(:disabled):not(.disabled):focus, .button.yellow:not(:disabled):not(.disabled):hover {
      background-color: #fbc52a;
      color: #fff;
      border-color: #e9ae04; }
    .button.yellow:not(:disabled):not(.disabled):focus, .button.yellow.active:not(:disabled):not(.disabled) {
      box-shadow: 0 0 0 0.2rem #fee7a7;
      z-index: 10;
      position: relative; }
    .button.yellow:not(.disabled):active {
      -webkit-transform: scale(0.97);
              transform: scale(0.97); }
    .button.yellow.active:not(.disabled) {
      color: #fff;
      background-color: #fbc52a; }
  .button.teal {
    background-color: #0d806d;
    color: #fff;
    border: 1px solid #0c7261; }
    .button.teal:not(:disabled):not(.disabled):focus, .button.teal:not(:disabled):not(.disabled):hover {
      background-color: #0f9781;
      color: #fff;
      border-color: #0a6455; }
    .button.teal:not(:disabled):not(.disabled):focus, .button.teal.active:not(:disabled):not(.disabled) {
      box-shadow: 0 0 0 0.2rem #3bebce;
      z-index: 10;
      position: relative; }
    .button.teal:not(.disabled):active {
      -webkit-transform: scale(0.97);
              transform: scale(0.97); }
    .button.teal.active:not(.disabled) {
      color: #fff;
      background-color: #0f9781; }
  .button.violet {
    background-color: #5f33c9;
    color: #fff;
    border: 1px solid #5930bd; }
    .button.violet:not(:disabled):not(.disabled):focus, .button.violet:not(:disabled):not(.disabled):hover {
      background-color: #6e46d0;
      color: #fff;
      border-color: #532db1; }
    .button.violet:not(:disabled):not(.disabled):focus, .button.violet.active:not(:disabled):not(.disabled) {
      box-shadow: 0 0 0 0.2rem #beabea;
      z-index: 10;
      position: relative; }
    .button.violet:not(.disabled):active {
      -webkit-transform: scale(0.97);
              transform: scale(0.97); }
    .button.violet.active:not(.disabled) {
      color: #fff;
      background-color: #6e46d0; }
  .button.white {
    background-color: #fff;
    color: #fff;
    border: 1px solid #f7f7f7; }
    .button.white:not(:disabled):not(.disabled):focus, .button.white:not(:disabled):not(.disabled):hover {
      background-color: white;
      color: #fff;
      border-color: #f0f0f0; }
    .button.white:not(:disabled):not(.disabled):focus, .button.white.active:not(:disabled):not(.disabled) {
      box-shadow: 0 0 0 0.2rem white;
      z-index: 10;
      position: relative; }
    .button.white:not(.disabled):active {
      -webkit-transform: scale(0.97);
              transform: scale(0.97); }
    .button.white.active:not(.disabled) {
      color: #fff;
      background-color: white; }
  .button.outline.ok, .button-group.outline > .ok.button {
    background-color: transparent;
    color: #49b847;
    border: 1px solid #49b847; }
    .button.outline.ok:not(:disabled):not(.disabled):focus, .button-group.outline > .ok.button:not(:disabled):not(.disabled):focus, .button.outline.ok:not(:disabled):not(.disabled):hover, .button-group.outline > .ok.button:not(:disabled):not(.disabled):hover {
      background-color: #5bbf59;
      color: #fff;
      border-color: #45ad43; }
    .button.outline.ok:not(:disabled):not(.disabled):focus, .button-group.outline > .ok.button:not(:disabled):not(.disabled):focus, .button.outline.ok.active:not(:disabled):not(.disabled), .button-group.outline > .ok.active.button:not(:disabled):not(.disabled) {
      box-shadow: 0 0 0 0.2rem #b6e3b5;
      z-index: 10;
      position: relative; }
    .button.outline.ok:not(.disabled):active, .button-group.outline > .ok.button:not(.disabled):active {
      -webkit-transform: scale(0.97);
              transform: scale(0.97); }
    .button.outline.ok.active:not(.disabled), .button-group.outline > .ok.active.button:not(.disabled) {
      color: #fff;
      background-color: #5bbf59; }
  .button.outline.error, .button-group.outline > .error.button {
    background-color: transparent;
    color: #ff350e;
    border: 1px solid #ff350e; }
    .button.outline.error:not(:disabled):not(.disabled):focus, .button-group.outline > .error.button:not(:disabled):not(.disabled):focus, .button.outline.error:not(:disabled):not(.disabled):hover, .button-group.outline > .error.button:not(:disabled):not(.disabled):hover {
      background-color: #ff4a28;
      color: #fff;
      border-color: #fe2900; }
    .button.outline.error:not(:disabled):not(.disabled):focus, .button-group.outline > .error.button:not(:disabled):not(.disabled):focus, .button.outline.error.active:not(:disabled):not(.disabled), .button-group.outline > .error.active.button:not(:disabled):not(.disabled) {
      box-shadow: 0 0 0 0.2rem #ffb5a7;
      z-index: 10;
      position: relative; }
    .button.outline.error:not(.disabled):active, .button-group.outline > .error.button:not(.disabled):active {
      -webkit-transform: scale(0.97);
              transform: scale(0.97); }
    .button.outline.error.active:not(.disabled), .button-group.outline > .error.active.button:not(.disabled) {
      color: #fff;
      background-color: #ff4a28; }
  .button.outline.primary, .button-group.outline > .primary.button {
    background-color: transparent;
    color: #007aff;
    border: 1px solid #007aff; }
    .button.outline.primary:not(:disabled):not(.disabled):focus, .button-group.outline > .primary.button:not(:disabled):not(.disabled):focus, .button.outline.primary:not(:disabled):not(.disabled):hover, .button-group.outline > .primary.button:not(:disabled):not(.disabled):hover {
      background-color: #1a87ff;
      color: #fff;
      border-color: #0073f0; }
    .button.outline.primary:not(:disabled):not(.disabled):focus, .button-group.outline > .primary.button:not(:disabled):not(.disabled):focus, .button.outline.primary.active:not(:disabled):not(.disabled), .button-group.outline > .primary.active.button:not(:disabled):not(.disabled) {
      box-shadow: 0 0 0 0.2rem #99caff;
      z-index: 10;
      position: relative; }
    .button.outline.primary:not(.disabled):active, .button-group.outline > .primary.button:not(.disabled):active {
      -webkit-transform: scale(0.97);
              transform: scale(0.97); }
    .button.outline.primary.active:not(.disabled), .button-group.outline > .primary.active.button:not(.disabled) {
      color: #fff;
      background-color: #1a87ff; }
  .button.outline.secondary, .button-group.outline > .secondary.button, .button-group.outline > .button.loader.third, .button.outline.loader.third {
    background-color: transparent;
    color: #6c757d;
    border: 1px solid #6c757d; }
    .button.outline.secondary:not(:disabled):not(.disabled):focus, .button-group.outline > .secondary.button:not(:disabled):not(.disabled):focus, .button-group.outline > .button.loader.third:not(:disabled):not(.disabled):focus, .button.outline.loader.third:not(:disabled):not(.disabled):focus, .button.outline.secondary:not(:disabled):not(.disabled):hover, .button-group.outline > .secondary.button:not(:disabled):not(.disabled):hover, .button-group.outline > .button.loader.third:not(:disabled):not(.disabled):hover, .button.outline.loader.third:not(:disabled):not(.disabled):hover {
      background-color: #78828a;
      color: #fff;
      border-color: #656d75; }
    .button.outline.secondary:not(:disabled):not(.disabled):focus, .button-group.outline > .secondary.button:not(:disabled):not(.disabled):focus, .button-group.outline > .button.loader.third:not(:disabled):not(.disabled):focus, .button.outline.loader.third:not(:disabled):not(.disabled):focus, .button.outline.secondary.active:not(:disabled):not(.disabled), .button-group.outline > .secondary.active.button:not(:disabled):not(.disabled), .button-group.outline > .active.button.loader.third:not(:disabled):not(.disabled), .button.outline.active.loader.third:not(:disabled):not(.disabled) {
      box-shadow: 0 0 0 0.2rem #bcc1c6;
      z-index: 10;
      position: relative; }
    .button.outline.secondary:not(.disabled):active, .button-group.outline > .secondary.button:not(.disabled):active, .button-group.outline > .button.loader.third:not(.disabled):active, .button.outline.loader.third:not(.disabled):active {
      -webkit-transform: scale(0.97);
              transform: scale(0.97); }
    .button.outline.secondary.active:not(.disabled), .button-group.outline > .secondary.active.button:not(.disabled), .button-group.outline > .active.button.loader.third:not(.disabled), .button.outline.active.loader.third:not(.disabled) {
      color: #fff;
      background-color: #78828a; }
  .button.outline.info, .button-group.outline > .info.button {
    background-color: transparent;
    color: #199cb8;
    border: 1px solid #199cb8; }
    .button.outline.info:not(:disabled):not(.disabled):focus, .button-group.outline > .info.button:not(:disabled):not(.disabled):focus, .button.outline.info:not(:disabled):not(.disabled):hover, .button-group.outline > .info.button:not(:disabled):not(.disabled):hover {
      background-color: #1cafce;
      color: #fff;
      border-color: #1791ab; }
    .button.outline.info:not(:disabled):not(.disabled):focus, .button-group.outline > .info.button:not(:disabled):not(.disabled):focus, .button.outline.info.active:not(:disabled):not(.disabled), .button-group.outline > .info.active.button:not(:disabled):not(.disabled) {
      box-shadow: 0 0 0 0.2rem #7dd9ed;
      z-index: 10;
      position: relative; }
    .button.outline.info:not(.disabled):active, .button-group.outline > .info.button:not(.disabled):active {
      -webkit-transform: scale(0.97);
              transform: scale(0.97); }
    .button.outline.info.active:not(.disabled), .button-group.outline > .info.active.button:not(.disabled) {
      color: #fff;
      background-color: #1cafce; }
  .button.outline.success, .button-group.outline > .success.button {
    background-color: transparent;
    color: #49b847;
    border: 1px solid #49b847; }
    .button.outline.success:not(:disabled):not(.disabled):focus, .button-group.outline > .success.button:not(:disabled):not(.disabled):focus, .button.outline.success:not(:disabled):not(.disabled):hover, .button-group.outline > .success.button:not(:disabled):not(.disabled):hover {
      background-color: #5bbf59;
      color: #fff;
      border-color: #45ad43; }
    .button.outline.success:not(:disabled):not(.disabled):focus, .button-group.outline > .success.button:not(:disabled):not(.disabled):focus, .button.outline.success.active:not(:disabled):not(.disabled), .button-group.outline > .success.active.button:not(:disabled):not(.disabled) {
      box-shadow: 0 0 0 0.2rem #b6e3b5;
      z-index: 10;
      position: relative; }
    .button.outline.success:not(.disabled):active, .button-group.outline > .success.button:not(.disabled):active {
      -webkit-transform: scale(0.97);
              transform: scale(0.97); }
    .button.outline.success.active:not(.disabled), .button-group.outline > .success.active.button:not(.disabled) {
      color: #fff;
      background-color: #5bbf59; }
  .button.outline.warning, .button-group.outline > .warning.button {
    background-color: transparent;
    color: #fbbe11;
    border: 1px solid #fbbe11; }
    .button.outline.warning:not(:disabled):not(.disabled):focus, .button-group.outline > .warning.button:not(:disabled):not(.disabled):focus, .button.outline.warning:not(:disabled):not(.disabled):hover, .button-group.outline > .warning.button:not(:disabled):not(.disabled):hover {
      background-color: #fbc52a;
      color: #fff;
      border-color: #f9b904; }
    .button.outline.warning:not(:disabled):not(.disabled):focus, .button-group.outline > .warning.button:not(:disabled):not(.disabled):focus, .button.outline.warning.active:not(:disabled):not(.disabled), .button-group.outline > .warning.active.button:not(:disabled):not(.disabled) {
      box-shadow: 0 0 0 0.2rem #fee7a7;
      z-index: 10;
      position: relative; }
    .button.outline.warning:not(.disabled):active, .button-group.outline > .warning.button:not(.disabled):active {
      -webkit-transform: scale(0.97);
              transform: scale(0.97); }
    .button.outline.warning.active:not(.disabled), .button-group.outline > .warning.active.button:not(.disabled) {
      color: #fff;
      background-color: #fbc52a; }
  .button.outline.danger, .button-group.outline > .danger.button {
    background-color: transparent;
    color: #ff350e;
    border: 1px solid #ff350e; }
    .button.outline.danger:not(:disabled):not(.disabled):focus, .button-group.outline > .danger.button:not(:disabled):not(.disabled):focus, .button.outline.danger:not(:disabled):not(.disabled):hover, .button-group.outline > .danger.button:not(:disabled):not(.disabled):hover {
      background-color: #ff4a28;
      color: #fff;
      border-color: #fe2900; }
    .button.outline.danger:not(:disabled):not(.disabled):focus, .button-group.outline > .danger.button:not(:disabled):not(.disabled):focus, .button.outline.danger.active:not(:disabled):not(.disabled), .button-group.outline > .danger.active.button:not(:disabled):not(.disabled) {
      box-shadow: 0 0 0 0.2rem #ffb5a7;
      z-index: 10;
      position: relative; }
    .button.outline.danger:not(.disabled):active, .button-group.outline > .danger.button:not(.disabled):active {
      -webkit-transform: scale(0.97);
              transform: scale(0.97); }
    .button.outline.danger.active:not(.disabled), .button-group.outline > .danger.active.button:not(.disabled) {
      color: #fff;
      background-color: #ff4a28; }
  .button.outline.black, .button-group.outline > .black.button {
    background-color: transparent;
    color: #000000;
    border: 1px solid #000000; }
    .button.outline.black:not(:disabled):not(.disabled):focus, .button-group.outline > .black.button:not(:disabled):not(.disabled):focus, .button.outline.black:not(:disabled):not(.disabled):hover, .button-group.outline > .black.button:not(:disabled):not(.disabled):hover {
      background-color: #0d0d0d;
      color: #fff;
      border-color: black; }
    .button.outline.black:not(:disabled):not(.disabled):focus, .button-group.outline > .black.button:not(:disabled):not(.disabled):focus, .button.outline.black.active:not(:disabled):not(.disabled), .button-group.outline > .black.active.button:not(:disabled):not(.disabled) {
      box-shadow: 0 0 0 0.2rem #4d4d4d;
      z-index: 10;
      position: relative; }
    .button.outline.black:not(.disabled):active, .button-group.outline > .black.button:not(.disabled):active {
      -webkit-transform: scale(0.97);
              transform: scale(0.97); }
    .button.outline.black.active:not(.disabled), .button-group.outline > .black.active.button:not(.disabled) {
      color: #fff;
      background-color: #0d0d0d; }
  .button.outline.blue, .button-group.outline > .blue.button {
    background-color: transparent;
    color: #007aff;
    border: 1px solid #007aff; }
    .button.outline.blue:not(:disabled):not(.disabled):focus, .button-group.outline > .blue.button:not(:disabled):not(.disabled):focus, .button.outline.blue:not(:disabled):not(.disabled):hover, .button-group.outline > .blue.button:not(:disabled):not(.disabled):hover {
      background-color: #1a87ff;
      color: #fff;
      border-color: #0073f0; }
    .button.outline.blue:not(:disabled):not(.disabled):focus, .button-group.outline > .blue.button:not(:disabled):not(.disabled):focus, .button.outline.blue.active:not(:disabled):not(.disabled), .button-group.outline > .blue.active.button:not(:disabled):not(.disabled) {
      box-shadow: 0 0 0 0.2rem #99caff;
      z-index: 10;
      position: relative; }
    .button.outline.blue:not(.disabled):active, .button-group.outline > .blue.button:not(.disabled):active {
      -webkit-transform: scale(0.97);
              transform: scale(0.97); }
    .button.outline.blue.active:not(.disabled), .button-group.outline > .blue.active.button:not(.disabled) {
      color: #fff;
      background-color: #1a87ff; }
  .button.outline.brown, .button-group.outline > .brown.button {
    background-color: transparent;
    color: #a5742f;
    border: 1px solid #a5742f; }
    .button.outline.brown:not(:disabled):not(.disabled):focus, .button-group.outline > .brown.button:not(:disabled):not(.disabled):focus, .button.outline.brown:not(:disabled):not(.disabled):hover, .button-group.outline > .brown.button:not(:disabled):not(.disabled):hover {
      background-color: #b98235;
      color: #fff;
      border-color: #996c2c; }
    .button.outline.brown:not(:disabled):not(.disabled):focus, .button-group.outline > .brown.button:not(:disabled):not(.disabled):focus, .button.outline.brown.active:not(:disabled):not(.disabled), .button-group.outline > .brown.active.button:not(:disabled):not(.disabled) {
      box-shadow: 0 0 0 0.2rem #dfbd8e;
      z-index: 10;
      position: relative; }
    .button.outline.brown:not(.disabled):active, .button-group.outline > .brown.button:not(.disabled):active {
      -webkit-transform: scale(0.97);
              transform: scale(0.97); }
    .button.outline.brown.active:not(.disabled), .button-group.outline > .brown.active.button:not(.disabled) {
      color: #fff;
      background-color: #b98235; }
  .button.outline.cyan, .button-group.outline > .cyan.button {
    background-color: transparent;
    color: #199cb8;
    border: 1px solid #199cb8; }
    .button.outline.cyan:not(:disabled):not(.disabled):focus, .button-group.outline > .cyan.button:not(:disabled):not(.disabled):focus, .button.outline.cyan:not(:disabled):not(.disabled):hover, .button-group.outline > .cyan.button:not(:disabled):not(.disabled):hover {
      background-color: #1cafce;
      color: #fff;
      border-color: #1791ab; }
    .button.outline.cyan:not(:disabled):not(.disabled):focus, .button-group.outline > .cyan.button:not(:disabled):not(.disabled):focus, .button.outline.cyan.active:not(:disabled):not(.disabled), .button-group.outline > .cyan.active.button:not(:disabled):not(.disabled) {
      box-shadow: 0 0 0 0.2rem #7dd9ed;
      z-index: 10;
      position: relative; }
    .button.outline.cyan:not(.disabled):active, .button-group.outline > .cyan.button:not(.disabled):active {
      -webkit-transform: scale(0.97);
              transform: scale(0.97); }
    .button.outline.cyan.active:not(.disabled), .button-group.outline > .cyan.active.button:not(.disabled) {
      color: #fff;
      background-color: #1cafce; }
  .button.outline.dark, .button-group.outline > .dark.button {
    background-color: transparent;
    color: #6c757d;
    border: 1px solid #6c757d; }
    .button.outline.dark:not(:disabled):not(.disabled):focus, .button-group.outline > .dark.button:not(:disabled):not(.disabled):focus, .button.outline.dark:not(:disabled):not(.disabled):hover, .button-group.outline > .dark.button:not(:disabled):not(.disabled):hover {
      background-color: #78828a;
      color: #fff;
      border-color: #656d75; }
    .button.outline.dark:not(:disabled):not(.disabled):focus, .button-group.outline > .dark.button:not(:disabled):not(.disabled):focus, .button.outline.dark.active:not(:disabled):not(.disabled), .button-group.outline > .dark.active.button:not(:disabled):not(.disabled) {
      box-shadow: 0 0 0 0.2rem #bcc1c6;
      z-index: 10;
      position: relative; }
    .button.outline.dark:not(.disabled):active, .button-group.outline > .dark.button:not(.disabled):active {
      -webkit-transform: scale(0.97);
              transform: scale(0.97); }
    .button.outline.dark.active:not(.disabled), .button-group.outline > .dark.active.button:not(.disabled) {
      color: #fff;
      background-color: #78828a; }
  .button.outline.green, .button-group.outline > .green.button {
    background-color: transparent;
    color: #49b847;
    border: 1px solid #49b847; }
    .button.outline.green:not(:disabled):not(.disabled):focus, .button-group.outline > .green.button:not(:disabled):not(.disabled):focus, .button.outline.green:not(:disabled):not(.disabled):hover, .button-group.outline > .green.button:not(:disabled):not(.disabled):hover {
      background-color: #5bbf59;
      color: #fff;
      border-color: #45ad43; }
    .button.outline.green:not(:disabled):not(.disabled):focus, .button-group.outline > .green.button:not(:disabled):not(.disabled):focus, .button.outline.green.active:not(:disabled):not(.disabled), .button-group.outline > .green.active.button:not(:disabled):not(.disabled) {
      box-shadow: 0 0 0 0.2rem #b6e3b5;
      z-index: 10;
      position: relative; }
    .button.outline.green:not(.disabled):active, .button-group.outline > .green.button:not(.disabled):active {
      -webkit-transform: scale(0.97);
              transform: scale(0.97); }
    .button.outline.green.active:not(.disabled), .button-group.outline > .green.active.button:not(.disabled) {
      color: #fff;
      background-color: #5bbf59; }
  .button.outline.gray, .button-group.outline > .gray.button {
    background-color: transparent;
    color: #ccc;
    border: 1px solid #ccc; }
    .button.outline.gray:not(:disabled):not(.disabled):focus, .button-group.outline > .gray.button:not(:disabled):not(.disabled):focus, .button.outline.gray:not(:disabled):not(.disabled):hover, .button-group.outline > .gray.button:not(:disabled):not(.disabled):hover {
      background-color: #d9d9d9;
      color: #fff;
      border-color: #c4c4c4; }
    .button.outline.gray:not(:disabled):not(.disabled):focus, .button-group.outline > .gray.button:not(:disabled):not(.disabled):focus, .button.outline.gray.active:not(:disabled):not(.disabled), .button-group.outline > .gray.active.button:not(:disabled):not(.disabled) {
      box-shadow: 0 0 0 0.2rem white;
      z-index: 10;
      position: relative; }
    .button.outline.gray:not(.disabled):active, .button-group.outline > .gray.button:not(.disabled):active {
      -webkit-transform: scale(0.97);
              transform: scale(0.97); }
    .button.outline.gray.active:not(.disabled), .button-group.outline > .gray.active.button:not(.disabled) {
      color: #fff;
      background-color: #d9d9d9; }
  .button.outline.gray-darker, .button-group.outline > .gray-darker.button {
    background-color: transparent;
    color: #6c757d;
    border: 1px solid #6c757d; }
    .button.outline.gray-darker:not(:disabled):not(.disabled):focus, .button-group.outline > .gray-darker.button:not(:disabled):not(.disabled):focus, .button.outline.gray-darker:not(:disabled):not(.disabled):hover, .button-group.outline > .gray-darker.button:not(:disabled):not(.disabled):hover {
      background-color: #78828a;
      color: #fff;
      border-color: #656d75; }
    .button.outline.gray-darker:not(:disabled):not(.disabled):focus, .button-group.outline > .gray-darker.button:not(:disabled):not(.disabled):focus, .button.outline.gray-darker.active:not(:disabled):not(.disabled), .button-group.outline > .gray-darker.active.button:not(:disabled):not(.disabled) {
      box-shadow: 0 0 0 0.2rem #bcc1c6;
      z-index: 10;
      position: relative; }
    .button.outline.gray-darker:not(.disabled):active, .button-group.outline > .gray-darker.button:not(.disabled):active {
      -webkit-transform: scale(0.97);
              transform: scale(0.97); }
    .button.outline.gray-darker.active:not(.disabled), .button-group.outline > .gray-darker.active.button:not(.disabled) {
      color: #fff;
      background-color: #78828a; }
  .button.outline.light, .button-group.outline > .light.button {
    background-color: transparent;
    color: #f8f9fa;
    border: 1px solid #f8f9fa; }
    .button.outline.light:not(:disabled):not(.disabled):focus, .button-group.outline > .light.button:not(:disabled):not(.disabled):focus, .button.outline.light:not(:disabled):not(.disabled):hover, .button-group.outline > .light.button:not(:disabled):not(.disabled):hover {
      background-color: white;
      color: #fff;
      border-color: #eff1f4; }
    .button.outline.light:not(:disabled):not(.disabled):focus, .button-group.outline > .light.button:not(:disabled):not(.disabled):focus, .button.outline.light.active:not(:disabled):not(.disabled), .button-group.outline > .light.active.button:not(:disabled):not(.disabled) {
      box-shadow: 0 0 0 0.2rem white;
      z-index: 10;
      position: relative; }
    .button.outline.light:not(.disabled):active, .button-group.outline > .light.button:not(.disabled):active {
      -webkit-transform: scale(0.97);
              transform: scale(0.97); }
    .button.outline.light.active:not(.disabled), .button-group.outline > .light.active.button:not(.disabled) {
      color: #fff;
      background-color: white; }
  .button.outline.light-gray, .button-group.outline > .light-gray.button {
    background-color: transparent;
    color: #f5f5f5;
    border: 1px solid #f5f5f5; }
    .button.outline.light-gray:not(:disabled):not(.disabled):focus, .button-group.outline > .light-gray.button:not(:disabled):not(.disabled):focus, .button.outline.light-gray:not(:disabled):not(.disabled):hover, .button-group.outline > .light-gray.button:not(:disabled):not(.disabled):hover {
      background-color: white;
      color: #fff;
      border-color: #ededed; }
    .button.outline.light-gray:not(:disabled):not(.disabled):focus, .button-group.outline > .light-gray.button:not(:disabled):not(.disabled):focus, .button.outline.light-gray.active:not(:disabled):not(.disabled), .button-group.outline > .light-gray.active.button:not(:disabled):not(.disabled) {
      box-shadow: 0 0 0 0.2rem white;
      z-index: 10;
      position: relative; }
    .button.outline.light-gray:not(.disabled):active, .button-group.outline > .light-gray.button:not(.disabled):active {
      -webkit-transform: scale(0.97);
              transform: scale(0.97); }
    .button.outline.light-gray.active:not(.disabled), .button-group.outline > .light-gray.active.button:not(.disabled) {
      color: #fff;
      background-color: white; }
  .button.outline.orange, .button-group.outline > .orange.button {
    background-color: transparent;
    color: #f2791a;
    border: 1px solid #f2791a; }
    .button.outline.orange:not(:disabled):not(.disabled):focus, .button-group.outline > .orange.button:not(:disabled):not(.disabled):focus, .button.outline.orange:not(:disabled):not(.disabled):hover, .button-group.outline > .orange.button:not(:disabled):not(.disabled):hover {
      background-color: #f38732;
      color: #fff;
      border-color: #ef710e; }
    .button.outline.orange:not(:disabled):not(.disabled):focus, .button-group.outline > .orange.button:not(:disabled):not(.disabled):focus, .button.outline.orange.active:not(:disabled):not(.disabled), .button-group.outline > .orange.active.button:not(:disabled):not(.disabled) {
      box-shadow: 0 0 0 0.2rem #faceab;
      z-index: 10;
      position: relative; }
    .button.outline.orange:not(.disabled):active, .button-group.outline > .orange.button:not(.disabled):active {
      -webkit-transform: scale(0.97);
              transform: scale(0.97); }
    .button.outline.orange.active:not(.disabled), .button-group.outline > .orange.active.button:not(.disabled) {
      color: #fff;
      background-color: #f38732; }
  .button.outline.pink, .button-group.outline > .pink.button {
    background-color: transparent;
    color: #e02c92;
    border: 1px solid #e02c92; }
    .button.outline.pink:not(:disabled):not(.disabled):focus, .button-group.outline > .pink.button:not(:disabled):not(.disabled):focus, .button.outline.pink:not(:disabled):not(.disabled):hover, .button-group.outline > .pink.button:not(:disabled):not(.disabled):hover {
      background-color: #e3429d;
      color: #fff;
      border-color: #dc208b; }
    .button.outline.pink:not(:disabled):not(.disabled):focus, .button-group.outline > .pink.button:not(:disabled):not(.disabled):focus, .button.outline.pink.active:not(:disabled):not(.disabled), .button-group.outline > .pink.active.button:not(:disabled):not(.disabled) {
      box-shadow: 0 0 0 0.2rem #f4b1d7;
      z-index: 10;
      position: relative; }
    .button.outline.pink:not(.disabled):active, .button-group.outline > .pink.button:not(.disabled):active {
      -webkit-transform: scale(0.97);
              transform: scale(0.97); }
    .button.outline.pink.active:not(.disabled), .button-group.outline > .pink.active.button:not(.disabled) {
      color: #fff;
      background-color: #e3429d; }
  .button.outline.purple, .button-group.outline > .purple.button {
    background-color: transparent;
    color: #9935c8;
    border: 1px solid #9935c8; }
    .button.outline.purple:not(:disabled):not(.disabled):focus, .button-group.outline > .purple.button:not(:disabled):not(.disabled):focus, .button.outline.purple:not(:disabled):not(.disabled):hover, .button-group.outline > .purple.button:not(:disabled):not(.disabled):hover {
      background-color: #a348cf;
      color: #fff;
      border-color: #9032bc; }
    .button.outline.purple:not(:disabled):not(.disabled):focus, .button-group.outline > .purple.button:not(:disabled):not(.disabled):focus, .button.outline.purple.active:not(:disabled):not(.disabled), .button-group.outline > .purple.active.button:not(:disabled):not(.disabled) {
      box-shadow: 0 0 0 0.2rem #d6ade9;
      z-index: 10;
      position: relative; }
    .button.outline.purple:not(.disabled):active, .button-group.outline > .purple.button:not(.disabled):active {
      -webkit-transform: scale(0.97);
              transform: scale(0.97); }
    .button.outline.purple.active:not(.disabled), .button-group.outline > .purple.active.button:not(.disabled) {
      color: #fff;
      background-color: #a348cf; }
  .button.outline.red, .button-group.outline > .red.button {
    background-color: transparent;
    color: #ff350e;
    border: 1px solid #ff350e; }
    .button.outline.red:not(:disabled):not(.disabled):focus, .button-group.outline > .red.button:not(:disabled):not(.disabled):focus, .button.outline.red:not(:disabled):not(.disabled):hover, .button-group.outline > .red.button:not(:disabled):not(.disabled):hover {
      background-color: #ff4a28;
      color: #fff;
      border-color: #fe2900; }
    .button.outline.red:not(:disabled):not(.disabled):focus, .button-group.outline > .red.button:not(:disabled):not(.disabled):focus, .button.outline.red.active:not(:disabled):not(.disabled), .button-group.outline > .red.active.button:not(:disabled):not(.disabled) {
      box-shadow: 0 0 0 0.2rem #ffb5a7;
      z-index: 10;
      position: relative; }
    .button.outline.red:not(.disabled):active, .button-group.outline > .red.button:not(.disabled):active {
      -webkit-transform: scale(0.97);
              transform: scale(0.97); }
    .button.outline.red.active:not(.disabled), .button-group.outline > .red.active.button:not(.disabled) {
      color: #fff;
      background-color: #ff4a28; }
  .button.outline.yellow, .button-group.outline > .yellow.button {
    background-color: transparent;
    color: #fbbe11;
    border: 1px solid #fbbe11; }
    .button.outline.yellow:not(:disabled):not(.disabled):focus, .button-group.outline > .yellow.button:not(:disabled):not(.disabled):focus, .button.outline.yellow:not(:disabled):not(.disabled):hover, .button-group.outline > .yellow.button:not(:disabled):not(.disabled):hover {
      background-color: #fbc52a;
      color: #fff;
      border-color: #f9b904; }
    .button.outline.yellow:not(:disabled):not(.disabled):focus, .button-group.outline > .yellow.button:not(:disabled):not(.disabled):focus, .button.outline.yellow.active:not(:disabled):not(.disabled), .button-group.outline > .yellow.active.button:not(:disabled):not(.disabled) {
      box-shadow: 0 0 0 0.2rem #fee7a7;
      z-index: 10;
      position: relative; }
    .button.outline.yellow:not(.disabled):active, .button-group.outline > .yellow.button:not(.disabled):active {
      -webkit-transform: scale(0.97);
              transform: scale(0.97); }
    .button.outline.yellow.active:not(.disabled), .button-group.outline > .yellow.active.button:not(.disabled) {
      color: #fff;
      background-color: #fbc52a; }
  .button.outline.teal, .button-group.outline > .teal.button {
    background-color: transparent;
    color: #0d806d;
    border: 1px solid #0d806d; }
    .button.outline.teal:not(:disabled):not(.disabled):focus, .button-group.outline > .teal.button:not(:disabled):not(.disabled):focus, .button.outline.teal:not(:disabled):not(.disabled):hover, .button-group.outline > .teal.button:not(:disabled):not(.disabled):hover {
      background-color: #0f9781;
      color: #fff;
      border-color: #0c7261; }
    .button.outline.teal:not(:disabled):not(.disabled):focus, .button-group.outline > .teal.button:not(:disabled):not(.disabled):focus, .button.outline.teal.active:not(:disabled):not(.disabled), .button-group.outline > .teal.active.button:not(:disabled):not(.disabled) {
      box-shadow: 0 0 0 0.2rem #3bebce;
      z-index: 10;
      position: relative; }
    .button.outline.teal:not(.disabled):active, .button-group.outline > .teal.button:not(.disabled):active {
      -webkit-transform: scale(0.97);
              transform: scale(0.97); }
    .button.outline.teal.active:not(.disabled), .button-group.outline > .teal.active.button:not(.disabled) {
      color: #fff;
      background-color: #0f9781; }
  .button.outline.violet, .button-group.outline > .violet.button {
    background-color: transparent;
    color: #5f33c9;
    border: 1px solid #5f33c9; }
    .button.outline.violet:not(:disabled):not(.disabled):focus, .button-group.outline > .violet.button:not(:disabled):not(.disabled):focus, .button.outline.violet:not(:disabled):not(.disabled):hover, .button-group.outline > .violet.button:not(:disabled):not(.disabled):hover {
      background-color: #6e46d0;
      color: #fff;
      border-color: #5930bd; }
    .button.outline.violet:not(:disabled):not(.disabled):focus, .button-group.outline > .violet.button:not(:disabled):not(.disabled):focus, .button.outline.violet.active:not(:disabled):not(.disabled), .button-group.outline > .violet.active.button:not(:disabled):not(.disabled) {
      box-shadow: 0 0 0 0.2rem #beabea;
      z-index: 10;
      position: relative; }
    .button.outline.violet:not(.disabled):active, .button-group.outline > .violet.button:not(.disabled):active {
      -webkit-transform: scale(0.97);
              transform: scale(0.97); }
    .button.outline.violet.active:not(.disabled), .button-group.outline > .violet.active.button:not(.disabled) {
      color: #fff;
      background-color: #6e46d0; }
  .button.outline.white, .button-group.outline > .white.button {
    background-color: transparent;
    color: #fff;
    border: 1px solid #fff; }
    .button.outline.white:not(:disabled):not(.disabled):focus, .button-group.outline > .white.button:not(:disabled):not(.disabled):focus, .button.outline.white:not(:disabled):not(.disabled):hover, .button-group.outline > .white.button:not(:disabled):not(.disabled):hover {
      background-color: white;
      color: #fff;
      border-color: #f7f7f7; }
    .button.outline.white:not(:disabled):not(.disabled):focus, .button-group.outline > .white.button:not(:disabled):not(.disabled):focus, .button.outline.white.active:not(:disabled):not(.disabled), .button-group.outline > .white.active.button:not(:disabled):not(.disabled) {
      box-shadow: 0 0 0 0.2rem white;
      z-index: 10;
      position: relative; }
    .button.outline.white:not(.disabled):active, .button-group.outline > .white.button:not(.disabled):active {
      -webkit-transform: scale(0.97);
              transform: scale(0.97); }
    .button.outline.white.active:not(.disabled), .button-group.outline > .white.active.button:not(.disabled) {
      color: #fff;
      background-color: white; }
  .button.block {
    position: relative;
    display: block;
    width: 100%; }
    .button.block + .block {
      margin-top: 0.5rem; }
  .button + .button:not(.block), .button + .button-dropdown, .button + .dropdown {
    margin-left: 0.5rem; }
  .button.circle {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    vertical-align: middle;
    width: 2.625rem;
    height: 2.625rem;
    padding: 0;
    border-radius: 100%; }
  .button > .loader:first-child:not(:last-child) {
    margin-right: 0.5rem; }
  .button > .loader:last-child:not(:first-child) {
    margin-left: 0.5rem; }
  .button > .loader.third.small, .button > .loader.secondary.small, .button > .loader.small.third {
    vertical-align: -0.25rem; }
  .button > .svg, .button > svg, .button > .icon {
    vertical-align: -0.15em; }
    .button > .svg:first-child:not(:last-child), .button > svg:first-child:not(:last-child), .button > .icon:first-child:not(:last-child) {
      margin-right: 0.5rem; }
    .button > .svg:last-child:not(:first-child), .button > svg:last-child:not(:first-child), .button > .icon:last-child:not(:first-child) {
      margin-left: 0.5rem; }

.button-group {
  display: inline-flex;
  flex-wrap: wrap; }
  .button-group > .button {
    margin: 0 !important; }
    .button-group > .button:first-child {
      border-radius: 0.25rem 0 0 0.25rem; }
    .button-group > .button:last-child {
      border-radius: 0 0.25rem 0.25rem 0;
      border-left-width: 0; }
    .button-group > .button:not(:first-child):not(:last-child) {
      border-left-width: 0;
      border-radius: 0; }
    .button-group > .button:first-child {
      border-bottom-right-radius: 0;
      border-top-right-radius: 0;
      border-right-width: 1px !important; }
    .button-group > .button:last-child {
      border-bottom-left-radius: 0;
      border-top-left-radius: 0;
      border-left-width: 0; }
    .button-group > .button:not(:first-child):not(:last-child) {
      border-radius: 0;
      border-right-width: 1px !important;
      border-left-width: 0; }
  .button-group > .popup-ctrl {
    margin: 0 !important; }
    .button-group > .popup-ctrl:first-child > .button, .button-group > .popup-ctrl:first-child > .title > .button {
      border-bottom-right-radius: 0;
      border-top-right-radius: 0;
      border-right-width: 1px !important; }
    .button-group > .popup-ctrl:last-child > .button, .button-group > .popup-ctrl:last-child > .title > .button {
      border-bottom-left-radius: 0;
      border-top-left-radius: 0;
      border-left-width: 0; }
    .button-group > .popup-ctrl:not(:first-child):not(:last-child) > .button,
    .button-group > .popup-ctrl:not(:first-child):not(:last-child) > .title > .button {
      border-radius: 0;
      border-right-width: 1px !important;
      border-left-width: 0; }
  .button-group.block {
    display: flex;
    align-items: center;
    justify-content: center; }
    .button-group.block > .button {
      flex-grow: 1; }
  .button-group.vertical {
    flex-direction: column; }
    .button-group.vertical > .button {
      display: block;
      width: 100%; }
      .button-group.vertical > .button:first-child {
        border-radius: 0.25rem 0.25rem 0 0;
        border-bottom-width: 0; }
      .button-group.vertical > .button:last-child {
        border-left-width: 1px;
        border-radius: 0 0 0.25rem 0.25rem; }
      .button-group.vertical > .button:not(:first-child):not(:last-child) {
        border-left-width: 1px;
        border-bottom-width: 0;
        border-radius: 0; }
        .button-group.vertical > .button:not(:first-child):not(:last-child):focus, .button-group.vertical > .button:not(:first-child):not(:last-child):hover, .button-group.vertical > .button:not(:first-child):not(:last-child):active {
          border-left-width: 1px;
          border-right-width: 1px; }
  .button-group.outline > .button:first-child {
    border-radius: 0.25rem 0 0 0.25rem; }
  .button-group.outline > .button:last-child {
    border-radius: 0 0.25rem 0.25rem 0;
    border-left-width: 0; }
  .button-group.outline > .button:not(:first-child):not(:last-child) {
    border-left-width: 0;
    border-radius: 0; }

.card {
  display: inline-flex;
  flex-direction: column;
  flex-wrap: nowrap;
  width: 20rem;
  border: 1px solid #ccc;
  border-radius: 0.25rem;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.14);
  -webkit-transition: all 0.2s;
  transition: all 0.2s;
  background-color: #fff; }
  .card + .card {
    margin-left: 1rem; }
  .card.scale:focus, .card.scale:hover {
    -webkit-transform: scale(1.2, 1.2);
            transform: scale(1.2, 1.2);
    -webkit-transform-origin: center;
            transform-origin: center;
    z-index: 100;
    position: relative; }
  .card > div:first-child {
    border-top-left-radius: calc(0.25rem - 1px);
    border-top-right-radius: calc(0.25rem - 1px); }
    .card > div:first-child.card-img > .img {
      border-top-left-radius: calc(0.25rem - 1px);
      border-top-right-radius: calc(0.25rem - 1px); }
  .card > div:last-child {
    border-bottom-left-radius: calc(0.25rem - 1px);
    border-bottom-right-radius: calc(0.25rem - 1px); }
    .card > div:last-child.card-img > .img, .card > div:last-child.card-img > .overlay-title {
      border-bottom-left-radius: calc(0.25rem - 1px);
      border-bottom-right-radius: calc(0.25rem - 1px); }
  .card > div:not(:first-child):not(:last-child) {
    border-radius: 0; }
  .card .card-header {
    padding: 0.5rem 1rem; }
    .card .card-header .title {
      font-weight: 500; }
    .card .card-header.gray {
      background-color: #f5f5f5; }
  .card .card-row {
    padding: 0.5rem 1rem; }
  .card .card-body {
    padding: 0.5rem 1rem; }
  .card .card-footer {
    padding: 0.5rem 1rem; }
  .card .card-img {
    position: relative;
    min-height: 1px; }
    .card .card-img > .img {
      display: block;
      width: 100%; }
    .card .card-img > .overlay-title {
      display: block;
      padding: 0.5rem 1rem;
      position: absolute;
      color: #fff;
      bottom: 0;
      width: 100%;
      background-color: rgba(0, 0, 0, 0.4); }
      .card .card-img > .overlay-title:focus, .card .card-img > .overlay-title:hover {
        text-shadow: 1px 1px 2px #333, 0 0 25px #fff, 0 0 5px #007aff; }
  .card.block {
    display: flex;
    width: 100%; }
    .card.block .card-header, .card.block .card-body, .card.block .card-footer, .card.block .card-row {
      position: relative;
      display: block; }

.row {
  display: flex;
  flex-wrap: wrap;
  flex-grow: 1; }
  .row.justify-start {
    justify-content: flex-start; }
  .row.justify-end {
    justify-content: flex-end; }
  .row.justify-center {
    justify-content: center; }
  .row.justify-around {
    justify-content: space-around; }
  .row.justify-between {
    justify-content: space-between; }
  .row.justify-evenly {
    justify-content: space-evenly; }
  .row.align-start {
    align-items: flex-start; }
  .row.align-end {
    align-items: flex-end; }
  .row.align-center {
    align-items: center; }
  .row > [class^=col-] {
    position: relative;
    display: block;
    padding: 0 0.25rem;
    width: 100%; }
  .row > .col-1 {
    width: 8.33333%; }
  .row > .col-2 {
    width: 16.66667%; }
  .row > .col-3 {
    width: 25%; }
  .row > .col-4 {
    width: 33.33333%; }
  .row > .col-5 {
    width: 41.66667%; }
  .row > .col-6 {
    width: 50%; }
  .row > .col-7 {
    width: 58.33333%; }
  .row > .col-8 {
    width: 66.66667%; }
  .row > .col-9 {
    width: 75%; }
  .row > .col-10 {
    width: 83.33333%; }
  .row > .col-11 {
    width: 91.66667%; }
  .row > .col-12 {
    width: 100%; }
  .row > .offset-1 {
    margin-left: 8.33333%; }
  .row > .offset-2 {
    margin-left: 16.66667%; }
  .row > .offset-3 {
    margin-left: 25%; }
  .row > .offset-4 {
    margin-left: 33.33333%; }
  .row > .offset-5 {
    margin-left: 41.66667%; }
  .row > .offset-6 {
    margin-left: 50%; }
  .row > .offset-7 {
    margin-left: 58.33333%; }
  .row > .offset-8 {
    margin-left: 66.66667%; }
  .row > .offset-9 {
    margin-left: 75%; }
  .row > .offset-10 {
    margin-left: 83.33333%; }
  .row > .offset-11 {
    margin-left: 91.66667%; }
  @media screen and (min-width: 576px) {
    .row > .col-sm-1 {
      width: 8.33333%; }
    .row > .col-sm-2 {
      width: 16.66667%; }
    .row > .col-sm-3 {
      width: 25%; }
    .row > .col-sm-4 {
      width: 33.33333%; }
    .row > .col-sm-5 {
      width: 41.66667%; }
    .row > .col-sm-6 {
      width: 50%; }
    .row > .col-sm-7 {
      width: 58.33333%; }
    .row > .col-sm-8 {
      width: 66.66667%; }
    .row > .col-sm-9 {
      width: 75%; }
    .row > .col-sm-10 {
      width: 83.33333%; }
    .row > .col-sm-11 {
      width: 91.66667%; }
    .row > .col-sm-12 {
      width: 100%; }
    .row > .offset-sm-1 {
      margin-left: 8.33333%; }
    .row > .offset-sm-2 {
      margin-left: 16.66667%; }
    .row > .offset-sm-3 {
      margin-left: 25%; }
    .row > .offset-sm-4 {
      margin-left: 33.33333%; }
    .row > .offset-sm-5 {
      margin-left: 41.66667%; }
    .row > .offset-sm-6 {
      margin-left: 50%; }
    .row > .offset-sm-7 {
      margin-left: 58.33333%; }
    .row > .offset-sm-8 {
      margin-left: 66.66667%; }
    .row > .offset-sm-9 {
      margin-left: 75%; }
    .row > .offset-sm-10 {
      margin-left: 83.33333%; }
    .row > .offset-sm-11 {
      margin-left: 91.66667%; } }
  @media screen and (min-width: 768px) {
    .row > .col-md-1 {
      width: 8.33333%; }
    .row > .col-md-2 {
      width: 16.66667%; }
    .row > .col-md-3 {
      width: 25%; }
    .row > .col-md-4 {
      width: 33.33333%; }
    .row > .col-md-5 {
      width: 41.66667%; }
    .row > .col-md-6 {
      width: 50%; }
    .row > .col-md-7 {
      width: 58.33333%; }
    .row > .col-md-8 {
      width: 66.66667%; }
    .row > .col-md-9 {
      width: 75%; }
    .row > .col-md-10 {
      width: 83.33333%; }
    .row > .col-md-11 {
      width: 91.66667%; }
    .row > .col-md-12 {
      width: 100%; }
    .row > .offset-md-1 {
      margin-left: 8.33333%; }
    .row > .offset-md-2 {
      margin-left: 16.66667%; }
    .row > .offset-md-3 {
      margin-left: 25%; }
    .row > .offset-md-4 {
      margin-left: 33.33333%; }
    .row > .offset-md-5 {
      margin-left: 41.66667%; }
    .row > .offset-md-6 {
      margin-left: 50%; }
    .row > .offset-md-7 {
      margin-left: 58.33333%; }
    .row > .offset-md-8 {
      margin-left: 66.66667%; }
    .row > .offset-md-9 {
      margin-left: 75%; }
    .row > .offset-md-10 {
      margin-left: 83.33333%; }
    .row > .offset-md-11 {
      margin-left: 91.66667%; } }
  @media screen and (min-width: 992px) {
    .row > .col-lg-1 {
      width: 8.33333%; }
    .row > .col-lg-2 {
      width: 16.66667%; }
    .row > .col-lg-3 {
      width: 25%; }
    .row > .col-lg-4 {
      width: 33.33333%; }
    .row > .col-lg-5 {
      width: 41.66667%; }
    .row > .col-lg-6 {
      width: 50%; }
    .row > .col-lg-7 {
      width: 58.33333%; }
    .row > .col-lg-8 {
      width: 66.66667%; }
    .row > .col-lg-9 {
      width: 75%; }
    .row > .col-lg-10 {
      width: 83.33333%; }
    .row > .col-lg-11 {
      width: 91.66667%; }
    .row > .col-lg-12 {
      width: 100%; }
    .row > .offset-lg-1 {
      margin-left: 8.33333%; }
    .row > .offset-lg-2 {
      margin-left: 16.66667%; }
    .row > .offset-lg-3 {
      margin-left: 25%; }
    .row > .offset-lg-4 {
      margin-left: 33.33333%; }
    .row > .offset-lg-5 {
      margin-left: 41.66667%; }
    .row > .offset-lg-6 {
      margin-left: 50%; }
    .row > .offset-lg-7 {
      margin-left: 58.33333%; }
    .row > .offset-lg-8 {
      margin-left: 66.66667%; }
    .row > .offset-lg-9 {
      margin-left: 75%; }
    .row > .offset-lg-10 {
      margin-left: 83.33333%; }
    .row > .offset-lg-11 {
      margin-left: 91.66667%; } }
  @media screen and (min-width: null) {
    .row > .col-xl-1 {
      width: 8.33333%; }
    .row > .col-xl-2 {
      width: 16.66667%; }
    .row > .col-xl-3 {
      width: 25%; }
    .row > .col-xl-4 {
      width: 33.33333%; }
    .row > .col-xl-5 {
      width: 41.66667%; }
    .row > .col-xl-6 {
      width: 50%; }
    .row > .col-xl-7 {
      width: 58.33333%; }
    .row > .col-xl-8 {
      width: 66.66667%; }
    .row > .col-xl-9 {
      width: 75%; }
    .row > .col-xl-10 {
      width: 83.33333%; }
    .row > .col-xl-11 {
      width: 91.66667%; }
    .row > .col-xl-12 {
      width: 100%; }
    .row > .offset-xl-1 {
      margin-left: 8.33333%; }
    .row > .offset-xl-2 {
      margin-left: 16.66667%; }
    .row > .offset-xl-3 {
      margin-left: 25%; }
    .row > .offset-xl-4 {
      margin-left: 33.33333%; }
    .row > .offset-xl-5 {
      margin-left: 41.66667%; }
    .row > .offset-xl-6 {
      margin-left: 50%; }
    .row > .offset-xl-7 {
      margin-left: 58.33333%; }
    .row > .offset-xl-8 {
      margin-left: 66.66667%; }
    .row > .offset-xl-9 {
      margin-left: 75%; }
    .row > .offset-xl-10 {
      margin-left: 83.33333%; }
    .row > .offset-xl-11 {
      margin-left: 91.66667%; } }
  .row .order-1 {
    order: 1; }
  .row .order-2 {
    order: 2; }
  .row .order-3 {
    order: 3; }
  .row .order-4 {
    order: 4; }
  .row .order-5 {
    order: 5; }
  .row .order-6 {
    order: 6; }
  .row .order-7 {
    order: 7; }
  .row .order-8 {
    order: 8; }
  .row .order-9 {
    order: 9; }
  .row .order-10 {
    order: 10; }
  .row .order-11 {
    order: 11; }
  .row .order-12 {
    order: 12; }

.layout, .layout-content, .layout-footer {
  display: flex;
  flex-direction: column;
  flex: auto; }
  .layout > .layout-header > .navbar, .layout > .layout-header > .menu, .layout-content > .layout-header > .navbar, .layout-content > .layout-header > .menu, .layout-footer > .layout-header > .navbar, .layout-footer > .layout-header > .menu {
    border-radius: 0; }

.layout-footer {
  display: flex;
  align-items: center;
  justify-content: center;
  color: #6c757d;
  font-size: 0.8em;
  flex: 0 1 3rem; }

.layout-header.fixed, .layout-footer.fixed {
  position: fixed;
  z-index: 100;
  border-radius: 0;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.14);
  width: 100%; }
  .layout-header.fixed.top, .popover .layout-header.fixed.popover-arrow.top-left, .tooltip .layout-header.fixed.popover-arrow.top-left, .popover .layout-header.fixed.popover-arrow.top-right, .tooltip .layout-header.fixed.popover-arrow.top-right, .layout-footer.fixed.top, .popover .layout-footer.fixed.popover-arrow.top-left, .tooltip .layout-footer.fixed.popover-arrow.top-left, .popover .layout-footer.fixed.popover-arrow.top-right, .tooltip .layout-footer.fixed.popover-arrow.top-right {
    top: 0; }
  .layout-header.fixed.bottom, .popover .layout-header.fixed.popover-arrow.bottom-left, .tooltip .layout-header.fixed.popover-arrow.bottom-left, .popover .layout-header.fixed.popover-arrow.bottom-right, .tooltip .layout-header.fixed.popover-arrow.bottom-right, .layout-footer.fixed.bottom, .popover .layout-footer.fixed.popover-arrow.bottom-left, .tooltip .layout-footer.fixed.popover-arrow.bottom-left, .popover .layout-footer.fixed.popover-arrow.bottom-right, .tooltip .layout-footer.fixed.popover-arrow.bottom-right {
    bottom: 0; }

.layout-split {
  display: flex;
  flex-direction: row;
  flex: auto; }

.layout-slider {
  display: flex;
  width: 20%;
  flex-direction: column; }
  .layout-slider .menu {
    border-radius: 0; }
  .layout-slider.collapsed {
    width: 5rem;
    max-width: 5rem;
    -webkit-transition: all .3s;
    transition: all .3s; }
    .layout-slider.collapsed .menu .icon + span {
      opacity: 0;
      max-width: 0; }

.dialog > .dialog-container > .content > .header, .dialog > .dialog-container > .content > .footer {
  min-height: 1rem;
  padding: 0.5rem 1rem; }

.dialog > .dialog-container > .content > .body {
  min-height: 1rem;
  padding: 1rem 1rem; }

@-webkit-keyframes show-dialog-align-center {
  0% {
    visibility: visible;
    opacity: 0;
    -webkit-transform: scale(0);
            transform: scale(0); }
  100% {
    opacity: 1;
    -webkit-transform: scale(1);
            transform: scale(1); } }

@keyframes show-dialog-align-center {
  0% {
    visibility: visible;
    opacity: 0;
    -webkit-transform: scale(0);
            transform: scale(0); }
  100% {
    opacity: 1;
    -webkit-transform: scale(1);
            transform: scale(1); } }

@-webkit-keyframes hide-dialog-align-center {
  0% {
    visibility: visible;
    opacity: 1;
    -webkit-transform: scale(1);
            transform: scale(1); }
  100% {
    visibility: hidden;
    opacity: 0;
    -webkit-transform: scale(0.2);
            transform: scale(0.2); } }

@keyframes hide-dialog-align-center {
  0% {
    visibility: visible;
    opacity: 1;
    -webkit-transform: scale(1);
            transform: scale(1); }
  100% {
    visibility: hidden;
    opacity: 0;
    -webkit-transform: scale(0.2);
            transform: scale(0.2); } }

@-webkit-keyframes show-dialog-align-top {
  0% {
    visibility: visible;
    opacity: 0;
    -webkit-transform: translateY(-100%);
            transform: translateY(-100%); }
  100% {
    opacity: 1;
    -webkit-transform: translateY(8vw);
            transform: translateY(8vw); } }

@keyframes show-dialog-align-top {
  0% {
    visibility: visible;
    opacity: 0;
    -webkit-transform: translateY(-100%);
            transform: translateY(-100%); }
  100% {
    opacity: 1;
    -webkit-transform: translateY(8vw);
            transform: translateY(8vw); } }

@-webkit-keyframes hide-dialog-align-top {
  0% {
    visibility: visible;
    opacity: 1;
    -webkit-transform: translateY(8vw);
            transform: translateY(8vw); }
  100% {
    visibility: hidden;
    opacity: 0;
    -webkit-transform: translateY(-100%);
            transform: translateY(-100%); } }

@keyframes hide-dialog-align-top {
  0% {
    visibility: visible;
    opacity: 1;
    -webkit-transform: translateY(8vw);
            transform: translateY(8vw); }
  100% {
    visibility: hidden;
    opacity: 0;
    -webkit-transform: translateY(-100%);
            transform: translateY(-100%); } }

.dialog {
  background: transparent;
  z-index: 1000;
  visibility: hidden;
  opacity: 0; }
  .dialog > .dialog-container {
    position: absolute;
    width: 100%; }
    .dialog > .dialog-container > .content {
      position: relative;
      margin: 1rem auto;
      border: none;
      width: 90%;
      -webkit-transform-origin: center;
              transform-origin: center;
      min-height: 1rem;
      z-index: 1000;
      background-color: #fff;
      border-radius: 0.25rem;
      box-shadow: 0 3px 10px rgba(0, 0, 0, 0.14); }
      .dialog > .dialog-container > .content > .header {
        cursor: -webkit-grab;
        cursor: grab;
        font-size: 1.25rem;
        font-weight: 500; }
        .dialog > .dialog-container > .content > .header:active {
          cursor: -webkit-grabbing;
          cursor: grabbing; }
        .dialog > .dialog-container > .content > .header > .title {
          float: left; }
        .dialog > .dialog-container > .content > .header > .icon {
          float: right;
          font-size: 1.5rem;
          color: rgba(0, 0, 0, 0.4);
          cursor: pointer; }
          .dialog > .dialog-container > .content > .header > .icon:hover, .dialog > .dialog-container > .content > .header > .icon:focus {
            color: black; }
      .dialog > .dialog-container > .content > .body {
        border-left-width: 0;
        border-right-width: 0; }
      .dialog > .dialog-container > .content > .footer {
        display: flex;
        justify-content: flex-end;
        border-radius: 0 0 calc(0.25rem - 1px) calc(0.25rem - 1px); }
  .dialog.align-top > .dialog-container {
    -webkit-transform: translateY(8vw);
            transform: translateY(8vw); }
  .dialog.align-top.active > .dialog-container {
    -webkit-animation: show-dialog-align-top 0.4s;
            animation: show-dialog-align-top 0.4s;
    -ms-transform: show-dialog-align-top 0.4s;
    -webkit-transition: all 0.4s;
    transition: all 0.4s; }
  .dialog.align-top.inactive > .dialog-container {
    -webkit-animation: hide-dialog-align-top 0.4s;
            animation: hide-dialog-align-top 0.4s;
    -ms-transform: hide-dialog-align-top 0.4s;
    -webkit-transition: all 0.4s;
    transition: all 0.4s; }
  .dialog.align-center {
    display: flex;
    align-items: center; }
    .dialog.align-center.active > .dialog-container > .content {
      -webkit-animation: show-dialog-align-center 0.4s;
              animation: show-dialog-align-center 0.4s;
      -webkit-transition: all 0.4s;
      transition: all 0.4s; }
    .dialog.align-center.inactive > .dialog-container > .content {
      -webkit-animation: hide-dialog-align-center 0.4s;
              animation: hide-dialog-align-center 0.4s;
      -webkit-transition: all 0.4s;
      transition: all 0.4s; }
  .dialog.simple {
    background-color: rgba(0, 0, 0, 0.7); }
    .dialog.simple > .dialog-container > .content {
      border-width: 0;
      box-shadow: none;
      color: #fff;
      background-color: transparent; }
      .dialog.simple > .dialog-container > .content > .header, .dialog.simple > .dialog-container > .content > .body, .dialog.simple > .dialog-container > .content > .footer {
        border-width: 0;
        border-radius: 0;
        color: inherit; }
      .dialog.simple > .dialog-container > .content > .header > .title:hover, .dialog.simple > .dialog-container > .content > .header > .title:focus {
        text-shadow: 1px 1px 2px #333, 0 0 25px #fff, 0 0 5px #007aff; }
      .dialog.simple > .dialog-container > .content > .header > .icon {
        color: #fff; }
        .dialog.simple > .dialog-container > .content > .header > .icon:hover, .dialog.simple > .dialog-container > .content > .header > .icon:focus {
          color: #fff;
          text-shadow: 1px 1px 2px #333, 0 0 25px #fff, 0 0 5px #007aff; }
      .dialog.simple > .dialog-container > .content > .footer {
        background: transparent; }
  .dialog.primary > .dialog-container > .content > .header {
    background-color: #007aff;
    color: #fff;
    border-radius: calc(0.25rem - 1px) calc(0.25rem - 1px) 0 0; }
    .dialog.primary > .dialog-container > .content > .header > .title:hover, .dialog.primary > .dialog-container > .content > .header > .title:focus {
      text-shadow: 1px 1px 2px #333, 0 0 25px #fff, 0 0 5px #007aff; }
    .dialog.primary > .dialog-container > .content > .header > .icon {
      color: #fff; }
      .dialog.primary > .dialog-container > .content > .header > .icon:hover, .dialog.primary > .dialog-container > .content > .header > .icon:focus {
        color: #fff;
        text-shadow: 1px 1px 2px #333, 0 0 25px #fff, 0 0 5px #007aff; }
  .dialog.primary > .dialog-container > .content > .body {
    border-top: 1px solid #ccc;
    border-bottom: 1px solid #ccc; }
  .dialog.primary > .dialog-container > .content > .footer {
    background-color: #f5f5f5; }

.navbar {
  display: flex;
  width: 100%;
  justify-content: flex-start;
  border-radius: 0.25rem;
  background-color: #f5f5f5;
  margin-bottom: 0;
  flex-wrap: wrap;
  line-height: 3.5rem; }
  .navbar > .title {
    display: flex;
    align-items: center;
    color: #333;
    padding: 0 0.5rem 0 1rem;
    font-weight: 500; }
    .navbar > .title .dropdown, .navbar > .title .button-dropdown {
      border: none; }
      .navbar > .title .dropdown > .title, .navbar > .title .dropdown > .info, .navbar > .title .button-dropdown > .title, .navbar > .title .button-dropdown > .info {
        color: #fff; }
        .navbar > .title .dropdown > .title .button, .navbar > .title .dropdown > .info .button, .navbar > .title .button-dropdown > .title .button, .navbar > .title .button-dropdown > .info .button {
          color: #fff;
          border: none; }
      .navbar > .title .dropdown > .menu, .navbar > .title .button-dropdown > .menu {
        color: #000000; }
    .navbar > .title > .title-text {
      margin-left: .5rem; }
  .navbar .navbar-switch {
    border-width: 0;
    background: transparent;
    font-size: 1.5rem;
    padding: 0.5rem; }
    .navbar .navbar-switch:focus, .navbar .navbar-switch:hover {
      box-shadow: 0px 0px 2px 0 rgba(0, 0, 0, 0.45); }
  .navbar > .list {
    display: flex;
    align-items: center;
    flex: 1 1 auto;
    padding: 0 1rem 0 1rem; }
    .navbar > .list.align-right {
      justify-content: flex-end; }
    .navbar > .list.align-left {
      justify-content: flex-start; }
    .navbar > .list.align-center {
      justify-content: center; }
    .navbar > .list > .item {
      display: flex;
      justify-content: center;
      position: relative;
      display: flex;
      line-height: 3.5rem;
      cursor: pointer;
      align-items: center;
      color: #999999;
      font-weight: 500;
      padding: 0 0.5rem;
      min-width: 5rem;
      -webkit-transition: all 0.2s;
      transition: all 0.2s; }
      .navbar > .list > .item .dropdown, .navbar > .list > .item .button-dropdown {
        border: none; }
        .navbar > .list > .item .dropdown > .title, .navbar > .list > .item .dropdown > .info, .navbar > .list > .item .button-dropdown > .title, .navbar > .list > .item .button-dropdown > .info {
          color: #fff; }
          .navbar > .list > .item .dropdown > .title .button, .navbar > .list > .item .dropdown > .info .button, .navbar > .list > .item .button-dropdown > .title .button, .navbar > .list > .item .button-dropdown > .info .button {
            color: #fff;
            border: none; }
        .navbar > .list > .item .dropdown > .menu, .navbar > .list > .item .button-dropdown > .menu {
          color: #000000; }
      .navbar > .list > .item.with-bar.active:after, .navbar > .list > .item.with-bar:focus:after, .navbar > .list > .item.with-bar:hover:after {
        position: absolute;
        display: block;
        left: 0;
        bottom: 0;
        content: '';
        height: 0.3125rem;
        width: 100%;
        background-color: #49b847;
        -webkit-transition: all 0.5s;
        transition: all 0.5s;
        -webkit-animation: change-width-smoothly 0.3s;
                animation: change-width-smoothly 0.3s; }
      .navbar > .list > .item.block {
        height: 100%; }
      .navbar > .list > .item.with-bg.active {
        background-color: gainsboro; }
      .navbar > .list > .item.with-bg:focus, .navbar > .list > .item.with-bg:hover {
        background-color: #e8e8e8; }
      .navbar > .list > .item.active, .navbar > .list > .item:focus, .navbar > .list > .item:hover {
        color: #333; }
  .navbar.expand > .list {
    display: flex;
    -webkit-transition: all 0.2s ease-in-out;
    transition: all 0.2s ease-in-out; }
  .navbar.fixed {
    position: fixed;
    z-index: 100;
    border-radius: 0;
    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.14); }
    .navbar.fixed.top, .popover .navbar.fixed.popover-arrow.top-left, .tooltip .navbar.fixed.popover-arrow.top-left, .popover .navbar.fixed.popover-arrow.top-right, .tooltip .navbar.fixed.popover-arrow.top-right {
      top: 0; }
    .navbar.fixed.bottom, .popover .navbar.fixed.popover-arrow.bottom-left, .tooltip .navbar.fixed.popover-arrow.bottom-left, .popover .navbar.fixed.popover-arrow.bottom-right, .tooltip .navbar.fixed.popover-arrow.bottom-right {
      bottom: 0; }
  .navbar.primary {
    background-color: #3d8bea; }
    .navbar.primary > .title {
      color: #fff; }
    .navbar.primary .navbar-switch {
      color: #fff;
      border-color: #fff; }
      .navbar.primary .navbar-switch:focus, .navbar.primary .navbar-switch:hover {
        box-shadow: 0px 0px 2px 0 #fff; }
    .navbar.primary > .list > .item {
      color: #e6e6e6; }
      .navbar.primary > .list > .item.active, .navbar.primary > .list > .item:hover {
        color: #fff; }
      .navbar.primary > .list > .item.with-bg.active {
        background-color: #62a1ee; }
      .navbar.primary > .list > .item.with-bg:focus, .navbar.primary > .list > .item.with-bg:hover {
        background-color: #5499ec; }

@media screen and (min-width: 768px) {
  .navbar {
    flex-direction: row; }
    .navbar .navbar-switch {
      display: none; }
    .navbar > .list {
      display: flex;
      flex-direction: row; } }

@media screen and (max-width: 768px) {
  .navbar {
    flex-direction: column; }
    .navbar .navbar-switch {
      display: inline-flex; }
    .navbar > .list {
      display: none;
      flex-direction: column;
      align-items: flex-start;
      padding: 0; }
      .navbar > .list > .item {
        align-items: flex-start;
        justify-content: flex-start;
        width: 100%; } }

.submenu, .menu {
  border-radius: 0.25rem;
  display: flex;
  list-style: none;
  flex-direction: column;
  align-items: stretch;
  position: relative; }
  .submenu.with-box, .with-box.menu {
    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.14); }
  .submenu.close > .menu-header:after, .close.menu > .menu-header:after {
    -webkit-transform: rotate(90deg);
            transform: rotate(90deg);
    -webkit-transform-origin: center;
            transform-origin: center; }
  .submenu.close > .menu-list, .close.menu > .menu-list {
    display: none; }
  .submenu > .menu-list, .menu > .menu-list {
    -webkit-transition: all 0.2s linear;
    transition: all 0.2s linear;
    background: #fff; }
    .submenu > .menu-list > .menu-item, .menu > .menu-list > .menu-item {
      display: flex;
      align-items: center;
      position: relative;
      line-height: 1.5rem;
      padding: 0.5rem 1rem 0.5rem 1rem;
      white-space: nowrap;
      cursor: pointer;
      border: none;
      min-width: 8rem;
      -webkit-transition: -webkit-transition;
      transition: -webkit-transition;
      transition: transition;
      transition: transition, -webkit-transition;
      /*
            > .icon {
              @include child-margin($menu-icon-margin-right);
            }*/ }
      .submenu > .menu-list > .menu-item:not(.disabled):focus, .menu > .menu-list > .menu-item:not(.disabled):focus, .submenu > .menu-list > .menu-item:not(.disabled):hover, .menu > .menu-list > .menu-item:not(.disabled):hover {
        color: #007aff; }
        .submenu > .menu-list > .menu-item:not(.disabled):focus.with-box, .menu > .menu-list > .menu-item:not(.disabled):focus.with-box, .submenu > .menu-list > .menu-item:not(.disabled):hover.with-box, .menu > .menu-list > .menu-item:not(.disabled):hover.with-box {
          font-weight: 500; }
        .submenu > .menu-list > .menu-item:not(.disabled):focus.with-bg, .menu > .menu-list > .menu-item:not(.disabled):focus.with-bg, .submenu > .menu-list > .menu-item:not(.disabled):hover.with-bg, .menu > .menu-list > .menu-item:not(.disabled):hover.with-bg {
          background-color: #fafafa; }
      .submenu > .menu-list > .menu-item:not(.disabled).active, .menu > .menu-list > .menu-item:not(.disabled).active {
        color: #007aff; }
        .submenu > .menu-list > .menu-item:not(.disabled).active.with-box, .menu > .menu-list > .menu-item:not(.disabled).active.with-box {
          font-weight: 500; }
        .submenu > .menu-list > .menu-item:not(.disabled).active.with-bg, .menu > .menu-list > .menu-item:not(.disabled).active.with-bg {
          background-color: #fafafa; }
      .submenu > .menu-list > .menu-item:not(.disabled).active.with-bottom-bar:after, .menu > .menu-list > .menu-item:not(.disabled).active.with-bottom-bar:after {
        position: absolute;
        display: block;
        border-radius: 50%;
        left: 0;
        top: calc(100% - 0.1875rem);
        content: "";
        height: 0.1875rem;
        width: 100%;
        background-color: #007aff;
        -webkit-transition: width 0.5s;
        transition: width 0.5s;
        -webkit-animation: change-width-smoothly 0.3s;
                animation: change-width-smoothly 0.3s; }
      .submenu > .menu-list > .menu-item:disabled, .menu > .menu-list > .menu-item:disabled, .submenu > .menu-list > .menu-item.disabled, .menu > .menu-list > .menu-item.disabled {
        color: #333;
        background-color: transparent; }
      .submenu > .menu-list > .menu-item > .left, .menu > .menu-list > .menu-item > .left, .submenu > .menu-list > .menu-item > .right, .menu > .menu-list > .menu-item > .right {
        flex: 0 1 1em;
        display: flex;
        align-items: center;
        justify-content: center; }
      .submenu > .menu-list > .menu-item > .center, .menu > .menu-list > .menu-item > .center {
        flex: 1 0 auto;
        padding: 0 0.25rem; }
  .submenu .menu-header, .menu .menu-header {
    cursor: pointer;
    padding: 0.5rem 1rem;
    font-weight: 500;
    position: relative; }
    .submenu .menu-header > .icon:first-child:not(:last-child), .menu .menu-header > .icon:first-child:not(:last-child) {
      margin-right: 0.5rem; }
    .submenu .menu-header > .icon:last-child:not(:first-child), .menu .menu-header > .icon:last-child:not(:first-child) {
      margin-left: 0.5rem; }
    .submenu .menu-header:disabled, .menu .menu-header:disabled, .submenu .menu-header.disabled, .menu .menu-header.disabled {
      color: #333;
      background-color: transparent; }
  .submenu:not(.float) .menu-header:after, .menu:not(.float) .menu-header:after {
    content: '';
    width: 0;
    height: 0;
    vertical-align: middle;
    display: inline-block;
    border: 4px solid transparent;
    -webkit-transition: -webkit-transform .4s ease-in-out;
    transition: -webkit-transform .4s ease-in-out;
    transition: transform .4s ease-in-out;
    transition: transform .4s ease-in-out, -webkit-transform .4s ease-in-out;
    border-top-color: #acacac;
    position: absolute;
    right: 0.5rem;
    top: calc(50% - 2px); }
  .submenu.block, .block.menu {
    display: flex;
    width: 100%; }

.menu {
  display: inline-flex;
  /**
  当menu中的嵌套不确定时,如何设置border-radius将会会相当地复杂，
  通常的做法就是menu上下留白，不在子item中设置border-radius,如此可以极大地简化实现难度
   */
  padding: 1px 0; }
  .menu.with-border {
    border: 1px solid #ccc; }
  .menu.simple > .divider {
    display: none; }
  .menu.float {
    flex-direction: row;
    padding: 0; }
    .menu.float > .submenu .menu-header, .menu.float > .menu .menu-header {
      flex: 0 0 auto;
      align-items: center;
      flex-direction: row;
      -webkit-transition: all 0.3s;
      transition: all 0.3s; }
      .menu.float > .submenu .menu-header:after, .menu.float > .menu .menu-header:after {
        content: none;
        border: none; }
    .menu.float > .submenu > .menu-list, .menu.float > .menu > .menu-list {
      display: none;
      flex-direction: column;
      position: absolute;
      z-index: 100;
      left: 0;
      top: 2.625rem;
      background-color: #fff;
      box-shadow: 0 3px 10px rgba(0, 0, 0, 0.14); }
    .menu.float > .submenu.active > .menu-header, .menu.float > .active.menu > .menu-header {
      color: #007aff; }
      .menu.float > .submenu.active > .menu-header:after, .menu.float > .active.menu > .menu-header:after {
        position: absolute;
        display: block;
        border-radius: 50%;
        left: 0;
        top: calc(100% - 0.1875rem);
        content: "";
        height: 0.1875rem;
        width: 100%;
        background-color: #007aff;
        -webkit-transition: width 0.5s;
        transition: width 0.5s;
        -webkit-animation: change-width-smoothly 0.3s;
                animation: change-width-smoothly 0.3s; }
    .menu.float > .submenu.active > .menu-list, .menu.float > .active.menu > .menu-list {
      display: block;
      -webkit-animation: show-menu-list 0.5s;
              animation: show-menu-list 0.5s; }
    .menu.float > .menu-list {
      display: flex;
      flex: 1 0 100%;
      border-radius: calc(0.25rem - 1px); }
      .menu.float > .menu-list > .menu-item {
        min-width: 4rem; }
        .menu.float > .menu-list > .menu-item:first-child {
          border-top-left-radius: calc(0.25rem - 1px);
          border-bottom-left-radius: calc(0.25rem - 1px); }
        .menu.float > .menu-list > .menu-item:last-child {
          border-top-right-radius: calc(0.25rem - 1px);
          border-bottom-right-radius: calc(0.25rem - 1px); }
        .menu.float > .menu-list > .menu-item.right {
          flex-grow: 1;
          text-align: right;
          justify-content: flex-end; }
        .menu.float > .menu-list > .menu-item.left {
          flex-grow: 1; }
    .menu.float > .divider {
      display: none; }
      .menu.float > .divider + .menu-list > .menu-item {
        border-left: 1px solid #ccc; }
  .menu.primary .menu-list > .menu-item:not(.disabled):focus, .menu.primary .menu-list > .menu-item:not(.disabled):hover {
    color: #3395ff; }
  .menu.primary .menu-list > .menu-item.active {
    background-color: #cce4ff;
    border-right: 3px solid #007aff;
    margin-right: -1px; }
  .menu.dark, .menu.dark .submenu, .menu.dark .menu {
    background-color: #000c17;
    color: #b3b3b3;
    border: none; }
    .menu.dark > .menu-list, .menu.dark .submenu > .menu-list, .menu.dark .menu > .menu-list {
      background-color: inherit; }
    .menu.dark .menu-header, .menu.dark .submenu .menu-header, .menu.dark .menu .menu-header {
      background-color: #00192D;
      color: #e6e6e6;
      -webkit-transition: all 0.2s;
      transition: all 0.2s; }
    .menu.dark > .menu-list > .menu-item.disabled, .menu.dark .submenu > .menu-list > .menu-item.disabled, .menu.dark .menu > .menu-list > .menu-item.disabled {
      color: #999999; }
    .menu.dark > .menu-list > .menu-item:not(.disabled):focus, .menu.dark > .menu-list > .menu-item:not(.disabled):hover, .menu.dark .submenu > .menu-list > .menu-item:not(.disabled):focus, .menu.dark .menu > .menu-list > .menu-item:not(.disabled):focus, .menu.dark .submenu > .menu-list > .menu-item:not(.disabled):hover, .menu.dark .menu > .menu-list > .menu-item:not(.disabled):hover {
      color: #fff;
      text-shadow: 1px 1px 2px #333, 0 0 25px #fff, 0 0 5px #007aff; }
    .menu.dark > .menu-list > .menu-item.active, .menu.dark .submenu > .menu-list > .menu-item.active, .menu.dark .menu > .menu-list > .menu-item.active {
      background-color: #007aff;
      color: #fff;
      text-shadow: 1px 1px 2px #333, 0 0 25px #fff, 0 0 5px #007aff; }

.divider {
  display: block;
  width: 100%;
  position: relative;
  height: 1px;
  background-color: #ccc; }
  .divider.inverted {
    background-color: #fff; }
  .divider.vertical {
    border-left: 1px #ccc solid;
    height: 100%;
    width: 0;
    background-color: inherit; }

.tab {
  display: flex;
  width: 100%;
  flex-direction: column;
  margin-bottom: 0.5rem; }
  .tab > .menu {
    position: relative;
    display: block; }
    .tab > .menu > .item.disabled {
      background-color: transparent !important; }
    .tab > .menu.top, .popover .tab > .menu.popover-arrow.top-left, .tooltip .tab > .menu.popover-arrow.top-left, .popover .tab > .menu.popover-arrow.top-right, .tooltip .tab > .menu.popover-arrow.top-right {
      border-left-width: 0;
      border-top-width: 0;
      border-right-width: 0;
      flex-direction: row; }
      .tab > .menu.top > .item, .popover .tab > .menu.popover-arrow.top-left > .item, .tooltip .tab > .menu.popover-arrow.top-left > .item, .popover .tab > .menu.popover-arrow.top-right > .item, .tooltip .tab > .menu.popover-arrow.top-right > .item {
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 0.25rem 0.25rem 0 0; }
        .tab > .menu.top > .item.active, .popover .tab > .menu.popover-arrow.top-left > .item.active, .tooltip .tab > .menu.popover-arrow.top-left > .item.active, .popover .tab > .menu.popover-arrow.top-right > .item.active, .tooltip .tab > .menu.popover-arrow.top-right > .item.active {
          margin-bottom: -1px;
          background-color: transparent;
          border: 1px solid #ccc;
          border-bottom-color: #fff; }
      .tab > .menu.top.nav-inverted, .popover .tab > .menu.nav-inverted.popover-arrow.top-left, .tooltip .tab > .menu.nav-inverted.popover-arrow.top-left, .popover .tab > .menu.nav-inverted.popover-arrow.top-right, .tooltip .tab > .menu.nav-inverted.popover-arrow.top-right {
        border-width: 0; }
        .tab > .menu.top.nav-inverted > .item, .popover .tab > .menu.nav-inverted.popover-arrow.top-left > .item, .tooltip .tab > .menu.nav-inverted.popover-arrow.top-left > .item, .popover .tab > .menu.nav-inverted.popover-arrow.top-right > .item, .tooltip .tab > .menu.nav-inverted.popover-arrow.top-right > .item {
          border-width: 0;
          -webkit-transition: all 0.2s;
          transition: all 0.2s; }
          .tab > .menu.top.nav-inverted > .item.active, .popover .tab > .menu.nav-inverted.popover-arrow.top-left > .item.active, .tooltip .tab > .menu.nav-inverted.popover-arrow.top-left > .item.active, .popover .tab > .menu.nav-inverted.popover-arrow.top-right > .item.active, .tooltip .tab > .menu.nav-inverted.popover-arrow.top-right > .item.active {
            border-style: inset;
            border-bottom: 2px solid #ccc; }
    .tab > .menu.left {
      border-left-width: 0;
      border-top-width: 0;
      border-bottom-width: 0; }
      .tab > .menu.left > .item {
        display: block;
        border-radius: 0.25rem 0 0 0.25rem; }
        .tab > .menu.left > .item.active {
          margin-right: -1px;
          background-color: transparent;
          border: 1px solid #ccc;
          border-right-color: #fff; }
    .tab > .menu.bottom, .popover .tab > .menu.popover-arrow.bottom-left, .tooltip .tab > .menu.popover-arrow.bottom-left, .popover .tab > .menu.popover-arrow.bottom-right, .tooltip .tab > .menu.popover-arrow.bottom-right {
      border-left-width: 0;
      border-right-width: 0;
      border-bottom-width: 0; }
      .tab > .menu.bottom > .item, .popover .tab > .menu.popover-arrow.bottom-left > .item, .tooltip .tab > .menu.popover-arrow.bottom-left > .item, .popover .tab > .menu.popover-arrow.bottom-right > .item, .tooltip .tab > .menu.popover-arrow.bottom-right > .item {
        display: inline-block;
        float: left;
        border-radius: 0 0 0.25rem 0.25rem; }
        .tab > .menu.bottom > .item.active, .popover .tab > .menu.popover-arrow.bottom-left > .item.active, .tooltip .tab > .menu.popover-arrow.bottom-left > .item.active, .popover .tab > .menu.popover-arrow.bottom-right > .item.active, .tooltip .tab > .menu.popover-arrow.bottom-right > .item.active {
          margin-top: -1px;
          background-color: transparent;
          border: 1px solid #ccc;
          border-top-color: #fff; }
    .tab > .menu.right {
      border-top-width: 0;
      border-right-width: 0;
      border-bottom-width: 0; }
      .tab > .menu.right > .item {
        display: block;
        border-radius: 0 0.25rem 0.25rem 0; }
        .tab > .menu.right > .item.active {
          margin-left: -1px;
          background-color: transparent;
          border: 1px solid #ccc;
          border-left-color: #fff; }

.popover .popover-arrow.top, .tooltip .popover-arrow.top, .popover .popover-arrow.top-left, .tooltip .popover-arrow.top-left, .popover .popover-arrow.top-right, .tooltip .popover-arrow.top-right, .popover .popover-arrow.top::after, .tooltip .popover-arrow.top::after, .popover .popover-arrow.top-left::after, .tooltip .popover-arrow.top-left::after, .popover .popover-arrow.top-right::after, .tooltip .popover-arrow.top-right::after, .popover .popover-arrow.bottom, .tooltip .popover-arrow.bottom, .popover .popover-arrow.bottom-left, .tooltip .popover-arrow.bottom-left, .popover .popover-arrow.bottom-right, .tooltip .popover-arrow.bottom-right, .popover .popover-arrow.bottom::after, .tooltip .popover-arrow.bottom::after, .popover .popover-arrow.bottom-left::after, .tooltip .popover-arrow.bottom-left::after, .popover .popover-arrow.bottom-right::after, .tooltip .popover-arrow.bottom-right::after, .popover .popover-arrow.left, .tooltip .popover-arrow.left, .popover .popover-arrow.left::after, .tooltip .popover-arrow.left::after, .popover .popover-arrow.right, .tooltip .popover-arrow.right, .popover .popover-arrow.right::after, .tooltip .popover-arrow.right::after {
  position: absolute;
  display: inline-block;
  width: 0;
  height: 0;
  border: 0.5rem solid transparent;
  z-index: 101; }

.popover, .tooltip {
  position: relative;
  background-color: #fff;
  border-radius: 0.25rem; }
  .popover > .card, .tooltip > .card {
    position: relative; }
    .popover > .card > .card-body, .tooltip > .card > .card-body {
      min-height: 1rem; }
  .popover .popover-arrow.top, .tooltip .popover-arrow.top, .popover .popover-arrow.top-left, .tooltip .popover-arrow.top-left, .popover .popover-arrow.top-right, .tooltip .popover-arrow.top-right {
    left: 50%;
    top: 100%;
    margin-left: -0.5rem;
    border-bottom-width: 0;
    border-top-color: #ccc; }
    .popover .popover-arrow.top::after, .tooltip .popover-arrow.top::after, .popover .popover-arrow.top-left::after, .tooltip .popover-arrow.top-left::after, .popover .popover-arrow.top-right::after, .tooltip .popover-arrow.top-right::after {
      content: '';
      left: 50%;
      top: -0.5rem;
      margin-left: -0.5rem;
      margin-top: -1px;
      border-bottom-width: 0;
      border-top-color: #fff; }
  .popover .popover-arrow.top-left, .tooltip .popover-arrow.top-left {
    left: 2rem; }
  .popover .popover-arrow.top-right, .tooltip .popover-arrow.top-right {
    left: calc(100% - 2rem); }
  .popover .popover-arrow.bottom, .tooltip .popover-arrow.bottom, .popover .popover-arrow.bottom-left, .tooltip .popover-arrow.bottom-left, .popover .popover-arrow.bottom-right, .tooltip .popover-arrow.bottom-right {
    left: 50%;
    top: -0.5rem;
    margin-left: -0.5rem;
    border-top-width: 0;
    border-bottom-color: #ccc; }
    .popover .popover-arrow.bottom::after, .tooltip .popover-arrow.bottom::after, .popover .popover-arrow.bottom-left::after, .tooltip .popover-arrow.bottom-left::after, .popover .popover-arrow.bottom-right::after, .tooltip .popover-arrow.bottom-right::after {
      content: '';
      top: 1px;
      left: -0.5rem;
      border-top-width: 0;
      border-bottom-color: #fff; }
  .popover .popover-arrow.bottom-left, .tooltip .popover-arrow.bottom-left {
    left: 2rem; }
  .popover .popover-arrow.bottom-right, .tooltip .popover-arrow.bottom-right {
    left: calc(100% - 2rem); }
  .popover .popover-arrow.left, .tooltip .popover-arrow.left {
    left: 100%;
    top: 50%;
    margin-top: -0.5rem;
    border-right-width: 0;
    border-left-color: #ccc; }
    .popover .popover-arrow.left::after, .tooltip .popover-arrow.left::after {
      content: '';
      top: -0.5rem;
      left: -0.5rem;
      margin-left: -1px;
      border-right-width: 0;
      border-left-color: #fff; }
  .popover .popover-arrow.right, .tooltip .popover-arrow.right {
    left: -0.5rem;
    top: 50%;
    margin-top: -0.5rem;
    border-left-width: 0;
    border-right-color: #ccc; }
    .popover .popover-arrow.right::after, .tooltip .popover-arrow.right::after {
      content: '';
      left: 1px;
      top: 50%;
      margin-top: -0.5rem;
      border-left-width: 0;
      border-right-color: #fff; }

.tooltip {
  background-color: #000000;
  color: #fff;
  font-size: 0.8rem;
  padding: 0.5rem 0.5rem;
  border-radius: 0.25rem;
  min-width: 3rem;
  min-height: 1.5rem; }
  .tooltip .popover-arrow.top, .tooltip .popover-arrow.top-left, .tooltip .popover-arrow.top-right {
    border-top-color: #000000; }
    .tooltip .popover-arrow.top::after, .tooltip .popover-arrow.top-left::after, .tooltip .popover-arrow.top-right::after {
      border-top-color: #000000; }
  .tooltip .popover-arrow.bottom, .tooltip .popover-arrow.bottom-left, .tooltip .popover-arrow.bottom-right {
    border-bottom-color: #000000; }
    .tooltip .popover-arrow.bottom::after, .tooltip .popover-arrow.bottom-left::after, .tooltip .popover-arrow.bottom-right::after {
      border-bottom-color: #000000; }
  .tooltip .popover-arrow.left {
    border-left-color: #000000; }
    .tooltip .popover-arrow.left::after {
      border-left-color: #000000; }
  .tooltip .popover-arrow.right {
    border-right-color: #000000; }
    .tooltip .popover-arrow.right::after {
      border-right-color: #000000; }

.breadcrumb {
  display: flex;
  flex-wrap: wrap;
  position: relative;
  list-style: none;
  align-items: center; }
  .breadcrumb.with-bg {
    background: #f5f5f5;
    border-radius: 0.25rem; }
  .breadcrumb > .bc-divider, .breadcrumb > .item {
    display: inline-flex;
    align-items: center;
    padding: 0.5rem 0 0.5rem 0.5rem; }
  .breadcrumb > .item {
    cursor: pointer;
    color: rgba(0, 0, 0, 0.5); }
    .breadcrumb > .item:hover, .breadcrumb > .item:focus, .breadcrumb > .item.active {
      color: #007aff; }
    .breadcrumb > .item > .icon:first-child:not(:last-child), .breadcrumb > .item > .icon:not(first-child):not(last-child) {
      margin-right: 0.25rem; }
  .breadcrumb > .bc-divider {
    color: rgba(0, 0, 0, 0.5); }

.form {
  position: relative;
  display: block; }
  .form .form-item {
    margin-bottom: 0.75rem; }
    .form .form-item label {
      position: relative;
      display: block;
      margin-bottom: 0.25rem; }
    .form .form-item .label-col {
      margin-top: 0.5rem;
      margin-bottom: 0.5rem; }
    .form .form-item .form-line {
      width: 100%; }
    .form .form-item .info {
      position: relative;
      display: block;
      line-height: 1rem;
      margin: 0.25rem 0; }
    .form .form-item.inline > * {
      position: relative;
      display: inline-block;
      margin-right: 0.5rem; }
    .form .form-item.inline .form-line {
      width: auto; }

.table {
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;
  border: 1px solid #ccc;
  table-layout: fixed;
  margin-bottom: 1rem; }
  .table.clear-border {
    border-width: 0 !important; }
    .table.clear-border row, .table.clear-border th, .table.clear-border td {
      border-width: 0 !important; }
  .table th {
    white-space: nowrap; }
  .table.responsive {
    display: block;
    width: 100%;
    overflow-x: auto; }
  .table.striped {
    border-left-width: 0;
    border-right-width: 0;
    border-left-width: 0;
    border-right-width: 0; }
    .table.striped th, .table.striped td {
      border-left-width: 0;
      border-top-width: 0;
      border-right-width: 0;
      border-bottom-width: 1px; }
  .table.simple {
    border-width: 0; }
    .table.simple th, .table.simple td {
      border-left-width: 0;
      border-top-width: 0;
      border-right-width: 0;
      border-bottom-width: 1px;
      background-color: transparent; }
    .table.simple tbody tr:nth-of-type(even) {
      background: #f2f2f2; }
  .table th {
    text-align: left;
    border: 1px solid #ccc;
    padding: 0.5rem;
    font-weight: 500;
    background-color: #f5f5f5; }
  .table td {
    text-align: left;
    border: 1px solid #ccc;
    padding: 0.5rem; }
  .table.hover tbody tr:focus, .table.hover tbody tr:hover {
    background-color: #f2f2f2; }

.pagination {
  position: relative;
  display: inline-block; }

@-webkit-keyframes default-loader {
  from {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg); }
  to {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg); } }

@keyframes default-loader {
  from {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg); }
  to {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg); } }

@-webkit-keyframes item-delay {
  0%, 49%, 100% {
    opacity: 0.1; }
  50% {
    opacity: 1; } }

@keyframes item-delay {
  0%, 49%, 100% {
    opacity: 0.1; }
  50% {
    opacity: 1; } }

.loader.secondary > .content > .segment1, .loader.third > .content > .segment1, .loader.secondary > .content > .segment2, .loader.third > .content > .segment2, .loader.secondary > .content > .segment3, .loader.third > .content > .segment3, .loader.secondary > .content > .segment4, .loader.third > .content > .segment4, .loader.secondary > .content > .segment5, .loader.third > .content > .segment5, .loader.secondary > .content > .segment6, .loader.third > .content > .segment6, .loader.secondary > .content > .segment7, .loader.third > .content > .segment7, .loader.secondary > .content > .segment8, .loader.third > .content > .segment8, .loader.secondary > .content > .segment9, .loader.third > .content > .segment9, .loader.secondary > .content > .segment10, .loader.third > .content > .segment10, .loader.secondary > .content > .segment11, .loader.third > .content > .segment11, .loader.secondary > .content > .segment12, .loader.third > .content > .segment12 {
  position: absolute;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center; }

.loader.secondary > .content > .segment1 > .item, .loader.third > .content > .segment1 > .item, .loader.secondary > .content > .segment2 > .item, .loader.third > .content > .segment2 > .item, .loader.secondary > .content > .segment3 > .item, .loader.third > .content > .segment3 > .item, .loader.secondary > .content > .segment4 > .item, .loader.third > .content > .segment4 > .item, .loader.secondary > .content > .segment5 > .item, .loader.third > .content > .segment5 > .item, .loader.secondary > .content > .segment6 > .item, .loader.third > .content > .segment6 > .item, .loader.secondary > .content > .segment7 > .item, .loader.third > .content > .segment7 > .item, .loader.secondary > .content > .segment8 > .item, .loader.third > .content > .segment8 > .item, .loader.secondary > .content > .segment9 > .item, .loader.third > .content > .segment9 > .item, .loader.secondary > .content > .segment10 > .item, .loader.third > .content > .segment10 > .item, .loader.secondary > .content > .segment11 > .item, .loader.third > .content > .segment11 > .item, .loader.secondary > .content > .segment12 > .item, .loader.third > .content > .segment12 > .item {
  display: inline-block;
  border-radius: 100%;
  width: 15%;
  height: 15%;
  background: #007aff;
  opacity: 0.1; }

.loader {
  display: inline-flex;
  align-items: center;
  flex-direction: column; }
  .loader.block {
    display: flex; }
    .loader.block.active {
      display: flex; }
  .loader.primary > .content {
    display: inline-flex;
    position: relative;
    border: 0.3rem solid #ccc;
    border-right-color: #007aff;
    -webkit-transform: translate3d(0, 0, 0);
            transform: translate3d(0, 0, 0);
    -webkit-animation: default-loader 1.3s linear infinite;
            animation: default-loader 1.3s linear infinite;
    border-radius: 100%; }
  .loader.secondary > .content, .loader.third > .content {
    position: relative; }
    .loader.secondary > .content > .segment1, .loader.third > .content > .segment1 {
      -webkit-transform: rotate(0deg);
              transform: rotate(0deg); }
      .loader.secondary > .content > .segment1 > .item, .loader.third > .content > .segment1 > .item {
        -webkit-animation: item-delay 1.3s infinite ease-in-out both;
                animation: item-delay 1.3s infinite ease-in-out both;
        -webkit-animation-delay: -1.19167s;
                animation-delay: -1.19167s; }
    .loader.secondary > .content > .segment2, .loader.third > .content > .segment2 {
      -webkit-transform: rotate(30deg);
              transform: rotate(30deg); }
      .loader.secondary > .content > .segment2 > .item, .loader.third > .content > .segment2 > .item {
        -webkit-animation: item-delay 1.3s infinite ease-in-out both;
                animation: item-delay 1.3s infinite ease-in-out both;
        -webkit-animation-delay: -1.08333s;
                animation-delay: -1.08333s; }
    .loader.secondary > .content > .segment3, .loader.third > .content > .segment3 {
      -webkit-transform: rotate(60deg);
              transform: rotate(60deg); }
      .loader.secondary > .content > .segment3 > .item, .loader.third > .content > .segment3 > .item {
        -webkit-animation: item-delay 1.3s infinite ease-in-out both;
                animation: item-delay 1.3s infinite ease-in-out both;
        -webkit-animation-delay: -0.975s;
                animation-delay: -0.975s; }
    .loader.secondary > .content > .segment4, .loader.third > .content > .segment4 {
      -webkit-transform: rotate(90deg);
              transform: rotate(90deg); }
      .loader.secondary > .content > .segment4 > .item, .loader.third > .content > .segment4 > .item {
        -webkit-animation: item-delay 1.3s infinite ease-in-out both;
                animation: item-delay 1.3s infinite ease-in-out both;
        -webkit-animation-delay: -0.86667s;
                animation-delay: -0.86667s; }
    .loader.secondary > .content > .segment5, .loader.third > .content > .segment5 {
      -webkit-transform: rotate(120deg);
              transform: rotate(120deg); }
      .loader.secondary > .content > .segment5 > .item, .loader.third > .content > .segment5 > .item {
        -webkit-animation: item-delay 1.3s infinite ease-in-out both;
                animation: item-delay 1.3s infinite ease-in-out both;
        -webkit-animation-delay: -0.75833s;
                animation-delay: -0.75833s; }
    .loader.secondary > .content > .segment6, .loader.third > .content > .segment6 {
      -webkit-transform: rotate(150deg);
              transform: rotate(150deg); }
      .loader.secondary > .content > .segment6 > .item, .loader.third > .content > .segment6 > .item {
        -webkit-animation: item-delay 1.3s infinite ease-in-out both;
                animation: item-delay 1.3s infinite ease-in-out both;
        -webkit-animation-delay: -0.65s;
                animation-delay: -0.65s; }
    .loader.secondary > .content > .segment7, .loader.third > .content > .segment7 {
      -webkit-transform: rotate(180deg);
              transform: rotate(180deg); }
      .loader.secondary > .content > .segment7 > .item, .loader.third > .content > .segment7 > .item {
        -webkit-animation: item-delay 1.3s infinite ease-in-out both;
                animation: item-delay 1.3s infinite ease-in-out both;
        -webkit-animation-delay: -0.54167s;
                animation-delay: -0.54167s; }
    .loader.secondary > .content > .segment8, .loader.third > .content > .segment8 {
      -webkit-transform: rotate(210deg);
              transform: rotate(210deg); }
      .loader.secondary > .content > .segment8 > .item, .loader.third > .content > .segment8 > .item {
        -webkit-animation: item-delay 1.3s infinite ease-in-out both;
                animation: item-delay 1.3s infinite ease-in-out both;
        -webkit-animation-delay: -0.43333s;
                animation-delay: -0.43333s; }
    .loader.secondary > .content > .segment9, .loader.third > .content > .segment9 {
      -webkit-transform: rotate(240deg);
              transform: rotate(240deg); }
      .loader.secondary > .content > .segment9 > .item, .loader.third > .content > .segment9 > .item {
        -webkit-animation: item-delay 1.3s infinite ease-in-out both;
                animation: item-delay 1.3s infinite ease-in-out both;
        -webkit-animation-delay: -0.325s;
                animation-delay: -0.325s; }
    .loader.secondary > .content > .segment10, .loader.third > .content > .segment10 {
      -webkit-transform: rotate(270deg);
              transform: rotate(270deg); }
      .loader.secondary > .content > .segment10 > .item, .loader.third > .content > .segment10 > .item {
        -webkit-animation: item-delay 1.3s infinite ease-in-out both;
                animation: item-delay 1.3s infinite ease-in-out both;
        -webkit-animation-delay: -0.21667s;
                animation-delay: -0.21667s; }
    .loader.secondary > .content > .segment11, .loader.third > .content > .segment11 {
      -webkit-transform: rotate(300deg);
              transform: rotate(300deg); }
      .loader.secondary > .content > .segment11 > .item, .loader.third > .content > .segment11 > .item {
        -webkit-animation: item-delay 1.3s infinite ease-in-out both;
                animation: item-delay 1.3s infinite ease-in-out both;
        -webkit-animation-delay: -0.10833s;
                animation-delay: -0.10833s; }
    .loader.secondary > .content > .segment12, .loader.third > .content > .segment12 {
      -webkit-transform: rotate(330deg);
              transform: rotate(330deg); }
      .loader.secondary > .content > .segment12 > .item, .loader.third > .content > .segment12 > .item {
        -webkit-animation: item-delay 1.3s infinite ease-in-out both;
                animation: item-delay 1.3s infinite ease-in-out both;
        -webkit-animation-delay: 0s;
                animation-delay: 0s; }
  .loader.third > .content > .segment1 > .item {
    width: 8%;
    height: 30%; }
  .loader.third > .content > .segment2 > .item {
    width: 8%;
    height: 30%; }
  .loader.third > .content > .segment3 > .item {
    width: 8%;
    height: 30%; }
  .loader.third > .content > .segment4 > .item {
    width: 8%;
    height: 30%; }
  .loader.third > .content > .segment5 > .item {
    width: 8%;
    height: 30%; }
  .loader.third > .content > .segment6 > .item {
    width: 8%;
    height: 30%; }
  .loader.third > .content > .segment7 > .item {
    width: 8%;
    height: 30%; }
  .loader.third > .content > .segment8 > .item {
    width: 8%;
    height: 30%; }
  .loader.third > .content > .segment9 > .item {
    width: 8%;
    height: 30%; }
  .loader.third > .content > .segment10 > .item {
    width: 8%;
    height: 30%; }
  .loader.third > .content > .segment11 > .item {
    width: 8%;
    height: 30%; }
  .loader.third > .content > .segment12 > .item {
    width: 8%;
    height: 30%; }
  .loader > .info {
    display: inline-flex;
    color: #007aff;
    padding-top: 0.5rem; }
  .loader.normal > .content {
    width: 3rem;
    height: 3rem; }
  .loader.small > .content {
    width: 1.25rem;
    height: 1.25rem; }
  .loader.large > .content {
    width: 5rem;
    height: 5rem; }
  .loader.active {
    display: inline-flex; }
  .loader.white.primary > .content {
    border-right-color: #fff; }
  .loader.white.primary > .info {
    color: #fff; }
  .loader.white.secondary > .content .item, .loader.white.third > .content .item, .loader.white.third > .content .item {
    background: #fff; }
  .loader.white.secondary > .info, .loader.white.third > .info, .loader.white.third > .info {
    color: #fff; }

.slidershow > .content {
  position: relative;
  max-width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center; }
  .slidershow > .content > .item {
    display: none;
    flex-direction: row;
    color: #fff;
    width: 100%;
    height: 100%; }
    .slidershow > .content > .item > .block {
      display: block;
      width: 100%;
      height: 100%; }
      .slidershow > .content > .item > .block.image {
        height: auto; }
    .slidershow > .content > .item > .info {
      position: absolute;
      bottom: 2rem;
      display: flex;
      width: 100%;
      flex-direction: column;
      justify-content: center;
      align-items: center; }
      .slidershow > .content > .item > .info > .title {
        vertical-align: middle;
        text-align: center;
        font-family: 700; }
      .slidershow > .content > .item > .info > .description {
        vertical-align: middle;
        text-align: center;
        padding: 0 0.5rem; }
    .slidershow > .content > .item.active {
      display: flex; }

.slidershow > .indicators {
  list-style: none;
  display: flex;
  position: absolute;
  bottom: 0.5rem;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%; }
  .slidershow > .indicators .circle, .slidershow > .indicators .line {
    cursor: pointer;
    margin-right: 0.5rem;
    background-color: #ccc; }
    .slidershow > .indicators .circle.active, .slidershow > .indicators .line.active {
      background-color: #fff; }
  .slidershow > .indicators .circle {
    border-radius: 50%;
    width: 1rem;
    height: 1rem; }
  .slidershow > .indicators .line {
    height: 0.1875rem;
    width: 1.5rem; }

.accordion {
  display: inline-flex;
  flex-flow: column; }
  .accordion.block {
    display: flex;
    width: 100%; }
    .accordion.block > .card {
      width: 100%;
      display: block; }
  .accordion .accordion-content {
    max-height: 0;
    overflow: hidden;
    -webkit-transition: max-height 0.7s ease-in-out;
    transition: max-height 0.7s ease-in-out; }
    .accordion .accordion-content.active {
      display: block;
      max-height: 60rem; }
  .accordion > .card .card-header > .title:before {
    content: '';
    width: 0;
    height: 0;
    vertical-align: middle;
    display: inline-block;
    border: 4px solid transparent;
    -webkit-transition: -webkit-transform .4s ease-in-out;
    transition: -webkit-transform .4s ease-in-out;
    transition: transform .4s ease-in-out;
    transition: transform .4s ease-in-out, -webkit-transform .4s ease-in-out;
    border-left-color: #acacac; }
  .accordion > .card .card-header.active > .title:before {
    -webkit-transform: rotate(90deg);
            transform: rotate(90deg);
    -webkit-transition: -webkit-transform 0.7s ease-in-out;
    transition: -webkit-transform 0.7s ease-in-out;
    transition: transform 0.7s ease-in-out;
    transition: transform 0.7s ease-in-out, -webkit-transform 0.7s ease-in-out; }
  .accordion > .card:not(:first-child) {
    margin-left: 0;
    border-top-left-radius: 0;
    border-top-right-radius: 0; }
  .accordion > .card:not(:last-child) {
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    border-bottom-width: 0; }

.toggle {
  position: relative;
  display: inline-flex;
  font-size: 0.75rem;
  color: #fff;
  font-weight: 700;
  -webkit-transition: all .4s;
  transition: all .4s;
  vertical-align: middle;
  min-width: 3.5rem;
  cursor: pointer; }
  .toggle + .toggle {
    margin-left: 0.5rem; }
  .toggle.disabled {
    pointer-events: none !important; }
  .toggle .bar {
    display: inline-flex;
    align-items: center;
    margin: 0.25rem 0;
    padding: 0 0.5rem 0 1.8rem;
    height: 1rem;
    width: 100%;
    border-radius: 1.5rem; }
  .toggle .ball {
    position: absolute;
    top: 0;
    right: 0;
    height: 1.5rem;
    width: 1.5rem;
    border-radius: 50%;
    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.14);
    text-align: center; }
  .toggle.on .bar {
    background-color: #98BFD0; }
  .toggle.on .ball {
    background-color: #277ED0;
    color: #333; }
  .toggle.off .bar {
    background-color: #ccc; }
  .toggle.off .ball {
    background-color: #f5f5f5;
    left: 0;
    color: #ccc; }
  .toggle.secondary, .toggle.loader.third, .toggle.primary {
    border-radius: 0.25rem;
    padding: 0.25rem;
    display: inline-flex;
    align-items: center;
    font-size: 0.75rem;
    min-height: 2rem;
    line-height: 2rem;
    min-width: 3.5rem; }
    .toggle.secondary.on, .toggle.on.loader.third, .toggle.primary.on {
      background-color: #277ED0; }
    .toggle.secondary.off, .toggle.off.loader.third, .toggle.primary.off {
      background-color: #ccc;
      flex-flow: row-reverse; }
    .toggle.secondary .bar, .toggle.loader.third .bar, .toggle.primary .bar {
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0;
      padding: 0 0.5rem;
      background-color: inherit;
      flex: 0 1 auto; }
    .toggle.secondary .ball, .toggle.loader.third .ball, .toggle.primary .ball {
      position: relative;
      width: 1.5rem;
      height: 1.5rem;
      line-height: 1.5rem;
      background-color: #fff;
      border-radius: 0.25rem;
      box-shadow: none;
      flex: 0 0 auto; }
  .toggle.primary {
    border-radius: 1.5rem;
    min-width: 4.5rem; }
    .toggle.primary > .ball {
      border-radius: 50%; }

.alert > .alert-close > .close-btn {
  border-width: 0;
  padding: 0;
  opacity: .6;
  background-color: transparent; }
  .alert > .alert-close > .close-btn:hover {
    opacity: 1;
    -webkit-transform: scale(1.2, 1.2);
            transform: scale(1.2, 1.2);
    -webkit-transform-origin: center;
            transform-origin: center;
    background-color: transparent;
    box-shadow: unset; }

@-webkit-keyframes active-alert {
  from {
    opacity: 0;
    -webkit-transform: scaleY(0);
            transform: scaleY(0); }
  to {
    opacity: 1;
    -webkit-transform: scaleY(1);
            transform: scaleY(1); } }

@keyframes active-alert {
  from {
    opacity: 0;
    -webkit-transform: scaleY(0);
            transform: scaleY(0); }
  to {
    opacity: 1;
    -webkit-transform: scaleY(1);
            transform: scaleY(1); } }

@-webkit-keyframes inactive-alert {
  from {
    visibility: visible;
    opacity: 1;
    -webkit-transform: scaleY(1);
            transform: scaleY(1); }
  to {
    visibility: hidden;
    opacity: 0;
    -webkit-transform: scaleY(0);
            transform: scaleY(0);
    height: 0 !important; } }

@keyframes inactive-alert {
  from {
    visibility: visible;
    opacity: 1;
    -webkit-transform: scaleY(1);
            transform: scaleY(1); }
  to {
    visibility: hidden;
    opacity: 0;
    -webkit-transform: scaleY(0);
            transform: scaleY(0);
    height: 0 !important; } }

.alert {
  display: flex;
  position: relative;
  flex: 1 0 100%;
  flex-flow: row nowrap;
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  margin-bottom: 0.5rem; }
  .alert.active {
    visibility: visible;
    -webkit-animation: active-alert 0.2s ease-in-out;
            animation: active-alert 0.2s ease-in-out; }
  .alert.inactive {
    -webkit-animation: inactive-alert 0.2s ease-in-out;
            animation: inactive-alert 0.2s ease-in-out;
    -webkit-animation-fill-mode: forwards;
            animation-fill-mode: forwards; }
  .alert.normal {
    display: inline-flex;
    min-width: 20rem; }
  .alert.block {
    display: flex;
    flex: 1 1 100%; }
  .alert.with-title > .alert-close {
    align-items: flex-start; }
  .alert > .alert-content {
    flex-grow: 1;
    display: flex;
    flex-flow: column wrap; }
    .alert > .alert-content > .title {
      font-weight: 500; }
  .alert > .alert-icon {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex: 0 0 auto;
    padding-right: 0.75rem;
    font-size: 1.5rem; }
  .alert > .alert-close {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    flex: 0 0 auto; }
  .alert.alert-info {
    background-color: #d6eaff;
    border: 1px solid #a3d0ff;
    border-left-width: 0.5rem;
    border-top-left-radius: 0.5rem;
    border-bottom-left-radius: 0.5rem;
    border-left-color: #007aff; }
    .alert.alert-info > .alert-icon {
      color: #007aff; }
    .alert.alert-info:focus, .alert.alert-info:hover {
      box-shadow: 1px 1px 6px 0 #a3d0ff; }
  .alert.alert-simple, .alert.alert-mini {
    border: 1px solid #ccc;
    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.14);
    background: #fff; }
    .alert.alert-simple > .alert-close, .alert.alert-mini > .alert-close {
      align-items: flex-start; }
    .alert.alert-simple > .alert-icon, .alert.alert-mini > .alert-icon {
      color: #007aff; }
  .alert.alert-simple > .alert-content > .body {
    min-height: 4rem; }
  .alert.alert-ok {
    background-color: #ddffba;
    border: 1px solid rgba(20, 163, 24, 0.439216);
    border-left-width: 0.5rem;
    border-top-left-radius: 0.5rem;
    border-bottom-left-radius: 0.5rem;
    border-left-color: green; }
    .alert.alert-ok > .alert-icon {
      color: #49b847; }
    .alert.alert-ok:focus, .alert.alert-ok:hover {
      box-shadow: 1px 1px 6px 0 rgba(25, 209, 31, 0.439216); }
  .alert.alert-warning {
    background-color: #ffe79a;
    border: 1px solid #ffce34;
    border-left-width: 0.5rem;
    border-top-left-radius: 0.5rem;
    border-bottom-left-radius: 0.5rem;
    border-left-color: #a5742f; }
    .alert.alert-warning > .alert-icon {
      color: #c88f3f; }
    .alert.alert-warning:focus, .alert.alert-warning:hover {
      box-shadow: 1px 1px 6px 0 #ffdb67; }
  .alert.alert-error {
    background-color: #ffd9d7;
    border: 1px solid #e8818a;
    border-left-width: 0.5rem;
    border-top-left-radius: 0.5rem;
    border-bottom-left-radius: 0.5rem;
    border-left-color: #d82b3a; }
    .alert.alert-error > .alert-icon {
      color: #d82b3a; }
    .alert.alert-error:focus, .alert.alert-error:hover {
      box-shadow: 1px 1px 6px 0 #e8818a; }

@-webkit-keyframes tl-active-alert {
  from {
    left: calc(-100% + 1.5vw); }
  to {
    left: 1.5vw; } }

@keyframes tl-active-alert {
  from {
    left: calc(-100% + 1.5vw); }
  to {
    left: 1.5vw; } }

@-webkit-keyframes tl-inactive-alert {
  from {
    left: 1.5vw; }
  to {
    left: calc(-100% + 1.5vw); } }

@keyframes tl-inactive-alert {
  from {
    left: 1.5vw; }
  to {
    left: calc(-100% + 1.5vw); } }

@-webkit-keyframes tr-active-alert {
  from {
    right: calc(-100%); }
  to {
    right: 0; } }

@keyframes tr-active-alert {
  from {
    right: calc(-100%); }
  to {
    right: 0; } }

@-webkit-keyframes tr-inactive-alert {
  from {
    right: 0; }
  to {
    right: calc(-100%); } }

@keyframes tr-inactive-alert {
  from {
    right: 0; }
  to {
    right: calc(-100%); } }

.alert-container.top-right > .alert.active, .alert-container.bottom-right > .alert.active {
  -webkit-animation: tr-active-alert 0.2s linear;
          animation: tr-active-alert 0.2s linear;
  -webkit-animation-fill-mode: forwards;
          animation-fill-mode: forwards; }

.alert-container.top-right > .alert.inactive, .alert-container.bottom-right > .alert.inactive {
  -webkit-animation: tr-inactive-alert 0.2s linear;
          animation: tr-inactive-alert 0.2s linear;
  -webkit-animation-fill-mode: forwards;
          animation-fill-mode: forwards; }

.alert-container.top-left > .alert.active, .alert-container.bottom-left > .alert.active {
  -webkit-animation: tl-active-alert 0.2s linear;
          animation: tl-active-alert 0.2s linear;
  -webkit-animation-fill-mode: forwards;
          animation-fill-mode: forwards; }

.alert-container.top-left > .alert.inactive, .alert-container.bottom-left > .alert.inactive {
  -webkit-animation: tl-inactive-alert 0.2s linear;
          animation: tl-inactive-alert 0.2s linear;
  -webkit-animation-fill-mode: forwards;
          animation-fill-mode: forwards; }

.alert-container {
  position: fixed;
  display: flex;
  flex-flow: row wrap;
  z-index: 1000;
  width: 97%; }
  @media (min-width: 576px) {
    .alert-container.alert-container-width-sm {
      width: 22.5rem; } }
  .alert-container.top-left {
    top: 1.5vw;
    left: 1.5vw; }
  .alert-container.top-right {
    top: 1.5vw;
    right: 1.5vw; }
  .alert-container.bottom-left {
    bottom: 1.5vw;
    left: 1.5vw; }
  .alert-container.bottom-right {
    bottom: 1.5vw;
    right: 1.5vw; }

.progress {
  display: flex;
  height: 1rem; }
  .progress > .loader {
    position: absolute;
    top: 1rem;
    right: 1rem; }
  .progress > .bar {
    display: inline-flex;
    flex-grow: 1;
    flex-shrink: 0;
    flex-basis: calc(100% - 2.5rem);
    height: 100%;
    background: #ccc;
    border-radius: 2rem; }
    .progress > .bar > .bg {
      display: flex;
      height: 100%;
      border-radius: 2rem;
      background-color: #007aff;
      color: #fff;
      font-size: 0.75rem;
      font-weight: bold;
      align-items: center;
      justify-content: center;
      -webkit-transition: width .3s ease;
      transition: width .3s ease; }
  .progress > .info {
    display: inline-flex;
    flex: 0 0 2.5rem;
    align-items: center;
    padding-left: 0.5rem;
    font-size: 0.75rem; }
  .progress.animation > .bar > .bg {
    background-image: -webkit-gradient(linear, left top, right top, from(transparent), to(rgba(255, 255, 255, 0.15)));
    background-image: -webkit-linear-gradient(left, transparent, rgba(255, 255, 255, 0.15));
    background-image: linear-gradient(to right, transparent, rgba(255, 255, 255, 0.15));
    background-size: 1rem 1rem;
    background-repeat: no-repeat;
    -webkit-animation: move-stripe-2 2s linear infinite;
            animation: move-stripe-2 2s linear infinite; }
  .progress.with-stripe > .bar > .bg {
    background-image: -webkit-linear-gradient(45deg, rgba(255, 255, 255, 0.13) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.13) 50%, rgba(255, 255, 255, 0.13) 75%, transparent 75%, transparent);
    background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.13) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.13) 50%, rgba(255, 255, 255, 0.13) 75%, transparent 75%, transparent);
    background-size: 1rem 1rem;
    background-repeat: repeat;
    background-repeat: initial; }
  .progress.with-stripe.animation > .bar > .bg {
    -webkit-animation: move-stripe 1s linear infinite;
            animation: move-stripe 1s linear infinite; }
  .progress.info > .bar > .bg {
    background-color: #007aff; }
  .progress.info > .info {
    color: #007aff; }
  .progress.ok > .bar > .bg {
    background-color: #49b847; }
  .progress.ok > .info {
    color: #49b847; }
  .progress.warning > .bar > .bg {
    background-color: #fbbe11; }
  .progress.warning > .info {
    color: #fbbe11; }
  .progress.error > .bar > .bg {
    background-color: #ff350e; }
  .progress.error > .info {
    color: #ff350e; }
  .progress:first-child:not(:last-child), .progress:not(first-child):not(last-child) {
    margin-bottom: 1rem; }
  .progress.without-info > .bar {
    flex: 1 0 100%; }
  .progress.without-info > .info {
    display: none; }
  .progress.top, .popover .progress.popover-arrow.top-left, .tooltip .progress.popover-arrow.top-left, .popover .progress.popover-arrow.top-right, .tooltip .progress.popover-arrow.top-right {
    position: fixed;
    height: 0.1875rem;
    top: 0;
    left: 0;
    width: 100%; }

.select-menu {
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.14);
  border-radius: 0.25rem; }
  .select-menu > .no-data {
    margin-top: 1rem;
    height: 6rem;
    align-items: center; }
    .select-menu > .no-data .no-data-icon {
      font-size: 3em;
      color: #ccc; }
    .select-menu > .no-data .no-data-label {
      font-size: 1.3em;
      color: #ccc; }

.select-multiple {
  display: inline-flex;
  justify-content: start;
  align-items: start;
  flex-wrap: wrap;
  cursor: pointer;
  width: 15.6525rem;
  border: 1px solid #ccc;
  position: relative;
  padding: 0 0.5rem;
  border-radius: 0.25rem; }
  .select-multiple > .select-multiple-content > .badge {
    margin: 0 0.15rem; }
    .select-multiple > .select-multiple-content > .badge > .content {
      border: 1px solid #ccc; }
  .select-multiple > .select-multiple-content > .input {
    padding-left: 0;
    padding-right: 0;
    width: .8em;
    max-width: 100%;
    font-size: .8rem;
    border: none;
    box-shadow: none !important;
    outline: 0; }
  .select-multiple > .select-multiple-content > .search-text-detector {
    position: absolute;
    opacity: 0;
    left: 0;
    top: 0; }

.date-time-picker > .date-container {
  float: left; }
  .date-time-picker > .date-container > .input {
    width: 10rem;
    border-right-width: 0;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0; }
    .date-time-picker > .date-container > .input:active ~ .icon, .date-time-picker > .date-container > .input:focus ~ .icon {
      color: #333; }
    .date-time-picker > .date-container > .input:active .date-time-picker > .time-container >, .date-time-picker > .date-container > .input:focus .date-time-picker > .time-container > {
      border: 4rem solid #1f64a5; }

.date-time-picker > .time-container {
  float: left;
  margin-left: 0; }
  .date-time-picker > .time-container > .input {
    width: 6rem;
    border-left-width: 0;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0; }
    .date-time-picker > .time-container > .input:active ~ .icon, .date-time-picker > .time-container > .input:focus ~ .icon {
      color: #333; }
    .date-time-picker > .time-container > .input:active .date-time-picker > .date-container > .input, .date-time-picker > .time-container > .input:focus .date-time-picker > .date-container > .input {
      border-color: #007aff; }

/**
* Generate add-ons
 */
.date-picker {
  display: inline-flex;
  flex-flow: column;
  box-shadow: 0 2px 7px 0 rgba(0, 0, 0, 0.24);
  background-color: #ffffff;
  border-radius: 0.25rem; }
  .date-picker > .title {
    padding: .5rem 1rem;
    background: -webkit-linear-gradient(315deg, #1a87ff, #3395ff, #007aff);
    background: linear-gradient(135deg, #1a87ff, #3395ff, #007aff);
    border-top-left-radius: 0.25rem;
    border-top-right-radius: 0.25rem;
    font-weight: 500; }
    .date-picker > .title > .year-info {
      color: #fff;
      font-size: 1.5rem; }
    .date-picker > .title > .detail-info {
      color: #fff;
      font-size: 1.5rem; }
  .date-picker > .body {
    padding: 0 .5rem;
    min-width: 16rem; }
    .date-picker > .body > .info {
      padding: 0.25rem 0.25rem;
      display: flex;
      justify-content: center; }
      .date-picker > .body > .info .button {
        width: 2rem;
        height: 2rem;
        margin: 0.1rem 0; }
      .date-picker > .body > .info .button + .button:not(.block) {
        margin: 0 !important;
        padding: 0.25rem; }
      .date-picker > .body > .info > .previous {
        flex: 1 0 auto; }
      .date-picker > .body > .info > .content {
        display: flex;
        align-items: center;
        justify-content: center;
        flex: 0 1 45%;
        text-align: center;
        font-size: .8rem;
        font-weight: 500; }
      .date-picker > .body > .info > .next {
        flex: 1 0 auto; }
      .date-picker > .body > .info > .previous .button, .date-picker > .body > .info > .content .button, .date-picker > .body > .info > .next .button {
        border: 0; }
    .date-picker > .body > .data-picker-table {
      width: 100%;
      font-size: .8rem; }
      .date-picker > .body > .data-picker-table td {
        text-align: center;
        vertical-align: middle; }
        .date-picker > .body > .data-picker-table td .button {
          padding: 0;
          width: 1.5rem;
          height: 1.5rem;
          -webkit-transition: background-color .2s;
          transition: background-color .2s;
          border: none;
          color: #333; }
    .date-picker > .body > .footer {
      display: flex;
      flex: 0 1 auto;
      padding: 0.5rem;
      border-bottom-left-radius: 0.25rem;
      border-bottom-right-radius: 0.25rem; }
      .date-picker > .body > .footer > .left {
        display: flex;
        align-items: flex-end;
        flex: 0 1 auto;
        padding-left: 0.5rem;
        color: #007aff; }
      .date-picker > .body > .footer > .right {
        display: flex;
        flex: 1 0 auto;
        padding-right: 0.5rem;
        justify-content: flex-end; }
  .date-picker.left-title {
    flex-flow: row; }
    .date-picker.left-title > .title {
      min-width: 9rem;
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
      border-bottom-left-radius: 0.25rem; }

.time-item, .time > .hour, .time > .minute, .time > .second {
  height: 10rem;
  width: 4rem;
  display: inline-block;
  border: 1px solid #ccc;
  float: left;
  overflow: hidden;
  border-collapse: collapse; }
  .time-item > .menu > .item, .time > .hour > .menu > .item, .time > .minute > .menu > .item, .time > .second > .menu > .item {
    text-align: left;
    padding-top: 0.1rem;
    padding-bottom: 0.1rem; }
  .time-item:hover, .time > .hour:hover, .time > .minute:hover, .time > .second:hover, .time-item:focus, .time > .hour:focus, .time > .minute:focus, .time > .second:focus {
    overflow-y: auto; }

.time {
  display: inline-block;
  position: absolute;
  z-index: 100;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.14);
  left: 0;
  top: 100%;
  background-color: #ffffff;
  width: 12rem; }
</style><style type="text/css">@charset "UTF-8";
* {
  　　　　　　box-sizing: content-box;
  　　　　　　-moz-box-sizing: inherit;
  　　　　　　-webkit-box-sizing: inherit; }

body {
  background-color: #fff;
  color: rgba(0, 0, 0, 0.8); }

.doc {
  /*  .submenu > .menu-list > .item, .menu > .menu-list > .item {
      padding-left: 2rem;
    }*/ }
  .doc.menu-title {
    margin: 1rem auto;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    font-size: 2rem;
    font-style: italic; }
  .doc.search-row {
    margin: 1rem auto;
    display: flex;
    justify-content: center;
    align-items: center; }
  .doc.doc-row {
    margin-top: 1rem; }
  .doc section {
    margin-top: 2rem;
    margin-bottom: 2rem; }
  .doc.doc-col {
    display: inline-block;
    margin-right: 1rem; }
  .doc h3, .doc p {
    margin-top: 0.25rem;
    margin-bottom: 1rem; }
  .doc.header {
    line-height: 4rem; }
    .doc.header .title svg {
      font-size: 1.5rem; }
  .doc.grid-row {
    display: flex; }
  .doc.left-nav-col {
    top: 4rem;
    padding-top: 2rem;
    box-shadow: 1rem 0 2rem -1rem rgba(0, 0, 0, 0.1);
    height: calc(100vh - 4rem);
    position: -webkit-sticky;
    position: sticky;
    border-right: 1px solid #fff;
    overflow-y: hidden;
    overflow-x: hidden;
    background: #000c17; }
    .doc.left-nav-col .menu-header {
      font-weight: 500; }
    .doc.left-nav-col:focus, .doc.left-nav-col:hover {
      overflow-y: auto; }
  .doc.center-col {
    padding: 7rem 3rem 0rem;
    display: block;
    overflow-y: auto;
    flex: 1 0 auto; }
  .doc.right-col {
    top: 4rem;
    padding-top: 7rem;
    position: -webkit-sticky;
    position: sticky;
    border-left: 1px dotted rgba(0, 0, 0, 0.1); }
    .doc.right-col .menu {
      font-size: 0.875rem;
      color: #838383; }
      .doc.right-col .menu .item {
        padding: 0.2rem 1rem; }
  .doc.doc-title-link {
    font-weight: bold; }
    .doc.doc-title-link h3 {
      margin: unset; }
  .doc.home {
    background-image: url(/static/media/back2.0406b478.jpg);
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover; }
  .doc.link-text {
    font-size: 1rem;
    font-weight: bold; }
  .doc .doc-sample-panel {
    margin-bottom: 3rem; }
    .doc .doc-sample-panel .doc-title {
      display: flex;
      justify-content: flex-end;
      cursor: pointer;
      color: #ababab; }
      .doc .doc-sample-panel .doc-title:hover {
        color: #277ed0; }
    .doc .doc-sample-panel .doc-title-item {
      display: flex;
      font-size: 1.5rem;
      flex-direction: column; }
    .doc .doc-sample-panel .doc-code {
      font-size: 1rem;
      font-weight: 400; }
  .doc .grid .row {
    border: 1px solid rgba(86, 61, 124, 0.2);
    margin-top: 0.25rem;
    margin-bottom: 0.25rem; }
  .doc .grid .row > div[class^=col-] {
    background-color: #ccc;
    border: 1px solid rgba(86, 61, 124, 0.2);
    background-color: rgba(86, 61, 124, 0.15); }
  .doc .grid-sample-col .row > [class^=col-] {
    padding: 0.5rem; }

.banner-container {
  margin-top: 3rem;
  width: 100%; }

.banner {
  display: block;
  text-align: center;
  width: 70%;
  margin: 0 auto;
  border: 0;
  padding: 2rem 0 0 0;
  color: #fff; }
  .banner > * {
    margin-top: 1.5rem; }
  .banner .title {
    font-size: 2.5rem;
    font-weight: bold; }
  .banner .banner-icon {
    display: inline-block;
    font-size: 2rem;
    width: 5rem;
    height: 5rem;
    text-align: center;
    vertical-align: middle;
    line-height: 4.5rem;
    border-radius: 50rem;
    border-top: 0.4rem solid #a57036;
    border-right: 0.4rem solid #e02c94;
    border-bottom: 0.4rem solid #9a2ec8;
    border-left: 0.4rem solid #06806C;
    box-shadow: 1px 1px 20px 0 white, -1px -1px 20px 0 white;
    font-style: italic; }
  .banner .content {
    font-size: 1.5rem;
    text-align: center; }
  .banner .line {
    text-align: center; }

@media screen and (min-width: 768px) {
  .doc.left-nav-col, .doc.right-col {
    display: block; } }

@media screen and (max-width: 768px) {
  .doc.left-nav-col, .doc.right-col {
    display: none; }
  .doc.center-col {
    padding: 7rem 1rem 0rem;
    flex: 1 1 auto; } }
    
    
    
    
    html,body, #docRoot, .frame-content{
     height: 100%;
    }
    
    html{
      font-size: 14px;
    }
   
    
</style></head>
`;

export const Template = `<!DOCTYPE html>
  <html lang="en">
  ${FrameHeader}
  <body>
  <div id="docRoot"></div>
  </body>
  </html>`;