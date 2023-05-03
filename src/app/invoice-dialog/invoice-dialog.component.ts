import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-invoice-dialog',
  templateUrl: './invoice-dialog.component.html',
  styleUrls: ['./invoice-dialog.component.css']
})
export class InvoiceDialogComponent implements OnInit{
  @ViewChild('content', { static: true }) content!: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  printInvoice() {
    window.print();
  }

  exportAsPDF() {
    const doc = new jsPDF();
    const content = this.content.nativeElement;
  
    html2canvas(content).then((canvas) => {
      const imgData = canvas.toDataURL('image/jpeg');
      const imgProps= doc.getImageProperties(imgData);
      const pdfWidth = doc.internal.pageSize.getWidth();
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
  
      doc.addImage(imgData, 'JPEG', 0, 0, pdfWidth, pdfHeight);
      doc.save('invoice.pdf');
    });

}
}
