//父组件
Vue.component('balance', {
    template: 
    //注意看，父组件中定义了一个叫show-balance的事件
    `
    <div>
        <show @show-balance="show_balance"></show>
        <div v-if="show">您的余额￥98元</div>
    </div>`,
    data: function () {
        return {
            show:false,
        }
    },
    methods:{
        show_balance:function(){
            if(this.show == false){
                this.show = true;
            }else this.show = false;
        }
    },
})
//子组件
Vue.component('show', {
    //button中绑定click事件
    template: '<button @click="on_click()">显示/关闭显示</button>',
    methods: {
        on_click() {
            //子组件通过$emit触发父组件的自定义事件
            this.$emit('show-balance', { a: 1, b: 2 });
        }
    }
})

new Vue({
    el: '#app',
})