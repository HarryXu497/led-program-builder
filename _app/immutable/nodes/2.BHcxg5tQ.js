import{a as _,t as h,e as R,f as w}from"../chunks/disclose-version.DugVXRqY.js";import{i as x,l as g,p as T,a2 as B,t as W,j as H,v as i,a3 as q,s as L,g as o,k as S,h as A}from"../chunks/runtime.CUPY0EFl.js";import{p as M,i as C}from"../chunks/props.Db2q3_wU.js";import{c as J,B as K,a as Q,p as E,e as V,b as X,t as Y,D as f,L as Z,d as ee,f as te,g as se,h as oe,i as ae,j as P}from"../chunks/index.D0XIxnUK.js";import"../chunks/legacy.BLI7TORj.js";var re=h('<p class="svelte-16vo0na">Start</p>'),ne=h('<svelte-css-wrapper style="display: contents"><!></svelte-css-wrapper>',1);function ie(a){var r=ne(),n=x(r);J(n,()=>({"--color-code-block":"hsl(0, 0%, 30%)","--color-code-block-light":"hsl(0, 0%, 40%)","--color-code-block-dark":"hsl(0, 0%, 20%)"})),K(n.lastChild,{children:(l,c)=>{var k=re();_(l,k)},$$slots:{default:!0}}),g(n),_(a,r)}class le extends Q{constructor(){super(0)}transpile(){return"FastLED.show();"}}function ce(a){return`
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
`.trim()}var de=h('<div class="block-wrapper"><!> <!></div>'),ue=(a,r)=>i(r,!0),pe=(a,r)=>i(r,!1),fe=h('<section class="program-wrapper svelte-18t5i21"><!> <div class="program svelte-18t5i21"></div></section> <button class="transpile-button svelte-18t5i21">run</button>',1);function ke(a,r){T(r,!0);let n=B(!1),l=B(!1),c=B(M([]));function k(){const e=[...o(c)];e.every(t=>!(t instanceof f))&&e.push(new f([E.implicitDelay.toString()]));const s=[];for(let t=1;t<e.length;t++){const p=e[t],m=e[t-1];p instanceof f&&!(m instanceof f)&&s.push(t)}for(let t=s.length-1;t>=0;t--)e.splice(s[t],0,new le);return e}function N(e){try{return e.transpile()}catch(s){return s instanceof Error&&(e.errorMessage=s.message),null}}async function F(){const e=k();e.forEach(t=>t.errorMessage=null);let s=e.map(N);s.some(t=>t===null)||(Y.value=ce(s.join(`
    `)))}function U(e){i(c,M(e.detail.items)),e.detail.info.trigger==="draggedEntered"?i(n,!0):e.detail.info.trigger!=="draggedOverIndex"&&i(n,!1)}function j(e){i(c,M(e.detail.items)),i(n,!1)}function z(){o(l)&&i(l,!1)}var $=fe();w("mouseup",q,z);var D=x($),b=S(D);ie(b);var u=L(b,2);V(u,31,()=>o(c),e=>e.id,(e,s,t)=>{var p=de();const m=A(()=>()=>o(c).splice(o(t),1));var y=S(p);{var I=d=>{se(d,{get model(){return o(s)},get onDelete(){return o(m)}})};C(y,d=>{o(s)instanceof Z&&d(I)})}var G=L(y,2);{var O=d=>{oe(d,{get model(){return o(s)},get onDelete(){return o(m)}})};C(G,d=>{o(s)instanceof f&&d(O)})}g(p),ee(p,()=>ae,()=>({duration:300})),_(e,p)}),g(u),X(u,(e,s)=>{var t;return(t=te)==null?void 0:t(e,s)},()=>({items:o(c),flipDurationMs:300})),g(D);var v=L(D,2);v.__mousedown=[ue,l],v.__mouseup=[pe,l],v.__click=F,W(()=>{P(u,"expand",o(n)),P(v,"clicked",o(l))}),w("consider",u,U),w("finalize",u,j),_(a,$),H()}R(["mousedown","mouseup","click"]);export{ke as component};
