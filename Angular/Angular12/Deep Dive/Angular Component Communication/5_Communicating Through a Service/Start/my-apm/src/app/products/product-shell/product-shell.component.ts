import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-shell',
  templateUrl: './product-shell.component.html',
  styleUrls: ['./product-shell.component.less']
})
export class ProductShellComponent implements OnInit {
	pageTitle: string = 'Products';
  monthCount: number;
  
  constructor() { }

  ngOnInit(): void {
  }

}
