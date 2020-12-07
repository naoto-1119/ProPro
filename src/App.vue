<template>
  <div id="app">
    <Navbar />
    <LoginForm />
    <h2>Recent Activity</h2>
    <h2>Featured Item</h2>
    <Product />
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import LoginForm from "./components/LoginForm.vue";
import Product from "./components/Product.vue";

export default {
  name: "app",
  components: {
    Navbar,
    LoginForm,
    Product,
  },
};
</script>

<style></style>
