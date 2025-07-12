import { Component, signal, OnInit } from '@angular/core';

@Component({
  selector: 'blog-home',
  template: `
    <div class="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800 transition-colors duration-300">
      <!-- Theme Toggle -->
      <button 
        (click)="toggleTheme()"
        class="fixed top-6 right-6 p-3 rounded-full bg-white/10 dark:bg-black/20 backdrop-blur-sm border border-white/20 dark:border-white/10 hover:bg-white/20 dark:hover:bg-black/30 transition-all duration-200"
        [attr.aria-label]="isDark() ? 'Switch to light mode' : 'Switch to dark mode'"
      >
        <svg *ngIf="!isDark()" class="w-5 h-5 text-slate-700" fill="currentColor" viewBox="0 0 20 20">
          <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
        </svg>
        <svg *ngIf="isDark()" class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
          <path fill-rule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clip-rule="evenodd"></path>
        </svg>
      </button>

      <!-- Main Content -->
      <div class="flex items-center justify-center min-h-screen px-6">
        <div class="text-center">
          <h1 class="text-6xl md:text-8xl font-bold bg-gradient-to-r from-slate-900 to-slate-600 dark:from-white dark:to-slate-300 bg-clip-text text-transparent mb-6">
            awesthuis.dev
          </h1>
          <p class="text-xl md:text-2xl text-slate-600 dark:text-slate-300 font-light">
            Personal blog & portfolio
          </p>
        </div>
      </div>
    </div>
  `,
})
export default class HomeComponent implements OnInit {
  isDark = signal(false);

  ngOnInit() {
    // Check for saved theme preference or default to light mode
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    this.isDark.set(savedTheme === 'dark' || (!savedTheme && prefersDark));
    this.updateTheme();
  }

  toggleTheme() {
    this.isDark.update(current => !current);
    this.updateTheme();
  }

  private updateTheme() {
    const theme = this.isDark() ? 'dark' : 'light';
    localStorage.setItem('theme', theme);
    
    if (this.isDark()) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }
}
