import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { Category } from '../app-models/category-model';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  constructor(private http: HttpClient) {}
  path = 'http://localhost:3000/categories';

  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(this.path).pipe(
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
