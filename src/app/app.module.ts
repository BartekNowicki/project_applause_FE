import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; 
import  {DataTablesModule} from 'angular-datatables';  
import { TesterListComponent } from './tester-list/tester-list.component';
import { CountrySelectionFormComponent } from './country-selection-form/country-selection-form.component';
import { DeviceSelectionFormComponent } from './device-selection-form/device-selection-form.component';


@NgModule({
  declarations: [
    AppComponent,
    TesterListComponent,
    CountrySelectionFormComponent,
    DeviceSelectionFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,  
    HttpClientModule,  
    DataTablesModule  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
