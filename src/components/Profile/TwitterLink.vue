<template>
  <div v-if="false">
    <Tweet id="1335971721262796801"></Tweet>
  </div>
  <div v-else class="card text-center">
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
    <div v-html="embed"></div>
  </div>
</template>

<script>
import axios from "axios";
require("dotenv").config();

export default {
  name: "twitter-link",
  data() {
    return {
      // script tags cannot be run inside a Vue component
      embed: "<p>this is a test for rendering</p>",
    };
  },
  methods: {
    async getTweets() {
      let res = await axios.get("/users/tweets", { test: 1 });
      console.log("getTweets with", res.data);
      return res;
    },
  },
};
</script>

<style></style>
