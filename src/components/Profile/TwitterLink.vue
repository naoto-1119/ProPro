<template>
  <div class="card text-center">
    <div class="card-header">
      Twitter
    </div>
    <div class="card-body">
      <h5 class="card-title">Link Your Twitter</h5>
      <p class="card-text">
        Please input Twitter screen name and click the Link Start below.
      </p>
      <button type="button" class="btn btn-primary" v-on:click="getTweets">
        Link Start!
      </button>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "twitter-link",
  methods: {
    async getTweets() {
      let res = await axios.get("/users/tweets", { test: 1 });
      console.log("getTweets with", res);
      return res;
    },
  },
};
</script>

<style></style>
