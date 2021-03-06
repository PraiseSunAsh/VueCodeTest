//定义路由结构
let routes = [
    {
        path: '/',
        component: {
            template: `
            <div>
                <h1>你现在进入到了首页</h1>
            </div>  
            `
        }
    },
    {
        path: '/about',
        component: {
            template: `
            <div>
                <h1>你现在进到了关于我们</h1>
            </div>  
            `
        }   
    }, 
    {
        path: '/user/:name',
        component: {
            // 获取路由路径中的参数
            template: `
            <div>
                <h1>你现在进入到了{{$route.params.name}}的详情页</h1>
            </div>  
            `
        }   
    }, 
];
//通过VueRouter的构造器传过去
const router = new VueRouter({
    routes:routes
})

new Vue({
    el:'#app',
    router:router,
})