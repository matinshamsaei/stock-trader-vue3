<script setup>
import { computed } from "vue";
import StockItem from "./StockItem.vue";
import { useStocksStore } from "@/stores/stocks";

const stocksStore = useStocksStore();

const stocksList = computed(() => stocksStore.stocksList);
</script>

<template>
  <stock-item v-for="stock in stocksList" :key="stock.id" :stock="stock" />
</template>
