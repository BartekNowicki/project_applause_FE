import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { DataService } from '../data.service';

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
      <br>
      <button type="submit">Submit</button>
    </form>
  `,
})

  export class DeviceSelectionFormComponent {
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
      this.dataService.getData("devices").subscribe((labels: any) => {
      this.checkboxLabels = labels.map((label: { description: any; }) => label?.description);

      this.checkboxLabels.forEach(() =>
      this.checkboxGroup.push(this.fb.control(false))
    )});
  }

  onSubmit() {
    const selectedOptions = this.checkboxGroup.value
      .map((value: any, index: number) => (value ? this.checkboxLabels[index] : null))
      .filter((value: null) => value !== null);
      
      this.dataService.selectedCountriesDevices.devices.length = 0;

      for (const option of selectedOptions) {
        this.dataService.selectedCountriesDevices.devices.includes(option) 
        ? {} 
        : this.dataService.selectedCountriesDevices.devices.push(option);
      }
       this.dataService.selectedCountriesDevices.devices = this.dataService.selectedCountriesDevices.devices.filter(i => i !== "" );
       
      this.dataService.getMatchingTesters();
  }
}
