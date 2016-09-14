// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        http://dota2.gamepedia.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    if ( document.getElementById("global-wrapper").className.match(/(?:^|\s)with-siderail(?!\S)/) ){
        document.getElementById("global-wrapper").className = "noprint";
    }

    var toBeHidden = document.getElementById("siderail");
    toBeHidden.parentNode.removeChild(toBeHidden);
})();