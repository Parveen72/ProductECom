import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product.component';
// const routes: Routes = [
//   { path: '', redirectTo: '/ProductComponent', pathMatch: 'full' },
//   { path: 'blog1comp', component: Blog1compComponent }  // you must add your component here

// ];
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [RouterModule]
})
export class ProdroutModule { }
