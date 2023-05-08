import { defineConfig } from 'vituum';
import nunjucks from '@vituum/nunjucks';
import tailwind from '@vituum/tailwind';

export default defineConfig({
  integrations: [nunjucks(), tailwind()],
  templates: {
    format: 'njk',
  },
});
