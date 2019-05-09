Vue.component('like', {
    //绑定点击事件

    template: '#but',
    //数据暂时存到data中
    data: function () {//function作为一个指令，用于指导如何生成新的数据**
        return {
            likeCount: 10,
            liked: false,
        }
    },
    methods: {
        toggleLike: function () {
            //如果条件中的布尔值与原先相反
            if (this.liked == false) {
                this.likeCount++;
                this.liked = true;
            }else{
                this.likeCount--;
                this.liked = false;
            };


        }
    },
});

new Vue({
    el: '#app',
})