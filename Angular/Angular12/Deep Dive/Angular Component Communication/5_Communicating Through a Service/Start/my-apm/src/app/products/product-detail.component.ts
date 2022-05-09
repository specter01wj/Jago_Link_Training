import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { ProductService } from '../service/product.service';

import { IProduct } from '../interface/product';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.less']
})
export class ProductDetailComponent implements OnInit {
	pageTitle: string = 'Product Detail';
  product: IProduct;
  errorMessage: string;

  constructor(private productService: ProductService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
  	const param = this.route.snapshot.paramMap.get('id');
    if (param) {
        const id = +param;
        this.getProduct(id);
    }
  }

  getProduct(id: number) {
      this.productService.getProduct(id).subscribe(
        product => this.product = product,
        error => this.errorMessage = <any>error
      );
  }

  onBack(): void {
      this.router.navigate(['/products']);
  }

}
