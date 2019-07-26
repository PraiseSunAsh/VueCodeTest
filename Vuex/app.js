const store = new Vuex.Store({
  state:{
    count:0,
  },
  mutations:{
    addFn:state => state.count++,
    minsFn:state => state.count--,  
    
  },
  actions:{
    mulFn(){
      setTimeout(() => {
        console.log("异步的操作")
      }, 2000);
    }
  },
  
  
})
new Vue({
  el:'#app',
  computed: {
    //相当于getter，可以获得值
    num(){
      return store.state.count;
    },
  },
  methods: {
    add(){
      //同步调用该方法
      store.commit('addFn')
    },
    
    mins(){
      store.commit('minsFn')
    },
    mul(){
      store.dispatch('mulFn')
    }
  },
})