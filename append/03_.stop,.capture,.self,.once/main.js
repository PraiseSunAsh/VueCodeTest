var vm = new Vue({
    el:'#app',
    data:{
   
    },
    methods: {
       divHandler(){
           console.log("触发了div的点击事件");
       },
       btnHandler(){
           console.log("触发了btn按钮的点击事件");
       }
    },
})