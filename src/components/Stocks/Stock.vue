<template>

</template>
<script>
export default {
  data() {
    return {
      stockLabels: [],
      stockValues: [],
      maxRange: 1000,
      stockName: null
    };
  },
  methods: {
      generateStockPoint(maxRange){
          const increaseStock = Math.floor(Math.random * maxRange) + 1 > maxRange / 2;
          return (Math.floor(Math.random * maxRange) + 1) * (increaseStock ? 1 : -1); 
      },
      initStock(){
        this.stockName = this.$store.getters.getUnusedStockName;
        
      }
  },
  created() {

  }
};
</script>
