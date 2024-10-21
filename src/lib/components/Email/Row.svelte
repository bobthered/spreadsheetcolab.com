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

<table
	align="center"
	width="100%"
	border="0"
	cellPadding="0"
	cellSpacing="0"
	role="presentation"
	style={twi(twMerge('', className))}
>
	<tbody>
		<tr>
			{@render children()}
		</tr>
	</tbody>
</table>
