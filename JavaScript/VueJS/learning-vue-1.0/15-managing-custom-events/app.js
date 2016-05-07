Vue.component('message', {
  template: '<input v-model="message" @keyup.enter="storeMessage">',

  data: function () {
    return {
      message: ''
    };
  },

  methods: {
    storeMessage: function () {
      /*
       * Event types:
       *
       * $dipatch - Only flow upward
       * $broadcast - Flow downward
       */
      this.$dispatch('new-message', this.message);
      this.$dispatch('bound-message', this.message);

      this.message = '';
    }
  }
});

new Vue({
  el: 'body',

  data: {
    messages: []
  },

  events: {
    'new-message': function (message) {
      console.log('Parent is handling ' + message);
    }
  },

  methods: {
    handleNewMessage: function (message) {
      this.messages.push(message);
    }
  }
});
