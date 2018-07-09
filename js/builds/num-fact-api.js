'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getNumFact = getNumFact;
var superagent = require('superagent');

function getNumFact(endpoint, query, headers, callback) {
  var text = void 0,
      url = 'http://numbersapi.com/';
  superagent.get(url + endpoint).then(function (res) {
    text = res.text;
    callback(res.text);
  }).catch(function (err) {
    console.log(err);
  });
}