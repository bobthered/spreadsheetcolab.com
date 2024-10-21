<script lang="ts">
	import { slide } from 'svelte/transition';
	import { enhance } from '$app/forms';
	import { A, Button, Div, Fieldset, Form, H1, Input, P } from '$lib/components';

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

<H1 class="text-center">Verify Email</H1>
<P>
	Thank you for creating a new <A href="/">spreadsheetcollab.com</A> account. We want to make sure it's
	really you. Please check your email for a verification code and enter it below.
</P>
<Form {disabled} use={[[enhance, enhanceHandler]]}>
	<Fieldset legend="Verification Code">
		<Input name="code" required="required" type="number" />
	</Fieldset>
	{#if form?.error}
		<Div
			class="text-red-500 selection:bg-red-500 selection:text-white"
			transition={[slide, { duration: 200 }]}
		>
			{form.error}
		</Div>
	{/if}
	<Button {disabled} type="submit">Verify</Button>
</Form>
