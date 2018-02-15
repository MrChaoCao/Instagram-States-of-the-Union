const _twitter = require('twitter');

var twitter = new _twitter({
  "consumer_key": 'XHejtyytxyQpXx2wI0dOw08eH',
  "consumer_secret": 'aoqSPa32XmPey8dVCTqtWRNjmaiEmFPAqYghGFY7ZcAXN6fnkR',
  "access_token_key": '963316414021906433-TFseaRObb3EMyVBEXMxvsZ69f3YAwtK',
  "access_token_secret": 'KWk1xAVNW4b02PdxJvAXOgwuVzmUTGdlkUZM4QRXkobrO',
});

export const apiCall = () => {
  console.log('test')
  twitter.get('search/tweets.json', {q: 'node.js'}, function(error, tweets, response) {
    if (!error) {
      console.log(tweets);
    }
  });
}
