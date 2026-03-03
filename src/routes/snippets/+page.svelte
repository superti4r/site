<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/state';
	import { getSnippets } from '$contents/snippets';
	import Snippets from '$components/features/snippets.svelte';
	import PageIntro from '$components/sections/page-intro.svelte';
	import SectionDivider from '$components/sections/section-divider.svelte';
	import Icon from '@iconify/svelte';
	import Seo from '$components/seo.svelte';
	import {
		buildSnippetSearchParams,
		getSnippetFiltersFromUrl,
		updateSnippetFilters
	} from '$lib/logic/snippets/filters';
	import { getSnippetsSchema } from '$lib/logic/snippets/schema';

	let selectedFilters = $state(getSnippetFiltersFromUrl(page.url));

	const snippets = $derived(getSnippets(selectedFilters));

	const updateQuery = () => {
		const searchParams = buildSnippetSearchParams(selectedFilters);
		goto(`?${searchParams.toString()}`, {
			keepFocus: true,
			noScroll: true,
			replaceState: true
		});
	};

	const onFilterChange = (event: Event) => {
		const target = event.target as HTMLInputElement;

		const value = target.value;
		updateSnippetFilters(selectedFilters, value);

		updateQuery();
	};

	const schema = $derived(getSnippetsSchema(snippets));
</script>

<Seo
	title="Code Snippets"
	{schema}
	description="Bite-sized code pieces, utilities, or patterns I often use. Quick to grab, easy to reuse."
	url="/snippets"
	image="/images/banner.png"
/>

<PageIntro
	eyebrow="Reusable little things"
	title="Code snippets I keep coming back to"
	description="Small bits of code I’ve used, reused, and forgotten more times than I’d like to admit."
/>

<section class="border-b border-separator">
	<div class="inner border-x border-separator">
		<div
			class="group -my-px flex h-20 flex-1 items-center border-y border-separator bg-background px-8"
		>
			<Icon
				class="text-xl text-zinc-400 group-focus-within:text-primary"
				icon="solar:magnifer-linear"
			/>
			<input
				class="w-full px-4 transition-all outline-none"
				placeholder="Type something like 'debounce' or 'dark mode toggle' or 'tailwind' or any other thing you can think of (or not)"
				type="text"
				autocomplete="off"
				value={selectedFilters.search}
				oninput={onFilterChange}
				name="search"
				id="search"
			/>
		</div>
		<Snippets {snippets} />
	</div>
</section>

<SectionDivider />