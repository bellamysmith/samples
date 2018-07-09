const superagent = require('superagent');

export function getNumFact (endpoint, query, headers, callback) {
  let text, url = 'http://numbersapi.com/';
  superagent.get(url + endpoint)
    .then((res) => {
      text = res.text
      callback(res.text);
    })
    .catch((err) => {
      console.log(err);
  });

}
