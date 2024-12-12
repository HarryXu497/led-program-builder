import{a as k,t as D,e as O,f as b}from"../chunks/disclose-version.DV_gVsHS.js";import{k as C,n as _,p as W,a5 as h,t as H,l as T,y as n,h as e,a6 as A,s as p,m as R,j as J}from"../chunks/runtime.DCLw9j56.js";import{p as w,i as g}from"../chunks/props.DRe7zKH5.js";import{c as K,B as Q,p as S,e as V,a as X,t as Y,b as Z,L as ee,D as te,F as se,R as oe,d as ae,f as re,g as ne,h as ie,i as le,j as de,k as ce,l as N}from"../chunks/transpilationOutput.svelte.C7r-xk4z.js";import"../chunks/legacy.BHoztA4p.js";var pe=D('<p class="svelte-1wmks0z">Start<i class="ri-snowflake-line svelte-1wmks0z"></i></p>'),ue=D('<svelte-css-wrapper style="display: contents"><!></svelte-css-wrapper>',1);function fe(i){var a=ue(),r=C(a);K(r,()=>({"--color-code-block":"var(--color-bg-1)","--color-code-block-light":"var(--color-bg-1-light)","--color-code-block-dark":"var(--color-bg-1-dark)"})),Q(r.lastChild,{children:(l,d)=>{var B=pe();k(l,B)},$$slots:{default:!0}}),_(r),k(i,a)}function ve(i){return`
#include <FastLED.h>

#define LED_PIN ${S.ledPin}
#define NUM_LEDS ${S.numLeds}

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
${i}
}
`.trim()}var me=D('<div class="block-wrapper"><!> <!> <!> <!></div>'),ge=(i,a)=>n(a,!0),_e=(i,a)=>n(a,!1),ke=D('<section class="program-wrapper svelte-ze7qcs"><!> <div class="program svelte-ze7qcs"></div></section> <button class="transpile-button svelte-ze7qcs">Run</button>',1);function we(i,a){W(a,!0);let r=h(!1),l=h(!1),d=h(w([]));function B(){try{const s=Y(e(d));Z.value=ve(s.join(`
`))}catch{return}}function F(s){n(d,w(s.detail.items)),s.detail.info.trigger==="draggedEntered"?n(r,!0):s.detail.info.trigger!=="draggedOverIndex"&&n(r,!1)}function U(s){n(d,w(s.detail.items)),n(r,!1)}function P(){e(l)&&n(l,!1)}var M=ke();b("mouseup",A,P);var L=C(M),E=R(L);fe(E);var c=p(E,2);V(c,31,()=>e(d),s=>s.id,(s,o,f)=>{var v=me();const m=J(()=>()=>e(d).splice(e(f),1));var $=R(v);{var x=t=>{ne(t,{get model(){return e(o)},get onDelete(){return e(m)}})};g($,t=>{e(o)instanceof ee&&t(x)})}var y=p($,2);{var G=t=>{ie(t,{get model(){return e(o)},get onDelete(){return e(m)}})};g(y,t=>{e(o)instanceof te&&t(G)})}var z=p(y,2);{var j=t=>{le(t,{get model(){return e(o)},get onDelete(){return e(m)}})};g(z,t=>{e(o)instanceof se&&t(j)})}var q=p(z,2);{var I=t=>{de(t,{get onDelete(){return e(m)}})};g(q,t=>{e(o)instanceof oe&&t(I)})}_(v),ae(v,()=>ce,()=>({duration:300})),k(s,v)}),_(c),X(c,(s,o)=>{var f;return(f=re)==null?void 0:f(s,o)},()=>({items:e(d),flipDurationMs:300})),_(L);var u=p(L,2);u.__mousedown=[ge,l],u.__mouseup=[_e,l],u.__click=B,H(()=>{N(c,"expand",e(r)),N(u,"clicked",e(l))}),b("consider",c,F),b("finalize",c,U),k(i,M),T()}O(["mousedown","mouseup","click"]);export{we as component};
