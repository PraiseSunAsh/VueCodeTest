; (function () {
    'use strict';

    new Vue({
        el: '#main',
        data: {
            list: [],
            current: {
                title: '',
            },
        },
        methods: {
            merge: function () {
                //有this关键字的变量都给存起来是个好习惯
                var ID = this.current.id;
                //如果当前列表存在id（元素）就更新
                if (ID) {
                   //看来我要滚回去看下闭包了
                   //卧槽这里的index为啥不是布尔值？？？？？
                    var index = this.list.findIndex(function(item){
                        return item.id == ID;
                    });
                    this.list[index] = Object.assign({},this.current);
                    
                    Vue.set(this.list, index, copy(this.current));
                } else {
                    // 如果不存在就不添加
                    if (!this.current.title) return;
                    // 添加之前需要浅拷贝一个指针
                    var todo = Object.assign({}, this.current);
                    //每次添加前就生成一个id放进去
                    todo.id = this.list.length+1;
                    //然后把current推进去
                    this.list.push(todo);
                }

            },

            remove: function (index) {
                this.list.splice(index, 1);
            },

            

        },

    });
})();