var store = {
  username: 'DanielLucas'
};

new Vue({
  el: 'body',

  data: store,

  components: {
    notification: {
      data: function () {
        return store;
      },

      template: '<h2>{{ username }}: <slot></slot></h2>'
    }
  }
});
