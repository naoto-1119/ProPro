<template>
  <nav class="navbar navbar-expand-lg navbar navbar-dark bg-dark">
    <a class="navbar-brand" href="/">Sell Yourself</a>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNavAltMarkup"
      aria-controls="navbarNavAltMarkup"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <button
          class="nav-item nav-link active"
          v-on:click="changeToAllProfileView"
        >
          Profile <span class="sr-only">(current)</span>
        </button>
        <button
          class="nav-item nav-link active"
          v-on:click="changeToAllProductView"
        >
          Product <span class="sr-only">(current)</span>
        </button>
      </div>
      <Login class="login" />
      <SignUp class="sign-up" />
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
.login {
  position: absolute;
  margin-left: 70%;
}
.sign-up {
  position: absolute;
  margin-left: 75%;
}
.nav-item {
  background: none;
  margin-right: 8px;
}
</style>
