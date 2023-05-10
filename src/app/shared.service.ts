import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  private _pageName = new BehaviorSubject<string>('Home');
  public pageName$ = this._pageName.asObservable();

  set pageName(value: string) {
    this._pageName.next(value);
  }

  get pageName(): string {
    return this._pageName.getValue();
  }
}
