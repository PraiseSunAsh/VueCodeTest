Vue.component('alert', {
    //自定义元素的样子
    template: '<button @click="onClick">弹弹弹</button>',
    //自定义元素的方法
    props:['msg'],
    //在使用父组件传递过来的属性之前，要先在子组件的props中定义一下，才能接收到属性的值
    methods: {
        onClick: function () {
            alert(this.msg);
        }
    },
});

Vue.component('user', {
    template: '<a :href="\'/user/\'+username">{{username}}</a>',
    //这个地方也一样，如果不定义那么再username中就访问不到
    props:['username'],
    methods: {
    },
});
new Vue({
    el:'#app',
});