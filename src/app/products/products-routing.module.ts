import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddProductsComponent } from './add-products/add-products.component';
import { AdminNavbarComponent } from './admin-navbar/admin-navbar.component';
import { DeleteProductComponent } from './delete-product/delete-product.component';

import { ProductsComponent } from './products.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { ViewAllProductByCategoryComponent } from './view-all-product-by-category/view-all-product-by-category.component';
import { ViewAllProductComponent } from './view-all-product/view-all-product.component';
import { ViewProductComponent } from './view-product/view-product.component';

const routes: Routes = [
  { path: '', component: AddProductsComponent },
  { path: 'add-product', component: AddProductsComponent },
  { path: 'update-product/:id', component: UpdateProductComponent },
  { path: 'delete-product/:id', component: DeleteProductComponent },
  { path: 'view-all-products', component: ViewAllProductComponent },
  { path: 'view-product/:id', component: ViewProductComponent },
  { path: 'admin-navbar', component: AdminNavbarComponent},
  {
    path: 'view-product-by-category',
    component: ViewAllProductByCategoryComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductsRoutingModule {}
