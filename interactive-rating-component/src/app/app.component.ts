import { Component, OnInit } from '@angular/core';
import { UiService } from './services/ui.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'interactive-rating-component';
  showThankYouMessage: string = '';

  constructor(public uiService: UiService) {}

  ngOnInit(): void {
    this.uiService.subject.subscribe((item: string) => {
      this.showThankYouMessage = item;
    })
  }
}
