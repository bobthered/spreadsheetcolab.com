<script lang="ts">
	import confetti from 'canvas-confetti';
	import { onMount } from 'svelte';
	import { Button, Card, Container, Div, H1, H2, P } from '$lib/components';
	import { theme } from '$lib/tailwind';

	let canvas: HTMLElement;
	let screenIndex = 0;
	const screens = [
		{ title: 'Title #1', subtitle: 'Subtitle goes here this should be a little longer' },
		{ title: 'Title #2', subtitle: 'Subtitle goes here this should be a little longer' },
		{ title: 'Title #3', subtitle: 'Subtitle goes here this should be a little longer' }
	];
	const translationClassesMap = new Map([
		[-2, 'translate-x-[-200%]'],
		[-1, 'translate-x-[-100%]'],
		[0, 'translate-x-[0%]'],
		[1, 'translate-x-[100%]'],
		[2, 'translate-x-[200%]']
	]);

	onMount(() => {
		const myConfetti = confetti.create(canvas, { resize: true });
		myConfetti({
			colors: Object.values(theme.extend.colors.primary),
			particleCount: 500,
			origin: {
				x: 0.5,
				y: 0.5
			},
			spread: 360,
			startVelocity: 75
		});
	});
</script>

<Div class="relative flex flex-grow flex-col overflow-auto">
	<Container class="flex flex-grow flex-col overflow-auto">
		<Div class="flex flex-grow flex-col overflow-auto">
			<Div class="relative flex flex-grow flex-col overflow-hidden">
				{#each screens as { title, subtitle }, index}
					<Div
						class="absolute left-0 top-0 flex h-full w-full flex-col px-8 py-6 pb-0 transition duration-200 {translationClassesMap.get(
							index - screenIndex
						)}"
					>
						<Div class="flex flex-grow  " />
						<H2 class="text-center">{title}</H2>
						<P class="text-center">{subtitle}</P>
					</Div>
				{/each}
			</Div>
			<Div class="flex flex-col space-y-4 px-8 py-6">
				<Div class="flex items-center justify-center space-x-4">
					{#each screens as _, index}
						<Div
							class="rounded-full bg-gray-950 opacity-50 transition duration-200 dark:bg-gray-50 {index ===
							screenIndex
								? 'h-3 w-6 opacity-100'
								: 'h-3 w-3 opacity-50'}"
						/>
					{/each}
				</Div>
				<Button
					onclick={() => {
						if (screenIndex < screens.length - 1) {
							screenIndex++;
						} else {
						}
					}}
				>
					{#if screenIndex < screens.length - 1}
						Next
					{:else}
						Get Started
					{/if}
				</Button>
			</Div>
		</Div>
	</Container>
	<canvas bind:this={canvas} class="pointer-events-none absolute left-0 top-0 h-full w-full"
	></canvas>
</Div>
