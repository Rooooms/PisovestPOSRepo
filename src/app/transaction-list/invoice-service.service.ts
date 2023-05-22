import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class InvoiceServiceService {

  constructor(private invoiceService: HttpClient) { }



  getInvoice(): Observable<any> {
      return this.invoiceService.get('https://localhost:7016/api/invoice')
  }

  getInvoicebyID(id: string): Observable<any>{
      return this.invoiceService.get(`https://localhost:7016/api/invoice/${id}`)
  }

  deleteInvoice(id: string): Observable<any>{
    return this.invoiceService.delete(`https://localhost:7016/api/invoice/${id}`);
  }





}
