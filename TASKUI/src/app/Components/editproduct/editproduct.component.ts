import { Product } from 'src/app/Models/Product.models';
import { ProductsService } from './../../Services/products.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-editproduct',
  templateUrl: './editproduct.component.html',
  styleUrls: ['./editproduct.component.css']
})
export class EditproductComponent implements OnInit{

  productdetails : Product = {
    id : 0,
    name : '',
    description : '',
    price : 0,
    category_id:0

  }



  constructor(private route:ActivatedRoute,private Productsservice : ProductsService,private router: Router) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next: (params) => {
        const id = Number(params.get('id'));


        if(id){
          this.Productsservice.getById(id)
          .subscribe({
            next: (response) => {
              this.productdetails = response;

            }
          });
        }
      }
    })
  }

  updateProduct() {
    this.Productsservice.updateProduct(this.productdetails.id,this.productdetails)
    .subscribe({
      next: (response) => {
        this.router.navigate(['products'])
      }
    });
  }

  deleteProduct(id:Number){
    this.Productsservice.deleteProduct(id)
    .subscribe({
      next: (response) => {
        this.router.navigate(['products']);
        }
        });
  }
}
