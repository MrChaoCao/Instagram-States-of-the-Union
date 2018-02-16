
while (true) {
  twitter.stream('statuses/filter', {'locations':'-180,-90,180,90'}, function(stream){
    currentStream = stream;
    currentStream.on('data', function(data) {
      if (data.coordinates) {
        if (data.coordinates !== null) {
          var tweet = {
            "lat": data.coordinates.coordinates[0],
            "lng": data.coordinates.coordinates[1]
          };
          console.log(tweet);
        }
      }
    });
  });
}
