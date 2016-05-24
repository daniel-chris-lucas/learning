/*
 * Angular
 */
import { Component } from 'angular2/core';
import { bootstrap } from 'angular2/platform/browser';

/*
 * We're using Webpack to load our CSS which is why we use `require` instead of
 * `import` here
 */
require('../css/styles.css');
require('../css/semantic.min.css');
require('../images/ng-book-2-minibook.png');
require('../images/favicon-32x32.png');
require('../images/favicon.ico');

import {DemoFormSku} from './forms/demo_form_sku';
import {DemoFormSkuBuilder} from './forms/demo_form_sku_with_builder';
import {DemoFormWithValidationsExplicit}
  from './forms/demo_form_with_validations_explicit';
import {DemoFormWithValidationsShorthand}
  from './forms/demo_form_with_validations_shorthand';

@Component({
  selector: 'forms-demo-app',
  directives: [
    DemoFormSku,
    DemoFormSkuBuilder,
    DemoFormWithValidationsExplicit,
    DemoFormWithValidationsShorthand
  ],
  template: `
    <div>
      <demo-form-with-validations-shorthand></demo-form-with-validations-shorthand>
      <demo-form-with-validations-explicit></demo-form-with-validations-explicit>
      <demo-form-sku-builder></demo-form-sku-builder>
      <demo-form-sku></demo-form-sku>
    </div>
  `
})

class FormsDemoApp {
}

bootstrap(FormsDemoApp);
