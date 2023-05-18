import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {

  baseApiUrl : string = environment.baseApiUrl;
  baseAPIURL : string = environment.baseApiUrl;

  constructor(private http : HttpClient) { }

  getAllInvoice(): Observable <any>{

    return this.http.get(this.baseApiUrl + 'api/invoice');
  }
  addInvoice(data: any) : Observable<any>{  
    data.id = '00000000-0000-0000-0000-000000000000';
    return this.http.post <any> (this.baseApiUrl + 'api/invoice', data);
  }
  
  deleteInvoice(id: string): Observable<any>{
    return this.http.delete(`https://localhost:7016/api/invoice/${id}`); 
  }
}
