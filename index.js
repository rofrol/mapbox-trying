import MapboxCss from 'mapbox-gl/dist/mapbox-gl.css';

import * as mapboxgl from 'mapbox-gl';

const container = 'map';

mapboxgl.accessToken =
'pk.eyJ1Ijoicm9mcm9sIiwiYSI6ImNqN2hmcG9wMjFpdTQzNG10b3Y0eDVjZWwifQ._YH6Um_naC0ZOWDn9t2TWQ';
const map = new mapboxgl.Map({
  container,
  style: 'mapbox://styles/mapbox/streets-v10',
  center: [-27.428595, 89.416652],
  zoom: 3,
});

const children = [
  {
    coordinates: {
      lat: -27.428595,
      long: 89.416652,
    },
    properties: {
      imgUrl: 'http://i.imgur.com/vNaYqiQ.png',
      iconSize: [60, 60],
    },
  },
  {
    coordinates: {
      lat: -27.472792,
      long: 89.639286,
    },
    properties: {
      imgUrl: 'http://i.imgur.com/89QHSvG.png',
      iconSize: [60, 60],
    },
  },
];

const markerElement = (marker) => {
  const el = document.createElement('div');
  el.className = 'marker';
  el.style.backgroundImage = `url(${marker.properties.imgUrl})`;
  el.style.width = `${marker.properties.iconSize[0]}px`;
  el.style.height = `${marker.properties.iconSize[1]}px`;
  return el;
};

const markerAdded = new mapboxgl.Marker(markerElement(children[0]))
  .setLngLat([-79.38, 43.65])
  .addTo(map);
