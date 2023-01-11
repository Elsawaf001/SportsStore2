import { ProductRepository } from '../../../../SportsStore/src/app/model/product.repository';
import { StaticDataSource } from '../../../../SportsStore/src/app/model/static.datasource';
import { NgModule } from '@angular/core';
@NgModule({ providers: [ProductRepository, StaticDataSource] })
export class ModelModule {}
