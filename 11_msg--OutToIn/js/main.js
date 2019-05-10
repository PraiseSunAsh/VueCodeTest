Vue.component('alert', {
    //自定义元素的样子
    template: '<button @click="onClick">弹弹弹</button>',
    //自定义元素的方法
    props:['msg'],
    //在使用父组件传递过来的属性之前，要先在子组件的props中定义一下，才能接受到外界的信息
    methods: {
        onClick: function () {
            alert(this.msg);
        }
    },
});

Vue.component('user', {
    //自定义元素的样子
    //不加转义字符user无法解析
    template: '<a :href="\'/user/\'+username">{{username}}</a>',
    //自定义元素的方法
    props:['username'],
    //自定义组件的属性
    methods: {
    },
});
new Vue({
    el:'#app',
});