import { Component, OnInit } from '@angular/core';
import { FormGroup ,FormControl, Validators , FormArray} from '@angular/forms';
import {NgModule} from '@angular/core'
import { ProdserviceService } from '../myservice/prodservice.service';
import { getLocaleDateFormat } from '@angular/common';

@Component({
  selector: 'app-seller',
  templateUrl: './seller.component.html',
  styleUrls: ['./seller.component.css']
})
export class SellerComponent implements OnInit {

  constructor(private prodob:ProdserviceService) { }

  ngOnInit(): void {
    this.createForm();
  }
  myReactiveForm!: FormGroup;

  createForm(){
    this.myReactiveForm = new FormGroup({
    
        'product_name': new FormControl(null,Validators.required),
        'product_image' : new FormControl(null),
        'product_categoury' : new FormControl(null),
        'price' : new FormControl(null)
        
    })
  }
  OnSubmit(value:any){
    console.log(this.myReactiveForm.value);
    this.prodob.addProduct(value).subscribe((res)=>{
      console.log(res);
      
    })

    

  }
  

}
