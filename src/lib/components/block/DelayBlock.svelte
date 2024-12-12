<script lang="ts">
	import clickOutside from '$lib/actions/clickOutside';
	import DelayBlockModel from '$lib/models/DelayBlock.svelte';
	import ForBlockModel from '$lib/models/ForBlock.svelte';
	import LedBlockModel from '$lib/models/LedBlock.svelte';
	import infoDialog from '$lib/state/infoDialog.svelte';
	import Block from './Block.svelte';
	import DelayBlock from './DelayBlock.svelte';
	import ForBlock from './ForBlock.svelte';
	import LedBlock from './LedBlock.svelte';

	interface Props {
		model: DelayBlockModel;
		showInfoButton?: boolean;
		onDelete?: () => void;
	}

	let { model, onDelete, showInfoButton }: Props = $props();
</script>

<Block
	--color-code-block="var(--color-delay)"
	--color-code-block-light="var(--color-delay-light)"
	--color-code-block-dark="var(--color-delay-dark)"
	onInfoClick={() => (infoDialog.value = modal)}
	{onDelete}
	{showInfoButton}
	errorMessage={model.errorMessage}
>
	delay for
	<input type="text" bind:value={model.values[0]} />
	ms
</Block>

{#snippet modal()}
	<div class="info-snippet" use:clickOutside onclick_outside={() => (infoDialog.value = undefined)}>
		<div class="info-snippet__header">
			<h1>Delay Block</h1>
			<button
				class="info-snippet__header__close"
				onclick={() => (infoDialog.value = undefined)}
				aria-label="close modal"
			>
				<i class="ri-close-line"></i>
			</button>
		</div>
		<p>
			<b>This block delays for a specified number of milliseconds (1000 milliseconds = 1 second).</b
			>
		</p>
		<h2>Examples</h2>
		<div class="info-snippet__examples">
			<div class="info-snippet__examples__example">
				<p>To delay for 100 milliseconds:</p>
				<DelayBlock model={new DelayBlockModel(['100'])} />
			</div>
			<div class="hr"></div>
			<div class="info-snippet__examples__example">
				<p>
					<b>Important!</b> You need to delay if you want to see the LEDs change:
				</p>
				<div>
					<LedBlock model={new LedBlockModel(['', '0', '0', '0'])} />
					<DelayBlock model={new DelayBlockModel(['100'])} />
				</div>
			</div>
			<div class="hr"></div>
			<div class="info-snippet__examples__example">
				<p>
					A Delay block can be used with a For Block. The below block will delay for <b
						>10 seconds</b
					>, then <b>20 seconds</b>, all the way up to <b>100 seconds</b>!
				</p>
				<ForBlock
					model={new ForBlockModel(['i', '10', '100', '10'], [new DelayBlockModel(['i'])])}
				/>
			</div>
		</div>
	</div>
{/snippet}
