<template>
  <div id="nav-area">
    
  </div>
</template>

<script>
export default {
  methods: {
    // change val of buttonView
    changeButtonView() {
      this.$store.commit("setButtonView");
      this.$store.commit("setFilteredLocations");
    },
  },
};
</script>

<style scoped>
#nav-area {
  position: fixed;
  bottom: 0px;
  width: 100%;
  box-shadow: 0px -4px 5px 0px rgba(1, 1, 1, 0.1);
  background-color: #70c1b3;
}
</style>
