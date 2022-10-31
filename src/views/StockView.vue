<template>
  <div class="container p-0">
    <div class="d-flex justify-content-between">
      <h1>Stock</h1>

      <div class="d-flex align-items-center">
        <button type="button" class="btn btn-success" @click="addProduct">
          New Product
        </button>
      </div>
    </div>
    <div class="card card-body border-0 shadow-sm p-0">
      <div class="table-responsive">
        <table class="table table-hover table-borderless table-striped m-0">
          <thead>
            <tr>
              <th style="min-width: 300px">Title</th>
              <th style="width: 200px; min-width: 100px">Price</th>
              <th>Stock</th>
              <th class="text-center" style="width: 130px; min-width: 120px">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="product in $store.getters.getProducts" :key="product.id">
              <td>
                <img :src="product.imageUrl" alt="" class="me-2" />{{
                  product.title
                }}
              </td>
              <td>{{ product.price.toLocaleString() }}</td>
              <td>{{ product.stock }}</td>
              <td>
                <div class="d-flex justify-content-end">
                  <button type="button" class="btn btn-sm btn-primary me-2">
                    Edit
                  </button>
                  <button type="button" class="btn btn-sm btn-danger">
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  created() {
    this.$store.dispatch("fetchProducts");
  },
  methods: {
    addProduct() {
      this.$router.push("/stock/add");
    },
  },
};
</script>

<style scoped>
img {
  aspect-ratio: 1 / 1;
  width: 30px;
  object-fit: cover;
}
</style>