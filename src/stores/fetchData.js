import axios from "axios";
import { defineStore } from "pinia";
import { useStocksStore } from "./stocks";
import { usePortfolioStore } from "./portfolio";

export const fetchData = defineStore("fetchData", {
  actions: {
    fetchData() {
      axios
        .get("https://stock-trade-eb949.firebaseio.com/data.json")
        .then((res) => {
          const data = res.data;
          if (data) {
            const stockPortfolio = data.portfolio;
            const stocksData = data.stocks;
            const funds = data.funds;

            const portfolioData = {
              stockPortfolio,
              funds,
            };

            this.setStoresData(stocksData, portfolioData);
          }
        });
    },
    setStoresData(stocksData, portfolioData) {
      const stocksStore = useStocksStore();
      const portfolioStore = usePortfolioStore();

      stocksStore.setStocks(stocksData);
      portfolioStore.setPortfolio(portfolioData);
    },
  },
});
