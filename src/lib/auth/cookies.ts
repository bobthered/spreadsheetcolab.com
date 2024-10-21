import type { Cookies } from '@sveltejs/kit';

export const cookies = {
	delete: (cookies: Cookies) => cookies.delete('userId', { path: '/' }),
	set: (cookies: Cookies, id: string) => cookies.set('userId', id, { httpOnly: true, path: '/' })
};
