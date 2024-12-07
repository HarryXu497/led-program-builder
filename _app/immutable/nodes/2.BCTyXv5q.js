import{a as _,t as h,e as O,f as D}from"../chunks/disclose-version.BZbp36vD.js";import{i as x,l as g,p as T,a2 as B,t as W,j as H,v as i,a3 as q,s as L,g as o,k as S,h as A}from"../chunks/runtime.6L-jFwLp.js";import{p as M,i as C}from"../chunks/props.BH2ibpuf.js";import{c as J,B as K,a as Q,p as E,e as V,b as X,t as Y,D as f,L as Z,d as ee,f as te,g as se,h as oe,i as ae,j as P}from"../chunks/index.D1hFWOL8.js";import"../chunks/legacy._LEJgqx-.js";var ne=h('<p class="svelte-16vo0na">Start</p>'),re=h('<svelte-css-wrapper style="display: contents"><!></svelte-css-wrapper>',1);function ie(a){var n=re(),r=x(n);J(r,()=>({"--color-code-block":"hsl(0, 0%, 30%)","--color-code-block-light":"hsl(0, 0%, 40%)","--color-code-block-dark":"hsl(0, 0%, 20%)"})),K(r.lastChild,{children:(l,c)=>{var w=ne();_(l,w)},$$slots:{default:!0}}),g(r),_(a,n)}class le extends Q{constructor(){super(0)}transpile(){return"FastLED.show();"}}function ce(a){return`
#include <FastLED.h>

#define LED_PIN ${E.ledPin}
#define NUM_LEDS ${E.numLeds}

CRGB leds[NUM_LEDS];

void setup() {
    FastLED.addLeds<WS2812, LED_PIN, GRB>(
        leds,
        NUM_LEDS
    );
}

void loop() {
    ${a}
}
`.trim()}var de=h('<div class="block-wrapper"><!> <!></div>'),ue=(a,n)=>i(n,!0),pe=(a,n)=>i(n,!1),fe=h('<section class="program-wrapper svelte-mf9wwa"><!> <div class="program svelte-mf9wwa"></div></section> <button class="transpile-button svelte-mf9wwa">Run</button>',1);function we(a,n){T(n,!0);let r=B(!1),l=B(!1),c=B(M([]));function w(){const e=[...o(c)];e.every(t=>!(t instanceof f))&&e.push(new f([E.implicitDelay.toString()]));const s=[];for(let t=1;t<e.length;t++){const p=e[t],v=e[t-1];p instanceof f&&!(v instanceof f)&&s.push(t)}e[e.length-1]instanceof f||s.push(e.length);for(let t=s.length-1;t>=0;t--)e.splice(s[t],0,new le);return e}function N(e){try{return e.transpile()}catch(s){return s instanceof Error&&(e.errorMessage=s.message),null}}async function F(){let s=w().map(N);s.some(t=>t===null)||(Y.value=ce(s.join(`
    `)))}function U(e){i(c,M(e.detail.items)),e.detail.info.trigger==="draggedEntered"?i(r,!0):e.detail.info.trigger!=="draggedOverIndex"&&i(r,!1)}function j(e){i(c,M(e.detail.items)),i(r,!1)}function z(){o(l)&&i(l,!1)}var $=fe();D("mouseup",q,z);var k=x($),b=S(k);ie(b);var u=L(b,2);V(u,31,()=>o(c),e=>e.id,(e,s,t)=>{var p=de();const v=A(()=>()=>o(c).splice(o(t),1));var y=S(p);{var I=d=>{se(d,{get model(){return o(s)},get onDelete(){return o(v)}})};C(y,d=>{o(s)instanceof Z&&d(I)})}var R=L(y,2);{var G=d=>{oe(d,{get model(){return o(s)},get onDelete(){return o(v)}})};C(R,d=>{o(s)instanceof f&&d(G)})}g(p),ee(p,()=>ae,()=>({duration:300})),_(e,p)}),g(u),X(u,(e,s)=>{var t;return(t=te)==null?void 0:t(e,s)},()=>({items:o(c),flipDurationMs:300})),g(k);var m=L(k,2);m.__mousedown=[ue,l],m.__mouseup=[pe,l],m.__click=F,W(()=>{P(u,"expand",o(r)),P(m,"clicked",o(l))}),D("consider",u,U),D("finalize",u,j),_(a,$),H()}O(["mousedown","mouseup","click"]);export{we as component};
