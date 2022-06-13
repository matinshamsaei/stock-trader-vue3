import Vue from "vue";
import { defineStore } from "pinia";
import { stocks } from "./stocks";
import { portfolio } from "./portfolio";

export const fetchData = defineStore("fetchData", {
  actions: {
    fetchDat() {
      const stocksStore = stocks();
      const portfolioStore = portfolio();

      Vue.http
        .get("data.json")
        .then((response) => response.json())
        .then((data) => {
          if (data) {
            const stockPortfolio = data.portfolio;
            const stocks = data.stocks;
            const funds = data.funds;

            const portfolio = {
              stockPortfolio,
              funds,
            };

            stocksStore["Set-Stocks"](stocks);
            portfolioStore["Set-Portfolio"](portfolio);
          }
        });
    },
  },
});
