<template>
  <div class="card" @click="clickProduct(id)">
    <img :src="imageUrl" class="card-img-top" alt="..." />
    <div class="card-body p-2">
      <p class="card-text">
        {{ title }}
      </p>
      <div>฿{{ price }}</div>
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
    clickProduct(id){
      console.log(id);
      this.$router.push('/product/'+id)
    }
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
</style>