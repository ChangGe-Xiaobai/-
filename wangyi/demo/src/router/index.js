import Vue from 'vue'
import Router from 'vue-router'
import Tab from "@/components/shaidan"
import Chlid1 from "../components/child.vue"
import Chlid2 from "../components/child1.vue"
import Child3 from "../components/child3.vue"
Vue.use(Router)

export default new Router({
  data() {
    return {
    }
  },
  mounted() {
    console.log
  },
  routes: [
    
    {
      path: '/child',
      name: 'tab',
      component: Tab,
      children:[{
        path: '/child/3',
        name: 'chlid1',
        component: Chlid1,
      },
      {
        path: '/child/4',
        name: 'chlid2',
        component: Chlid2,
      }]
    },
    {
      path:'/a',
      component:Child3
    }
  ]
})
