import Leaflet from 'leaflet';

// General location/zoom to see all of Ontario
const ontario = {
  coords: [51.2538, -85.3232],
  zoom: 5
};

// By default, zoom the map to this level
const defaultZoom = 14;

// Create a class to manage our map and popup
class SimpleMap {
  constructor(el) {
    this.map = Leaflet.map(el);

    // Add the Open Street Maps tile layer (free)
    Leaflet
      .tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png')
      .addTo(this.map);
  
    // Show an initial map of Ontario zoomed out
    this.map.setView(ontario.coords, ontario.zoom);
  }

  // update method, takes a location info, and updates the map and popup based on it
  update(lat, lng, name) {
    // convert lat/lng to a Leaflet LatLng Object
    const coords = Leaflet.latLng(lat, lng);

    // Reposition the map to this location
    this.map.setView(coords, defaultZoom);

    // Update popup to the same position, with new name text
    if(this.popup) {
      // Update existing popup position and text
      this.popup.setLatLng(coords);
      this.popup.setContent(name);
    } else {
      // Create a popup if one doesn't exist
      this.popup = Leaflet
        .popup({
          // Don't let the user close this, we'll manage it
          closeButton: false,
          closeOnEscapeKey: false,
          closeOnClick: false
        })
        .setLatLng(coords)
        .setContent(name)
        .openOn(this.map);
    }
  }
}

// Export this class so others can use it
export default SimpleMap;