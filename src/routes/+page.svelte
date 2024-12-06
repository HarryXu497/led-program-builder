<script lang="ts">
	import LedBlock from "$lib/components/block/LedBlock.svelte";
	import BlockModel from "$lib/models/Block.svelte";
	import LedBlockModel from "$lib/models/LedBlock.svelte";

    let blocks = $state<BlockModel[]>([
        new LedBlockModel(4),
    ]);

    

    

    function onTranspile() {
        blocks.map(block => console.log(block.transpile()));
    }
</script>

<main>
    {#each blocks as block}
        {#if block instanceof LedBlockModel}
            <LedBlock model={block}/>
        {/if}
    {/each}
</main>

<button onclick={onTranspile}>Transpile</button>