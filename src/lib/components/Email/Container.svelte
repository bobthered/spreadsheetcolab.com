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
	style={twi(twMerge('max-w-[37.5em] p-6 mx-auto my-0 flex flex-col', className))}
>
	<tbody>
		<tr style={twi(twMerge('w-full flex flex-col'))}>
			<td>
				{@render children()}
			</td>
		</tr>
	</tbody>
</table>
