import{a as D,t as k,e as W,f as L}from"../chunks/disclose-version.BZbp36vD.js";import{i as C,l as _,p as H,a2 as M,t as T,j as q,v as n,g as e,a3 as A,s as u,k as y,h as J}from"../chunks/runtime.6L-jFwLp.js";import{p as w,i as m}from"../chunks/props.D115FAoq.js";import{c as K,B as Q,p as F,e as V,a as X,t as Y,b as Z,L as ee,D as ae,F as oe,R as te,d as se,f as re,g as ne,h as le,i as ie,j as de,k as ce,l as N}from"../chunks/ResetBlock.DM8CcjmT.js";import"../chunks/legacy._LEJgqx-.js";var ue=k('<p class="svelte-16vo0na">Start</p>'),pe=k('<svelte-css-wrapper style="display: contents"><!></svelte-css-wrapper>',1);function fe(l){var s=pe(),r=C(s);K(r,()=>({"--color-code-block":"hsl(0, 0%, 30%)","--color-code-block-light":"hsl(0, 0%, 40%)","--color-code-block-dark":"hsl(0, 0%, 20%)"})),Q(r.lastChild,{children:(i,d)=>{var h=ue();D(i,h)},$$slots:{default:!0}}),_(r),D(l,s)}function ve(l){return`
#include <FastLED.h>

#define LED_PIN ${F.ledPin}
#define NUM_LEDS ${F.numLeds}

CRGB leds[NUM_LEDS];

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
${l}
}
`.trim()}var ge=k('<div class="block-wrapper"><!> <!> <!> <!></div>'),me=(l,s)=>n(s,!0),_e=(l,s)=>n(s,!1),De=k('<section class="program-wrapper svelte-1u7ge8o"><!> <div class="program svelte-1u7ge8o"></div></section> <button class="transpile-button svelte-1u7ge8o">Run</button>',1);function we(l,s){H(s,!0);let r=M(!1),i=M(!1),d=M(w([]));function h(){try{const a=Y(e(d));Z.value=ve(a.join(`
`))}catch(a){console.log(a);return}}function P(a){n(d,w(a.detail.items)),a.detail.info.trigger==="draggedEntered"?n(r,!0):a.detail.info.trigger!=="draggedOverIndex"&&n(r,!1)}function U(a){n(d,w(a.detail.items)),n(r,!1)}function x(){e(i)&&n(i,!1)}var $=De();L("mouseup",A,x);var B=C($),E=y(B);fe(E);var c=u(E,2);V(c,31,()=>e(d),a=>a.id,(a,t,f)=>{var v=ge();const g=J(()=>()=>e(d).splice(e(f),1));var b=y(v);{var j=o=>{ne(o,{get model(){return e(t)},get onDelete(){return e(g)}})};m(b,o=>{e(t)instanceof ee&&o(j)})}var R=u(b,2);{var z=o=>{le(o,{get model(){return e(t)},get onDelete(){return e(g)}})};m(R,o=>{e(t)instanceof ae&&o(z)})}var S=u(R,2);{var G=o=>{ie(o,{get model(){return e(t)},get onDelete(){return e(g)}})};m(S,o=>{e(t)instanceof oe&&o(G)})}var I=u(S,2);{var O=o=>{de(o,{get onDelete(){return e(g)}})};m(I,o=>{e(t)instanceof te&&o(O)})}_(v),se(v,()=>ce,()=>({duration:300})),D(a,v)}),_(c),X(c,(a,t)=>{var f;return(f=re)==null?void 0:f(a,t)},()=>({items:e(d),flipDurationMs:300})),_(B);var p=u(B,2);p.__mousedown=[me,i],p.__mouseup=[_e,i],p.__click=h,T(()=>{N(c,"expand",e(r)),N(p,"clicked",e(i))}),L("consider",c,P),L("finalize",c,U),D(l,$),q()}W(["mousedown","mouseup","click"]);export{we as component};
