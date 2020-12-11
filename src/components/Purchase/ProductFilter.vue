<template>
  <form>
    <div class="form-row">
      <div class="form-group col-md-3">
        <label for="inputState">Category</label>
        <select id="inputState" class="form-control">
          <option selected>Choose...</option>
          <option>test</option>
        </select>
      </div>
      <div class="form-group col-md-3">
        <label for="inputState">Price</label>
        <select id="inputState" class="form-control">
          <option selected>Choose...</option>
          <option>test2</option>
        </select>
      </div>
      <div class="form-group col-md-3">
        <label for="inputState">Order</label>
        <select id="inputState" class="form-control">
          <option selected>Choose...</option>
          <option>Latest</option>
          <option>Oldest</option>
        </select>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  name: "product-filter",
};
</script>

<style>
.apply {
  padding-top: 0px;
  margin-top: 0px;
}
</style>
