<script lang="ts">
	import Seo from '$components/seo.svelte';
	import PageIntro from '$components/sections/page-intro.svelte';
	import SectionDivider from '$components/sections/section-divider.svelte';
	import { goals, getProgress } from '$contents/goals';
	import { cn } from '$lib/cn';
	import { getGoalsSchema } from '$lib/logic/goals/schema';
	import Icon from '@iconify/svelte';

	const progress = getProgress();

	const schema = getGoalsSchema(goals);
</script>

<Seo
	title="Life Goals"
	{schema}
	description="A living list of personal goals I want to achieve, from career dreams and skills I want to master, to small joys and long-term values I hope to live by."
	url="/goals"
	image="/images/banner.png"
/>

<PageIntro
	eyebrow="An evolving list of “maybe someday.”"
	title="A lifelong collection of things I’d love to feel"
/>

<section class="border-b border-separator">
	<div class="inner border-x border-separator">
		<div class="flex w-full items-center justify-between px-8 py-4">
			<span class="text-foreground-text">Overall Progress</span>
			<span class="text-sm font-semibold text-foreground-text">
				{progress.done}/{progress.total} ({progress.percentage}%)
			</span>
		</div>
		<div class="h-4 w-full overflow-hidden border-t border-separator bg-background-2/30">
			<div class="h-full bg-primary" style="width: {progress.percentage}%;"></div>
		</div>
	</div>
</section>

<section class="border-b border-separator">
	<div class="inner border-x border-separator">
		<div class="grid md:grid-cols-2">
			{#each goals as goal}
				<div class="-m-px flex h-12 items-center gap-2 border border-separator bg-background">
					<div
						class={cn(
							'grid aspect-square h-full shrink-0 place-items-center border-r border-separator text-foreground-text',
							goal.achieved && 'bg-emerald-600 text-white'
						)}
					>
						<Icon icon={goal.achieved ? 'tabler:check' : 'tabler:x'} />
					</div>
					<span class="p-2 text-foreground-text">{goal.goal}</span>
				</div>
			{/each}
		</div>
	</div>
</section>

<SectionDivider />