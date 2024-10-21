import { fail, redirect } from '@sveltejs/kit';
import * as auth from '$lib/auth';
import { prisma } from '$lib/prisma';

export const actions = {
	default: async ({ cookies, params, request }) => {
		const { code } = <Record<string, string>>Object.fromEntries(await request.formData());

		// find verification
		const verification = await prisma.userVerification.findUnique({ where: { id: params.id } });

		// check if no verifcation found
		if (verification === null) return fail(400, { error: 'Verification code expired' });

		// check if code does not match
		if (verification.code !== code) return fail(400, { error: 'Verification code does not match' });

		// update user's verification status
		await prisma.user.update({
			where: {
				id: verification.userId
			},
			data: {
				verified: true
			}
		});

		// get user
		const user = await prisma.user.findUnique({ where: { id: verification.userId } });

		if (user === null) return fail(400, { error: 'Could not find user' });

		// update session cookie
		auth.cookies.set(cookies, user.id);

		// delete user verification
		await prisma.userVerification.delete({ where: { id: params.id } });

		redirect(300, '/onboard');
	}
};
