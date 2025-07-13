import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ThemeService } from '../services/theme.service';

@Component({
  selector: 'blog-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  template: `
    <header class="sticky top-0 z-50 w-full border-b border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex h-16 items-center justify-between">
          <!-- Logo -->
          <div class="flex items-center">
            <a routerLink="/" class="text-xl font-bold text-gray-900 dark:text-white">
              awesthuis.dev
            </a>
          </div>

          <!-- Navigation -->
          <nav class="hidden md:flex items-center space-x-8">
            <a 
              routerLink="/blog" 
              routerLinkActive="text-blue-600 dark:text-blue-400"
              class="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              Blog
            </a>
            <a 
              routerLink="/tags" 
              routerLinkActive="text-blue-600 dark:text-blue-400"
              class="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              Tags
            </a>
            <a 
              routerLink="/about" 
              routerLinkActive="text-blue-600 dark:text-blue-400"
              class="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              About
            </a>
          </nav>

          <!-- Theme Toggle -->
          <button 
            (click)="themeService.toggleTheme()"
            class="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            [attr.aria-label]="themeService.isDark() ? 'Switch to light mode' : 'Switch to dark mode'"
          >
            @if (!themeService.isDark()) {
              <svg class="w-5 h-5 text-gray-600 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
              </svg>
            } @else {
              <svg class="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clip-rule="evenodd"></path>
              </svg>
            }
          </button>
        </div>
      </div>
    </header>
  `,
})
export class HeaderComponent {
  themeService = inject(ThemeService);
}
