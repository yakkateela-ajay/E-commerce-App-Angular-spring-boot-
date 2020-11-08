import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { LoginComponent } from './login/login.component';
import { ViewProductComponent } from './user-interface-view/view-product/view-product.component';
import { RegistrationComponent } from './registration/registration.component';
import { NarzoPhonesComponent } from './user-interface-view/narzo-phones/narzo-phones.component';
import { RealmePhonesComponent } from './user-interface-view/realme-phones/realme-phones.component';
import { UserinterafceComponent } from './userinterafce/userinterafce.component';
import {AuthGurdServiceService} from './login/auth-gurd-service.service'
import {AdminAuthService} from './adminlogin/admin-auth.service'
const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
  },
  {
    path: 'user-interface',
    component: UserinterafceComponent,canActivate:[AuthGurdServiceService],
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegistrationComponent,
  },
  {
    path: 'realme-phones',
    component: RealmePhonesComponent,canActivate:[AuthGurdServiceService],
  },
  {
    path: 'narzo-phones',
    component: NarzoPhonesComponent,canActivate:[AuthGurdServiceService],
  },
  { 
    path: 'view-product/:id',
     component: ViewProductComponent , canActivate:[AuthGurdServiceService],
  },
  {
    path: 'admin-login',
    component: AdminloginComponent, 
  },
  {
    path: 'products',
    loadChildren: () =>
      import('./products/products.module').then((m) => m.ProductsModule), canActivate:[AdminAuthService],
  },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
