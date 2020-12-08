<template>
  <form class="container">
    <h1>Create Your Profile</h1>
    <div class="form-group">
      <label for="exampleFormControlFile1">Profile Picture</label>
      <input
        type="file"
        class="form-control-file"
        id="exampleFormControlFile1"
      />
    </div>
    <div class="form-group">
      <label for="exampleFormControlInput1">User Name</label>
      <input
        type="text"
        class="form-control"
        id="exampleFormControlInput1"
        placeholder="sellyourself1234"
        v-model="userName"
      />
    </div>
    <div class="form-group">
      <label for="exampleFormControlInput1">Twitter Screen Name</label>
      <input
        type="text"
        class="form-control"
        id="exampleFormControlInput1"
        placeholder="sellyourself1234"
        v-model="twitterScreenName"
      />
    </div>
    <div class="form-group">
      <label for="exampleFormControlTextarea1">Description</label>
      <textarea
        class="form-control"
        id="exampleFormControlTextarea1"
        rows="3"
        v-model="description"
      ></textarea>
    </div>
    <button
      type="button"
      class="btn btn-primary"
      v-on:click="changeToProfilePage"
    >
      Submit
    </button>
  </form>
</template>

<script>
import axios from "axios";

export default {
  name: "profile-form-view",
  data() {
    return {
      userName: "",
      twitterScreenName: "",
      description: "",
    };
  },
  methods: {
    async changeToProfilePage() {
      console.log(this.userName);
      console.log(this.twitterScreenName);
      console.log(this.description);
      const user = await axios.get("/users", {
        params: { userEmail: this.$store.state.userEmail },
      });
      console.log("get request user:", user);
      const user_name = this.userName;
      const twitter_screen_name = this.twitterScreenName;
      const description = this.description;
      const user_id = user.data[0].user_id;
      console.log(user_id);
      const result = await axios.post("/users/profile", {
        user_name,
        description,
        twitter_screen_name,
        user_id,
      });
      console.log("result :", result);
      this.$store.commit("changeToProfilePage");
    },
  },
};
</script>

<style>
.container {
  margin-top: 10px;
}
</style>
