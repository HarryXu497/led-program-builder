<script lang="ts">
	import Block from './Block.svelte';

    interface Props {
		onDelete?: () => void;
	}

	let { onDelete }: Props = $props();
</script>

<Block
    --color-code-block="var(--color-led)"
    --color-code-block-light="var(--color-led-light)"
    --color-code-block-dark="var(--color-led-dark)"
    {onDelete}
>
	<p>reset all LEDs</p>
</Block>

<style>
    p {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        height: 27px;
    }
</style>