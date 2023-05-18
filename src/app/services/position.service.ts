import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';


@Injectable({
  providedIn: 'root'
})
export class PositionService {
  getAllStaff() {
    throw new Error('Method not implemented.');
  }

  baseApiUrl : string = environment.baseApiUrl;
  baseAPIURL : string = environment.baseApiUrl;

  constructor(private http : HttpClient) { }

  getAllPosition(): Observable <any>{

    return this.http.get(this.baseApiUrl + 'api/Position');
  }
  addPosition(data: any) : Observable<any>{  
    data.id = '00000000-0000-0000-0000-000000000000';
    return this.http.post <any> (this.baseApiUrl + 'api/Position', data);
  }
  
  updatePosition(id: string, data: any): Observable<any>{
    return this.http.put(`https://localhost:7016/api/Position/${id}`, data);
  }
  deletePosition(id: string): Observable<any>{
    return this.http.delete(`https://localhost:7016/api/Position/${id}`); 
  }
}

