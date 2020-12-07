<template>
  <form class="container">
    <div>Sign Up</div>
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
    <button type="submit" class="btn btn-primary" v-on:click="changeProfileFormView">Sign Up</button>
  </form>
</template>

<script>
export default {
  name: "sign-up",
  methods: {
    // change val of buttonView
    changeProfileFormView() {
      this.$store.commit("changeProfileFormView");
    },
  },
};

<style>
</style>
