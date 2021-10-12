// ~product-create.component.ts
import { Product } from './product.models';
import { ProductCreateService } from './../product-create.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  product: Product = {
    name: '',
    price: null!
  }

  constructor(private productService: ProductCreateService, private router: Router) { }
  
  createProduct(): void {
    this.productService.creater(this.product).subscribe(() => {
      this.productService.showMenssage('Produto Criado!')
      this.router.navigate(['/products']);
    })
  }

  ngOnInit(): void {
  }
  
  cancel(): void {
    this.router.navigate(['/products']);
  }
}
