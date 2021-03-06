import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core/src/metadata/ng_module";
import {HomeComponent} from "./home.component";
import {RouterModule} from "@angular/router";
import {SharedModule} from "../../shared";

@NgModule({

  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
  ],
  declarations: [
    HomeComponent,
  ],
  exports: [
    HomeComponent,
  ]
})
export class HomeModule {
}
