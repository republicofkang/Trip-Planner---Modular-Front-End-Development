// console.log("Hello from JavaScript");



//implementing Mapbox API in index.js
const mapboxgl = require("mapbox-gl");

mapboxgl.accessToken = "pk.eyJ1IjoiY29uc3RhbmNla2FuZzEyMyIsImEiOiJjanYyam5uZGMyNXo0NDRwZjhydTZzbTMzIn0.8L8mDHzWmopii4WvFfmr-w";

const map = new mapboxgl.Map({
  container: "map",
  center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
});

//create a new, detached DOM Element and pass it as parameter to the mapboxgl.Marker() constructor function. Then you can set the marker's coordinates (by calling setLngLat) and, finally, attach it to the map using addTo.
//new mapboxgl.Marker(YOUR_DOM_ELEMENT).setLngLat(YOUR_COORDS_ARRAY).addTo(map);
const markerDomEl = document.createElement("div"); // Create a new, detached DIV
markerDomEl.style.width = "32px";
markerDomEl.style.height = "39px";
markerDomEl.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)";

new mapboxgl.Marker(markerDomEl).setLngLat([-74.009, 40.705]).addTo(map); // [-87.641, 41.895] for Chicago

//require maker.js
const buildMarker = require("./marker");

const marker = buildMarker("activity", [-74.009151, 40.705086]); // or [-87.6354, 41.8885]
marker.addTo(map);
