// ==UserScript==
// @name         Production Warning Tape
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Displays vertical bars on given websites. Usefull when you use to visit production site and don't want to mistake it for local dev.
// @author       Janusz "Ivellios" Kamienski
// @grant        none
// ==/UserScript==

CSS = `.maintenance-information {top:0;bottom:0;position:fixed;height:100vh;width:50px;z-index:99999;background-image: repeating-linear-gradient(145deg, rgba(255,255,255,0.8), rgba(255,255,255,0.8) 30px, rgba(249,112,114,0.8) 30px, rgba(249,112,114,0.8) 60px);z-index:9999;}
.maintenance-information.left{left:0;}
.maintenance-information.right{right:0;}
.maintenance-information p{writing-mode: tb-rl;padding:10px 0;margin: auto;color:#333;font-weight:bold;font-size:24px;text-align:center;text-shadow:0 0 15px white;}
.maintenance-information:hover{display:none;}
`;

TEXT = "PRODUCTION!";

(function() {
    'use strict';

    function createBar(side){
        var div = document.createElement("div");
        var text = document.createElement("p");
        text.innerHTML = TEXT;
        div.className = "maintenance-information "+side;
        div.appendChild(text);
        document.body.appendChild(div);
    }

    var style = document.createElement('style');
    if (style.styleSheet) {
        style.styleSheet.cssText = CSS;
    } else {
        style.appendChild(document.createTextNode(CSS));
    }
    document.getElementsByTagName('head')[0].appendChild(style);

    createBar("left");
    createBar("right");
})();