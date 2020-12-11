<template>
  <nav
    class="navbar navbar-expand-lg navbar navbar-dark bg-dark container-fluid"
  >
    <a class="navbar-brand col-xs-1" href="/">ProPro</a>
    <div
      class="collapse navbar-collapse navbar-left"
      id="bs-example-navbar-collapse-1"
    >
      <div class="navbar-nav">
        <button
          class="nav-item nav-link active col-xs-1"
          v-on:click="changeToAllProfileView"
        >
          Profile <span class="sr-only">(current)</span>
        </button>
        <button
          class="nav-item nav-link active col-xs-1"
          v-on:click="changeToAllProductView"
        >
          Product <span class="sr-only">(current)</span>
        </button>
      </div>
      <div class="nav navbar-nav ml-auto">
        <Login class="login mr-2" />
        <SignUp class="sign-up" />
      </div>
    </div>
  </nav>
</template>

<script>
import Login from "./Login.vue";
import SignUp from "./SignUp.vue";

export default {
  name: "navbar",
  components: {
    Login,
    SignUp,
  },
  methods: {
    changeToAllProfileView() {
      this.$store.commit("changeToAllProfileView");
    },
    changeToAllProductView() {
      this.$store.commit("changeToAllProductView");
    },
  },
};
</script>

<style>
/* .login {
  margin-right: px;
} */
.nav-item {
  background: none;
  margin-right: 8px;
}
</style>
