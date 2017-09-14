import MapboxCss from 'mapbox-gl/dist/mapbox-gl.css';

import * as mapboxgl from 'mapbox-gl';

const container = 'map';

mapboxgl.accessToken =
'pk.eyJ1Ijoicm9mcm9sIiwiYSI6ImNqN2hmcG9wMjFpdTQzNG10b3Y0eDVjZWwifQ._YH6Um_naC0ZOWDn9t2TWQ';
const map = new mapboxgl.Map({
  container,
  style: 'mapbox://styles/mapbox/streets-v10',
  center: [89.416652, 27.428595],
  zoom: 9,
});

const children = [
  {
    coordinates: {
      lat: 27.428595,
      long: 89.416652,
    },
    properties: {
      imgUrl: 'http://i.imgur.com/vNaYqiQ.png',
      iconSize: [64, 64],
    },
  },
  {
    coordinates: {
      lat: 27.572792,
      long: 89.639286,
    },
    properties: {
      imgUrl: 'http://i.imgur.com/89QHSvG.png',
      iconSize: [64, 64],
    },
  },
  {
    coordinates: {
      lat: 27.592087,
      long: 89.879746,
    },
    properties: {
      imgUrl: 'http://i.imgur.com/hX5iJSk.png',
      iconSize: [64, 64],
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

children.map(marker =>
  new mapboxgl.Marker(markerElement(marker))
    .setLngLat([marker.coordinates.long, marker.coordinates.lat])
    .addTo(map),
);


map.on('load', () => {
  map.addLayer({
    id: 'route',
    type: 'line',
    source: {
      type: 'geojson',
      data: {
        type: 'Feature',
        properties: {},
        geometry: {
          type: 'LineString',
          coordinates: children.map(marker => [marker.coordinates.long, marker.coordinates.lat]),
        },
      },
    },
    layout: {
      'line-join': 'round',
      'line-cap': 'round',
    },
    paint: {
      'line-color': '#888',
      'line-width': 2,
    },
  });
});
