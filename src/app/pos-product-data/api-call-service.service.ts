import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiCallServiceService {

  constructor(private _productservice: HttpClient) { }

  getProduct(): Observable<any> {
    return this._productservice.get('http://localhost:5125/api/Product')
  }


}
