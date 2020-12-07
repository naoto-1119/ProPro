<template>
  <div id="app">
    <Navbar />
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Login from "./components/Login.vue";


export default {
  name: "app",
  components: {
    Navbar,
    Login,
  },
};
</script>

<style>
</style>
