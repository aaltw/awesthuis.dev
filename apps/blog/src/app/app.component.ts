import { Component, inject } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RouterOutlet } from '@angular/router';
import { ThemeService } from './shared/services/theme.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  template: ` <router-outlet></router-outlet> `,
})
export class AppComponent {
  private title = inject(Title);
  private themeService = inject(ThemeService); // Initialize theme service

  constructor() {
    this.title.setTitle('awesthuis.dev');
  }
}
