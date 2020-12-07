<template>
  <div class="container">
    <ProfileImage class="profile-image" />
    <TwitterLink />
  </div>
</template>

<script>
import ProfileImage from "./ProfileImage.vue";
import TwitterLink from "./TwitterLink.vue";

export default {
  name: "profile page",
  components: {
    ProfileImage,
    TwitterLink,
  },
};
</script>

<style>
.profile-image {
  margin-bottom: 10px;
}
</style>
