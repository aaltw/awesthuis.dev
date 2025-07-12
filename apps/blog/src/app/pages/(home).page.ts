import { Component } from '@angular/core';

import { AnalogWelcomeComponent } from './analog-welcome.component';

@Component({
  selector: 'blog-home',

  imports: [AnalogWelcomeComponent],
  template: ` <blog-analog-welcome /> `,
})
export default class HomeComponent {}
