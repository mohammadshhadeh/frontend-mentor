import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiService {
  private ratingValue: string = '0';
  subject = new Subject<string>();

  constructor() { }

  showThankYouMessage(value: string): void {
    this.ratingValue = value;
    this.subject.next(this.ratingValue);
  }
}
