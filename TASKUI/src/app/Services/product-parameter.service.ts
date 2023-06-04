import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProductParameter } from '../Models/ProductParameter.models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductParameterService {

  constructor(private http: HttpClient) { }

  getAllProductParameters(): Observable<ProductParameter[]> {
    return this.http.get<ProductParameter[]>('https://localhost:7209/api/ProductParameter');
  }

  addProductParameter(addParameterRequest: ProductParameter): Observable<ProductParameter> {
    return this.http.post<ProductParameter>('https://localhost:7209/api/ProductParameter', addParameterRequest);
  }

  getProductParameterById(id: number): Observable<ProductParameter> {
    return this.http.get<ProductParameter>('https://localhost:7209/api/ProductParameter/' + id);
  }

  updateProductParameter(id: number, updateParameter: ProductParameter): Observable<ProductParameter> {
    return this.http.put<ProductParameter>('https://localhost:7209/api/ProductParameter/' + id, updateParameter);
  }

  deleteProductParameter(id: number): Observable<ProductParameter> {
    return this.http.delete<ProductParameter>('https://localhost:7209/api/ProductParameter/' + id);
  }

  getProductByProductId(ProductId: Number): Observable<ProductParameter[]> {
    return this.http.get<ProductParameter[]>('https://localhost:7209/api/ProductParameter/product/' + ProductId);
  }
  
}
