Vue.component('tasks', {
  template: '#tasks-template',

  data: function () {
    return {
      list: []
    };
  },

  created: function () {
    // this.list = JSON.parse(this.list);

    this.fetchTaskList();
  },

  methods: {
    fetchTaskList: function () {
      this.$http.get('api/tasks', function (tasks) {
        this.list = tasks;
      });
    },

    deleteTask: function (task) {
      this.list.$remove(task);
    }
  }
});

new Vue({
  el: 'body'
});
