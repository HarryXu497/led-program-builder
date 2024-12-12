interface ProgramMetadata {
	ledPin: number;
	numLeds: number;
	implicitDelay: number;
}

export const DEFAULT_LED_PIN = 7;
export const DEFAULT_NUM_LEDS = 5;
export const DEFAULT_IMPLICIT_DELAY = 100;

export function createProgramMetadataState() {
	let programMetadataState = $state<ProgramMetadata>({
		ledPin: DEFAULT_LED_PIN,
		numLeds: DEFAULT_NUM_LEDS,
		implicitDelay: DEFAULT_IMPLICIT_DELAY
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
		get implicitDelay() {
			return programMetadataState.implicitDelay;
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
		set implicitDelay(newDelay: number) {
			if (newDelay === null) {
				throw Error('Implicit delay must be an integer.');
			}
			if (newDelay < 1) {
				throw Error('Implicit delay must be positive.');
			}

			programMetadataState.implicitDelay = newDelay;
		}
	};
}

const programMetadata = createProgramMetadataState();

export default programMetadata;
