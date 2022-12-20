import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProdserviceService {

  constructor(private http:HttpClient) { }
  
  addProduct(data:any){
  return this.http.post('http://localhost:3000/products',data);
  }

  getProduct(){
    return this.http.get('http://localhost:3000/products');
  }

  deleteProduct(id:any){
    return this.http.delete(`http://localhost:3000/products/${id}`);
  }

  upProduct(id:any){
    return this.http.get(`http://localhost:3000/products/${id}`);
  }

  updateProduct(prod:any){
    return this.http.put(`http://localhost:3000/products/${prod.id}`,prod);

  }
}
