<script lang="ts">
	import type LedBlockModel from "$lib/models/LedBlock.svelte";
		import type { Tuple } from "$lib/types/Tuple.type";
    import Block from "./Block.svelte";

    interface Props {
        model: LedBlockModel;
    }

    let { model }: Props = $props();
</script>

<Block>
    <p>
        Set LED at position
        <input type="number" bind:value={model.values[0]}>
        to color
        <input type="number" bind:value={model.values[1]}>
        <input type="number" bind:value={model.values[2]}>
        <input type="number" bind:value={model.values[3]}>
    </p>
</Block>