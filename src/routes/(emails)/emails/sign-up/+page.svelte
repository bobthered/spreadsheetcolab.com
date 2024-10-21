<script lang="ts">
	import { Email } from '$lib/components';
	type Props = {
		verification: { code: string };
	};
	let { verification = { code: '012345' } }: Props = $props();
</script>

<Email.Preview>Verify Email - Spreadsheetcollab</Email.Preview>
<Email.Container>
	<Email.Section>
		<Email.Section class="bg-primary-400 items-center py-4 text-slate-950">
			<Email.H1>LOGO</Email.H1>
		</Email.Section>
		<Email.Section class="py-8">
			<Email.H1 class="text-xl">Verify your email address</Email.H1>
		</Email.Section>
		<Email.Section>
			<Email.Text>
				Thanks for creating a new spreadsheetcollab.com account. We want to make sure it's really
				you. Please enter the following verification code when prompted.
			</Email.Text>
		</Email.Section>
		<Email.Section class="items-center">
			<Email.Text class="font-bold">Verification Code</Email.Text>
			<Email.H1 class="font-bold">{verification.code}</Email.H1>
		</Email.Section>
	</Email.Section>
</Email.Container>
