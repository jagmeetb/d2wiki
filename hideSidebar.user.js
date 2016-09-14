// ==UserScript==
// @name         hideSidebar.js
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Hides intrusive elements on dota2.gamepedia.com
// @author       jagmeetb
// @match        http://dota2.gamepedia.com/*
// @downloadURL  https://raw.githubusercontent.com/jagmeetb/d2wiki/master/hideSidebar.js
// @updateURL    https://raw.githubusercontent.com/jagmeetb/d2wiki/master/hideSidebar.js
// @grant        @GM_addStyle
// ==/UserScript==

(function() {
    'use strict';

    if ( document.getElementById("global-wrapper").className.match(/(?:^|\s)with-siderail(?!\S)/) ){
        document.getElementById("global-wrapper").className = "noprint";
    }

    var toBeHidden = document.getElementById("siderail");
    toBeHidden.parentNode.removeChild(toBeHidden);
})();
