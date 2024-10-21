import { Resend } from 'resend';
import { render } from 'svelte/server';
import { RESEND_API_KEY } from '$env/static/private';

const resend = new Resend(RESEND_API_KEY);

export type SendOptions = {
	from?: string;
	props?: Record<string, any>;
	subject: string;
	Template: any;
	to: string[];
};

const wrapBody = (body: string): string => `<html lang="en">
	<head>
		<meta httpEquiv="Content Type" content="text/html; charset=UTF-8" />
		<meta name="x-apple-disable-message-reformatting" />
	</head>
	<body>
		${body}
	</body>
</html>`;

export const send = async (options: SendOptions) => {
	const { body } = render(options.Template, { props: options?.props || {} });

	return resend.emails.send({
		from: options?.from || 'Spreadsheetcollab.com <noreply@spreadsheetcollab.com>',
		to: options.to,
		subject: options.subject,
		html: wrapBody(body)
	});
};
