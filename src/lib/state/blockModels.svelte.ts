function createBlockModelsState<T>(Model: new () => T) {
	let blocksState = $state<T[]>([new Model()]);

	return {
		get value() {
			return blocksState;
		},
		set value(newBlocks: T[]) {
			blocksState = newBlocks;
		}
	};
}

export default createBlockModelsState;
