// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({

	site: import.meta.env.PROD ? "https://assets.qawsed.site" : "http://localhost:4321",
});
