import Vue from 'vue'
import Router from 'vue-router'
import praiseRank from '../components/praiseRank.vue'
import saleRank from '../components/saleRank.vue'
import preferentiRank from '../components/preferentiRank.vue'
import newItemRank from '../components/newItemRank.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/praiseRank',
      name: 'praiseRank',
      component: praiseRank
    },{
      path: '/saleRank',
      name: 'saleRank',
      component: saleRank
    },{
      path: '/preferentiRank',
      name: 'preferentiRank',
      component: preferentiRank
    },{
      path: '/newItemRank',
      name: 'newItemRank',
      component: newItemRank
    },
    
  ]
})
