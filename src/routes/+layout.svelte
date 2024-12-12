<script lang="ts">
	import DelayBlock from '$lib/components/block/DelayBlock.svelte';
	import LedBlock from '$lib/components/block/LedBlock.svelte';
	import SettingBlock from '$lib/components/block/SettingBlock.svelte';
	import Metadata from '$lib/components/Metadata.svelte';
	import DelayBlockModel from '$lib/models/DelayBlock.svelte';
	import LedBlockModel from '$lib/models/LedBlock.svelte';
	import programMetadata from '$lib/state/programMetadata.svelte';
	import transpilationOutput from '$lib/state/transpilationOutput.svelte';
	import hljs from 'highlight.js/lib/core';
	import cpp from 'highlight.js/lib/languages/cpp';
	import 'remixicon/fonts/remixicon.css';
	import type { Snippet } from 'svelte';
	import { dndzone, type DndEvent } from 'svelte-dnd-action';
	import { flip } from 'svelte/animate';
	import ForBlockModel from '$lib/models/ForBlock.svelte';
	import ForBlock from '$lib/components/block/ForBlock.svelte';
	import ResetBlockModel from '$lib/models/ResetBlock.svelte';
	import ResetBlock from '$lib/components/block/ResetBlock.svelte';
	import Light from '$lib/components/Light.svelte';
	import { innerWidth } from 'svelte/reactivity/window';
	import type BlockModel from '$lib/models/Block.svelte';
	import createBlockModelsState from '$lib/state/blockModels.svelte';

	import '../styles/reset.css';
	import '../styles/highlight.css';
	import '../styles/theme.css';
	import '../styles/styles.css';
	import Info from '$lib/components/Dialog.svelte';
	import Dialog from '$lib/components/Dialog.svelte';
	import infoDialog from '$lib/state/infoDialog.svelte';

	hljs.registerLanguage('cpp', cpp);

	interface Props {
		children: Snippet;
	}

	const { children }: Props = $props();

	let output = $derived(hljs.highlight(transpilationOutput.value, { language: 'cpp' }));

	let copyButtonClicked = $state(false);

	// svelte-ignore non_reactive_update
	let ledBlocks = createBlockModelsState(LedBlockModel);
	// svelte-ignore non_reactive_update
	let resetBlocks = createBlockModelsState(ResetBlockModel);
	// svelte-ignore non_reactive_update
	let delayBlocks = createBlockModelsState(DelayBlockModel);
	// svelte-ignore non_reactive_update
	let forBlocks = createBlockModelsState(ForBlockModel);

	const LIGHT_SIZE = 25;
	const LIGHT_INTERVAL = 500;

	let offset = $state<number>(0);

	$effect(() => {
		const interval = setInterval(() => (offset = (offset + 1) % 2), LIGHT_INTERVAL);

		return () => clearInterval(interval);
	});

	type ColorMap = Record<
		number,
		{
			color: `hsl(${number}, ${number}%, ${number}%)`;
			glow: `hsla(${number}, ${number}%, ${number}%, ${number})`;
		}
	>;

	const COLOR_MAP: ColorMap = {
		0: {
			color: 'hsl(0, 80%, 68%)',
			glow: 'hsla(0, 60%, 58%, 0.5)'
		},
		1: {
			color: 'hsl(117, 64%, 77%)',
			glow: 'hsla(117, 44%, 67%, 0.5)'
		}
	};

	function generateHandlers<T extends BlockModel>(blocks: { value: T[] }, Model: new () => T) {
		const consider = (e: CustomEvent<DndEvent<(typeof blocks.value)[number]>>) => {
			blocks.value = e.detail.items;
		};

		const finalize = (e: CustomEvent<DndEvent<(typeof blocks.value)[number]>>) => {
			blocks.value = e.detail.items;
			blocks.value = [new Model()];
		};

		return [consider, finalize] as const;
	}

	const [handleDelayDndConsider, handleDelayDndFinalize] = generateHandlers(
		delayBlocks,
		DelayBlockModel
	);
	const [handleLedDndConsider, handleLedDndFinalize] = generateHandlers(ledBlocks, LedBlockModel);
	const [handleForDndConsider, handleForDndFinalize] = generateHandlers(forBlocks, ForBlockModel);
	const [handleResetDndConsider, handleResetDndFinalize] = generateHandlers(
		resetBlocks,
		ResetBlockModel
	);

	function copyToClipboard() {
		navigator.clipboard.writeText(transpilationOutput.value);
	}

	function onWindowMouseUp() {
		if (copyButtonClicked) {
			copyButtonClicked = false;
		}
	}

	const TITLE = 'LED Program Builder';
	const DESCRIPTION =
		'A simple Scratch-like web interface to generate C++ code for an Arduino-controlled addressable LED strip.';
</script>

