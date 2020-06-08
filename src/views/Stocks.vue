<template>
  <v-container>
    <v-layout col align-center justify-center>
      <div >
        <stock
          v-for="name in $store.getters.stockNames"
          :key="name"
          :stockName="name"
        ></stock>
      </div>
    </v-layout>
  </v-container>
</template>
<script>
import Stock from "../components/Stocks/Stock";
//this view will generate a series of stocks
//each stock will generate their own data and put it in the store
export default {
  components: {
    Stock
  },
};
</script>
