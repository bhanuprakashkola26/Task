import { ProductParameterService } from './../../Services/product-parameter.service';
import { ProductsService } from './../../Services/products.service';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/Models/Product.models';
import { ProductParameter } from 'src/app/Models/ProductParameter.models';

@Component({
  selector: 'app-addprodparam',
  templateUrl: './addprodparam.component.html',
  styleUrls: ['./addprodparam.component.css']
})
export class AddprodparamComponent implements OnInit{

  addProdParamRequest : ProductParameter = {
    id:0,
    name:'',
    value: '',
    product_id:0
  }

  constructor(private ProductParameterService:ProductParameterService) {}
  ngOnInit(): void {
    
  }

  addProduct(){
    this.ProductParameterService.addProductParameter(this.addProdParamRequest)
    .subscribe({
      next: (data) => {
        console.log(data);
    }
  })
}

}
