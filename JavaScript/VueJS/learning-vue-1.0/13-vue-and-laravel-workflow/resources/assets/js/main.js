var Vue = require('vue');

import Alert from './components/Alert.vue';

new Vue({
  el: '#app',

  components: { Alert },

  ready() {
    alert('Ready to go!');
  }
});
