import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';

const material=[
  MatButtonToggleModule,
  MatToolbarModule,
  MatCardModule,
  MatButtonModule,
  MatIconModule
]




@NgModule({
  declarations: [],
  imports: [

    CommonModule,
    material
  ],
  exports:[
    material
  ]

})
export class TestmodModule { }
