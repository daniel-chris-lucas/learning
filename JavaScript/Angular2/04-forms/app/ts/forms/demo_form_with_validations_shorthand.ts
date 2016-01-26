/* tslint:disable:no-string-literal */
import { Component } from 'angular2/core';
import {
  FORM_DIRECTIVES,
  FormBuilder,
  ControlGroup,
  Validators
} from 'angular2/common';

@Component({
  selector: 'demo-form-with-validations-shorthand',
  directives: [FORM_DIRECTIVES],
  template: `
    <div class="ui raised segment">
      <h2 class="ui header">Demo Form: with validations (shorthand)</h2>

      <form [ngFormModel]="myForm"
            (ngSubmit)="onSubmit(myForm.value)"
            class="ui form">

        <div class="field" [class.error]="!myForm.find('sku') && myForm.find('sku')">
          <label for="skuInput">SKU</label>
          <input type="text"
                 id="skuInput"
                 placeholder="SKU"
                 #sku="ngForm"
                 [ngFormControl]="myForm.controls['sku']">
          <div *ngIf="!sku.control.valid" class="ui error message">
            SKU is invalid
          </div>
          <div *ngIf="sku.control.hasError('required')" class="ui error message">
            SKU is required
          </div>
        </div>

        <div *ngIf="!myForm.valid" class="ui error message">
          Form is invalid
        </div>

        <button type="submit" class="ui button">Submit</button>
      </form>
    </div>
  `
})

export class DemoFormWithValidationsShorthand {
  myForm: ControlGroup;

  constructor(fb: FormBuilder) {
    this.myForm = fb.group({
      'sku': ['', Validators.required]
    });
  }

  onSubmit(value: string): void {
    console.log('you submitted value: ', value);
  }
}
