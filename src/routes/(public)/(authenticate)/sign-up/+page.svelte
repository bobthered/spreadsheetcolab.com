<script lang="ts">
	import { enhance } from '$app/forms';
	import { A, Button, Div, Fieldset, Form, H1, Input } from '$lib/components';
	import { slide } from 'svelte/transition';
	import { theme } from 'sveltewind';
	import { twMerge } from 'tailwind-merge';

	type Props = {
		form?: Record<string, any> | null;
	};
	let disabled: 'disabled' | undefined = $state(undefined);
	let { form }: Props = $props();

	const enhanceHandler = () => {
		disabled = 'disabled';
		form = null;

		return async ({ update }) => {
			disabled = undefined;
			update();
		};
	};
</script>

<H1 class="text-center">Create Your Account</H1>
<Form {disabled} use={[[enhance, enhanceHandler]]}>
	<Fieldset legend="Email">
		<Input name="email" required="required" type="email" />
	</Fieldset>
	<Fieldset legend="Password">
		<Input name="password" required="required" type="password" />
	</Fieldset>
	{#if form?.error}
		<Div
			class="text-red-500 selection:bg-red-500 selection:text-white"
			transition={[slide, { duration: 200 }]}
		>
			{form.error}
		</Div>
	{/if}
	<Button {disabled} type="submit">Sign Up</Button>
	<Div class="text-center">or</Div>
	<A
		class={twMerge(
			theme.getComponentVariant('button', 'default'),
			theme.getComponentVariant('button', 'ghost'),
			'shadow-none hover:shadow-none focus:shadow-none'
		)}
		{disabled}
		href="/sign-in"
	>
		Sign In
	</A>
</Form>
