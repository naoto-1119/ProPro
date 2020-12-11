<template>
  <div>
    <h1>Products</h1>
    <div
      class="all-product-cards rounded"
      style="width: 18rem;"
      v-for="product in this.$store.state.allProduct"
      :key="product.product_id"
    >
      <img
        class="card-img-top"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXmvC0Skfsd2zl7a75q2CnPkKeGFCZslLkdw&usqp=CAU"
        alt="Card image cap"
      />
      <div class="card-body">
        <h5 class="card-title">{{ product.name }}</h5>
        <b-badge pill variant="info">{{ product.category }}</b-badge>
        <b-badge class="product-tag" pill variant="danger">{{
          "$" + product.price
        }}</b-badge>
        <p class="card-text text-wrap text-truncate col-sm-15 pl-1">
          {{ product.description }}
        </p>
        <a href="#" class="btn btn-primary">Purchase</a>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "all-product",
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
.all-product-cards {
  display: inline-block;
  margin-right: 10px;
  margin-bottom: 10px;
  box-shadow: 1px 2px 3px 0px rgba(0, 0, 0, 0.38);
}
</style>
