<script lang="ts">
	import Seo from '$components/seo.svelte';
	import { origin } from '$lib/url';
	import Icon from '@iconify/svelte';
	import { formatDistance } from 'date-fns';

	let { data } = $props();

	const schema = {
		'@context': 'https://schema.org',
		'@type': 'Person',
		name: 'Bachtiar Dwi Pramudi (superti4r)',
		url: origin('/about'),
		image: origin('/images/icon.png'),
		sameAs: [
			'https://github.com/superti4r',
			'https://twitter.com/supereverydays',
			'https://instagram.com/superti4r',
			'https://linkedin.com/in/supertiar'
		],
		jobTitle: 'Fullstack Web Developer',
		description:
			'As a Software Engineer with expertise in web development, I am creating innovative and user-friendly solutions that real-world problems. I am currently pursuing my S.Tr.Kom degree in Informatic Engineering at the Jember State Polytechnic, where i honed my skills in Web Development.',
		knowsAbout: [
			'Web Development',
			'Fullstack Development',
            'PHP',
            'Laravel',
			'JavaScript',
            'TypeScript',
            'Vue.js',
			'Svelte',
			'React.js',
			'Tailwind CSS',
			'CSS',
		],
		alumniOf: {
			'@type': 'EducationalOrganization',
			name: 'Jember State Polytechnic',
		}
	};
</script>

<Seo
	title="About"
	{schema}
	description="As a Software Engineer with expertise in web development, I am creating innovative and user-friendly solutions that real-world problems. I am currently pursuing my S.Tr.Kom degree in Informatic Engineering at the Jember State Polytechnic, where i honed my skills in Web Development."
	url="/about"
	image="/images/banner.png"
/>

<main class="border-b border-separator">
	<div class="inner border-x border-separator px-8 py-8 lg:pt-42 lg:pb-28">
		<div
			class="mx-auto flex flex-col justify-center gap-2 lg:max-w-2xl lg:items-center lg:gap-6 lg:text-center"
		>
			<span class="font-handwriting text-xl text-foreground-text sm:text-2xl">
				A little context, if you’re curious
			</span>
			<h1 class="text-4xl text-balance md:text-5xl">Who I am, and why this site exists</h1>
		</div>
	</div>
</main>

<section class="border-b border-separator">
	<div class="inner border-x border-separator">
		<div class="flex flex-col items-center sm:flex-row">
			<div
				class="prose max-w-none p-8 prose-zinc sm:prose-lg prose-headings:font-normal zinc:prose-invert black:prose-invert"
			>
				<h2>Short Bio</h2>
				<p>
					As a Software Engineer with expertise in web development, I am creating innovative and user-friendly solutions 
                    that real-world problems.
				</p>
				<p>
					I am currently pursuing my S.Tr.Kom degree in Informatic Engineering 
                    at the Jember State Polytechnic, where i honed my skills in Web Development.
				</p>
			</div>
			<div class="self-stretch">
				<img
					class="size-full object-cover"
					src="https://avatars.githubusercontent.com/u/142956484?v=4"
					alt=""
				/>
			</div>
		</div>
	</div>
</section>

