<script lang="ts">
	type Props = {
		onSignOut: () => void;
	};

	let { onSignOut }: Props = $props();
</script>

<div class="flex items-center border-t border-separator">
	<p class="px-8">You are signed in.</p>
	<button
		onclick={onSignOut}
		class="ml-auto inline-flex h-14 shrink-0 items-center justify-center gap-2 bg-primary px-4 font-semibold text-white shadow-sm transition-all hover:bg-primary/90 focus-visible:ring-primary/40 focus-visible:ring-offset-background active:translate-y-px focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none"
	>
		Log out
	</button>
</div>
