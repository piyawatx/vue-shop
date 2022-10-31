<template>
  <div class="product-tab">
    <div>
      <font-awesome-icon icon="fa-solid fa-list-ul" />
      <span class="h5"> หมวดหมู่</span>
    </div>
    <hr class="text-muted" />
    <div>
      <nav class="navbar p-0">
        <ul class="navbar-nav">
          <li class="nav-item">
            <div class="nav-link" role="button" @click="selectCategory()">
              สินค้าทั้งหมด
            </div>
          </li>
          <li class="nav-item">
            <div class="nav-link" role="button" @click="selectCategory(1)">
              เสื้อ
            </div>
          </li>
          <li class="nav-item">
            <div class="nav-link" role="button" @click="selectCategory(2)">
              กางเกง
            </div>
          </li>
          <li class="nav-item">
            <div class="nav-link" role="button" @click="selectCategory(3)">
              รองเท้า
            </div>
          </li>
        </ul>
      </nav>
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