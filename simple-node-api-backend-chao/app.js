const _twitter = require('twitter');
const express = require('express')
const app = express()
// const http = require('http').Server(app)
const path = require('path')
const fetch = require('node-fetch')
const PORT = 3000

app.use(express.static('public'))


app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './public/index.html'))
})


app.get('/tweets', (req, res) => {

  var twitter = new _twitter({
    "consumer_key": 'XHejtyytxyQpXx2wI0dOw08eH',
    "consumer_secret": 'aoqSPa32XmPey8dVCTqtWRNjmaiEmFPAqYghGFY7ZcAXN6fnkR',
    "access_token_key": '963316414021906433-TFseaRObb3EMyVBEXMxvsZ69f3YAwtK',
    "access_token_secret": 'KWk1xAVNW4b02PdxJvAXOgwuVzmUTGdlkUZM4QRXkobrO',
  });

  twitter.get('search/tweets.json', {q: 'node.js'}, function(error, tweets, response) {
    if (!error) {
      res.send(tweets)
    }
  });

});




app.get('/map', (req, res) => {
  let results
  fetch('http://bl.ocks.org/mbostock/raw/4090846/us.json')
    .then(function(response) {
        return response.text();
    }).then(function(body) {
      results = JSON.parse(body)
        console.log(typeof body);
        console.log(body.length);
        console.log(JSON.parse(body)[0]);
        res.send(results)
    });

})

app.get('/map-values', (req, res) => {
  req.body.params

})


app.listen(PORT, () => {
  console.log(__dirname);
  console.log(`listening on ${PORT}`)
})
