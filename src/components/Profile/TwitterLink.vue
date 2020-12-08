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
      <div v-for="(tweetid, index) in tweets" :key="index" class="embed-tweets">
        <Tweet v-bind:id="tweetid"></Tweet>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
require("dotenv").config();

export default {
  name: "twitter-link",
  data() {
    return {
      tweets: [],
    };
  },
  methods: {
    async getTweets() {
      let res = await axios.get("/users/tweets", {
        params: {
          screenName: this.$store.state.twitterScreenName,
        },
      });
      console.log("getTweets with", res.data);
      this.tweets = res.data;
      return res;
    },
  },
};
</script>

<style>
.embed-tweets {
  margin-left: auto;
  margin-right: auto;
}
</style>
