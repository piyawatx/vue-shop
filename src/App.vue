<template>
  <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav> -->
  <div class="container-fluid p-0 min-vh-100 bg-light">
    <NavBar />
    <router-view />
  </div>
</template>
<script>
import NavBar from "../src/components/NavBar.vue";
export default {
  components: {
    NavBar,
  },
};
</script>
<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
} */
</style>
