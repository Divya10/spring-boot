import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core/src/metadata/ng_module";
import {Routes, RouterModule} from "@angular/router";
import {SharedModule} from "../../shared";
import {ProductNewComponent} from "./product-new.component";
import {ReactiveFormsModule, FormsModule} from "@angular/forms";

const routes: Routes = [
  {path: 'add', component: ProductNewComponent},
];

@NgModule({

  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [
    ProductNewComponent,
  ],
  exports: [
    ProductNewComponent,
  ]
})
export class ProductNewModule {
}
