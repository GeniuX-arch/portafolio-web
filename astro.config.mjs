import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
    site: 'https://GeniuX-arch.github.io/portafolioweb',
    base: '/portafolioweb',
    buildOptions: {
        site: 'https://geniux-arch.github.io/portafolioweb',
        outDir: 'dist',
      },
    integrations: [tailwind()],
});
