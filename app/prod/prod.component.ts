import { Component, OnInit,NgModule } from '@angular/core';
import { ProdserviceService } from '../myservice/prodservice.service';
import { CommonModule} from '@angular/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-prod',
  templateUrl: './prod.component.html',
  styleUrls: ['./prod.component.css']
})
export class ProdComponent implements OnInit {
  constructor(private prod:ProdserviceService) { }
  productlist:any=[];

  ngOnInit(): void {
    this.dataList();
  }   
  dataList(){
    this.prod.getProduct().subscribe((data)=>{
      console.log(data);
      this.productlist=data;
      })
     }

   deleteData(id:number){
   // console.log('id : ',id);
    this.prod.deleteProduct(id).subscribe((val)=>{
      console.log(val,"deleted");
      this.dataList();
    })
    
    
   }  

}
