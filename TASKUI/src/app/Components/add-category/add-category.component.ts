import { CategoryService } from './../../Services/category.service';
import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/Models/Category.models';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit{

  addcategoryRequest: Category = {
    id: 0,
    name: '',
  }

  constructor(private CategoryService:CategoryService) {}

  ngOnInit(): void {
    
  }

  addCategory() {
    this.CategoryService.addCategory(this.addcategoryRequest)
    .subscribe({
      next:(category) => {
        console.log(category);
      }
    })
  }

}
