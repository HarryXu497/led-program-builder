<script lang="ts">
	import ForBlockModel from '$lib/models/ForBlock.svelte';
	import LedBlockModel from '$lib/models/LedBlock.svelte';
	import { flip } from 'svelte/animate';
	import Block from './Block.svelte';
    import ForBlock from "./ForBlock.svelte"
	import DelayBlockModel from '$lib/models/DelayBlock.svelte';
	import { dndzone, type DndEvent } from 'svelte-dnd-action';
	import DelayBlock from './DelayBlock.svelte';
	import LedBlock from './LedBlock.svelte';

	interface Props {
		model: ForBlockModel;
		onDelete?: () => void;
	}

	let { model, onDelete }: Props = $props();

    let sourceHovered = $state(false);

	function handleDndConsider(e: CustomEvent<DndEvent<(typeof model.blocks)[number]>>) {
		model.blocks = e.detail.items;

		if (e.detail.info.trigger === 'draggedEntered') {
			sourceHovered = true;
		} else if (e.detail.info.trigger !== 'draggedOverIndex') {
			sourceHovered = false;
		}
	}

	function handleDndFinalize(e: CustomEvent<DndEvent<(typeof model.blocks)[number]>>) {
		model.blocks = e.detail.items;
		sourceHovered = false;
	}
</script>

<Block
	--color-code-block="hsl(31, 90%, 50%)"
	--color-code-block-light="hsl(31, 90%, 60%)"
	--color-code-block-dark="hsl(31, 90%, 40%)"
	{onDelete}
	errorMessage={model.errorMessage}
>
	<div class="container">
        <div class="text">
                for
                <input type="text" bind:value={model.values[0]}/>
                    from
                <input type="number" bind:value={model.values[1]}/>
                    to
                <input type="number" bind:value={model.values[2]}/>
                    step
                <input type="number" bind:value={model.values[3]}/>
            </div>
        <div
            class="program"
            class:expand={sourceHovered}
            use:dndzone={{ items: model.blocks, flipDurationMs: 300 }}
            onconsider={handleDndConsider}
            onfinalize={handleDndFinalize}
        >
            {#each model.blocks as block, i (block.id)}
                {@const onDelete = () => model.blocks.splice(i, 1)}
                <div class="block-wrapper" animate:flip={{ duration: 300 }}>
                    {#if block instanceof LedBlockModel}
                        <LedBlock model={block} {onDelete}/>
                    {/if}
                    {#if block instanceof DelayBlockModel}
                        <DelayBlock model={block} {onDelete}/>
                    {/if}
                    {#if block instanceof ForBlockModel}
                        <ForBlock model={block} {onDelete}/>
                    {/if}
                </div>
            {/each}
        </div>
    </div>
</Block>

<style>
    .container {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;

        interpolate-size: allow-keywords;
    }

    .program {
        display: flex;
        flex-direction: column;
    }

    .program.expand {
		gap: 0.5rem;

        padding-bottom: 45px;
	}

    .program {
        min-height: 45px;

        transition: padding 0.35s ease;

        background-color: hsl(31, 90%, 45%);
		border-left: 8px solid hsl(31, 90%, 40%);
		border-top: 8px solid hsl(31, 90%, 40%);
		border-right: 8px solid hsl(31, 90%, 60%);
		border-bottom: 8px solid hsl(31, 90%, 60%);
    }
</style>
