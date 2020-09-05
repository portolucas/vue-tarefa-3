<template>
  <div>
    <ul v-for="item in products" v-bind:key="item.name">
      <ProductItem :item="item" />
    </ul>
  </div>
</template>

<script>
import ProductItem from "./ProductItem";

export default {
  components: {
    ProductItem,
  },
  computed: {
    products() {
      return this.$store.state.list;
    },
  },
};
</script>

<style scoped>
li {
  color: black;
  list-style: none;
}
</style>
