const Vue = require('vue');

const App = require('../vue/App');

require('material-design-lite/material.js');

const app = new Vue({
  el: '#app',
  template: '<app/>',
  components: {
    App
  }
})
