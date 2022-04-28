import { Component, OnInit } from '@angular/core';

import { IProduct } from '../../interface/product';
import { ProductService } from '../../service/product.service';

@Component({
  selector: 'app-product-shell-list',
  templateUrl: './product-shell-list.component.html',
  styleUrls: ['./product-shell-list.component.less']
})
export class ProductShellListComponent implements OnInit {
	pageTitle: string = 'Products';
  errorMessage: string;
  products: IProduct[];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
  	this.productService.getProducts().subscribe(
      (products: IProduct[]) => {
        this.products = products;
      },
      (error: any) => this.errorMessage = <any>error
    );
  }

}
