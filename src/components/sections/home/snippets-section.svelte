<script lang="ts">
	import Snippets from '$components/features/snippets.svelte';
	import SectionCtaLink from '$components/sections/section-cta-link.svelte';

	let { snippets } = $props();
</script>

<section class="border-b border-separator">
	<div class="inner flex flex-col items-center border-x border-separator">
		<div class="w-full p-8">
			<span class="block text-center font-handwriting text-xl text-foreground-text">
				Memory Hacks
			</span>
			<h2 class="my-4 text-center text-3xl sm:text-6xl">Tiny Code Things</h2>
		</div>
		<div class="w-full">
			<Snippets {snippets} />
		</div>
		<SectionCtaLink href="/snippets" label="See More Snippets" />
	</div>
</section>
