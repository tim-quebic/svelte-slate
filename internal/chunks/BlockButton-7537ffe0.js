import{S as T,i as R,a6 as F,F as M,e as k,c as E,a as I,d as g,b as f,ai as D,g as C,I as j,aj as Z,aq as _e,J as V,K as L,L as N,q as p,o as v,ao as z,ar as $,as as he,k as H,w as B,m as K,x as P,at as ie,y as A,B as q,ad as Q,au as ge,O as S,a1 as U,ae as G,a2 as be,av as pe,l as ae,n as ve,p as ke,P as x,Q as ee,aw as Ee,s as te,ax as we,ay as oe,az as Ie}from"./vendor-8d990b52.js";import{g as ne,a as De,b as Ce,c as Me,f as fe,d as ue}from"./withSvelte-78bc6144.js";function Ve(n){let e,i,l,t,s;const a=n[3].default,u=M(a,n,n[2],null);return{c(){e=k("button"),i=k("div"),u&&u.c(),this.h()},l(o){e=E(o,"BUTTON",{class:!0});var r=I(e);i=E(r,"DIV",{class:!0});var d=I(i);u&&u.l(d),d.forEach(g),r.forEach(g),this.h()},h(){f(i,"class","svelte-16dfltd"),f(e,"class","svelte-16dfltd"),D(e,"active",n[0])},m(o,r){C(o,e,r),j(e,i),u&&u.m(i,null),l=!0,t||(s=Z(e,"mousedown",function(){_e(n[1])&&n[1].apply(this,arguments)}),t=!0)},p(o,[r]){n=o,u&&u.p&&(!l||r&4)&&V(u,a,n,n[2],l?N(a,n[2],r,null):L(n[2]),null),r&1&&D(e,"active",n[0])},i(o){l||(p(u,o),l=!0)},o(o){v(u,o),l=!1},d(o){o&&g(e),u&&u.d(o),t=!1,s()}}}function Le(n,e,i){let{$$slots:l={},$$scope:t}=e,{active:s=!1}=e,{onMouseDown:a=()=>{}}=e;return n.$$set=u=>{"active"in u&&i(0,s=u.active),"onMouseDown"in u&&i(1,a=u.onMouseDown),"$$scope"in u&&i(2,t=u.$$scope)},[s,a,t,l]}class J extends T{constructor(e){super();R(this,e,Le,Ve,F,{active:0,onMouseDown:1})}}function Ne(n){let e,i;return e=new ge({}),{c(){B(e.$$.fragment)},l(l){P(e.$$.fragment,l)},m(l,t){A(e,l,t),i=!0},i(l){i||(p(e.$$.fragment,l),i=!0)},o(l){v(e.$$.fragment,l),i=!1},d(l){q(e,l)}}}function je(n){let e,i,l,t,s,a,u,o,r;const d=n[14].default,c=M(d,n,n[16],null);return o=new J({props:{onMouseDown:n[9],$$slots:{default:[Ne]},$$scope:{ctx:n}}}),{c(){e=k("div"),c&&c.c(),i=H(),l=k("div"),t=k("img"),a=H(),u=k("div"),B(o.$$.fragment),this.h()},l(m){e=E(m,"DIV",{class:!0,"data-slate-node":!0,"data-slate-inline":!0,"data-slate-void":!0,dir:!0,contenteditable:!0});var _=I(e);c&&c.l(_),i=K(_),l=E(_,"DIV",{contenteditable:!0,class:!0});var b=I(l);t=E(b,"IMG",{src:!0,alt:!0,class:!0}),a=K(b),u=E(b,"DIV",{class:!0});var O=I(u);P(o.$$.fragment,O),O.forEach(g),b.forEach(g),_.forEach(g),this.h()},h(){ie(t.src,s=n[1].url)||f(t,"src",s),f(t,"alt",""),f(t,"class","svelte-1jl2hnu"),D(t,"selected",n[5]),f(u,"class","delete svelte-1jl2hnu"),D(u,"selected",n[5]),f(l,"contenteditable",!1),f(l,"class","image svelte-1jl2hnu"),f(e,"class","container svelte-1jl2hnu"),f(e,"data-slate-node","element"),f(e,"data-slate-inline",n[2]),f(e,"data-slate-void",n[3]),f(e,"dir",n[4]),f(e,"contenteditable",!1)},m(m,_){C(m,e,_),c&&c.m(e,null),j(e,i),j(e,l),j(l,t),j(l,a),j(l,u),A(o,u,null),n[15](e),r=!0},p(m,[_]){c&&c.p&&(!r||_&65536)&&V(c,d,m,m[16],r?N(d,m[16],_,null):L(m[16]),null),(!r||_&2&&!ie(t.src,s=m[1].url))&&f(t,"src",s),_&32&&D(t,"selected",m[5]);const b={};_&65536&&(b.$$scope={dirty:_,ctx:m}),o.$set(b),_&32&&D(u,"selected",m[5]),(!r||_&4)&&f(e,"data-slate-inline",m[2]),(!r||_&8)&&f(e,"data-slate-void",m[3]),(!r||_&16)&&f(e,"dir",m[4])},i(m){r||(p(c,m),p(o.$$.fragment,m),r=!0)},o(m){v(c,m),v(o.$$.fragment,m),r=!1},d(m){m&&g(e),c&&c.d(m),q(o),n[15](null)}}}function re(n){return n.type==="image"}function pt(n){const{insertData:e,isVoid:i}=n;return n.isVoid=l=>re(l)?!0:i(l),n.insertData=l=>{const t=l.getData("text/plain"),{files:s}=l;if(s&&s.length>0)for(let a=0;a<s.length;a++){const u=s[a],o=new FileReader,[r]=u.type.split("/");r==="image"&&(o.addEventListener("load",()=>{const d=o.result;le(n,d)}),o.readAsDataURL(u))}else Be(t)?le(n,t):e(l)},n}function le(n,e){const i={type:"image",url:e,children:[{text:""}]};z.insertNodes(n,i)}function Be(n){if(!n||!$(n))return!1;const e=new URL(n).pathname.split(".").pop();return he.includes(e)}function Pe(n,e,i){let l,t,s,a,u,{$$slots:o={},$$scope:r}=e,{element:d}=e,{isInline:c}=e,{isVoid:m}=e,{contenteditable:_}=e,{ref:b=void 0}=e,{dir:O=void 0}=e;const y=ne(),Y=De();Q(n,Y,w=>i(12,a=w));const W=Ce();Q(n,W,w=>i(11,s=w));const X=Me();Q(n,X,w=>i(13,u=w));function h(){z.removeNodes(y,{at:t})}function me(w){S[w?"unshift":"push"](()=>{b=w,i(0,b)})}return n.$$set=w=>{"element"in w&&i(1,d=w.element),"isInline"in w&&i(2,c=w.isInline),"isVoid"in w&&i(3,m=w.isVoid),"contenteditable"in w&&i(10,_=w.contenteditable),"ref"in w&&i(0,b=w.ref),"dir"in w&&i(4,O=w.dir),"$$scope"in w&&i(16,r=w.$$scope)},n.$$.update=()=>{n.$$.dirty&14336&&i(5,l=u?!1:a&&s),n.$$.dirty&2&&(t=fe(d))},[b,d,c,m,O,l,Y,W,X,h,_,s,a,u,o,me,r]}class Ae extends T{constructor(e){super();R(this,e,Pe,je,F,{element:1,isInline:2,isVoid:3,contenteditable:10,ref:0,dir:4})}}function de(n,e){if(n.selection){const i=U.marks(n);return i?i[e]===!0:!1}else return!1}function qe(n,e){de(n,e)?U.removeMark(n,e):U.addMark(n,e,!0)}function se(n,e){if(n.selection){const[i]=Array.from(U.nodes(n,{at:U.unhangRange(n,n.selection),match:l=>!U.isEditor(l)&&G.isElement(l)&&l.type===e}));return!!i}else return!1}const ce=["numbered-list","bulleted-list"];function Se(n,e){const i=se(n,e),l=ce.includes(e);z.unwrapNodes(n,{match:s=>!U.isEditor(s)&&G.isElement(s)&&ce.includes(s.type),split:!0});const t={type:i?"paragraph":l?"list-item":e};if(z.setNodes(n,t),!i&&l){const s={type:e,children:[]};z.wrapNodes(n,s)}}function Ue(n){let e,i,l,t,s,a,u,o,r;const d=n[8].default,c=M(d,n,n[7],null);return{c(){e=k("div"),i=k("span"),l=k("input"),s=H(),a=k("span"),c&&c.c(),this.h()},l(m){e=E(m,"DIV",{class:!0,"data-slate-node":!0,"data-slate-inline":!0,"data-slate-void":!0,dir:!0,contenteditable:!0});var _=I(e);i=E(_,"SPAN",{class:!0,contenteditable:!0});var b=I(i);l=E(b,"INPUT",{type:!0}),b.forEach(g),s=K(_),a=E(_,"SPAN",{class:!0,contenteditable:!0});var O=I(a);c&&c.l(O),O.forEach(g),_.forEach(g),this.h()},h(){f(l,"type","checkbox"),l.checked=t=n[1].checked,f(i,"class","checkbox svelte-iurm0l"),f(i,"contenteditable",!1),f(a,"class","content svelte-iurm0l"),f(a,"contenteditable",n[4]),D(a,"checked",n[1].checked),f(e,"class","check-list-item svelte-iurm0l"),f(e,"data-slate-node","element"),f(e,"data-slate-inline",n[2]),f(e,"data-slate-void",n[3]),f(e,"dir",n[5]),f(e,"contenteditable",n[4])},m(m,_){C(m,e,_),j(e,i),j(i,l),j(e,s),j(e,a),c&&c.m(a,null),n[9](e),u=!0,o||(r=Z(l,"change",n[6]),o=!0)},p(m,[_]){(!u||_&2&&t!==(t=m[1].checked))&&(l.checked=t),c&&c.p&&(!u||_&128)&&V(c,d,m,m[7],u?N(d,m[7],_,null):L(m[7]),null),(!u||_&16)&&f(a,"contenteditable",m[4]),_&2&&D(a,"checked",m[1].checked),(!u||_&4)&&f(e,"data-slate-inline",m[2]),(!u||_&8)&&f(e,"data-slate-void",m[3]),(!u||_&32)&&f(e,"dir",m[5]),(!u||_&16)&&f(e,"contenteditable",m[4])},i(m){u||(p(c,m),u=!0)},o(m){v(c,m),u=!1},d(m){m&&g(e),c&&c.d(m),n[9](null),o=!1,r()}}}function Oe(n){return n.type==="check-list-item"}function vt(n){const{deleteBackward:e}=n;return n.deleteBackward=(...i)=>{const{selection:l}=n;if(l&&be.isCollapsed(l)){const[t]=U.nodes(n,{match:s=>!U.isEditor(s)&&G.isElement(s)&&s.type==="check-list-item"});if(t){const[,s]=t,a=U.start(n,s);if(pe.equals(l.anchor,a)){const u={type:"paragraph"};z.setNodes(n,u,{match:o=>!U.isEditor(o)&&G.isElement(o)&&o.type==="check-list-item"});return}}}e(...i)},n}function kt(n){if(se(n,"check-list-item"))z.unwrapNodes(n,{match:i=>!U.isEditor(i)&&G.isElement(i)&&i.type==="check-list-item",split:!0});else{const i={type:"check-list-item",checked:!1,children:[]};z.wrapNodes(n,i)}}function Te(n,e,i){let{$$slots:l={},$$scope:t}=e,{element:s}=e,{isInline:a}=e,{isVoid:u}=e,{contenteditable:o}=e,{ref:r=void 0}=e,{dir:d=void 0}=e;const c=ne();function m(b){z.setNodes(c,{checked:b.target.checked},{at:fe(s)})}function _(b){S[b?"unshift":"push"](()=>{r=b,i(0,r)})}return n.$$set=b=>{"element"in b&&i(1,s=b.element),"isInline"in b&&i(2,a=b.isInline),"isVoid"in b&&i(3,u=b.isVoid),"contenteditable"in b&&i(4,o=b.contenteditable),"ref"in b&&i(0,r=b.ref),"dir"in b&&i(5,d=b.dir),"$$scope"in b&&i(7,t=b.$$scope)},[r,s,a,u,o,d,m,t,l,_]}class Re extends T{constructor(e){super();R(this,e,Te,Ue,F,{element:1,isInline:2,isVoid:3,contenteditable:4,ref:0,dir:5})}}function ze(n){let e,i;const l=n[6].default,t=M(l,n,n[16],null);return{c(){e=k("p"),t&&t.c(),this.h()},l(s){e=E(s,"P",{"data-slate-node":!0,"data-slate-inline":!0,"data-slate-void":!0,dir:!0,contenteditable:!0,class:!0});var a=I(e);t&&t.l(a),a.forEach(g),this.h()},h(){f(e,"data-slate-node","element"),f(e,"data-slate-inline",n[2]),f(e,"data-slate-void",n[3]),f(e,"dir",n[5]),f(e,"contenteditable",n[4]),f(e,"class","svelte-kkn06x")},m(s,a){C(s,e,a),t&&t.m(e,null),n[15](e),i=!0},p(s,a){t&&t.p&&(!i||a&65536)&&V(t,l,s,s[16],i?N(l,s[16],a,null):L(s[16]),null),(!i||a&4)&&f(e,"data-slate-inline",s[2]),(!i||a&8)&&f(e,"data-slate-void",s[3]),(!i||a&32)&&f(e,"dir",s[5]),(!i||a&16)&&f(e,"contenteditable",s[4])},i(s){i||(p(t,s),i=!0)},o(s){v(t,s),i=!1},d(s){s&&g(e),t&&t.d(s),n[15](null)}}}function Fe(n){let e,i,l;function t(a){n[14](a)}let s={element:n[1],isInline:n[2],isVoid:n[3],dir:n[5],contenteditable:n[4],$$slots:{default:[Xe]},$$scope:{ctx:n}};return n[0]!==void 0&&(s.ref=n[0]),e=new Re({props:s}),S.push(()=>x(e,"ref",t)),{c(){B(e.$$.fragment)},l(a){P(e.$$.fragment,a)},m(a,u){A(e,a,u),l=!0},p(a,u){const o={};u&2&&(o.element=a[1]),u&4&&(o.isInline=a[2]),u&8&&(o.isVoid=a[3]),u&32&&(o.dir=a[5]),u&16&&(o.contenteditable=a[4]),u&65536&&(o.$$scope={dirty:u,ctx:a}),!i&&u&1&&(i=!0,o.ref=a[0],ee(()=>i=!1)),e.$set(o)},i(a){l||(p(e.$$.fragment,a),l=!0)},o(a){v(e.$$.fragment,a),l=!1},d(a){q(e,a)}}}function He(n){let e,i,l;function t(a){n[13](a)}let s={element:n[1],isInline:n[2],isVoid:n[3],dir:n[5],contenteditable:n[4],$$slots:{default:[Ze]},$$scope:{ctx:n}};return n[0]!==void 0&&(s.ref=n[0]),e=new Ae({props:s}),S.push(()=>x(e,"ref",t)),{c(){B(e.$$.fragment)},l(a){P(e.$$.fragment,a)},m(a,u){A(e,a,u),l=!0},p(a,u){const o={};u&2&&(o.element=a[1]),u&4&&(o.isInline=a[2]),u&8&&(o.isVoid=a[3]),u&32&&(o.dir=a[5]),u&16&&(o.contenteditable=a[4]),u&65536&&(o.$$scope={dirty:u,ctx:a}),!i&&u&1&&(i=!0,o.ref=a[0],ee(()=>i=!1)),e.$set(o)},i(a){l||(p(e.$$.fragment,a),l=!0)},o(a){v(e.$$.fragment,a),l=!1},d(a){q(e,a)}}}function Ke(n){let e,i;const l=n[6].default,t=M(l,n,n[16],null);return{c(){e=k("ol"),t&&t.c(),this.h()},l(s){e=E(s,"OL",{"data-slate-node":!0,"data-slate-inline":!0,"data-slate-void":!0,dir:!0,contenteditable:!0,class:!0});var a=I(e);t&&t.l(a),a.forEach(g),this.h()},h(){f(e,"data-slate-node","element"),f(e,"data-slate-inline",n[2]),f(e,"data-slate-void",n[3]),f(e,"dir",n[5]),f(e,"contenteditable",n[4]),f(e,"class","svelte-kkn06x")},m(s,a){C(s,e,a),t&&t.m(e,null),n[12](e),i=!0},p(s,a){t&&t.p&&(!i||a&65536)&&V(t,l,s,s[16],i?N(l,s[16],a,null):L(s[16]),null),(!i||a&4)&&f(e,"data-slate-inline",s[2]),(!i||a&8)&&f(e,"data-slate-void",s[3]),(!i||a&32)&&f(e,"dir",s[5]),(!i||a&16)&&f(e,"contenteditable",s[4])},i(s){i||(p(t,s),i=!0)},o(s){v(t,s),i=!1},d(s){s&&g(e),t&&t.d(s),n[12](null)}}}function Qe(n){let e,i;const l=n[6].default,t=M(l,n,n[16],null);return{c(){e=k("li"),t&&t.c(),this.h()},l(s){e=E(s,"LI",{"data-slate-node":!0,"data-slate-inline":!0,"data-slate-void":!0,dir:!0,contenteditable:!0,class:!0});var a=I(e);t&&t.l(a),a.forEach(g),this.h()},h(){f(e,"data-slate-node","element"),f(e,"data-slate-inline",n[2]),f(e,"data-slate-void",n[3]),f(e,"dir",n[5]),f(e,"contenteditable",n[4]),f(e,"class","svelte-kkn06x")},m(s,a){C(s,e,a),t&&t.m(e,null),n[11](e),i=!0},p(s,a){t&&t.p&&(!i||a&65536)&&V(t,l,s,s[16],i?N(l,s[16],a,null):L(s[16]),null),(!i||a&4)&&f(e,"data-slate-inline",s[2]),(!i||a&8)&&f(e,"data-slate-void",s[3]),(!i||a&32)&&f(e,"dir",s[5]),(!i||a&16)&&f(e,"contenteditable",s[4])},i(s){i||(p(t,s),i=!0)},o(s){v(t,s),i=!1},d(s){s&&g(e),t&&t.d(s),n[11](null)}}}function Ge(n){let e,i;const l=n[6].default,t=M(l,n,n[16],null);return{c(){e=k("h2"),t&&t.c(),this.h()},l(s){e=E(s,"H2",{"data-slate-node":!0,"data-slate-inline":!0,"data-slate-void":!0,dir:!0,contenteditable:!0,class:!0});var a=I(e);t&&t.l(a),a.forEach(g),this.h()},h(){f(e,"data-slate-node","element"),f(e,"data-slate-inline",n[2]),f(e,"data-slate-void",n[3]),f(e,"dir",n[5]),f(e,"contenteditable",n[4]),f(e,"class","svelte-kkn06x")},m(s,a){C(s,e,a),t&&t.m(e,null),n[10](e),i=!0},p(s,a){t&&t.p&&(!i||a&65536)&&V(t,l,s,s[16],i?N(l,s[16],a,null):L(s[16]),null),(!i||a&4)&&f(e,"data-slate-inline",s[2]),(!i||a&8)&&f(e,"data-slate-void",s[3]),(!i||a&32)&&f(e,"dir",s[5]),(!i||a&16)&&f(e,"contenteditable",s[4])},i(s){i||(p(t,s),i=!0)},o(s){v(t,s),i=!1},d(s){s&&g(e),t&&t.d(s),n[10](null)}}}function Je(n){let e,i;const l=n[6].default,t=M(l,n,n[16],null);return{c(){e=k("h1"),t&&t.c(),this.h()},l(s){e=E(s,"H1",{"data-slate-node":!0,"data-slate-inline":!0,"data-slate-void":!0,dir:!0,contenteditable:!0,class:!0});var a=I(e);t&&t.l(a),a.forEach(g),this.h()},h(){f(e,"data-slate-node","element"),f(e,"data-slate-inline",n[2]),f(e,"data-slate-void",n[3]),f(e,"dir",n[5]),f(e,"contenteditable",n[4]),f(e,"class","svelte-kkn06x")},m(s,a){C(s,e,a),t&&t.m(e,null),n[9](e),i=!0},p(s,a){t&&t.p&&(!i||a&65536)&&V(t,l,s,s[16],i?N(l,s[16],a,null):L(s[16]),null),(!i||a&4)&&f(e,"data-slate-inline",s[2]),(!i||a&8)&&f(e,"data-slate-void",s[3]),(!i||a&32)&&f(e,"dir",s[5]),(!i||a&16)&&f(e,"contenteditable",s[4])},i(s){i||(p(t,s),i=!0)},o(s){v(t,s),i=!1},d(s){s&&g(e),t&&t.d(s),n[9](null)}}}function Ye(n){let e,i;const l=n[6].default,t=M(l,n,n[16],null);return{c(){e=k("ul"),t&&t.c(),this.h()},l(s){e=E(s,"UL",{"data-slate-node":!0,"data-slate-inline":!0,"data-slate-void":!0,dir:!0,contenteditable:!0,class:!0});var a=I(e);t&&t.l(a),a.forEach(g),this.h()},h(){f(e,"data-slate-node","element"),f(e,"data-slate-inline",n[2]),f(e,"data-slate-void",n[3]),f(e,"dir",n[5]),f(e,"contenteditable",n[4]),f(e,"class","svelte-kkn06x")},m(s,a){C(s,e,a),t&&t.m(e,null),n[8](e),i=!0},p(s,a){t&&t.p&&(!i||a&65536)&&V(t,l,s,s[16],i?N(l,s[16],a,null):L(s[16]),null),(!i||a&4)&&f(e,"data-slate-inline",s[2]),(!i||a&8)&&f(e,"data-slate-void",s[3]),(!i||a&32)&&f(e,"dir",s[5]),(!i||a&16)&&f(e,"contenteditable",s[4])},i(s){i||(p(t,s),i=!0)},o(s){v(t,s),i=!1},d(s){s&&g(e),t&&t.d(s),n[8](null)}}}function We(n){let e,i;const l=n[6].default,t=M(l,n,n[16],null);return{c(){e=k("blockquote"),t&&t.c(),this.h()},l(s){e=E(s,"BLOCKQUOTE",{"data-slate-node":!0,"data-slate-inline":!0,"data-slate-void":!0,dir:!0,contenteditable:!0,class:!0});var a=I(e);t&&t.l(a),a.forEach(g),this.h()},h(){f(e,"data-slate-node","element"),f(e,"data-slate-inline",n[2]),f(e,"data-slate-void",n[3]),f(e,"dir",n[5]),f(e,"contenteditable",n[4]),f(e,"class","svelte-kkn06x")},m(s,a){C(s,e,a),t&&t.m(e,null),n[7](e),i=!0},p(s,a){t&&t.p&&(!i||a&65536)&&V(t,l,s,s[16],i?N(l,s[16],a,null):L(s[16]),null),(!i||a&4)&&f(e,"data-slate-inline",s[2]),(!i||a&8)&&f(e,"data-slate-void",s[3]),(!i||a&32)&&f(e,"dir",s[5]),(!i||a&16)&&f(e,"contenteditable",s[4])},i(s){i||(p(t,s),i=!0)},o(s){v(t,s),i=!1},d(s){s&&g(e),t&&t.d(s),n[7](null)}}}function Xe(n){let e;const i=n[6].default,l=M(i,n,n[16],null);return{c(){l&&l.c()},l(t){l&&l.l(t)},m(t,s){l&&l.m(t,s),e=!0},p(t,s){l&&l.p&&(!e||s&65536)&&V(l,i,t,t[16],e?N(i,t[16],s,null):L(t[16]),null)},i(t){e||(p(l,t),e=!0)},o(t){v(l,t),e=!1},d(t){l&&l.d(t)}}}function Ze(n){let e;const i=n[6].default,l=M(i,n,n[16],null);return{c(){l&&l.c()},l(t){l&&l.l(t)},m(t,s){l&&l.m(t,s),e=!0},p(t,s){l&&l.p&&(!e||s&65536)&&V(l,i,t,t[16],e?N(i,t[16],s,null):L(t[16]),null)},i(t){e||(p(l,t),e=!0)},o(t){v(l,t),e=!1},d(t){l&&l.d(t)}}}function $e(n){let e,i,l,t,s,a;const u=[We,Ye,Je,Ge,Qe,Ke,He,Fe,ze],o=[];function r(d,c){return c&2&&(e=null),c&2&&(i=null),d[1].type==="block-quote"?0:d[1].type==="bulleted-list"?1:d[1].type==="heading-one"?2:d[1].type==="heading-two"?3:d[1].type==="list-item"?4:d[1].type==="numbered-list"?5:(e==null&&(e=!!re(d[1])),e?6:(i==null&&(i=!!Oe(d[1])),i?7:8))}return l=r(n,-1),t=o[l]=u[l](n),{c(){t.c(),s=ae()},l(d){t.l(d),s=ae()},m(d,c){o[l].m(d,c),C(d,s,c),a=!0},p(d,[c]){let m=l;l=r(d,c),l===m?o[l].p(d,c):(ve(),v(o[m],1,1,()=>{o[m]=null}),ke(),t=o[l],t?t.p(d,c):(t=o[l]=u[l](d),t.c()),p(t,1),t.m(s.parentNode,s))},i(d){a||(p(t),a=!0)},o(d){v(t),a=!1},d(d){o[l].d(d),d&&g(s)}}}function ye(n,e,i){let{$$slots:l={},$$scope:t}=e,{element:s}=e,{isInline:a}=e,{isVoid:u}=e,{contenteditable:o}=e,{ref:r=void 0}=e,{dir:d=void 0}=e;function c(h){S[h?"unshift":"push"](()=>{r=h,i(0,r)})}function m(h){S[h?"unshift":"push"](()=>{r=h,i(0,r)})}function _(h){S[h?"unshift":"push"](()=>{r=h,i(0,r)})}function b(h){S[h?"unshift":"push"](()=>{r=h,i(0,r)})}function O(h){S[h?"unshift":"push"](()=>{r=h,i(0,r)})}function y(h){S[h?"unshift":"push"](()=>{r=h,i(0,r)})}function Y(h){r=h,i(0,r)}function W(h){r=h,i(0,r)}function X(h){S[h?"unshift":"push"](()=>{r=h,i(0,r)})}return n.$$set=h=>{"element"in h&&i(1,s=h.element),"isInline"in h&&i(2,a=h.isInline),"isVoid"in h&&i(3,u=h.isVoid),"contenteditable"in h&&i(4,o=h.contenteditable),"ref"in h&&i(0,r=h.ref),"dir"in h&&i(5,d=h.dir),"$$scope"in h&&i(16,t=h.$$scope)},[r,s,a,u,o,d,l,c,m,_,b,O,y,Y,W,X,t]}class Et extends T{constructor(e){super();R(this,e,ye,$e,F,{element:1,isInline:2,isVoid:3,contenteditable:4,ref:0,dir:5})}}function xe(n){let e,i;const l=n[2].default,t=M(l,n,n[1],null);return{c(){e=k("span"),t&&t.c(),this.h()},l(s){e=E(s,"SPAN",{"data-slate-leaf":!0,class:!0});var a=I(e);t&&t.l(a),a.forEach(g),this.h()},h(){f(e,"data-slate-leaf","true"),f(e,"class","svelte-1pz0x3o"),D(e,"bold",n[0].bold),D(e,"italic",n[0].italic),D(e,"code",n[0].code),D(e,"underline",n[0].underline)},m(s,a){C(s,e,a),t&&t.m(e,null),i=!0},p(s,[a]){t&&t.p&&(!i||a&2)&&V(t,l,s,s[1],i?N(l,s[1],a,null):L(s[1]),null),a&1&&D(e,"bold",s[0].bold),a&1&&D(e,"italic",s[0].italic),a&1&&D(e,"code",s[0].code),a&1&&D(e,"underline",s[0].underline)},i(s){i||(p(t,s),i=!0)},o(s){v(t,s),i=!1},d(s){s&&g(e),t&&t.d(s)}}}function et(n,e,i){let{$$slots:l={},$$scope:t}=e,{leaf:s}=e;return n.$$set=a=>{"leaf"in a&&i(0,s=a.leaf),"$$scope"in a&&i(1,t=a.$$scope)},[s,t,l]}class wt extends T{constructor(e){super();R(this,e,et,xe,F,{leaf:0})}}function tt(n){let e,i,l,t,s,a;const u=n[3].default,o=M(u,n,n[4],null);return{c(){e=k("div"),i=H(),l=k("div"),o&&o.c(),this.h()},l(r){e=E(r,"DIV",{class:!0}),I(e).forEach(g),i=K(r),l=E(r,"DIV",{class:!0});var d=I(l);o&&o.l(d),d.forEach(g),this.h()},h(){f(e,"class","background svelte-2hdzpd"),D(e,"open",n[0]),f(l,"class","modal svelte-2hdzpd"),D(l,"open",n[0])},m(r,d){C(r,e,d),C(r,i,d),C(r,l,d),o&&o.m(l,null),t=!0,s||(a=Z(e,"click",n[1]),s=!0)},p(r,d){d&1&&D(e,"open",r[0]),o&&o.p&&(!t||d&16)&&V(o,u,r,r[4],t?N(u,r[4],d,null):L(r[4]),null),d&1&&D(l,"open",r[0])},i(r){t||(p(o,r),t=!0)},o(r){v(o,r),t=!1},d(r){r&&g(e),r&&g(i),r&&g(l),o&&o.d(r),s=!1,a()}}}function nt(n){let e,i;return e=new Ee({props:{$$slots:{default:[tt]},$$scope:{ctx:n}}}),{c(){B(e.$$.fragment)},l(l){P(e.$$.fragment,l)},m(l,t){A(e,l,t),i=!0},p(l,[t]){const s={};t&17&&(s.$$scope={dirty:t,ctx:l}),e.$set(s)},i(l){i||(p(e.$$.fragment,l),i=!0)},o(l){v(e.$$.fragment,l),i=!1},d(l){q(e,l)}}}function lt(n,e,i){let{$$slots:l={},$$scope:t}=e,{open:s=!1}=e,{onClose:a=()=>{}}=e;function u(){i(0,s=!1),a()}return n.$$set=o=>{"open"in o&&i(0,s=o.open),"onClose"in o&&i(2,a=o.onClose),"$$scope"in o&&i(4,t=o.$$scope)},[s,u,a,l,t]}class st extends T{constructor(e){super();R(this,e,lt,nt,F,{open:0,onClose:2})}}function it(n){let e,i;return e=new we({}),{c(){B(e.$$.fragment)},l(l){P(e.$$.fragment,l)},m(l,t){A(e,l,t),i=!0},i(l){i||(p(e.$$.fragment,l),i=!0)},o(l){v(e.$$.fragment,l),i=!1},d(l){q(e,l)}}}function at(n){let e,i;return e=new Ie({}),{c(){B(e.$$.fragment)},l(l){P(e.$$.fragment,l)},m(l,t){A(e,l,t),i=!0},i(l){i||(p(e.$$.fragment,l),i=!0)},o(l){v(e.$$.fragment,l),i=!1},d(l){q(e,l)}}}function ot(n){let e,i,l,t,s,a,u,o,r;return a=new J({props:{active:!$(n[0]),onMouseDown:n[2],$$slots:{default:[at]},$$scope:{ctx:n}}}),{c(){e=k("div"),i=k("div"),l=k("input"),t=H(),s=k("div"),B(a.$$.fragment),this.h()},l(d){e=E(d,"DIV",{class:!0});var c=I(e);i=E(c,"DIV",{class:!0});var m=I(i);l=E(m,"INPUT",{type:!0,class:!0}),t=K(m),s=E(m,"DIV",{class:!0});var _=I(s);P(a.$$.fragment,_),_.forEach(g),m.forEach(g),c.forEach(g),this.h()},h(){f(l,"type","text"),f(l,"class","svelte-1ejjn96"),f(s,"class","button svelte-1ejjn96"),f(i,"class","url svelte-1ejjn96"),f(e,"class","body svelte-1ejjn96")},m(d,c){C(d,e,c),j(e,i),j(i,l),oe(l,n[0]),j(i,t),j(i,s),A(a,s,null),u=!0,o||(r=Z(l,"input",n[4]),o=!0)},p(d,c){c&1&&l.value!==d[0]&&oe(l,d[0]);const m={};c&1&&(m.active=!$(d[0])),c&4&&(m.onMouseDown=d[2]),c&128&&(m.$$scope={dirty:c,ctx:d}),a.$set(m)},i(d){u||(p(a.$$.fragment,d),u=!0)},o(d){v(a.$$.fragment,d),u=!1},d(d){d&&g(e),q(a),o=!1,r()}}}function ft(n){let e,i,l,t,s;e=new J({props:{onMouseDown:n[3],$$slots:{default:[it]},$$scope:{ctx:n}}});function a(o){n[5](o)}let u={$$slots:{default:[ot]},$$scope:{ctx:n}};return n[1]!==void 0&&(u.open=n[1]),l=new st({props:u}),S.push(()=>x(l,"open",a)),{c(){B(e.$$.fragment),i=H(),B(l.$$.fragment)},l(o){P(e.$$.fragment,o),i=K(o),P(l.$$.fragment,o)},m(o,r){A(e,o,r),C(o,i,r),A(l,o,r),s=!0},p(o,[r]){const d={};r&8&&(d.onMouseDown=o[3]),r&128&&(d.$$scope={dirty:r,ctx:o}),e.$set(d);const c={};r&133&&(c.$$scope={dirty:r,ctx:o}),!t&&r&2&&(t=!0,c.open=o[1],ee(()=>t=!1)),l.$set(c)},i(o){s||(p(e.$$.fragment,o),p(l.$$.fragment,o),s=!0)},o(o){v(e.$$.fragment,o),v(l.$$.fragment,o),s=!1},d(o){q(e,o),o&&g(i),q(l,o)}}}function ut(n,e,i){let l,t;const s=ne();let a,u=!1;function o(){a=this.value,i(0,a)}function r(d){u=d,i(1,u),i(0,a)}return n.$$.update=()=>{n.$$.dirty&1&&i(2,t=()=>{$(a)&&(le(s,a),i(0,a=""),i(1,u=!1))})},i(3,l=()=>{i(1,u=!0)}),[a,u,t,l,o,r]}class It extends T{constructor(e){super();R(this,e,ut,ft,te,{})}}function rt(n){let e;const i=n[6].default,l=M(i,n,n[7],null);return{c(){l&&l.c()},l(t){l&&l.l(t)},m(t,s){l&&l.m(t,s),e=!0},p(t,s){l&&l.p&&(!e||s&128)&&V(l,i,t,t[7],e?N(i,t[7],s,null):L(t[7]),null)},i(t){e||(p(l,t),e=!0)},o(t){v(l,t),e=!1},d(t){l&&l.d(t)}}}function dt(n){let e,i;return e=new J({props:{active:n[1],onMouseDown:n[0],$$slots:{default:[rt]},$$scope:{ctx:n}}}),{c(){B(e.$$.fragment)},l(l){P(e.$$.fragment,l)},m(l,t){A(e,l,t),i=!0},p(l,[t]){const s={};t&2&&(s.active=l[1]),t&1&&(s.onMouseDown=l[0]),t&128&&(s.$$scope={dirty:t,ctx:l}),e.$set(s)},i(l){i||(p(e.$$.fragment,l),i=!0)},o(l){v(e.$$.fragment,l),i=!1},d(l){q(e,l)}}}function ct(n,e,i){let l,t,s,a,{$$slots:u={},$$scope:o}=e,{format:r}=e;const d=ue();return Q(n,d,c=>i(5,a=c)),n.$$set=c=>{"format"in c&&i(3,r=c.format),"$$scope"in c&&i(7,o=c.$$scope)},n.$$.update=()=>{n.$$.dirty&32&&i(4,l=a),n.$$.dirty&24&&i(1,t=de(l,r)),n.$$.dirty&24&&i(0,s=c=>{c.preventDefault(),qe(l,r)})},[s,t,d,r,l,a,u,o]}class Dt extends T{constructor(e){super();R(this,e,ct,dt,te,{format:3})}}function mt(n){let e;const i=n[6].default,l=M(i,n,n[7],null);return{c(){l&&l.c()},l(t){l&&l.l(t)},m(t,s){l&&l.m(t,s),e=!0},p(t,s){l&&l.p&&(!e||s&128)&&V(l,i,t,t[7],e?N(i,t[7],s,null):L(t[7]),null)},i(t){e||(p(l,t),e=!0)},o(t){v(l,t),e=!1},d(t){l&&l.d(t)}}}function _t(n){let e,i;return e=new J({props:{active:n[1],onMouseDown:n[0],$$slots:{default:[mt]},$$scope:{ctx:n}}}),{c(){B(e.$$.fragment)},l(l){P(e.$$.fragment,l)},m(l,t){A(e,l,t),i=!0},p(l,[t]){const s={};t&2&&(s.active=l[1]),t&1&&(s.onMouseDown=l[0]),t&128&&(s.$$scope={dirty:t,ctx:l}),e.$set(s)},i(l){i||(p(e.$$.fragment,l),i=!0)},o(l){v(e.$$.fragment,l),i=!1},d(l){q(e,l)}}}function ht(n,e,i){let l,t,s,a,{$$slots:u={},$$scope:o}=e,{format:r}=e;const d=ue();return Q(n,d,c=>i(5,a=c)),n.$$set=c=>{"format"in c&&i(3,r=c.format),"$$scope"in c&&i(7,o=c.$$scope)},n.$$.update=()=>{n.$$.dirty&32&&i(4,l=a),n.$$.dirty&24&&i(1,t=se(l,r)),n.$$.dirty&24&&i(0,s=c=>{c.preventDefault(),Se(l,r)})},[s,t,d,r,l,a,u,o]}class Ct extends T{constructor(e){super();R(this,e,ht,_t,te,{format:3})}}export{Ct as B,Et as E,It as I,wt as L,Dt as M,J as a,kt as b,vt as c,se as i,qe as t,pt as w};
