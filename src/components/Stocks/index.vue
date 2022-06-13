<template>
  <app-stock v-for="stock in stocks" :key="stock.id" :stock="stock"></app-stock>
</template>

<script>
import Stock from "./Stock";

export default {
  name: "StocksComponent",
  components: {
    appStock: Stock,
  },

  computed: {
    // that is very important to we can see stocks in our app
    stocks() {
      return this.$store.getters.stocks;
    },
  },
};
</script>

<style scoped>
</style>
