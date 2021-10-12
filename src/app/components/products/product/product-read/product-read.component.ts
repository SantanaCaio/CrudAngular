import { Component, OnInit } from '@angular/core';
import { ProductCreateService } from '../product-create.service';
import { Product } from '../product-create/product.models';

@Component({
  selector: 'app-product-read',
  templateUrl: './product-read.component.html',
  styleUrls: ['./product-read.component.css']
})
export class ProductReadComponent implements OnInit {

  constructor(private productService: ProductCreateService) { }
  products!: Product[]
  displayedColumns = ['id', 'name', 'price', 'action']

  ngOnInit(): void {
    this.productService.read().subscribe(products => {
      this.products = products
      return products
    })
  }

}
