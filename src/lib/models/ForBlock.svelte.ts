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
        if (!isNaN(fromAsNumber)) {
            // Literal integer
            if (isNaN(fromAsNumber) || !Number.isInteger(fromAsNumber)) {
                throw Error('From must be an non-negative integer.');
            } else if (fromAsNumber < 0) {
                throw Error('From must be an non-negative integer.');
            }
        } else {
            // Variable
            if (!namespace.has(from)) {
                throw Error(`Variable '${from}' does not exist.`)
            }
        }

		// To
        if (!isNaN(toAsNumber)) {
            // Literal integer
            if (isNaN(toAsNumber) || !Number.isInteger(toAsNumber)) {
                throw Error('To must be an non-negative integer.');
            } else if (toAsNumber < 0) {
                throw Error('To must be an non-negative integer.');
            }
        } else {
            // Variable
            if (!namespace.has(to)) {
                throw Error(`Variable '${to}' does not exist.`)
            }
        }

        // Step
        if (!isNaN(stepAsNumber)) {
            // Literal integer
            if (isNaN(stepAsNumber) || !Number.isInteger(stepAsNumber)) {
                throw Error('Step must be an integer.');
            }
        } else {
            // Variable
            if (!namespace.has(step)) {
                throw Error(`Variable '${step}' does not exist.`)
            }
        }

        if (!isNaN(fromAsNumber) && !isNaN(toAsNumber) && !isNaN(stepAsNumber)) {
            if (fromAsNumber <= toAsNumber && stepAsNumber < 0) {
                throw Error("Infinite loop.");
            }
            
            if (fromAsNumber >= toAsNumber && stepAsNumber > 0) {
                throw Error("Infinite loop.");
            }
            
            if (stepAsNumber === 0) {
                throw Error("Infinite loop.");
            }
        }

        namespace.add(varName);

        const blockOutput = transpile(this.blocks, namespace, {
            insertDelay: false,
            insertShowAtEnd: false,
        });

        namespace.delete(varName);

        if (!isNaN(stepAsNumber)) {
            // Step is a number literal
            if (stepAsNumber >= 0) {
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
        } else {
            // Step is a variable; 
            if (fromAsNumber <= toAsNumber) {
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
}

export default ForBlockModel;
