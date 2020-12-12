<template>
  <div class="container mb-4">
    <div class="row">
      <div class="col-8">
        <div class="card mb-3">
          <div class="d-flex">
            <div class="d-flex-inline-p2">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8rXH4vmbNMBvyxWRCb0htcTMWVWFkM6ijqA&usqp=CAU"
                class="img-thumbnail profile-image rounded"
              />
            </div>
            <div class="d-flex-inline-p2">
              <div class="card-body">
                <h5 class="card-title">
                  {{ this.$store.state.selectedProduct.name }}
                  <b-form-rating
                    id="rating-inline"
                    variant="warning"
                    inline
                    no-border
                    value="4"
                    show-value
                    readonly
                  ></b-form-rating>
                  <span class="badge rounded-pill bg-primary mr-1">
                    {{ this.$store.state.selectedProduct.name }}
                  </span>
                  <span class="badge rounded-pill bg-warning">{{
                    this.$store.state.selectedProduct.category
                  }}</span>
                </h5>
                <p class="card-text mb-0">
                  <small class="text-muted"
                    >Reamining Stock: 10 Purchase Count: 100
                  </small>
                </p>
                <p class="card-text">
                  {{ this.$store.state.selectedProduct.description }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        id="sticky"
        class="card text-dark bg-light mb-3 ml-2 col text-center"
        style="max-width: 18rem;"
      >
        <div class="card-header">
          {{ this.$store.state.selectedProduct.name }}
        </div>
        <div class="card-body">
          <h5 class="card-title text-center">
            {{ "$" + this.$store.state.selectedProduct.price }}
          </h5>
          <button type="button-lg" class="btn btn-danger text-center">
            Purchase
          </button>
        </div>
      </div>
    </div>
    <h4>Reviews</h4>
    <!-- collapse comes in -->
    <Review />
    <div v-for="(review, index) in this.$store.state.reviewInfo" :key="index">
      <div class="row">
        <div class="col-8">
          <div class="card">
            <div class="d-flex">
              <div class="d-flex-inline-p2">
                <div class="card-body">
                  <h5 class="card-title mb-0">
                    {{ review.title }}
                    <b-form-rating
                      id="rating-inline"
                      variant="warning"
                      inline
                      no-border
                      :value="review.rating"
                      show-value
                      readonly
                    ></b-form-rating>
                  </h5>

                  <p class="card-text mb-0">
                    <small class="text-muted">{{ review.created_at }} </small>
                  </p>
                  <p class="card-text">
                    {{ review.description }}
                  </p>
                  <span class="badge rounded-pill bg-primary mr-1">
                    {{ `user name: ${review.user_name}` }}
                  </span>
                  <span class="badge rounded-pill bg-warning">{{
                    `twitter:@${review.twitter_screen_name}`
                  }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Review from "./Review";

export default {
  name: "purchase-page",
  components: {
    Review,
  },
  async mounted() {
    const product = await axios.get("/users/product/id", {
      params: { userId: this.$store.state.userId },
    });
    console.log("product:", product.data);
    this.$store.commit("setProductInfo", product.data);

    // get review info
    const review = await axios.get("/product/review/id", {
      params: {
        productId: this.$store.state.selectedProduct.product_id,
      },
    });
    console.log("get data reveiw:", review);
    await this.setReviewInfo(review.data);
    console.log("stored reviewInfo:", this.$store.state.reviewInfo);
  },
  computed: {
    reviews() {
      if (this.$store.state.reviewPosted) {
        const review = axios.get("/product/review/id", {
          params: {
            productId: this.$store.state.selectedProduct.product_id,
          },
        });
        console.log("get data reveiw:", review);
        this.setReviewInfo(review.data);
        this.changeReviewPostedStatus();
      }
      return this.$store.state.reviewInfo;
    },
  },
  methods: {
    setReviewInfo(reviewData) {
      this.$store.commit("setReviewInfo", reviewData);
    },
    changeReviewPostedStatus() {
      this.$store.commit("changeReviewPostedStatus");
    },
  },
};
</script>

<style>
#sticky {
  position: -webkit-sticky;
  position: sticky;
  top: 20px;
}
</style>
