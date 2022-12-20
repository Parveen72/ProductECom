import { Component, OnInit, ɵɵclassMapInterpolate4 } from '@angular/core';
import { DemoService } from '../myservice/demo.service';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})

export class ProductComponent implements OnInit {


  constructor(private demo : DemoService,private rout:Router) { }
  ngOnInit(): void {
    //this.getData();
    
  }
  mydata:any=[];

  createPost(){
    this.demo.createpost().subscribe((res)=>{
      console.log(res);
      
    }) 
  }
// getData(){
//  this.demo.getBlogData().pipe(
//    map((resData:any) => {
//         const postArray = [] ;
//         for (const key in resData ) {
//           if (resData.hasOwnProperty(key)) {
         
//             postArray.push({...resData[key], id : key});
          
//           }
//         }
//         return postArray;
//       })
//     ).subscribe((posts) => {
//       this.mydata.push(posts);
//       console.log(this.mydata[0][1]);
      
       
//     })
  
  }
  
