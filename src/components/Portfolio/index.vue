<template>
  <app-stock v-for="stock in stocks" :key="stock.id" :stock="stock"></app-stock>
</template>

<script>
import Stock from "./Stock";
import { mapGetters } from "vuex";

export default {
  name: "PortfolioComponent",
  computed: {
    ...mapGetters({
      stocks: "stockPortfolio",
    }),
  },

  components: {
    appStock: Stock,
  },
};
</script>

<style scoped>
</style>
