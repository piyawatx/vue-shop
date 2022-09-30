<template>
  <div class="container-fluid bg-dark text-white">
    <div class="container px-0 pb-3">
      <div class="">
        <ul class="nav justify-content-end">
          <li class="nav-item">
            <a class="nav-link link-light" href="#">สมัครสมาชิก</a>
          </li>
          <li class="nav-item">
            <a class="nav-link link-light" href="#">เข้าสู่ระบบ</a>
          </li>
        </ul>
      </div>
      <div class="d-flex">
        <a class="navbar-brand d-flex" href="#">
          <img src="../assets/logo.png" alt="" width="40" /><span
            class="fs-3 ms-1 d-none d-sm-block me-5"
            >Vue Shop</span
          >
        </a>
        <div class="container-fluid">
          <div class="input-group">
            <input type="text" class="form-control" placeholder="ค้นหาสินค้า" />
            <span class="input-group-text">Search</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "NavBar",
};
</script>
<style scoped>
/* img {
  width: 50px;
} */
</style>