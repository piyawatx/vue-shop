import { createStore } from "vuex";
import axios from "axios";
export default createStore({
  state: {
    products: [],
    carts: [],
  },
  getters: {
    getProducts(state) {
      return state.products;
    },
    getCarts(state) {
      return state.carts;
    },
  },
  mutations: {
    setProducts(state, data) {
      state.products = data;
    },
    addCart(state, data) {
      state.carts.push(data);
    },
  },
  actions: {
    fetchProducts(context) {
      axios
        .get(
          "https://vue-shop-5f2cd-default-rtdb.asia-southeast1.firebasedatabase.app/products.json"
        )
        .then((res) => {
          let data = [];
          for (let key in res.data) {
            data.push({ ...res.data[key], id: key });
          }
          context.commit("setProducts", data);
        });
    },
    fillterProductsByCategory(context, categoryId) {
      axios
        .get(
          "https://vue-shop-5f2cd-default-rtdb.asia-southeast1.firebasedatabase.app/products.json"
        )
        .then((res) => {
          let data = [];
          for (let key in res.data) {
            data.push({ ...res.data[key], id: key });
          }
          if (categoryId) {
            data = data.filter(function (el) {
              return el.category == categoryId;
            });
          }

          context.commit("setProducts", data);
        });
    },
    addCart(context, product) {
      context.commit("addCart", product);
    },
  },
  modules: {},
});
