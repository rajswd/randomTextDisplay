import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './form/form.component';
import { CurdComponent } from './crud/curd.component';

const appRoutes: Routes = [
  { path: 'home', component: FormComponent },
  { path: 'curd', component: CurdComponent },
  { path: '**', component: FormComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
