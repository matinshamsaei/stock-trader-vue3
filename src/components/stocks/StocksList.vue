<script setup>
import { computed } from "vue";
import StockItem from "./StockItem.vue";
import { stocks } from "@/stores/stocks";

const stocksStore = stocks();

const stocksList = computed(() => {
  return stocksStore.stocks;
});
</script>

<template>
  <stock-item v-for="stock in stocksList" :key="stock.id" :stock="stock" />
</template>
