<script lang="ts">
	import { theme } from 'sveltewind';
	import { sveltewind } from 'sveltewind/themes';
	import '../app.css';

	type Props = {
		children?: any;
	};
	let { children = [] }: Props = $props();

	theme.set(sveltewind);
	theme.setComponentVariant(
		'button',
		'contrast',
		'bg-gray-800 text-gray-50 hover:text-gray-50 hover:bg-gray-900 focus:bg-gray-900 focus:ring-gray-800/30 dark:bg-gray-100 dark:text-gray-950 dark:hover:bg-gray-200 dark:focus:bg-gray-200 dark:focus:ring-gray-100/30 dark:hover:text-gray-950'
	);
	theme.setComponentVariant(
		'button',
		'outline',
		'bg-transparent hover:bg-transparent focus:bg-transparent text-primary-400 hover:text-primary-500 focus:text-primary-500 border-2 border-primary-400 hover:border-primary-500 focus:border-primary-500'
	);
	theme.updateComponentVariant(
		'button',
		'default',
		'rounded-full px-8 bg-primary-400 hover:bg-primary-500 focus:bg-primary-500 text-gray-950 focus:ring-primary-400/30 text-slate-950 hover:text-slate-950'
	);
</script>

{@render children()}
