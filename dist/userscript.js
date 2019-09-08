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

'use strict';

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var Runner = function Runner() {
  classCallCheck(this, Runner);

  this.run = function () {
    console.log('Hello, this is V2EX tool');
  };
};

// eslint-disable-next-line


(function () {

  var runner = new Runner();
  runner.run();
  // eslint-disable-next-line
})();
