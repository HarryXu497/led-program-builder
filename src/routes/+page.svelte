<script lang="ts">
	import DelayBlock from "$lib/components/block/DelayBlock.svelte";
	import LedBlock from "$lib/components/block/LedBlock.svelte";
	import BlockModel from "$lib/models/Block.svelte";
	import DelayBlockModel from "$lib/models/DelayBlock.svelte";
	import LedBlockModel from "$lib/models/LedBlock.svelte";
	import ShowBlockModel from "$lib/models/ShowBlock.svelte";
	import programMetadata from "$lib/state/programMetadata.svelte";
	import buildProgram from "$lib/transpile/buildProgram";

    let blocks = $state<BlockModel[]>([
        new LedBlockModel(),
        new DelayBlockModel(["300"]),
    ]);

    function transformSource() {
        const sourceCode = [...blocks];

        // Edge case: no delays => insert a delay
        if (sourceCode.every(block => !(block instanceof DelayBlockModel))) {
            sourceCode.push(new DelayBlockModel([programMetadata.implicitDelay.toString()]));
        }

        const showPositions: number[] = [];

        // Insert a FastLED.show() command before a delay
        for (let i = 1; i < sourceCode.length; i++) {
            const currentBlock = sourceCode[i];
            const previousBlock = sourceCode[i - 1];

            if (
                currentBlock instanceof DelayBlockModel &&
                !(previousBlock instanceof DelayBlockModel)
            ) {
                showPositions.push(i);
            }
        }

        for (let i = showPositions.length - 1; i >= 0; i--) {
            sourceCode.splice(showPositions[i], 0, new ShowBlockModel());
        }

        return sourceCode;
    }

    function onTranspile() {
        const sourceCode = transformSource();
        const transpiledCode = sourceCode.map(block => block.transpile());

        console.log(
            buildProgram(transpiledCode.join("\n"))
        )
    }
</script>

<main>
    {#each blocks as block}
        {#if block instanceof LedBlockModel}
            <LedBlock model={block}/>
        {/if}
        {#if block instanceof DelayBlockModel}
            <DelayBlock model={block}/>
        {/if}
    {/each}
</main>

<button onclick={onTranspile}>Transpile</button>