import type BlockModel from '$lib/models/Block.svelte';
import DelayBlockModel from '$lib/models/DelayBlock.svelte';
import ShowBlockModel from '$lib/models/ShowBlock.svelte';
import programMetadata from '$lib/state/programMetadata.svelte';

interface TransformSourceOptions {
	insertDelay?: boolean;
	insertShowAtEnd?: boolean;
}

function transformSource(
	blocks: BlockModel[],
	{ insertDelay = true, insertShowAtEnd = true }: TransformSourceOptions
) {
	const sourceCode = [...blocks];

	// Edge case: no delays => insert a delay
	if (insertDelay && sourceCode.every((block) => !(block instanceof DelayBlockModel))) { 
		sourceCode.push(new DelayBlockModel([programMetadata.implicitDelay.toString()]));
	}

	const showPositions: number[] = [];

	// Edge case: first command is delay
	if (sourceCode[0] && sourceCode[0] instanceof DelayBlockModel) {
		showPositions.push(0);
	}

	// Insert a FastLED.show() command before a delay
	for (let i = 1; i < sourceCode.length; i++) {
		const currentBlock = sourceCode[i];
		const previousBlock = sourceCode[i - 1];

		if (currentBlock instanceof DelayBlockModel && !(previousBlock instanceof DelayBlockModel)) {
			showPositions.push(i);
		}
	}

	// Insert a FastLED.show() command if the last command is not a delay
	if (insertShowAtEnd && !(sourceCode[sourceCode.length - 1] instanceof DelayBlockModel)) {
		showPositions.push(sourceCode.length);
	}

	for (let i = showPositions.length - 1; i >= 0; i--) {
		sourceCode.splice(showPositions[i], 0, new ShowBlockModel());
	}

	return sourceCode;
}

function attemptTranspilation(block: BlockModel, namespace: Set<string>) {
	try {
		return block.transpile(namespace);
	} catch (e: unknown) {
		if (e instanceof Error) {
			block.errorMessage = e.message;
		}

		return null;
	}
}

function transpile(
	blocks: BlockModel[],
	namespace?: Set<string>,
	options: TransformSourceOptions = {}
) {
	if (!namespace) {
		namespace = new Set<string>();
	}

	const sourceCode = transformSource(blocks, options);

	sourceCode.forEach((block) => (block.errorMessage = null));

	let transpiledCode = sourceCode.flatMap((block) => {
		const result = attemptTranspilation(block, namespace);

		if (result) {
			return result.map((str) => `    ${str}`);
		} else {
			return null;
		}
	});

	if (transpiledCode.some((code) => code === null)) {
		throw Error('');
	}

	return transpiledCode as unknown as string[];
}

export { transformSource, attemptTranspilation };

export default transpile;
