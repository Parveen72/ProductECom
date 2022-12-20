import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import { TestmodModule } from './mymodule/testmod/testmod.module';
import {HttpClientModule} from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ProdroutModule } from './product/prodrout.module';
import { TriarkComponent } from './triark/triark.component';
import { ProdtestComponent } from './prodtest/prodtest.component';
import { SellerComponent } from './seller/seller.component';
import { ProdComponent } from './prod/prod.component';
import { UpdateprodComponent } from './updateprod/updateprod.component';
@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    
    
    TriarkComponent,
    
    ProdtestComponent,
    SellerComponent,
    ProdComponent,
    UpdateprodComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    TestmodModule,
    RouterModule,
    HttpClientModule,
    ProdroutModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  
 }
