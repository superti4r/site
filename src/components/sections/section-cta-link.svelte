<script lang="ts">
	import Icon from '@iconify/svelte';

	type Props = {
		href: string;
		label: string;
		icon?: string;
	};

	let { href, label, icon = 'guidance:left-arrow' }: Props = $props();
</script>

<a
	href={href}
	class="group relative flex w-full items-center justify-between px-6 py-4 text-lg font-semibold text-foreground-text transition-all duration-300 hover:text-foreground-button"
>
	<div class="absolute inset-0 -z-10 w-0 bg-primary transition-all duration-300 group-hover:w-full"></div>
	{label}
	<Icon class="text-3xl transition-all duration-300 group-hover:-rotate-45" icon={icon} />
</a>
