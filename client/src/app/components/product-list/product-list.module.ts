import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core/src/metadata/ng_module";
import {SharedModule} from "../../shared";
import {ProductListComponent} from "./product-list.component";
import {ProductListService} from "./product-list.service";

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
  ],
  declarations: [
    ProductListComponent,
  ],
  providers: [
    ProductListService,
  ],
  exports: [
    ProductListComponent,
  ]
})
export class ProductListModule {
}
