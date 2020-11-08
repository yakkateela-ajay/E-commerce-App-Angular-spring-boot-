import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/products/product';
import { ProductsService } from 'src/app/products/products.service';

@Component({
  selector: 'app-realme-phones',
  templateUrl: './realme-phones.component.html',
  styleUrls: ['./realme-phones.component.css']
})
export class RealmePhonesComponent implements OnInit {

  productList: Product;
  productName = "";
  searchproduct = "";
  sortdirection = 'asc';
  constructor(private productService: ProductsService, private route: Router) {}

  ngOnInit(): void {
    this.productService.viewAllProducts().subscribe((data) => {
      this.productList = data;
    });
  }
 
  gotoViewProduct(id:number){
    this.route.navigate(['/view-product', id]);
  }
  onfilter(){
    this.searchproduct=this.productName;
  }
  onclearfilter(){
    this.productName = "";
    this.searchproduct = "";
  }
  onsortdirection(){
    if(this.sortdirection === 'desc'){
      this.sortdirection='asc';
    }else{
      this.sortdirection='desc';

    }
  }

}
