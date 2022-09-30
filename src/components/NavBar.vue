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
          <a class="navbar-brand d-flex" href="#">
            <img
              src="../assets/logo.png"
              width="40"
              class="align-self-end"
            />
            <span class="fs-3 ms-1 align-self-end"> Vue Shop </span>
          </a>
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