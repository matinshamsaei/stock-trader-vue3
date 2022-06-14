import { defineStore } from "pinia";
import dataStocks from "../data/stocks";
import { usePortfolioStore } from "./portfolio";

export const useStocksStore = defineStore("stocks", {
  state: () => {
    return {
      stocks: [],
    };
  },
  getters: {
    stocksList: (state) => {
      return state.stocks;
    },
  },
  actions: {
    setStocks(stocks) {
      this.stocks = stocks;
    },
    rndStocks() {
      this.stocks.forEach((element) => {
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
      const portfolioStore = usePortfolioStore();
      portfolioStore.buyStock(order);
    },
  },
});
