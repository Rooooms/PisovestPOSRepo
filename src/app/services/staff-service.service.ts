import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { Staff } from '../models/staff.model';

@Injectable({
  providedIn: 'root'
})
export class StaffServiceService {

  baseAPIURL : string = environment.baseAPIURL;

  constructor(private http : HttpClient) { }

  getAllStaff (): Observable <Staff[]>{
    return this.http.get<Staff[]>(this.baseAPIURL + 'api/Employee');
  }
  addStaff(addStaffRequest : Staff) : Observable<Staff>{
    addStaffRequest.id = '00000000-0000-0000-0000-000000000000';
    return this.http.post <Staff> (this.baseAPIURL + 'api/Employee', addStaffRequest);
  }

}
