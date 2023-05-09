import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  baseApiUrl: string = environment.baseApiUrl;

  constructor(private http : HttpClient) { }
  
  addCategory(data :  any): Observable <any> {
    data.id = '00000000-0000-0000-0000-000000000000';
    return this.http.post <any> (this.baseApiUrl + 'api/Category', data )
  } 

  getCategoryList(): Observable <any> {
    return this.http.get(this.baseApiUrl + 'api/Category');
  }

  deleteCategory(id : string) : Observable<any>{
    return this.http.delete(`http://localhost:5125/api/Category/${id}`)
  }

  updateCategory(id:string, data:any): Observable <any> {
    return this.http.put (`http://localhost:5125/api/Category/${id}`, data)
  }

  getById(id:string): Observable<any> {
    return this.http.get(this.baseApiUrl + `api/Category/${id}`);
  }
}