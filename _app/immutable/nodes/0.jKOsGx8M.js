import{j as ht,k as mn,a as ue,t as fe,b as On,l as Nn,e as xn,f as xe}from"../chunks/disclose-version.BZbp36vD.js";import{B as Rn,C as _t,D as Et,K as Sn,M as bt,ag as kn,an as Tn,al as An,G as Cn,ah as In,at as Dn,au as Ln,i as Be,t as Pe,av as Bn,s as L,l as j,p as xt,j as Rt,as as Pn,aw as Un,a2 as qe,v as te,a3 as Hn,k as q,g as X,h as jn}from"../chunks/runtime.6L-jFwLp.js";import{a as Fn,i as Je,p as ae}from"../chunks/props.BH2ibpuf.js";import{c as zn,B as Gn,k as Kn,r as $n,s as Le,l as St,L as Xe,D as Ye,e as vt,b as wt,t as kt,p as we,d as yt,f as Mt,g as Wn,i as mt,h as qn,j as Xn}from"../chunks/index.D1hFWOL8.js";function Yn(p,h,B,w,R){var C=p,P="",m;Rn(()=>{if(P===(P=h()??"")){_t&&Et();return}m!==void 0&&(Dn(m),m=void 0),P!==""&&(m=Sn(()=>{if(_t){bt.data;for(var O=Et(),S=O;O!==null&&(O.nodeType!==8||O.data!=="");)S=O,O=kn(O);if(O===null)throw Tn(),An;ht(bt,S),C=Cn(O);return}var U=P+"",T=mn(U);ht(In(T),T.lastChild),C.before(T)}))})}const Zn=Ln,Vn=!0,bi=Object.freeze(Object.defineProperty({__proto__:null,prerender:Vn},Symbol.toStringTag,{value:"Module"}));function Jn(p){return p&&p.__esModule&&Object.prototype.hasOwnProperty.call(p,"default")?p.default:p}var Ze,Ot;function Qn(){if(Ot)return Ze;Ot=1;function p(e){return e instanceof Map?e.clear=e.delete=e.set=function(){throw new Error("map is read-only")}:e instanceof Set&&(e.add=e.clear=e.delete=function(){throw new Error("set is read-only")}),Object.freeze(e),Object.getOwnPropertyNames(e).forEach(t=>{const i=e[t],u=typeof i;(u==="object"||u==="function")&&!Object.isFrozen(i)&&p(i)}),e}class h{constructor(t){t.data===void 0&&(t.data={}),this.data=t.data,this.isMatchIgnored=!1}ignoreMatch(){this.isMatchIgnored=!0}}function B(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")}function w(e,...t){const i=Object.create(null);for(const u in e)i[u]=e[u];return t.forEach(function(u){for(const y in u)i[y]=u[y]}),i}const R="</span>",C=e=>!!e.scope,P=(e,{prefix:t})=>{if(e.startsWith("language:"))return e.replace("language:","language-");if(e.includes(".")){const i=e.split(".");return[`${t}${i.shift()}`,...i.map((u,y)=>`${u}${"_".repeat(y+1)}`)].join(" ")}return`${t}${e}`};class m{constructor(t,i){this.buffer="",this.classPrefix=i.classPrefix,t.walk(this)}addText(t){this.buffer+=B(t)}openNode(t){if(!C(t))return;const i=P(t.scope,{prefix:this.classPrefix});this.span(i)}closeNode(t){C(t)&&(this.buffer+=R)}value(){return this.buffer}span(t){this.buffer+=`<span class="${t}">`}}const O=(e={})=>{const t={children:[]};return Object.assign(t,e),t};class S{constructor(){this.rootNode=O(),this.stack=[this.rootNode]}get top(){return this.stack[this.stack.length-1]}get root(){return this.rootNode}add(t){this.top.children.push(t)}openNode(t){const i=O({scope:t});this.add(i),this.stack.push(i)}closeNode(){if(this.stack.length>1)return this.stack.pop()}closeAllNodes(){for(;this.closeNode(););}toJSON(){return JSON.stringify(this.rootNode,null,4)}walk(t){return this.constructor._walk(t,this.rootNode)}static _walk(t,i){return typeof i=="string"?t.addText(i):i.children&&(t.openNode(i),i.children.forEach(u=>this._walk(t,u)),t.closeNode(i)),t}static _collapse(t){typeof t!="string"&&t.children&&(t.children.every(i=>typeof i=="string")?t.children=[t.children.join("")]:t.children.forEach(i=>{S._collapse(i)}))}}class U extends S{constructor(t){super(),this.options=t}addText(t){t!==""&&this.add(t)}startScope(t){this.openNode(t)}endScope(){this.closeNode()}__addSublanguage(t,i){const u=t.root;i&&(u.scope=`language:${i}`),this.add(u)}toHTML(){return new m(this,this.options).value()}finalize(){return this.closeAllNodes(),!0}}function T(e){return e?typeof e=="string"?e:e.source:null}function de(e){return F("(?=",e,")")}function oe(e){return F("(?:",e,")*")}function ge(e){return F("(?:",e,")?")}function F(...e){return e.map(i=>T(i)).join("")}function pe(e){const t=e[e.length-1];return typeof t=="object"&&t.constructor===Object?(e.splice(e.length-1,1),t):{}}function ne(...e){return"("+(pe(e).capture?"":"?:")+e.map(u=>T(u)).join("|")+")"}function he(e){return new RegExp(e.toString()+"|").exec("").length-1}function Re(e,t){const i=e&&e.exec(t);return i&&i.index===0}const H=/\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;function Y(e,{joinWith:t}){let i=0;return e.map(u=>{i+=1;const y=i;let M=T(u),a="";for(;M.length>0;){const r=H.exec(M);if(!r){a+=M;break}a+=M.substring(0,r.index),M=M.substring(r.index+r[0].length),r[0][0]==="\\"&&r[1]?a+="\\"+String(Number(r[1])+y):(a+=r[0],r[0]==="("&&i++)}return a}).map(u=>`(${u})`).join(t)}const J=/\b\B/,G="[a-zA-Z]\\w*",K="[a-zA-Z_]\\w*",ye="\\b\\d+(\\.\\d+)?",_e="(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",Me="\\b(0b[01]+)",Ue="!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",Ee=(e={})=>{const t=/^#![ ]*\//;return e.binary&&(e.begin=F(t,/.*\b/,e.binary,/\b.*/)),w({scope:"meta",begin:t,end:/$/,relevance:0,"on:begin":(i,u)=>{i.index!==0&&u.ignoreMatch()}},e)},ie={begin:"\\\\[\\s\\S]",relevance:0},He={scope:"string",begin:"'",end:"'",illegal:"\\n",contains:[ie]},E={scope:"string",begin:'"',end:'"',illegal:"\\n",contains:[ie]},$={begin:/\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/},N=function(e,t,i={}){const u=w({scope:"comment",begin:e,end:t,contains:[]},i);u.contains.push({scope:"doctag",begin:"[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)",end:/(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,excludeBegin:!0,relevance:0});const y=ne("I","a","is","so","us","to","at","if","in","it","on",/[A-Za-z]+['](d|ve|re|ll|t|s|n)/,/[A-Za-z]+[-][a-z]+/,/[A-Za-z][a-z]{2,}/);return u.contains.push({begin:F(/[ ]+/,"(",y,/[.]?[:]?([.][ ]|[ ])/,"){3}")}),u},me=N("//","$"),Oe=N("/\\*","\\*/"),Q=N("#","$"),Tt={scope:"number",begin:ye,relevance:0},At={scope:"number",begin:_e,relevance:0},Ct={scope:"number",begin:Me,relevance:0},It={scope:"regexp",begin:/\/(?=[^/\n]*\/)/,end:/\/[gimuy]*/,contains:[ie,{begin:/\[/,end:/\]/,relevance:0,contains:[ie]}]},Dt={scope:"title",begin:G,relevance:0},Lt={scope:"title",begin:K,relevance:0},Bt={begin:"\\.\\s*"+K,relevance:0};var Se=Object.freeze({__proto__:null,APOS_STRING_MODE:He,BACKSLASH_ESCAPE:ie,BINARY_NUMBER_MODE:Ct,BINARY_NUMBER_RE:Me,COMMENT:N,C_BLOCK_COMMENT_MODE:Oe,C_LINE_COMMENT_MODE:me,C_NUMBER_MODE:At,C_NUMBER_RE:_e,END_SAME_AS_BEGIN:function(e){return Object.assign(e,{"on:begin":(t,i)=>{i.data._beginMatch=t[1]},"on:end":(t,i)=>{i.data._beginMatch!==t[1]&&i.ignoreMatch()}})},HASH_COMMENT_MODE:Q,IDENT_RE:G,MATCH_NOTHING_RE:J,METHOD_GUARD:Bt,NUMBER_MODE:Tt,NUMBER_RE:ye,PHRASAL_WORDS_MODE:$,QUOTE_STRING_MODE:E,REGEXP_MODE:It,RE_STARTERS_RE:Ue,SHEBANG:Ee,TITLE_MODE:Dt,UNDERSCORE_IDENT_RE:K,UNDERSCORE_TITLE_MODE:Lt});function Pt(e,t){e.input[e.index-1]==="."&&t.ignoreMatch()}function Ut(e,t){e.className!==void 0&&(e.scope=e.className,delete e.className)}function Ht(e,t){t&&e.beginKeywords&&(e.begin="\\b("+e.beginKeywords.split(" ").join("|")+")(?!\\.)(?=\\b|\\s)",e.__beforeBegin=Pt,e.keywords=e.keywords||e.beginKeywords,delete e.beginKeywords,e.relevance===void 0&&(e.relevance=0))}function jt(e,t){Array.isArray(e.illegal)&&(e.illegal=ne(...e.illegal))}function Ft(e,t){if(e.match){if(e.begin||e.end)throw new Error("begin & end are not supported with match");e.begin=e.match,delete e.match}}function zt(e,t){e.relevance===void 0&&(e.relevance=1)}const Gt=(e,t)=>{if(!e.beforeMatch)return;if(e.starts)throw new Error("beforeMatch cannot be used with starts");const i=Object.assign({},e);Object.keys(e).forEach(u=>{delete e[u]}),e.keywords=i.keywords,e.begin=F(i.beforeMatch,de(i.begin)),e.starts={relevance:0,contains:[Object.assign(i,{endsParent:!0})]},e.relevance=0,delete i.beforeMatch},Kt=["of","and","for","in","not","or","if","then","parent","list","value"],$t="keyword";function Qe(e,t,i=$t){const u=Object.create(null);return typeof e=="string"?y(i,e.split(" ")):Array.isArray(e)?y(i,e):Object.keys(e).forEach(function(M){Object.assign(u,Qe(e[M],t,M))}),u;function y(M,a){t&&(a=a.map(r=>r.toLowerCase())),a.forEach(function(r){const l=r.split("|");u[l[0]]=[M,Wt(l[0],l[1])]})}}function Wt(e,t){return t?Number(t):qt(e)?0:1}function qt(e){return Kt.includes(e.toLowerCase())}const et={},ce=e=>{console.error(e)},tt=(e,...t)=>{console.log(`WARN: ${e}`,...t)},be=(e,t)=>{et[`${e}/${t}`]||(console.log(`Deprecated as of ${e}. ${t}`),et[`${e}/${t}`]=!0)},ke=new Error;function nt(e,t,{key:i}){let u=0;const y=e[i],M={},a={};for(let r=1;r<=t.length;r++)a[r+u]=y[r],M[r+u]=!0,u+=he(t[r-1]);e[i]=a,e[i]._emit=M,e[i]._multi=!0}function Xt(e){if(Array.isArray(e.begin)){if(e.skip||e.excludeBegin||e.returnBegin)throw ce("skip, excludeBegin, returnBegin not compatible with beginScope: {}"),ke;if(typeof e.beginScope!="object"||e.beginScope===null)throw ce("beginScope must be object"),ke;nt(e,e.begin,{key:"beginScope"}),e.begin=Y(e.begin,{joinWith:""})}}function Yt(e){if(Array.isArray(e.end)){if(e.skip||e.excludeEnd||e.returnEnd)throw ce("skip, excludeEnd, returnEnd not compatible with endScope: {}"),ke;if(typeof e.endScope!="object"||e.endScope===null)throw ce("endScope must be object"),ke;nt(e,e.end,{key:"endScope"}),e.end=Y(e.end,{joinWith:""})}}function Zt(e){e.scope&&typeof e.scope=="object"&&e.scope!==null&&(e.beginScope=e.scope,delete e.scope)}function Vt(e){Zt(e),typeof e.beginScope=="string"&&(e.beginScope={_wrap:e.beginScope}),typeof e.endScope=="string"&&(e.endScope={_wrap:e.endScope}),Xt(e),Yt(e)}function Jt(e){function t(a,r){return new RegExp(T(a),"m"+(e.case_insensitive?"i":"")+(e.unicodeRegex?"u":"")+(r?"g":""))}class i{constructor(){this.matchIndexes={},this.regexes=[],this.matchAt=1,this.position=0}addRule(r,l){l.position=this.position++,this.matchIndexes[this.matchAt]=l,this.regexes.push([l,r]),this.matchAt+=he(r)+1}compile(){this.regexes.length===0&&(this.exec=()=>null);const r=this.regexes.map(l=>l[1]);this.matcherRe=t(Y(r,{joinWith:"|"}),!0),this.lastIndex=0}exec(r){this.matcherRe.lastIndex=this.lastIndex;const l=this.matcherRe.exec(r);if(!l)return null;const A=l.findIndex((Ne,Fe)=>Fe>0&&Ne!==void 0),x=this.matchIndexes[A];return l.splice(0,A),Object.assign(l,x)}}class u{constructor(){this.rules=[],this.multiRegexes=[],this.count=0,this.lastIndex=0,this.regexIndex=0}getMatcher(r){if(this.multiRegexes[r])return this.multiRegexes[r];const l=new i;return this.rules.slice(r).forEach(([A,x])=>l.addRule(A,x)),l.compile(),this.multiRegexes[r]=l,l}resumingScanAtSamePosition(){return this.regexIndex!==0}considerAll(){this.regexIndex=0}addRule(r,l){this.rules.push([r,l]),l.type==="begin"&&this.count++}exec(r){const l=this.getMatcher(this.regexIndex);l.lastIndex=this.lastIndex;let A=l.exec(r);if(this.resumingScanAtSamePosition()&&!(A&&A.index===this.lastIndex)){const x=this.getMatcher(0);x.lastIndex=this.lastIndex+1,A=x.exec(r)}return A&&(this.regexIndex+=A.position+1,this.regexIndex===this.count&&this.considerAll()),A}}function y(a){const r=new u;return a.contains.forEach(l=>r.addRule(l.begin,{rule:l,type:"begin"})),a.terminatorEnd&&r.addRule(a.terminatorEnd,{type:"end"}),a.illegal&&r.addRule(a.illegal,{type:"illegal"}),r}function M(a,r){const l=a;if(a.isCompiled)return l;[Ut,Ft,Vt,Gt].forEach(x=>x(a,r)),e.compilerExtensions.forEach(x=>x(a,r)),a.__beforeBegin=null,[Ht,jt,zt].forEach(x=>x(a,r)),a.isCompiled=!0;let A=null;return typeof a.keywords=="object"&&a.keywords.$pattern&&(a.keywords=Object.assign({},a.keywords),A=a.keywords.$pattern,delete a.keywords.$pattern),A=A||/\w+/,a.keywords&&(a.keywords=Qe(a.keywords,e.case_insensitive)),l.keywordPatternRe=t(A,!0),r&&(a.begin||(a.begin=/\B|\b/),l.beginRe=t(l.begin),!a.end&&!a.endsWithParent&&(a.end=/\B|\b/),a.end&&(l.endRe=t(l.end)),l.terminatorEnd=T(l.end)||"",a.endsWithParent&&r.terminatorEnd&&(l.terminatorEnd+=(a.end?"|":"")+r.terminatorEnd)),a.illegal&&(l.illegalRe=t(a.illegal)),a.contains||(a.contains=[]),a.contains=[].concat(...a.contains.map(function(x){return Qt(x==="self"?a:x)})),a.contains.forEach(function(x){M(x,l)}),a.starts&&M(a.starts,r),l.matcher=y(l),l}if(e.compilerExtensions||(e.compilerExtensions=[]),e.contains&&e.contains.includes("self"))throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");return e.classNameAliases=w(e.classNameAliases||{}),M(e)}function it(e){return e?e.endsWithParent||it(e.starts):!1}function Qt(e){return e.variants&&!e.cachedVariants&&(e.cachedVariants=e.variants.map(function(t){return w(e,{variants:null},t)})),e.cachedVariants?e.cachedVariants:it(e)?w(e,{starts:e.starts?w(e.starts):null}):Object.isFrozen(e)?w(e):e}var en="11.10.0";class tn extends Error{constructor(t,i){super(t),this.name="HTMLInjectionError",this.html=i}}const je=B,st=w,rt=Symbol("nomatch"),nn=7,at=function(e){const t=Object.create(null),i=Object.create(null),u=[];let y=!0;const M="Could not find the language '{}', did you forget to load/include a language module?",a={disableAutodetect:!0,name:"Plain text",contains:[]};let r={ignoreUnescapedHTML:!1,throwUnescapedHTML:!1,noHighlightRe:/^(no-?highlight)$/i,languageDetectRe:/\blang(?:uage)?-([\w-]+)\b/i,classPrefix:"hljs-",cssSelector:"pre code",languages:null,__emitter:U};function l(n){return r.noHighlightRe.test(n)}function A(n){let c=n.className+" ";c+=n.parentNode?n.parentNode.className:"";const g=r.languageDetectRe.exec(c);if(g){const b=se(g[1]);return b||(tt(M.replace("{}",g[1])),tt("Falling back to no-highlight mode for this block.",n)),b?g[1]:"no-highlight"}return c.split(/\s+/).find(b=>l(b)||se(b))}function x(n,c,g){let b="",k="";typeof c=="object"?(b=n,g=c.ignoreIllegals,k=c.language):(be("10.7.0","highlight(lang, code, ...args) has been deprecated."),be("10.7.0",`Please use highlight(code, options) instead.
https://github.com/highlightjs/highlight.js/issues/2277`),k=n,b=c),g===void 0&&(g=!0);const W={code:b,language:k};Ae("before:highlight",W);const re=W.result?W.result:Ne(W.language,W.code,g);return re.code=W.code,Ae("after:highlight",re),re}function Ne(n,c,g,b){const k=Object.create(null);function W(s,o){return s.keywords[o]}function re(){if(!f.keywords){I.addText(v);return}let s=0;f.keywordPatternRe.lastIndex=0;let o=f.keywordPatternRe.exec(v),d="";for(;o;){d+=v.substring(s,o.index);const _=V.case_insensitive?o[0].toLowerCase():o[0],D=W(f,_);if(D){const[ee,yn]=D;if(I.addText(d),d="",k[_]=(k[_]||0)+1,k[_]<=nn&&(De+=yn),ee.startsWith("_"))d+=o[0];else{const Mn=V.classNameAliases[ee]||ee;Z(o[0],Mn)}}else d+=o[0];s=f.keywordPatternRe.lastIndex,o=f.keywordPatternRe.exec(v)}d+=v.substring(s),I.addText(d)}function Ce(){if(v==="")return;let s=null;if(typeof f.subLanguage=="string"){if(!t[f.subLanguage]){I.addText(v);return}s=Ne(f.subLanguage,v,!0,pt[f.subLanguage]),pt[f.subLanguage]=s._top}else s=ze(v,f.subLanguage.length?f.subLanguage:null);f.relevance>0&&(De+=s.relevance),I.__addSublanguage(s._emitter,s.language)}function z(){f.subLanguage!=null?Ce():re(),v=""}function Z(s,o){s!==""&&(I.startScope(o),I.addText(s),I.endScope())}function ut(s,o){let d=1;const _=o.length-1;for(;d<=_;){if(!s._emit[d]){d++;continue}const D=V.classNameAliases[s[d]]||s[d],ee=o[d];D?Z(ee,D):(v=ee,re(),v=""),d++}}function ft(s,o){return s.scope&&typeof s.scope=="string"&&I.openNode(V.classNameAliases[s.scope]||s.scope),s.beginScope&&(s.beginScope._wrap?(Z(v,V.classNameAliases[s.beginScope._wrap]||s.beginScope._wrap),v=""):s.beginScope._multi&&(ut(s.beginScope,o),v="")),f=Object.create(s,{parent:{value:f}}),f}function dt(s,o,d){let _=Re(s.endRe,d);if(_){if(s["on:end"]){const D=new h(s);s["on:end"](o,D),D.isMatchIgnored&&(_=!1)}if(_){for(;s.endsParent&&s.parent;)s=s.parent;return s}}if(s.endsWithParent)return dt(s.parent,o,d)}function _n(s){return f.matcher.regexIndex===0?(v+=s[0],1):(We=!0,0)}function En(s){const o=s[0],d=s.rule,_=new h(d),D=[d.__beforeBegin,d["on:begin"]];for(const ee of D)if(ee&&(ee(s,_),_.isMatchIgnored))return _n(o);return d.skip?v+=o:(d.excludeBegin&&(v+=o),z(),!d.returnBegin&&!d.excludeBegin&&(v=o)),ft(d,s),d.returnBegin?0:o.length}function bn(s){const o=s[0],d=c.substring(s.index),_=dt(f,s,d);if(!_)return rt;const D=f;f.endScope&&f.endScope._wrap?(z(),Z(o,f.endScope._wrap)):f.endScope&&f.endScope._multi?(z(),ut(f.endScope,s)):D.skip?v+=o:(D.returnEnd||D.excludeEnd||(v+=o),z(),D.excludeEnd&&(v=o));do f.scope&&I.closeNode(),!f.skip&&!f.subLanguage&&(De+=f.relevance),f=f.parent;while(f!==_.parent);return _.starts&&ft(_.starts,s),D.returnEnd?0:o.length}function vn(){const s=[];for(let o=f;o!==V;o=o.parent)o.scope&&s.unshift(o.scope);s.forEach(o=>I.openNode(o))}let Ie={};function gt(s,o){const d=o&&o[0];if(v+=s,d==null)return z(),0;if(Ie.type==="begin"&&o.type==="end"&&Ie.index===o.index&&d===""){if(v+=c.slice(o.index,o.index+1),!y){const _=new Error(`0 width match regex (${n})`);throw _.languageName=n,_.badRule=Ie.rule,_}return 1}if(Ie=o,o.type==="begin")return En(o);if(o.type==="illegal"&&!g){const _=new Error('Illegal lexeme "'+d+'" for mode "'+(f.scope||"<unnamed>")+'"');throw _.mode=f,_}else if(o.type==="end"){const _=bn(o);if(_!==rt)return _}if(o.type==="illegal"&&d==="")return 1;if($e>1e5&&$e>o.index*3)throw new Error("potential infinite loop, way more iterations than matches");return v+=d,d.length}const V=se(n);if(!V)throw ce(M.replace("{}",n)),new Error('Unknown language: "'+n+'"');const wn=Jt(V);let Ke="",f=b||wn;const pt={},I=new r.__emitter(r);vn();let v="",De=0,le=0,$e=0,We=!1;try{if(V.__emitTokens)V.__emitTokens(c,I);else{for(f.matcher.considerAll();;){$e++,We?We=!1:f.matcher.considerAll(),f.matcher.lastIndex=le;const s=f.matcher.exec(c);if(!s)break;const o=c.substring(le,s.index),d=gt(o,s);le=s.index+d}gt(c.substring(le))}return I.finalize(),Ke=I.toHTML(),{language:n,value:Ke,relevance:De,illegal:!1,_emitter:I,_top:f}}catch(s){if(s.message&&s.message.includes("Illegal"))return{language:n,value:je(c),illegal:!0,relevance:0,_illegalBy:{message:s.message,index:le,context:c.slice(le-100,le+100),mode:s.mode,resultSoFar:Ke},_emitter:I};if(y)return{language:n,value:je(c),illegal:!1,relevance:0,errorRaised:s,_emitter:I,_top:f};throw s}}function Fe(n){const c={value:je(n),illegal:!1,relevance:0,_top:a,_emitter:new r.__emitter(r)};return c._emitter.addText(n),c}function ze(n,c){c=c||r.languages||Object.keys(t);const g=Fe(n),b=c.filter(se).filter(lt).map(z=>Ne(z,n,!1));b.unshift(g);const k=b.sort((z,Z)=>{if(z.relevance!==Z.relevance)return Z.relevance-z.relevance;if(z.language&&Z.language){if(se(z.language).supersetOf===Z.language)return 1;if(se(Z.language).supersetOf===z.language)return-1}return 0}),[W,re]=k,Ce=W;return Ce.secondBest=re,Ce}function sn(n,c,g){const b=c&&i[c]||g;n.classList.add("hljs"),n.classList.add(`language-${b}`)}function Ge(n){let c=null;const g=A(n);if(l(g))return;if(Ae("before:highlightElement",{el:n,language:g}),n.dataset.highlighted){console.log("Element previously highlighted. To highlight again, first unset `dataset.highlighted`.",n);return}if(n.children.length>0&&(r.ignoreUnescapedHTML||(console.warn("One of your code blocks includes unescaped HTML. This is a potentially serious security risk."),console.warn("https://github.com/highlightjs/highlight.js/wiki/security"),console.warn("The element with unescaped HTML:"),console.warn(n)),r.throwUnescapedHTML))throw new tn("One of your code blocks includes unescaped HTML.",n.innerHTML);c=n;const b=c.textContent,k=g?x(b,{language:g,ignoreIllegals:!0}):ze(b);n.innerHTML=k.value,n.dataset.highlighted="yes",sn(n,g,k.language),n.result={language:k.language,re:k.relevance,relevance:k.relevance},k.secondBest&&(n.secondBest={language:k.secondBest.language,relevance:k.secondBest.relevance}),Ae("after:highlightElement",{el:n,result:k,text:b})}function rn(n){r=st(r,n)}const an=()=>{Te(),be("10.6.0","initHighlighting() deprecated.  Use highlightAll() now.")};function on(){Te(),be("10.6.0","initHighlightingOnLoad() deprecated.  Use highlightAll() now.")}let ot=!1;function Te(){if(document.readyState==="loading"){ot=!0;return}document.querySelectorAll(r.cssSelector).forEach(Ge)}function cn(){ot&&Te()}typeof window<"u"&&window.addEventListener&&window.addEventListener("DOMContentLoaded",cn,!1);function ln(n,c){let g=null;try{g=c(e)}catch(b){if(ce("Language definition for '{}' could not be registered.".replace("{}",n)),y)ce(b);else throw b;g=a}g.name||(g.name=n),t[n]=g,g.rawDefinition=c.bind(null,e),g.aliases&&ct(g.aliases,{languageName:n})}function un(n){delete t[n];for(const c of Object.keys(i))i[c]===n&&delete i[c]}function fn(){return Object.keys(t)}function se(n){return n=(n||"").toLowerCase(),t[n]||t[i[n]]}function ct(n,{languageName:c}){typeof n=="string"&&(n=[n]),n.forEach(g=>{i[g.toLowerCase()]=c})}function lt(n){const c=se(n);return c&&!c.disableAutodetect}function dn(n){n["before:highlightBlock"]&&!n["before:highlightElement"]&&(n["before:highlightElement"]=c=>{n["before:highlightBlock"](Object.assign({block:c.el},c))}),n["after:highlightBlock"]&&!n["after:highlightElement"]&&(n["after:highlightElement"]=c=>{n["after:highlightBlock"](Object.assign({block:c.el},c))})}function gn(n){dn(n),u.push(n)}function pn(n){const c=u.indexOf(n);c!==-1&&u.splice(c,1)}function Ae(n,c){const g=n;u.forEach(function(b){b[g]&&b[g](c)})}function hn(n){return be("10.7.0","highlightBlock will be removed entirely in v12.0"),be("10.7.0","Please use highlightElement now."),Ge(n)}Object.assign(e,{highlight:x,highlightAuto:ze,highlightAll:Te,highlightElement:Ge,highlightBlock:hn,configure:rn,initHighlighting:an,initHighlightingOnLoad:on,registerLanguage:ln,unregisterLanguage:un,listLanguages:fn,getLanguage:se,registerAliases:ct,autoDetection:lt,inherit:st,addPlugin:gn,removePlugin:pn}),e.debugMode=function(){y=!1},e.safeMode=function(){y=!0},e.versionString=en,e.regex={concat:F,lookahead:de,either:ne,optional:ge,anyNumberOfTimes:oe};for(const n in Se)typeof Se[n]=="object"&&p(Se[n]);return Object.assign(e,Se),e},ve=at({});return ve.newInstance=()=>at({}),Ze=ve,ve.HighlightJS=ve,ve.default=ve,Ze}var ei=Qn();const Nt=Jn(ei);function ti(p){const h=p.regex,B=p.COMMENT("//","$",{contains:[{begin:/\\\n/}]}),w="decltype\\(auto\\)",R="[a-zA-Z_]\\w*::",P="(?!struct)("+w+"|"+h.optional(R)+"[a-zA-Z_]\\w*"+h.optional("<[^<>]+>")+")",m={className:"type",begin:"\\b[a-z\\d_]*_t\\b"},S={className:"string",variants:[{begin:'(u8?|U|L)?"',end:'"',illegal:"\\n",contains:[p.BACKSLASH_ESCAPE]},{begin:"(u8?|U|L)?'("+"\\\\(x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4,8}|[0-7]{3}|\\S)"+"|.)",end:"'",illegal:"."},p.END_SAME_AS_BEGIN({begin:/(?:u8?|U|L)?R"([^()\\ ]{0,16})\(/,end:/\)([^()\\ ]{0,16})"/})]},U={className:"number",variants:[{begin:"[+-]?(?:(?:[0-9](?:'?[0-9])*\\.(?:[0-9](?:'?[0-9])*)?|\\.[0-9](?:'?[0-9])*)(?:[Ee][+-]?[0-9](?:'?[0-9])*)?|[0-9](?:'?[0-9])*[Ee][+-]?[0-9](?:'?[0-9])*|0[Xx](?:[0-9A-Fa-f](?:'?[0-9A-Fa-f])*(?:\\.(?:[0-9A-Fa-f](?:'?[0-9A-Fa-f])*)?)?|\\.[0-9A-Fa-f](?:'?[0-9A-Fa-f])*)[Pp][+-]?[0-9](?:'?[0-9])*)(?:[Ff](?:16|32|64|128)?|(BF|bf)16|[Ll]|)"},{begin:"[+-]?\\b(?:0[Bb][01](?:'?[01])*|0[Xx][0-9A-Fa-f](?:'?[0-9A-Fa-f])*|0(?:'?[0-7])*|[1-9](?:'?[0-9])*)(?:[Uu](?:LL?|ll?)|[Uu][Zz]?|(?:LL?|ll?)[Uu]?|[Zz][Uu]|)"}],relevance:0},T={className:"meta",begin:/#\s*[a-z]+\b/,end:/$/,keywords:{keyword:"if else elif endif define undef warning error line pragma _Pragma ifdef ifndef include"},contains:[{begin:/\\\n/,relevance:0},p.inherit(S,{className:"string"}),{className:"string",begin:/<.*?>/},B,p.C_BLOCK_COMMENT_MODE]},de={className:"title",begin:h.optional(R)+p.IDENT_RE,relevance:0},oe=h.optional(R)+p.IDENT_RE+"\\s*\\(",ge=["alignas","alignof","and","and_eq","asm","atomic_cancel","atomic_commit","atomic_noexcept","auto","bitand","bitor","break","case","catch","class","co_await","co_return","co_yield","compl","concept","const_cast|10","consteval","constexpr","constinit","continue","decltype","default","delete","do","dynamic_cast|10","else","enum","explicit","export","extern","false","final","for","friend","goto","if","import","inline","module","mutable","namespace","new","noexcept","not","not_eq","nullptr","operator","or","or_eq","override","private","protected","public","reflexpr","register","reinterpret_cast|10","requires","return","sizeof","static_assert","static_cast|10","struct","switch","synchronized","template","this","thread_local","throw","transaction_safe","transaction_safe_dynamic","true","try","typedef","typeid","typename","union","using","virtual","volatile","while","xor","xor_eq"],F=["bool","char","char16_t","char32_t","char8_t","double","float","int","long","short","void","wchar_t","unsigned","signed","const","static"],pe=["any","auto_ptr","barrier","binary_semaphore","bitset","complex","condition_variable","condition_variable_any","counting_semaphore","deque","false_type","future","imaginary","initializer_list","istringstream","jthread","latch","lock_guard","multimap","multiset","mutex","optional","ostringstream","packaged_task","pair","promise","priority_queue","queue","recursive_mutex","recursive_timed_mutex","scoped_lock","set","shared_future","shared_lock","shared_mutex","shared_timed_mutex","shared_ptr","stack","string_view","stringstream","timed_mutex","thread","true_type","tuple","unique_lock","unique_ptr","unordered_map","unordered_multimap","unordered_multiset","unordered_set","variant","vector","weak_ptr","wstring","wstring_view"],ne=["abort","abs","acos","apply","as_const","asin","atan","atan2","calloc","ceil","cerr","cin","clog","cos","cosh","cout","declval","endl","exchange","exit","exp","fabs","floor","fmod","forward","fprintf","fputs","free","frexp","fscanf","future","invoke","isalnum","isalpha","iscntrl","isdigit","isgraph","islower","isprint","ispunct","isspace","isupper","isxdigit","labs","launder","ldexp","log","log10","make_pair","make_shared","make_shared_for_overwrite","make_tuple","make_unique","malloc","memchr","memcmp","memcpy","memset","modf","move","pow","printf","putchar","puts","realloc","scanf","sin","sinh","snprintf","sprintf","sqrt","sscanf","std","stderr","stdin","stdout","strcat","strchr","strcmp","strcpy","strcspn","strlen","strncat","strncmp","strncpy","strpbrk","strrchr","strspn","strstr","swap","tan","tanh","terminate","to_underlying","tolower","toupper","vfprintf","visit","vprintf","vsprintf"],H={type:F,keyword:ge,literal:["NULL","false","nullopt","nullptr","true"],built_in:["_Pragma"],_type_hints:pe},Y={className:"function.dispatch",relevance:0,keywords:{_hint:ne},begin:h.concat(/\b/,/(?!decltype)/,/(?!if)/,/(?!for)/,/(?!switch)/,/(?!while)/,p.IDENT_RE,h.lookahead(/(<[^<>]+>|)\s*\(/))},J=[Y,T,m,B,p.C_BLOCK_COMMENT_MODE,U,S],G={variants:[{begin:/=/,end:/;/},{begin:/\(/,end:/\)/},{beginKeywords:"new throw return else",end:/;/}],keywords:H,contains:J.concat([{begin:/\(/,end:/\)/,keywords:H,contains:J.concat(["self"]),relevance:0}]),relevance:0},K={className:"function",begin:"("+P+"[\\*&\\s]+)+"+oe,returnBegin:!0,end:/[{;=]/,excludeEnd:!0,keywords:H,illegal:/[^\w\s\*&:<>.]/,contains:[{begin:w,keywords:H,relevance:0},{begin:oe,returnBegin:!0,contains:[de],relevance:0},{begin:/::/,relevance:0},{begin:/:/,endsWithParent:!0,contains:[S,U]},{relevance:0,match:/,/},{className:"params",begin:/\(/,end:/\)/,keywords:H,relevance:0,contains:[B,p.C_BLOCK_COMMENT_MODE,S,U,m,{begin:/\(/,end:/\)/,keywords:H,relevance:0,contains:["self",B,p.C_BLOCK_COMMENT_MODE,S,U,m]}]},m,B,p.C_BLOCK_COMMENT_MODE,T]};return{name:"C++",aliases:["cc","c++","h++","hpp","hh","hxx","cxx"],keywords:H,illegal:"</",classNameAliases:{"function.dispatch":"built_in"},contains:[].concat(G,K,Y,J,[T,{begin:"\\b(deque|list|queue|priority_queue|pair|stack|vector|map|set|bitset|multiset|multimap|unordered_map|unordered_set|unordered_multiset|unordered_multimap|array|tuple|optional|variant|function)\\s*<(?!<)",end:">",keywords:H,contains:["self",m]},{begin:p.IDENT_RE+"::",keywords:H},{match:[/\b(?:enum(?:\s+(?:class|struct))?|class|struct|union)/,/\s+/,/\w+/],className:{1:"keyword",3:"title.class"}}])}}var ni=fe(' <input type="number">',1),ii=fe('<svelte-css-wrapper style="display: contents"><!></svelte-css-wrapper>',1);function Ve(p,h){let B=Fn(h,"value",15);var w=ii(),R=Be(w);zn(R,()=>({"--color-code-block":"hsl(0, 0%, 60%)","--color-code-block-light":"hsl(0, 0%, 70%)","--color-code-block-dark":"hsl(0, 0%, 50%)","--border-width":"8px"})),Gn(R.lastChild,{children:(C,P)=>{Bn();var m=ni(),O=Be(m),S=L(O);$n(S),Pe(()=>On(O,`${h.setting??""} `)),Kn(S,B),ue(C,m)},$$slots:{default:!0}}),j(R),ue(p,w)}var si=fe('<meta property="og:url">'),ri=fe('<meta name="description"> <meta property="og:title"> <meta property="og:description"> <meta property="og:type" content="website"> <!> <!>',1);function ai(p,h){xt(h,!0),Nn(B=>{var w=ri(),R=Be(w),C=L(R,2),P=L(C,2),m=L(P,4);{var O=U=>{var T=si();Pe(()=>Le(T,"content",h.url)),ue(U,T)};Je(m,U=>{Zn||U(O)})}var S=L(m,2);St(S,()=>h.children??Pn),Pe(()=>{Un.title=h.title,Le(R,"content",h.description),Le(C,"content",h.title),Le(P,"content",h.description)}),ue(B,w)}),Rt()}function oi(){navigator.clipboard.writeText(kt.value)}var ci=fe('<div class="block-wrapper"><!></div>'),li=fe('<div class="block-wrapper"><!></div>'),ui=(p,h)=>te(h,!0),fi=(p,h)=>te(h,!1),di=fe('<!> <header class="svelte-it2lwp"><nav class="svelte-it2lwp"><ul class="logo svelte-it2lwp"><li class="svelte-it2lwp">LED Program Builder</li></ul></nav> <ul class="settings svelte-it2lwp"><!> <!> <!></ul></header> <main class="svelte-it2lwp"><section class="menu svelte-it2lwp"><div class="blocks svelte-it2lwp"><h2 class="svelte-it2lwp">Blocks</h2> <section class="menu-blocks svelte-it2lwp"></section> <section class="menu-blocks svelte-it2lwp"></section></div> <div class="output svelte-it2lwp"><h2 class="svelte-it2lwp">Output</h2> <pre class="svelte-it2lwp"><code class="svelte-it2lwp"><!></code></pre> <button class="copy svelte-it2lwp">Copy to Clipboard</button></div></section> <section class="playground"><!></section></main>',1);function vi(p,h){xt(h,!0),Nt.registerLanguage("cpp",ti);let B=jn(()=>Nt.highlight(kt.value,{language:"cpp"})),w=qe(!1),R=qe(ae([new Xe])),C=qe(ae([new Ye]));function P(E){te(C,ae(E.detail.items))}function m(E){te(C,ae(E.detail.items)),te(C,ae([new Ye]))}function O(E){te(R,ae(E.detail.items))}function S(E){te(R,ae(E.detail.items)),te(R,ae([new Xe]))}function U(){X(w)&&te(w,!1)}const T="LED Program Builder",de="A simple Scratch-like web interface to generate C++ code for an Arduino-controlled addressable LED strip.";var oe=di();xe("mouseup",Hn,U);var ge=Be(oe);ai(ge,{title:T,description:de,url:"https://harryxu497.github.io/led-program-builder/"});var F=L(ge,2),pe=L(q(F),2),ne=q(pe);Ve(ne,{setting:"Number of LEDs",get value(){return we.numLeds},set value(E){we.numLeds=E}});var he=L(ne,2);Ve(he,{setting:"LED Pin",get value(){return we.ledPin},set value(E){we.ledPin=E}});var Re=L(he,2);Ve(Re,{setting:"Implicit Delay",get value(){return we.implicitDelay},set value(E){we.implicitDelay=E}}),j(pe),j(F);var H=L(F,2),Y=q(H),J=q(Y),G=L(q(J),2);vt(G,29,()=>X(R),E=>E.id,(E,$)=>{var N=ci(),me=q(N);{var Oe=Q=>{Wn(Q,{get model(){return X($)}})};Je(me,Q=>{X($)instanceof Xe&&Q(Oe)})}j(N),yt(N,()=>mt,()=>({duration:300})),ue(E,N)}),j(G),wt(G,(E,$)=>{var N;return(N=Mt)==null?void 0:N(E,$)},()=>({items:X(R),flipDurationMs:300}));var K=L(G,2);vt(K,29,()=>X(C),E=>E.id,(E,$)=>{var N=li(),me=q(N);{var Oe=Q=>{qn(Q,{get model(){return X($)}})};Je(me,Q=>{X($)instanceof Ye&&Q(Oe)})}j(N),yt(N,()=>mt,()=>({duration:300})),ue(E,N)}),j(K),wt(K,(E,$)=>{var N;return(N=Mt)==null?void 0:N(E,$)},()=>({items:X(C),flipDurationMs:300})),j(J);var ye=L(J,2),_e=L(q(ye),2),Me=q(_e),Ue=q(Me);Yn(Ue,()=>X(B).value),j(Me),j(_e);var Ee=L(_e,2);Ee.__click=[oi],Ee.__mousedown=[ui,w],Ee.__mouseup=[fi,w],j(ye),j(Y);var ie=L(Y,2),He=q(ie);St(He,()=>h.children),j(ie),j(H),Pe(()=>Xn(Ee,"clicked",X(w))),xe("consider",G,O),xe("finalize",G,S),xe("consider",K,P),xe("finalize",K,m),ue(p,oe),Rt()}xn(["click","mousedown","mouseup"]);export{vi as component,bi as universal};
