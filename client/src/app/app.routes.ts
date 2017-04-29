import {Routes} from "@angular/router";
import {HomeComponent} from "./pages/home/home.component";
import {AuthComponent} from "./pages/auth/auth.component";
import {PrivatePageGuard} from "./core/services/private-page.guard";
import {PublicPageGuard} from "./core/services/public-page.guard";

/* tslint:disable:max-line-length */
export const ROUTES: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [PrivatePageGuard]
  },


  {
    path: 'product',
    loadChildren: './pages/product/product-add.module#ProductAddModule',
    canActivate: [],
  },



  {path: 'login', component: AuthComponent, canActivate: [PublicPageGuard]},

  {
    path: 'signup',
    loadChildren: './pages/+signup/signup.module#SignupModule',
    canActivate: [PublicPageGuard],
  },


];
/* tslint:enable:max-line-length */
