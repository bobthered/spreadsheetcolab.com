import { prisma } from '$lib/prisma';
import type { Handle } from '@sveltejs/kit';

const publicPathnames = ['/', '/sign-in', '/sign-up', '/verify-email'];

export const handle: Handle = async ({ event, resolve }) => {
	// get userId from cookie
	const userId = event.cookies.get('userId');

	// find user
	const user = userId ? await prisma.user.findUnique({ where: { id: userId } }) : null;

	// check if user exists
	if (user) event.locals.user = user;

	// check if is a publicPathname
	if (publicPathnames.includes(event.url.pathname)) {
		// check if user exists ( authenticated )
		if (user) return new Response(null, { status: 303, headers: { location: '/dashboard' } });
	} else {
		// check if user does not exist ( not authenticated )
		if (!user) return new Response(null, { status: 303, headers: { location: '/sign-in' } });
	}

	const response = await resolve(event);

	return response;
};
