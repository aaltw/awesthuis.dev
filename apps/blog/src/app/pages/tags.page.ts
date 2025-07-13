import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FooterComponent } from '../shared/components/footer.component';
import { HeaderComponent } from '../shared/components/header.component';

@Component({
  selector: 'blog-tags',
  standalone: true,
  imports: [RouterLink, HeaderComponent, FooterComponent],
  template: `
    <div class="min-h-screen bg-white dark:bg-gray-900">
      <blog-header />
      
      <main class="flex-1">
        <!-- Hero Section -->
        <div class="bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-gray-900 dark:via-gray-900 dark:to-blue-900 py-16">
          <div class="container mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center">
              <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4">
                Tags
              </h1>
              <p class="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Coming soon...
              </p>
            </div>
          </div>
        </div>

      </main>
      
      <blog-footer />
    </div>
  `,
})
export default class TagsComponent {}
