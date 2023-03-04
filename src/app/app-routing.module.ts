import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TesterListComponent } from './tester-list/tester-list.component';  

const routes: Routes = [
  { path: '', redirectTo: 'view-tester', pathMatch: 'full' },  
  { path: 'view-tester', component: TesterListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
