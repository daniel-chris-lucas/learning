Vue.filter('jsonIt', function (value) {
  return JSON.stringify(value);
});

Vue.filter('role', function (value, role) {
  return value.filter(function (item) {
    return item.role == role;
  });
});

new Vue({
  el: 'body',

  data: {
    message: 'Hello World',

    people: [
      {name: 'Joe', role: 'admin'},
      {name: 'Susan', role: 'admin'},
      {name: 'Frank', role: 'student'},
      {name: 'Jeffrey', role: 'admin'},
    ]
  }
});
