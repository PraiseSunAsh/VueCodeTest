//全局组件
//自定义全局组件的名字
Vue.component('alert', {
    //自定义元素的样子
    template: '<button @click="onClick">弹弹弹</button>',
    //自定义元素的方法
    methods: {
        onClick: function () {
            alert("你吼哇");
        }
    },
});

//渲染到指定区域
var app = new Vue({
    el: '#seg1',
    //局部组件,用对象的方式传进去
    components: {
        alert: {
            template: '<button @click="onClick">弹弹弹</button>',
            //自定义元素的方法
            methods: {
                onClick: function () {
                    alert("你吼哇");
                }
            },
        }
    }
});
var app2 = new Vue({
    el: '#seg2',
});