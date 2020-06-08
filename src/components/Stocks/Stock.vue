<template>
  <v-card class="mb-3" hover height="185" width="500">
    <v-card-title>
      {{ stockName }} &nbsp; {{currentStockPrice}}
    </v-card-title>
    <div>
      <v-sparkline
        :value="stockValues"
        :gradient="['#f72047', '#ffd200', '#1feaea']"
        :smooth="false"
        :padding="8"
        :line-width="2"
        :stroke-linecap="'round'"
        :gradient-direction="'top'"
        :fill="false"
        :type="'trend'"
        :auto-line-width="false"
        auto-draw
      >
      </v-sparkline>
    </div>
  </v-card>
</template>
<script>
export default {
  props: {
    stockName: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      stockValues: this.$store.getters.stocks[this.stockName] != undefined ? this.$store.getters.stocks[this.stockName].values : []
    }
  },
  computed:{
    currentStockPrice(){
      if (this.stockValues.length){
        return this.stockValues[this.stockValues.length - 1];
      }

      return 0;
    }
  },
  created() {
    this.$store.subscribe((mutation)=>{
      if (mutation.type == 'endDay'){
        this.stockValues = this.$store.getters.stocks[this.stockName].values;
      }
    });
  }
};
</script>
