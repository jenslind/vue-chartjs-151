var Vue = require('vue')
var chart = require('./chart.vue')

Vue.component('chart', chart)

new Vue({
  el: '.app',
  data () {
    return {
      rootData: [1,2,3]
    }
  },
  created () {
    setTimeout(() => {
      this.rootData = [3,2,1]
    }, 2000)
  }
})
