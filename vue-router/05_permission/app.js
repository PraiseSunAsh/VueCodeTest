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
        path: '/login',
        component: {
            template: `
            <div>
                <h1>登录</h1>
            </div>  
            `
        }
    },
    {
        path: '/post',
        component: {
            template: `
            <div>
                <h1>帖子管理</h1>
            </div>  
            `
        }
    },
    
];
//通过VueRouter的构造器传过去
const router = new VueRouter({ 
    routes: routes
});
router.beforeEach((to, from, next) => {
    // to and from are both route objects. must call `next`.
    let isLogin = false;
    //如果没登录前就想看内容，就直接给他强制跳到登录界面
    if(!isLogin&&to.path == '/post'){
        next('/login');
    }else{
        next();
    }
})

new Vue({
    el: '#app',
    router: router,
})