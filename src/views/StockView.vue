<template>
  <div class="container p-0">
    <div class="d-flex justify-content-between">
      <h1>Stock</h1>

      <div class="d-flex align-items-center">
        <button type="button" class="btn btn-success">Add</button>
      </div>
    </div>
    <div class="card card-body shadow-sm p-0">
      <div class="table-responsive">
        <table class="table table-hover table-borderless table-striped m-0">
          <thead>
            <tr>
              <th style="min-width: 300px">Title</th>
              <th style="width: 200px; min-width: 100px">Price</th>
              <th>Stock</th>
              <th style="width: 130px; min-width: 120px">Actions</th>
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
                <button type="button" class="btn btn-sm btn-primary me-2">
                  Edit
                </button>
                <button type="button" class="btn btn-sm btn-danger">
                  Delete
                </button>
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
};
</script>

<style scoped>
img {
  aspect-ratio: 1 / 1;
  width: 30px;
  object-fit: cover;
}
</style>