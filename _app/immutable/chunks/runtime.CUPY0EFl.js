var Ct=Array.isArray,Nt=Array.from,bt=Object.defineProperty,pn=Object.getOwnPropertyDescriptor,Wn=Object.getOwnPropertyDescriptors,qt=Object.prototype,Ft=Array.prototype,Xn=Object.getPrototypeOf;function Pt(n){return typeof n=="function"}const Lt=()=>{};function Mt(n){return n()}function wn(n){for(var t=0;t<n.length;t++)n[t]()}const y=2,Tn=4,Y=8,un=16,A=32,J=64,tn=128,S=256,G=512,h=1024,I=2048,j=4096,N=8192,b=16384,Qn=32768,An=65536,Ht=1<<17,nt=1<<19,mn=1<<20,hn=Symbol("$state"),Yt=Symbol("legacy props"),jt=Symbol("");function gn(n){return n===this.v}function tt(n,t){return n!=n?t==t:n!==t||n!==null&&typeof n=="object"||typeof n=="function"}function In(n){return!tt(n,this.v)}function rt(n){throw new Error("effect_in_teardown")}function et(){throw new Error("effect_in_unowned_derived")}function st(n){throw new Error("effect_orphan")}function lt(){throw new Error("effect_update_depth_exceeded")}function Bt(){throw new Error("hydration_failed")}function Ut(n){throw new Error("props_invalid_value")}function Vt(){throw new Error("state_descriptors_fixed")}function Gt(){throw new Error("state_prototype_fixed")}function at(){throw new Error("state_unsafe_local_read")}function ut(){throw new Error("state_unsafe_mutation")}let W=!1;function Kt(){W=!0}function on(n){return{f:0,v:n,reactions:null,equals:gn,version:0}}function $t(n){return ot(on(n))}function Zt(n,t=!1){var e;const r=on(n);return t||(r.equals=In),W&&f!==null&&f.l!==null&&((e=f.l).s??(e.s=[])).push(r),r}function ot(n){return o!==null&&o.f&y&&(T===null?gt([n]):T.push(n)),n}function zt(n,t){return o!==null&&cn()&&o.f&(y|un)&&(T===null||!T.includes(n))&&ut(),it(n,t)}function it(n,t){return n.equals(t)||(n.v=t,n.version=Gn(),kn(n,I),cn()&&u!==null&&u.f&h&&!(u.f&A)&&(v!==null&&v.includes(n)?(m(u,I),nn(u)):g===null?It([n]):g.push(n))),t}function kn(n,t){var r=n.reactions;if(r!==null)for(var e=cn(),s=r.length,l=0;l<s;l++){var a=r[l],i=a.f;i&I||!e&&a===u||(m(a,t),i&(h|S)&&(i&y?kn(a,j):nn(a)))}}function Rn(n){console.warn("hydration_mismatch")}const Jt=1,Wt=2,Xt=4,Qt=8,nr=16,tr=1,rr=2,er=4,sr=8,lr=16,ar=4,ur=1,or=2,ft="[",_t="[!",ct="]",Sn={},ir=Symbol();let R=!1;function fr(n){R=n}let w;function P(n){if(n===null)throw Rn(),Sn;return w=n}function _r(){return P(O(w))}function cr(n){if(R){if(O(w)!==null)throw Rn(),Sn;w=n}}function vr(n=1){if(R){for(var t=n,r=w;t--;)r=O(r);w=r}}function pr(){for(var n=0,t=w;;){if(t.nodeType===8){var r=t.data;if(r===ct){if(n===0)return t;n-=1}else(r===ft||r===_t)&&(n+=1)}var e=O(t);t.remove(),t=e}}var dn,On,Dn;function hr(){if(dn===void 0){dn=window;var n=Element.prototype,t=Node.prototype;On=pn(t,"firstChild").get,Dn=pn(t,"nextSibling").get,n.__click=void 0,n.__className="",n.__attributes=null,n.__styles=null,n.__e=void 0,Text.prototype.__t=void 0}}function rn(n=""){return document.createTextNode(n)}function en(n){return On.call(n)}function O(n){return Dn.call(n)}function dr(n,t){if(!R)return en(n);var r=en(w);if(r===null)r=w.appendChild(rn());else if(t&&r.nodeType!==3){var e=rn();return r==null||r.before(e),P(e),e}return P(r),r}function Er(n,t){if(!R){var r=en(n);return r instanceof Comment&&r.data===""?O(r):r}return w}function yr(n,t=1,r=!1){let e=R?w:n;for(var s;t--;)s=e,e=O(e);if(!R)return e;var l=e==null?void 0:e.nodeType;if(r&&l!==3){var a=rn();return e===null?s==null||s.after(a):e.before(a),P(a),a}return P(e),e}function wr(n){n.textContent=""}function vt(n){var t=y|I;u===null?t|=S:u.f|=mn;var r=o!==null&&o.f&y?o:null;const e={children:null,ctx:f,deps:null,equals:gn,f:t,fn:n,reactions:null,v:null,version:0,parent:r??u};return r!==null&&(r.children??(r.children=[])).push(e),e}function Tr(n){const t=vt(n);return t.equals=In,t}function xn(n){var t=n.children;if(t!==null){n.children=null;for(var r=0;r<t.length;r+=1){var e=t[r];e.f&y?fn(e):F(e)}}}function pt(n){for(var t=n.parent;t!==null;){if(!(t.f&y))return t;t=t.parent}return null}function Cn(n){var t,r=u;z(pt(n));try{xn(n),t=Kn(n)}finally{z(r)}return t}function Nn(n){var t=Cn(n),r=(D||n.f&S)&&n.deps!==null?j:h;m(n,r),n.equals(t)||(n.v=t,n.version=Gn())}function fn(n){xn(n),H(n,0),m(n,b),n.v=n.children=n.deps=n.ctx=n.reactions=null}function bn(n){u===null&&o===null&&st(),o!==null&&o.f&S&&et(),_n&&rt()}function ht(n,t){var r=t.last;r===null?t.last=t.first=n:(r.next=n,n.prev=r,t.last=n)}function q(n,t,r,e=!0){var s=(n&J)!==0,l=u,a={ctx:f,deps:null,deriveds:null,nodes_start:null,nodes_end:null,f:n|I,first:null,fn:t,last:null,next:null,parent:s?null:l,prev:null,teardown:null,transitions:null,version:0};if(r){var i=x;try{En(!0),Q(a),a.f|=Qn}catch(_){throw F(a),_}finally{En(i)}}else t!==null&&nn(a);var p=r&&a.deps===null&&a.first===null&&a.nodes_start===null&&a.teardown===null&&(a.f&mn)===0;if(!p&&!s&&e&&(l!==null&&ht(a,l),o!==null&&o.f&y)){var d=o;(d.children??(d.children=[])).push(a)}return a}function Ar(n){const t=q(Y,null,!1);return m(t,h),t.teardown=n,t}function mr(n){bn();var t=u!==null&&(u.f&A)!==0&&f!==null&&!f.m;if(t){var r=f;(r.e??(r.e=[])).push({fn:n,effect:u,reaction:o})}else{var e=qn(n);return e}}function gr(n){return bn(),dt(n)}function Ir(n){const t=q(J,n,!0);return()=>{F(t)}}function qn(n){return q(Tn,n,!1)}function dt(n){return q(Y,n,!0)}function kr(n){return Et(n)}function Et(n,t=0){return q(Y|un|t,n,!0)}function Rr(n,t=!0){return q(Y|A,n,!0,t)}function Fn(n){var t=n.teardown;if(t!==null){const r=_n,e=o;yn(!0),Z(null);try{t.call(null)}finally{yn(r),Z(e)}}}function Pn(n){var t=n.deriveds;if(t!==null){n.deriveds=null;for(var r=0;r<t.length;r+=1)fn(t[r])}}function Ln(n,t=!1){var r=n.first;for(n.first=n.last=null;r!==null;){var e=r.next;F(r,t),r=e}}function yt(n){for(var t=n.first;t!==null;){var r=t.next;t.f&A||F(t),t=r}}function F(n,t=!0){var r=!1;if((t||n.f&nt)&&n.nodes_start!==null){for(var e=n.nodes_start,s=n.nodes_end;e!==null;){var l=e===s?null:O(e);e.remove(),e=l}r=!0}Ln(n,t&&!r),Pn(n),H(n,0),m(n,b);var a=n.transitions;if(a!==null)for(const p of a)p.stop();Fn(n);var i=n.parent;i!==null&&i.first!==null&&Mn(n),n.next=n.prev=n.teardown=n.ctx=n.deps=n.fn=n.nodes_start=n.nodes_end=null}function Mn(n){var t=n.parent,r=n.prev,e=n.next;r!==null&&(r.next=e),e!==null&&(e.prev=r),t!==null&&(t.first===n&&(t.first=e),t.last===n&&(t.last=r))}function Sr(n,t){var r=[];Hn(n,r,!0),wt(r,()=>{F(n),t&&t()})}function wt(n,t){var r=n.length;if(r>0){var e=()=>--r||t();for(var s of n)s.out(e)}else t()}function Hn(n,t,r){if(!(n.f&N)){if(n.f^=N,n.transitions!==null)for(const a of n.transitions)(a.is_global||r)&&t.push(a);for(var e=n.first;e!==null;){var s=e.next,l=(e.f&An)!==0||(e.f&A)!==0;Hn(e,t,l?r:!1),e=s}}}function Or(n){Yn(n,!0)}function Yn(n,t){if(n.f&N){B(n)&&Q(n),n.f^=N;for(var r=n.first;r!==null;){var e=r.next,s=(r.f&An)!==0||(r.f&A)!==0;Yn(r,s?t:!1),r=e}if(n.transitions!==null)for(const l of n.transitions)(l.is_global||t)&&l.in()}}const Tt=typeof requestIdleCallback>"u"?n=>setTimeout(n,1):requestIdleCallback;let K=!1,$=!1,sn=[],ln=[];function jn(){K=!1;const n=sn.slice();sn=[],wn(n)}function Bn(){$=!1;const n=ln.slice();ln=[],wn(n)}function Dr(n){K||(K=!0,queueMicrotask(jn)),sn.push(n)}function xr(n){$||($=!0,Tt(Bn)),ln.push(n)}function At(){K&&jn(),$&&Bn()}const Un=0,mt=1;let U=!1,V=Un,L=!1,M=null,x=!1,_n=!1;function En(n){x=n}function yn(n){_n=n}let k=[],C=0;let o=null;function Z(n){o=n}let u=null;function z(n){u=n}let T=null;function gt(n){T=n}let v=null,E=0,g=null;function It(n){g=n}let Vn=0,D=!1,f=null;function Gn(){return++Vn}function cn(){return!W||f!==null&&f.l===null}function B(n){var a,i;var t=n.f;if(t&I)return!0;if(t&j){var r=n.deps,e=(t&S)!==0;if(r!==null){var s;if(t&G){for(s=0;s<r.length;s++)((a=r[s]).reactions??(a.reactions=[])).push(n);n.f^=G}for(s=0;s<r.length;s++){var l=r[s];if(B(l)&&Nn(l),e&&u!==null&&!D&&!((i=l==null?void 0:l.reactions)!=null&&i.includes(n))&&(l.reactions??(l.reactions=[])).push(n),l.version>n.version)return!0}}e||m(n,h)}return!1}function kt(n,t){for(var r=t;r!==null;){if(r.f&tn)try{r.fn(n);return}catch{r.f^=tn}r=r.parent}throw U=!1,n}function Rt(n){return(n.f&b)===0&&(n.parent===null||(n.parent.f&tn)===0)}function X(n,t,r,e){if(U){if(r===null&&(U=!1),Rt(t))throw n;return}r!==null&&(U=!0);{kt(n,t);return}}function Kn(n){var vn;var t=v,r=E,e=g,s=o,l=D,a=T,i=f,p=n.f;v=null,E=0,g=null,o=p&(A|J)?null:n,D=!x&&(p&S)!==0,T=null,f=n.ctx;try{var d=(0,n.fn)(),_=n.deps;if(v!==null){var c;if(H(n,E),_!==null&&E>0)for(_.length=E+v.length,c=0;c<v.length;c++)_[E+c]=v[c];else n.deps=_=v;if(!D)for(c=E;c<_.length;c++)((vn=_[c]).reactions??(vn.reactions=[])).push(n)}else _!==null&&E<_.length&&(H(n,E),_.length=E);return d}finally{v=t,E=r,g=e,o=s,D=l,T=a,f=i}}function St(n,t){let r=t.reactions;if(r!==null){var e=r.indexOf(n);if(e!==-1){var s=r.length-1;s===0?r=t.reactions=null:(r[e]=r[s],r.pop())}}r===null&&t.f&y&&(v===null||!v.includes(t))&&(m(t,j),t.f&(S|G)||(t.f^=G),H(t,0))}function H(n,t){var r=n.deps;if(r!==null)for(var e=t;e<r.length;e++)St(n,r[e])}function Q(n){var t=n.f;if(!(t&b)){m(n,h);var r=u,e=f;u=n;try{t&un?yt(n):Ln(n),Pn(n),Fn(n);var s=Kn(n);n.teardown=typeof s=="function"?s:null,n.version=Vn}catch(l){X(l,n,r,e||n.ctx)}finally{u=r}}}function $n(){if(C>1e3){C=0;try{lt()}catch(n){if(M!==null)X(n,M,null);else throw n}}C++}function Zn(n){var t=n.length;if(t!==0){$n();var r=x;x=!0;try{for(var e=0;e<t;e++){var s=n[e];s.f&h||(s.f^=h);var l=[];zn(s,l),Ot(l)}}finally{x=r}}}function Ot(n){var t=n.length;if(t!==0)for(var r=0;r<t;r++){var e=n[r];if(!(e.f&(b|N)))try{B(e)&&(Q(e),e.deps===null&&e.first===null&&e.nodes_start===null&&(e.teardown===null?Mn(e):e.fn=null))}catch(s){X(s,e,null,e.ctx)}}}function Dt(){if(L=!1,C>1001)return;const n=k;k=[],Zn(n),L||(C=0,M=null)}function nn(n){V===Un&&(L||(L=!0,queueMicrotask(Dt))),M=n;for(var t=n;t.parent!==null;){t=t.parent;var r=t.f;if(r&(J|A)){if(!(r&h))return;t.f^=h}}k.push(t)}function zn(n,t){var r=n.first,e=[];n:for(;r!==null;){var s=r.f,l=(s&A)!==0,a=l&&(s&h)!==0,i=r.next;if(!a&&!(s&N))if(s&Y){if(l)r.f^=h;else try{B(r)&&Q(r)}catch(c){X(c,r,null,r.ctx)}var p=r.first;if(p!==null){r=p;continue}}else s&Tn&&e.push(r);if(i===null){let c=r.parent;for(;c!==null;){if(n===c)break n;var d=c.next;if(d!==null){r=d;continue n}c=c.parent}}r=i}for(var _=0;_<e.length;_++)p=e[_],t.push(p),zn(p,t)}function Jn(n){var t=V,r=k;try{$n();const s=[];V=mt,k=s,L=!1,Zn(r);var e=n==null?void 0:n();return At(),(k.length>0||s.length>0)&&Jn(),C=0,M=null,e}finally{V=t,k=r}}async function Cr(){await Promise.resolve(),Jn()}function Nr(n){var _;var t=n.f,r=(t&y)!==0;if(r&&t&b){var e=Cn(n);return fn(n),e}if(o!==null){T!==null&&T.includes(n)&&at();var s=o.deps;v===null&&s!==null&&s[E]===n?E++:v===null?v=[n]:v.push(n),g!==null&&u!==null&&u.f&h&&!(u.f&A)&&g.includes(n)&&(m(u,I),nn(u))}else if(r&&n.deps===null)for(var l=n,a=l.parent,i=l;a!==null;)if(a.f&y){var p=a;i=p,a=p.parent}else{var d=a;(_=d.deriveds)!=null&&_.includes(i)||(d.deriveds??(d.deriveds=[])).push(i);break}return r&&(l=n,B(l)&&Nn(l)),n.v}function br(n){const t=o;try{return o=null,n()}finally{o=t}}const xt=~(I|j|h);function m(n,t){n.f=n.f&xt|t}function qr(n,t=!1,r){f={p:f,c:null,e:null,m:!1,s:n,x:null,l:null},W&&!t&&(f.l={s:null,u:null,r1:[],r2:on(!1)})}function Fr(n){const t=f;if(t!==null){const a=t.e;if(a!==null){var r=u,e=o;t.e=null;try{for(var s=0;s<a.length;s++){var l=a[s];z(l.effect),Z(l.reaction),qn(l.fn)}}finally{z(r),Z(e)}}f=t.p,t.m=!0}return{}}function Pr(n){if(!(typeof n!="object"||!n||n instanceof EventTarget)){if(hn in n)an(n);else if(!Array.isArray(n))for(let t in n){const r=n[t];typeof r=="object"&&r&&hn in r&&an(r)}}}function an(n,t=new Set){if(typeof n=="object"&&n!==null&&!(n instanceof EventTarget)&&!t.has(n)){t.add(n),n instanceof Date&&n.getTime();for(let e in n)try{an(n[e],t)}catch{}const r=Xn(n);if(r!==Object.prototype&&r!==Array.prototype&&r!==Map.prototype&&r!==Set.prototype&&r!==Date.prototype){const e=Wn(r);for(let s in e){const l=e[s].get;if(l)try{l.call(n)}catch{}}}}}export{Tr as $,Ct as A,Et as B,R as C,_r as D,An as E,pr as F,P as G,_t as H,fr as I,Or as J,Rr as K,Sr as L,w as M,Ut as N,Ht as O,er as P,In as Q,A as R,hn as S,J as T,ir as U,z as V,tr as W,W as X,rr as Y,sr as Z,Yt as _,mr as a,lr as a0,Zt as a1,$t as a2,dn as a3,qn as a4,dt as a5,Dr as a6,Jn as a7,bt as a8,Cr as a9,wt as aA,Qt as aB,nr as aC,tt as aD,xr as aE,jt as aF,un as aG,Qn as aH,Pt as aI,ar as aJ,cn as aK,Z as aa,o as ab,Ar as ac,en as ad,ur as ae,or as af,rn as ag,hr as ah,ft as ai,O as aj,Sn as ak,ct as al,Rn as am,Bt as an,wr as ao,Nt as ap,Ir as aq,Lt as ar,F as as,vr as at,Xt as au,N as av,Jt as aw,it as ax,Wt as ay,Hn as az,br as b,f as c,wn as d,Kt as e,Pr as f,Nr as g,vt as h,Er as i,Fr as j,dr as k,cr as l,Ft as m,on as n,qt as o,qr as p,Vt as q,Mt as r,yr as s,kr as t,gr as u,zt as v,pn as w,u as x,Gt as y,Xn as z};