<template>
  <div>
    <form @submit.prevent="onFormSubmit">
      <p>
        <label>Name:</label>
        <input type="text" v-model="product.name" />
      </p>
      <p>
        <label>Price:</label>
        <input type="text" v-model="product.price" />
      </p>
      <button v-on:click="addItem" type="submit">Send</button>
    </form>
    <p>Total of products: {{ countTotalProducts }}</p>
    <p>{{ messageOk }}</p>
  </div>
</template>

<script>
import { DISPATCH_PROD } from "../store/actions.type";
export default {
  data() {
    return {
      product: {
        name: "",
        price: "",
      },
      messageOk: "",
    };
  },
  methods: {
    onFormSubmit() {
      this.$store.dispatch(DISPATCH_PROD, this.product);
    },
    addItem() {
      this.messageOk = "Item adicionado";
      setTimeout(() => (this.messageOk = ""), 2000);
    },
  },
  computed: {
    products() {
      return this.$store.state.list;
    },
    countTotalProducts() {
      return this.$store.state.list.length;
    },
  },
};
</script>
