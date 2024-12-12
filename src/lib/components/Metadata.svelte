<script lang="ts">
	import { dev } from '$app/environment';
	import type { Snippet } from 'svelte';

	interface Props {
		title: string;
		description: string;
		url: string;
		children?: Snippet;
	}

	let { title, description, url, children }: Props = $props();
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:type" content="website" />
	{#if !dev}
		<meta property="og:url" content={url} />
	{/if}

	{@render children?.()}
</svelte:head>
