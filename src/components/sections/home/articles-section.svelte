<script lang="ts">
	import Articles from '$components/features/articles.svelte';
	import SectionCtaLink from '$components/sections/section-cta-link.svelte';

	let { articles } = $props();
</script>

<section class="border-b border-separator">
	<div class="inner flex flex-col items-center border-x border-separator">
		<div class="w-full p-8">
			<span class="block text-center font-handwriting text-xl text-foreground-text">
				Little Brain Dumps
			</span>
			<h2 class="my-4 text-center text-3xl sm:text-6xl">Things I’ve Written Down</h2>
		</div>
		<div class="grid md:grid-cols-2 lg:grid-cols-1">
			<Articles {articles} />
		</div>
		<SectionCtaLink href="/articles" label="See More Articles" />
	</div>
</section>
