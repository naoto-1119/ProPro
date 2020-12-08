<template>
  <div class="wrapper-product-page">
    <CreateProduct class="create-product" />
    <ProductFilter class="product-filter" />
    <ProductImage class="product-image" />
  </div>
</template>

<script>
import ProductFilter from "./ProductFilter";
import ProductImage from "./ProductImage";
import CreateProduct from "./CreateProduct";

export default {
  name: "product-page",
  components: {
    ProductFilter,
    ProductImage,
    CreateProduct,
  },
};
</script>

<style>
.product-image {
  margin-top: px;
  margin-bottom: 10px;
}
.product-filter {
  margin-top: 10px;
  margin-bottom: 10px;
}
.create-product {
  margin-top: 20px;
  margin-bottom: 10px;
}
</style>
