import type { Tuple } from "$lib/types/Tuple.type";

abstract class BlockModel<N extends number = number> {
    private _values = $state<Tuple<string, N>>();

    constructor(length: N) {
        this._values = Array<string>(length).fill("") as Tuple<string, N>;
    }

    get values() {
        return this._values!;
    }

    set values(values: Tuple<string, N>) {
        this._values = values;
    }

    abstract transpile(): string;
}

export default BlockModel;