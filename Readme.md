# Instagram: States of the Union
## Background and overview
Instagram states of the union (ISOTU) is a data visualization tool to show the user which state in the country are users uploading posts being made for any given hashtag.

Users will be presented with an unscaled image of the united states. Users will be able to input a hash tag and be presented with a map where each state's landmass has been rescaled by the popularity of posts with that tag in each state.

```
const percentSize =  stateArea / countryArea
const percentTags = tagPostsInState / totalTagPosts
const scalingFactor = (percentTags - percentSize)

const scaledSize = percentSize + scalingFactor*100
```

![](./isotu_wireframe)
For example a search for tags involving spring break might produce a map like this


## Functionality & MVP
Users will see a scalable map of the 50 states of the country, and a search bar used to input desired hashtags.

Upon inputting a tag the instagram database will be queried to find the total number of posts bearing that tag. Since each post includes a geotag, posts can be assigned to a state based on the coordinates where the post was uploaded.

After the relative popularity of the inputted tag is determined, each state's total area will be scaled by its popularity for the selected tag and the rescaled image of the United States will be presented to the user.

### Bonus
Instead of showing just the resized state, ISOTU will display the most liked image for the given tag cropped to fit state borders.

## Architecture and Technologies
Instagram States of the Union will be implemented with:
* Vanilla JS for overall project structure and to create the user navigation experience
* D3 data visualization to render the scaled map
* Instagram's public API to find hash tag counts and geolocations
* Google's Geocoding API to convert geolocations into state names
* Webpack to bundle and serve scripts


## Implementation Timeline

#### Over the weekend
- [ ] Investigate options
- [ ] Work on a different project proposal

#### Day 1
- [ ] Conceptualize new project and write Readme
- [ ] Feasibility meeting
- [ ] Learn D3, render State map
- [ ] Acquire API keys for google, instagram,

#### Day 2
- [ ] Fine tune rendering of state map
- [ ] Familiarize myself with the data returned from the API calls

#### Day 3
- [ ] Be able to apply scaling to states
- [ ] Create user input field

#### Day 4
- [ ] Debugging
- [ ] Styling and improvements to user experience

#### Bonus features
- [ ] Fill state portraits with sample photos from data set
- [ ] Implement animations to provide a more enjoyable user experience
