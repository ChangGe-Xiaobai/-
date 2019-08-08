
import Vue from 'vue'
import Axios from "axios"
import router from "./router/index"


Vue.prototype.$http = Axios
new Vue({
  el: '#app',
  router,
})
