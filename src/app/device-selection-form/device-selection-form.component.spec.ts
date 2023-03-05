import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeviceSelectionFormComponent } from './device-selection-form.component';

describe('CountrySelectionFormComponent', () => {
  let component: DeviceSelectionFormComponent;
  let fixture: ComponentFixture<DeviceSelectionFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeviceSelectionFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeviceSelectionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
