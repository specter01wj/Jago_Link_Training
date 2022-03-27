import { Component, OnInit } from '@angular/core';

import { ProductService } from '../service/product.service';

import { IProduct } from '../interface/product';
import { NgModel } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.less']
})
export class ProductListComponent implements OnInit {
	pageTitle: string = 'Product List';
  showImage: boolean;

  imageWidth: number = 50;
  imageMargin: number = 2;
  errorMessage: string;

  filteredProducts: IProduct[];
  products: IProduct[];

  constructor(private productService: ProductService) { }


  ngOnInit(): void {
  	this.productService.getProducts().subscribe(
        (products: IProduct[]) => {
            this.products = products;
            this.performFilter();
        },
        (error: any) => this.errorMessage = <any>error
    );
  }

  toggleImage(): void {
      this.showImage = !this.showImage;
  }

  performFilter(filterBy?: string): void {
      if (filterBy) {
          this.filteredProducts = this.products.filter((product: IProduct) =>
              product.productName.toLocaleLowerCase().indexOf(filterBy.toLocaleLowerCase()) !== -1);
      } else {
          this.filteredProducts = this.products;
      }
  }

}
