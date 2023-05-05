import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class BillService {

  baseApiUrl: string = environment.baseApiUrl;

  constructor(private http : HttpClient) { }

  generateReport(data:any){
    return this.http.post(this.baseApiUrl+"/bill/generateReport/",data,{
      headers:new HttpHeaders().set('Content-Type',"application/json")
    })
  }

  getPDF(data:any):Observable<Blob>{
    return this.http.post(this.baseApiUrl + "/bill/getPdf",data,{responseType:'blob'});
  }
  


}
