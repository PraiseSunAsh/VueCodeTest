(function(){
    function set(key,val) {
        //将JS对象（val）转换为JSON数据存起来
        localStorage.setItem(key,JSON.stringify(val));
    }

    function get(key){
        var json = localStorage.getItem(key);
        //在取json数据前先判断下数据是否存在
        if(json){
            //如果没有的话就直接return undefined
            return JSON.parse(json);
        }
    }

    //别忘了把方法暴露出去
    window.myData = {
        set:set,
        get:get,
    };
})();