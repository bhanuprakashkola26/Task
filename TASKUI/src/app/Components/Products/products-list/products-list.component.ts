import { ProductsService } from './../../../Services/products.service';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/Models/Product.models';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit{

  products:Product[] = [];

  constructor(private ProductsService: ProductsService){}

  ngOnInit(): void {
    this.ProductsService.getAllProducts()
    .subscribe({
      next: (products) => {
        this.products = products;
      },
      error: (response) => {
        console.log(response);
      }
    });

    
  }
}
