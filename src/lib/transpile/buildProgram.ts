import programMetadata from "$lib/state/programMetadata.svelte";

function buildProgram(loopCode: string) {
    return `
#include <FastLED.h>

#define LED_PIN ${programMetadata.ledPin}
#define NUM_LEDS ${programMetadata.numLeds}

CRGB leds[NUM_LEDS];

void setup() {
    FastLED.addLeds<WS2812, LED_PIN, GRB>(
        leds,
        NUM_LEDS
    );
}

void loop() {
${loopCode}
}
`.trim();
}

export default buildProgram;