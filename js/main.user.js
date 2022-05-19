// ==UserScript==
// @name        meducacionsantiago.gob.ar_tweaks
// @namespace   Violentmonkey Scripts
// @match       *://plataformaedu.meducacionsantiago.gob.ar/*
// @grant       none
// @version     1.0
// @author      -
// @description 19/5/2022, 12:13:32
// ==/UserScript==
const cssData = `
.fixed-top .navbar .navbar-light .navbar-expand .moodle-has-zindex {
  background-color: black;
}
`;
const linkEl = document.createElement("style");
linkEl.innerHTML = cssData;
console.log(linkEl)
document.body.appendChild(linkEl);