(()=>{var Zt=Object.create;var Xe=Object.defineProperty;var Wt=Object.getOwnPropertyDescriptor;var $t=Object.getOwnPropertyNames;var vt=Object.getPrototypeOf,kt=Object.prototype.hasOwnProperty;var I=(n,f)=>()=>(f||n((f={exports:{}}).exports,f),f.exports);var dt=(n,f,u,l)=>{if(f&&typeof f=="object"||typeof f=="function")for(let y of $t(f))!kt.call(n,y)&&y!==u&&Xe(n,y,{get:()=>f[y],enumerable:!(l=Wt(f,y))||l.enumerable});return n};var er=(n,f,u)=>(u=n!=null?Zt(vt(n)):{},dt(f||!n||!n.__esModule?Xe(u,"default",{value:n,enumerable:!0}):u,n));var W=I((Rr,Ye)=>{"use strict";function v(n,f,u,l,y,h){return{tag:n,key:f,attrs:u,children:l,text:y,dom:h,domSize:void 0,state:void 0,events:void 0,instance:void 0}}v.normalize=function(n){return Array.isArray(n)?v("[",void 0,void 0,v.normalizeChildren(n),void 0,void 0):n==null||typeof n=="boolean"?null:typeof n=="object"?n:v("#",void 0,void 0,String(n),void 0,void 0)};v.normalizeChildren=function(n){var f=[];if(n.length){for(var u=n[0]!=null&&n[0].key!=null,l=1;l<n.length;l++)if((n[l]!=null&&n[l].key!=null)!==u)throw new TypeError(u&&(n[l]!=null||typeof n[l]=="boolean")?"In fragments, vnodes must either all have keys or none have keys. You may wish to consider using an explicit keyed empty fragment, m.fragment({key: ...}), instead of a hole.":"In fragments, vnodes must either all have keys or none have keys.");for(var l=0;l<n.length;l++)f[l]=v.normalize(n[l])}return f};Ye.exports=v});var Ae=I((Lr,Ze)=>{"use strict";var tr=W();Ze.exports=function(){var n=arguments[this],f=this+1,u;if(n==null?n={}:(typeof n!="object"||n.tag!=null||Array.isArray(n))&&(n={},f=this),arguments.length===f+1)u=arguments[f],Array.isArray(u)||(u=[u]);else for(u=[];f<arguments.length;)u.push(arguments[f++]);return tr("",n.key,n,u)}});var ie=I((Ir,We)=>{"use strict";We.exports={}.hasOwnProperty});var Oe=I((Mr,ke)=>{"use strict";var rr=W(),nr=Ae(),ee=ie(),ir=/(?:(^|#|\.)([^#\.\[\]]+))|(\[(.+?)(?:\s*=\s*("|'|)((?:\\["'\]]|.)*?)\5)?\])/g,ve={};function $e(n){for(var f in n)if(ee.call(n,f))return!1;return!0}function fr(n){for(var f,u="div",l=[],y={};f=ir.exec(n);){var h=f[1],c=f[2];if(h===""&&c!=="")u=c;else if(h==="#")y.id=c;else if(h===".")l.push(c);else if(f[3][0]==="["){var m=f[6];m&&(m=m.replace(/\\(["'])/g,"$1").replace(/\\\\/g,"\\")),f[4]==="class"?l.push(m):y[f[4]]=m===""?m:m||!0}}return l.length>0&&(y.className=l.join(" ")),ve[n]={tag:u,attrs:y}}function ar(n,f){var u=f.attrs,l=ee.call(u,"class"),y=l?u.class:u.className;if(f.tag=n.tag,f.attrs={},!$e(n.attrs)&&!$e(u)){var h={};for(var c in u)ee.call(u,c)&&(h[c]=u[c]);u=h}for(var c in n.attrs)ee.call(n.attrs,c)&&c!=="className"&&!ee.call(u,c)&&(u[c]=n.attrs[c]);(y!=null||n.attrs.className!=null)&&(u.className=y!=null?n.attrs.className!=null?String(n.attrs.className)+" "+String(y):y:n.attrs.className!=null?n.attrs.className:null),l&&(u.class=null);for(var c in u)if(ee.call(u,c)&&c!=="key"){f.attrs=u;break}return f}function ur(n){if(n==null||typeof n!="string"&&typeof n!="function"&&typeof n.view!="function")throw Error("The selector must be either a string or a component.");var f=nr.apply(1,arguments);return typeof n=="string"&&(f.children=rr.normalizeChildren(f.children),n!=="[")?ar(ve[n]||fr(n),f):(f.tag=n,f)}ke.exports=ur});var et=I((_r,de)=>{"use strict";var lr=W();de.exports=function(n){return n==null&&(n=""),lr("<",void 0,void 0,n,void 0,void 0)}});var rt=I((Dr,tt)=>{"use strict";var cr=W(),sr=Ae();tt.exports=function(){var n=sr.apply(0,arguments);return n.tag="[",n.children=cr.normalizeChildren(n.children),n}});var it=I((Ur,nt)=>{"use strict";var ze=Oe();ze.trust=et();ze.fragment=rt();nt.exports=ze});var je=I((Hr,ft)=>{"use strict";var K=function(n){if(!(this instanceof K))throw new Error("Promise must be called with 'new'.");if(typeof n!="function")throw new TypeError("executor must be a function.");var f=this,u=[],l=[],y=s(u,!0),h=s(l,!1),c=f._instance={resolvers:u,rejectors:l},m=typeof setImmediate=="function"?setImmediate:setTimeout;function s(q,b){return function C(N){var O;try{if(b&&N!=null&&(typeof N=="object"||typeof N=="function")&&typeof(O=N.then)=="function"){if(N===f)throw new TypeError("Promise can't be resolved with itself.");p(O.bind(N))}else m(function(){!b&&q.length===0&&console.error("Possible unhandled promise rejection:",N);for(var x=0;x<q.length;x++)q[x](N);u.length=0,l.length=0,c.state=b,c.retry=function(){C(N)}})}catch(x){h(x)}}}function p(q){var b=0;function C(O){return function(x){b++>0||O(x)}}var N=C(h);try{q(C(y),N)}catch(O){N(O)}}p(n)};K.prototype.then=function(n,f){var u=this,l=u._instance;function y(s,p,q,b){p.push(function(C){if(typeof s!="function")q(C);else try{h(s(C))}catch(N){c&&c(N)}}),typeof l.retry=="function"&&b===l.state&&l.retry()}var h,c,m=new K(function(s,p){h=s,c=p});return y(n,l.resolvers,h,!0),y(f,l.rejectors,c,!1),m};K.prototype.catch=function(n){return this.then(null,n)};K.prototype.finally=function(n){return this.then(function(f){return K.resolve(n()).then(function(){return f})},function(f){return K.resolve(n()).then(function(){return K.reject(f)})})};K.resolve=function(n){return n instanceof K?n:new K(function(f){f(n)})};K.reject=function(n){return new K(function(f,u){u(n)})};K.all=function(n){return new K(function(f,u){var l=n.length,y=0,h=[];if(n.length===0)f([]);else for(var c=0;c<n.length;c++)(function(m){function s(p){y++,h[m]=p,y===l&&f(h)}n[m]!=null&&(typeof n[m]=="object"||typeof n[m]=="function")&&typeof n[m].then=="function"?n[m].then(s,u):s(n[m])})(c)})};K.race=function(n){return new K(function(f,u){for(var l=0;l<n.length;l++)n[l].then(f,u)})};ft.exports=K});var Re=I((Fr,ce)=>{"use strict";var fe=je();typeof window<"u"?(typeof window.Promise>"u"?window.Promise=fe:window.Promise.prototype.finally||(window.Promise.prototype.finally=fe.prototype.finally),ce.exports=window.Promise):typeof global<"u"?(typeof global.Promise>"u"?global.Promise=fe:global.Promise.prototype.finally||(global.Promise.prototype.finally=fe.prototype.finally),ce.exports=global.Promise):ce.exports=fe});var ut=I((Sr,at)=>{"use strict";var Le=W();at.exports=function(n){var f=n&&n.document,u,l={svg:"http://www.w3.org/2000/svg",math:"http://www.w3.org/1998/Math/MathML"};function y(t){return t.attrs&&t.attrs.xmlns||l[t.tag]}function h(t,e){if(t.state!==e)throw new Error("'vnode.state' must not be modified.")}function c(t){var e=t.state;try{return this.apply(e,arguments)}finally{h(t,e)}}function m(){try{return f.activeElement}catch{return null}}function s(t,e,r,i,a,o,w){for(var A=r;A<i;A++){var g=e[A];g!=null&&p(t,g,a,w,o)}}function p(t,e,r,i,a){var o=e.tag;if(typeof o=="string")switch(e.state={},e.attrs!=null&&be(e.attrs,e,r),o){case"#":q(t,e,a);break;case"<":C(t,e,i,a);break;case"[":N(t,e,r,i,a);break;default:O(t,e,r,i,a)}else L(t,e,r,i,a)}function q(t,e,r){e.dom=f.createTextNode(e.children),Z(t,e.dom,r)}var b={caption:"table",thead:"table",tbody:"table",tfoot:"table",tr:"tbody",th:"tr",td:"tr",colgroup:"table",col:"colgroup"};function C(t,e,r,i){var a=e.children.match(/^\s*?<(\w+)/im)||[],o=f.createElement(b[a[1]]||"div");r==="http://www.w3.org/2000/svg"?(o.innerHTML='<svg xmlns="http://www.w3.org/2000/svg">'+e.children+"</svg>",o=o.firstChild):o.innerHTML=e.children,e.dom=o.firstChild,e.domSize=o.childNodes.length,e.instance=[];for(var w=f.createDocumentFragment(),A;A=o.firstChild;)e.instance.push(A),w.appendChild(A);Z(t,w,i)}function N(t,e,r,i,a){var o=f.createDocumentFragment();if(e.children!=null){var w=e.children;s(o,w,0,w.length,r,null,i)}e.dom=o.firstChild,e.domSize=o.childNodes.length,Z(t,o,a)}function O(t,e,r,i,a){var o=e.tag,w=e.attrs,A=w&&w.is;i=y(e)||i;var g=i?A?f.createElementNS(i,o,{is:A}):f.createElementNS(i,o):A?f.createElement(o,{is:A}):f.createElement(o);if(e.dom=g,w!=null&&St(e,w,i),Z(t,g,a),!Se(e)&&e.children!=null){var j=e.children;s(g,j,0,j.length,r,null,i),e.tag==="select"&&w!=null&&Qt(e,w)}}function x(t,e){var r;if(typeof t.tag.view=="function"){if(t.state=Object.create(t.tag),r=t.state.view,r.$$reentrantLock$$!=null)return;r.$$reentrantLock$$=!0}else{if(t.state=void 0,r=t.tag,r.$$reentrantLock$$!=null)return;r.$$reentrantLock$$=!0,t.state=t.tag.prototype!=null&&typeof t.tag.prototype.view=="function"?new t.tag(t):t.tag(t)}if(be(t.state,t,e),t.attrs!=null&&be(t.attrs,t,e),t.instance=Le.normalize(c.call(t.state.view,t)),t.instance===t)throw Error("A view cannot return the vnode it received as argument");r.$$reentrantLock$$=null}function L(t,e,r,i,a){x(e,r),e.instance!=null?(p(t,e.instance,r,i,a),e.dom=e.instance.dom,e.domSize=e.dom!=null?e.instance.domSize:0):e.domSize=0}function F(t,e,r,i,a,o){if(!(e===r||e==null&&r==null))if(e==null||e.length===0)s(t,r,0,r.length,i,a,o);else if(r==null||r.length===0)te(t,e,0,e.length);else{var w=e[0]!=null&&e[0].key!=null,A=r[0]!=null&&r[0].key!=null,g=0,j=0;if(!w)for(;j<e.length&&e[j]==null;)j++;if(!A)for(;g<r.length&&r[g]==null;)g++;if(w!==A)te(t,e,j,e.length),s(t,r,g,r.length,i,a,o);else if(A){for(var B=e.length-1,S=r.length-1,le,G,H,V,M,Ce;B>=j&&S>=g&&(V=e[B],M=r[S],V.key===M.key);)V!==M&&X(t,V,M,i,a,o),M.dom!=null&&(a=M.dom),B--,S--;for(;B>=j&&S>=g&&(G=e[j],H=r[g],G.key===H.key);)j++,g++,G!==H&&X(t,G,H,i,Y(e,j,a),o);for(;B>=j&&S>=g&&!(g===S||G.key!==M.key||V.key!==H.key);)Ce=Y(e,j,a),k(t,V,Ce),V!==H&&X(t,V,H,i,Ce,o),++g<=--S&&k(t,G,a),G!==M&&X(t,G,M,i,a,o),M.dom!=null&&(a=M.dom),j++,B--,V=e[B],M=r[S],G=e[j],H=r[g];for(;B>=j&&S>=g&&V.key===M.key;)V!==M&&X(t,V,M,i,a,o),M.dom!=null&&(a=M.dom),B--,S--,V=e[B],M=r[S];if(g>S)te(t,e,j,B+1);else if(j>B)s(t,r,g,S+1,i,a,o);else{var Yt=a,Ge=S-g+1,ne=new Array(Ge),Ne=0,D=0,Pe=2147483647,Ee=0,le,Te;for(D=0;D<Ge;D++)ne[D]=-1;for(D=S;D>=g;D--){le==null&&(le=z(e,j,B+1)),M=r[D];var d=le[M.key];d!=null&&(Pe=d<Pe?d:-1,ne[D-g]=d,V=e[d],e[d]=null,V!==M&&X(t,V,M,i,a,o),M.dom!=null&&(a=M.dom),Ee++)}if(a=Yt,Ee!==B-j+1&&te(t,e,j,B+1),Ee===0)s(t,r,g,S+1,i,a,o);else if(Pe===-1)for(Te=J(ne),Ne=Te.length-1,D=S;D>=g;D--)H=r[D],ne[D-g]===-1?p(t,H,i,o,a):Te[Ne]===D-g?Ne--:k(t,H,a),H.dom!=null&&(a=r[D].dom);else for(D=S;D>=g;D--)H=r[D],ne[D-g]===-1&&p(t,H,i,o,a),H.dom!=null&&(a=r[D].dom)}}else{var qe=e.length<r.length?e.length:r.length;for(g=g<j?g:j;g<qe;g++)G=e[g],H=r[g],!(G===H||G==null&&H==null)&&(G==null?p(t,H,i,o,Y(e,g+1,a)):H==null?ae(t,G):X(t,G,H,i,Y(e,g+1,a),o));e.length>qe&&te(t,e,g,e.length),r.length>qe&&s(t,r,g,r.length,i,a,o)}}}function X(t,e,r,i,a,o){var w=e.tag,A=r.tag;if(w===A){if(r.state=e.state,r.events=e.events,Xt(r,e))return;if(typeof w=="string")switch(r.attrs!=null&&xe(r.attrs,r,i),w){case"#":U(e,r);break;case"<":E(t,e,r,o,a);break;case"[":R(t,e,r,i,a,o);break;default:P(e,r,i,o)}else _(t,e,r,i,a,o)}else ae(t,e),p(t,r,i,o,a)}function U(t,e){t.children.toString()!==e.children.toString()&&(t.dom.nodeValue=e.children),e.dom=t.dom}function E(t,e,r,i,a){e.children!==r.children?(Ke(t,e),C(t,r,i,a)):(r.dom=e.dom,r.domSize=e.domSize,r.instance=e.instance)}function R(t,e,r,i,a,o){F(t,e.children,r.children,i,a,o);var w=0,A=r.children;if(r.dom=null,A!=null){for(var g=0;g<A.length;g++){var j=A[g];j!=null&&j.dom!=null&&(r.dom==null&&(r.dom=j.dom),w+=j.domSize||1)}w!==1&&(r.domSize=w)}}function P(t,e,r,i){var a=e.dom=t.dom;i=y(e)||i,e.tag==="textarea"&&e.attrs==null&&(e.attrs={}),Jt(e,t.attrs,e.attrs,i),Se(e)||F(a,t.children,e.children,r,null,i)}function _(t,e,r,i,a,o){if(r.instance=Le.normalize(c.call(r.state.view,r)),r.instance===r)throw Error("A view cannot return the vnode it received as argument");xe(r.state,r,i),r.attrs!=null&&xe(r.attrs,r,i),r.instance!=null?(e.instance==null?p(t,r.instance,i,o,a):X(t,e.instance,r.instance,i,a,o),r.dom=r.instance.dom,r.domSize=r.instance.domSize):e.instance!=null?(ae(t,e.instance),r.dom=void 0,r.domSize=0):(r.dom=e.dom,r.domSize=e.domSize)}function z(t,e,r){for(var i=Object.create(null);e<r;e++){var a=t[e];if(a!=null){var o=a.key;o!=null&&(i[o]=e)}}return i}var T=[];function J(t){for(var e=[0],r=0,i=0,a=0,o=T.length=t.length,a=0;a<o;a++)T[a]=t[a];for(var a=0;a<o;++a)if(t[a]!==-1){var w=e[e.length-1];if(t[w]<t[a]){T[a]=w,e.push(a);continue}for(r=0,i=e.length-1;r<i;){var A=(r>>>1)+(i>>>1)+(r&i&1);t[e[A]]<t[a]?r=A+1:i=A}t[a]<t[e[r]]&&(r>0&&(T[a]=e[r-1]),e[r]=a)}for(r=e.length,i=e[r-1];r-- >0;)e[r]=i,i=T[i];return T.length=0,e}function Y(t,e,r){for(;e<t.length;e++)if(t[e]!=null&&t[e].dom!=null)return t[e].dom;return r}function k(t,e,r){var i=f.createDocumentFragment();$(t,i,e),Z(t,i,r)}function $(t,e,r){for(;r.dom!=null&&r.dom.parentNode===t;){if(typeof r.tag!="string"){if(r=r.instance,r!=null)continue}else if(r.tag==="<")for(var i=0;i<r.instance.length;i++)e.appendChild(r.instance[i]);else if(r.tag!=="[")e.appendChild(r.dom);else if(r.children.length===1){if(r=r.children[0],r!=null)continue}else for(var i=0;i<r.children.length;i++){var a=r.children[i];a!=null&&$(t,e,a)}break}}function Z(t,e,r){r!=null?t.insertBefore(e,r):t.appendChild(e)}function Se(t){if(t.attrs==null||t.attrs.contenteditable==null&&t.attrs.contentEditable==null)return!1;var e=t.children;if(e!=null&&e.length===1&&e[0].tag==="<"){var r=e[0].children;t.dom.innerHTML!==r&&(t.dom.innerHTML=r)}else if(e!=null&&e.length!==0)throw new Error("Child node of a contenteditable must be trusted.");return!0}function te(t,e,r,i){for(var a=r;a<i;a++){var o=e[a];o!=null&&ae(t,o)}}function ae(t,e){var r=0,i=e.state,a,o;if(typeof e.tag!="string"&&typeof e.state.onbeforeremove=="function"){var w=c.call(e.state.onbeforeremove,e);w!=null&&typeof w.then=="function"&&(r=1,a=w)}if(e.attrs&&typeof e.attrs.onbeforeremove=="function"){var w=c.call(e.attrs.onbeforeremove,e);w!=null&&typeof w.then=="function"&&(r|=2,o=w)}if(h(e,i),!r)ue(e),pe(t,e);else{if(a!=null){var A=function(){r&1&&(r&=2,r||g())};a.then(A,A)}if(o!=null){var A=function(){r&2&&(r&=1,r||g())};o.then(A,A)}}function g(){h(e,i),ue(e),pe(t,e)}}function Ke(t,e){for(var r=0;r<e.instance.length;r++)t.removeChild(e.instance[r])}function pe(t,e){for(;e.dom!=null&&e.dom.parentNode===t;){if(typeof e.tag!="string"){if(e=e.instance,e!=null)continue}else if(e.tag==="<")Ke(t,e);else{if(e.tag!=="["&&(t.removeChild(e.dom),!Array.isArray(e.children)))break;if(e.children.length===1){if(e=e.children[0],e!=null)continue}else for(var r=0;r<e.children.length;r++){var i=e.children[r];i!=null&&pe(t,i)}}break}}function ue(t){if(typeof t.tag!="string"&&typeof t.state.onremove=="function"&&c.call(t.state.onremove,t),t.attrs&&typeof t.attrs.onremove=="function"&&c.call(t.attrs.onremove,t),typeof t.tag!="string")t.instance!=null&&ue(t.instance);else{var e=t.children;if(Array.isArray(e))for(var r=0;r<e.length;r++){var i=e[r];i!=null&&ue(i)}}}function St(t,e,r){t.tag==="input"&&e.type!=null&&t.dom.setAttribute("type",e.type);var i=e!=null&&t.tag==="input"&&e.type==="file";for(var a in e)ye(t,a,null,e[a],r,i)}function ye(t,e,r,i,a,o){if(!(e==="key"||e==="is"||i==null||Qe(e)||r===i&&!Vt(t,e)&&typeof i!="object"||e==="type"&&t.tag==="input")){if(e[0]==="o"&&e[1]==="n")return Be(t,e,i);if(e.slice(0,6)==="xlink:")t.dom.setAttributeNS("http://www.w3.org/1999/xlink",e.slice(6),i);else if(e==="style")Ve(t.dom,r,i);else if(Je(t,e,a)){if(e==="value"){if((t.tag==="input"||t.tag==="textarea")&&t.dom.value===""+i&&(o||t.dom===m())||t.tag==="select"&&r!==null&&t.dom.value===""+i||t.tag==="option"&&r!==null&&t.dom.value===""+i)return;if(o&&""+i!=""){console.error("`value` is read-only on file inputs!");return}}t.dom[e]=i}else typeof i=="boolean"?i?t.dom.setAttribute(e,""):t.dom.removeAttribute(e):t.dom.setAttribute(e==="className"?"class":e,i)}}function Kt(t,e,r,i){if(!(e==="key"||e==="is"||r==null||Qe(e)))if(e[0]==="o"&&e[1]==="n")Be(t,e,void 0);else if(e==="style")Ve(t.dom,r,null);else if(Je(t,e,i)&&e!=="className"&&e!=="title"&&!(e==="value"&&(t.tag==="option"||t.tag==="select"&&t.dom.selectedIndex===-1&&t.dom===m()))&&!(t.tag==="input"&&e==="type"))t.dom[e]=null;else{var a=e.indexOf(":");a!==-1&&(e=e.slice(a+1)),r!==!1&&t.dom.removeAttribute(e==="className"?"class":e)}}function Qt(t,e){if("value"in e)if(e.value===null)t.dom.selectedIndex!==-1&&(t.dom.value=null);else{var r=""+e.value;(t.dom.value!==r||t.dom.selectedIndex===-1)&&(t.dom.value=r)}"selectedIndex"in e&&ye(t,"selectedIndex",null,e.selectedIndex,void 0)}function Jt(t,e,r,i){if(e&&e===r&&console.warn("Don't reuse attrs object, use new object for every redraw, this will throw in next major"),r!=null){t.tag==="input"&&r.type!=null&&t.dom.setAttribute("type",r.type);var a=t.tag==="input"&&r.type==="file";for(var o in r)ye(t,o,e&&e[o],r[o],i,a)}var w;if(e!=null)for(var o in e)(w=e[o])!=null&&(r==null||r[o]==null)&&Kt(t,o,w,i)}function Vt(t,e){return e==="value"||e==="checked"||e==="selectedIndex"||e==="selected"&&t.dom===m()||t.tag==="option"&&t.dom.parentNode===f.activeElement}function Qe(t){return t==="oninit"||t==="oncreate"||t==="onupdate"||t==="onremove"||t==="onbeforeremove"||t==="onbeforeupdate"}function Je(t,e,r){return r===void 0&&(t.tag.indexOf("-")>-1||t.attrs!=null&&t.attrs.is||e!=="href"&&e!=="list"&&e!=="form"&&e!=="width"&&e!=="height")&&e in t.dom}var Bt=/[A-Z]/g;function Gt(t){return"-"+t.toLowerCase()}function ge(t){return t[0]==="-"&&t[1]==="-"?t:t==="cssFloat"?"float":t.replace(Bt,Gt)}function Ve(t,e,r){if(e!==r)if(r==null)t.style.cssText="";else if(typeof r!="object")t.style.cssText=r;else if(e==null||typeof e!="object"){t.style.cssText="";for(var i in r){var a=r[i];a!=null&&t.style.setProperty(ge(i),String(a))}}else{for(var i in r){var a=r[i];a!=null&&(a=String(a))!==String(e[i])&&t.style.setProperty(ge(i),a)}for(var i in e)e[i]!=null&&r[i]==null&&t.style.removeProperty(ge(i))}}function we(){this._=u}we.prototype=Object.create(null),we.prototype.handleEvent=function(t){var e=this["on"+t.type],r;typeof e=="function"?r=e.call(t.currentTarget,t):typeof e.handleEvent=="function"&&e.handleEvent(t),this._&&t.redraw!==!1&&(0,this._)(),r===!1&&(t.preventDefault(),t.stopPropagation())};function Be(t,e,r){if(t.events!=null){if(t.events._=u,t.events[e]===r)return;r!=null&&(typeof r=="function"||typeof r=="object")?(t.events[e]==null&&t.dom.addEventListener(e.slice(2),t.events,!1),t.events[e]=r):(t.events[e]!=null&&t.dom.removeEventListener(e.slice(2),t.events,!1),t.events[e]=void 0)}else r!=null&&(typeof r=="function"||typeof r=="object")&&(t.events=new we,t.dom.addEventListener(e.slice(2),t.events,!1),t.events[e]=r)}function be(t,e,r){typeof t.oninit=="function"&&c.call(t.oninit,e),typeof t.oncreate=="function"&&r.push(c.bind(t.oncreate,e))}function xe(t,e,r){typeof t.onupdate=="function"&&r.push(c.bind(t.onupdate,e))}function Xt(t,e){do{if(t.attrs!=null&&typeof t.attrs.onbeforeupdate=="function"){var r=c.call(t.attrs.onbeforeupdate,t,e);if(r!==void 0&&!r)break}if(typeof t.tag!="string"&&typeof t.state.onbeforeupdate=="function"){var r=c.call(t.state.onbeforeupdate,t,e);if(r!==void 0&&!r)break}return!1}while(!1);return t.dom=e.dom,t.domSize=e.domSize,t.instance=e.instance,t.attrs=e.attrs,t.children=e.children,t.text=e.text,!0}var re;return function(t,e,r){if(!t)throw new TypeError("DOM element being rendered to does not exist.");if(re!=null&&t.contains(re))throw new TypeError("Node is currently being rendered to and thus is locked.");var i=u,a=re,o=[],w=m(),A=t.namespaceURI;re=t,u=typeof r=="function"?r:void 0;try{t.vnodes==null&&(t.textContent=""),e=Le.normalizeChildren(Array.isArray(e)?e:[e]),F(t,t.vnodes,e,o,null,A==="http://www.w3.org/1999/xhtml"?void 0:A),t.vnodes=e,w!=null&&m()!==w&&typeof w.focus=="function"&&w.focus();for(var g=0;g<o.length;g++)o[g]()}finally{u=i,re=a}}}});var Ie=I((Kr,lt)=>{"use strict";lt.exports=ut()(typeof window<"u"?window:null)});var ot=I((Qr,st)=>{"use strict";var ct=W();st.exports=function(n,f,u){var l=[],y=!1,h=-1;function c(){for(h=0;h<l.length;h+=2)try{n(l[h],ct(l[h+1]),m)}catch(p){u.error(p)}h=-1}function m(){y||(y=!0,f(function(){y=!1,c()}))}m.sync=c;function s(p,q){if(q!=null&&q.view==null&&typeof q!="function")throw new TypeError("m.mount expects a component, not a vnode.");var b=l.indexOf(p);b>=0&&(l.splice(b,2),b<=h&&(h-=2),n(p,[])),q!=null&&(l.push(p,q),n(p,ct(q),m))}return{mount:s,redraw:m}}});var se=I((Jr,ht)=>{"use strict";var or=Ie();ht.exports=ot()(or,typeof requestAnimationFrame<"u"?requestAnimationFrame:null,typeof console<"u"?console:null)});var Me=I((Vr,mt)=>{"use strict";mt.exports=function(n){if(Object.prototype.toString.call(n)!=="[object Object]")return"";var f=[];for(var u in n)l(u,n[u]);return f.join("&");function l(y,h){if(Array.isArray(h))for(var c=0;c<h.length;c++)l(y+"["+c+"]",h[c]);else if(Object.prototype.toString.call(h)==="[object Object]")for(var c in h)l(y+"["+c+"]",h[c]);else f.push(encodeURIComponent(y)+(h!=null&&h!==""?"="+encodeURIComponent(h):""))}}});var _e=I((Br,pt)=>{"use strict";var hr=ie();pt.exports=Object.assign||function(n,f){for(var u in f)hr.call(f,u)&&(n[u]=f[u])}});var oe=I((Gr,yt)=>{"use strict";var mr=Me(),pr=_e();yt.exports=function(n,f){if(/:([^\/\.-]+)(\.{3})?:/.test(n))throw new SyntaxError("Template parameter names must be separated by either a '/', '-', or '.'.");if(f==null)return n;var u=n.indexOf("?"),l=n.indexOf("#"),y=l<0?n.length:l,h=u<0?y:u,c=n.slice(0,h),m={};pr(m,f);var s=c.replace(/:([^\/\.-]+)(\.{3})?/g,function(x,L,F){return delete m[L],f[L]==null?x:F?f[L]:encodeURIComponent(String(f[L]))}),p=s.indexOf("?"),q=s.indexOf("#"),b=q<0?s.length:q,C=p<0?b:p,N=s.slice(0,C);u>=0&&(N+=n.slice(u,y)),p>=0&&(N+=(u<0?"?":"&")+s.slice(p,b));var O=mr(m);return O&&(N+=(u<0&&p<0?"?":"&")+O),l>=0&&(N+=n.slice(l)),q>=0&&(N+=(l<0?"":"&")+s.slice(q)),N}});var bt=I((Xr,wt)=>{"use strict";var yr=oe(),gt=ie();wt.exports=function(n,f,u){var l=0;function y(m){return new f(m)}y.prototype=f.prototype,y.__proto__=f;function h(m){return function(s,p){typeof s!="string"?(p=s,s=s.url):p==null&&(p={});var q=new f(function(O,x){m(yr(s,p.params),p,function(L){if(typeof p.type=="function")if(Array.isArray(L))for(var F=0;F<L.length;F++)L[F]=new p.type(L[F]);else L=new p.type(L);O(L)},x)});if(p.background===!0)return q;var b=0;function C(){--b===0&&typeof u=="function"&&u()}return N(q);function N(O){var x=O.then;return O.constructor=y,O.then=function(){b++;var L=x.apply(O,arguments);return L.then(C,function(F){if(C(),b===0)throw F}),N(L)},O}}}function c(m,s){for(var p in m.headers)if(gt.call(m.headers,p)&&p.toLowerCase()===s)return!0;return!1}return{request:h(function(m,s,p,q){var b=s.method!=null?s.method.toUpperCase():"GET",C=s.body,N=(s.serialize==null||s.serialize===JSON.serialize)&&!(C instanceof n.FormData||C instanceof n.URLSearchParams),O=s.responseType||(typeof s.extract=="function"?"":"json"),x=new n.XMLHttpRequest,L=!1,F=!1,X=x,U,E=x.abort;x.abort=function(){L=!0,E.call(this)},x.open(b,m,s.async!==!1,typeof s.user=="string"?s.user:void 0,typeof s.password=="string"?s.password:void 0),N&&C!=null&&!c(s,"content-type")&&x.setRequestHeader("Content-Type","application/json; charset=utf-8"),typeof s.deserialize!="function"&&!c(s,"accept")&&x.setRequestHeader("Accept","application/json, text/*"),s.withCredentials&&(x.withCredentials=s.withCredentials),s.timeout&&(x.timeout=s.timeout),x.responseType=O;for(var R in s.headers)gt.call(s.headers,R)&&x.setRequestHeader(R,s.headers[R]);x.onreadystatechange=function(P){if(!L&&P.target.readyState===4)try{var _=P.target.status>=200&&P.target.status<300||P.target.status===304||/^file:\/\//i.test(m),z=P.target.response,T;if(O==="json"){if(!P.target.responseType&&typeof s.extract!="function")try{z=JSON.parse(P.target.responseText)}catch{z=null}}else(!O||O==="text")&&z==null&&(z=P.target.responseText);if(typeof s.extract=="function"?(z=s.extract(P.target,s),_=!0):typeof s.deserialize=="function"&&(z=s.deserialize(z)),_)p(z);else{var J=function(){try{T=P.target.responseText}catch{T=z}var Y=new Error(T);Y.code=P.target.status,Y.response=z,q(Y)};x.status===0?setTimeout(function(){F||J()}):J()}}catch(Y){q(Y)}},x.ontimeout=function(P){F=!0;var _=new Error("Request timed out");_.code=P.target.status,q(_)},typeof s.config=="function"&&(x=s.config(x,s,m)||x,x!==X&&(U=x.abort,x.abort=function(){L=!0,U.call(this)})),C==null?x.send():typeof s.serialize=="function"?x.send(s.serialize(C)):C instanceof n.FormData||C instanceof n.URLSearchParams?x.send(C):x.send(JSON.stringify(C))}),jsonp:h(function(m,s,p,q){var b=s.callbackName||"_mithril_"+Math.round(Math.random()*1e16)+"_"+l++,C=n.document.createElement("script");n[b]=function(N){delete n[b],C.parentNode.removeChild(C),p(N)},C.onerror=function(){delete n[b],C.parentNode.removeChild(C),q(new Error("JSONP request failed"))},C.src=m+(m.indexOf("?")<0?"?":"&")+encodeURIComponent(s.callbackKey||"callback")+"="+encodeURIComponent(b),n.document.documentElement.appendChild(C)})}}});var qt=I((Yr,xt)=>{"use strict";var gr=Re(),wr=se();xt.exports=bt()(typeof window<"u"?window:null,gr,wr.redraw)});var De=I((Zr,Nt)=>{"use strict";function Ct(n){try{return decodeURIComponent(n)}catch{return n}}Nt.exports=function(n){if(n===""||n==null)return{};n.charAt(0)==="?"&&(n=n.slice(1));for(var f=n.split("&"),u={},l={},y=0;y<f.length;y++){var h=f[y].split("="),c=Ct(h[0]),m=h.length===2?Ct(h[1]):"";m==="true"?m=!0:m==="false"&&(m=!1);var s=c.split(/\]\[?|\[/),p=l;c.indexOf("[")>-1&&s.pop();for(var q=0;q<s.length;q++){var b=s[q],C=s[q+1],N=C==""||!isNaN(parseInt(C,10));if(b===""){var c=s.slice(0,q).join();u[c]==null&&(u[c]=Array.isArray(p)?p.length:0),b=u[c]++}else if(b==="__proto__")break;if(q===s.length-1)p[b]=m;else{var O=Object.getOwnPropertyDescriptor(p,b);O!=null&&(O=O.value),O==null&&(p[b]=O=N?[]:{}),p=O}}}return l}});var he=I((Wr,Pt)=>{"use strict";var br=De();Pt.exports=function(n){var f=n.indexOf("?"),u=n.indexOf("#"),l=u<0?n.length:u,y=f<0?l:f,h=n.slice(0,y).replace(/\/{2,}/g,"/");return h?(h[0]!=="/"&&(h="/"+h),h.length>1&&h[h.length-1]==="/"&&(h=h.slice(0,-1))):h="/",{path:h,params:f<0?{}:br(n.slice(f+1,l))}}});var Tt=I(($r,Et)=>{"use strict";var xr=he();Et.exports=function(n){var f=xr(n),u=Object.keys(f.params),l=[],y=new RegExp("^"+f.path.replace(/:([^\/.-]+)(\.{3}|\.(?!\.)|-)?|[\\^$*+.()|\[\]{}]/g,function(h,c,m){return c==null?"\\"+h:(l.push({k:c,r:m==="..."}),m==="..."?"(.*)":m==="."?"([^/]+)\\.":"([^/]+)"+(m||""))})+"$");return function(h){for(var c=0;c<u.length;c++)if(f.params[u[c]]!==h.params[u[c]])return!1;if(!l.length)return y.test(h.path);var m=y.exec(h.path);if(m==null)return!1;for(var c=0;c<l.length;c++)h.params[l[c].k]=l[c].r?m[c+1]:decodeURIComponent(m[c+1]);return!0}}});var Ue=I((vr,zt)=>{"use strict";var At=ie(),Ot=new RegExp("^(?:key|oninit|oncreate|onbeforeupdate|onupdate|onbeforeremove|onremove)$");zt.exports=function(n,f){var u={};if(f!=null)for(var l in n)At.call(n,l)&&!Ot.test(l)&&f.indexOf(l)<0&&(u[l]=n[l]);else for(var l in n)At.call(n,l)&&!Ot.test(l)&&(u[l]=n[l]);return u}});var It=I((kr,Lt)=>{"use strict";var qr=W(),Cr=Oe(),Nr=Re(),jt=oe(),Rt=he(),Pr=Tt(),Er=_e(),Tr=Ue(),He={};function Ar(n){try{return decodeURIComponent(n)}catch{return n}}Lt.exports=function(n,f){var u=n==null?null:typeof n.setImmediate=="function"?n.setImmediate:n.setTimeout,l=Nr.resolve(),y=!1,h=!1,c=0,m,s,p=He,q,b,C,N,O={onbeforeupdate:function(){return c=c?2:1,!(!c||He===p)},onremove:function(){n.removeEventListener("popstate",F,!1),n.removeEventListener("hashchange",L,!1)},view:function(){if(!(!c||He===p)){var E=[qr(q,b.key,b)];return p&&(E=p.render(E[0])),E}}},x=U.SKIP={};function L(){y=!1;var E=n.location.hash;U.prefix[0]!=="#"&&(E=n.location.search+E,U.prefix[0]!=="?"&&(E=n.location.pathname+E,E[0]!=="/"&&(E="/"+E)));var R=E.concat().replace(/(?:%[a-f89][a-f0-9])+/gim,Ar).slice(U.prefix.length),P=Rt(R);Er(P.params,n.history.state);function _(T){console.error(T),X(s,null,{replace:!0})}z(0);function z(T){for(;T<m.length;T++)if(m[T].check(P)){var J=m[T].component,Y=m[T].route,k=J,$=N=function(Z){if($===N){if(Z===x)return z(T+1);q=Z!=null&&(typeof Z.view=="function"||typeof Z=="function")?Z:"div",b=P.params,C=R,N=null,p=J.render?J:null,c===2?f.redraw():(c=2,f.redraw.sync())}};J.view||typeof J=="function"?(J={},$(k)):J.onmatch?l.then(function(){return J.onmatch(P.params,R,Y)}).then($,R===s?null:_):$("div");return}if(R===s)throw new Error("Could not resolve default route "+s+".");X(s,null,{replace:!0})}}function F(){y||(y=!0,u(L))}function X(E,R,P){if(E=jt(E,R),h){F();var _=P?P.state:null,z=P?P.title:null;P&&P.replace?n.history.replaceState(_,z,U.prefix+E):n.history.pushState(_,z,U.prefix+E)}else n.location.href=U.prefix+E}function U(E,R,P){if(!E)throw new TypeError("DOM element being rendered to does not exist.");if(m=Object.keys(P).map(function(z){if(z[0]!=="/")throw new SyntaxError("Routes must start with a '/'.");if(/:([^\/\.-]+)(\.{3})?:/.test(z))throw new SyntaxError("Route parameter names must be separated with either '/', '.', or '-'.");return{route:z,component:P[z],check:Pr(z)}}),s=R,R!=null){var _=Rt(R);if(!m.some(function(z){return z.check(_)}))throw new ReferenceError("Default route doesn't match any known routes.")}typeof n.history.pushState=="function"?n.addEventListener("popstate",F,!1):U.prefix[0]==="#"&&n.addEventListener("hashchange",L,!1),h=!0,f.mount(E,O),L()}return U.set=function(E,R,P){N!=null&&(P=P||{},P.replace=!0),N=null,X(E,R,P)},U.get=function(){return C},U.prefix="#!",U.Link={view:function(E){var R=Cr(E.attrs.selector||"a",Tr(E.attrs,["options","params","selector","onclick"]),E.children),P,_,z;return(R.attrs.disabled=Boolean(R.attrs.disabled))?(R.attrs.href=null,R.attrs["aria-disabled"]="true"):(P=E.attrs.options,_=E.attrs.onclick,z=jt(R.attrs.href,E.attrs.params),R.attrs.href=U.prefix+z,R.attrs.onclick=function(T){var J;typeof _=="function"?J=_.call(T.currentTarget,T):_==null||typeof _!="object"||typeof _.handleEvent=="function"&&_.handleEvent(T),J!==!1&&!T.defaultPrevented&&(T.button===0||T.which===0||T.which===1)&&(!T.currentTarget.target||T.currentTarget.target==="_self")&&!T.ctrlKey&&!T.metaKey&&!T.shiftKey&&!T.altKey&&(T.preventDefault(),T.redraw=!1,U.set(z,null,P))}),R}},U.param=function(E){return b&&E!=null?b[E]:b},U}});var _t=I((dr,Mt)=>{"use strict";var Or=se();Mt.exports=It()(typeof window<"u"?window:null,Or)});var Ft=I((en,Ht)=>{"use strict";var me=it(),Dt=qt(),Ut=se(),Q=function(){return me.apply(this,arguments)};Q.m=me;Q.trust=me.trust;Q.fragment=me.fragment;Q.Fragment="[";Q.mount=Ut.mount;Q.route=_t();Q.render=Ie();Q.redraw=Ut.redraw;Q.request=Dt.request;Q.jsonp=Dt.jsonp;Q.parseQueryString=De();Q.buildQueryString=Me();Q.parsePathname=he();Q.buildPathname=oe();Q.vnode=W();Q.PromisePolyfill=je();Q.censor=Ue();Ht.exports=Q});var Fe=er(Ft()),zr=()=>({view:()=>(0,Fe.default)("main",[(0,Fe.default)("b.header","About")])}),tn=zr;})();
//# sourceMappingURL=about.js.map
