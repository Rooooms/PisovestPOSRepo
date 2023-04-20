import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { Salary } from '../models/salary.model';

@Injectable({
  providedIn: 'root'
})
export class SalaryService {

  baseAPIURL : string = environment.baseAPIURL;
  constructor(private http : HttpClient) { }

  getAllSalary (): Observable <Salary[]>{
    return this.http.get<Salary[]>(this.baseAPIURL + 'api/Salary');
  }
  addSalary(addSalaryRequest: Salary): Observable<Salary>{
    addSalaryRequest.id = '00000000-0000-0000-0000-000000000000';
    return this.http.post <Salary> (this.baseAPIURL + 'api/Salary', addSalaryRequest);
  }

}
