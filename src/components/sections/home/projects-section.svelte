<script lang="ts">
	import Projects from '$components/features/projects.svelte';
	import SectionCtaLink from '$components/sections/section-cta-link.svelte';

	let { projects } = $props();
</script>

<section class="border-b border-separator">
	<div class="inner flex flex-col items-center border-x border-separator">
		<div class="w-full p-8">
			<span class="block text-center font-handwriting text-xl text-foreground-text">
				Things I've Made (and Broke)
			</span>
			<h2 class="my-4 text-center text-3xl sm:text-6xl">Projects I’ve Been Building</h2>
		</div>
		<div class="grid divide-x divide-separator md:grid-cols-2">
			<Projects {projects} />
		</div>
		<SectionCtaLink href="/projects" label="See More Projects" />
	</div>
</section>
