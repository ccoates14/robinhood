import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cash: 1000,
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
      "nvidia"
    ],
    stocksOwned:{
      "Coke": 0,
      "Pepsi": 0,
      "Home Depot": 0,
      "Alaska  Air": 0,
      "Red Robin": 0,
      "Tesla": 0,
      "SpaceX": 0,
      "Starbucks": 0,
      "Google": 0,
      "Apple": 0,
      "Shell": 0,
      "Best Buy": 0,
      "Target": 0,
      "Walmart": 0,
      "Fred Meyer": 0,
      "Costco": 0,
      "nvidia": 0
    },
    portfolioValues:[
      
    ],
    signedIn: false
  },
  getters: {
    cash: (state) => state.cash,
    stocks: (state) => state.stocks,
    stockNames: (state) => state.stockNames,
    stocksOwned: (state) => state.stocksOwned,
    numberOfStocksOwnedByName: (state) => (stockName) =>{ 
      return state.stocksOwned[stockName];
     },
    currentPortfolioValue: (state) => {
      var value = state.cash;

      for (let stockName in state.stocksOwned){
        if (state.stocks[stockName] != undefined){
          const currentStocksValue = state.stocksOwned[stockName] * state.stocks[stockName].values[state.stocks[stockName].values.length - 1];
          value += currentStocksValue;
        }
      }

      return value;
    },
    portfolioValues: (state) => {
      return state.portfolioValues;
    },
    signedIn: (state) => {
      return state.signedIn;
    }
  },
  mutations: {
    toggleSignIn: (state) => {
      state.signedIn = !state.signedIn;
    },
    changeCash: (state, cash) => (state.cash = cash),
    initStockValues: (state) => {
      state.stockNames.forEach((n) => {
        if (state.stocks[n] == undefined) {
          const initialStockValue = 1000;
          Vue.set(state.stocks, n, {
            values: [initialStockValue],
            stockName: n
          });
        }
      });
    },
    buyStock: (state, stockName) => {
      if (state.stocksOwned[stockName] === undefined){
        state.stocksOwned[stockName] = 0;
      }
      let currentStockVal = state.stocks[stockName].values[state.stocks[stockName].values.length - 1];

      if (currentStockVal < 0) currentStockVal = currentStockVal * -1 * 2;

      if (state.cash >= currentStockVal) {
        state.stocksOwned[stockName]++;
        state.cash -= currentStockVal;
      }
    },
    sellStock: (state, stockName) => {
      if (state.stocksOwned[stockName] !== undefined){
        if (state.stocksOwned[stockName] > 0){
          state.stocksOwned[stockName]--;
          state.cash += state.stocks[stockName].values[state.stocks[stockName].values.length - 1];
        }
      }
    },
    addPortfolioValue: (state, value) => {
      state.portfolioValues.push(value);
    }
  },
  actions: {
    'END_DAY' : () => {},
    'SELL_STOCK' : (context, stockName) => {
      context.commit('sellStock', stockName);
    },
    'BUY_STOCK' : (context, stockName) => {
      context.commit('buyStock', stockName);
    }
  },
  modules: {},
});
