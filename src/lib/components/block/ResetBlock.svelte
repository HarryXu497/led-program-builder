<script lang="ts">
	import Block from './Block.svelte';

    interface Props {
		onDelete?: () => void;
	}

	let { onDelete }: Props = $props();
</script>

<Block
    --color-code-block="hsl(228, 66%, 58%)"
    --color-code-block-light="hsl(228, 66%, 68%)"
    --color-code-block-dark="hsl(228, 66%, 48%)"
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