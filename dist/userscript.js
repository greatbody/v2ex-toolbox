// ==UserScript==
// @name         V2EX工具箱
// @namespace    rollup-react
// @version      0.0.1
// @description  V2ex工具箱，集成多项功能
// @author       greatbody
// @include     https://*.v2ex.com/*
// @include     https://v2ex.com/*
// @grant       unsafeWindow
// @grant       GM_addStyle
// @grant       GM_getValue
// @grant       GM_setValue
// @grant       GM_deleteValue
// @grant       GM_listValues
// ==/UserScript==
// Refs:// https://greasyfork.org/en/scripts/3452-v2ex%E5%A2%9E%E5%BC%BA%E6%8F%92%E4%BB%B6
'use strict';

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var MarkBuildingOwner = function MarkBuildingOwner() {
  classCallCheck(this, MarkBuildingOwner);
};

MarkBuildingOwner.markOwner = function () {
  var ownerHtml = ' <font color=green>[楼主]</font>';
  var ownerName = document.querySelector('.header .gray a').innerHTML;
  var ownerLinks = document.querySelectorAll('#Main .box .dark');
  for (var i = 0; i < ownerLinks.length; i += 1) {
    if (ownerLinks[i].innerHTML === ownerName) {
      ownerLinks[i].innerHTML += ownerHtml;
    }
  }
};

// hello world

var Runner = function Runner() {
  classCallCheck(this, Runner);

  this.run = function () {
    console.log('Hello, this is V2EX tool');
    MarkBuildingOwner.markOwner();
  };
};

// eslint-disable-next-line


(function () {

  var runner = new Runner();
  runner.run();
  // eslint-disable-next-line
})();
