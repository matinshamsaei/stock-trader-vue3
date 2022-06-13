import { defineStore } from "pinia";
import dataStocks from "../data/stocks";
import { portfolio } from "./portfolio";

const portfolioStore = portfolio();

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
    setStocks(state, stocks) {
      state.stocks = stocks;
    },

    rndStocks(state) {
      state.stocks.forEach((element) => {
        element.price = Math.floor(element.price * (1 + Math.random() - 0.5));
      });
    },

    initStock() {
      this.setStocks(dataStocks);
    },
    randomizeStock() {
      this.rndStocks();
    },
    buyStocks(order) {
      portfolioStore.buyStock(order);
    },
  },
});
