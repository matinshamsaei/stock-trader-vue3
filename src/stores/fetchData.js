import axios from "axios";
import { defineStore } from "pinia";
// import { stocks } from "./stocks";
// import { portfolio } from "./portfolio";

export const fetchData = defineStore("fetchData", {
  actions: {
    fetchDat() {
      // const stocksStore = stocks();
      // const portfolioStore = portfolio();

      axios
        .get("https://stock-trade-eb949.firebaseio.com/data.json")
        .then((response) => response.json())
        .then((data) => {
          if (data) {
            const stockPortfolio = data.portfolio;
            const stocksData = data.stocks;
            const funds = data.funds;

            const portfolioData = {
              stockPortfolio,
              funds,
            };

            // stocksStore["Set-Stocks"](stocksData);
            // portfolioStore["Set-Portfolio"](portfolioData);
          }
        });
    },
  },
});
