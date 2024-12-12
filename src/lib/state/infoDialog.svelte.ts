import type { Snippet } from 'svelte';

function createInfoDialogState() {
	let infoDialogState = $state<Snippet | undefined>(undefined);

	return {
		get value() {
			return infoDialogState;
		},
		set value(snippet: Snippet | undefined) {
			infoDialogState = snippet;
		}
	};
}

const infoDialog = createInfoDialogState();

export default infoDialog;
