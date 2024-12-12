<script lang="ts">
	import ForBlockModel from '$lib/models/ForBlock.svelte';
	import LedBlockModel from '$lib/models/LedBlock.svelte';
	import { flip } from 'svelte/animate';
	import Block from './Block.svelte';
	import ForBlock from './ForBlock.svelte';
	import DelayBlockModel from '$lib/models/DelayBlock.svelte';
	import { dndzone, type DndEvent } from 'svelte-dnd-action';
	import DelayBlock from './DelayBlock.svelte';
	import LedBlock from './LedBlock.svelte';
	import ResetBlockModel from '$lib/models/ResetBlock.svelte';
	import ResetBlock from './ResetBlock.svelte';
	import infoDialog from '$lib/state/infoDialog.svelte';
	import clickOutside from '$lib/actions/clickOutside';

	interface Props {
		model: ForBlockModel;
		showInfoButton?: boolean;
		onDelete?: () => void;
	}

	let { model, showInfoButton, onDelete }: Props = $props();

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
	onInfoClick={() => (infoDialog.value = modal)}
	{onDelete}
	{showInfoButton}
	errorMessage={model.errorMessage}
>
	<div class="container">
		<div class="text">
			for
			<input type="text" bind:value={model.values[0]} />
			from
			<input type="text" bind:value={model.values[1]} />
			to
			<input type="text" bind:value={model.values[2]} />
			step
			<input type="text" bind:value={model.values[3]} />
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
						<LedBlock model={block} {onDelete} />
					{/if}
					{#if block instanceof DelayBlockModel}
						<DelayBlock model={block} {onDelete} />
					{/if}
					{#if block instanceof ForBlockModel}
						<ForBlock model={block} {onDelete} />
					{/if}
					{#if block instanceof ResetBlockModel}
						<ResetBlock {onDelete} />
					{/if}
				</div>
			{/each}
		</div>
	</div>
</Block>

{#snippet modal()}
	<div class="info-snippet" use:clickOutside onclick_outside={() => (infoDialog.value = undefined)}>
		<div class="info-snippet__header">
			<h1>For Block</h1>
			<button
				class="info-snippet__header__close"
				onclick={() => (infoDialog.value = undefined)}
				aria-label="close modal"
			>
				<i class="ri-close-line"></i>
			</button>
		</div>
		<p>
			<b>This block allows for the repetition of blocks with an additional counter.</b>
			The first input specifies the name of the <b>counter</b> and the additional inputs specify the
			<b>start</b>, <b>stop</b>, and <b>step</b> of the counter range. The counter will start at the
			specified value and go up or down by the step until it passes the stop value.
		</p>
		<h2>Examples</h2>
		<div class="info-snippet__examples">
			<div class="info-snippet__examples__example">
				<p>To turn the 1st, 2nd, 3rd, and 4th LED to red:</p>
				<ForBlock
					model={new ForBlockModel(
						['i', '1', '4', '1'],
						[new LedBlockModel(['i', '255', '0', '0'])]
					)}
				/>
				<p>... or you can go backwards ...</p>
				<ForBlock
					model={new ForBlockModel(
						['i', '4', '1', '-1'],
						[new LedBlockModel(['i', '255', '0', '0'])]
					)}
				/>
			</div>
			<div class="hr"></div>
			<div class="info-snippet__examples__example">
				<p>To turn the 2nd, 4th, 6th, and 8th LED to blue:</p>
				<ForBlock
					model={new ForBlockModel(
						['i', '2', '8', '2'],
						[new LedBlockModel(['i', '0', '0', '255'])]
					)}
				/>
				<p>The LED block ...</p>
				<LedBlock model={new LedBlockModel(['i', '0', '0', '255'])} />
				<p>... will repeat 4 times, with 'i' being replaced by 2, then 4, then 6, then 8</p>
			</div>
			<div class="hr"></div>
			<div class="info-snippet__examples__example">
				<p>
					<b>You can put For blocks in For blocks! Be careful to not reuse counter names though.</b>
					The below blocks will do the following, with pauses between each step:
				</p>
				<ul>
					<li>Turn the first LED green</li>
					<li>Turn all LEDs off</li>
					<li>Turn the first and second LEDs green</li>
					<li>Turn all LEDs off</li>
					<li>Turn the first, second, and third LEDs green</li>
					<li>Turn all LEDs off</li>
					<li>So on and so forth until the 10th LED...</li>
				</ul>
				<ForBlock
					model={new ForBlockModel(
						['i', '1', '10', '1'],
						[
							new ResetBlockModel(),
							new DelayBlockModel(['100']),
							new ForBlockModel(['j', '1', 'i', '1'], [new LedBlockModel(['i', '0', '255', '0'])]),
							new DelayBlockModel(['100'])
						]
					)}
				/>
			</div>
		</div>
	</div>
{/snippet}

<style>
	.info-snippet__examples__example ul {
		list-style: inside;
		line-height: 1.4;
	}

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
