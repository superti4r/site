<script lang="ts">
	import Seo from '$components/seo.svelte';
	import HomeHero from '$components/sections/home/hero.svelte';
	import HomeArticlesSection from '$components/sections/home/articles-section.svelte';
	import HomeProjectsSection from '$components/sections/home/projects-section.svelte';
	import HomeSnippetsSection from '$components/sections/home/snippets-section.svelte';
	import SectionDivider from '$components/sections/section-divider.svelte';
	import { getHomeContent, getHomeSchema, HOME_DESCRIPTION } from '$lib/logic/home';

	const { snippets, projects, articles } = getHomeContent();
	const schema = getHomeSchema();
</script>

<Seo
	title="superti4r — Fullstack Web Developer"
	{schema}
	description={HOME_DESCRIPTION}
	url="/"
	image="/images/banner.png"
/>

<HomeHero />
<SectionDivider />
<HomeArticlesSection {articles} />
<SectionDivider />
<HomeProjectsSection {projects} />
<SectionDivider />
<HomeSnippetsSection {snippets} />
<SectionDivider />