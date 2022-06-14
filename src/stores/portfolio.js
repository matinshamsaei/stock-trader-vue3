import { defineStore } from "pinia";
import { useStocksStore } from "./stocks";

export const usePortfolioStore = defineStore("portfolio", {
  state: () => {
    return {
      funds: 10000,
      stocks: [],
    };
  },
  getters: {
    stockPortfolio(state) {
      const stocksStore = useStocksStore();

      return state.stocks.map((stock) => {
        const record = stocksStore.stocksList.find(
          (element) => element.id === stock.id
        );
        return {
          id: stock.id,
          quantity: stock.quantity,
          price: record.price,
          name: record.name,
        };
      });
    },

    fundsAmount() {
      return this.funds;
    },
  },
  actions: {
    buyStock({ stockId, stockPrice, stockQuantity }) {
      const record = this.stocks.find((element) => element.id === stockId);
      if (record) {
        record.quantity += stockQuantity;
      } else {
        this.stocks.push({
          id: stockId,
          quantity: stockQuantity,
        });
      }

      this.funds -= stockPrice * stockQuantity;
    },

    sellStock({ stockId, stockPrice, stockQuantity }) {
      const record = this.stocks.find((element) => element.id === stockId);
      if (record.quantity > stockQuantity) {
        record.quantity -= stockQuantity;
      } else {
        this.stocks.splice(this.stocks.indexOf(record), 1);
      }

      this.funds += stockPrice * stockQuantity;
    },

    setPortfolio(portfolio) {
      this.funds = portfolio.funds;
      this.stocks = portfolio.stockPortfolio;
    },

    sellStocks(order) {
      this.sellStock(order);
    },
  },
});
