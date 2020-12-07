<template>
  <div class="card" style="width: 18rem;">
    <img
      class="card-img-top"
      src="require(`@/img/test.jpg`)"
      alt="Card image cap"
    />
    <div class="card-body">
      <h5 class="card-title">Product Name</h5>
      <p class="card-text">
        Some Description of the Product
      </p>
      <a href="#" class="btn btn-primary">Purchase</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "product",
};
</script>

<style></style>
