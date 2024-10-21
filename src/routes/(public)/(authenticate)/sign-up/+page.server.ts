import bcrypt from 'bcryptjs';
import { send } from '$lib/emails/index.js';
import SignUp from '../../../(emails)/emails/sign-up/+page.svelte';
import { prisma } from '$lib/prisma';
import { fail, redirect } from '@sveltejs/kit';

export const actions = {
	default: async ({ request }) => {
		const { email, password } = <Record<string, string>>(
			Object.fromEntries(await request.formData())
		);

		// check if email already exists in database
		const results = await prisma.user.findUnique({ where: { email: email.toLowerCase() } });

		if (results !== null) return fail(400, { error: 'Email already exists' });

		// hash password
		const passwordHash = bcrypt.hashSync(password);

		// create user
		const user = await prisma.user.create({ data: { email: email.toLowerCase(), passwordHash } });

		// create six digit code
		const code = [...Array(6)].map((_) => Math.floor(Math.random() * 10).toString()).join('');

		// create verification
		const verification = await prisma.userVerification.create({
			data: {
				code,
				userId: user.id
			}
		});

		const { data, error } = await send({
			subject: 'Verify Email - Spreadsheetcollab',
			props: { verification },
			Template: SignUp,
			to: [email]
		});

		redirect(300, `/verify-email/${verification.id}`);
	}
};
