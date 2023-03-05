import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountrySelectionFormComponent } from './country-selection-form.component';

describe('CountrySelectionFormComponent', () => {
  let component: CountrySelectionFormComponent;
  let fixture: ComponentFixture<CountrySelectionFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountrySelectionFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CountrySelectionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
