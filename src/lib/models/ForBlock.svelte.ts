import transpile from '$lib/transpile/transpile';
import type { Tuple } from '$lib/types/Tuple.type';
import BlockModel from './Block.svelte';

function isAlpha(str: string) {
	return /^[a-zA-Z]+$/.test(str);
}

function checkRangeValue(val: string, namespace: Set<string>) {
	const valAsNumber = Number(val);

	if (!isNaN(valAsNumber)) {
		// Literal integer
		if (!Number.isInteger(valAsNumber)) {
			throw Error('From must be an integer.');
		}
	} else {
		// Variable
		if (!namespace.has(val) && val.indexOf(" ") === -1) {
			throw Error(`Variable '${val}' does not exist.`);
		}
	}
}

class ForBlockModel extends BlockModel<4> {
	blocks = $state<BlockModel[]>([]);

	constructor(initialValues?: Tuple<string, 4>, blocks?: BlockModel[]) {
		super(4, initialValues);
		if (blocks) {
			this.blocks = blocks;
		}
	}

	transpile(namespace: Set<string>): string[] {
		const varName = this.values[0].trim();
		let from = this.values[1].trim();
		let to = this.values[2].trim();
		let step = this.values[3].trim();

		const fromAsNumber = Number(from);
		const toAsNumber = Number(to);
		const stepAsNumber = Number(step);

		// Variable name
		if (varName.length === 0) {
			throw Error('Variable name must be a string.');
		}

		if (!isAlpha(varName)) {
			throw Error('Variable name must be a string.');
		}

		if (namespace.has(varName)) {
			throw Error(`Variable '${varName}' already exists.`);
		}

		// From
		checkRangeValue(from, namespace);

		// To
		checkRangeValue(to, namespace);

		// Step
		checkRangeValue(step, namespace);

		if (!isNaN(fromAsNumber) && !isNaN(toAsNumber) && !isNaN(stepAsNumber)) {
			if (fromAsNumber <= toAsNumber && stepAsNumber < 0) {
				throw Error('Infinite loop.');
			}

			if (fromAsNumber >= toAsNumber && stepAsNumber > 0) {
				throw Error('Infinite loop.');
			}

			if (stepAsNumber === 0) {
				throw Error('Infinite loop.');
			}
		}

		namespace.add(varName);

		const blockOutput = transpile(this.blocks, namespace, {
			insertShowAtEnd: false
		});

		namespace.delete(varName);

		if (!isNaN(stepAsNumber)) {
			// Step is a number literal
			if (stepAsNumber >= 0) {
				return [
					`for (int ${varName} = ${from}; ${varName} <= ${to}; ${varName} += ${step}) {`,
					...blockOutput,
					'}'
				];
			} else {
				return [
					`for (int ${varName} = ${from}; ${varName} >= ${to}; ${varName} += ${step}) {`,
					...blockOutput,
					'}'
				];
			}
		} else {
			// Step is a variable;
			if (fromAsNumber <= toAsNumber) {
				return [
					`for (int ${varName} = ${from}; ${varName} <= ${to}; ${varName} += ${step}) {`,
					...blockOutput,
					'}'
				];
			} else {
				return [
					`for (int ${varName} = ${from}; ${varName} >= ${to}; ${varName} += ${step}) {`,
					...blockOutput,
					'}'
				];
			}
		}
	}
}

export default ForBlockModel;
