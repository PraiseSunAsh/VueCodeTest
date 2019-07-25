//创建一个Vue示例作为事件的调度器
var event = new Vue();

Vue.component('whh', {
    template:`
    <div>
    我说：<input @keyup="onChange" v-model="i_said"/>
    </div>`,
    methods: {
        onChange:function(){
            //发射消息,消息的名字叫huahua-said-something
            event.$emit('huahua-said-something',this.i_said);
        }
    },
    data:function(){
        return{
            i_said:'',
        }
    }
})
Vue.component('shuandan', {
    template:`
    <div>
    花花说{{huahua_said}}
    </div>`,
    data:function(){
        return{
            huahua_said:'',
        }
    },
    //初始化完成的一瞬间执行函数
    mounted:function(){
        //在进入内部回调函数之前，需要先改变一下this的指向
        var that = this;
        //用$on接受发射的消息,至于接受到的消息如何使用取决于回调函数的使用
        event.$on('huahua-said-something',function(data){
            that.huahua_said = data;
        });
    }
})

new Vue({
    el: '#app',
})