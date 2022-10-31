<template>
  <div class="card h-100 border-0 shadow-sm" @click="clickProduct(id)">
    <img :src="imageUrl" class="card-img-top" alt="..." />
    <div class="d-flex flex-column justify-content-between p-2 h-100">
      <div class="card-text mb-1">
        {{ title }}
      </div>
      <div>฿{{ price.toLocaleString() }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    id: String,
    title: String,
    detail: String,
    price: Number,
    stock: Number,
    imageUrl: String,
  },
  methods: {
    clickProduct(id) {
      console.log(id);
      this.$router.push("/product/" + id);
    },
  },
};
</script>

<style scoped>
.card-text {
  font-size: 0.75rem;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
img {
  aspect-ratio: 1 / 1;
  object-fit: cover;
}
</style>