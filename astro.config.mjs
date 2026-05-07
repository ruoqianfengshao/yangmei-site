import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://ruoqianfengshao.github.io/yangmei-site',
  compressHTML: true,
  build: {
    assets: 'assets',
  },
});