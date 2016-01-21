import { Component } from 'angular2/core';
import { bootstrap } from 'angular2/platform/browser';

class Product {
  constructor(
    public sku: string,
    public name: string,
    public imageUrl: string,
    public department: string[],
    public price: number
  ) {
  }
}

@Component({
  selector: 'inventory-app',
  template: `
    <div class="inventory-app">
      (Products will go here soon)
    </div>
  `
})

class InventoryApp {

}

bootstrap(InventoryApp);
