import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { category } from 'src/app/Models/category.model';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  baseAPIURL: string = environment.baseAPIURL;

  constructor(private http: HttpClient) { }

  getAllCategory(): Observable<category[]>{
    return this.http.get<category[]>(this.baseAPIURL + 'api/Category');
  }
  addCategory(addCategoryRequest: category): Observable<category>{
    addCategoryRequest.id = '00000000-0000-0000-0000-000000000000';
    return this.http.post <category> (this.baseAPIURL + 'api/Category', addCategoryRequest ) 
  }
  getCategory(id : string): Observable<category> {
    return this.http.get<category>(this.baseAPIURL + 'api/Category/' + id)
  }

  updateCategory(id:string, updateCategoryRequest: category): Observable<category> {
    
    return this.http.put<category>(this.baseAPIURL + 'api/Category/' + id, updateCategoryRequest)
  }
}
