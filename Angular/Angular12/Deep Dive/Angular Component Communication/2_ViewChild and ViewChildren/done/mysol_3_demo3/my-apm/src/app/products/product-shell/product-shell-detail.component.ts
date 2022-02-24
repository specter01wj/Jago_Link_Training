import { Component, OnInit } from '@angular/core';

import { ProductService } from '../../service/product.service';
import { IProduct } from '../../interface/product';

@Component({
  selector: 'app-product-shell-detail',
  templateUrl: './product-shell-detail.component.html',
  styleUrls: ['./product-shell-detail.component.less']
})
export class ProductShellDetailComponent implements OnInit {
	pageTitle: string = 'Product Detail';
	
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
  }

}
