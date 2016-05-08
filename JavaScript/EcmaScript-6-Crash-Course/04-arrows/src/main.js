class TaskCollection {
  constructor(tasks = []) {
    this.tasks = tasks;
  }

  log() {
    // ES5
    /*this.tasks.forEach(function (task) {
      console.log(task);
    });*/

    // ES6 Long
    /*this.tasks.forEach((task) => {
      console.log(task);
    });*/

    // ES6 Short
    this.tasks.forEach(task => console.log(task));

    // Multiple function parameters need parentheses
    // this.tasks.forEach((task, index) => console.log(task, index));

    // No function parameters needs empty parentheses
    // this.tasks.forEach(() => console.log('task'));
  }
}

class Task {}

new TaskCollection([
  new Task, new Task, new Task
]).log();
