import { tailwindcssPaletteGenerator } from '@bobthered/tailwindcss-palette-generator';
import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}', './node_modules/sveltewind/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			colors: tailwindcssPaletteGenerator({
				colors: ['#54EA54', '#9aa49a'],
				names: ['primary', 'slate']
			})
		}
	},

	plugins: []
} as Config;
