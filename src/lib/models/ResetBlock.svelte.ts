import BlockModel from './Block.svelte';

class ResetBlockModel extends BlockModel<0> {
	constructor() {
		super(0);
	}

	transpile(namespace: Set<string>): string[] {
		return ['reset();'];
	}
}

export default ResetBlockModel;