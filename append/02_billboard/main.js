var vm = new Vue({
    el:'#app',
    data:{
    msg:"卖竹鼠三元一只十元三只!!!!!!!!!",
    Id:null//用来存定时器的id
    },
    methods: {
        //es6函数写法
        start(){
            //如果id中已经有东西了（也就是说定时器已经开了），就不执行
            if(this.Id!=null) return;
            var that = this;
            //用定时器重复执行
            that.Id = setInterval(function(){
                //把0到1截出来
            var begin = that.msg.substring(0,1);
            //把1到最后截出来
            var end = that.msg.substring(1)
            //这样意思是往左走
            that.msg=end+begin;
            },400)
        },
        stop(){
            clearInterval(this.Id);
            //不用了记得把状态改回来
            this.Id = null;
        }
    },
})