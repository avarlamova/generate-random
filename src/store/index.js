import { createStore } from "vuex";

export default createStore({
  state: {
    randomNames: [],
    randomPrices: [],
    randomAmounts: [],
  },
  getters: {
    getRandomNames(state) {
      return state.randomNames;
    },
    getRandomPrices(state) {
      return state.randomPrices;
    },
    getRandomAmounts(state) {
      return state.randomPrices;
    },
  },
  mutations: {
    randomizeData(state) {
      state.randomNames = ["a", "b", "c"];
      state.randomPrices = [1, 2, 3, 4];
      state.randomAmounts = [5, 6, 7, 8];
    },
  },
  actions: {
    generateRandomData(context) {
      context.commit("randomizeData");
    },
  },
  modules: {},
});
