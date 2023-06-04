import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../Models/Product.models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }

  getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>('https://localhost:7069/api/Products')
  }

  addProduct(addProductRequest: Product) : Observable<Product>{
    return this.http.post<Product>('https://localhost:7069/api/Products',addProductRequest);
  }

  getById(id:number): Observable<Product>{
    return this.http.get<Product>('https://localhost:7069/api/Products/'+id);
  }

  updateProduct(id:Number,updateProduct:Product): Observable<Product>{
    return this.http.put<Product>('https://localhost:7069/api/Products/' + id, updateProduct);
  }

  deleteProduct(id:Number):Observable<Product>{
    return this.http.delete<Product>('https://localhost:7069/api/Products/' + id);
  }

  getProductsByCategory(categoryId: number): Observable<Product[]> {
    return this.http.get<Product[]>('https://localhost:7069/api/Products/category/' + categoryId);
  }
}

