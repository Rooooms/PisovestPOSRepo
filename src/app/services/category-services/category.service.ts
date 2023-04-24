import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { category } from 'src/app/Models/category.model';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  baseApiUrl: string = environment.baseApiUrl;

  constructor(private http : HttpClient) { }
  addEmployee(data :  any): Observable <any> {
    data.id = '00000000-0000-0000-0000-000000000000';
    return this.http.post (this.baseApiUrl + 'api/Employees', data )
  }

  getEmployeeList(): Observable <any> {
    return this.http.get(this.baseApiUrl + 'api/Employees');
  }

  deleteEmployee(id : string) : Observable<any>{
    return this.http.delete(`https://localhost:5125/api/Employees/${id}`)
  }

  updateEmployee(data :  any , id:string): Observable <any> {
    data.id = '00000000-0000-0000-0000-000000000000';
    return this.http.put (`https://localhost:5125/api/Employees/${id}`, data)
  }
}
