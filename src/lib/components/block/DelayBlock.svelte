<script lang="ts">
	import type DelayBlockModel from '$lib/models/DelayBlock.svelte';
	import Block from './Block.svelte';

	interface Props {
		model: DelayBlockModel;
		onDelete?: () => void;
	}

	let { model, onDelete }: Props = $props();
</script>

<Block
	--color-code-block="var(--color-delay)"
	--color-code-block-light="var(--color-delay-light)"
	--color-code-block-dark="var(--color-delay-dark)"
	{onDelete}
	errorMessage={model.errorMessage}
>
	delay for
	<input type="text" bind:value={model.values[0]} />
	ms
</Block>
