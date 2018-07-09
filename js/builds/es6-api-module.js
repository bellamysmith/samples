'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeGetRequest = makeGetRequest;
exports.makePostRequest = makePostRequest;
var superagent = require('superagent');

function makeGetRequest(url, query, headers, callback) {
  superagent.get(url).query(query).set(headers).then(function (res) {
    callback(res);
  }).catch(function (err) {
    console.log(err);
  });
}

function makePostRequest(url, body, headers, callback) {
  superagent.post(url).send(body).set(headers).then(function (res) {
    callback(res);
  }).catch(function (err) {
    console.log(err);
  });
}