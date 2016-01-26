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
var common_1 = require('angular2/common');
var DemoFormWithValidationsShorthand = (function () {
    function DemoFormWithValidationsShorthand(fb) {
        this.myForm = fb.group({
            'sku': ['', common_1.Validators.required]
        });
    }
    DemoFormWithValidationsShorthand.prototype.onSubmit = function (value) {
        console.log('you submitted value: ', value);
    };
    DemoFormWithValidationsShorthand = __decorate([
        core_1.Component({
            selector: 'demo-form-with-validations-shorthand',
            directives: [common_1.FORM_DIRECTIVES],
            template: "\n    <div class=\"ui raised segment\">\n      <h2 class=\"ui header\">Demo Form: with validations (shorthand)</h2>\n\n      <form [ngFormModel]=\"myForm\"\n            (ngSubmit)=\"onSubmit(myForm.value)\"\n            class=\"ui form\">\n\n        <div class=\"field\" [class.error]=\"!myForm.find('sku') && myForm.find('sku')\">\n          <label for=\"skuInput\">SKU</label>\n          <input type=\"text\"\n                 id=\"skuInput\"\n                 placeholder=\"SKU\"\n                 #sku=\"ngForm\"\n                 [ngFormControl]=\"myForm.controls['sku']\">\n          <div *ngIf=\"!sku.control.valid\" class=\"ui error message\">\n            SKU is invalid\n          </div>\n          <div *ngIf=\"sku.control.hasError('required')\" class=\"ui error message\">\n            SKU is required\n          </div>\n        </div>\n\n        <div *ngIf=\"!myForm.valid\" class=\"ui error message\">\n          Form is invalid\n        </div>\n\n        <button type=\"submit\" class=\"ui button\">Submit</button>\n      </form>\n    </div>\n  "
        }), 
        __metadata('design:paramtypes', [common_1.FormBuilder])
    ], DemoFormWithValidationsShorthand);
    return DemoFormWithValidationsShorthand;
}());
exports.DemoFormWithValidationsShorthand = DemoFormWithValidationsShorthand;
