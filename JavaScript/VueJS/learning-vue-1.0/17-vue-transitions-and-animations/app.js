Vue.transition('anim-fade', {
  enterClass: 'flipInX',
  leaveClass: 'fadeOut'
});

new Vue({
  el: 'body',

  data: {
    show: true
  }
});
