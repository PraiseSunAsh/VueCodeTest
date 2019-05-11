
//当我们有很多的可复用功能时，我们可以将其混入到一个对象中

var myMixin = {
    methods: {
        show:function(){
            this.visible = true;
        },
        hide:function(){
            this.visible = false;
        },
    },
    data:function () {
        return{
            visible:false,
        }
    },
}

Vue.component('tooltip', {
    //当然事件的具体动作可以封装成一个函数
    template:`<div>
    <span @mouseenter="show" @mouseleave="hide">PSA</span>
    <div v-if="visible">PraiseSunAsh</div>
</div>`,
    //调用我们刚才自定义的混合器
    mixins:[myMixin]
});

Vue.component('popup', {
    template:`
    <div>
    <button @click="toggle">Popup</button>
    <div v-if="visible">
    <span @click="hide">X</span>
        <h4>hahaha</h4>sdbbhdhsbfshbfhjbsajbfjhsbrfhjbehjbf
    </div>
</div>
    `,
    mixins:[myMixin],
    //注意，混合器中没有定义toggle
    methods:{
        toggle:function(){
            this.visible = !this.visible;
        },
    }
})

new Vue({
    el:'#app',
})