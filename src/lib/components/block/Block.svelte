<script lang="ts">
	import type { Snippet } from 'svelte';
	import { fade } from 'svelte/transition';

	interface Props {
		children: Snippet;
		errorMessage?: string | null;
		showInfoButton?: boolean;
		onInfoClick?: () => void;
		onDelete?: () => void;
	}

	let {
		children,
		errorMessage = null,
		showInfoButton = false,
		onInfoClick,
		onDelete
	}: Props = $props();

	let deleteHover = $state(false);
	let infoHover = $state(false);
</script>

<div class="block">
	<div class="code-block">
		<form>
			<div class="children-wrapper">{@render children()}</div>
			{#if showInfoButton}
				<button
					class="info"
					onclick={onInfoClick}
					type="button"
					onmouseenter={() => (infoHover = true)}
					onmouseleave={() => (infoHover = false)}
					aria-label="show additional information about this block"
				>
					<i class="ri-information-{infoHover ? 'fill' : 'line'}"></i>
				</button>
			{/if}
			{#if onDelete}
				<button
					class="delete"
					onclick={onDelete}
					type="button"
					onmouseenter={() => (deleteHover = true)}
					onmouseleave={() => (deleteHover = false)}
					aria-label="delete this block"
				>
					<i class="ri-delete-bin-{deleteHover ? 'fill' : 'line'}"></i>
				</button>
			{/if}
		</form>
	</div>
	{#if errorMessage}
		<div class="error-block" transition:fade={{ duration: 100 }}>
			<p>{errorMessage}</p>
		</div>
	{/if}
</div>

<style>
	.block {
		display: flex;
		flex-direction: row;
	}

	.error-block {
		font-family: 'Jetbrains Mono', monospace;
		box-sizing: content-box;
		background-color: hsl(0, 75%, 60%);
		border-top: var(--border-width, 5px) solid hsl(0, 75%, 70%);
		border-left: var(--border-width, 5px) solid hsl(0, 75%, 70%);
		border-right: var(--border-width, 5px) solid hsl(0, 75%, 50%);
		border-bottom: var(--border-width, 5px) solid hsl(0, 75%, 50%);
		color: hsl(0, 0%, 98%);
		padding: 0.25rem 0.5rem;
		position: relative;

		display: flex;
		flex-direction: row;
		align-items: center;
	}

	.code-block {
		display: flex;
		flex-direction: row;
		align-items: center;
		background-color: var(--color-code-block);
		border-top: var(--border-width, 5px) solid var(--color-code-block-light);
		border-left: var(--border-width, 5px) solid var(--color-code-block-light);
		border-right: var(--border-width, 5px) solid var(--color-code-block-dark);
		border-bottom: var(--border-width, 5px) solid var(--color-code-block-dark);
		color: var(--text-color, hsl(0, 0%, 98%));

		padding: 0.25rem 0.5rem;

		font-family: 'Jetbrains Mono', monospace;

		width: fit-content;
	}

	.code-block .delete {
		all: unset;
		display: grid;
		align-items: center;
		font-size: 1.5rem;
		margin-left: 0.75rem;

		transition: color 100ms ease-in;
	}

	.code-block .delete:hover {
		color: hsl(0, 70%, 60%);
	}

	.code-block .info {
		all: unset;
		display: grid;
		align-items: center;
		font-size: 1.5rem;
		margin-left: 0.75rem;

		transition: color 100ms ease-in;
	}

	.code-block .info:hover {
		color: hsl(0, 0%, 80%);
	}

	:global(input[type='number']::-webkit-inner-spin-button),
	:global(input[type='number']::-webkit-outer-spin-button) {
		-webkit-appearance: none;
		-moz-appearance: none;
		appearance: none;
		margin: 0;
	}

	:global(.code-block input[type='text'], .code-block input[type='number']) {
		border: none;
		width: 2rem;
		text-align: center;
		border-radius: 1rem;
		padding: 0.25rem;
		font-size: 1rem;
	}

	form {
		font-size: 1rem;
		white-space: nowrap;
		display: flex;
		flex-direction: row;
		align-items: flex-start;
		gap: 0.25rem;
	}

	.children-wrapper {
		font-size: 1rem;
		white-space: nowrap;
		display: flex;
		flex-direction: row;
		align-items: center;
		gap: 0.25rem;
	}
</style>
