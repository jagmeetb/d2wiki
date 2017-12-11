// ==UserScript==
// @name         Dota2 Wiki Hide Sidebar
// @namespace    http://tampermonkey.net/
// @version      1.11
// @description  Hides intrusive elements on dota2.gamepedia.com
// @author       jagmeetb
// @match        http*://dota2.gamepedia.com/*
// @downloadURL  https://raw.githubusercontent.com/jagmeetb/d2wiki/master/hideSidebar.user.js
// @updateURL    https://raw.githubusercontent.com/jagmeetb/d2wiki/master/hideSidebar.user.js
// @grant        @GM_addStyle
// ==/UserScript==

(function() {
    'use strict';

    if ( document.getElementById("global-wrapper").className.match(/(?:^|\s)with-siderail(?!\S)/) ){
        document.getElementById("global-wrapper").className = "noprint";
    }

    var toBeHidden = document.getElementById("siderail");
    toBeHidden.parentNode.removeChild(toBeHidden);
    
    window.location.href = "dota2.gamepedia.com/index.php?title=Dota_2_Wiki&mobileaction=toggle_view_desktop";
})();
