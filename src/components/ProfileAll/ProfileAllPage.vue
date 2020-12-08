<template>
  <div>
    <h1>Members</h1>
    <div
      v-for="profile in this.$store.state.allProfile"
      :key="profile.user_id"
      class="all-cards"
      style="max-width: 540px;"
    >
      <div class="row g-0">
        <div class="col-md-4">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8rXH4vmbNMBvyxWRCb0htcTMWVWFkM6ijqA&usqp=CAU"
          />
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">{{ profile.user_name }}</h5>
            <b-badge class="twitter" pill variant="info">{{
              "@" + profile.twitter_screen_name
            }}</b-badge>
            <b-badge class="instagram" pill variant="info">{{
              "@" + "instagram"
            }}</b-badge>
            <b-badge class="facebook" pill variant="info">{{
              "@" + "facebook"
            }}</b-badge>
            <b-badge class="youtube" pill variant="info">{{
              "@" + "youtube"
            }}</b-badge>
            <p class="card-text">
              {{ profile.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "all-profile",
  async mounted() {
    const allProfile = await axios.get("/users/profile/all", {});
    console.log("product:", allProfile.data);
    this.$store.commit("setAllProfile", allProfile.data);
    const allProduct = await axios.get("/users/product/all", {});
    console.log("product:", allProduct.data);
    this.$store.commit("setAllProduct", allProduct.data);
  },
};
</script>

<style>
.all-cards {
  display: inline-block;
  margin-right: 10px;
  margin-bottom: 10px;
  box-shadow: 1px 2px 3px 0px rgba(0, 0, 0, 0.38);
}
.twitter {
  margin-right: 3px;
  background: #00a6ff;
}
.facebook {
  background: blue;
  margin-right: 3px;
}
.instagram {
  background: radial-gradient(
    circle at 30% 107%,
    #fdf497 0%,
    #fdf497 5%,
    #fd5949 45%,
    #d6249f 60%,
    #285aeb 90%
  );
  margin-right: 3px;
}
.youtube {
  background: red;
}
</style>
