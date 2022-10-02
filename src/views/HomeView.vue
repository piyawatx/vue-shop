<template>
  <div class="container p-0">
    <div class="row m-0 pt-3">
      <div class="col-md-2"><ProductTab /></div>
      <div class="col-md-10 p-1"><ProductList /></div>
    </div>
  </div>
</template>

<script>
import ProductTab from "../components/ProductTab";
import ProductList from "../components/ProductList";
export default {
  name: "HomeView",
  components: {
    ProductTab,
    ProductList,
  },
};
</script>
