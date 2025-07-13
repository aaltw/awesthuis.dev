import analog from '@analogjs/platform';
import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin';
import tailwindcss from '@tailwindcss/postcss';
import autoprefixer from 'autoprefixer';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig(() => {
  return {
    root: __dirname,
    cacheDir: `../../node_modules/.vite`,
    build: {
      outDir: '../../dist/apps/blog/client',
      reportCompressedSize: true,
      target: ['es2020'],
    },
    server: {
      fs: {
        allow: ['.'],
      },
    },
    css: {
      postcss: {
        plugins: [tailwindcss, autoprefixer],
      },
    },
    plugins: [
      analog({
        prerender: {
          routes: async () => ['/'],
        },
        nitro: {
          preset: 'static',
        },
      }),
      nxViteTsPaths(),
    ],
  };
});
