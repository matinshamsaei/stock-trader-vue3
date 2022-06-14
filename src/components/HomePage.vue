<script setup>
import { computed } from "vue";
import { usePortfolioStore } from "@/stores/portfolio";

const portfolioStore = usePortfolioStore();
const funds = computed(() => portfolioStore.fundsAmount);
</script>

<template>
  <div>
    <h1>Trade or View your Portfolio</h1>
    <h5>You may Save or Load your Data!</h5>
    <h5>Click on ' End Day ' to begin a New Day...</h5>
    <hr />
    <p>Your Funds: {{ funds }}</p>
  </div>
</template>
