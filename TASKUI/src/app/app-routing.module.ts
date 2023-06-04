import { AddProductComponent } from './Components/add-product/add-product.component';
import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsListComponent } from './Components/Products/products-list/products-list.component';
import { EditproductComponent } from './Components/editproduct/editproduct.component';
import { CategoryComponent } from './Components/category/category.component';
import { ShowCategorizedComponent } from './Components/show-categorized/show-categorized.component';
import { ParameterizedComponent } from './Components/parameterized/parameterized.component';
import { EditParameterizedComponent } from './Components/edit-parameterized/edit-parameterized.component';


const routes: Routes = [
  {
    path: 'products',
    component: ProductsListComponent
  },
  {
    path: 'add',
    component : AddProductComponent
  },
  {
    path: 'category',
    component : CategoryComponent
  },
  {
    path:'products/edit/:id',
    component: EditproductComponent
  },
  {
    path: 'category/edit/:id',
    component: ShowCategorizedComponent
  },
  {
    path: 'category/edit/:id/Param/:id',
    component: ParameterizedComponent
  },
  {
    path: 'category/edit/:id/Param/:id/Param/:id',
    component: EditParameterizedComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
