import{a as D,t as k,e as W,f as L}from"../chunks/disclose-version.BZbp36vD.js";import{i as F,l as _,p as H,a2 as M,t as T,j as q,v as n,g as e,a3 as A,s as u,k as N,h as J}from"../chunks/runtime.6L-jFwLp.js";import{p as b,i as m}from"../chunks/props.D115FAoq.js";import{c as K,B as Q,p as y,e as V,a as X,t as Y,b as Z,L as ee,D as te,F as oe,R as ae,d as se,f as re,g as ne,h as ie,i as le,j as de,k as ce,l as C}from"../chunks/ForBlock.DAeFsqMZ.js";import"../chunks/legacy._LEJgqx-.js";var ue=k('<p class="svelte-16vo0na">Start</p>'),pe=k('<svelte-css-wrapper style="display: contents"><!></svelte-css-wrapper>',1);function fe(i){var s=pe(),r=F(s);K(r,()=>({"--color-code-block":"hsl(0, 0%, 30%)","--color-code-block-light":"hsl(0, 0%, 40%)","--color-code-block-dark":"hsl(0, 0%, 20%)"})),Q(r.lastChild,{children:(l,d)=>{var h=ue();D(l,h)},$$slots:{default:!0}}),_(r),D(i,s)}function ve(i){return`
#include <FastLED.h>

#define LED_PIN ${y.ledPin}
#define NUM_LEDS ${y.numLeds}

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
`.trim()}var ge=k('<div class="block-wrapper"><!> <!> <!> <!></div>'),me=(i,s)=>n(s,!0),_e=(i,s)=>n(s,!1),De=k('<section class="program-wrapper svelte-1u7ge8o"><!> <div class="program svelte-1u7ge8o"></div></section> <button class="transpile-button svelte-1u7ge8o">Run</button>',1);function be(i,s){H(s,!0);let r=M(!1),l=M(!1),d=M(b([]));function h(){try{const o=Y(e(d));Z.value=ve(o.join(`
`))}catch{return}}function U(o){n(d,b(o.detail.items)),o.detail.info.trigger==="draggedEntered"?n(r,!0):o.detail.info.trigger!=="draggedOverIndex"&&n(r,!1)}function P(o){n(d,b(o.detail.items)),n(r,!1)}function x(){e(l)&&n(l,!1)}var E=De();L("mouseup",A,x);var B=F(E),w=N(B);fe(w);var c=u(w,2);V(c,31,()=>e(d),o=>o.id,(o,a,f)=>{var v=ge();const g=J(()=>()=>e(d).splice(e(f),1));var $=N(v);{var G=t=>{ne(t,{get model(){return e(a)},get onDelete(){return e(g)}})};m($,t=>{e(a)instanceof ee&&t(G)})}var R=u($,2);{var j=t=>{ie(t,{get model(){return e(a)},get onDelete(){return e(g)}})};m(R,t=>{e(a)instanceof te&&t(j)})}var S=u(R,2);{var z=t=>{le(t,{get model(){return e(a)},get onDelete(){return e(g)}})};m(S,t=>{e(a)instanceof oe&&t(z)})}var I=u(S,2);{var O=t=>{de(t,{get onDelete(){return e(g)}})};m(I,t=>{e(a)instanceof ae&&t(O)})}_(v),se(v,()=>ce,()=>({duration:300})),D(o,v)}),_(c),X(c,(o,a)=>{var f;return(f=re)==null?void 0:f(o,a)},()=>({items:e(d),flipDurationMs:300})),_(B);var p=u(B,2);p.__mousedown=[me,l],p.__mouseup=[_e,l],p.__click=h,T(()=>{C(c,"expand",e(r)),C(p,"clicked",e(l))}),L("consider",c,U),L("finalize",c,P),D(i,E),q()}W(["mousedown","mouseup","click"]);export{be as component};
