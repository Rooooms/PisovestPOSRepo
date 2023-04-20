import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { product } from 'src/app/Models/product.model';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseAPIURL: string = environment.baseAPIURL;

  constructor(private http: HttpClient) { }

  getAllProduct(): Observable<product[]>{
    return this.http.get<product[]>(this.baseAPIURL + 'api/Product');
  }
}
