import { Category } from './../../Models/Category.models';
import { CategoryService } from './../../Services/category.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit{
  
  categories:Category[] = [];

  constructor(private CategoryService: CategoryService){}

  ngOnInit(): void {
    this.CategoryService.getAllCategories()
    .subscribe({
      next: (Category) => {
        this.categories = Category;
      },
      error: (response) => {
        console.log(response);
    }
    });

  }

  

}
