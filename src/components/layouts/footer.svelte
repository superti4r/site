<script lang="ts">
	import Icon from '@iconify/svelte';
</script>

<footer>
	<div class="inner border-x border-separator">
		<div class="grid grid-cols-2 gap-8 p-8 sm:grid-cols-3 md:grid-cols-6">
			<div class="col-span-2 flex flex-col gap-2 sm:col-span-3">
				<span class="text-2xl text-foreground-primary">superti4r</span>
				<p>Thanks for scrolling this far. You’re rare.</p>
				<div class="flex gap-2">
					<a
						class="text-foreground-text transition-all hover:text-primary"
						href="mailto:bchtrrprmd@gmail.com"
						aria-label="E-Mail"
						target="_blank"
						rel="noopener noreferrer"
					>
						<Icon class="size-6" icon="iconoir:at-sign" />
					</a>
					<a
						class="text-foreground-text transition-all hover:text-primary"
						href="https://www.instagram.com/superti4r/"
						aria-label="Instagram"
						target="_blank"
						rel="noopener noreferrer"
					>
						<Icon class="size-6" icon="iconoir:instagram" />
					</a>
					<a
						class="text-foreground-text transition-all hover:text-primary"
						href="https://github.com/superti4r"
						aria-label="Github"
						target="_blank"
						rel="noopener noreferrer"
					>
						<Icon class="size-6" icon="iconoir:github" />
					</a>
					<a
						class="text-foreground-text transition-all hover:text-primary"
						href="https://x.com/supereverydays"
						aria-label="X/Twitter"
						target="_blank"
						rel="noopener noreferrer"
					>
						<Icon class="size-6" icon="iconoir:x" />
					</a>
					<a
						class="text-foreground-text transition-all hover:text-primary"
						href="https://www.linkedin.com/in/supertiar"
						aria-label="LinkedIn"
						target="_blank"
						rel="noopener noreferrer"
					>
						<Icon class="size-6" icon="iconoir:linkedin" />
					</a>
				</div>
			</div>
			<div class="flex flex-col gap-4">
				<span class="font-medium text-foreground-primary/80">Explore</span>
				<nav class="flex flex-col gap-1">
					<a class="text-foreground-text hover:text-primary" href="/">Home</a>
					<a class="text-foreground-text hover:text-primary" href="/projects">Projects</a>
					<a class="text-foreground-text hover:text-primary" href="/articles">Articles</a>
					<a class="text-foreground-text hover:text-primary" href="/snippets">Snippets</a>
					<a class="text-foreground-text hover:text-primary" href="/guest-book">Guestbook</a>
				</nav>
			</div>
			<div class="flex flex-col gap-4">
				<span class="font-medium text-foreground-primary/80">Personal</span>
				<nav class="flex flex-col gap-1">
					<a class="text-foreground-text hover:text-primary" href="/about">About</a>
					<a class="text-foreground-text hover:text-primary" href="/goals">Goals</a>
				</nav>
			</div>
			<div class="flex flex-col gap-4">
				<span class="font-medium text-foreground-primary/80">Meta</span>
				<nav class="flex flex-col gap-1">
					<a class="text-foreground-text hover:text-primary" href="/attributions">Attribution</a>
					<a class="text-foreground-text hover:text-primary" href="/sitemap.xml">Sitemap</a>
					<a class="text-foreground-text hover:text-primary" href="/visits">Visits</a>
				</nav>
			</div>
		</div>
		<p class="border-t border-separator px-8 py-4 text-center text-sm">
			© 2025 superti4r. All rights reserved.
		</p>
	</div>
</footer>