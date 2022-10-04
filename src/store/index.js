import { createStore } from "vuex";

export default createStore({
  state: {
    products: [
      {
        title: "adidas 3-Stripes Polo Shirt ผู้ชาย สีดำ EJ0927",
        detail: "adidas 3-Stripes Polo Shirt ผู้ชาย สีดำ EJ0927",
        price: 800,
        stock: 2,
        imageUrl:
          "https://cf.shopee.co.th/file/6b3610761f3b111b783f1d08685a5396_tn",
      },
      {
        title: "adidas เสื้อยืดลายพราง Essentials ผู้ชาย สีเทา GK9637",
        detail: "adidas เสื้อยืดลายพราง Essentials ผู้ชาย สีเทา GK9637",
        price: 720,
        stock: 102,
        imageUrl:
          "https://cf.shopee.co.th/file/sg-11134201-22100-wlok6asyf8hvf5_tn",
      },
      {
        title: "adidas 3-Stripes Polo Shirt ผู้ชาย สีดำ EJ0927",
        detail: "adidas 3-Stripes Polo Shirt ผู้ชาย สีดำ EJ0927",
        price: 800,
        stock: 2,
        imageUrl:
          "https://cf.shopee.co.th/file/6b3610761f3b111b783f1d08685a5396_tn",
      },
      {
        title: "adidas 3-Stripes Polo Shirt ผู้ชาย สีดำ EJ0927",
        detail: "adidas 3-Stripes Polo Shirt ผู้ชาย สีดำ EJ0927",
        price: 800,
        stock: 2,
        imageUrl:
          "https://cf.shopee.co.th/file/6b3610761f3b111b783f1d08685a5396_tn",
      },

    ],
  },
  getters: {
    getProducts(state){
      return state.products;
    }
  },
  mutations: {},
  actions: {},
  modules: {},
});
