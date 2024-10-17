<script lang="ts">
	import { Bars2 } from 'sveltewind/icons';
	import { theme } from 'sveltewind';
	import { twMerge } from 'tailwind-merge';
	import { A, Button, Div, Drawer, Header, Icon, Nav } from '$lib/components';

	let close: () => void;
	let isVisible: boolean;
	let open: () => void;
	let toggle: () => void;
</script>

<Div class="flex flex-grow flex-col">
	<Header class="items-center px-8 py-4">
		<Div>LOGO</Div>
		<Div class="flex flex-grow justify-end">
			<Button
				class={twMerge(theme.getComponentVariant('button', 'icon'), 'md:hidden')}
				onclick={toggle}
			>
				<Icon src={Bars2} />
			</Button>
			<Div class="hidden flex-grow items-center md:flex">
				<Nav class="flex-grow flex-row justify-center"></Nav>
				<Div class="flex space-x-2">
					<A
						class={twMerge(
							theme.getComponentVariant('button', 'default'),
							theme.getComponentVariant('button', 'outline'),
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

<Drawer bind:close bind:isVisible bind:open bind:toggle position="right">Test</Drawer>

<slot />
