import mainview from '@/views/main-view/mainview'
import homepage from '@/views/home-page/homepage'
import resourcespage from '@/views/resources-page/resourcespage'
import newspage from '@/views/news-page/newspage'
import framepage from '@/views/frame-page/framepage'
import developpage from '@/views/develop-page/developpage'
import applicationpage from '@/views/application-page/applicationpage'
export default [
  {
    path: '/homepage',
    name: 'homepage',
    component: homepage
   },
    {
        path: "/resourcespage",
        name:"resourcespage",
        component: resourcespage
    },
    {
        path: "/newspage",
        name:"newspage",
        component: newspage
    },
    {
        path: "/framepage",
        name:"framepage",
        component: framepage
    },
    {
        path: "/developpage",
        name:"developpage",
        component: developpage
    },
    {
        path: "/applicationpage",
        name:"applicationpage",
        component: applicationpage
    },
    // 重定向
    {
        path: '/',
        redirect: '/home'
    }
]
