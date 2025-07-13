import { Component } from '@angular/core';
import { FooterComponent } from '../shared/components/footer.component';
import { HeaderComponent } from '../shared/components/header.component';

@Component({
  selector: 'blog-about',
  standalone: true,
  imports: [HeaderComponent, FooterComponent],
  template: `
    <div class="min-h-screen bg-white dark:bg-gray-900 flex flex-col">
      <blog-header />
      
      <main class="flex-1">
        <div class="max-w-3xl px-4 mx-auto sm:px-6 xl:max-w-5xl xl:px-0">
          <div class="divide-y divide-gray-200 dark:divide-gray-700">
            <div class="space-y-2 pb-8 pt-6 md:space-y-5">
              <h1 class="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
                About
              </h1>
            </div>
            
            <div class="items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0 pt-8">
              <div class="flex flex-col items-center space-x-2">
                <div class="w-32 h-32 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-4xl font-bold mx-auto mb-6">
                  AW
                </div>
                <h3 class="pb-2 pt-4 text-2xl font-bold leading-8 tracking-tight text-gray-900 dark:text-gray-100">
                  Alex Westhuis
                </h3>
                <div class="text-gray-500 dark:text-gray-400">Frontend Developer</div>
                <div class="text-gray-500 dark:text-gray-400">Netherlands</div>
                <div class="flex space-x-3 pt-6">
                  <a 
                    href="https://github.com/aaltw" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    class="text-gray-500 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-300"
                  >
                    <span class="sr-only">GitHub</span>
                    <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>
                </div>
              </div>
              
              <div class="prose max-w-none pb-8 pt-8 text-gray-500 dark:text-gray-400 xl:col-span-2">
                <p>
                  Frontend developer based in the Netherlands with a passion for creating exceptional web experiences.
                </p>
                
                <p>
                  I enjoy working with modern web technologies and frameworks, particularly Angular, React, and Vue.js. 
                  When I'm not coding, you can find me exploring new technologies or contributing to open source projects.
                </p>
                
                <p>
                  This blog is where I share my thoughts on web development, programming insights, and technical discoveries. 
                  Feel free to reach out if you'd like to connect or collaborate on interesting projects.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <blog-footer />
    </div>
  `,
})
export default class AboutComponent {}
