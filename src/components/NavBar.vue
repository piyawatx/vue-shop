<template>
  <div class="container-fluid bg-dark text-white">
    <div class="container px-0 pb-3">
      <div class="mb-1">
        <ul class="nav justify-content-end">
          <li class="nav-item">
            <a class="nav-link link-light pe-0" href="#">สมัครสมาชิก</a>
          </li>
          <li class="nav-item">
            <a class="nav-link link-light pe-0" href="#">เข้าสู่ระบบ</a>
          </li>
        </ul>
      </div>
      <div class="d-flex">
        <div class="d-none d-sm-block me-5">
          <router-link to="/" class="navbar-brand d-flex">
            <img src="../assets/logo.png" width="40" class="align-self-end" />
            <span class="fs-3 ms-1 align-self-end"> Vue Shop </span>
          </router-link>
        </div>
        <div class="container-fluid align-self-end p-0 me-4">
          <div class="input-group">
            <input type="text" class="form-control" placeholder="ค้นหาสินค้า" />
            <span class="input-group-text">
              <font-awesome-icon
                icon="fa-solid fa-magnifying-glass"
                class="fs-4 text-dark"
              />
            </span>
          </div>
        </div>
        <div class="align-self-end">
          <font-awesome-icon icon="fa-solid fa-cart-shopping" class="fs-3" />
          <span
            class="
              position-absolute
              translate-middle
              badge
              rounded-pill
              border border-dark
              bg-danger
            "
            v-if="$store.getters.getCarts.length > 0"
          >
            {{ $store.getters.getCarts.length }}
          </span>
        </div>

      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "NavBar",
  data() {
    return {
      cart: [],
    };
  },
  created() {},
};
</script>
<style scoped>
/* img {
  width: 50px;
} */
</style>