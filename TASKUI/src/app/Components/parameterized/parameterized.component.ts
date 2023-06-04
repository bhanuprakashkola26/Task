import { ProductParameterService } from './../../Services/product-parameter.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductParameter } from 'src/app/Models/ProductParameter.models';

@Component({
  selector: 'app-parameterized',
  templateUrl: './parameterized.component.html',
  styleUrls: ['./parameterized.component.css']
})
export class ParameterizedComponent implements OnInit{
  productId: number | null = null;
  param:ProductParameter[] = [];

  constructor(private route: ActivatedRoute,private productparameterService:ProductParameterService) {}

  ngOnInit(): void {

    this.route.paramMap.subscribe(params => {
      this.productId = Number(params.get('id'));

      if(this.productId) {
        this.productparameterService.getProductByProductId(this.productId)
        .subscribe(
          params => {
            this.param = params;
          },
          error => {
            console.log(error);
          }
        )
      }

    })

    // this.productparameterService.getAllProductParameters()
    // .subscribe({
    //   next:(param) => {
    //     this.param=param;
    //   },
    //   error: (response) => {
    //     console.log(this.param);
    //   }
    // })
  }

}
