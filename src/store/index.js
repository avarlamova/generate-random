import { createStore } from "vuex";

export default createStore({
  state: {
    randomNames: [],
    randomPrices: [],
    randomAmounts: [],
  },
  getters: {
    getTableVisibility(state) {
      return (
        state.randomNames.length > 0 &&
        state.randomPrices.length > 0 &&
        state.randomAmounts.length > 0
      );
    },
    getRandomNames(state) {
      return state.randomNames;
    },
    getRandomPrices(state) {
      return state.randomPrices;
    },
    getRandomAmounts(state) {
      return state.randomAmounts;
    },
  },
  mutations: {
    randomizeData(state) {
      for (let i = 0; i < 51; i++) {
        //generate names
        const wordLength = 5;
        const alphabet = "абвгдеёжзийклмнопрстуфхцчшщъыьэюя";
        let word = "";
        for (let j = 0; j < wordLength; j++)
          word += alphabet[Math.floor(Math.random() * alphabet.length)];
        state.randomNames.push(word);

        //generate price
        const price = Math.random() * (1000 - 0.01) + 0.01; // случайное число от 0.01 до 1000.00
        state.randomPrices.push(Number(price.toFixed(2)));

        //generate amounts
        const amount = Math.ceil(Math.random() * 100); //случайное число от 1 до 100
        state.randomAmounts.push(amount);
      }
    },
  },
  actions: {
    generateRandomData(context) {
      context.commit("randomizeData");
    },
  },
  modules: {},
});
