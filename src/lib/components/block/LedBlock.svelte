<script lang="ts">
	import type LedBlockModel from '$lib/models/LedBlock.svelte';
	import Block from './Block.svelte';

	interface Props {
		model: LedBlockModel;
		onDelete?: () => void;
	}

	let { model, onDelete }: Props = $props();

    let lastValidColor = $state<[number, number, number]>([
        Number(model.values[0] || 0),
        Number(model.values[1] || 0),
        Number(model.values[2] || 0),
    ]);
</script>

<Block
	--color-code-block="var(--color-led)"
	--color-code-block-light="var(--color-led-light)"
	--color-code-block-dark="var(--color-led-dark)"
	{onDelete}
	errorMessage={model.errorMessage}
>
	set LED
	<input type="text" bind:value={model.values[0]}/>
	to color
	<input type="number" bind:value={model.values[1]} min="0" max="255"/>
	<input type="number" bind:value={model.values[2]} min="0" max="255"/>
	<input type="number" bind:value={model.values[3]} min="0" max="255"/>
    <input type="color" bind:value={
        () => {
            let red = Number(model.values[1]);
            let green = Number(model.values[2]);
            let blue = Number(model.values[3]);
            
            if ((red < 0 || red > 255) || (green < 0 || green > 255) || (blue < 0 || blue > 255)) {
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
                parseInt(blueRaw, 16),
            ] as const;

            model.values[1] = converted[0].toString();
            model.values[2] = converted[1].toString();
            model.values[3] = converted[2].toString();
        }
    }>
</Block>