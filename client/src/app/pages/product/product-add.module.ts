import {CommonModule} from "@angular/common";
import {ReactiveFormsModule, FormsModule} from "@angular/forms";
import {NgModule} from "@angular/core/src/metadata/ng_module";
import {Routes, RouterModule} from "@angular/router";
import {ProductAddComponent} from "./product-add.component";
import {ProductListComponent} from "../../components/product-list/product-list.component";
import {SharedModule} from "../../shared/shared.module";

const routes: Routes = [
  {path: 'add', component: ProductAddComponent},
  {path: 'list', component: ProductListComponent},
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
  ],
  declarations: [
    ProductAddComponent,
    ProductListComponent,
  ],
  exports: [
    ProductAddComponent,
    ProductListComponent,
  ]
})
export class ProductAddModule {
}
