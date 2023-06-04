import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsListComponent } from './Components/Products/products-list/products-list.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { EditproductComponent } from './Components/editproduct/editproduct.component';
import { CategoryComponent } from './Components/category/category.component';
import { ShowCategorizedComponent } from './Components/show-categorized/show-categorized.component';
import { ParameterizedComponent } from './Components/parameterized/parameterized.component';
import {MatStepperModule} from '@angular/material/stepper';
import { EditParameterizedComponent } from './Components/edit-parameterized/edit-parameterized.component';




@NgModule({
  declarations: [
    AppComponent,
    ProductsListComponent,
    EditproductComponent,
    CategoryComponent,
    ShowCategorizedComponent,
    ParameterizedComponent,
    EditParameterizedComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
