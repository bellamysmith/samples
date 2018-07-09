import { getNumFact } from './num-fact-api.js'
import { makeGetRequest } from './es6-api-module.js'

const num = Math.floor(Math.random() * Math.floor(9999));
console.log("Getting Request for: " + num);


// Using the "custom" number api module
var callback1 = (resText) => {
  console.log(resText);
}

var callback2 = (res) => {
  console.log(res.text);
}

getNumFact(num, {}, {}, callback1);


// Using the non-custom api lib
makeGetRequest('http://numbersapi.com/' + num, {}, {}, callback2);
