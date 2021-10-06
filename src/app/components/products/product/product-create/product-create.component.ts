import { ProductCreateService } from './../product-create.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  constructor(private productService: ProductCreateService, private router: Router) { }

  ngOnInit(): void {
  }
    
  createProduct(): void {
    this.productService.showMenssage('Produto Criado!');
  }

  cancel(): void {
    this.router.navigate(['/products']);
  }


}
