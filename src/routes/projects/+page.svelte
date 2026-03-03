<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/state';
	import Projects from '$components/features/projects.svelte';
	import PageIntro from '$components/sections/page-intro.svelte';
	import SectionDivider from '$components/sections/section-divider.svelte';
	import Seo from '$components/seo.svelte';
	import { getCategories, getProjects, getTags } from '$contents/projects';
	import {
		buildProjectSearchParams,
		createProjectFiltersList,
		getProjectFiltersFromUrl,
		updateProjectFilters
	} from '$lib/logic/projects/filters';
	import { getProjectsSchema } from '$lib/logic/projects/schema';
	import Icon from '@iconify/svelte';

	let selectedFilters = $derived(getProjectFiltersFromUrl(page.url));

	const projects = $derived(getProjects(selectedFilters));
	const categories = getCategories();
	const tags = getTags();

	const filtersList = createProjectFiltersList(categories, tags);

	const updateQuery = () => {
		const searchParams = buildProjectSearchParams(selectedFilters);
		goto(`?${searchParams.toString()}`, {
			keepFocus: true,
			noScroll: true,
			replaceState: true
		});
	};

	const onFilterChange = (event: Event, type: keyof typeof selectedFilters) => {
		const target = event.target as HTMLInputElement;

		const value = target.value;
		updateProjectFilters(selectedFilters, type, value, target.checked);

		updateQuery();
	};

	const schema = $derived(getProjectsSchema(projects));
</script>

<Seo
	title="Projects"
	{schema}
	description="A collection of things I’ve built — from polished apps to half-finished ideas. Mostly web stuff."
	url="/projects"
	image="/images/banner.png"
/>

<PageIntro
	eyebrow="Things I’ve built — or tried to."
	title="Projects, experiments & digital leftovers"
	description="Not every idea becomes a masterpiece — but some are worth building anyway. Here’s a mix of things I’ve shipped, tweaked, or just needed to get out of my head."
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
				placeholder="Search projects... or just type something weird"
				type="text"
				autocomplete="off"
				value={selectedFilters.search}
				oninput={(e) => onFilterChange(e, 'search')}
				name="search"
				id="search"
			/>
		</div>
		<div class="grid-cols-2 sm:grid">
			<Projects {projects} />
		</div>
	</div>
</section>

<SectionDivider />