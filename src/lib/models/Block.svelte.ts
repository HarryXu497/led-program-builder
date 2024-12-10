import type { Tuple } from '$lib/types/Tuple.type';
import { v4 as uuid4 } from 'uuid';

abstract class BlockModel<N extends number = number> {
	private _values = $state<Tuple<string, N>>();
	private _errorMessage = $state<string | null>(null);
	readonly id: string;

	constructor(length: N, initialValues?: Tuple<string, N>) {
		this._values = initialValues
			? initialValues
			: (Array<string>(length).fill('') as Tuple<string, N>);
		this.id = uuid4();
	}

	get values() {
		return this._values!;
	}

	set values(values: Tuple<string, N>) {
		this._values = values;
	}

	get errorMessage() {
		return this._errorMessage;
	}

	set errorMessage(newMessage: string | null) {
		this._errorMessage = newMessage;
	}

	abstract transpile(namespace: Set<string>): string[];
}

export default BlockModel;
