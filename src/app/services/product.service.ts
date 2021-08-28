import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { Product } from '../app-models/product-model';
import { tap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}
  prodPath = 'http://localhost:3000/products';

  getProductsbyCategoryId(categoryId): Observable<Product[]> {
    return this.http.get<Product[]>(this.prodPath+"?categoryId="+categoryId).pipe(
      tap((a) => console.log(a)),
      catchError(this.handleError)
    );
  }

  getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.prodPath).pipe(
      tap((a) => console.log(a)),
      catchError(this.handleError)
    );
  }

  private handleError(err: HttpErrorResponse) {
    let errMessage = '';
    if (err.error instanceof ErrorEvent) {
      errMessage = 'Hata oluşt' + err.error.message;
    } else {
      errMessage = 'Sunucudan yanıt alınamadı';
    }
    return throwError(errMessage);
  }
}
