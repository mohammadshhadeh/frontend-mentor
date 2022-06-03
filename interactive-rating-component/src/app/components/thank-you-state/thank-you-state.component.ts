import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-thank-you-state',
  templateUrl: './thank-you-state.component.html',
  styleUrls: ['./thank-you-state.component.scss']
})
export class ThankYouStateComponent implements OnInit {
  @Input() value: string  = '';

  constructor() { }

  ngOnInit(): void {
    console.log('value: ', this.value);
  }

}
