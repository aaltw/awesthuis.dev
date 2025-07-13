import { isPlatformBrowser } from '@angular/common';
import { Injectable, inject, PLATFORM_ID, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private platformId = inject(PLATFORM_ID);
  isDark = signal(false);

  constructor() {
    this.initializeTheme();
  }

  private initializeTheme() {
    if (isPlatformBrowser(this.platformId)) {
      const savedTheme = localStorage.getItem('theme');
      const prefersDark = window.matchMedia(
        '(prefers-color-scheme: dark)'
      ).matches;

      this.isDark.set(savedTheme === 'dark' || (!savedTheme && prefersDark));
      this.updateTheme();
    }
  }

  toggleTheme() {
    this.isDark.update((current) => !current);
    this.updateTheme();
  }

  private updateTheme() {
    if (isPlatformBrowser(this.platformId)) {
      const theme = this.isDark() ? 'dark' : 'light';
      localStorage.setItem('theme', theme);

      if (this.isDark()) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    }
  }
}
