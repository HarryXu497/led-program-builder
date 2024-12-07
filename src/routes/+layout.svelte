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
	import '../styles/highlight.css';
	import '../styles/reset.css';
	import '../styles/styles.css';

	hljs.registerLanguage('cpp', cpp);

	interface Props {
		children: Snippet;
	}

	const { children }: Props = $props();

	let output = $derived(hljs.highlight(transpilationOutput.value, { language: 'cpp' }));

	let copyButtonClicked = $state(false);

	let ledBlocks = $state([new LedBlockModel()]);
	let delayBlocks = $state([new DelayBlockModel()]);

	function handleDelayDndConsider(e: CustomEvent<DndEvent<(typeof delayBlocks)[number]>>) {
		delayBlocks = e.detail.items;
	}

	function handleDelayDndFinalize(e: CustomEvent<DndEvent<(typeof delayBlocks)[number]>>) {
		delayBlocks = e.detail.items;
		delayBlocks = [new DelayBlockModel()];
	}

	function handleLedDndConsider(e: CustomEvent<DndEvent<(typeof ledBlocks)[number]>>) {
		ledBlocks = e.detail.items;
	}

	function handleLedDndFinalize(e: CustomEvent<DndEvent<(typeof ledBlocks)[number]>>) {
		ledBlocks = e.detail.items;
		ledBlocks = [new LedBlockModel()];
	}

	function copyToClipboard() {
		navigator.clipboard.writeText(transpilationOutput.value);
	}

	function onWindowMouseUp() {
		if (copyButtonClicked) {
			copyButtonClicked = false;
		}
	}
    const TITLE = "LED Program Builder";
    const DESCRIPTION = "A simple Scratch-like web interface to generate C++ code for an Arduino-controlled addressable LED strip.";
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
        <SettingBlock setting="Number of LEDs" bind:value={programMetadata.numLeds}/>
        <SettingBlock setting="LED Pin" bind:value={programMetadata.ledPin}/>
        <SettingBlock setting="Implicit Delay" bind:value={programMetadata.implicitDelay}/>
    </ul>
</header>
<main>
	<section class="menu">
		<div class="blocks">
			<h2>Blocks</h2>
			<section
				class="menu-blocks"
				use:dndzone={{ items: ledBlocks, flipDurationMs: 300 }}
				onconsider={handleLedDndConsider}
				onfinalize={handleLedDndFinalize}
			>
				{#each ledBlocks as block (block.id)}
					<div class="block-wrapper" animate:flip={{ duration: 300 }}>
						<!-- Don't know why this if statement is needed but it makes it work :) -->
						{#if block instanceof LedBlockModel}
							<LedBlock model={block} />
						{/if}
					</div>
				{/each}
			</section>
			<section
				class="menu-blocks"
				use:dndzone={{ items: delayBlocks, flipDurationMs: 300 }}
				onconsider={handleDelayDndConsider}
				onfinalize={handleDelayDndFinalize}
			>
				{#each delayBlocks as block (block.id)}
					<div class="block-wrapper" animate:flip={{ duration: 300 }}>
						<!-- Don't know why this if statement is needed but it makes it work :) -->
						{#if block instanceof DelayBlockModel}
							<DelayBlock model={block} />
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

<style>
    header {
        display: flex;
        flex-direction: row;
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
		grid-template-columns: 32% 68%;
		height: calc(100lvh - 5rem);
	}

	.menu {
		display: flex;
		flex-direction: column;
		overflow-y: auto;
		gap: 2rem;
		background-color: hsl(0, 0%, 70%);
		padding: 1rem;

		border-top: 8px solid hsl(0, 0%, 80%);
		border-left: 8px solid hsl(0, 0%, 80%);
		border-right: 8px solid hsl(0, 0%, 60%);
		border-bottom: 8px solid hsl(0, 0%, 60%);

		box-sizing: border-box;
		height: calc(100lvh - 5rem);
	}

    /* width */
    .menu::-webkit-scrollbar {
        width: 0.375rem;
    }

    /* Track */
    .menu::-webkit-scrollbar-track {
        background: hsl(0, 0%, 70%);
    }
    
    /* Handle */
    .menu::-webkit-scrollbar-thumb {
        background: hsl(0, 0%, 50%);
    }

    /* Handle on hover */
    .menu::-webkit-scrollbar-thumb:hover {
        background: hsl(0, 0%, 60%);
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
		background-color: hsl(260, 60%, 60%);
		box-sizing: border-box;

		border-left: 5px solid hsl(260, 60%, 70%);
		border-top: 5px solid hsl(260, 60%, 70%);
		border-right: 5px solid hsl(260, 60%, 50%);
		border-bottom: 5px solid hsl(260, 60%, 50%);

		padding: 1rem 0.5rem;

		font-family: 'Jetbrains Mono', monospace;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
	}

	.copy.clicked {
		border-left: 5px solid hsl(260, 60%, 50%);
		border-top: 5px solid hsl(260, 60%, 50%);
		border-right: 5px solid hsl(260, 60%, 70%);
		border-bottom: 5px solid hsl(260, 60%, 70%);
	}

	.copy:hover {
		cursor: pointer;
	}

	.output pre {
		flex-basis: 40lvh;
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
		background-color: hsl(0, 0%, 60%);
		padding: 1rem;
		height: 100%;

		box-sizing: border-box;

		border-top: 8px solid hsl(0, 0%, 70%);
		border-left: 8px solid hsl(0, 0%, 70%);
		border-right: 8px solid hsl(0, 0%, 50%);
		border-bottom: 8px solid hsl(0, 0%, 50%);

		color: hsl(0, 0%, 95%);
		text-transform: uppercase;
		font-family: 'Jetbrains Mono', monospace;
		font-size: 1.5rem;
	}

	:global(.block-wrapper) {
		width: max-content;
	}
</style>
