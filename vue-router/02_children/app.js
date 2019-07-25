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
                <router-link to="more" append>更多信息</router-link>
                <router-view></router-view> 
            </div>  
            `
            //在当前的地址上追加一个more
        },
        // 在用户页面增加一个子路由
        children: [{
            //注意这个地方前面不能加斜杠
            path: 'more',
            component: {
                template: `
                <div>
                    用户:{{$route.params.name}}
                    <br>
                    以下为该用户的详情...   
                </div>
                `
            }
        }]
    },
];
//通过VueRouter的构造器传过去
const router = new VueRouter({
    routes: routes
})

new Vue({
    el: '#app',
    router: router,
})