<script lang="ts">
	import Block from './Block.svelte';

	interface Props {
        setting: string;
		value: number;
	}

	let { setting, value = $bindable() }: Props = $props();
</script>

<Block
    --color-code-block="hsl(0, 0%, 60%)"
    --color-code-block-light="hsl(0, 0%, 70%)"
    --color-code-block-dark="hsl(0, 0%, 50%)"
    --border-width="8px"
>
	{setting}
	<input type="number" bind:value={value}>
</Block>
