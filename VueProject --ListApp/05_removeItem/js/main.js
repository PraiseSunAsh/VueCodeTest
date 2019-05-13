;(function () {
    'use strict';

    new Vue({
        el:'#main',
        data:{
            list:[],
            current:{
                title:'',
            }
        },
        methods: {
            add:function(){
                // 如果不存在就不添加
                if(!this.current.title) return;
                // 添加之前需要浅拷贝一个指针
                var todo = Object.assign({},this.current);
                //然后把current推进去
                this.list.push(todo);
            },
            update:function(){

            },
            remove:function(index){
                this.list.splice(index,1);
            },
        },

    });
})();