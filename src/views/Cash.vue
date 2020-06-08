<template>
  <v-container fill-height>
    <v-layout col align-center justify-center>
      <v-layout row>
        <div class="mb-5 cash">Cash: {{$store.getters.cash}}$</div>
        <large-number-input
          :cash="$store.getters.cash"
          :fontSize="40"
          @submit="cashChanged($event)"
        ></large-number-input
      ></v-layout>
    </v-layout>
  </v-container>
</template>
<script>
import LargeNumberInput from "../components/Cash/LargeNumberInput";
export default {
  components: { LargeNumberInput },
  methods: {
    cashChanged(newCash) {
      this.$store.commit("changeCash", newCash);
    },
  },
  created() {
    this.cashChanged(1000);
  },
};
</script>
<style scoped>
  .cash{
    font-size: 48pt;
    color: green;
    padding-left: .5%;
  }
</style>