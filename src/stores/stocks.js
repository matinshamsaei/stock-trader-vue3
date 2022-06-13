import { defineStore } from "pinia";
import dataStocks from "../../data/stocks";

export const stocks = defineStore("stocks", {
  state: () => {
    return {
      stocks: [],
    };
  },
  getters: {
    stocks: (state) => {
      return state.stocks;
    },
  },
  actions: {
    "Set-Stocks"(state, stocks) {
      state.stocks = stocks;
    },

    "Rnd-Stocks"(state) {
      state.stocks.forEach((element) => {
        element.price = Math.floor(element.price * (1 + Math.random() - 0.5));
      });
    },

    initStock({ commit }) {
      commit("Set-Stocks", dataStocks);
    },
    randomizeStock({ commit }) {
      commit("Rnd-Stocks");
    },
    buyStocks({ commit }, order) {
      commit("BUY_STOCK", order);
    },
  },
});
