<script lang="ts">
	import LedBlockModel from '$lib/models/LedBlock.svelte';
	import LedBlock from './LedBlock.svelte';
	import ForBlock from './ForBlock.svelte';
	import Block from './Block.svelte';
	import infoDialog from '$lib/state/infoDialog.svelte';
	import ForBlockModel from '$lib/models/ForBlock.svelte';
	import clickOutside from '$lib/actions/clickOutside';

	interface Props {
		model: LedBlockModel;
		showInfoButton?: boolean;
		onDelete?: () => void;
	}

	let { model, showInfoButton, onDelete }: Props = $props();

	let lastValidColor = $state<[number, number, number]>([
		Number(model.values[0] || 0),
		Number(model.values[1] || 0),
		Number(model.values[2] || 0)
	]);
</script>

<Block
	--color-code-block="var(--color-led)"
	--color-code-block-light="var(--color-led-light)"
	--color-code-block-dark="var(--color-led-dark)"
	onInfoClick={() => (infoDialog.value = modal)}
	{onDelete}
	{showInfoButton}
	errorMessage={model.errorMessage}
>
	set LED
	<input type="text" bind:value={model.values[0]} />
	to color
	<input type="number" bind:value={model.values[1]} min="0" max="255" />
	<input type="number" bind:value={model.values[2]} min="0" max="255" />
	<input type="number" bind:value={model.values[3]} min="0" max="255" />
	<input
		type="color"
		bind:value={() => {
			let red = Number(model.values[1]);
			let green = Number(model.values[2]);
			let blue = Number(model.values[3]);

			if (red < 0 || red > 255 || green < 0 || green > 255 || blue < 0 || blue > 255) {
				red = lastValidColor[0];
				green = lastValidColor[1];
				blue = lastValidColor[2];
			} else {
				lastValidColor = [red, green, blue];
			}

			return `#${red.toString(16).padStart(2, '0')}${green.toString(16).padStart(2, '0')}${blue.toString(16).padStart(2, '0')}`;
		},
		(hexValue: string) => {
			if (hexValue.length !== 7) {
				return;
			}

			const redRaw = hexValue.substring(1, 3);
			const greenRaw = hexValue.substring(3, 5);
			const blueRaw = hexValue.substring(5, 7);

			const converted = [
				parseInt(redRaw, 16),
				parseInt(greenRaw, 16),
				parseInt(blueRaw, 16)
			] as const;

			model.values[1] = converted[0].toString();
			model.values[2] = converted[1].toString();
			model.values[3] = converted[2].toString();
		}}
	/>
</Block>

{#snippet modal()}
	<div class="info-snippet" use:clickOutside onclick_outside={() => (infoDialog.value = undefined)}>
		<div class="info-snippet__header">
			<h1>LED Block</h1>
			<button
				class="info-snippet__header__close"
				onclick={() => (infoDialog.value = undefined)}
				aria-label="close modal"
			>
				<i class="ri-close-line"></i>
			</button>
		</div>
		<p>
			<b>This block sets an LED at a position to a specific color in RGB.</b>
		</p>
		<h2>Examples</h2>
		<div class="info-snippet__examples">
			<div class="info-snippet__examples__example">
				<p>
					To set the 5th LED to <span class="color">this color</span> (RGB: 230, 72, 33):
				</p>
				<LedBlock model={new LedBlockModel(['5', '230', '72', '33'])} />
			</div>
			<div class="hr"></div>
			<div class="info-snippet__examples__example">
				<p>
					Once an LED is set to a color, it will stay that way until it is changed. To turn an LED
					off, set the color to 0, 0, 0:
				</p>
				<LedBlock model={new LedBlockModel(['', '0', '0', '0'])} />
			</div>
			<div class="hr"></div>
			<div class="info-snippet__examples__example">
				<p>
					An LED block can be used with a For Block. The below block will set all LEDs from 4 to 8
					to red!
				</p>
				<ForBlock
					model={new ForBlockModel(
						['i', '4', '8', '1'],
						[new LedBlockModel(['i', '255', '0', '0'])]
					)}
				/>
			</div>
		</div>
	</div>
{/snippet}

<style>
	.info-snippet__examples__example span.color {
		color: rgb(230, 72, 33);
	}
</style>
