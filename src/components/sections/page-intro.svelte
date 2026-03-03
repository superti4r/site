<script lang="ts">
	type Props = {
		eyebrow: string;
		title: string;
		description?: string;
	};

	let { eyebrow, title, description }: Props = $props();
</script>

<main class="border-b border-separator">
	<div class="inner border-x border-separator px-8 py-8 lg:pt-42 lg:pb-28">
		<div
			class="mx-auto flex flex-col justify-center gap-2 lg:max-w-2xl lg:items-center lg:gap-6 lg:text-center"
		>
			<span class="font-handwriting text-xl text-foreground-text sm:text-2xl">
				{eyebrow}
			</span>
			<h1 class="text-4xl text-balance md:text-5xl">{title}</h1>
			{#if description}
				<p class="text-balance sm:text-lg">
					{description}
				</p>
			{/if}
		</div>
	</div>
</main>
