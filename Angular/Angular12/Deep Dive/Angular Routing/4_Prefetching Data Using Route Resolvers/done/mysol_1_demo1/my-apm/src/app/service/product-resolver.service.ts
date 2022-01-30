import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { Product } from '../interface/product';
import { ProductService } from './product.service';

@Injectable({
  providedIn: 'root'
})
export class ProductResolver implements Resolve<Product> {

  constructor(private productService: ProductService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Product> {
    const id = +route.paramMap.get('id');

    return this.productService.getProduct(id);
  }

}
