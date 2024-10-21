import { tailwindcssPaletteGenerator } from '@bobthered/tailwindcss-palette-generator';

export const theme = {
	extend: {
		colors: tailwindcssPaletteGenerator({
			colors: ['#54EA54', '#9aa49a'],
			names: ['primary', 'slate']
		})
	}
};
