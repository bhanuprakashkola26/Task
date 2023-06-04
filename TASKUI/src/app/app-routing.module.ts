import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsListComponent } from './Components/Products/products-list/products-list.component';
import { EditproductComponent } from './Components/editproduct/editproduct.component';
import { CategoryComponent } from './Components/category/category.component';
import { ShowCategorizedComponent } from './Components/show-categorized/show-categorized.component';
import { ParameterizedComponent } from './Components/parameterized/parameterized.component';
import { EditParameterizedComponent } from './Components/edit-parameterized/edit-parameterized.component';
import { AddCategoryComponent } from './Components/add-category/add-category.component';
import { compileClassMetadata } from '@angular/compiler';
import { AddprodparamComponent } from './Components/addprodparam/addprodparam.component';
import { AddproductComponent } from './Components/addproduct/addproduct.component';


const routes: Routes = [
  {
    path: 'products',
    component: ProductsListComponent
  },
  {
    path: 'add',
    component : AddCategoryComponent
  },
  {
    path:'add/prod',
    component : AddproductComponent
  },
  {
    path: 'add/prod/param',
    component : AddprodparamComponent
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
  },
  {
    path:'products/Param/:id',
    component:ParameterizedComponent
  },
  {
    path:'products/Param/:id/Param/:id',
    component:EditParameterizedComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
