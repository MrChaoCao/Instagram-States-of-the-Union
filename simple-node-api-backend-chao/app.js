const _twitter = require('twitter');
const express = require('express')
const app = express()

const server = app.listen(3000, function(){
  console.log('listening to requests on port 3000')
});
const io = require('socket.io')(server);
// const http = require('http').Server(app)
const path = require('path')
const fetch = require('node-fetch')
// const PORT = 3000

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
  //
  // Working way to get 15 tweets
  // BUT there is no location data
  // twitter.get('search/tweets.json', {q: 'node.js'}, function(error, tweets, response) {
  //   if (!error) {
  //     res.send(tweets)
  //   }
  // });

  //Working way to get a constant flow of tweets
  //BUT code is borrowed from someone else's project
    //Also not sure how to send result to front end
    //Not entirely sure how it works
    //Twitter API is weird, coordinates are nested within coordinates
    //CurrentStream is possibly unecessary
    //non-null constraint unecessary

  // twitter.stream('statuses/filter', {'locations':'-180,-90,180,90'}, function(stream){
  //   currentStream = stream;
  //   currentStream.on('data', function(data) {
  //     if (data.coordinates) {
  //       if (data.coordinates !== null) {
  //         var tweet = {
  //           "lat": data.coordinates.coordinates[0],
  //           "lng": data.coordinates.coordinates[1]
  //         };
  //         console.log(tweet);
  //       }
  //     }
  //   });
  // });

  //Experimental
  // twitter.stream('statuses/filter', {'locations':'-180,-90,180,90'}, function(stream){
  //   stream.on('data', function(data) {
  //     if (data.coordinates !== null && data.coordinates !== undefined)  {
  //       console.log(data.coordinates.coordinates);
  //         var tweet = {
  //           "lat": data.coordinates.coordinates[0],
  //           "lng": data.coordinates.coordinates[1]
  //         };
  //         res.json(tweet);
  //         // res.json(txweet);
  //       }
  //   });
  // });

  var currentStream = null;

  io.on('connection', function(socket) {
  console.log('Connected!');
  socket.on('disconnect', () => console.log('Disconnected'));
  socket.on('start tweets', function() {
    if (currentStream === null) {

        twitter.stream('statuses/filter', {'locations':'-180,-90,180,90'}, function(stream){
          currentStream = stream;
          currentStream.on('data', function(data) {
              if (data.coordinates !== null && data.coordinates !== undefined) {
                var tweet = {
                  "name": data.user.name,
                  "username": data.user.screen_name,
                  "profile_pic": data.user.profile_image_url_https,
                  "text": data.text,
                  "hashtags": data.entities.hashtags,
                  "lat": data.coordinates.coordinates[0],
                  "lng": data.coordinates.coordinates[1]
                };
                socket.broadcast.emit("twitter-stream", tweet);
                socket.emit('twitter-stream', tweet);
            }
          });
        });
    }
  });
  socket.emit('connected');
});

  //Attempt to figure out reverse geocode
  //Verdict: shape of data is really strange, the bounding box of the
  //data requires you to input coordinates in quadruplicate, maybe more
  // twitter.get('geo/reverse_geocode.json', {lat:'37.76893497', long:'-122.42284884'}, function(error, tweets, response) {
  //   if (!error) {
  //     console.log(tweets)
  //   }
  // });

});




//D3 visualization
// app.get('/map', (req, res) => {
//   let results
//   fetch('http://bl.ocks.org/mbostock/raw/4090846/us.json')
//     .then(function(response) {
//         return response.text();
//     }).then(function(body) {
//       results = JSON.parse(body)
//         console.log(typeof body);
//         console.log(body.length);
//         console.log(JSON.parse(body)[0]);
//         res.send(results)
//     });
//
// })

// app.get('/map-values', (req, res) => {
//   req.body.params
//
// })

//
// app.listen(PORT, () => {
//   console.log(__dirname);
//   console.log(`listening on ${PORT}`)
// })
