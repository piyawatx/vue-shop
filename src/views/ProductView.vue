<template>
  <div class="container">
    <!-- <h1>Product</h1>
    {{ $route.params.id }} -->

    <div class="card card-body mt-3">
      <div class="d-md-flex d-grid gap-3">
        <div class="image text-center">
          <img :src="product.imageUrl" alt="" />
        </div>
        <div>
          <div class="title mb-2 fs-4 lh-1">{{ product.title }}</div>
          <div class="price mb-2 fs-2">฿{{ product.price }}</div>
          <div class="stock mb-2 text-muted">มีสินค้าทั้งหมด {{ product.stock }} ชิ้น</div>
          <div>
            <button type="button" class="btn btn-outline-dark me-3">
              เพิ่มไปยังรถเข็น
            </button>
            <button type="button" class="btn btn-dark">ซื้อสินค้า</button>
          </div>
        </div>
      </div>
    </div>

    <div class="card card-body mt-3">
      <div><h5>รายละเอียดสินค้า</h5></div>
      <div>{{ product.detail }}</div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      product: {
        id: null,
        title: null,
        detail: null,
        price: null,
        stock: null,
        imageUrl: null,
      },
    };
  },
  created() {
    this.getProductById(this.$route.params.id);
  },
  methods: {
    async getProductById(id) {
      await axios
        .get(
          "https://vue-shop-5f2cd-default-rtdb.asia-southeast1.firebasedatabase.app/products/" +
            id +
            ".json"
        )
        .then((res) => {
          console.log(res.data);
          this.product = res.data;
        });
    },
  },
};
</script>

<style scoped>
img{
  width: 100%;
}
.title{
  font-size: 1em;
}
</style>