interface ProgramMetadata {
    ledPin: number;
    numLeds: number;
}

const DEFAULT_LED_PIN = 7;
const DEFAULT_NUM_LEDS = 5;

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
            return programMetadataState.numLeds
        },
        set ledPin(newPin: number) {
            if (newPin < 0) {
                throw Error("Pin number must be non-negative.");
            }

            programMetadataState.ledPin = this.ledPin
        },
        set numLeds(newNumLeds: number) {
            if (newNumLeds < 0) {
                throw Error("Number of LEDs must be non-negative.");
            }

            programMetadataState.ledPin = this.ledPin
        }
    }
}

const programMetadata = createProgramMetadataState();

export default programMetadata;