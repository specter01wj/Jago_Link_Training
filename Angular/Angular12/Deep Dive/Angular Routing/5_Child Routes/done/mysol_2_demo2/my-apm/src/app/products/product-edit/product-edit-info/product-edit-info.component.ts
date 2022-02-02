import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';

import { Product } from '../../../interface/product';

@Component({
  selector: 'app-product-edit-info',
  templateUrl: './product-edit-info.component.html',
  styleUrls: ['./product-edit-info.component.scss']
})
export class ProductEditInfoComponent implements OnInit {
  @ViewChild(NgForm, { static: false }) productForm: NgForm;

  errorMessage: string;
  product = { id: 1, productName: 'test', productCode: 'test' };

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    
  }

}
