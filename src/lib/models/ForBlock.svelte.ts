import transpile from '$lib/transpile/transpile';
import type { Tuple } from '$lib/types/Tuple.type';
import BlockModel from './Block.svelte';

function isAlpha(str: string) {
    return /^[a-zA-Z]+$/.test(str);
}

class ForBlockModel extends BlockModel<4> {
    blocks = $state<BlockModel[]>([]);

	constructor(initialValues?: Tuple<string, 4>) {
		super(4, initialValues);
	}

	transpile(namespace: Set<string>): string[] {
		const numericalValues = this.values.slice(1).map((value) =>
			value === '' ? NaN : Number(value)
		) as Tuple<number, 3>;
		const varName = this.values[0].trim();
		const from = numericalValues[0];
		const to = numericalValues[1];
		const step = numericalValues[2];

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
		if (isNaN(from) || !Number.isInteger(from)) {
			throw Error('From must be an non-negative integer.');
		} else if (from < 0) {
			throw Error('From must be an non-negative integer.');
		}

		// To
		if (isNaN(to) || !Number.isInteger(to)) {
			throw Error('To must be an non-negative integer.');
		} else if (to < 0) {
			throw Error('To must be an non-negative integer.');
		}

		// Step
		if (isNaN(step) || !Number.isInteger(step)) {
			throw Error('Step must be an integer.');
		}

        if (from <= to && step < 0) {
            throw Error("Infinite loop.");
        }

        if (from >= to && step > 0) {
            throw Error("Infinite loop.");
        }

        if (step === 0) {
            throw Error("Infinite loop.");
        }

        namespace.add(varName);

        const blockOutput = transpile(this.blocks, namespace, {
            insertDelay: false,
            insertShowAtEnd: false,
        });

        namespace.delete(varName);

        if (step >= 0) {
            return [
                `for (int ${varName} = ${from}; ${varName} <= ${to}; ${varName} += ${step}) {`,
                ...blockOutput,
                "}",
            ];
        } else {
            return [
                `for (int ${varName} = ${from}; ${varName} >= ${to}; ${varName} += ${step}) {`,
                ...blockOutput,
                "}",
            ];
        }
	}
}

export default ForBlockModel;
