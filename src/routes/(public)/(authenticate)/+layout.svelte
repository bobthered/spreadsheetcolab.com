<script lang="ts">
	import { A, Button, Div, Fieldset, Form, H1, Input } from '$lib/components';
	import { theme } from 'sveltewind';
	import { twMerge } from 'tailwind-merge';

	type Props = {
		children?: any;
	};
	let { children = [] }: Props = $props();
</script>

<Div class="flex flex-grow flex-col md:grid md:grid-cols-2">
	<Div class="flex flex-grow flex-col items-center">
		<Div class="flex w-full max-w-[27.5rem]  flex-grow flex-col justify-center space-y-8 px-8 py-4">
			{@render children()}
		</Div>
	</Div>
	<Div class="bg-primary-400 hidden md:flex" />
</Div>
