import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { Staff } from '../models/staff.model';

@Injectable({
  providedIn: 'root'
})
export class StaffServiceService {
  getStafflist() {
    throw new Error('Method not implemented.');
  }

  baseAPIURL : string = environment.baseAPIURL;

  constructor(private http : HttpClient) { }

  getAllStaff (): Observable <any>{
    return this.http.get(this.baseAPIURL + 'api/Employee');
  }
  addStaff(data: any) : Observable<any>{
    data.id = '00000000-0000-0000-0000-000000000000';
    return this.http.post <any> (this.baseAPIURL + 'api/Employee', data);
  }

}
