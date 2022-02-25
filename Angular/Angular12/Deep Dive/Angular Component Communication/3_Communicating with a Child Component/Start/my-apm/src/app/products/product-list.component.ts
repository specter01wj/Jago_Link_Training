import { AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';

import { ProductService } from '../service/product.service';

import { IProduct } from '../interface/product';
import { NgModel } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.less']
})
export class ProductListComponent implements OnInit, AfterViewInit {
	pageTitle: string = 'Product List';
  listFilter: string;
  showImage: boolean;

  imageWidth: number = 50;
  imageMargin: number = 2;
  errorMessage: string;

  @ViewChild('filterElement') filterElementRef: ElementRef;
  private _sub: Subscription;
  private _filterInput: NgModel;

  get filterInput(): NgModel {
      return this._filterInput;
  }

  @ViewChild(NgModel)
  set filterInput(value: NgModel) {
      this._filterInput = value;
      if(this.filterElementRef) {
        this.filterElementRef.nativeElement.focus();
      }
      if(this.filterInput && !this._sub) {
        this._sub = this.filterInput.valueChanges.subscribe(
          () => this.performFilter(this.listFilter)
        );
      }
  }

  filteredProducts: IProduct[];
  products: IProduct[];

  constructor(private productService: ProductService) { }

  ngAfterViewInit(): void {
    // this.filterElementRef.nativeElement.focus();
    // this.filterInput.valueChanges.subscribe(
    //   () => this.performFilter(this.listFilter)
    // );
  }

  ngOnInit(): void {
  	this.productService.getProducts().subscribe(
        (products: IProduct[]) => {
            this.products = products;
            this.performFilter(this.listFilter);
        },
        (error: any) => this.errorMessage = <any>error
    );
  }

  onFilterChange(filter: string): void {
    this.listFilter = filter;
    this.performFilter(this.listFilter);
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
