<template>
  <v-card width="700" height="200">
    <v-card-title class="headline justify-center">
      PORTFOLIO VALUE
    </v-card-title>
    <v-responsive>
      <v-sparkline
        :value="$store.getters.portfolioValues"
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
    </v-responsive>
  </v-card>
</template>
<script>
export default {
  created() {
    this.$store.subscribeAction((action) => {
      if (action.type == "END_DAY") {
        this.$store.commit(
          "addPortfolioValue",
          this.$store.getters.currentPortfolioValue
        );
      }
    });
  },
};
</script>
