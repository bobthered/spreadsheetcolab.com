import bcrypt from 'bcryptjs';
import { fail, redirect } from '@sveltejs/kit';
import * as auth from '$lib/auth';
import { prisma } from '$lib/prisma/index.js';

export const actions = {
	default: async ({ cookies, request }) => {
		const { email, password } = <Record<string, string>>(
			Object.fromEntries(await request.formData())
		);

		// find email
		const user = await prisma.user.findUnique({ where: { email: email.toLocaleLowerCase() } });

		// return fail if no user found
		if (user === null) return fail(400, { error: 'Email does not exist' });

		// compare password
		if (!bcrypt.compareSync(password, user.passwordHash))
			return fail(400, { error: 'Could not verify credentials' });

		// update session cookie
		auth.cookies.set(cookies, user.id);

		redirect(300, '/dashboard');
	}
};
