<script lang="ts">
	import Icon from '@iconify/svelte';

	type Props = {
		onSignIn: () => void;
	};

	let { onSignIn }: Props = $props();
</script>

<div class="flex items-center border-t border-separator">
	<p class="px-8">Please sign in first to leave a message.</p>
	<button
		onclick={onSignIn}
		class="ml-auto inline-flex h-14 shrink-0 items-center justify-center gap-2 bg-primary px-4 font-semibold text-white transition-all hover:bg-primary/90 [&_svg]:transition-all hover:[&_svg]:-rotate-35"
	>
		Sign In With
		<Icon icon="tabler:brand-github" class="size-6" />
	</button>
</div>
