import programMetadata from "$lib/state/programMetadata.svelte";

function buildProgram(loopCode: string) {
    return `
#include <FastLED.h>

#define LED_PIN ${programMetadata.ledPin}
#define NUM_LEDS ${programMetadata.numLeds}

CRGB leds[NUM_LEDS];

void setLED(int pos, int r, int g, int b) {
    if (pos < 0 || pos >= NUM_LEDS) {
        return;
    }

    if (r < 0 || r > 255) {
        return;
    }

    if (g < 0 || g > 255) {
        return;
    }

    if (b < 0 || b > 255) {
        return;
    }

    leds[pos] = CRGB(r, g, b);
}

void delayMs(long long ms) {
    if (ms < 0) {
        return;
    }

    delay(ms);
}

void reset() {
    for (int i = 0; i < NUM_LEDS; i++) {
        leds[i] = CRGB(0, 0, 0);
    }
}

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