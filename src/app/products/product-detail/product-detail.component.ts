import {
  Component,
  Input,
  Output,
  EventEmitter,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  OnInit,
  OnDestroy,
  OnChanges,
  SimpleChanges
} from '@angular/core';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductDetailComponent implements OnInit, OnDestroy, OnChanges {

  @Input() name = '';

  @Output() bought = new EventEmitter<string>();

  constructor() {
    console.log(`Name is ${this.name} in the constructor`);
  }

  ngOnInit(): void {
    console.log(`Name is ${this.name} in the ngOnInit`);
  }

  ngOnDestroy(): void {
    console.log('The Component "ProductDetailComponent" is being destroyed');
  }

  ngOnChanges(changes: SimpleChanges): void {
    const product = changes['name'];
    if (!product.isFirstChange()) {
      const oldValue = product.previousValue;
      const newValue = product.currentValue;
      console.log(`Product changed from ${oldValue} to ${newValue}`);
    }
  }

  buy() {
    this.bought.emit(this.name);
  }

  get productName(): string {
    console.log(`Get ${this.name}`);
    return this.name;
  }

  print() {

  }

  private authorize() {

  }

}
