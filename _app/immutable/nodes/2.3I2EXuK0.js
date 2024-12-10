import{a as g,t as _,e as G,f as B}from"../chunks/disclose-version.BZbp36vD.js";import{i as P,l as m,p as O,a2 as L,t as W,j as H,v as n,g as e,a3 as T,s as v,k as F,h as q}from"../chunks/runtime.6L-jFwLp.js";import{p as w,i as $}from"../chunks/props.D115FAoq.js";import{c as A,B as J,p as S,e as K,a as Q,t as V,b as X,L as Y,D as Z,F as ee,d as ae,f as oe,g as te,h as se,i as re,j as ne,k as N}from"../chunks/ForBlock.BgIBpF5R.js";import"../chunks/legacy._LEJgqx-.js";var le=_('<p class="svelte-16vo0na">Start</p>'),ie=_('<svelte-css-wrapper style="display: contents"><!></svelte-css-wrapper>',1);function de(l){var t=ie(),s=P(t);A(s,()=>({"--color-code-block":"hsl(0, 0%, 30%)","--color-code-block-light":"hsl(0, 0%, 40%)","--color-code-block-dark":"hsl(0, 0%, 20%)"})),J(s.lastChild,{children:(i,d)=>{var D=le();g(i,D)},$$slots:{default:!0}}),m(s),g(l,t)}function ce(l){return`
#include <FastLED.h>

#define LED_PIN ${S.ledPin}
#define NUM_LEDS ${S.numLeds}

CRGB leds[NUM_LEDS];

void setup() {
    FastLED.addLeds<WS2812, LED_PIN, GRB>(
        leds,
        NUM_LEDS
    );
}

void loop() {
${l}
}
`.trim()}var ue=_('<div class="block-wrapper"><!> <!> <!></div>'),pe=(l,t)=>n(t,!0),fe=(l,t)=>n(t,!1),ve=_('<section class="program-wrapper svelte-1u7ge8o"><!> <div class="program svelte-1u7ge8o"></div></section> <button class="transpile-button svelte-1u7ge8o">Run</button>',1);function ke(l,t){O(t,!0);let s=L(!1),i=L(!1),d=L(w([]));function D(){try{const a=V(e(d));X.value=ce(a.join(`
`))}catch(a){console.log(a);return}}function x(a){n(d,w(a.detail.items)),a.detail.info.trigger==="draggedEntered"?n(s,!0):a.detail.info.trigger!=="draggedOverIndex"&&n(s,!1)}function C(a){n(d,w(a.detail.items)),n(s,!1)}function U(){e(i)&&n(i,!1)}var M=ve();B("mouseup",T,U);var h=P(M),b=F(h);de(b);var c=v(b,2);K(c,31,()=>e(d),a=>a.id,(a,r,p)=>{var f=ue();const k=q(()=>()=>e(d).splice(e(p),1));var E=F(f);{var j=o=>{te(o,{get model(){return e(r)},get onDelete(){return e(k)}})};$(E,o=>{e(r)instanceof Y&&o(j)})}var y=v(E,2);{var z=o=>{se(o,{get model(){return e(r)},get onDelete(){return e(k)}})};$(y,o=>{e(r)instanceof Z&&o(z)})}var I=v(y,2);{var R=o=>{re(o,{get model(){return e(r)},get onDelete(){return e(k)}})};$(I,o=>{e(r)instanceof ee&&o(R)})}m(f),ae(f,()=>ne,()=>({duration:300})),g(a,f)}),m(c),Q(c,(a,r)=>{var p;return(p=oe)==null?void 0:p(a,r)},()=>({items:e(d),flipDurationMs:300})),m(h);var u=v(h,2);u.__mousedown=[pe,i],u.__mouseup=[fe,i],u.__click=D,W(()=>{N(c,"expand",e(s)),N(u,"clicked",e(i))}),B("consider",c,x),B("finalize",c,C),g(l,M),H()}G(["mousedown","mouseup","click"]);export{ke as component};
