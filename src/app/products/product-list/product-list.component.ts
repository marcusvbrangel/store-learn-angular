import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {

  selectedProduct = '';

  title = 'Bem vindo ao Store!!!'

  onClick() {
    this.title = 'teste de funcionamento click...';
  }

}
