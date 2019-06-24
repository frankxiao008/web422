<template>
  <div id="menu">
    <div v-if="status.errored">
      <!-- We could do a better job with this error, just something to start... -->
      <p>Error: unable to load bridge data</p>
    </div>
    <div v-else>
      <div v-if="status.loading">Loading...</div>
      <div v-else>
        <!-- use our MenuItem component, using HTML style kebab-case -->
        <menu-item
          v-for="bridge of bridges"
          v-bind:key="bridge.id"
            :bridge="bridge"
          @click="bridgeSelected"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
#menu {
  height: 100%;
}
</style>

<script>
import MenuItem from './MenuItem.vue';
import getBridgeData from '../bridges.js';

export default {
  name: 'BridgeMenu',
  data: function() {
    return {
      status: {
        loading: false,
        errored: false
      },
      bridges: null
    }
  },
  components: {
    MenuItem
  },
  created: function() {
    this.loadBridges();
  },
  methods: {
    loadBridges: function() {
      this.status.loading = true;

      // Use our bridge.js function to talk to the REST API.
      getBridgeData()
        .then(bridges => {
          this.status.loading = false;
          this.bridges = bridges;
        })
        .catch(err => {
          console.error('Unable to load bridge data', err.message);
          this.status.errored = true;
        });
    },
    bridgeSelected: function(bridge) {
      // When the user clicks a menu item, emit a `change`
      // event for the menu control, along with bridge value
      this.$emit('change', bridge);
    }
  }
}
</script>
