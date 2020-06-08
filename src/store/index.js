import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cash: 0,
    stocks: {},
    stockNames: [
      "Coke",
      "Pepsi",
      "Home Depot",
      "Alaska  Air",
      "Red Robin",
      "Tesla",
      "SpaceX",
      "Starbucks",
      "Google",
      "Apple",
      "Shell",
      "Best Buy",
      "Target",
      "Walmart",
      "Fred Meyer",
      "Costco",
      "Random company",
    ],
  },
  getters: {
    cash: (state) => state.cash,
    stocks: (state) => state.stocks,
    stockNames: (state) => state.stockNames,
  },
  mutations: {
    changeCash: (state, cash) => (state.cash = cash),
    endDay: (state) => {
      state.stockNames.forEach((n) => {
        if (state.stocks[n] == undefined) {
          const initialStockValue = 1000;
          state.stocks[n] =
            {
              values: [initialStockValue],
              stockName: n
            };
          }
    
        const maxRange = 1000;
        const increaseStock =
          Math.floor(Math.random() * maxRange) + 1 > maxRange / 2;
        const stockTick = 
          (Math.floor(Math.random() * maxRange) + 1) * (increaseStock ? 1 : -1);
        const nextStockValue = state.stocks[n].values.length > 0 ? state.stocks[n].values[state.stocks[n].values.length - 1] + stockTick : stockTick;
        state.stocks[n].values.push(nextStockValue);
        

      });
    },
  },
  actions: {
    'END_DAY' : (context) => {
      context.commit('endDay');
    }
  },
  modules: {},
});
