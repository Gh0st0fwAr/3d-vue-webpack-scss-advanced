
import Home from '@/components/Home.vue'
import mainPage from '@/components/mainPage.vue'
import startPage from '@/components/startPage.vue'
import storyPage from '@/components/storyPage.vue'
import charPage from '@/components/charPage.vue'
import musicPage from '@/components/musicPage.vue'
import newsPage from '@/components/newsPage.vue'
import newsAdvanced from '@/components/newsAdvanced.vue'
import dlcPage from '@/components/dlcPage.vue'
import login from '@/components/login.vue'
import reg from '@/components/reg.vue'


const routes = [
   {
      path: '/blank',
      name: 'Home',
      component: Home,
      children: [
         {
            path: '/main',
            name: 'Main',
            component: mainPage
         },
         {
            path: '/story',
            name: 'Story',
            component: storyPage
         },
         {
            path: '/char',
            name: 'Char',
            component: charPage
         },
         {
            path: '/sound',
            name: 'Music',
            component: musicPage
         },
         {
            path: '/news',
            name: 'News',
            component: newsPage,
            // children: [
            //    {
            //       path: '/node=*',
            //       name: 'News Advanced',
            //       component: newsAdvanced
            //    }
            // ]
         },
         {
            path: '/news/node=*',
            name: 'News Advanced',
            component: newsAdvanced
         },
         {
            path: '/dlc',
            name: 'DLC',
            component: dlcPage
         },

      ],
   },
   {      
      path: '/',
      name: 'Start',
      component: startPage
   },
   {      
      path: '/login',
      name: 'Login',
      component: login
   },
   {      
      path: '/reg',
      name: 'Reg',
      component: reg
   },


]

export default routes;