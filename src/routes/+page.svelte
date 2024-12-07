<script lang="ts">
	import DelayBlock from '$lib/components/block/DelayBlock.svelte';
	import LedBlock from '$lib/components/block/LedBlock.svelte';
	import StartBlock from '$lib/components/block/StartBlock.svelte';
	import BlockModel from '$lib/models/Block.svelte';
	import DelayBlockModel from '$lib/models/DelayBlock.svelte';
	import LedBlockModel from '$lib/models/LedBlock.svelte';
	import ShowBlockModel from '$lib/models/ShowBlock.svelte';
	import programMetadata from '$lib/state/programMetadata.svelte';
	import transpilationOutput from '$lib/state/transpilationOutput.svelte';
	import buildProgram from '$lib/transpile/buildProgram';
	import { dndzone, type DndEvent } from 'svelte-dnd-action';
	import { flip } from 'svelte/animate';

	let sourceHovered = $state(false);

	let runButtonClicked = $state(false);

	let blocks = $state<BlockModel[]>([]);

	function transformSource() {
		const sourceCode = [...blocks];

		// Edge case: no delays => insert a delay
		if (sourceCode.every((block) => !(block instanceof DelayBlockModel))) {
			sourceCode.push(new DelayBlockModel([programMetadata.implicitDelay.toString()]));
		}

		const showPositions: number[] = [];

		// Insert a FastLED.show() command before a delay
		for (let i = 1; i < sourceCode.length; i++) {
			const currentBlock = sourceCode[i];
			const previousBlock = sourceCode[i - 1];

			if (currentBlock instanceof DelayBlockModel && !(previousBlock instanceof DelayBlockModel)) {
				showPositions.push(i);
			}
		}

        // Insert a FastLED.show() command if the last command is not a delay
        if (!(sourceCode[sourceCode.length - 1] instanceof DelayBlockModel)) {
            showPositions.push(sourceCode.length);
        }

		for (let i = showPositions.length - 1; i >= 0; i--) {
			sourceCode.splice(showPositions[i], 0, new ShowBlockModel());
		}

		return sourceCode;
	}

	function attemptTranspilation(block: BlockModel) {
		try {
			return block.transpile();
		} catch (e: unknown) {
			if (e instanceof Error) {
				block.errorMessage = e.message;
			}

			return null;
		}
	}

	async function onTranspile() {
		const sourceCode = transformSource();

		let transpiledCode = sourceCode.map(attemptTranspilation);

		if (transpiledCode.some((code) => code === null)) {
			return;
		}

		transpilationOutput.value = buildProgram(transpiledCode.join('\n    '));
	}

	function handleDndConsider(e: CustomEvent<DndEvent<(typeof blocks)[number]>>) {
		blocks = e.detail.items;

		if (e.detail.info.trigger === 'draggedEntered') {
			sourceHovered = true;
		} else if (e.detail.info.trigger !== 'draggedOverIndex') {
			sourceHovered = false;
		}
	}

	function handleDndFinalize(e: CustomEvent<DndEvent<(typeof blocks)[number]>>) {
		blocks = e.detail.items;
		sourceHovered = false;
	}

	function onWindowMouseUp() {
		if (runButtonClicked) {
			runButtonClicked = false;
		}
	}
</script>

<svelte:window onmouseup={onWindowMouseUp} />

<section class="program-wrapper">
	<StartBlock />
	<div
		class="program"
		class:expand={sourceHovered}
		use:dndzone={{ items: blocks, flipDurationMs: 300 }}
		onconsider={handleDndConsider}
		onfinalize={handleDndFinalize}
	>
		{#each blocks as block, i (block.id)}
			{@const onDelete = () => blocks.splice(i, 1)}
			<div class="block-wrapper" animate:flip={{ duration: 300 }}>
				{#if block instanceof LedBlockModel}
					<LedBlock model={block} {onDelete} />
				{/if}
				{#if block instanceof DelayBlockModel}
					<DelayBlock model={block} {onDelete} />
				{/if}
			</div>
		{/each}
	</div>
</section>

<button
	class="transpile-button"
	class:clicked={runButtonClicked}
	onmousedown={() => (runButtonClicked = true)}
	onmouseup={() => (runButtonClicked = false)}
	onclick={onTranspile}
>
	Run
</button>

<style>
	.program-wrapper {
		display: flex;
		flex-direction: column;
		padding: 1rem;
		height: calc(100lvh - 5rem);
		overflow-y: auto;
		box-sizing: border-box;

		background-color: hsl(0, 0%, 80%);
		border-left: 8px solid hsl(0, 0%, 90%);
		border-top: 8px solid hsl(0, 0%, 90%);
		border-right: 8px solid hsl(0, 0%, 70%);
		border-bottom: 8px solid hsl(0, 0%, 70%);
	}
    /* width */
    .program-wrapper::-webkit-scrollbar {
        width: 0.375rem;
    }

    /* Track */
    .program-wrapper::-webkit-scrollbar-track {
        background: hsl(0, 0%, 80%);
    }
    
    /* Handle */
    .program-wrapper::-webkit-scrollbar-thumb {
        background: hsl(0, 0%, 90%);
    }

    /* Handle on hover */
    .program-wrapper::-webkit-scrollbar-thumb:hover {
        background: hsl(0, 0%, 100%);
    }
	.program {
		display: flex;
		flex-direction: column;
		flex-grow: 1;
	}
	.program.expand {
		gap: 0.5rem;
	}
	.transpile-button {
		all: unset;

		font-family: 'Jetbrains Mono', monospace;
		padding: 1rem 2rem;
		background-color: hsl(125, 48%, 50%);
		border-left: 5px solid hsl(125, 48%, 60%);
		border-top: 5px solid hsl(125, 48%, 60%);
		border-right: 5px solid hsl(125, 48%, 40%);
		border-bottom: 5px solid hsl(125, 48%, 40%);
		font-size: 2rem;
		color: hsl(0, 0%, 98%);
		position: absolute;

		right: 1.5rem;
		bottom: 1.5rem;
	}

	.transpile-button.clicked {
		border-right: 5px solid hsl(125, 48%, 60%);
		border-bottom: 5px solid hsl(125, 48%, 60%);
		border-left: 5px solid hsl(125, 48%, 40%);
		border-top: 5px solid hsl(125, 48%, 40%);
	}

	.transpile-button:hover {
		cursor: pointer;
	}
</style>
