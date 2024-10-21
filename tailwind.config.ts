import type { Config } from 'tailwindcss';
import { theme } from './src/lib/tailwind/index.js';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}', './node_modules/sveltewind/**/*.{html,js,svelte,ts}'],

	theme,

	plugins: []
} as Config;
