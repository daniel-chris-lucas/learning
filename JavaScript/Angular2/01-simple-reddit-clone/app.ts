import { bootstrap } from "angular2/platform/browser";
import { Component } from "angular2/core";

@Component({
  selector: 'hello-world',
  template: `<div>Hello {{ name }}</div>`
})

class HelloWorld {
  name: string;

  constructor() {
    this.name = 'Daniel';
  }
}

bootstrap(HelloWorld);
