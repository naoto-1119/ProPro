<template>
  <div>
    <b-button
      :class="visible ? null : 'collapsed'"
      class="mb-2"
      variant="primary"
      :aria-expanded="visible ? 'true' : 'false'"
      aria-controls="collapse-4"
      v-on:click="logInCheck"
    >
      Add Your Review
    </b-button>
    <div class="container ml-0">
      <b-collapse id="collapse-4" v-model="visible" class="mt-2 mb-4">
        <b-form @submit.stop.prevent="validateInput">
          <b-form-group>
            <label class="mr-2" for="rating-inline">Rating:</label>
            <b-form-rating
              id="rating-inline"
              variant="warning"
              inline
              value="0"
              v-model="rating"
              show-clear
              show-value
            ></b-form-rating>
            <b-form-input
              id="title-input"
              class="mt-2"
              v-model="reviewTitle"
              type="text"
              max-length="30"
              placeholder="Input Review Title Here!"
              required
            >
            </b-form-input>
            <b-form-textarea
              id="description-input"
              class="mt-2"
              type="text"
              rows="3"
              max-rows="6"
              v-model="reviewDescription"
              placeholder="Write Your Review Here!"
              required
            >
              <div class="invalid-tooltip">
                Please choose a unique and valid username.
              </div>
            </b-form-textarea>
            <b-button type="submit" variant="primary" class="col-2 mt-2"
              >Add</b-button
            >
          </b-form-group>
        </b-form>
      </b-collapse>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "review",
  data() {
    return {
      visible: false,
      rating: null,
      reviewTitle: null,
      reviewDescription: null,
    };
  },
  methods: {
    logInCheck() {
      if (!this.$store.state.profileId) {
        alert("Pls Log In to Add a Review!");
      } else {
        this.visible = !this.visible;
      }
    },
    async validateInput() {
      if (!this.rating) {
        alert("Pls make a rating!");
      }
      const result = await axios.post("/product/review", {
        title: this.reviewTitle,
        description: this.reviewDescription,
        rating: this.rating,
        profile_id: this.$store.state.profileId,
        product_id: this.$store.state.selectedProduct.product_id,
      });
      console.log(result);
      this.visible = !this.visible;
      this.$store.commit("changeReviewPostedStatus");
    },
  },
};
</script>

<style>
.product-tag {
  margin-left: 3px;
}
.product-cards {
  display: inline-block;
  margin-right: 10px;
  margin-top: 10px;
  box-shadow: 3px 4px 5px 0px rgba(0, 0, 0, 0.38);
}
</style>
