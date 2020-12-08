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
        <a class="nav-item nav-link active" href="#"
          >Profile <span class="sr-only">(current)</span></a
        >
        <a class="nav-item nav-link active" href="#"
          >Product <span class="sr-only">(current)</span></a
        >
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
  methods: {},
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
</style>
