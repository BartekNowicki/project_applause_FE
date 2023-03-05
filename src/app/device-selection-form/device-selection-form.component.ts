import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';

@Component({
  selector: 'app-device-selection-form',
  template: `
    <form [formGroup]="checkboxForm" (ngSubmit)="onSubmit()">
      <div formArrayName="checkboxGroup">
        <div *ngFor="let checkbox of checkboxGroup.controls; let i = index">
          <label>
            <input type="checkbox" [formControlName]="i">
            {{ checkboxLabels[i] }}
          </label>
        </div>
      </div>
      <button type="submit">Submit</button>
    </form>
  `,
})

  export class DeviceSelectionFormComponent {
  checkboxForm: FormGroup;
  checkboxLabels = ['Option 1', 'Option 2', 'Option 3'];

  constructor(private fb: FormBuilder) {
    this.checkboxForm = this.fb.group({
      checkboxGroup: this.fb.array([]),
    });

    this.checkboxLabels.forEach(() =>
      this.checkboxGroup.push(this.fb.control(false))
    );
  }

  get checkboxGroup(): FormArray {
    return this.checkboxForm.get('checkboxGroup') as FormArray;
  }

  onSubmit() {
    const selectedOptions = this.checkboxGroup.value
      .map((value: any, index: number) => (value ? this.checkboxLabels[index] : null))
      .filter((value: null) => value !== null);

    console.log('Selected options:', selectedOptions);
  }
}