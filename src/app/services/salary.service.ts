import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';


@Injectable({
  providedIn: 'root'
})
export class SalaryService {

  baseAPIURL : string = environment.baseAPIURL;
  constructor(private http : HttpClient) { }

  getAllSalary (): Observable <any>{
    return this.http.get(this.baseAPIURL + 'api/Salary');
  }
  addSalary(data: any): Observable<any>{
    data.id = '00000000-0000-0000-0000-000000000000';
    return this.http.post <any> (this.baseAPIURL + 'api/Salary', data);
  }
  updateSalary(id: string, data: any): Observable<any>{
    return this.http.put(`http://localhost:5125/api/Salary/${id}`, data);
  }
  deleteSalary(id: string): Observable<any>{
    return this.http.delete(`http://localhost:5125/api/Salary/${id}`); 
  }
}
