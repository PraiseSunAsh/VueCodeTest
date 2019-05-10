//起名为过滤器的意思应该是过滤数据吧，但叫做加工器是不是更好呢？
//定义一下自定义的显示格式
Vue.filter('toCurrency', function (val,unit) {
    val = val||0;
    unit = unit||'元';
    return val+unit;
})
//定义一下自定义的显示格式
Vue.filter('toMeter', function (val,unit) {
    val = val||0;
    unit = unit||'米';
    return (val/1000).toFixed(2)+unit;
})
new Vue({
    el: '#app',
    data:{
        price:10,
        length:10
    }
})