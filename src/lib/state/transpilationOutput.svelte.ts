export function createTranspilationOutputState() {
	let transpilationOutputState = $state<string>('');

	return {
		get value() {
			return transpilationOutputState;
		},
		set value(newCode: string) {
			transpilationOutputState = newCode;
		}
	};
}

const transpilationOutput = createTranspilationOutputState();

export default transpilationOutput;
