import BlockModel from './Block.svelte';

class StartBlockModel extends BlockModel<0> {
	constructor() {
		super(0);
	}

	transpile(): string {
		return '';
	}
}

export default StartBlockModel;
