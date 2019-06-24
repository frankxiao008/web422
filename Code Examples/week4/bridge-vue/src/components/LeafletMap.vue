<template>
  <div class="map"></div>
</template>

<style>
/* Load Leaflet's CSS from within our node_modules/ dir */
@import url('../../node_modules/leaflet/dist/leaflet.css');

.map {
  width: 100%;
  height: 100%;
}
</style>

<script>
import SimpleMap from '../simple-map.js';

export default {
  name: 'LeafletMap',
  props: ['location'],
  data: function() {
    return {
      map: null
    };
  },
  mounted() {
    // Wait on the containing DOM element to be fully drawn/sized so it fills it.
    this.$nextTick(() => {
      this.map = new SimpleMap(this.$el);
    });
  },
  watch: {
    location: function(newBridge) {
      // When the location prop changes, get its new value
      // and update our SimpleMap instance.
      this.map.update(newBridge.lat, newBridge.lng, newBridge.nameEncoded);
    }
  }
}
</script>