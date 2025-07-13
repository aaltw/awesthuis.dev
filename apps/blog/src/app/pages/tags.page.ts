import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FooterComponent } from '../shared/components/footer.component';
import { HeaderComponent } from '../shared/components/header.component';

@Component({
  selector: 'blog-tags',
  standalone: true,
  imports: [RouterLink, HeaderComponent, FooterComponent],
  template: `
    <div class="min-h-screen bg-white dark:bg-gray-900 flex flex-col">
      <blog-header />
      
      <main class="flex-1">
        <div class="max-w-3xl px-4 mx-auto sm:px-6 xl:max-w-5xl xl:px-0">
          <div class="divide-y divide-gray-200 dark:divide-gray-700">
            <div class="space-y-2 pb-8 pt-6 md:space-y-5">
              <h1 class="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
                Tags
              </h1>
              <p class="text-lg leading-7 text-gray-500 dark:text-gray-400">
                Things I blog about
              </p>
            </div>
            
            <div class="flex max-w-lg flex-wrap pt-8">
              <!-- Sample Tags -->
              <div class="mb-2 mr-5 mt-2">
                <span class="mr-3 text-sm font-medium uppercase text-blue-600 dark:text-blue-400">
                  Angular (1)
                </span>
              </div>
              
              <div class="mb-2 mr-5 mt-2">
                <span class="mr-3 text-sm font-medium uppercase text-blue-600 dark:text-blue-400">
                  JavaScript (1)
                </span>
              </div>
              
              <div class="mb-2 mr-5 mt-2">
                <span class="mr-3 text-sm font-medium uppercase text-blue-600 dark:text-blue-400">
                  Web Development (1)
                </span>
              </div>
            </div>
          </div>
        </div>

      </main>
      
      <blog-footer />
    </div>
  `,
})
export default class TagsComponent {}
