// ~product-create.service.ts
import { Product } from './product-create/product.models';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import '@angular/material/snack-bar';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root'})
export class ProductCreateService {

  baseUrl = "http://localhost:3001/products"

  constructor(private snackbar: MatSnackBar, private http: HttpClient) { }

  showMenssage(msg: string): void {
    this.snackbar.open(msg, '😃', {
      duration: 3000,
      horizontalPosition:"right",
      verticalPosition: "top"
    })
  }

  creater(product: Product): Observable<Product>{
    return this.http.post<Product>(this.baseUrl, product)
  }

  read(): Observable<Product[]>{
    return this.http.get<Product[]>(this.baseUrl)
  }      
}