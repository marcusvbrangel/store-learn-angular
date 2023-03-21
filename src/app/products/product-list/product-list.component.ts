import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {

  selectedProduct = 'Microphone';

  title = 'Bem vindo ao Store!!!'

  onClick() {
    this.title = 'teste de funcionamento click...';
  }

  onBuy(name: string) {
    // window.alert(`You just bought ${this.selectedProduct}!`);
    window.alert(`You just bought ${name}!`);
  }

}
