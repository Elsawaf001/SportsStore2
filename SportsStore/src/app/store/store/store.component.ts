import { Component } from '@angular/core';
import { Product } from '../../../../../SportsStore/src/app/model/product.model';
import { ProductRepository } from '../../../../../SportsStore/src/app/model/product.repository';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent {

  constructor(private repository: ProductRepository){

  }

  get products():Product[]{
    return this.repository.getProducts();
  }

  get categories(): string[]{
    return this.repository.getCategories();
  }
}
