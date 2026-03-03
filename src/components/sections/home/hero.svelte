<script lang="ts">
	import Icon from '@iconify/svelte';
	import Cats from '$components/cats.svelte';
	import { onMount } from 'svelte';
	import { runHeroAnimation } from '$lib/logic/home/hero-animation';

	onMount(runHeroAnimation);
</script>

<main
	class="relative flex flex-col items-center justify-center overflow-hidden overflow-x-hidden border-b border-separator lg:min-h-screen"
>
	<div class="inner py-8">
		<div
			class="mx-auto flex flex-col justify-center gap-6 lg:max-w-2xl lg:items-center lg:text-center"
		>
			<span class="font-handwriting text-xl text-foreground-text sm:text-2xl" data-gsap-hero>
				Hello, you found me.
			</span>
			<h1 class="text-4xl sm:text-5xl lg:text-7xl" data-gsap-hero>
				I'm <span class="text-primary">Tiar</span>. Welcome to my
				<span class="text-primary">digital home</span>.
			</h1>
			<p class="text-balance sm:text-lg lg:text-xl" data-gsap-hero>
				This isn’t a portfolio. It’s not a blog. It’s a quiet little corner where I collect
				thoughts, tinker with ideas, and keep pieces of who I am.
			</p>
			<div
				class="flex flex-col items-start sm:flex-row sm:items-center sm:gap-8"
				data-hero-button
			>
				<a
					href="/about"
					class="group/button inline-flex h-14 items-center gap-2 rounded-xl border border-border px-4 font-semibold text-foreground-primary transition-all hover:bg-primary hover:text-foreground-button [&_svg]:transition-all hover:[&_svg]:-rotate-35"
				>
					Get to know me
					<div
						class="grid size-8 place-items-center rounded-lg border border-border group-hover/button:bg-background group-hover/button:text-foreground-primary"
					>
						<Icon icon="solar:arrow-right-outline" class="size-4" />
					</div>
				</a>
			</div>
		</div>
	</div>
	<Cats />
</main>
