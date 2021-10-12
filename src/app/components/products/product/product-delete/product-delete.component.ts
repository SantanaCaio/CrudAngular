import { Observable } from 'rxjs';
import { Product } from './../product-create/product.models';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductCreateService } from './../product-create.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css'],
})
export class ProductDeleteComponent implements OnInit {
  constructor(
    private productService: ProductCreateService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  product!: Product;

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')!;
    this.productService.readById(id).subscribe((product) => {
      this.product = product;
    });
  }

  deleteProduct(): void {
    this.productService.delete(this.product).subscribe((Product) => {
      this.productService.showMenssage('Produto Deletado Com Sucesso!!'),
        this.router.navigate(['/products']);
    });
  }
}
