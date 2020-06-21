<template>
  <v-container>
    <v-layout col align-center justify-center>
      <div>
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
import store from '../store';
export default {
  components: {
    Stock,
  },
  beforeRouteEnter(to, from, next) {  // eslint-disable-line
    if (store.getters.signedIn){
      next();
    }else{
      alert('Please sign in by filling out the form in');
    }
  },
};
</script>
