<script lang="ts">
	import { ScrollArea } from 'bits-ui';
	import Seo from '$components/seo.svelte';
	import GuestBookHero from '$components/guest-book/hero.svelte';
	import GuestBookPlaceholder from '$components/guest-book/placeholder-panel.svelte';
	import GuestBookMessageList from '$components/guest-book/message-list.svelte';
	import GuestBookMessageForm from '$components/guest-book/message-form.svelte';
	import GuestBookSignIn from '$components/guest-book/sign-in.svelte';
	import SectionDivider from '$components/sections/section-divider.svelte';
	import {
		createGuestBookAuthClient,
		createGuestBookForm,
		getGuestBookSchema
	} from '$lib/logic/guest-book';

	let { data } = $props();

	type GuestBookFormData = {
		message: string;
	};

	const authClient = createGuestBookAuthClient();
	const session = $derived(data.session);

	let form = $state<any>();
	let errors = $state<any>();
	let constraints = $state<any>();
	let enhance = $state<any>();
	let submitting = $state<any>();

	$effect(() => {
		({ form, errors, constraints, enhance, submitting } = createGuestBookForm(data.form));
	});

	const schema = $derived(getGuestBookSchema(data.messages));
</script>

<Seo
	title="Guest Book"
	{schema}
	description="Got something to say? Leave a short message, say hi, or just drop by. I'd love to hear from you."
	url="/guest-book"
	image="/images/banner.png"
/>

<main class="mt-38 border-y border-separator">
	<div class="inner border-x border-separator">
		<div class="grid divide-x divide-separator lg:grid-cols-2">
			<div class="space-y-6">
				<GuestBookHero
					eyebrow="Just say hi, if you feel like it"
					title="Leave a little note before you go"
					description="Just a space for kind strangers, old friends, or curious wanderers to say hello. Drop a message, a thought, or your favorite emoji 🪴"
				/>
				<GuestBookPlaceholder />
			</div>
			<div>
				<ScrollArea.Root>
					<ScrollArea.Viewport class="max-h-[calc(100vh-20rem)] overflow-y-auto p-8">
						<GuestBookMessageList messages={data.messages} />
					</ScrollArea.Viewport>
					<ScrollArea.Scrollbar
						orientation="vertical"
						class="flex w-2.5 touch-none rounded-full border-l border-l-transparent bg-background-2/60 select-none hover:w-3 data-[state=hidden]:animate-out data-[state=hidden]:fade-out-0 data-[state=visible]:animate-in data-[state=visible]:fade-in-0"
					>
						<ScrollArea.Thumb class="flex-1 rounded-full bg-foreground-primary" />
					</ScrollArea.Scrollbar>
					<ScrollArea.Corner />
				</ScrollArea.Root>
				{#if session}
					{#if form && errors && constraints && enhance && submitting}
						<GuestBookMessageForm
							form={$form as GuestBookFormData}
							errors={$errors as { message?: string }}
							constraints={$constraints as { message?: Record<string, unknown> }}
							enhance={enhance}
							submitting={$submitting}
						/>
					{/if}
				{:else}
					<GuestBookSignIn
						onSignIn={() =>
							authClient.signIn.social({
								provider: 'github',
								callbackURL: '/guest-book'
							})}
					/>
				{/if}
			</div>
		</div>
	</div>
</main>

<SectionDivider />