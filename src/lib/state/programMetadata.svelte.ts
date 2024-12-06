import type { get } from "svelte/store";

interface ProgramMetadata {
    ledPin: number;
    numLeds: number;
    implicitDelay: number;
}

const DEFAULT_LED_PIN = 7;
const DEFAULT_NUM_LEDS = 5;
const DEFAULT_IMPLICIT_DELAY = 100;

export function createProgramMetadataState() {
    let programMetadataState = $state<ProgramMetadata>({
        ledPin: DEFAULT_LED_PIN,
        numLeds: DEFAULT_NUM_LEDS,
        implicitDelay: DEFAULT_IMPLICIT_DELAY,
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
            if (newPin < 0) {
                throw Error("Pin number must be non-negative.");
            }

            programMetadataState.ledPin = this.ledPin;
        },
        set numLeds(newNumLeds: number) {
            if (newNumLeds < 0) {
                throw Error("Number of LEDs must be non-negative.");
            }

            programMetadataState.numLeds = this.numLeds;
        },
        set implicitDelay(newDelay: number) {
            if (newDelay < 1) {
                throw Error("Implicit delay must be positive.");
            }

            programMetadataState.implicitDelay = this.implicitDelay;
        }
    }
}

const programMetadata = createProgramMetadataState();

export default programMetadata;