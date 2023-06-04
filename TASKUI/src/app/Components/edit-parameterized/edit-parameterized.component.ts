import { ProductParameterService } from 'src/app/Services/product-parameter.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ProductParameter } from 'src/app/Models/ProductParameter.models';

@Component({
  selector: 'app-edit-parameterized',
  templateUrl: './edit-parameterized.component.html',
  styleUrls: ['./edit-parameterized.component.css']
})
export class EditParameterizedComponent implements OnInit{

  parameterdetails : ProductParameter = {
    id:0,
    name:'',
    value: '',
    product_id:0
  }

  constructor(private route: ActivatedRoute, private ProductParameterService : ProductParameterService,
    private router: Router) {}

    ngOnInit(): void {
      this.route.paramMap.subscribe({
        next: (params) => {
          const id = Number(params.get('id'));

          if(id){
            this.ProductParameterService.getProductParameterById(id)
            .subscribe({
              next:(response) => {
                this.parameterdetails = response;
              }
            });
          }
        }
      })
    }

    updateProduct() {
      this.ProductParameterService.updateProductParameter(this.parameterdetails.id,this.parameterdetails)
      .subscribe({
        next: (response) => {
          this.router.navigate(['products'])
        }
      });
    }
  
    deleteProduct(id:Number){
      this.ProductParameterService.deleteProductParameter(id)
      .subscribe({
        next: (response) => {
          this.router.navigate(['products']);
          }
          });
    }

}
