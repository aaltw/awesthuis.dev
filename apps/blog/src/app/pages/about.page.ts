import { Component } from '@angular/core';
import { FooterComponent } from '../shared/components/footer.component';
import { HeaderComponent } from '../shared/components/header.component';

@Component({
  selector: 'blog-about',
  standalone: true,
  imports: [HeaderComponent, FooterComponent],
  template: `
    <div class="min-h-screen bg-white dark:bg-gray-900">
      <blog-header />
      
      <main class="flex-1">
        <!-- Hero Section -->
        <div class="bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-gray-900 dark:via-gray-900 dark:to-blue-900 py-16">
          <div class="container mx-auto px-4 sm:px-6 lg:px-8">
            <div class="max-w-4xl mx-auto text-center">
              <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
                About Me
              </h1>
              <p class="text-lg md:text-xl text-gray-600 dark:text-gray-300">
                Frontend developer passionate about creating exceptional web experiences
              </p>
            </div>
          </div>
        </div>

        <!-- Main Content -->
        <section class="py-16 bg-white dark:bg-gray-900">
          <div class="container mx-auto px-4 sm:px-6 lg:px-8">
            <div class="max-w-4xl mx-auto">
              <div class="grid md:grid-cols-3 gap-12">
                <!-- Profile Section -->
                <div class="md:col-span-1">
                  <div class="bg-gray-50 dark:bg-gray-800 rounded-xl p-8 text-center">
                    <div class="w-32 h-32 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-4xl font-bold mx-auto mb-6">
                      AW
                    </div>
                    <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-2">Alex Westhuis</h2>
                    <p class="text-gray-600 dark:text-gray-400 mb-6">Frontend Developer</p>
                    
                    <div class="space-y-3">
                      <div class="flex items-center text-gray-600 dark:text-gray-400">
                        <svg class="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                        </svg>
                        Netherlands
                      </div>
                      
                      <div class="flex items-center text-gray-600 dark:text-gray-400">
                        <svg class="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m8 0H8m8 0v2a2 2 0 002 2v8a2 2 0 01-2 2H6a2 2 0 01-2-2v-8a2 2 0 012-2V8"></path>
                        </svg>
                        5+ years experience
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Bio Section -->
                <div class="md:col-span-2">
                  <div class="prose prose-lg dark:prose-invert max-w-none">
                    <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-6">Hello! 👋</h2>
                    
                    <p class="text-gray-700 dark:text-gray-300 mb-6">
                      Frontend developer based in the Netherlands.
                    </p>

                    <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">Connect</h3>

                    <div class="flex space-x-6">
                      <a 
                        href="https://github.com/aaltw" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        class="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                      >
                        <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <blog-footer />
    </div>
  `,
})
export default class AboutComponent {}
