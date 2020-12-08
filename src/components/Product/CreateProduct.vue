<template>
  <div>
    <b-button id="show-btn" @click="$bvModal.show('bv-modal-example')"
      >Open Modal</b-button
    >

    <b-modal id="bv-modal-example" hide-footer>
      <template #modal-title> Product Information </template>
      <form ref="form">
        <b-form-group
          label="Name"
          label-for="name-input"
          invalid-feedback="Product name is required"
        >
          <b-form-input
            id="product-name-input"
            type="text"
            v-model="productName"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group
          label="Category"
          label-for="category-input"
          invalid-feedback="Category is required"
        >
          <b-form-input
            id="category-input"
            v-model="productCategory"
            type="text"
            max-length="10"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group
          label="Description"
          label-for="description-input"
          invalid-feedback="Description is required"
        >
          <b-form-textarea
            id="description-input"
            type="text"
            rows="3"
            max-rows="6"
            v-model="productDescription"
            required
          ></b-form-textarea>
        </b-form-group>

        <b-form-group
          label="Price"
          label-for="price-input"
          invalid-feedback="Price is required"
        >
          <b-form-input
            id="price-input"
            type="number"
            v-model="productPrice"
            required
          ></b-form-input>
        </b-form-group>
      </form>
      <b-button class="mt-3" block v-on:click="validateInput">Add</b-button>
      <b-button class="mt-3" block @click="$bvModal.hide('bv-modal-example')"
        >Cancel</b-button
      >
    </b-modal>
  </div>
</template>

<script>
export default {
  name: "create-product",
  data() {
    return {
      productName: "",
      productCategory: "",
      productDescription: "",
      productPrice: null,
      productImage: "",
    };
  },
  methods: {
    validateInput() {
      if (!this.productName) {
        alert("Name field is Empty!");
      } else if (!this.productCategory) {
        alert("Category field is Empty!");
      } else if (!this.productPrice) {
        alert("Price field is Empty!");
      } else {
        console.log("Product Name:", this.productName);
        console.log("Product Category:", this.productCategory);
        console.log("Product Description:", this.productDescription);
        console.log("Product Price: $", this.productPrice);
        this.$bvModal.hide("bv-modal-example");
      }
    },
  },
};
</script>

<style></style>
