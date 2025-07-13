import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FooterComponent } from '../shared/components/footer.component';
import { HeaderComponent } from '../shared/components/header.component';

@Component({
  selector: 'blog-list',
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
                All Posts
              </h1>
              <p class="text-lg leading-7 text-gray-500 dark:text-gray-400">
                A blog about web development, programming, and technology
              </p>
            </div>
            
            <!-- Blog Posts List -->
            <div class="py-12">
              <div class="space-y-16">
                <!-- Sample Blog Posts -->
                <article class="space-y-2 xl:grid xl:grid-cols-4 xl:space-y-0 xl:items-baseline">
                  <dl>
                    <dt class="sr-only">Published on</dt>
                    <dd class="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                      <time datetime="2024-01-01">Jan 01, 2024</time>
                    </dd>
                  </dl>
                  <div class="space-y-5 xl:col-span-3">
                    <div class="space-y-6">
                      <div>
                        <h2 class="text-2xl font-bold leading-8 tracking-tight">
                          <a routerLink="/blog/welcome" class="text-gray-900 dark:text-gray-100 hover:text-blue-600 dark:hover:text-blue-400">
                            Welcome to my blog
                          </a>
                        </h2>
                        <div class="flex flex-wrap">
                          <span class="mr-3 text-sm font-medium uppercase text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300">
                            Welcome
                          </span>
                        </div>
                      </div>
                      <div class="prose max-w-none text-gray-500 dark:text-gray-400">
                        This is my first blog post. More content coming soon!
                      </div>
                    </div>
                    <div class="text-base font-medium leading-6">
                      <a routerLink="/blog/welcome" class="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300" aria-label="Read more: Welcome to my blog">
                        Read more →
                      </a>
                    </div>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </div>

      </main>
      
      <blog-footer />
    </div>
  `,
})
export default class BlogListComponent {}
