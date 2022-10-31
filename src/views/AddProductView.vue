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
              v-model.trim="product.detail"
            ></textarea>
          </div>
          <div class="mb-2">
            <label for="category" class="form-label">category</label>
            <select class="form-select" v-model="product.category">
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
import axios from "axios";
import Swal from "sweetalert2";

import { initializeApp } from "firebase/app";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyAgYYwezARLGeVRa1jEvfGLarpCJ460IFw",
  authDomain: "vue-shop-5f2cd.firebaseapp.com",
  databaseURL:
    "https://vue-shop-5f2cd-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "vue-shop-5f2cd",
  storageBucket: "vue-shop-5f2cd.appspot.com",
  messagingSenderId: "539817594589",
  appId: "1:539817594589:web:514f26a8dae8cecaad5534",
  measurementId: "G-1GZLGX47YK",
};
const app = initializeApp(firebaseConfig, "nuxt-shop");
const storage = getStorage(app);

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
      newImageName: null,
    };
  },
  methods: {
    async saveData() {
      if (this.validate()) {
        await this.uploadImage();
        await this.getImageUrl();
        await this.createProduct();
        this.resetForm();
        this.$router.push("/stock/");
      } else {
        alert("ข้อมูลไม่ครบ");
      }
    },
    resetForm() {
      this.product.title = "";
      this.product.detail = "";
      this.product.price = "";
      this.product.stock = "";
      this.product.category = "";
      this.product.imageUrl = "";
    },
    validate() {
        console.log(this.product);
      if (!this.product.title) {
        return false;
      } else if (!this.product.detail) {
        return false;
      } else if (!this.product.price) {
        return false;
      } else if (!this.product.stock) {
        return false;
      } else if (!this.product.category) {
        return false;
      } else if (!this.product.imageUrl) {
        return false;
      } else {
        return true;
      }
    },
    onFileSelected(event) {
      if (event.target.files[0]) {
        this.file = event.target.files[0];
        this.product.imageUrl = URL.createObjectURL(this.file); // preview image
      } else {
        this.product.imageUrl = null;
      }
    },
    async uploadImage() {
      const imageRef = ref(storage, "img" + this.file.lastModified);
      await uploadBytes(imageRef, this.file).then((res) => {
        this.newImageName = res.metadata.name;
      });
    },
    async getImageUrl() {
      await getDownloadURL(ref(storage, this.newImageName)).then((url) => {
        this.product.imageUrl = url;
      });
    },
    async createProduct() {
      await axios
        .post(
          "https://vue-shop-5f2cd-default-rtdb.asia-southeast1.firebasedatabase.app/products.json",
          this.product
        )
        .then((res) => {
          console.log(res);
          Swal.fire({
            icon: "success",
            title: "Saved",
            showConfirmButton: false,
            timer: 1500,
          });
        });
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