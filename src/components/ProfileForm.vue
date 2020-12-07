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
      />
    </div>
    <div class="form-group">
      <label for="exampleFormControlInput1">Twitter Screen Name</label>
      <input
        type="text"
        class="form-control"
        id="exampleFormControlInput1"
        placeholder="sellyourself1234"
      />
    </div>
    <div class="form-group">
      <label for="exampleFormControlTextarea1">Description</label>
      <textarea
        class="form-control"
        id="exampleFormControlTextarea1"
        rows="3"
      ></textarea>
    </div>
    <button
      type="submit"
      class="btn btn-primary"
      v-on:click="changeToProfilePage"
    >
      Submit
    </button>
  </form>
</template>

<script>
export default {
  name: "profile-form-view",
  methods: {
    changeToProfilePage() {
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
