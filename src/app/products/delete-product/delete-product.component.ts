import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrls: ['./delete-product.component.css']
})
export class DeleteProductComponent implements OnInit {
  productId:number=0;

  constructor(private activatedRoute: ActivatedRoute,private productService: ProductsService,private route: Router) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(() =>{
      const theProductId: number = +this.activatedRoute.snapshot.paramMap.get('id');

      this.productId=theProductId;
    });
    this.productService.deleteProduct(this.productId).subscribe(deleteproductData =>{
      alert("product is deleted");

    });
  }
  goback(){
      this.route.navigate(['products/view-all-products']);
  }
}
