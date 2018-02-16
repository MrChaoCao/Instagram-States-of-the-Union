// import {apiCall} from './twitter.js';

document.addEventListener('DOMContentLoaded', () => {

 // console.log('hello');
 // // Ratio of Obese (BMI >= 30) in U.S. Adults, CDC 2008
 // var valueById = [
 //    NaN, .187, .198,  NaN, .133, .175, .151,  NaN, .100, .125,
 //   .171,  NaN, .172, .133,  NaN, .108, .142, .167, .201, .175,
 //   .159, .169, .177, .141, .163, .117, .182, .153, .195, .189,
 //   .134, .163, .133, .151, .145, .130, .139, .169, .164, .175,
 //   .135, .152, .169,  NaN, .132, .167, .139, .184, .159, .140,
 //   .146, .157,  NaN, .139, .183, .160, .143
 // ];
 //
 // var path = d3.geo.path();
 //
 // var svg = d3.select("body").append("svg")
 //     .attr("width", 960)
 //     .attr("height", 500);
 //
 // d3.json("/map", function(error, us) {
 //   if (error) throw error;
 //
 //   svg.append("path")
 //       .datum(topojson.feature(us, us.objects.land))
 //       .attr("class", "land")
 //       .attr("d", path);
 //
 //   svg.selectAll(".state")
 //       .data(topojson.feature(us, us.objects.states).features)
 //     .enter().append("path")
 //       .attr("class", "state")
 //       .attr("d", path)
 //       .attr("transform", function(d) {
 //         var centroid = path.centroid(d),
 //             x = centroid[0],
 //             y = centroid[1];
 //         return "translate(" + x + "," + y + ")"
 //             + "scale(" + Math.sqrt(valueById[d.id] * 5 || 0) + ")"
 //             + "translate(" + -x + "," + -y + ")";
 //       })
 //       .style("stroke-width", function(d) {
 //         return 1 / Math.sqrt(valueById[d.id] * 5 || 1);
 //       });
 //
 //
 //       let url = './tweets';
 //       fetch(url)
 //        .then((response) => response.json()) //transform the data to json
 //        .then((data) => {
 //          console.log(data);
 //        });
 // });

 // twitter api call
 // twitter.get('search/tweets.json', {q: 'node.js'}, function(error, tweets, response) {
 //   if (!error) {
 //     console.log(tweets);
 //   }
 // });

 // apiCall();

 if (io!== undefined) {
    var socket = io.connect('https://localhost:3000');
    socket.on('twitter-stream', function(data){
      if (data.hashtags.length > 0) {
        let tweetHashtags = data.hashtags.map(tag => {return tag.text;});
        tweetHashtagStream.push(tweetHashtags);
      }

      let tweetContent = '<div id="content">' + '<div id="prof-info">' +
      `<img id="prof-pic" src="${data.profile_pic}"/>` + '<div id="prof-names">' +
      '<div id="name">' + data.name + '</div>'+
      '<div id="username">' + '@' + data.username + '</div>' + '</div>' + '</div>' +
      data.text +
      '</div>';

    socket.on('connected', function(res){
      socket.emit('start tweets');
    });
  }


})
})
