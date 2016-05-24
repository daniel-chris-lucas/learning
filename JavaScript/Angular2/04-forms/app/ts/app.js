"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('angular2/core');
var browser_1 = require('angular2/platform/browser');
require('../css/styles.css');
require('../css/semantic.min.css');
require('../images/ng-book-2-minibook.png');
require('../images/favicon-32x32.png');
require('../images/favicon.ico');
var demo_form_sku_1 = require('./forms/demo_form_sku');
var demo_form_sku_with_builder_1 = require('./forms/demo_form_sku_with_builder');
var demo_form_with_validations_explicit_1 = require('./forms/demo_form_with_validations_explicit');
var demo_form_with_validations_shorthand_1 = require('./forms/demo_form_with_validations_shorthand');
var FormsDemoApp = (function () {
    function FormsDemoApp() {
    }
    FormsDemoApp = __decorate([
        core_1.Component({
            selector: 'forms-demo-app',
            directives: [
                demo_form_sku_1.DemoFormSku,
                demo_form_sku_with_builder_1.DemoFormSkuBuilder,
                demo_form_with_validations_explicit_1.DemoFormWithValidationsExplicit,
                demo_form_with_validations_shorthand_1.DemoFormWithValidationsShorthand
            ],
            template: "\n    <div>\n      <demo-form-with-validations-shorthand></demo-form-with-validations-shorthand>\n      <demo-form-with-validations-explicit></demo-form-with-validations-explicit>\n      <demo-form-sku-builder></demo-form-sku-builder>\n      <demo-form-sku></demo-form-sku>\n    </div>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], FormsDemoApp);
    return FormsDemoApp;
}());
browser_1.bootstrap(FormsDemoApp);
