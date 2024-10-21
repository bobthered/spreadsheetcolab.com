<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	import { tailwindToCSS } from 'tw-to-css';
	import { theme } from '$lib/tailwind';

	const { twi } = tailwindToCSS({
		config: {
			theme
		}
	});

	type Props = {
		children?: any;
		class?: string;
	};

	let { children = [], class: className }: Props = $props();
</script>

<h1 style={twi(twMerge('text-4xl', className))}>
	{@render children()}
</h1>
