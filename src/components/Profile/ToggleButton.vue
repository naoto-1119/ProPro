<template>
  <div class="btn-group btn-group-lg" role="group" aria-label="Basic example">
    <button
      type="button"
      class="btn btn-secondary"
      v-on:click="changeToProfileView"
    >
      Profile
    </button>
    <button
      type="button"
      class="btn btn-secondary"
      v-on:click="changeToProductView"
    >
      Product
    </button>
  </div>
</template>

<script>
export default {
  name: "toggle-button",
  methods: {
    changeToProfileView() {
      this.$store.commit("changeToProfileView");
    },
    changeToProductView() {
      this.$store.commit("changeToProductView");
    },
  },
};
</script>

<style></style>
