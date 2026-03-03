<script lang="ts">
	import '@fontsource-variable/syne';
	import '@fontsource/mynerve';
	import '../app.css';

	import NavigationBar from '$components/layouts/navigation-bar.svelte';
	import Footer from '$components/layouts/footer.svelte';
	import { Toaster } from 'svelte-french-toast';
	import { page } from '$app/state';
	import { tick } from 'svelte';
	import { dev } from '$app/environment';
	import { postVisit, registerScrollListener } from '$lib/logic/layout';

	let { children } = $props();

	let scroll = $state<number>();

	$effect(() => {
		if (page.status === 200 && !dev) {
			postVisit(page.url.pathname);
		}

		const cleanupPromise = tick().then(() =>
			registerScrollListener((percent) => {
				scroll = percent;
			})
		);

		return () => {
			cleanupPromise.then((cleanup) => cleanup());
		};
	});
</script>

<div class="fixed top-0 left-0 z-100 h-1 w-full border-b border-separator bg-transparent">
	<div
		class="h-full w-0 bg-primary transition-all duration-100 ease-out"
		style="width: {scroll}%"
	></div>
</div>
<NavigationBar />
{@render children()}
<Footer />
<Toaster />