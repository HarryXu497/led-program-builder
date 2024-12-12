<script lang="ts">
	import clickOutside from '$lib/actions/clickOutside';
	import infoDialog from '$lib/state/infoDialog.svelte';
	import Block from './Block.svelte';
	import ResetBlock from './ResetBlock.svelte';

	interface Props {
		showInfoButton?: boolean;
		onDelete?: () => void;
	}

	let { onDelete, showInfoButton }: Props = $props();
</script>

<Block
	--color-code-block="var(--color-led)"
	--color-code-block-light="var(--color-led-light)"
	--color-code-block-dark="var(--color-led-dark)"
	onInfoClick={() => (infoDialog.value = modal)}
	{onDelete}
	{showInfoButton}
>
	<p class="block-content">reset all LEDs</p>
</Block>

{#snippet modal()}
	<div class="info-snippet" use:clickOutside onclick_outside={() => (infoDialog.value = undefined)}>
		<div class="info-snippet__header">
			<h1>Reset Block</h1>
			<button
				class="info-snippet__header__close"
				onclick={() => (infoDialog.value = undefined)}
				aria-label="close modal"
			>
				<i class="ri-close-line"></i>
			</button>
		</div>
		<p>
			<b>This block turns all the LEDs off.</b>
		</p>
		<h2>Examples</h2>
		<div class="info-snippet__examples">
			<div class="info-snippet__examples__example">
				<p>To turn the LEDs off:</p>
				<ResetBlock />
			</div>
			<div class="hr"></div>
			<div class="info-snippet__examples__example">
				<p>Do I need more examples?</p>
			</div>
		</div>
	</div>
{/snippet}

<style>
	.block-content {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		height: 27px;
	}
</style>
