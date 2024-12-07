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
	--color-code-block="hsl(271, 59%, 55%)"
	--color-code-block-light="hsl(271, 59%, 65%)"
	--color-code-block-dark="hsl(271, 59%, 45%)"
	{onDelete}
	errorMessage={model.errorMessage}
>
	delay for
	<input type="number" bind:value={model.values[0]} />
	ms
</Block>
