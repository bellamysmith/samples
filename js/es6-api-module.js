const superagent = require('superagent');

export function makeGetRequest (url, query, headers, callback) {
  superagent.get(url)
    .query(query)
    .set(headers)
    .then((res) => {
      callback(res);
    })
    .catch((err) => {
      console.log(err);
    });
}

export function makePostRequest (url, body, headers, callback) {
  superagent.post(url)
    .send(body)
    .set(headers)
    .then((res) => {
      callback(res);
    })
    .catch((err) => {
      console.log(err);
    });
}
