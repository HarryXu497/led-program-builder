import BlockModel from './Block.svelte';

class ShowBlockModel extends BlockModel<0> {
	constructor() {
		super(0);
	}

	transpile(namespace: Set<string>): string[] {
		return ['FastLED.show();'];
	}
}

export default ShowBlockModel;
