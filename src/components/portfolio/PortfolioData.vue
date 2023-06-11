<script setup>
import { computed } from "vue";
import PortfolioStock from "./PortfolioStock.vue";
import { usePortfolioStore } from "@/stores/portfolio";

const portfolioStore = usePortfolioStore();

const stocks = computed(() => portfolioStore.stockPortfolio);
</script>

<template>
  <div>
    <portfolio-stock v-for="stock in stocks" :key="stock.id" :stock="stock" />
  </div>
</template>
