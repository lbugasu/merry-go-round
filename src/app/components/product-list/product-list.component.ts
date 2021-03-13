import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product/product.service';
import { Product } from './../../services/types';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  products!: Product[];
  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getProducts().valueChanges.subscribe((data: any) => {
      this.products = data.data.getProducts;
      console.log(this.products);
    });
  }
}
