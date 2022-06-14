<script setup>
import { computed, defineProps, ref } from "vue";
import { usePortfolioStore } from "@/stores/portfolio";

const portfolioStore = usePortfolioStore();
let quantity = ref("");

const stock = defineProps(["stock"]);

const sellStockCrime = computed(() => {
  return quantity.value > stock.stock.quantity;
});

function sellStock() {
  const order = {
    stockId: stock.stock.id,
    stockPrice: stock.stock.price,
    stockQuantity: quantity.value,
  };
  portfolioStore.sellStocks(order);
  quantity.value = 0;
}
</script>

<template>
  <div class="col-sm-6 col-md-4">
    <div class="panel panel-info">
      <div class="panel-heading">
        {{ stock.stock.name }}
        <small class="pull-right">
          Price: {{ stock.stock.price }} | Quantity: {{ stock.stock.quantity }}
        </small>
      </div>

      <div class="panel-body">
        <div class="pull-left">
          <input
            class="form-control"
            placeholder="Quantity"
            type="number"
            v-model="quantity"
            :class="{ crime: sellStockCrime }"
          />
        </div>

        <div class="pull-right">
          <button
            class="btn btn-info"
            :class="{ 'btn-danger': sellStockCrime }"
            @click="sellStock"
            :disabled="
              sellStockCrime || quantity <= 0 || !Number.isInteger(quantity)
            "
          >
            {{ sellStockCrime ? "Not Enough" : "Sell" }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.crime {
  border: 1px solid red;
  box-shadow: 0 0 0 0.2rem rgba(255, 0, 0, 0.2);
}
</style>
