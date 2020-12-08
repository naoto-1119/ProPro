<template>
  <div id="app">
    <Navbar />
    <div class="wrapper-main">
      <div v-if="this.$store.state.loginView">
        <LoginForm />
      </div>
      <div v-else-if="this.$store.state.allProfileView">
        <ProfileAllPage />
      </div>
      <div v-else-if="this.$store.state.allProductView">
        <ProductAllPage />
      </div>
      <div v-else-if="this.$store.state.signUpView">
        <SignUpForm />
      </div>
      <div v-else-if="this.$store.state.profileFormView">
        <ProfileForm />
      </div>
      <div v-else-if="this.$store.state.profilePage">
        <ProfilePage />
      </div>
      <div v-else-if="!this.$store.state.loginView">
        <h2>Recent Activity</h2>
        <h2>Featured Item</h2>
        <Product />
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import LoginForm from "./components/LoginForm.vue";
import Product from "./components/Product.vue";
import SignUpForm from "./components/SignUpForm.vue";
import ProfileForm from "./components/ProfileForm.vue";
import ProfilePage from "./components/Profile/ProfilePage.vue";
import ProfileAllPage from "./components/ProfileAll/ProfileAllPage.vue";
import ProductAllPage from "./components/ProductAll/ProductAllPage.vue";

export default {
  name: "app",
  components: {
    Navbar,
    LoginForm,
    Product,
    SignUpForm,
    ProfileForm,
    ProfilePage,
    ProfileAllPage,
    ProductAllPage,
  },
};
</script>

<style>
#id {
  text-align: center;
}
.wrapper-main {
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;
}
</style>
