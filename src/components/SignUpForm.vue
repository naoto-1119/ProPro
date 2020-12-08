<template>
  <form class="wrapper-sign-up">
    <h1>Sign Up</h1>
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
      v-on:click="changeProfileFormView"
    >
      SignUp
    </button>
    <div v-if="error">{{ error }}</div>
  </form>
</template>

<script>
import firebase from "firebase";
import axios from "axios";

export default {
  name: "sign-up-form",
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
    setUserEmail(email) {
      this.$store.commit("setUserEmail", email);
    },
    changeProfileFormView() {
      console.log("changeProfileFormView");
      firebase
        .auth()
        .createUserWithEmailAndPassword(
          this.userCredential.userEmail,
          this.userCredential.userPassword
        )
        .then(async (user) => {
          alert("user created successfully!");
          this.setUserEmail(user.user.email);
          console.log("user mail:", this.$store.state.userEmail);
          await axios
            .post("/users", { email: user.user.email })
            .then((res) => console.log(res))
            .catch((err) => console.log(err));
          this.$store.commit("changeProfileFormView");
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
.wrapper-sign-up {
  margin-top: 10px;
  width: 40%;
  margin-left: auto;
  margin-right: auto;
}
</style>
