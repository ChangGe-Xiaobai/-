import Vue from 'vue'
import Router from 'vue-router'
import Reg from "../components/register"
import Header from "../components/header"



Vue.use(Router)

export default new Router({
  mode:"history",
  routes: [
    {
      path: '/reg',
      name: 'Reg',
      components:{
        default:Reg,
         header:Header
      }
    },
    
  ]
})
