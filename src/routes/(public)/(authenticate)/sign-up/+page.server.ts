import { send } from '$lib/emails/index.js';
import SignUp from '$lib/emails/SignUp.svelte';

export const actions = {
	default: async ({ request }) => {
		const { email, password } = <Record<string, string>>(
			Object.fromEntries(await request.formData())
		);

		const { data, error } = await send({
			subject: 'Test - Sign Up',
			Template: SignUp,
			to: [email]
		});

		console.log({ data, error });

		return {};
	}
};
