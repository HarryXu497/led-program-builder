<script lang="ts">
	import type DelayBlockModel from "$lib/models/DelayBlock.svelte";
    import Block from "./Block.svelte";

    interface Props {
        model: DelayBlockModel;
    }

    let { model }: Props = $props();
</script>

<Block>
    <p>
        delay for 
        <input type="number" bind:value={model.values[0]}>
        ms
    </p>
</Block>