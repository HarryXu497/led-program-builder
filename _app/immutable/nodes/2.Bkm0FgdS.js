import{a as h,t as _,e as O,f as w}from"../chunks/disclose-version.BZbp36vD.js";import{i as x,l as g,p as T,a2 as B,t as W,j as H,v as i,a3 as q,s as L,g as s,k as S,h as A}from"../chunks/runtime.6L-jFwLp.js";import{p as M,i as C}from"../chunks/props.BH2ibpuf.js";import{c as J,B as K,a as Q,p as E,e as V,b as X,t as Y,D as f,L as Z,d as ee,f as oe,g as te,h as se,i as ae,j as P}from"../chunks/index.DvSONhjs.js";import"../chunks/legacy._LEJgqx-.js";var re=_('<p class="svelte-16vo0na">Start</p>'),ne=_('<svelte-css-wrapper style="display: contents"><!></svelte-css-wrapper>',1);function ie(a){var r=ne(),n=x(r);J(n,()=>({"--color-code-block":"hsl(0, 0%, 30%)","--color-code-block-light":"hsl(0, 0%, 40%)","--color-code-block-dark":"hsl(0, 0%, 20%)"})),K(n.lastChild,{children:(l,c)=>{var k=re();h(l,k)},$$slots:{default:!0}}),g(n),h(a,r)}class le extends Q{constructor(){super(0)}transpile(){return"FastLED.show();"}}function ce(a){return`
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
`.trim()}var de=_('<div class="block-wrapper"><!> <!></div>'),ue=(a,r)=>i(r,!0),pe=(a,r)=>i(r,!1),fe=_('<section class="program-wrapper svelte-13mhrvo"><!> <div class="program svelte-13mhrvo"></div></section> <button class="transpile-button svelte-13mhrvo">Run</button>',1);function ke(a,r){T(r,!0);let n=B(!1),l=B(!1),c=B(M([]));function k(){const e=[...s(c)];e.every(o=>!(o instanceof f))&&e.push(new f([E.implicitDelay.toString()]));const t=[];for(let o=1;o<e.length;o++){const p=e[o],m=e[o-1];p instanceof f&&!(m instanceof f)&&t.push(o)}e[e.length-1]instanceof f||t.push(e.length);for(let o=t.length-1;o>=0;o--)e.splice(t[o],0,new le);return e}function N(e){try{return e.transpile()}catch(t){return t instanceof Error&&(e.errorMessage=t.message),null}}async function F(){let t=k().map(N);t.some(o=>o===null)||(Y.value=ce(t.join(`
    `)))}function U(e){i(c,M(e.detail.items)),e.detail.info.trigger==="draggedEntered"?i(n,!0):e.detail.info.trigger!=="draggedOverIndex"&&i(n,!1)}function j(e){i(c,M(e.detail.items)),i(n,!1)}function z(){s(l)&&i(l,!1)}var $=fe();w("mouseup",q,z);var D=x($),b=S(D);ie(b);var u=L(b,2);V(u,31,()=>s(c),e=>e.id,(e,t,o)=>{var p=de();const m=A(()=>()=>s(c).splice(s(o),1));var y=S(p);{var I=d=>{te(d,{get model(){return s(t)},get onDelete(){return s(m)}})};C(y,d=>{s(t)instanceof Z&&d(I)})}var R=L(y,2);{var G=d=>{se(d,{get model(){return s(t)},get onDelete(){return s(m)}})};C(R,d=>{s(t)instanceof f&&d(G)})}g(p),ee(p,()=>ae,()=>({duration:300})),h(e,p)}),g(u),X(u,(e,t)=>{var o;return(o=oe)==null?void 0:o(e,t)},()=>({items:s(c),flipDurationMs:300})),g(D);var v=L(D,2);v.__mousedown=[ue,l],v.__mouseup=[pe,l],v.__click=F,W(()=>{P(u,"expand",s(n)),P(v,"clicked",s(l))}),w("consider",u,U),w("finalize",u,j),h(a,$),H()}O(["mousedown","mouseup","click"]);export{ke as component};
