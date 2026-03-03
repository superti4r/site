<script lang="ts">
	import Icon from '@iconify/svelte';

	type Props = {
		onSignInGithub: () => void;
		onSignInGoogle: () => void;
	};

	let { onSignInGithub, onSignInGoogle }: Props = $props();
</script>

<div class="flex flex-col border-t border-separator">
	<p class="px-8 py-4">Please sign in first to leave a message.</p>
	<div class="flex flex-col gap-3 border-t border-separator px-8 py-4 sm:flex-row">
		<button
			onclick={onSignInGithub}
			class="inline-flex h-12 flex-1 items-center justify-center gap-2 bg-primary px-4 font-semibold text-white shadow-sm transition-all hover:bg-primary/90 focus-visible:ring-primary/40 focus-visible:ring-offset-background active:translate-y-px focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none [&_svg]:transition-all hover:[&_svg]:-rotate-35"
		>
			Sign in with GitHub
			<Icon icon="tabler:brand-github" class="size-5" />
		</button>
		<button
			onclick={onSignInGoogle}
			class="inline-flex h-12 flex-1 items-center justify-center gap-2 border border-border bg-background px-4 font-semibold text-foreground-primary shadow-sm transition-all hover:bg-primary/10 focus-visible:ring-primary/40 focus-visible:ring-offset-background active:translate-y-px focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none"
		>
			Sign in with Google
			<Icon icon="tabler:brand-google" class="size-5" />
		</button>
	</div>
</div>
