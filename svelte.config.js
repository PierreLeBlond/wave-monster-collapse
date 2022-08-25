import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';

const dev = "production" === "development";

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess({
    postcss: true
  }),

	kit: {
		adapter: adapter(),

    prerender: {
      // This can be false if you're using a fallback (i.e. SPA mode)
      default: true
    },

    paths: {
      base: dev ? "" : "/wave-monster-collapse",
    },

		// Override http methods in the Todo forms
		methodOverride: {
			allowed: ['PATCH', 'DELETE']
		}
	}
};

export default config;
