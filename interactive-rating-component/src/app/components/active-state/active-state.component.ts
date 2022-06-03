import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-active-state',
  templateUrl: './active-state.component.html',
  styleUrls: ['./active-state.component.scss'],
})
export class ActiveStateComponent implements OnInit {
  @ViewChild('form') ratingForm: NgForm;

  constructor(public uiService: UiService) {}

  ngOnInit(): void {}

  onSubmit() {
    if (this.ratingForm.value) {
      this.uiService.showThankYouMessage(this.ratingForm.value.rating);
    }
  }
}
