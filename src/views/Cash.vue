<template>

    <v-container fill-height >
      <v-layout row wrap align-center justify-center>
        
        <large-number-input :cash="cash" :fontSize="40"></large-number-input>
      </v-layout>
    </v-container>

</template>
<script>
import LargeNumberInput from "../components/Cash/LargeNumberInput";
export default {
  components: { LargeNumberInput },
  data() {
    return {
      cash: 0,
    };
  },
};
</script>
