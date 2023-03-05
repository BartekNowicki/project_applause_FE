import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { DataService } from '../data.service';

@Component({
  selector: 'app-country-selection-form',
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
      <br>
      <button type="submit">Submit</button>
    </form>
  `,
})

  export class CountrySelectionFormComponent {
  checkboxForm: FormGroup;
  checkboxLabels: any[] = [""];

  constructor(private fb: FormBuilder, private dataService: DataService) {
    this.checkboxForm = this.fb.group({
      checkboxGroup: this.fb.array([]),
    });
  }

  get checkboxGroup(): FormArray {
    return this.checkboxForm.get('checkboxGroup') as FormArray;
  }

  ngOnInit(): void {
      this.dataService.getData("countries").subscribe((labels: any) => {
      this.checkboxLabels = labels;

      this.checkboxLabels.forEach(() =>
      this.checkboxGroup.push(this.fb.control(false))
    );

    });
  }

  onSubmit() {
    const selectedOptions = this.checkboxGroup.value
      .map((value: any, index: number) => (value ? this.checkboxLabels[index] : null))
      .filter((value: null) => value !== null);
      console.log(selectedOptions);
      this.dataService.getMatchingTesters({"countries":["US", "JP"], "devices": ["Nexus 4", "iPhone 4"]}).subscribe((response) => {
      console.log(response);
    });
  }
}
