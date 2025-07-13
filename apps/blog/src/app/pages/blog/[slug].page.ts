import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { FooterComponent } from '../../shared/components/footer.component';
import { HeaderComponent } from '../../shared/components/header.component';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  readTime: number;
  tags: string[];
  author: string;
  slug: string;
}

@Component({
  selector: 'blog-post',
  standalone: true,
  imports: [RouterLink, HeaderComponent, FooterComponent],
  template: `
    <div class="min-h-screen bg-white dark:bg-gray-900 flex flex-col">
      <blog-header />
      
      <main class="flex-1">
        @if (post) {
          <!-- Article Header -->
          <article class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <header class="mb-12">
              <!-- Breadcrumb -->
              <nav class="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-8">
                <a routerLink="/" class="hover:text-gray-700 dark:hover:text-gray-300">Home</a>
                <svg class="mx-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                </svg>
                <a routerLink="/blog" class="hover:text-gray-700 dark:hover:text-gray-300">Blog</a>
                <svg class="mx-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                </svg>
                <span>{{ post.title }}</span>
              </nav>

              <!-- Title -->
              <h1 class="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
                {{ post.title }}
              </h1>

              <!-- Meta Information -->
              <div class="flex flex-col sm:flex-row sm:items-center gap-4 text-gray-600 dark:text-gray-400 mb-8">
                <div class="flex items-center">
                  <div class="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold mr-3">
                    {{ post.author.charAt(0) }}
                  </div>
                  <div>
                    <div class="font-medium text-gray-900 dark:text-white">{{ post.author }}</div>
                    <div class="text-sm">{{ post.date }}</div>
                  </div>
                </div>
                
                <div class="flex items-center gap-4 text-sm">
                  <span class="flex items-center">
                    <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    {{ post.readTime }} min read
                  </span>
                </div>
              </div>

              <!-- Tags -->
              <div class="flex gap-2 flex-wrap mb-8">
                @for (tag of post.tags; track tag) {
                  <span class="px-3 py-1 text-sm bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full">
                    {{ tag }}
                  </span>
                }
              </div>

              <!-- Excerpt -->
              <p class="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                {{ post.excerpt }}
              </p>
            </header>

            <!-- Article Content -->
            <div class="prose prose-lg dark:prose-invert max-w-none">
              <!-- For now, showing placeholder content -->
              <div class="space-y-6 text-gray-700 dark:text-gray-300 leading-relaxed">
                <p>
                  This is a comprehensive guide that covers the fundamental concepts and advanced techniques you need to know. 
                  In this article, we'll dive deep into the topic and provide practical examples that you can implement in your own projects.
                </p>
                
                <h2 class="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Introduction</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>

                <h2 class="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Getting Started</h2>
                <p>
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>

                <div class="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 my-8">
                  <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-3">💡 Pro Tip</h3>
                  <p class="text-gray-700 dark:text-gray-300">
                    Remember to always test your implementation in different environments and consider edge cases when building production applications.
                  </p>
                </div>

                <h2 class="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Code Example</h2>
                <pre class="bg-gray-900 text-gray-100 rounded-lg p-6 overflow-x-auto"><code>// Example TypeScript code
import &#123; Component &#125; from '&#64;angular/core';

&#64;Component(&#123;
  selector: 'app-example',
  template: \`
    &lt;div class="example"&gt;
      &lt;h1&gt;Hello World&lt;/h1&gt;
    &lt;/div&gt;
  \`
&#125;)
export class ExampleComponent &#123;
  title = 'Hello Angular!';
&#125;</code></pre>

                <h2 class="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Conclusion</h2>
                <p>
                  We've covered the essential concepts and provided practical examples. The key takeaways from this article are:
                </p>
                <ul class="list-disc pl-6 space-y-2">
                  <li>Understanding the core concepts is crucial for success</li>
                  <li>Practice with real-world examples helps solidify your knowledge</li>
                  <li>Stay updated with the latest best practices and community standards</li>
                </ul>
              </div>
            </div>

            <!-- Article Footer -->
            <footer class="mt-16 pt-8 border-t border-gray-200 dark:border-gray-800">
              <!-- Share Section -->
              <div class="flex items-center justify-between mb-8">
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Share this article</h3>
                <div class="flex space-x-4">
                  <a href="#" class="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                    </svg>
                  </a>
                  <a href="#" class="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                </div>
              </div>

              <!-- Navigation -->
              <div class="flex flex-col sm:flex-row justify-between gap-8">
                <a routerLink="/blog" class="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium">
                  <svg class="mr-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
                  </svg>
                  Back to Blog
                </a>
                
                <div class="text-right">
                  <p class="text-sm text-gray-500 dark:text-gray-400 mb-2">Next Article</p>
                  <a href="#" class="text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 font-medium">
                    Building Scalable Components →
                  </a>
                </div>
              </div>
            </footer>
          </article>
        } @else {
          <!-- Loading or Not Found -->
          <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
            <h1 class="text-4xl font-bold text-gray-900 dark:text-white mb-4">Post Not Found</h1>
            <p class="text-gray-600 dark:text-gray-400 mb-8">The blog post you're looking for doesn't exist.</p>
            <a routerLink="/blog" class="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium">
              ← Back to Blog
            </a>
          </div>
        }
      </main>
      
      <blog-footer />
    </div>
  `,
})
export default class BlogPostComponent {
  private route = inject(ActivatedRoute);

  // Get the slug from the route
  slug = this.route.snapshot.params['slug'];

  // Placeholder blog posts - in a real app, this would come from a service/API
  private blogPosts: BlogPost[] = [
    {
      id: 1,
      title: 'Getting Started with Angular 20: New Control Flow Syntax',
      excerpt:
        "Angular 20 introduces a revolutionary new control flow syntax that makes templates more readable and performant. In this comprehensive guide, we'll explore the new @if, @for, and @switch directives and how they improve upon traditional structural directives.",
      content: '',
      date: 'December 15, 2024',
      readTime: 8,
      tags: ['Angular', 'TypeScript', 'Frontend'],
      author: 'Alex Westhuis',
      slug: 'angular-20-control-flow-syntax',
    },
    {
      id: 2,
      title: 'Building Modern UIs with Tailwind CSS v4',
      excerpt:
        'Tailwind CSS v4 brings exciting new features including improved performance, better developer experience, and enhanced customization options. Learn how to leverage these new capabilities to create stunning, responsive user interfaces.',
      content: '',
      date: 'December 10, 2024',
      readTime: 12,
      tags: ['CSS', 'Tailwind', 'Design', 'Frontend'],
      author: 'Alex Westhuis',
      slug: 'tailwind-css-v4-modern-uis',
    },
    {
      id: 3,
      title: 'Analog.js: The Future of Angular Meta-frameworks',
      excerpt:
        "Discover Analog.js, the innovative meta-framework that brings the power of modern web development to Angular. We'll explore its features, benefits, and how it compares to other meta-frameworks in the ecosystem.",
      content: '',
      date: 'December 5, 2024',
      readTime: 15,
      tags: ['Angular', 'Analog.js', 'SSR', 'Performance'],
      author: 'Alex Westhuis',
      slug: 'analog-js-angular-meta-framework',
    },
  ];

  // Find the post by slug
  post = this.blogPosts.find((p) => p.slug === this.slug);
}
