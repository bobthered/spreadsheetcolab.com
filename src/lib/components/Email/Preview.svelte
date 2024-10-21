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

<div
	style={twi(
		twMerge('hidden overflow-hidden leading-[1px] opacity-0 max-h-[0px] max-w-[0px]', className)
	)}
>
	{@render children()}
</div>
