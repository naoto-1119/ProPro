<template>
  <div>
    <div
      class="product-cards rounded"
      style="width: 18rem;"
      v-for="product in this.$store.state.productInfo"
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
        <button type="button" class="btn btn-primary">
          Details
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "product-image",
  computed: {
    products() {
      return this.$store.state.productInfo;
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
