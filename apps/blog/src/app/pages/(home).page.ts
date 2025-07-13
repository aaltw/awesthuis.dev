import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FooterComponent } from '../shared/components/footer.component';
import { HeaderComponent } from '../shared/components/header.component';
import { ThemeService } from '../shared/services/theme.service';

@Component({
  selector: 'blog-home',
  standalone: true,
  imports: [RouterLink, HeaderComponent, FooterComponent],
  template: `
    <div class="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <blog-header />
      
      <!-- Hero Section -->
      <main class="flex-1">
        <div class="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-gray-900 dark:via-gray-900 dark:to-blue-900">
          <div class="container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
            <div class="text-center">
              <h1 class="text-5xl md:text-7xl lg:text-8xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 dark:from-blue-400 dark:via-purple-400 dark:to-blue-300 bg-clip-text text-transparent mb-8">
                awesthuis.dev
              </h1>
              <p class="text-xl md:text-2xl text-gray-600 dark:text-gray-300 font-light mb-12 max-w-3xl mx-auto">
                Personal blog and portfolio
              </p>
              
              <div class="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  routerLink="/blog"
                  class="inline-flex items-center px-8 py-4 text-lg font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
                >
                  Read the Blog
                  <svg class="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
                  </svg>
                </a>
                
                <a 
                  routerLink="/about"
                  class="inline-flex items-center px-8 py-4 text-lg font-medium text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg transition-colors duration-200"
                >
                  About Me
                </a>
              </div>
            </div>
          </div>
        </div>

      </main>
      
      <blog-footer />
    </div>
  `,
})
export default class HomeComponent {
  private themeService = inject(ThemeService);
}
