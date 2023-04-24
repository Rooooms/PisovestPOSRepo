import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class SampleService {
  baseApiUrl: string = environment.baseApiUrl;

  constructor(private http : HttpClient) { }
  addProduct(data :  any): Observable <any> {
    data.id = '00000000-0000-0000-0000-000000000000';
    return this.http.post <any> (this.baseApiUrl + 'api/Product', data )
  } 

  getProductList(): Observable <any> {
    return this.http.get(this.baseApiUrl + 'api/Product');
  }

  deleteProduct(id : string) : Observable<any>{
    return this.http.delete(`https://localhost:5125/api/Product/${id}`)
  }

  updateProduct(data :  any , id:string): Observable <any> {
    data.id = '00000000-0000-0000-0000-000000000000';
    return this.http.put (`https://localhost:5125/api/Product/${id}`, data)
  }
}