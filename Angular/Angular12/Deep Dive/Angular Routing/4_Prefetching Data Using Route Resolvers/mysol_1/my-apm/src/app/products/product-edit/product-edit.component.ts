import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { MessageService } from '../../service/message.service';

import { Product, ProductResolved } from '../../interface/product';
import { ProductService } from '../../service/product.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent implements OnInit {
  pageTitle = 'Product Edit';
  errorMessage: string | undefined;
  product: Product | undefined;

  constructor(private productService: ProductService,
              private messageService: MessageService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.route.data.subscribe(data => {
      const resolvedData: ProductResolved = data['resolvedData'];
      this.errorMessage = resolvedData.error;

      this.onProductRetrieved(resolvedData.product);
    });
  }

  onProductRetrieved(product: Product): void {
    this.product = product;

    if (!this.product) {
      this.pageTitle = 'No product found';
    } else {
      if (this.product.id === 0) {
        this.pageTitle = 'Add Product';
      } else {
        this.pageTitle = `Edit Product: ${this.product.productName}`;
      }
    }
  }

  deleteProduct(): void {
    if (this.product!.id === 0) {
      // Don't delete, it was never saved.
      this.onSaveComplete(`${this.product!.productName} was deleted`);
    } else {
      if (confirm(`Really delete the product: ${this.product!.productName}?`)) {
        this.productService.deleteProduct(this.product!.id).subscribe({
          next: () => this.onSaveComplete(`${this.product?.productName} was deleted`),
          error: err => this.errorMessage = err
        });
      }
    }
  }

  saveProduct(): void {
    if (true === true) {
      if (this.product!.id === 0) {
        this.productService.createProduct(this.product!).subscribe({
          next: () => this.onSaveComplete(`The new ${this.product!.productName} was saved`),
          error: err => this.errorMessage = err
        });
      } else {
        this.productService.updateProduct(this.product!).subscribe({
          next: () => this.onSaveComplete(`The updated ${this.product!.productName} was saved`),
          error: err => this.errorMessage = err
        });
      }
    } else {
      this.errorMessage = 'Please correct the validation errors.';
    }
  }

  onSaveComplete(message?: string): void {
    if (message) {
      this.messageService.addMessage(message);
    }

    // Navigate back to the product list
    this.router.navigate(['/products']);
  }

}
