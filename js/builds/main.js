'use strict';

var _numFactApi = require('./num-fact-api.js');

var _es6ApiModule = require('./es6-api-module.js');

var num = Math.floor(Math.random() * Math.floor(9999));
console.log("Getting Request for: " + num);

// Using the "custom" number api module
var callback1 = function callback1(resText) {
  console.log(resText);
};

var callback2 = function callback2(res) {
  console.log(res.text);
};

(0, _numFactApi.getNumFact)(num, {}, {}, callback1);

// Using the "custom" number api module
// (url, query, headers, callback)
(0, _es6ApiModule.makeGetRequest)('http://numbersapi.com/' + num, {}, {}, callback2);