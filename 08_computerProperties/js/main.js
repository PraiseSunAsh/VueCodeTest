var app = new Vue({
    el:'#app',
    //暂时理解为数据池
    data:{
        math:90,
        physics:80,
        english:30
    },
    //computed和methods的区别在于前者的计算结果可以一直保存（ps：感谢弹幕大神）
   computed: {
       sum:function(){
           return this.math+this.physics+this.english;
       },
       average:function(){
           return Math.round(this.sum/3);
       }
   },
});