# Week ??? (Midterm +1)

*As always: make a copy of this repository to commit changes to*

## Class Outline

### Introduction
- turf.js (example only)
  - Spatial join demo
  - Measurement extraction
  - Aggregation and analysis
  - Other stuff (classification, interpolation, utility methods)
- Quick mention of other potentially interesting libraries
  - charts: c3js, chartjs, chartist-js
  - colors: chromajs
  - temporal: moment.js
  - stats: simplestatistics
- Leaflet draw (a plugin for the leaflet library)
  - Generate polygons, points, and lines from user interaction
- Mapbox APIs
  - Free(ish) alternative to writing backend code
  - Powerful (though limited for free users)
  - Geocoding
  - Routing

### Interaction and analysis

##### Section 1: Leaflet Draw
- Plugin introduction
- [Lab 1](lab/lab1)

##### Section 2: Mapbox Utilities
- In-class exploration of experimentation with an API
- [Lab 2](lab/lab2)

## Homework Assignment (Due: Fri, April 10)

- Complete [Labs](lab)
- Complete [Assignment](assignment)

### Notes
- slider (https://codepen.io/lknarf/pen/KWzRed)
- simple statistics (https://simplestatistics.org/)
- Mapbox -gl (graphics) - js (https://docs.mapbox.com/mapbox-gl-js/examples/):: necessity if have more than 1000 points
- chroma.js (nice color scales)
- charting libraries (chartist.js, charts)
- turf.js(create geometries)
  - lineArc:specify the coord of the center of the circle, draws arc
  - use L.geoJSON(turf geojson feature) to add to map
- json minify (online tool to compress any json code you copy, removing breaks)
- add polygons/lines created from turf to maps by using LEAFLET 
- stringify the result, copy and paste it. 
- feature collection is not a polygon... so sometimes input wants a polygon and not a feature collectoin. Need to extract out the corresponding polygon. 
- templates: way of updating strings with a variable. ${variable}
$.parseHTML(`<div class="shape" data-leaflet-id=${id}><h1>Current ID: ${id}</h1></div>
`) //use backticks so tht $.parseHTml can change the id
- $(#shapes).append
- jQuery, lookup by attribute s
- layer.on("mouseover", function(e){
e.target._leaflet_id.
// e is the event happeningwhen mouseover 
})
- $('#shapes').append($.parseHTML(`<div class="shape" data-leaflet-id=${id}><h1>Current ID: ${id}</h1></div>`))

## Notes - 11 April
MAPBOX
- GEOCODE


- polyline.decode('string returned from API')
- If the mapbox API returns a list of points, can use turf.js to turn it into a line
revcoords = _.map(coords, function(coord){return coord[1], coord[0]}) // to flip the coords 
- JSON.stringify(truf.lineString(revcoords))
- L.geoJSON(turf.lineString(revcoords)).addTo(map)

lab2
- allow 
- get lat lng from the origina name 
- decode the polyline that comes back --> polyline.decode 





