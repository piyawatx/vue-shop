<template>
  <div class="product-list">
    <div class="row g-2 row-cols-2 row-cols-sm-2 row-cols-md-4 row-cols-lg-5">
      <div
        class="col"
        v-for="product in $store.getters.getProducts"
        :key="product.id"
      >
        <ProductCard
          :id="product.id"
          :title="product.title"
          :detail="product.detail"
          :price="product.price"
          :stock="product.stock"
          :imageUrl="product.imageUrl"
        />
      </div>
    </div>
  </div>
</template>

<script>
import ProductCard from "../components/ProductCard";
export default {
  created() {
    this.$store.dispatch("fetchProducts");
  },
  components: {
    ProductCard,
  },
};
</script>

<style scoped>
</style>