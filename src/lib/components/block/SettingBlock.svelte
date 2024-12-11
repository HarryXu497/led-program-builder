<script lang="ts">
	import Block from './Block.svelte';

	interface Props {
        setting: string;
		value: number;
	}

	let { setting, value = $bindable() }: Props = $props();
</script>

<Block
    --color-code-block="var(--color-bg-1)"
    --color-code-block-light="var(--color-bg-1-light)"
    --color-code-block-dark="var(--color-bg-1-dark)"
    --border-width="8px"
>
	{setting}
	<input type="number" bind:value={value}>
</Block>
