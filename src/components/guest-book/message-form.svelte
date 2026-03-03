<script lang="ts">
	import Icon from '@iconify/svelte';
	import type { Action } from 'svelte/action';

	type Props = {
		form: { message: string };
		errors: { message?: string };
		constraints: { message?: Record<string, unknown> };
		enhance: Action<HTMLFormElement, unknown>;
		submitting: boolean;
	};

	let { form, errors, constraints, enhance, submitting }: Props = $props();
	const messageConstraints = $derived(constraints.message ?? {});
</script>

<form use:enhance method="POST" class="flex items-center border-t border-separator">
	<input
		class="h-14 w-full px-8 transition-all outline-none disabled:cursor-not-allowed disabled:bg-white"
		placeholder="Say hi, share a link, or leave a riddle. Type here..."
		type="text"
		name="message"
		disabled={submitting}
		aria-invalid={errors.message ? 'true' : undefined}
		bind:value={form.message}
		{...messageConstraints}
	/>
	<button
		class="inline-flex size-14 shrink-0 items-center justify-center bg-primary text-white shadow-sm transition-all hover:bg-primary/90 focus-visible:ring-primary/40 focus-visible:ring-offset-background active:translate-y-px focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none [&_svg]:transition-all hover:[&_svg]:-rotate-35"
	>
		<Icon icon="solar:plain-linear" class="size-6" />
	</button>
</form>
