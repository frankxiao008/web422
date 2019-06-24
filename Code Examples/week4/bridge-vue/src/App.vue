<template>
  <div id="app">

    <nav id="menu">
      <bridge-menu @change="bridgeSelected" />
    </nav>

    <div id="bridge-info">           
      <bridge-info :bridge="bridge" />    
    </div>

  </div>

</template>

<style>
html,
body,
main {
  height: 100%;
  max-height: 100%;
  font-family: Helvetica, Arial, sans-serif;
  margin: 0;
}

main {
  display: flex;
  flex-direction: column;
}

#app {
  height: 100%;
  display: flex;
  flex-direction: row;
  overflow: hidden;
}

#menu {
  flex: 1;
  overflow: auto;
}

#bridge-info {
  flex: 2;
}

@media screen and (max-width: 400px) {
  #app {
    flex-direction: column;
  }
}
</style>

<script>
import BridgeMenu from './components/BridgeMenu.vue';
import BridgeInfo from './components/BridgeInfo.vue';

export default {
  name: "App",
  data: function() {
    return {
      bridge: null
    };
  },
  components: {
    BridgeMenu,
    BridgeInfo
  },
  methods: {
    bridgeSelected: function(bridge) {
      this.bridge = bridge;
    }
  }
};
</script>
