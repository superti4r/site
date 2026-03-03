<script>
	import Seo from '$components/seo.svelte';
	import PageIntro from '$components/sections/page-intro.svelte';
	import SectionDivider from '$components/sections/section-divider.svelte';
	import { attributions } from '$contents/attributions';
	import { getAttributionsSchema } from '$lib/logic/attributions/schema';

	const schema = getAttributionsSchema(attributions);
</script>

<Seo
	title="Attributions & Credits"
	{schema}
	description="A list of tools, frameworks, libraries, services, and inspirations that helped bring this website to life."
	url="/attributions"
	image="/images/banner.png"
/>

<PageIntro
	eyebrow="Pieces of the puzzle behind this little website"
	title="What makes this site run"
	description="This site came together thanks to tools I love using."
/>

<section class="border-b border-separator">
	<div class="inner border-x border-separator">
		<div class="p-8">
			{#each attributions as attribution}
				<h2 class="text-2xl">{attribution.title}</h2>
				<ul class="my-4">
					{#each attribution.items as item}
						<li class="text-lg text-foreground-text">
							<a
								class="text-primary hover:underline"
								href={item.href}
								target="_blank"
								rel="noopener noreferrer"
							>
								{item.name}
							</a>
							– {item.description}
						</li>
					{/each}
				</ul>
			{/each}
		</div>
	</div>
</section>

<SectionDivider />