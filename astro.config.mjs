import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  output: 'static',
  trailingSlash: 'always',
  site: process.env.PUBLIC_SITE_URL || 'https://3bdallah650-jpg.github.io',
  vite: { plugins: [tailwindcss()] },
});
