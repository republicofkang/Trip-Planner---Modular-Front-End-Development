//**Mapbox GL JS** is a JavaScript library for interactive, customizable vector maps on the web.
const mapbox = require("mapbox-gl");

const iconURLs = {
    hotels: "http://i.imgur.com/D9574Cu.png",
    restaurants: "http://i.imgur.com/cqR6pUI.png",
    activities: "http://i.imgur.com/WbMOfMl.png"
};

const buildMarker = function(type, coords) {
    // Your Code Here
    const markerDomEl = document.createElement("div");
    markerDomEl.style.width = "32px";
    markerDomEl.style.height = "39px";
    markerDomEl.style.backgroundImage = `url(${iconURLs.type})`;
    return new mapboxgl.Marker(markerDomEl).setLngLat(coords);
};

module.exports = buildMarker;
