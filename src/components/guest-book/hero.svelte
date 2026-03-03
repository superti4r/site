<script lang="ts">
	type Props = {
		title: string;
		description: string;
		eyebrow: string;
	};

	let { eyebrow, title, description }: Props = $props();
</script>

<div class="flex flex-col gap-6 p-8">
	<span class="font-handwriting text-xl text-foreground-text sm:text-2xl">{eyebrow}</span>
	<h1 class="text-4xl text-balance md:text-5xl">{title}</h1>
	<p class="text-balance sm:text-lg">
		{description}
	</p>
</div>
