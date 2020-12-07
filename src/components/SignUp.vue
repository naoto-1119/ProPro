<template>
  <button type="button" class="btn btn-primary" v-on:click="changeSignUpView">
    Sign Up
  </button>
</template>

<script>
export default {
  name: "sign-up-button",
  methods: {
    changeSignUpView() {
      this.$store.commit("changeSignUpView");
    },
  },
};
</script>

<style></style>
