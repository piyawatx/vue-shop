<template>
  <div class="container" v-if="product.title">
    <div class="card card-body mt-3 border-0 shadow-sm p-3">
      <div class="d-md-flex d-grid gap-3">
        <div class="image text-center">
          <img :src="product.imageUrl" alt="" />
        </div>
        <div class="d-flex flex-column">
          <div>
            <div class="title mb-2 fs-4 lh-1">{{ product.title }}</div>
            <div class="price mb-2 fs-2">
              ฿{{ product.price.toLocaleString() }}
            </div>
          </div>
          <div>
            <div class="stock mb-3 text-muted">
              มีสินค้าทั้งหมด {{ product.stock }} ชิ้น
            </div>
            <div>
              <button
                type="button"
                class="btn btn-outline-dark me-3"
                @click="addCart(product)"
              >
                เพิ่มไปยังรถเข็น
              </button>
              <button type="button" class="btn btn-dark">ซื้อสินค้า</button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="card card-body mt-3 border-0 shadow-sm">
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
          this.product = res.data;
        });
    },
    addCart(product) {
      this.$store.dispatch("addCart", product);
    },
  },
};
</script>

<style scoped>
img {
  aspect-ratio: 1 / 1;
  width: 320px;
  object-fit: cover;
}
.title {
  font-size: 1em;
}
</style>