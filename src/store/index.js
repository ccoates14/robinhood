import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cash: 0,
    stocks:[],
    stockNames:[
      'Coke',
      'Pepsi',
      'Home Depot',
      'Alaska  Air',
      'Red Robin',
      'Tesla',
      'SpaceX',
      'Starbucks',
      'Google',
      'Apple',
      'Shell',
      'Best Buy',
      'Target',
      'Walmart',
      'Fred Meyer',
      'Costco',
      'Random company'
    ],
    usedStocksNames:[]
  },
  getters:{
    cash: state => state.cash,
    stocks: state => state.stocks,
    stockNames: state => state.stockNames,
    usedStockNames: state => state.usedStockNames,
    outOfStockNames: state => state.usedStockNames.length == state.stockNames.length,
    isStockNameTaken: state => (name) => state.usedStockNames.includes(name),
    getUnusedStockName: (_, getters) => {
      if (getters.outOfStockNames){
        return null;
      }

      var currentStockName = '';
      while (getters.isStockNameTaken((currentStockName = getters.stockNames[Math.floor(Math.random() * getters.stockNames.length)])));

      return currentStockName;
    }
  },
  mutations: {
    useStockName: (state, stockName) => state.usedStockNames.push(stockName)
  },
  actions: {
  },
  modules: {
  }
})
