import type { Tuple } from '$lib/types/Tuple.type';
import BlockModel from './Block.svelte';

class DelayBlockModel extends BlockModel<1> {
	constructor(initialValues?: Tuple<string, 1>) {
		super(1, initialValues);
	}

	transpile(namespace: Set<string>): string[] {
		const delayMs = this.values[0];
        const delayMsAsNumber = Number(delayMs);

        if (!isNaN(delayMsAsNumber)) {
            // Literal integer
            if (!Number.isInteger(delayMsAsNumber)) {
                throw Error('LED delay must be an integer larger than 0.');
            } else if (delayMsAsNumber < 1) {
                throw Error('LED delay must be an integer larger than 0.');
            }
        } else {
            // Variable
            if (!namespace.has(delayMs)) {
                throw Error(`Variable '${delayMs}' does not exist.`)
            }
        }

		return [`delayMs(${delayMs});`];
	}
}

export default DelayBlockModel;
