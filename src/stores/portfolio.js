import { defineStore } from "pinia";

export const portfolio = defineStore("portfolio", {
  state: () => {
    return {
      funds: 10000,
      stocks: [],
    };
  },
  getters: {
    stockPortfolio(state, getters) {
      return state.stocks.map((stock) => {
        const record = getters.stocks.find(
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

    funds(state) {
      return state.funds;
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
