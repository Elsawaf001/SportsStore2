import { Injectable } from '@angular/core';
import { Product } from '../../../../SportsStore/src/app/model/product.model';
import { StaticDataSource } from '../../../../SportsStore/src/app/model/static.datasource';

@Injectable()
export class ProductRepository {
  private products: Product[] = [];
  private categories: string[] = [];

  constructor(private dataSource: StaticDataSource) {
    dataSource.getProducts().subscribe((data) => {
      this.products = data;
      this.categories = data
        .map((p) => p.category ?? '(None)')
        .filter((c, index, array) => array.indexOf(c) == index)
        .sort();
    });
  }
  public getProducts(category?: string): Product[] {
    return this.products.filter(
      (p) => category == undefined || category == p.category
    );
  }

  public getProduct(id: number): Product | undefined {
    return this.products.find((p) => p.id == id);
  }

  public getCategories(): string[] {
    return this.categories;
  }
}