<Metadata
	title={TITLE}
	description={DESCRIPTION}
	url="https://harryxu497.github.io/led-program-builder/"
/>

<svelte:window onmouseup={onWindowMouseUp} />

<header>
	<nav>
		<ul class="logo">
			<li>LED Program Builder</li>
		</ul>
	</nav>
	<ul class="settings">
		<SettingBlock setting="Number of LEDs" bind:value={programMetadata.numLeds} />
		<SettingBlock setting="LED Pin" bind:value={programMetadata.ledPin} />
		<SettingBlock setting="Implicit Delay" bind:value={programMetadata.implicitDelay} />
	</ul>
	<div class="lights">
		{#each { length: Math.floor(innerWidth.current! / LIGHT_SIZE) }, i}
			{@const color = COLOR_MAP[(i + offset) % 2].color}
			{@const glow = COLOR_MAP[(i + offset) % 2].glow}
			<Light --size="{LIGHT_SIZE}px" --light-color={color} --light-color-glow={glow} />
		{/each}
	</div>
</header>
<main>
	<section class="menu">
		<div class="blocks">
			<h2>Blocks</h2>
			<section
				class="menu-blocks"
				use:dndzone={{ items: ledBlocks.value, flipDurationMs: 300 }}
				onconsider={handleLedDndConsider}
				onfinalize={handleLedDndFinalize}
			>
				{#each ledBlocks.value as block (block.id)}
					<div class="block-wrapper" animate:flip={{ duration: 300 }}>
						<!-- Don't know why this if statement is needed but it makes it work :) -->
						{#if block instanceof LedBlockModel}
							<LedBlock model={block} showInfoButton={true} />
						{/if}
					</div>
				{/each}
			</section>
			<section
				class="menu-blocks"
				use:dndzone={{ items: resetBlocks.value, flipDurationMs: 300 }}
				onconsider={handleResetDndConsider}
				onfinalize={handleResetDndFinalize}
			>
				{#each resetBlocks.value as block (block.id)}
					<div class="block-wrapper" animate:flip={{ duration: 300 }}>
						<!-- Don't know why this if statement is needed but it makes it work :) -->
						{#if block instanceof ResetBlockModel}
							<ResetBlock showInfoButton={true} />
						{/if}
					</div>
				{/each}
			</section>
			<section
				class="menu-blocks"
				use:dndzone={{ items: delayBlocks.value, flipDurationMs: 300 }}
				onconsider={handleDelayDndConsider}
				onfinalize={handleDelayDndFinalize}
			>
				{#each delayBlocks.value as block (block.id)}
					<div class="block-wrapper" animate:flip={{ duration: 300 }}>
						<!-- Don't know why this if statement is needed but it makes it work :) -->
						{#if block instanceof DelayBlockModel}
							<DelayBlock model={block} showInfoButton={true} />
						{/if}
					</div>
				{/each}
			</section>
			<section
				class="menu-blocks"
				use:dndzone={{ items: forBlocks.value, flipDurationMs: 300 }}
				onconsider={handleForDndConsider}
				onfinalize={handleForDndFinalize}
			>
				{#each forBlocks.value as block (block.id)}
					<div class="block-wrapper" animate:flip={{ duration: 300 }}>
						<!-- Don't know why this if statement is needed but it makes it work :) -->
						{#if block instanceof ForBlockModel}
							<ForBlock model={block} showInfoButton={true} />
						{/if}
					</div>
				{/each}
			</section>
		</div>
		<div class="output">
			<h2>Output</h2>
			<pre><code>{@html output.value}</code></pre>
			<button
				class="copy"
				class:clicked={copyButtonClicked}
				onclick={copyToClipboard}
				onmousedown={() => (copyButtonClicked = true)}
				onmouseup={() => (copyButtonClicked = false)}
			>
				Copy to Clipboard
			</button>
		</div>
	</section>
	<section class="playground">{@render children()}</section>
</main>

{#if infoDialog.value}
	<Dialog onClose={() => (infoDialog.value = undefined)} children={infoDialog.value} />
{/if}

<style>
	/* Info dialog snippets */
	:global(.info-snippet) {
		display: contents;
	}

	:global(.info-snippet .info-snippet__header) {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 0.75rem;
	}

	:global(.info-snippet .info-snippet__header__close) {
		all: unset;
		font-size: 2rem;
	}

	:global(.info-snippet .info-snippet__header__close:hover) {
		cursor: pointer;
	}

	:global(.info-snippet h1) {
		font-size: 2rem;
	}

	:global(.info-snippet h2) {
		margin-top: 1rem;
		margin-bottom: 0.75rem;
		font-size: 1.5rem;
	}

	:global(.info-snippet b) {
		font-weight: bold;
	}

	:global(.info-snippet p) {
		line-height: 1.4;
	}

	:global(.info-snippet .hr) {
		border-bottom: 2px solid var(--color-bg-1);
	}

	:global(.info-snippet__examples) {
		display: flex;
		flex-direction: column;
		gap: 1.5rem;
	}

	:global(.info-snippet__examples__example) {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}

	header {
		display: flex;
		flex-direction: row;
		position: relative;
	}

	.lights {
		position: absolute;
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		left: 0;
		right: 0;
		bottom: 1px;
	}

	.logo li {
		font-weight: bold;
		font-size: 2rem;
	}

	.settings {
		display: flex;
		flex-direction: row;
	}

	main {
		display: grid;
		grid-template-columns: 35% 65%;
		height: calc(100lvh - 5rem);
	}

	.menu {
		display: flex;
		flex-direction: column;
		overflow-y: auto;
		gap: 2rem;
		background-color: var(--color-bg-2);
		padding: 1rem;

		border-top: 8px solid var(--color-bg-2-light);
		border-left: 8px solid var(--color-bg-2-light);
		border-right: 8px solid var(--color-bg-2-dark);
		border-bottom: 8px solid var(--color-bg-2-dark);

		box-sizing: border-box;
		height: calc(100lvh - 5rem);
	}

	/* width */
	.menu::-webkit-scrollbar {
		width: 0.375rem;
	}

	/* Track */
	.menu::-webkit-scrollbar-track {
		background: var(--color-bg-2-track);
	}

	/* Handle */
	.menu::-webkit-scrollbar-thumb {
		background: var(--color-bg-2-light);
	}

	/* Handle on hover */
	.menu::-webkit-scrollbar-thumb:hover {
		background: var(--color-bg-2-thumb-hover);
	}

	.menu .blocks {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}

	.menu h2 {
		color: hsl(0, 0%, 5%);
		font-family: 'Jetbrains Mono', monospace;
		font-weight: bold;
		text-transform: uppercase;
		font-size: 2rem;
	}

	.menu-blocks {
		display: flex;
		flex-direction: column;
		height: 100%;
	}

	.output {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		flex-grow: 1;
	}

	.copy {
		all: unset;
		color: hsl(0, 0%, 95%);
		background-color: var(--color-bg-1);
		box-sizing: border-box;

		border-left: 5px solid var(--color-bg-1-light);
		border-top: 5px solid var(--color-bg-1-light);
		border-right: 5px solid var(--color-bg-1-dark);
		border-bottom: 5px solid var(--color-bg-1-dark);

		padding: 1rem 0.5rem;

		font-family: 'Jetbrains Mono', monospace;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
	}

	.copy.clicked {
		border-left: 5px solid var(--color-bg-1-dark);
		border-top: 5px solid var(--color-bg-1-dark);
		border-right: 5px solid var(--color-bg-1-light);
		border-bottom: 5px solid var(--color-bg-1-light);
	}

	.copy:hover {
		cursor: pointer;
	}

	.output pre {
		flex-basis: 20lvh;
		flex-grow: 1;
		padding: 0.25rem;
		line-height: 1.4;
		box-sizing: border-box;
		background-color: hsl(220, 13%, 18%);
		color: hsl(219, 14%, 71%);
		border-left: 5px solid hsl(220, 13%, 28%);
		border-top: 5px solid hsl(220, 13%, 28%);
		border-right: 5px solid hsl(220, 13%, 8%);
		border-bottom: 5px solid hsl(220, 13%, 8%);
		overflow: auto;
		font-family: 'Jetbrains Mono', monospace;
		font-size: 0.9rem;
	}

	.output code {
		display: block;
		height: 100%;
		overflow: auto;
	}

	/* width */
	.output code::-webkit-scrollbar {
		width: 0.25rem;
		height: 0.25rem;
	}

	/* Track */
	.output code::-webkit-scrollbar-track {
		background: hsl(220, 13%, 12%);
	}

	/* Handle */
	.output code::-webkit-scrollbar-thumb {
		background: hsl(220, 13%, 38%);
	}

	/* Handle on hover */
	.output code::-webkit-scrollbar-thumb:hover {
		background: hsl(220, 13%, 45%);
	}

	nav {
		padding: 0.75rem 1.5rem;
		flex-grow: 1;
		background-color: var(--color-bg-1);
		padding: 1rem;
		height: 100%;

		box-sizing: border-box;

		border-top: 8px solid var(--color-bg-1-light);
		border-left: 8px solid var(--color-bg-1-light);
		border-right: 8px solid var(--color-bg-1-dark);
		border-bottom: 8px solid var(--color-bg-1-dark);

		color: hsl(0, 0%, 95%);
		text-transform: uppercase;
		font-family: 'Jetbrains Mono', monospace;
		font-size: 1.5rem;
	}

	:global(.block-wrapper) {
		width: max-content;
	}
</style>
