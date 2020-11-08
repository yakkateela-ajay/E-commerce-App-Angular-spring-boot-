import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { AddProductsComponent } from './add-products/add-products.component';
import { ViewProductComponent } from './view-product/view-product.component';
import { ViewAllProductComponent } from './view-all-product/view-all-product.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { DeleteProductComponent } from './delete-product/delete-product.component';
import { ViewProductByPriceComponent } from './view-product-by-price/view-product-by-price.component';
import { ViewAllProductByCategoryComponent } from './view-all-product-by-category/view-all-product-by-category.component';
import { SortproductsPipe } from './sortproducts.pipe';
import { FilterproductsPipe } from './filterproducts.pipe';
import { AdminNavbarComponent } from './admin-navbar/admin-navbar.component';

@NgModule({
  declarations: [
    ProductsComponent,
    AddProductsComponent,
    ViewProductComponent,
    ViewAllProductComponent,
    UpdateProductComponent,
    DeleteProductComponent,
    ViewProductByPriceComponent,
    ViewAllProductByCategoryComponent,
    SortproductsPipe,
    FilterproductsPipe,
    
    AdminNavbarComponent
  ],
  imports: [CommonModule, FormsModule, ProductsRoutingModule],
})
export class ProductsModule {}
