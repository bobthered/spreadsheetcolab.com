import { Resend } from 'resend';
import { type Component } from 'svelte';
import { render } from 'svelte/server';
import { RESEND_API_KEY } from '$env/static/private';

const resend = new Resend(RESEND_API_KEY);

export type SendOptions = {
	from?: string;
	props?: Record<string, any>;
	subject: string;
	Template: Component;
	to: string[];
};

export const send = async (options: SendOptions) => {
	const { html } = render(options.Template, { props: options?.props || {} });

	return resend.emails.send({
		from: options?.from || 'Spreadsheetcollab.com <noreply@spreadsheetcollab.com>',
		to: options.to,
		subject: options.subject,
		html
	});
};
