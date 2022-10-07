<template>
  <div class="product-tab">
    <div>
      <font-awesome-icon icon="fa-solid fa-list-ul" />
      <span class="h5"> หมวดหมู่</span>
    </div>
    <hr class="text-muted" />
    <div>
      <div @click="selectCategory()">สินค้าทั้งหมด</div>
      <div @click="selectCategory(1)">เสื้อ</div>
      <div @click="selectCategory(2)">กางเกง</div>
      <div @click="selectCategory(3)">รองเท้า</div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    selectCategory(categoryId) {
      this.$store.dispatch("fillterProductsByCategory", categoryId);
    },
  },
};
</script>

<style scoped>
/* .product-tab{
    width: 180px;
    min-width: 180px;
} */
</style>