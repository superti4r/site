<script lang="ts">
	import Seo from '$components/seo.svelte';
	import PageIntro from '$components/sections/page-intro.svelte';
	import SectionDivider from '$components/sections/section-divider.svelte';
	import { getVisitsSchema } from '$lib/logic/visits/schema';

	let { data } = $props();

	const schema = getVisitsSchema();
</script>

<Seo
	title="Page Visits"
	{schema}
	description="A transparent view of how often each page on this site has been visited."
	url="/visits"
	image="/images/banner.png"
/>

<PageIntro
	eyebrow="Tiny peek behind the curtain"
	title="Which pages got the most love?"
/>

<section class="border-b border-separator">
	<div class="inner -mb-px border-x border-separator">
		<table class="w-full table-auto">
			<thead>
				<tr>
					<th class="border-r border-b border-separator px-8 py-4 font-semibold text-zinc-600">
						Route
					</th>
					<th class="border-b border-separator px-8 py-4 font-semibold text-zinc-600">Visits</th>
				</tr>
			</thead>
			<tbody>
				{#each data.visits as visit}
					<tr>
						<td class="border-r border-b border-separator px-8 py-4 text-zinc-600">
							<a class="break-all hover:underline" href={visit.route}>{visit.route}</a>
						</td>
						<td class="border-b border-separator px-8 py-4 text-center text-zinc-600">
							{visit.count}
						</td>
					</tr>
				{/each}
			</tbody>
		</table>
	</div>
</section>

<SectionDivider />