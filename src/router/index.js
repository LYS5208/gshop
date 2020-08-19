import Vue from 'vue'
import VueRouter from 'vue-router'

// import MSite from '../pages/MSite/MSite'
// import Order from '../pages/Order/Order'
// import Profile from '../pages/Profile/Profile'
// import Search from '../pages/Search/Search'

import Login from '../pages/Login/Login'
import UserInfo from '../pages/Login/UserInfo'

//路由懒加载,返回路由组件的函数，只有执行函数才会加载路由组件，函数请求对应的路由路径时才执行
const MSite =()=>import('../pages/MSite/MSite')
const Order =()=>import('../pages/Order/Order')
const Profile =()=>import('../pages/Profile/Profile')
const Search =()=>import('../pages/Search/Search')

import Shop from '../pages/Shop/Shop'
import ShopGoods from '../pages/Shop/ShopGoods/ShopGoods'
import ShopInfo from '../pages/Shop/ShopInfo/ShopInfo'
import ShopRatings from '../pages/Shop/ShopRatings/ShopRatings'

Vue.use(VueRouter)
export default new VueRouter({
    // mode:'history',
    routes:[
        {
            path:'/msite',
            component:MSite,
            meta: {
                showFooter:true
            }
        },
        {
            path:'/order',
            component:Order,
            meta: {
                showFooter:true
            }
        },
        {
            path:'/search',
            component:Search,
            meta: {
                showFooter:true
            }
        },
        {
            path:'/profile',
            component:Profile,
            meta: {
                showFooter:true
            }
        },
        {
            path:'/',
            redirect:'/msite'
        },
        {
            path:'/login',
            component:Login
        },
        {
            path:'/userinfo',
            component:UserInfo
        },
        {
            path:'/shop',
            component:Shop,
            children:[
                {
                    path:'/shop/goods',
                    component:ShopGoods
                },
                {
                    path:'/shop/ratings',
                    component:ShopRatings
                },
                {
                    path:'/shop/info',
                    component:ShopInfo
                },
                {
                    path:'',
                    redirect:'/shop/goods'
                }
            ]
        }
    ]
})