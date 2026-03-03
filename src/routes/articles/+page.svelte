<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/state';
	import Articles from '$components/features/articles.svelte';
	import PageIntro from '$components/sections/page-intro.svelte';
	import SectionDivider from '$components/sections/section-divider.svelte';
	import Seo from '$components/seo.svelte';
	import { getArticles, getCategories, getTags } from '$contents/articles/utils';
	import {
		buildArticleSearchParams,
		createArticleFiltersList,
		getArticleFiltersFromUrl,
		setArticleLanguage,
		updateArticleFilters
	} from '$lib/logic/articles/filters';
	import { getArticlesSchema } from '$lib/logic/articles/schema';
	import { cn } from '$lib/cn';
	import Icon from '@iconify/svelte';

	let selectedFilters = $derived(getArticleFiltersFromUrl(page.url));

	let articles = $derived(getArticles(selectedFilters));

	const categories = getCategories();
	const tags = getTags();

	const filtersList = createArticleFiltersList(categories, tags);

	const updateQuery = () => {
		const searchParams = buildArticleSearchParams(selectedFilters);
		goto(`?${searchParams.toString()}`, { replaceState: true, keepFocus: true, noScroll: true });
	};

	const onFilterChange = (event: Event, type: keyof typeof selectedFilters) => {
		const target = event.target as HTMLInputElement;
		const value = target.value;

		if (type !== 'lang') {
			updateArticleFilters(selectedFilters, type, value, target.checked);
		}

		updateQuery();
	};

	const onSwitchLanguage = (lang: 'en' | 'id') => {
		setArticleLanguage(selectedFilters, lang);
		updateQuery();
	};

	let isEnglish = $derived(selectedFilters.lang === 'en');

	const schema = $derived(getArticlesSchema(articles));
</script>

<Seo
	title="Articles"
	{schema}
	description="Long-form thoughts, reflections, and lessons I’ve written down. Mostly about code, learning, and things I find worth sharing."
	url="/articles"
	image="/images/banner.png"
/>

<PageIntro
	eyebrow="Things I needed to write down"
	title="Notes, rambles, and things I didn’t want to forget"
	description="I write mostly to understand things better. If it helps someone else, that’s a bonus."
/>

<section class="border-b border-separator">
	<div class="inner border-x border-separator">
		<div class="flex flex-col gap-4 p-8">
			{#each filtersList as filter}
				<span class="text-foreground-text">{filter.title}</span>
				<div class="flex flex-wrap gap-4">
					{#each filter.options as option}
						{@const isChecked = selectedFilters[filter.type].includes(option)}
						<div class="flex items-center gap-2">
							<input
								type="checkbox"
								onchange={(e) => onFilterChange(e, filter.type)}
								value={option}
								checked={isChecked}
								id="{filter.type}-{option}"
								class="peer hidden"
							/>
							<label
								for="{filter.type}-{option}"
								class="inline-flex size-6 items-center justify-center rounded-md border border-border transition-all duration-150 ease-in-out peer-checked:border-zinc-800 peer-checked:bg-primary active:scale-[0.98]"
							>
								{#if isChecked}
									<Icon
										icon="lineicons:minus"
										class="size-4 {isChecked && 'text-foreground-button'}"
									/>
								{/if}
							</label>
							<label
								for="{filter.type}-{option}"
								class="text-foreground-text peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
							>
								{option}
							</label>
						</div>
					{/each}
				</div>
			{/each}
		</div>
		<div
			class="group -mb-px flex h-20 flex-1 items-center border-y border-separator bg-background px-8"
		>
			<Icon
				class="text-xl text-zinc-400 group-focus-within:text-primary"
				icon="solar:magnifer-linear"
			/>
			<input
				class="w-full px-4 transition-all outline-none"
				placeholder="Search articles title... or anything anyway"
				type="text"
				autocomplete="off"
				value={selectedFilters.search}
				oninput={(e) => onFilterChange(e, 'search')}
				name="search"
				id="search"
			/>
		</div>
		<div class="grid grid-cols-2 divide-x divide-separator">
			<button
				onclick={() => onSwitchLanguage('en')}
				class={cn(
					'p-4 text-foreground-text transition-all hover:bg-primary/10',
					isEnglish && 'bg-primary text-white hover:bg-primary/90'
				)}
			>
				English Articles
			</button>
			<button
				onclick={() => onSwitchLanguage('id')}
				class={cn(
					'p-4 text-foreground-text transition-all hover:bg-primary/10',
					!isEnglish && 'bg-primary text-white hover:bg-primary/90'
				)}
			>
				Artikel Berbahasa Indonesia
			</button>
		</div>
		<div class="grid sm:grid-cols-2 lg:grid-cols-1">
			<Articles {articles} />
		</div>
	</div>
</section>

<SectionDivider />