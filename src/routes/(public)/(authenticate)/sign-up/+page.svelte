<script lang="ts">
	import { A, Button, Div, Fieldset, Form, H1, Input } from '$lib/components';
	import { theme } from 'sveltewind';
	import { twMerge } from 'tailwind-merge';
</script>

<H1 class="text-center">Create Your Account</H1>
<Form>
	<Fieldset legend="Email">
		<Input name="email" required="required" type="email" />
	</Fieldset>
	<Fieldset legend="Password">
		<Input name="password" required="required" type="password" />
	</Fieldset>
	<Button type="submit">Sign Up</Button>
	<Div class="text-center">or</Div>
	<A
		class={twMerge(
			theme.getComponentVariant('button', 'default'),
			theme.getComponentVariant('button', 'ghost'),
			'shadow-none hover:shadow-none focus:shadow-none'
		)}
		href="/sign-in"
	>
		Sign In
	</A>
</Form>
