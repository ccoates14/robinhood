<template>
  <div class="mb-5" v-if="quantityOfStockOwned > 0 || !hideWhenZeroStocksOwned">
    <v-responsive>
      <v-card
        :height="minifiedView ? 150 : 350"
        :width="minifiedView ? 280 : 500"
        raised
      >
        <v-card-title>
          {{ stockName }} &nbsp; {{ currentStockPrice }}
        </v-card-title>

        <div>
          <v-card :height="minifiedView ? 150 : 220">
            <v-sparkline
              :value="$store.getters.stocks[this.stockName].values"
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
          </v-card>
        </div>

        <v-card-actions v-if="!minifiedView">
          <v-container>
            <div class="d-flex justify-space-between">
              <div>
                <v-btn
                  color="green"
                  class="mr-3"
                  @click="$store.dispatch('BUY_STOCK', stockName)"
                  :disabled="!canPurchaseStock"
                >
                  Buy
                </v-btn>
                <v-btn
                  color="red"
                  @click="$store.dispatch('SELL_STOCK', stockName)"
                  :disabled="!canSellStock"
                >
                  Sell
                </v-btn>
              </div>
              <div>
                <blockquote class="blockquote">
                  Amount of Stock owned: {{ quantityOfStockOwned }}
                </blockquote>
              </div>
            </div>
          </v-container>
        </v-card-actions>
      </v-card>
    </v-responsive>
  </div>
</template>
<script>
export default {
  props: {
    stockName: {
      type: String,
      required: true,
    },
    minifiedView: Boolean,
    hideWhenZeroStocksOwned: Boolean,
  },
  computed: {
    currentStockPrice() {
      if (this.$store.getters.stocks[this.stockName].values.length) {
        return this.$store.getters.stocks[this.stockName].values[this.$store.getters.stocks[this.stockName].values.length - 1];
      }

      return 0;
    },

    quantityOfStockOwned() {
      return this.$store.getters.numberOfStocksOwnedByName(this.stockName);
    },

    canPurchaseStock() {
      return (
        this.$store.getters.cash >=
        (this.currentStockPrice < 0
          ? this.currentStockPrice * -1 * 2
          : this.currentStockPrice)
      );
    },

    canSellStock() {
      return this.quantityOfStockOwned > 0;
    },
  },
  created() {
    this.$store.subscribeAction((action, state) => {
      if (action.type == "END_DAY") {
        const maxRange = 1000;
        const increaseStock =
          Math.floor(Math.random() * maxRange) + 1 > maxRange / 2;
        const stockTick =
          (Math.floor(Math.random() * maxRange) + 1) * (increaseStock ? 1 : -1);
        const nextStockValue =
          state.stocks[this.stockName].values.length > 0
            ? state.stocks[this.stockName].values[
                state.stocks[this.stockName].values.length - 1
              ] + stockTick
            : stockTick;
        state.stocks[this.stockName].values.push(nextStockValue);
      }
    });
  },
};
</script>
