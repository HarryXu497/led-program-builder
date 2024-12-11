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
	import ResetBlockModel from '$lib/models/ResetBlock.svelte';
	import ResetBlock from './ResetBlock.svelte';

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
	--color-code-block="var(--color-for)"
	--color-code-block-light="var(--color-for-light)"
	--color-code-block-dark="var(--color-for-dark)"
	{onDelete}
	errorMessage={model.errorMessage}
>
	<div class="container">
        <div class="text">
                for
                <input type="text" bind:value={model.values[0]}/>
                    from
                <input type="text" bind:value={model.values[1]}/>
                    to
                <input type="text" bind:value={model.values[2]}/>
                    step
                <input type="text" bind:value={model.values[3]}/>
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
                    {#if block instanceof ResetBlockModel}
                        <ResetBlock {onDelete}/>
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

        background-color: var(--color-for-blocks);
		border-left: 8px solid var(--color-for-dark);
		border-top: 8px solid var(--color-for-dark);
		border-right: 8px solid var(--color-for-light);
		border-bottom: 8px solid var(--color-for-light);
    }
</style>