<section class="border-b border-separator">
	<div class="inner border-x border-separator">
		<h2 class="p-8 text-center text-3xl">Things I’ve Been Part Of</h2>
		<div class="-mr-[0.5px] -mb-[0.5px] grid sm:grid-cols-2">
			<div
				class="-mx-[0.5px] -my-[0.5px] flex flex-col items-start border border-separator bg-background p-8"
			>
				<img class="h-10" src="https://jtinova.com/static/logo-full.png" alt="JTI Innovation Logo" />
				<h3 class="my-4 text-xl">Full-Stack Web Developer</h3>
				<p>
					At JTI Innovation, I worked on building an executive education LMS platform for state-owned
					enterprises. One of the key features I developed was an AI-powered assistant integrated
					into the entire ecosystem—covering assessments, personalized reports, and a fully adaptive
					learning experience. I also set up code quality standards across projects to enforce
					consistent commits and maintain a clean codebase.
				</p>
				<div class="mt-auto flex w-full items-center justify-between pt-4">
					<span class="text-dark">JTI Innovation</span>
					<span class="text-foreground-text">Jan 2026 - Present</span>
				</div>
			</div>
			<div
				class="-mx-[0.5px] -my-[0.5px] flex flex-col items-start border border-separator bg-background p-8"
			>
				<img
					class="h-10"
					src="https://sinergiteknokarya.com/assets/img/logo.png"
					alt="CV Sinergi Teknokarya Logo"
				/>
				<h3 class="my-4 text-xl">Full-Stack Web Developer</h3>
				<p>
					During my time at CV Sinergi Teknokarya, I helped develop a backoffice system tailored for hospitals. I
					contributed to a full migration of their database infrastructure from MySQL to PostgreSQL
					and worked on creating an integrated system to support public health centers (puskesmas)
					in streamlining their operations.
				</p>
				<div class="mt-auto flex w-full items-center justify-between pt-4">
					<span class="text-dark">CV Sinergi Teknokarya</span>
					<span class="text-foreground-text">Okt 2025 - Present</span>
				</div>
			</div>
		</div>
	</div>
</section>

{#if data.commits.length > 0}
	<section class="border-b border-separator">
		<div class="inner border-x border-separator">
			<h2 class="p-6 text-center text-3xl">Recently Touched</h2>
			<div class="relative grid border-y border-separator p-6">
				{#each data.commits as commit (commit.sha)}
					<div class="relative pl-10 not-last:pb-4">
						<div class="absolute top-6 -bottom-2 left-2.5 w-1 bg-primary"></div>
						<div class="absolute top-1 left-0 size-6 rounded-full bg-primary"></div>
						<div
							class="mt-1.5 mb-4 flex flex-col-reverse justify-between sm:mb-1 sm:flex-row sm:items-center"
						>
							<span class="text-xs break-all text-foreground-text sm:text-sm"
								>sha: {commit.sha}</span
							>
							<span class="text-xs text-foreground-text sm:text-sm">
								Changed by: <span class="text-primary">{commit.commit.committer.name}</span>
							</span>
						</div>
						<div class="flex flex-col justify-between gap-1 sm:flex-row sm:items-center">
							<span class="text-lg sm:text-xl">
								<span class="mr-1">{commit.commit.message.slice(0, 2)}</span>
								<span class="text-primary">
									{commit.commit.message.slice(2)}
								</span>
							</span>
							<a
								href={commit.html_url}
								target="_blank"
								rel="noopener noreferrer"
								class="hover:text-dark flex items-center gap-2 text-foreground-text transition-all hover:underline"
							>
								See Changes
								<Icon icon="solar:arrow-right-up-linear" class="size-4" />
							</a>
						</div>
						<span class="mt-4 block text-sm text-foreground-text sm:mt-1">
							{formatDistance(commit.commit.author.date, new Date(), {
								addSuffix: true
							})}
						</span>
					</div>
				{/each}
			</div>
			<a
				href="https://github.com/superti4r/superti4r/commits/main"
				target="_blank"
				rel="noopener noreferrer"
				class="group relative flex w-full items-center justify-between px-6 py-4 text-lg font-semibold text-foreground-text transition-all duration-300 hover:text-white"
			>
				<div
					class="absolute inset-0 -z-10 w-0 bg-primary transition-all duration-300 group-hover:w-full"
				></div>
				See All
				<Icon
					class="text-3xl transition-all duration-300 group-hover:-rotate-45"
					icon="guidance:left-arrow"
				/>
			</a>
		</div>
	</section>
{/if}

<div class="border-b border-separator">
	<div class="inner border-x border-separator py-28"></div>
</div>