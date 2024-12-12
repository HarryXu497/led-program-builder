import programMetadata from '$lib/state/programMetadata.svelte';
import type { Tuple } from '$lib/types/Tuple.type';
import BlockModel from './Block.svelte';

class LedBlockModel extends BlockModel<4> {
	constructor(initialValues?: Tuple<string, 4>) {
		super(4, initialValues);
	}

	transpile(namespace: Set<string>): string[] {
		const numericalValues = this.values
			.slice(1)
			.map((value) => (value === '' ? NaN : Number(value))) as Tuple<number, 3>;
		let ledPosition = this.values[0].trim();
		const ledPositionAsNumber = Number(ledPosition);

		const ledRed = numericalValues[0];
		const ledGreen = numericalValues[1];
		const ledBlue = numericalValues[2];

		if (!isNaN(ledPositionAsNumber)) {
			// Literal integer
			if (!Number.isInteger(ledPositionAsNumber)) {
				throw Error(`LED must be an integer between 1 and ${programMetadata.numLeds}.`);
			} else if (ledPositionAsNumber < 1 || ledPositionAsNumber > programMetadata.numLeds) {
				throw Error(`LED must be an integer between 1 and ${programMetadata.numLeds}.`);
			}

			ledPosition = (ledPositionAsNumber - 1).toString();
		} else {
			// Variable
			if (!namespace.has(ledPosition) && ledPosition.indexOf(" ") === -1) {
				throw Error(`Variable '${ledPosition}' does not exist.`);
			}

			ledPosition = `${ledPosition} - 1`;
		}

		// LED Red
		if (isNaN(ledRed) || !Number.isInteger(ledRed)) {
			throw Error('Red value must be an integer between 0 and 255.');
		} else if (ledRed < 0 || ledRed > 255) {
			throw Error('Red value must be an integer between 0 and 255.');
		}

		// LED Green
		if (isNaN(ledGreen) || !Number.isInteger(ledGreen)) {
			throw Error('Green value must be an integer between 0 and 255.');
		} else if (ledGreen < 0 || ledGreen > 255) {
			throw Error('Green value must be an integer between 0 and 255.');
		}

		// LED Blue
		if (isNaN(ledBlue) || !Number.isInteger(ledBlue)) {
			throw Error('Blue value must be an integer between 0 and 255.');
		} else if (ledBlue < 0 || ledBlue > 255) {
			throw Error('Blue value must be an integer between 0 and 255.');
		}

		return [`setLED(${ledPosition}, ${ledRed}, ${ledGreen}, ${ledBlue});`];
	}
}

export default LedBlockModel;
