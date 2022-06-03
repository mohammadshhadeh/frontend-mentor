import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ActiveStateComponent } from './components/active-state/active-state.component';
import { ThankYouStateComponent } from './components/thank-you-state/thank-you-state.component';

@NgModule({
  declarations: [
    AppComponent,
    ActiveStateComponent,
    ThankYouStateComponent,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
