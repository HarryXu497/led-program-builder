import type { Tuple } from '$lib/types/Tuple.type';
import BlockModel from './Block.svelte';

class DelayBlockModel extends BlockModel<1> {
	constructor(initialValues?: Tuple<string, 1>) {
		super(1, initialValues);
	}

	transpile(): string {
		const delayMs = this.values[0] === '' ? NaN : Number(this.values[0]);

		// LED Position
		if (isNaN(delayMs) || !Number.isInteger(delayMs)) {
			throw Error('LED delay must be an integer larger than 0.');
		} else if (delayMs < 1) {
			throw Error('LED delay must be an integer larger than 0.');
		}

		return `delay(${delayMs});`;
	}
}

export default DelayBlockModel;
