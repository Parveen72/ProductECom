import { NgModule } from '@angular/core';
import { Route, RouterModule, Routes } from '@angular/router';
import { ProdComponent } from './prod/prod.component';
import { ProdtestComponent } from './prodtest/prodtest.component';
import { ProductComponent } from './product/product.component';
import { SellerComponent } from './seller/seller.component';
import { UpdateprodComponent } from './updateprod/updateprod.component';

const route : Routes=[
  
  { path:'prod',component:ProdComponent },
  { path:'seller',component:SellerComponent},
  { path:'updateprod/:id',component:UpdateprodComponent}
  
]

@NgModule({
  imports: [RouterModule.forRoot(route)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
