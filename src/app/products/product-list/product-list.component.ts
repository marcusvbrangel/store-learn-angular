import { ProductDetailComponent } from '../product-detail/product-detail.component';
import { Component, AfterViewInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements AfterViewInit {

  selectedProduct = '';

  title = 'Bem vindo ao Store!!!'

  @ViewChild(ProductDetailComponent)
  productDetail: ProductDetailComponent | undefined;

  ngAfterViewInit(): void {
    if (this.productDetail) {
      console.log(`ngAfterViewInit: ${this.productDetail.name}`);
    }
  }

  onClick() {
    this.title = 'teste de funcionamento click...';
  }

  onBuy(name: string) {
    // window.alert(`You just bought ${this.selectedProduct}!`);
    window.alert(`You just bought ${name}!`);
  }

}
