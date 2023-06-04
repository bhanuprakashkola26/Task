import { ProductsService } from 'src/app/Services/products.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/Models/Product.models';

@Component({
  selector: 'app-show-categorized',
  templateUrl: './show-categorized.component.html',
  styleUrls: ['./show-categorized.component.css']
})
export class ShowCategorizedComponent implements OnInit {
  categoryId: number | null = null;
  products: Product[] = [];

  constructor(private route: ActivatedRoute, private ProductsService: ProductsService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.categoryId = Number(params.get('id'));

      if (this.categoryId) {
        this.ProductsService.getProductsByCategory(this.categoryId)
          .subscribe(
            products => {
              this.products = products;
            },
            error => {
              console.log(error);
            }
          );
      }
    });
  }
}
