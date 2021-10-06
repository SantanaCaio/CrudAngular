import { Injectable } from '@angular/core';
import '@angular/material/snack-bar';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class ProductCreateService {

  constructor(private snackbar: MatSnackBar) { }

  showMenssage(msg: string): void {
    this.snackbar.open(msg, '', {
      duration: 3000,
      horizontalPosition:"right",
      verticalPosition: "top"
    })
  }
}