<script setup>
import { computed } from "vue";
import PortfolioStock from "./PortfolioStock.vue";
import { usePortfolioStore } from "@/stores/portfolio";

const portfolioStore = usePortfolioStore();

const stocks = computed(() => portfolioStore.stockPortfolio);
</script>

<template>
  <portfolio-stock v-for="stock in stocks" :key="stock.id" :stock="stock" />
</template>
