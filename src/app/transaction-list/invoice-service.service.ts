import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class InvoiceServiceService {

  constructor(private invoiceService: HttpClient) { }



  getInvoice(): Observable<any> {
      return this.invoiceService.get(environment.baseApiUrl+"/api/invoice")
  }
}
