<template>
  <div class="container p-0" style="max-width: 720px">
    <h1>Add Product</h1>
    <div class="card border-0 shadow-sm">
      <div class="card-body">
        <form @submit.prevent="saveData">
          <div class="mb-2">
            <label for="title" class="form-label">Title</label>
            <input
              type="text"
              class="form-control"
              id="title"
              v-model.trim="product.title"
            />
          </div>
          <div class="mb-2">
            <label for="detail" class="form-label">Detail</label>
            <textarea
              class="form-control"
              rows="2"
              id="detail"
              name="text"
            ></textarea>
          </div>
          <div class="mb-2">
            <label for="category" class="form-label">category</label>
            <select class="form-select">
              <option selected>ประเภทสินค้า</option>
              <option value="1">เสื้อ</option>
              <option value="2">กางเกง</option>
              <option value="3">รองเท้า</option>
            </select>
          </div>
          <div class="mb-2">
            <label for="price" class="form-label">Price</label>
            <input
              type="number"
              class="form-control"
              id="price"
              v-model.number="product.price"
            />
          </div>
          <div class="mb-2">
            <label for="stock" class="form-label">stock</label>
            <input
              type="number"
              class="form-control"
              id="stock"
              v-model.number="product.stock"
            />
          </div>
          <div class="mb-2">
            <label for="imageUrl" class="form-label">Image</label>
            <input
              class="form-control"
              type="file"
              id="formFile"
              @change="onFileSelected"
              ref="myFileInput"
              accept="image/*"
            />
          </div>
          <div class="mb-3">
            <img :src="product.imageUrl" v-if="product.imageUrl" />
          </div>
          <button type="submit" class="btn btn-primary">Save</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
// import axios from 'axios'

export default {
  data() {
    return {
      product: {
        title: "",
        detail: "",
        price: "",
        stock: "",
        category: "",
        imageUrl: "",
      },
      file: null,
    };
  },
  methods: {
    onFileSelected(event) {
      if (event.target.files[0]) {
        this.file = event.target.files[0];
        this.product.imageUrl = URL.createObjectURL(this.file); // preview image
      } else {
        this.product.imageUrl = null;
      }
    },
  },
};
</script>

<style scoped>
img {
  aspect-ratio: 1 / 1;
  width: 250px;
  object-fit: cover;
}
</style>