import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  // Used for canonical URLs and the sitemap. Points at the custom domain even
  // before DNS is switched over, which is what we want in the page metadata.
  site: 'https://confident-masculinity.com',
  // The letter pages are ad landers marked noindex, so they stay out of the sitemap.
  integrations: [sitemap({ filter: (page) => !page.includes('/a-letter-from-her') })],
});
