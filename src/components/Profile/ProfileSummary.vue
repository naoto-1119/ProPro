<template>
  <div class="card summary">
    <div class="card-body">
      <h5 class="card-title">{{ this.$store.state.userName }}</h5>
      <p class="card-text">
        {{ this.$store.state.profileDescription }}
      </p>
      <b-badge class="twitter" pill variant="info">{{
        "@" + this.$store.state.twitterScreenName
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
    </div>
  </div>
</template>

<script>
export default {
  name: "profile-summary",
};
</script>

<style>
.summary {
  width: 74%;
  height: 210px;
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
