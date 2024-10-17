<script lang="ts">
	import { theme } from 'sveltewind';
	import { sveltewind } from 'sveltewind/themes';
	import '../app.css';

	theme.set(sveltewind);
	theme.setComponentVariant(
		'button',
		'contrast',
		'bg-gray-800 text-gray-50 hover:bg-gray-900 focus:bg-gray-900 focus:ring-gray-800/30 dark:bg-gray-100 dark:text-gray-950 dark:hover:bg-gray-200 dark:focus:bg-gray-200 dark:focus:ring-gray-100/30'
	);
	theme.updateComponentVariant(
		'button',
		'default',
		'rounded-full px-8 bg-primary-400 hover:bg-primary-500 focus:bg-primary-500 text-gray-950 focus:ring-primary-400/30 text-slate-950'
	);
</script>

<slot></slot>
