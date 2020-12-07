<template>
  <form class="container">
    <h1>Sign Up</h1>
    <div class="form-group">
      <label for="exampleInputEmail1">Email address</label>
      <input
        type="email"
        class="form-control"
        id="exampleInputEmail1"
        aria-describedby="emailHelp"
        placeholder="Enter email"
      />
    </div>
    <div class="form-group">
      <label for="exampleInputPassword1">Password</label>
      <input
        type="password"
        class="form-control"
        id="exampleInputPassword1"
        placeholder="Password"
      />
    </div>
    <button
      type="submit"
      class="btn btn-primary"
      v-on:click="changeProfileFormView"
    >
      SignUp
    </button>
  </form>
</template>

<script>
export default {
  name: "sign-up-form",
  methods: {
    changeProfileFormView() {
      console.log("test");
      this.$store.commit("changeProfileFormView");
    },
  },
};
</script>

<style>
.container {
  margin-top: 10px;
}
</style>
