import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Category } from '../Models/Category.models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }

  getAllCategories(): Observable<Category[]> {
    return this.http.get<Category[]>('https://localhost:7069/api/Category');
  }

  addCategory(addCategoryRequest: Category): Observable<Category> {
    return this.http.post<Category>('https://localhost:7069/api/Category', addCategoryRequest);
  }

  getCategoryById(id: number): Observable<Category> {
    return this.http.get<Category>('https://localhost:7069/api/Category/' + id);
  }

  updateCategory(id: number, updateCategory: Category): Observable<Category> {
    return this.http.put<Category>('https://localhost:7069/api/Category/' + id, updateCategory);
  }

  deleteCategory(id: number): Observable<Category> {
    return this.http.delete<Category>('https://localhost:7069/api/Category/' + id);
  }
  
}
