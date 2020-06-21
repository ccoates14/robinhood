<template>
  <div>
    <v-card width="300" class="float-right ">
      <v-card-title class="headline justify-center">
        Stocks Owned
      </v-card-title>
      <v-divider></v-divider>
      <v-responsive >
        <stock
          v-for="name in $store.getters.stockNames"
          :key="name"
          :stockName="name"
          :minifiedView="true"
          :hideWhenZeroStocksOwned="true"
          class="ml-3"
        ></stock>
      </v-responsive>
    </v-card>
  </div>
</template>
<script>
import stock from "../Stocks/Stock";
export default {
  name: "StocksOwned",
  components: { stock },
};
</script>
