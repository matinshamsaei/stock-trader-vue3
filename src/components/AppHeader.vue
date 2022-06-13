<script setup>
import axios from "axios";
import { computed } from "vue";
import { RouterLink } from "vue-router";
import { portfolio } from "@/stores/portfolio";
import { stocks } from "@/stores/stocks";
import { fetchData } from "@/stores/fetchData";

const portfolioStore = portfolio();
const stocksStore = stocks();
const fetchDataStore = fetchData();

const funds = computed(() => {
  return portfolioStore.funds;
});

function endDay() {
  stocksStore.randomizeStock();
}
function saveData() {
  const data = {
    portfolio: portfolioStore.stockPortfolio,
    stocks: stocksStore.stocks,
    funds: portfolioStore.funds,
  };
  axios.put("https://stock-trade-eb949.firebaseio.com/data.json", data);
}
function loadData() {
  fetchDataStore.fetchData();
}
</script>

<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="navbar-header">
      <router-link to="/" class="navbar-brand">Stock Trader</router-link>
    </div>

    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav customMargin">
        <router-link to="/portfolio" active-class="active" class="nav-item">
          <a class="nav-link">Portfolio</a>
        </router-link>

        <router-link to="/stocks" active-class="active" class="nav-item">
          <a class="nav-link">Stocks</a>
        </router-link>
      </ul>

      <strong class="navbar-text navbar-right">Funds: {{ funds }}</strong>

      <ul class="navbar-nav float-md-right customMargin">
        <li class="nav-item dropdown">
          <a
            class="nav-link dropdown-toggle"
            href="#"
            id="navbarDropdown"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Save & Load
          </a>

          <div class="dropdown-menu" aria-labelledby="navbarDropdown">
            <a class="dropdown-item" href="#" @click="saveData">Save Data</a>
            <a class="dropdown-item" href="#" @click="loadData">Load Data</a>
          </div>
        </li>

        <li class="nav-item">
          <a class="nav-link" href="#" @click="endDay">
            End Day<span class="sr-only">(current) </span>
          </a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<style scoped>
.customMargin {
  margin-left: 0;
}

@media (min-width: 992px) {
  nav .navbar-nav a {
    padding: 20px 0.5em;
  }
}
</style>
