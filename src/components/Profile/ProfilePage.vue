<template>
  <div class="wrapper">
    <ToggleButton class="toggle-button" />
    <div v-if="this.$store.state.profileOrProductView === 'product'">
      <ProductPage />
    </div>
    <div v-else>
      <div class="row">
        <ProfileImage class="profile-image" />
        <ProfileSummary class="profile-summary" />
      </div>
      <TwitterLink />
    </div>
  </div>
</template>

<script>
import ProfileImage from "./ProfileImage.vue";
import TwitterLink from "./TwitterLink.vue";
import ProfileSummary from "./ProfileSummary.vue";
import ToggleButton from "./ToggleButton.vue";
import ProductPage from "../Product/ProductPage";
import axios from "axios";

export default {
  name: "profile-page",
  components: {
    ProfileImage,
    TwitterLink,
    ProfileSummary,
    ToggleButton,
    ProductPage,
  },
  async mounted() {
    console.log(this.$store.state.userId);
    const userProfile = await axios.get("/users/profile/id", {
      params: { userId: this.$store.state.userId },
    });
    console.log(userProfile);
    this.$store.commit("setProfileId", userProfile.data[0].profile_id);
  },
};
</script>

<style>
.profile-image {
  margin-top: 10px;
  margin-bottom: 10px;
  margin-left: 13px;
}
.profile-summary {
  margin-top: 10px;
  margin-bottom: 10px;
  margin-left: 10px;
}
.profile-feature {
  margin-top: 10px;
  margin-bottom: 10px;
  margin-left: 10px;
  position: relative;
}
.wrapper {
  margin-left: auto;
  margin-right: auto;
  width: 75%;
}
.toggle-button {
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;
}
</style>
