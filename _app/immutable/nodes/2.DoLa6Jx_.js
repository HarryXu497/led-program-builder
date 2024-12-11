import{a as D,t as k,e as W,f as L}from"../chunks/disclose-version.D5w4cSXb.js";import{i as F,l as _,p as H,a2 as b,t as T,j as q,v as n,g as e,a3 as A,s as p,k as S,h as J}from"../chunks/runtime.BAvZWyQw.js";import{p as w,i as m}from"../chunks/props.DCbssK3p.js";import{c as K,B as Q,p as N,e as V,a as X,t as Y,b as Z,L as ee,D as te,F as oe,R as ae,d as se,f as re,g as ne,h as ie,i as le,j as de,k as ce,l as C}from"../chunks/ForBlock.XapPKTZr.js";import"../chunks/legacy.RcIN0DpY.js";var pe=k('<p class="svelte-weo6zh">Start<i class="ri-snowflake-line svelte-weo6zh"></i></p>'),ue=k('<svelte-css-wrapper style="display: contents"><!></svelte-css-wrapper>',1);function ve(i){var s=ue(),r=F(s);K(r,()=>({"--color-code-block":"var(--color-bg-1)","--color-code-block-light":"var(--color-bg-1-light)","--color-code-block-dark":"var(--color-bg-1-dark)"})),Q(r.lastChild,{children:(l,d)=>{var h=pe();D(l,h)},$$slots:{default:!0}}),_(r),D(i,s)}function fe(i){return`
#include <FastLED.h>

#define LED_PIN ${N.ledPin}
#define NUM_LEDS ${N.numLeds}

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
`.trim()}var ge=k('<div class="block-wrapper"><!> <!> <!> <!></div>'),me=(i,s)=>n(s,!0),_e=(i,s)=>n(s,!1),De=k('<section class="program-wrapper svelte-pvlds3"><!> <div class="program svelte-pvlds3"></div></section> <button class="transpile-button svelte-pvlds3">Run</button>',1);function we(i,s){H(s,!0);let r=b(!1),l=b(!1),d=b(w([]));function h(){try{const o=Y(e(d));Z.value=fe(o.join(`
`))}catch{return}}function U(o){n(d,w(o.detail.items)),o.detail.info.trigger==="draggedEntered"?n(r,!0):o.detail.info.trigger!=="draggedOverIndex"&&n(r,!1)}function z(o){n(d,w(o.detail.items)),n(r,!1)}function P(){e(l)&&n(l,!1)}var M=De();L("mouseup",A,P);var B=F(M),E=S(B);ve(E);var c=p(E,2);V(c,31,()=>e(d),o=>o.id,(o,a,v)=>{var f=ge();const g=J(()=>()=>e(d).splice(e(v),1));var $=S(f);{var x=t=>{ne(t,{get model(){return e(a)},get onDelete(){return e(g)}})};m($,t=>{e(a)instanceof ee&&t(x)})}var y=p($,2);{var G=t=>{ie(t,{get model(){return e(a)},get onDelete(){return e(g)}})};m(y,t=>{e(a)instanceof te&&t(G)})}var R=p(y,2);{var j=t=>{le(t,{get model(){return e(a)},get onDelete(){return e(g)}})};m(R,t=>{e(a)instanceof oe&&t(j)})}var I=p(R,2);{var O=t=>{de(t,{get onDelete(){return e(g)}})};m(I,t=>{e(a)instanceof ae&&t(O)})}_(f),se(f,()=>ce,()=>({duration:300})),D(o,f)}),_(c),X(c,(o,a)=>{var v;return(v=re)==null?void 0:v(o,a)},()=>({items:e(d),flipDurationMs:300})),_(B);var u=p(B,2);u.__mousedown=[me,l],u.__mouseup=[_e,l],u.__click=h,T(()=>{C(c,"expand",e(r)),C(u,"clicked",e(l))}),L("consider",c,U),L("finalize",c,z),D(i,M),q()}W(["mousedown","mouseup","click"]);export{we as component};
