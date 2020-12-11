<template>
  <div>
    <b-button
      :class="visible ? 'collapsed' : null"
      class="mb-2"
      variant="primary"
      :aria-expanded="visible ? 'true' : 'false'"
      aria-controls="collapse-4"
      @click="visible = !visible"
    >
      Add Your Review
    </b-button>
    <div class="container ml-0">
      <b-collapse id="collapse-4" v-model="visible" class="mt-2 mb-4">
        <label class="mr-2" for="rating-inline">Rating:</label>
        <b-form-rating
          id="rating-inline"
          variant="warning"
          inline
          value="0"
          show-clear
          show-value
        ></b-form-rating>
        <b-form-group
          class="mt-3"
          label-for="title-input"
          invalid-feedback="Title is required"
        >
          <b-form-input
            id="title-input"
            v-model="productCategory"
            type="text"
            max-length="30"
            placeholder="Input Review Title Here!"
            required
          ></b-form-input>
        </b-form-group>
        <b-form-group
          class="mt-2"
          label-for="description-input"
          invalid-feedback="Description is required"
        >
          <b-form-textarea
            id="description-input"
            type="text"
            rows="3"
            max-rows="6"
            v-model="productDescription"
            placeholder="Write Your Review Here!"
            required
          ></b-form-textarea>
        </b-form-group>
        <b-button
          variant="primary"
          class="col-2"
          block
          v-on:click="validateInput"
          >Add</b-button
        >
      </b-collapse>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      visible: true,
    };
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
