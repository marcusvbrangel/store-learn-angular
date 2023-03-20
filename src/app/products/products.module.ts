import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ProductListComponent } from './product-list/product-list.component';
import { ProductComponent } from './product/product.component';

@NgModule({
  declarations: [
    ProductListComponent
  ],
  imports: [
    CommonModule,
    ProductComponent
  ],
  exports: [
    ProductListComponent
  ]
})
export class ProductsModule { }
