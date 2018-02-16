# States of the Union
## Background and overview
States of the union is a data visualization tool to show which states tweet the most relative to their geographic area.

When the app is started up a constant stream of tweets will be fetched from the Twitter API and displayed to the user. Tweets will be sorted by geolocation to determine from what state it originates. Upon loading all states will start at size zero. As tweets start coming in, the size of states will be rescaled to display each state's relative share of American tweets.

For example, if Delaware has the first tweet, then Delaware will be the size of the United states. If Pennsylvania has the 2nd tweet, both states will take up half the country, etc.


## Functionality & MVP
Users will see a scalable map of the 50 states of the country. All states will start with 0 size and will inflate as users begin tweeting.




## Architecture and Technologies
Instagram States of the Union will be implemented with:
* Vanilla JS for overall project structure and to create the user navigation experience
* D3 data visualization to render the scaled map
* Twitters public API to produce tweets in real time
* socket.io to allow the server to continually broadcast tweets to the front end
* Google's Geocoding API to convert geolocations into state names
* Webpack to bundle and serve scripts


## Implementation Timeline

#### Over the weekend
- [x] Investigate options
- [x] Work on a different project proposal

#### Day 1
- [x] Conceptualize new project and write Readme
- [x] Feasibility meeting
- [x] Learn about D3
- [x] Acquire API keys for google, twitter

#### Day 2
- [x] Render the D3 non-contiguous cartogram
- [x] Read twitter API documentation
- [x] Get a tweet
- [x] Realize project is far more complicated than first assumed

#### Day 3
- [x] Learn twitter's standard api cannot be used the way I want
- [x] Mental breakdown, accept fact that project won't have anything to show.

#### Day 4
- [x] Find out about twitter's streaming API
- [x] Return a constant stream of tweets
- [x] Learn that websockets are required to use the twitter stream because otherwise the tweets will never leave the server.
- [x] Learn valuable lessons about websockets
- [ ] be able to show tweets on the front end


#### Bonus features
- [ ] Be able to functionally use websockets
- [ ] Use google geocoding API to successfully map tweet geolocations to State names
- [ ] Live update D3 visualization state scaling with tweeting states
- [ ] Display Tweets on page
- [ ] Style project
- [ ] Finish project
