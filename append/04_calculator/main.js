var vm = new Vue({
    el:'#app',
    data:{
        n1:0,
        n2:0,
        result:0,
        opt:'+'
    },
    methods: {
       calc(){
        //    switch(this.opt){
        //        case '+':this.result = parseInt(this.n1)+parseInt(this.n2);
        //        break;

        //        case '-':this.result = parseInt(this.n1)-parseInt(this.n2);
        //        break;

        //        case '*':this.result = parseInt(this.n1)*parseInt(this.n2);
        //        break;

        //        case '/':this.result = parseInt(this.n1)/parseInt(this.n2);
        //        break;
        //    }
           //eval可以将字符串转成代码执行,不推荐使用
           this.result = eval('parseInt(this.n1)'+this.opt+'parseInt(this.n2)');
       }
        
    },
})