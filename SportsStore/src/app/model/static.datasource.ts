import { Injectable } from '@angular/core';
import { Product } from '../../../../SportsStore/src/app/model/product.model';
import { Observable, from } from 'rxjs';
@Injectable()
export class StaticDataSource {
  private products: Product[] = [
    new Product(1, 'Product 1', 'Categoey 1', 'Descreption 1', 300),
    new Product(1, 'Product 2', 'Categoey 2', 'Descreption 2', 400),
    new Product(1, 'Product 3', 'Categoey 3', 'Descreption 3', 100),
    new Product(1, 'Product 4', 'Categoey 4', 'Descreption 4', 2500),
    new Product(1, 'Product 5', 'Categoey 5', 'Descreption 5', 500),
    new Product(1, 'Product 6', 'Categoey 6', 'Descreption 6', 800),
    new Product(1, 'Product 7', 'Categoey 7', 'Descreption 7', 100),
    new Product(1, 'Product 8', 'Categoey 8', 'Descreption 8', 30),
    new Product(1, 'Product 9', 'Categoey 9', 'Descreption 9', 3000),
    new Product(1, 'Product 10', 'Categoey 10', 'Descreption 10', 900),
  ];

  public getProducts(): Observable<Product[]> {
    return from([this.products]);
  }
}
