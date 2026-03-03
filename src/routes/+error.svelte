<script lang="ts">
	import { page } from '$app/state';
	import Icon from '@iconify/svelte';
	import { getErrorCopy } from '$lib/logic/error';

	const status = page.status;

	const { title, message } = getErrorCopy(status);
</script>

<div class="border-b border-separator">
	<div class="inner flex min-h-dvh flex-col items-center justify-center border-x border-separator">
		<h1 class="font-sans text-8xl font-black text-primary">{status}</h1>
		<h2 class="mt-2 text-3xl font-bold text-zinc-800">{title}</h2>
		<span class="my-8 max-w-xl text-center text-lg text-balance text-zinc-600">{message}</span>
		<a
			href="/"
			class="group/button text-dark inline-flex h-14 items-center gap-2 rounded-xl border border-zinc-800 px-4 font-semibold transition-all hover:bg-primary hover:text-white [&_svg]:transition-all hover:[&_svg]:-rotate-35"
		>
			Back to home
			<div
				class="group-hover/button:text-dark grid size-8 place-items-center rounded-lg border border-zinc-700 group-hover/button:bg-white"
			>
				<Icon icon="solar:arrow-left-outline" class="size-4" />
			</div>
		</a>
	</div>
</div>