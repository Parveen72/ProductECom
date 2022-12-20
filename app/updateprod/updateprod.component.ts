import { Component, OnInit } from '@angular/core';
import { FormGroup ,FormControl, Validators , FormArray} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ProdserviceService } from '../myservice/prodservice.service';

@Component({
  selector: 'app-updateprod',
  templateUrl: './updateprod.component.html',
  styleUrls: ['./updateprod.component.css']
})
export class UpdateprodComponent implements OnInit {
prodData:any;
  constructor(private route : ActivatedRoute,private prod :ProdserviceService) { }

  ngOnInit(): void {
    let prodid = this.route.snapshot.paramMap.get('id');
    console.warn(prodid);
    this.prod.upProduct(prodid).subscribe((val)=>{
      console.log(val);
      this.prodData=val;
      
    })
    
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
  OnSubmit(data:any){

      console.log(data);
      if(this.prodData){
        data.id=this.prodData.id;
      }
      this.prod.updateProduct(data).subscribe((val)=>{
        console.log(val);
        
      })
      
  }
}
