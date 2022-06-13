<script setup>
import { computed } from "vue";
import PortfolioStock from "./PortfolioStock";
import { portfolio } from "@/stores/portfolio";

const portfolioStore = portfolio();

const stocks = computed(() => {
  return portfolioStore.stockPortfolio;
});
</script>

<template>
  <portfolio-stock v-for="stock in stocks" :key="stock.id" :stock="stock" />
</template>
