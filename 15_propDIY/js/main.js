//自定义属性
Vue.directive('pin', function (el,binding) {
    // console.log(binding.value);//第二个传的参数是自定义属性的value和一些其他的附带信息
    if(binding.value){
        el.style.position = 'fixed';
        el.style.top = '10px';
        el.style.left = '10px';
    }else{
        el.style.position = 'static';
    }
})


new Vue({
    el: '#app',
    data:{
        card1:{pinned:false},
        card2:{pinned:false},
    },
    methods: {
        onClick:function(){
            //状态切换
            this.card1.pinned =! this.card1.pinned;
        }
    },
})