<script lang="ts">
	import { formatDate } from 'date-fns';
	import { cn } from '$lib/cn';

	type GuestBookMessage = {
		user: { name: string; image?: string | null };
		guestbook: { message: string; createdAt: Date | string };
	};

	let { messages }: { messages: GuestBookMessage[] } = $props();
</script>

<div class="space-y-6">
	{#each messages as message}
		{@const isMe = ['superti4r'].includes(message.user.name)}
		<div class={cn('flex gap-2', isMe && 'flex-row-reverse')}>
			<div class="size-12 shrink-0">
				<img
					class="size-full rounded-xl object-cover"
					src={message.user.image ||
						`https://api.dicebear.com/9.x/fun-emoji/svg?seed=${message.user.name}`}
					alt="{message.user.name} profile picture"
					loading="lazy"
				/>
			</div>
			<div class="mr-auto flex flex-col space-y-2">
				<p class="rounded-xl bg-background-2/60 p-4 text-justify">
					{message.guestbook.message}
				</p>
				<div class={cn('flex items-center gap-2', isMe && 'justify-end')}>
					<span class="text-sm text-foreground-text">
						{formatDate(message.guestbook.createdAt, 'dd MMM yyyy')}
					</span>
					<span class="size-0.5 rounded-full bg-primary"></span>
					<span class="text-sm text-foreground-text">{message.user.name}</span>
				</div>
			</div>
		</div>
	{/each}
</div>
