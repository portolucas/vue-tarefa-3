<template>
  <div>
    <h1>Produtos</h1>
    <p><strong>Name: </strong>{{ item.name }}</p>
    <p><strong>Price: </strong>{{ item.price }}</p>
  </div>
</template>

<script>
export default {
  props: {
    item: Object,
  },
};
</script>

<style scoped>
h1,
p {
  color: black;
}
</style>
