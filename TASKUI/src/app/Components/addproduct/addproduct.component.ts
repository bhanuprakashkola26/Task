import { ProductsService } from './../../Services/products.service';
import { Component } from '@angular/core';
import { Product } from 'src/app/Models/Product.models';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent {
  addProductRequest : Product = {
    id:0,
    name:'',
    price: 0,
    description:'',
    category_id:0
  }

  constructor(private ProductsService:ProductsService) {}
  ngOnInit(): void {
    
  }

  addProduct(){
    this.ProductsService.addProduct(this.addProductRequest)
    .subscribe({
      next: (data) => {
        console.log(data);
    }
  })
}

}
