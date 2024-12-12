<script lang="ts">
	import clickOutside from '$lib/actions/clickOutside';
	import type { Snippet } from 'svelte';

	interface Props {
		dialog?: HTMLDialogElement;
		children?: Snippet;
		onClose: () => void;
	}

	let { dialog = $bindable(), children, onClose }: Props = $props();

	$effect(() => {
		dialog!.showModal();
		(document.activeElement as HTMLElement | null)?.blur();
	});
</script>

<dialog bind:this={dialog} onclose={onClose}>
	{@render children?.()}
</dialog>

<style>
	dialog {
		border: none;
		font-family: 'Jetbrains Mono', monospace;
		width: clamp(16rem, 48%, 48rem);
		padding: 0.5rem;
        box-sizing: border-box;
		overflow: visible;
		background-color: hsl(0, 0%, 95%);

		display: flex;
		flex-direction: column;

		max-height: clamp(4rem, 60%, 32rem);
		overflow-y: auto;

		background-color: var(--color-bg-3);
		border-left: 8px solid var(--color-bg-3-light);
		border-top: 8px solid var(--color-bg-3-light);
		border-right: 8px solid var(--color-bg-3-dark);
		border-bottom: 8px solid var(--color-bg-3-dark);
	}

	/* width */
	dialog::-webkit-scrollbar {
		width: 0.5rem;
		height: 0.5rem;
	}

	/* Track */
	dialog::-webkit-scrollbar-track {
		background: var(--color-bg-3-track);
	}

	/* Handle */
	dialog::-webkit-scrollbar-thumb {
		background: var(--color-bg-3-light);
	}

	/* Handle on hover */
	dialog::-webkit-scrollbar-thumb:hover {
		background: var(--color-bg-3-thumb-hover);
	}

	dialog[open]::backdrop {
		background-color: rgba(0, 0, 0, 0.25);
	}

	:global(body:has(:global(dialog[open]))) {
		overflow-y: hidden;
	}
</style>
