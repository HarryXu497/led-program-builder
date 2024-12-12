interface ProgramMetadata {
	ledPin: number;
	numLeds: number;
}

export const DEFAULT_LED_PIN = 7;
export const DEFAULT_NUM_LEDS = 5;

export function createProgramMetadataState() {
	let programMetadataState = $state<ProgramMetadata>({
		ledPin: DEFAULT_LED_PIN,
		numLeds: DEFAULT_NUM_LEDS,
	});

	return {
		get value() {
			return programMetadataState;
		},
		get ledPin() {
			return programMetadataState.ledPin;
		},
		get numLeds() {
			return programMetadataState.numLeds;
		},
		set ledPin(newPin: number) {
			if (newPin === null) {
				throw Error('Pin number must be an integer.');
			}
			if (newPin < 0) {
				throw Error('Pin number must be non-negative.');
			}

			programMetadataState.ledPin = newPin;
		},
		set numLeds(newNumLeds: number) {
			if (newNumLeds === null) {
				throw Error('Number of LEDs must be an integer.');
			}
			if (newNumLeds < 0) {
				throw Error('Number of LEDs must be non-negative.');
			}

			programMetadataState.numLeds = newNumLeds;
		},
	};
}

const programMetadata = createProgramMetadataState();

export default programMetadata;
