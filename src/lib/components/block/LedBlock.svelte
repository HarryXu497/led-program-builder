<script lang="ts">
	import type LedBlockModel from '$lib/models/LedBlock.svelte';
	import Block from './Block.svelte';

	interface Props {
		model: LedBlockModel;
		onDelete?: () => void;
	}

	let { model, onDelete }: Props = $props();
</script>

<Block
	--color-code-block="hsl(228, 66%, 58%)"
	--color-code-block-light="hsl(228, 66%, 68%)"
	--color-code-block-dark="hsl(228, 66%, 48%)"
	{onDelete}
	errorMessage={model.errorMessage}
>
	set LED
	<input type="number" bind:value={model.values[0]} />
	to color
	<input type="number" bind:value={model.values[1]} />
	<input type="number" bind:value={model.values[2]} />
	<input type="number" bind:value={model.values[3]} />
</Block>
