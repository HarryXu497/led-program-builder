import programMetadata from "$lib/state/programMetadata.svelte";
import type { Tuple } from "$lib/types/Tuple.type";
import BlockModel from "./Block.svelte";

class LedBlockModel extends BlockModel<4> {
    constructor(initialValues?: Tuple<string, 4>) {
        super(4, initialValues);
    }

    transpile(): string {
        const numericalValues = this.values.map(value => Number(value)) as Tuple<number, 4>;
        const ledPosition = numericalValues[0];
        const ledRed = numericalValues[1];
        const ledGreen = numericalValues[2];
        const ledBlue = numericalValues[3];

        // LED Position
        if (isNaN(ledPosition) || !Number.isInteger(ledPosition)) {
            throw Error("LED position must be an integer.")
        } else if (ledPosition < 1 || ledPosition > programMetadata.numLeds) {
            throw Error(`LED position must be an integer between 1 and ${programMetadata.numLeds}, inclusive.`)
        }

        // LED Red
        if (isNaN(ledRed) || !Number.isInteger(ledRed)) {
            throw Error("LED red value must be an integer.")
        } else if (ledRed < 1 || ledRed > 255) {
            throw Error(`LED red value must be an integer between 1 and 255 inclusive.`)
        }

        // LED Green
        if (isNaN(ledGreen) || !Number.isInteger(ledGreen)) {
            throw Error("LED green value must be an integer.")
        } else if (ledGreen < 1 || ledGreen > 255) {
            throw Error(`LED green value must be an integer between 1 and 255 inclusive.`)
        }

        // LED Blue
        if (isNaN(ledBlue) || !Number.isInteger(ledBlue)) {
            throw Error("LED blue value must be an integer.")
        } else if (ledBlue < 1 || ledBlue > 255) {
            throw Error(`LED blue value must be an integer between 1 and 255 inclusive.`)
        }
        
        return `leds[${ledPosition - 1}] = CRGB(${ledRed}, ${ledGreen}, ${ledBlue});`
    }
}

export default LedBlockModel;