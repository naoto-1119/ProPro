<template>
  <button
    type="button"
    class="btn btn-outline-primary"
    v-on:click="changeLoginView"
  >
    Log In
  </button>
</template>

<script>
export default {
  name: "login",
  methods: {
    changeLoginView() {
      this.$store.commit("changeLoginView");
    },
  },
};
</script>

<style></style>
