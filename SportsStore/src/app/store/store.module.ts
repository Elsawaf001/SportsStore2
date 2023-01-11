import { NgModule } from '@angular/core';
import { ModelModule } from '../../../../SportsStore/src/app/model/model.module';
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { StoreComponent } from '../../../../SportsStore/src/app/store/store/store.component';
import { CounterDirective } from '../../../../SportsStore/src/app/store/counter.directive';
@NgModule({
  imports : [ModelModule , BrowserModule , FormsModule] ,
  declarations  : [StoreComponent,CounterDirective] ,
  exports  : [StoreComponent]
})
export class StoreModule{

}