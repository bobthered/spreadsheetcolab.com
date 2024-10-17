<script lang="ts">
	import { Bars2, XMark } from 'sveltewind/icons';
	import { theme } from 'sveltewind';
	import { twMerge } from 'tailwind-merge';
	import { A, Button, Card, Div, Drawer, H1, H5, Header, Icon, Nav, Portal } from '$lib/components';

	let close: () => void;
	const nav: { href: string; label: string }[] = [{ href: '/', label: 'Home' }];
	let isVisible: boolean;
	let open: () => void;
	let toggle: () => void;
</script>

<Div class="flex flex-grow flex-col">
	<Header class="min-h-[5rem] items-center px-8 py-4">
		<Div>LOGO</Div>
		<Div class="flex flex-grow justify-end">
			<Portal>
				<Button
					class={twMerge(
						theme.getComponentVariant('button', 'icon'),
						'fixed right-8 top-4 md:hidden'
					)}
					onclick={toggle}
				>
					<Icon src={isVisible ? XMark : Bars2} />
				</Button>
			</Portal>
			<Div class="hidden flex-grow items-center md:flex">
				<Nav class="flex-grow flex-row justify-center">
					{#each nav as { href, label }}
						<A {href}>{label}</A>
					{/each}
				</Nav>
				<Div class="flex space-x-2">
					<A
						class={twMerge(
							theme.getComponentVariant('button', 'default'),
							theme.getComponentVariant('button', 'ghost'),
							'shadow-none hover:shadow-none focus:shadow-none'
						)}
						href="/sign-up">Sign Up</A
					>
					<A
						class={twMerge(
							theme.getComponentVariant('button', 'default'),
							'shadow-none hover:shadow-none focus:shadow-none'
						)}
						href="/sign-in">Sign In</A
					>
				</Div>
			</Div>
		</Div>
	</Header>
</Div>

<Drawer
	bind:close
	bind:isVisible
	bind:open
	bind:toggle
	class="flex w-full max-w-[calc(100vw_-_2rem)] flex-grow md:hidden"
	position="right"
>
	<Card class="relative w-full rounded-none">
		<H1 class="border-b border-slate-950/10 pb-8 dark:border-slate-50/5">LOGO</H1>
		<Nav class="flex-grow flex-col overflow-auto">
			<Div class="flex flex-grow flex-col overflow-auto">
				{#each nav as { href, label }}
					<A class="py-2 shadow-none hover:shadow-none focus:shadow-none" {href}>{label}</A>
				{/each}
			</Div>
			<A class="py-2 shadow-none hover:shadow-none focus:shadow-none" href="/sign-up">Sign Up</A>
			<A class="py-2 shadow-none hover:shadow-none focus:shadow-none" href="/sign-in">Sign In</A>
		</Nav>
	</Card>
</Drawer>

<slot />
