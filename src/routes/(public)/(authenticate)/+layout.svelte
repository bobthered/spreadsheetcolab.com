<script lang="ts">
	import { Div } from '$lib/components';

	type Props = {
		children?: any;
	};
	let { children = [] }: Props = $props();
</script>

<Div class="flex flex-grow flex-col md:grid md:grid-cols-2">
	<Div class="flex flex-grow flex-col items-center">
		<Div class="flex w-full max-w-[27.5rem]  flex-grow flex-col justify-center space-y-8 px-8 py-4">
			{@render children()}
		</Div>
	</Div>
	<Div class="bg-primary-400 hidden md:flex">
		<video
			class="object-cover mix-blend-screen invert saturate-0 dark:mix-blend-multiply dark:invert-0"
			width="100%"
			autoplay
			loop
			muted
		>
			<source src="/video/3130284-hd_1280_720_30fps.mp4" type="video/mp4" />
		</video>
	</Div>
</Div>
