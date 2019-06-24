<template>
  <div
    :title="bridge.name"
    v-on:click="handleClick"
    v-html="bridge.nameEncoded">
  </div>
</template>

<style scoped>
div {
  background-color: #0b3954;
  color: #b5bec6;
  cursor: pointer;
  padding: 8px;
  /* Place a transparent border on all elements, so they don't change width on hover */
  border-left: 3px solid transparent;

  /* Instead of wrapping or cropping, show ... if the name is too long */
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

div:hover {
  color: #C7DBE6;
  border-left: 3px solid #bfb1c1;
}
</style>

<script>
export default {
  name: 'MenuItem',
  props: ['bridge'],
  methods: {
    handleClick: function() {
      // Pass a `click` event up to the parent, along with chosen bridge
      this.$emit('click', this.bridge);
    }
  }
}
</script>