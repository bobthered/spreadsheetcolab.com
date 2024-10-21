import * as auth from '$lib/auth';

export const GET = ({ cookies }) => {
	auth.cookies.delete(cookies);
	return new Response(null, { status: 303, headers: { location: '/' } });
};
