var app = new Vue({
    el:'#app',
    //暂时理解为数据池
    data:{
       
    },
    methods: {
        onClick:function(){
            console.log("clicked");
        },
        onEnter:function(){
            console.log("进来了");
        },
        onOut:function(){
            console.log("出去了");
        },
        onSubmit:function(e){
            //不阻止的话提交表单就会刷新
            e.preventDefault();
            console.log("submited");
        },
        onKeyup:function(){
            console.log("keyup");
        },

    },
});