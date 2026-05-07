import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://ruoqianfengshao.github.io/yangmei-site',
  base: '/yangmei-site/',
  compressHTML: true,
  build: {
    assets: 'assets',
  },
  vite: {
    build: {
      assetsDir: 'assets',
    },
  },
});