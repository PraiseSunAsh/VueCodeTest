//自定义属性
Vue.directive('pin', function (el,binding) {
    
    var position = binding.modifiers;//获取修饰对象
    var para = binding.arg;//获取配置参数
    if(binding.value){
        el.style.position = 'fixed';

        for(var key in position){
            if(position[key]){
                el.style[key] = '10px';
                //看下面两行就明白了
            }
        }
            // el.style.top = '10px';
            // el.style.left = '10px';
            if(para==='true'){
                el.style.background = 'yellow';
            }
    }
    else{
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

//关于三等号
console.log('test');
var a = 1;
var b = '1';
console.log(a==b);//true
console.log(a===b);//false