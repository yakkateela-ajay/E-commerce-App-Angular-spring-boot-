import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../product';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {
  productId:number=0;
  
  product: Product = new Product();
  constructor(private productService: ProductsService, private activatedRoute: ActivatedRoute ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(() =>{
      const theProductId: number = +this.activatedRoute.snapshot.paramMap.get('id');

      this.productId=theProductId;
    });
    this.productService.viewProduct(this.productId).subscribe(productData =>{
      this.product = productData;
    });
  }
  updateProduct(form){
    let updateProduct={
      productId:this.productId ,
      productName: form.value.productName,
      productCategory: form.value.productCategory,
      productDescription: form.value.productDescription,
       productPrice: form.value.productPrice,
      productUrl: form.value.productUrl,
      productQuantity: form.value.productQuantity
    }
    this.productService.updateProduct(this.productId, updateProduct ).subscribe(data =>{
      console.log(data);
      alert("updates succesfuly")
    })
  }

}
