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
    BUY_STOCK(state, { stockId, stockPrice, stockQuantity }) {
      const record = state.stocks.find((element) => element.id === stockId);
      if (record) {
        record.quantity += stockQuantity;
      } else {
        state.stocks.push({
          id: stockId,
          quantity: stockQuantity,
        });
      }

      state.funds -= stockPrice * stockQuantity;
    },

    SELL_STOCK(state, { stockId, stockPrice, stockQuantity }) {
      const record = state.stocks.find((element) => element.id === stockId);
      if (record.quantity > stockQuantity) {
        record.quantity -= stockQuantity;
      } else {
        state.stocks.splice(state.stocks.indexOf(record), 1);
      }

      state.funds += stockPrice * stockQuantity;
    },

    "Set-Portfolio"(state, portfolio) {
      state.funds = portfolio.funds;
      state.stocks = portfolio.stockPortfolio;
    },

    sellStocks({ commit }, order) {
      commit("SELL_STOCK", order);
    },
  },
});
