<script lang="ts">
	import { runHighlight } from '$lib/logic/highlight';
	import { onMount } from 'svelte';
	let { lang, code }: { lang: string; code: string } = $props();

	onMount(() => {
		runHighlight();
	});
</script>

<div class="shj-lang-{lang}">{code}</div>