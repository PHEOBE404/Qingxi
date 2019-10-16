import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Home from '@/components/Home'
import PartHome from '@/components/PartHome'
import HelloWorld from '@/components/HelloWorld'
import UserManagement from "../components/UserManagement";
import Store from "../components/Store";
import NavBar from "../components/NavBar";
import StoreDetail from "../components/StoreDetail";
import MediumManagement from "../components/MediumManagement";
import NoticeManagement from "../components/NoticeManagement";
import CommentMenagement from "../components/CommentMenagement";
import BarrageManagement from "../components/BarrageManagement";
import GameStoreroom from "../components/GameStoreroom";
import GameRank from "../components/GameRank";
import BetterMedi from "../components/BetterMedi";
import CollegeIdentification from "../components/CollegeIdentification";
import Assistant from "../components/Assistant";
import LogManagement from "../components/LogManagement";


Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [

    {
      path: '/',
      name: 'Login',
      component: Login

    },
    {
      path: '/home',
      name: 'Home',
      component:Home

    },
    {
      path:'/datapage',
      component:NavBar,
      name:'datapage',
      children: [
        {
          path: '',
          component: PartHome
        },
        {
          path: '/userManagement',
          component: UserManagement
        },
        {

          path: '/mediumManagement',
          component: MediumManagement
        },
        {

          path: '/noticeManagement',
          component: NoticeManagement
        },{

          path: '/commentMenagement',
          component: CommentMenagement
        },{

          path: '/barrageManagement',
          component: BarrageManagement
        },{

          path: '/gameStoreroom',
          component: GameStoreroom
        },{

          path: '/gameRank',
          component: GameRank
        },{

          path: '/betterMedi',
          component: BetterMedi
        },{

          path: '/collegeIdentification',
          component: CollegeIdentification
        },{

          path: '/assistant',
          component: Assistant
        },{

          path: '/logManagement',
          component: LogManagement
        },
        ]
    },


    {
      path: '/parthome',
      name: 'parthome',
      component: PartHome
    },
    {
      path:'/usermanagement',
      component:UserManagement
    },
    {
      path: '/store',
      component: Store,
      name: 'store',
    },
        {
          name:'storedetail',
          path:'/storedetail',
          component:StoreDetail
        }





  ]
})
