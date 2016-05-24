Vue.component('home-page', {
  template: '<h2>Home Page</h2>'
});

Vue.component('about-page', {
  template: '<h2>About Page</h2>'
});

new Vue({
  el: 'body',

  data: {
    currentView: 'home-page'
  }
});
