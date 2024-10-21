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
		alt: string;
		class?: string;
		height: string;
		src: string;
		width: string;
	};

	let { alt, class: className, height, src, width }: Props = $props();
</script>

<img
	{alt}
	{height}
	{src}
	style={twi(twMerge('block outline-none border-0 no-underline', className))}
	{width}
/>
