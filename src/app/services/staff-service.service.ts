import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';


@Injectable({
  providedIn: 'root'
})
export class StaffServiceService {
 

  baseApiUrl : string = environment.baseApiUrl;

  constructor(private http : HttpClient) { }

  getAllStaff (): Observable <any>{

    return this.http.get(this.baseApiUrl + 'api/Employee');
  }
  addStaff(data: any) : Observable<any>{  
    data.id = '00000000-0000-0000-0000-000000000000';
    return this.http.post <any> (this.baseApiUrl + 'api/Employee', data);
  }
  updateStaff(id: string, data: any): Observable<any>{
    return this.http.put(`https://localhost:7016/api/Employee/${id}`, data);
  }
  deleteStaff(id: string): Observable<any>{
    return this.http.delete(`https://localhost:7016/api/Employee/${id}`); 
  }
}
