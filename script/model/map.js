import Map from "ol/Map.js";
import OSM from "ol/source/OSM.js";
import TileLayer from "ol/layer/Tile.js";
import View from "ol/View.js";
import { fromLonLat } from "ol/proj.js";

export default function createMap(lat, long) {
  //initialises a new Map adn reference the map element
  const map = new Map({
    layers: [
      new TileLayer({
        source: new OSM(),
      }),
    ],
    target: "map",
    view: new View({
      center: fromLonLat([long, lat]),
      zoom: 12,
    }),
  });
  //Returns map
  return map;
}
