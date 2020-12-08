<template>
  <form class="wrapper-login">
    <h1>Log In</h1>
    <div class="form-group">
      <label for="exampleInputEmail1">Email address</label>
      <input
        type="email"
        class="form-control"
        id="exampleInputEmail1"
        aria-describedby="emailHelp"
        placeholder="Enter email"
        v-model="userCredential.userEmail"
      />
    </div>
    <div class="form-group">
      <label for="exampleInputPassword1">Password</label>
      <input
        type="password"
        class="form-control"
        id="exampleInputPassword1"
        placeholder="Password"
        v-model="userCredential.userPassword"
      />
    </div>
    <button
      type="button"
      class="btn btn-primary"
      v-on:click="changeToProfilePage"
    >
      Log In
    </button>
    <div v-if="error">{{ error }}</div>
  </form>
</template>

<script>
import firebase from "firebase";

export default {
  name: "login-form",
  data() {
    return {
      userCredential: {
        userEmail: "",
        userPassword: "",
      },
      error: null,
    };
  },
  methods: {
    changeToProfilePage() {
      firebase
        .auth()
        .signInWithEmailAndPassword(
          this.userCredential.userEmail,
          this.userCredential.userPassword
        )
        .then((user) => {
          alert("Log In Successful!");
          console.log("user info:", user);
          this.$store.commit("changeToProfilePage");
        })
        .catch((e) => {
          this.error = e.message;
        });
    },
  },
};
</script>

<style>
.container {
  margin-top: 10px;
}
.wrapper-login {
  margin-top: 10px;
  width: 40%;
  margin-left: auto;
  margin-right: auto;
}
</style>
