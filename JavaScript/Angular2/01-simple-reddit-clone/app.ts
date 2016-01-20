import { bootstrap } from "angular2/platform/browser";
import { Component } from "angular2/core";

@Component({
  selector: 'hello-world',
  template: `
    <div>
      Hello World
    </div>
  `
})

class HelloWorld {

}

bootstrap(HelloWorld);
