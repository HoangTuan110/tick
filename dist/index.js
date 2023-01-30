(()=>{var fr=Object.create;var Ze=Object.defineProperty;var ar=Object.getOwnPropertyDescriptor;var ur=Object.getOwnPropertyNames;var lr=Object.getPrototypeOf,cr=Object.prototype.hasOwnProperty;var L=(n,i)=>()=>(i||n((i={exports:{}}).exports,i),i.exports);var sr=(n,i,a,l)=>{if(i&&typeof i=="object"||typeof i=="function")for(let p of ur(i))!cr.call(n,p)&&p!==a&&Ze(n,p,{get:()=>i[p],enumerable:!(l=ar(i,p))||l.enumerable});return n};var Re=(n,i,a)=>(a=n!=null?fr(lr(n)):{},sr(i||!n||!n.__esModule?Ze(a,"default",{value:n,enumerable:!0}):a,n));var G=L((Yr,et)=>{"use strict";function ee(n,i,a,l,p,h){return{tag:n,key:i,attrs:a,children:l,text:p,dom:h,domSize:void 0,state:void 0,events:void 0,instance:void 0}}ee.normalize=function(n){return Array.isArray(n)?ee("[",void 0,void 0,ee.normalizeChildren(n),void 0,void 0):n==null||typeof n=="boolean"?null:typeof n=="object"?n:ee("#",void 0,void 0,String(n),void 0,void 0)};ee.normalizeChildren=function(n){var i=[];if(n.length){for(var a=n[0]!=null&&n[0].key!=null,l=1;l<n.length;l++)if((n[l]!=null&&n[l].key!=null)!==a)throw new TypeError(a&&(n[l]!=null||typeof n[l]=="boolean")?"In fragments, vnodes must either all have keys or none have keys. You may wish to consider using an explicit keyed empty fragment, m.fragment({key: ...}), instead of a hole.":"In fragments, vnodes must either all have keys or none have keys.");for(var l=0;l<n.length;l++)i[l]=ee.normalize(n[l])}return i};et.exports=ee});var je=L((Zr,tt)=>{"use strict";var or=G();tt.exports=function(){var n=arguments[this],i=this+1,a;if(n==null?n={}:(typeof n!="object"||n.tag!=null||Array.isArray(n))&&(n={},i=this),arguments.length===i+1)a=arguments[i],Array.isArray(a)||(a=[a]);else for(a=[];i<arguments.length;)a.push(arguments[i++]);return or("",n.key,n,a)}});var ue=L((en,rt)=>{"use strict";rt.exports={}.hasOwnProperty});var ze=L((tn,ft)=>{"use strict";var hr=G(),mr=je(),ne=ue(),pr=/(?:(^|#|\.)([^#\.\[\]]+))|(\[(.+?)(?:\s*=\s*("|'|)((?:\\["'\]]|.)*?)\5)?\])/g,it={};function nt(n){for(var i in n)if(ne.call(n,i))return!1;return!0}function yr(n){for(var i,a="div",l=[],p={};i=pr.exec(n);){var h=i[1],c=i[2];if(h===""&&c!=="")a=c;else if(h==="#")p.id=c;else if(h===".")l.push(c);else if(i[3][0]==="["){var m=i[6];m&&(m=m.replace(/\\(["'])/g,"$1").replace(/\\\\/g,"\\")),i[4]==="class"?l.push(m):p[i[4]]=m===""?m:m||!0}}return l.length>0&&(p.className=l.join(" ")),it[n]={tag:a,attrs:p}}function gr(n,i){var a=i.attrs,l=ne.call(a,"class"),p=l?a.class:a.className;if(i.tag=n.tag,i.attrs={},!nt(n.attrs)&&!nt(a)){var h={};for(var c in a)ne.call(a,c)&&(h[c]=a[c]);a=h}for(var c in n.attrs)ne.call(n.attrs,c)&&c!=="className"&&!ne.call(a,c)&&(a[c]=n.attrs[c]);(p!=null||n.attrs.className!=null)&&(a.className=p!=null?n.attrs.className!=null?String(n.attrs.className)+" "+String(p):p:n.attrs.className!=null?n.attrs.className:null),l&&(a.class=null);for(var c in a)if(ne.call(a,c)&&c!=="key"){i.attrs=a;break}return i}function br(n){if(n==null||typeof n!="string"&&typeof n!="function"&&typeof n.view!="function")throw Error("The selector must be either a string or a component.");var i=mr.apply(1,arguments);return typeof n=="string"&&(i.children=hr.normalizeChildren(i.children),n!=="[")?gr(it[n]||yr(n),i):(i.tag=n,i)}ft.exports=br});var ut=L((rn,at)=>{"use strict";var wr=G();at.exports=function(n){return n==null&&(n=""),wr("<",void 0,void 0,n,void 0,void 0)}});var ct=L((nn,lt)=>{"use strict";var xr=G(),qr=je();lt.exports=function(){var n=qr.apply(0,arguments);return n.tag="[",n.children=xr.normalizeChildren(n.children),n}});var ot=L((fn,st)=>{"use strict";var Le=ze();Le.trust=ut();Le.fragment=ct();st.exports=Le});var Me=L((an,ht)=>{"use strict";var S=function(n){if(!(this instanceof S))throw new Error("Promise must be called with 'new'.");if(typeof n!="function")throw new TypeError("executor must be a function.");var i=this,a=[],l=[],p=s(a,!0),h=s(l,!1),c=i._instance={resolvers:a,rejectors:l},m=typeof setImmediate=="function"?setImmediate:setTimeout;function s(q,w){return function _(C){var O;try{if(w&&C!=null&&(typeof C=="object"||typeof C=="function")&&typeof(O=C.then)=="function"){if(C===i)throw new TypeError("Promise can't be resolved with itself.");y(O.bind(C))}else m(function(){!w&&q.length===0&&console.error("Possible unhandled promise rejection:",C);for(var x=0;x<q.length;x++)q[x](C);a.length=0,l.length=0,c.state=w,c.retry=function(){_(C)}})}catch(x){h(x)}}}function y(q){var w=0;function _(O){return function(x){w++>0||O(x)}}var C=_(h);try{q(_(p),C)}catch(O){C(O)}}y(n)};S.prototype.then=function(n,i){var a=this,l=a._instance;function p(s,y,q,w){y.push(function(_){if(typeof s!="function")q(_);else try{h(s(_))}catch(C){c&&c(C)}}),typeof l.retry=="function"&&w===l.state&&l.retry()}var h,c,m=new S(function(s,y){h=s,c=y});return p(n,l.resolvers,h,!0),p(i,l.rejectors,c,!1),m};S.prototype.catch=function(n){return this.then(null,n)};S.prototype.finally=function(n){return this.then(function(i){return S.resolve(n()).then(function(){return i})},function(i){return S.resolve(n()).then(function(){return S.reject(i)})})};S.resolve=function(n){return n instanceof S?n:new S(function(i){i(n)})};S.reject=function(n){return new S(function(i,a){a(n)})};S.all=function(n){return new S(function(i,a){var l=n.length,p=0,h=[];if(n.length===0)i([]);else for(var c=0;c<n.length;c++)(function(m){function s(y){p++,h[m]=y,p===l&&i(h)}n[m]!=null&&(typeof n[m]=="object"||typeof n[m]=="function")&&typeof n[m].then=="function"?n[m].then(s,a):s(n[m])})(c)})};S.race=function(n){return new S(function(i,a){for(var l=0;l<n.length;l++)n[l].then(i,a)})};ht.exports=S});var Ie=L((un,he)=>{"use strict";var le=Me();typeof window<"u"?(typeof window.Promise>"u"?window.Promise=le:window.Promise.prototype.finally||(window.Promise.prototype.finally=le.prototype.finally),he.exports=window.Promise):typeof global<"u"?(typeof global.Promise>"u"?global.Promise=le:global.Promise.prototype.finally||(global.Promise.prototype.finally=le.prototype.finally),he.exports=global.Promise):he.exports=le});var pt=L((ln,mt)=>{"use strict";var De=G();mt.exports=function(n){var i=n&&n.document,a,l={svg:"http://www.w3.org/2000/svg",math:"http://www.w3.org/1998/Math/MathML"};function p(t){return t.attrs&&t.attrs.xmlns||l[t.tag]}function h(t,e){if(t.state!==e)throw new Error("'vnode.state' must not be modified.")}function c(t){var e=t.state;try{return this.apply(e,arguments)}finally{h(t,e)}}function m(){try{return i.activeElement}catch{return null}}function s(t,e,r,f,u,o,b){for(var d=r;d<f;d++){var g=e[d];g!=null&&y(t,g,u,b,o)}}function y(t,e,r,f,u){var o=e.tag;if(typeof o=="string")switch(e.state={},e.attrs!=null&&Ce(e.attrs,e,r),o){case"#":q(t,e,u);break;case"<":_(t,e,f,u);break;case"[":C(t,e,r,f,u);break;default:O(t,e,r,f,u)}else z(t,e,r,f,u)}function q(t,e,r){e.dom=i.createTextNode(e.children),W(t,e.dom,r)}var w={caption:"table",thead:"table",tbody:"table",tfoot:"table",tr:"tbody",th:"tr",td:"tr",colgroup:"table",col:"colgroup"};function _(t,e,r,f){var u=e.children.match(/^\s*?<(\w+)/im)||[],o=i.createElement(w[u[1]]||"div");r==="http://www.w3.org/2000/svg"?(o.innerHTML='<svg xmlns="http://www.w3.org/2000/svg">'+e.children+"</svg>",o=o.firstChild):o.innerHTML=e.children,e.dom=o.firstChild,e.domSize=o.childNodes.length,e.instance=[];for(var b=i.createDocumentFragment(),d;d=o.firstChild;)e.instance.push(d),b.appendChild(d);W(t,b,f)}function C(t,e,r,f,u){var o=i.createDocumentFragment();if(e.children!=null){var b=e.children;s(o,b,0,b.length,r,null,f)}e.dom=o.firstChild,e.domSize=o.childNodes.length,W(t,o,u)}function O(t,e,r,f,u){var o=e.tag,b=e.attrs,d=b&&b.is;f=p(e)||f;var g=f?d?i.createElementNS(f,o,{is:d}):i.createElementNS(f,o):d?i.createElement(o,{is:d}):i.createElement(o);if(e.dom=g,b!=null&&Wt(e,b,f),W(t,g,u),!Ve(e)&&e.children!=null){var R=e.children;s(g,R,0,R.length,r,null,f),e.tag==="select"&&b!=null&&Yt(e,b)}}function x(t,e){var r;if(typeof t.tag.view=="function"){if(t.state=Object.create(t.tag),r=t.state.view,r.$$reentrantLock$$!=null)return;r.$$reentrantLock$$=!0}else{if(t.state=void 0,r=t.tag,r.$$reentrantLock$$!=null)return;r.$$reentrantLock$$=!0,t.state=t.tag.prototype!=null&&typeof t.tag.prototype.view=="function"?new t.tag(t):t.tag(t)}if(Ce(t.state,t,e),t.attrs!=null&&Ce(t.attrs,t,e),t.instance=De.normalize(c.call(t.state.view,t)),t.instance===t)throw Error("A view cannot return the vnode it received as argument");r.$$reentrantLock$$=null}function z(t,e,r,f,u){x(e,r),e.instance!=null?(y(t,e.instance,r,f,u),e.dom=e.instance.dom,e.domSize=e.dom!=null?e.instance.domSize:0):e.domSize=0}function H(t,e,r,f,u,o){if(!(e===r||e==null&&r==null))if(e==null||e.length===0)s(t,r,0,r.length,f,u,o);else if(r==null||r.length===0)ie(t,e,0,e.length);else{var b=e[0]!=null&&e[0].key!=null,d=r[0]!=null&&r[0].key!=null,g=0,R=0;if(!b)for(;R<e.length&&e[R]==null;)R++;if(!d)for(;g<r.length&&r[g]==null;)g++;if(b!==d)ie(t,e,R,e.length),s(t,r,g,r.length,f,u,o);else if(d){for(var V=e.length-1,U=r.length-1,oe,J,F,Q,M,Ne;V>=R&&U>=g&&(Q=e[V],M=r[U],Q.key===M.key);)Q!==M&&$(t,Q,M,f,u,o),M.dom!=null&&(u=M.dom),V--,U--;for(;V>=R&&U>=g&&(J=e[R],F=r[g],J.key===F.key);)R++,g++,J!==F&&$(t,J,F,f,X(e,R,u),o);for(;V>=R&&U>=g&&!(g===U||J.key!==M.key||Q.key!==F.key);)Ne=X(e,R,u),te(t,Q,Ne),Q!==F&&$(t,Q,F,f,Ne,o),++g<=--U&&te(t,J,u),J!==M&&$(t,J,M,f,u,o),M.dom!=null&&(u=M.dom),R++,V--,Q=e[V],M=r[U],J=e[R],F=r[g];for(;V>=R&&U>=g&&Q.key===M.key;)Q!==M&&$(t,Q,M,f,u,o),M.dom!=null&&(u=M.dom),V--,U--,Q=e[V],M=r[U];if(g>U)ie(t,e,R,V+1);else if(R>V)s(t,r,g,U+1,f,u,o);else{var ir=u,Ye=U-g+1,ae=new Array(Ye),de=0,D=0,Oe=2147483647,Pe=0,oe,Ae;for(D=0;D<Ye;D++)ae[D]=-1;for(D=U;D>=g;D--){oe==null&&(oe=A(e,R,V+1)),M=r[D];var re=oe[M.key];re!=null&&(Oe=re<Oe?re:-1,ae[D-g]=re,Q=e[re],e[re]=null,Q!==M&&$(t,Q,M,f,u,o),M.dom!=null&&(u=M.dom),Pe++)}if(u=ir,Pe!==V-R+1&&ie(t,e,R,V+1),Pe===0)s(t,r,g,U+1,f,u,o);else if(Oe===-1)for(Ae=B(ae),de=Ae.length-1,D=U;D>=g;D--)F=r[D],ae[D-g]===-1?y(t,F,f,o,u):Ae[de]===D-g?de--:te(t,F,u),F.dom!=null&&(u=r[D].dom);else for(D=U;D>=g;D--)F=r[D],ae[D-g]===-1&&y(t,F,f,o,u),F.dom!=null&&(u=r[D].dom)}}else{var Ee=e.length<r.length?e.length:r.length;for(g=g<R?g:R;g<Ee;g++)J=e[g],F=r[g],!(J===F||J==null&&F==null)&&(J==null?y(t,F,f,o,X(e,g+1,u)):F==null?ce(t,J):$(t,J,F,f,X(e,g+1,u),o));e.length>Ee&&ie(t,e,g,e.length),r.length>Ee&&s(t,r,g,r.length,f,u,o)}}}function $(t,e,r,f,u,o){var b=e.tag,d=r.tag;if(b===d){if(r.state=e.state,r.events=e.events,nr(r,e))return;if(typeof b=="string")switch(r.attrs!=null&&Te(r.attrs,r,f),b){case"#":k(e,r);break;case"<":E(t,e,r,o,u);break;case"[":j(t,e,r,f,u,o);break;default:T(e,r,f,o)}else I(t,e,r,f,u,o)}else ce(t,e),y(t,r,f,o,u)}function k(t,e){t.children.toString()!==e.children.toString()&&(t.dom.nodeValue=e.children),e.dom=t.dom}function E(t,e,r,f,u){e.children!==r.children?(Je(t,e),_(t,r,f,u)):(r.dom=e.dom,r.domSize=e.domSize,r.instance=e.instance)}function j(t,e,r,f,u,o){H(t,e.children,r.children,f,u,o);var b=0,d=r.children;if(r.dom=null,d!=null){for(var g=0;g<d.length;g++){var R=d[g];R!=null&&R.dom!=null&&(r.dom==null&&(r.dom=R.dom),b+=R.domSize||1)}b!==1&&(r.domSize=b)}}function T(t,e,r,f){var u=e.dom=t.dom;f=p(e)||f,e.tag==="textarea"&&e.attrs==null&&(e.attrs={}),Zt(e,t.attrs,e.attrs,f),Ve(e)||H(u,t.children,e.children,r,null,f)}function I(t,e,r,f,u,o){if(r.instance=De.normalize(c.call(r.state.view,r)),r.instance===r)throw Error("A view cannot return the vnode it received as argument");Te(r.state,r,f),r.attrs!=null&&Te(r.attrs,r,f),r.instance!=null?(e.instance==null?y(t,r.instance,f,o,u):$(t,e.instance,r.instance,f,u,o),r.dom=r.instance.dom,r.domSize=r.instance.domSize):e.instance!=null?(ce(t,e.instance),r.dom=void 0,r.domSize=0):(r.dom=e.dom,r.domSize=e.domSize)}function A(t,e,r){for(var f=Object.create(null);e<r;e++){var u=t[e];if(u!=null){var o=u.key;o!=null&&(f[o]=e)}}return f}var N=[];function B(t){for(var e=[0],r=0,f=0,u=0,o=N.length=t.length,u=0;u<o;u++)N[u]=t[u];for(var u=0;u<o;++u)if(t[u]!==-1){var b=e[e.length-1];if(t[b]<t[u]){N[u]=b,e.push(u);continue}for(r=0,f=e.length-1;r<f;){var d=(r>>>1)+(f>>>1)+(r&f&1);t[e[d]]<t[u]?r=d+1:f=d}t[u]<t[e[r]]&&(r>0&&(N[u]=e[r-1]),e[r]=u)}for(r=e.length,f=e[r-1];r-- >0;)e[r]=f,f=N[f];return N.length=0,e}function X(t,e,r){for(;e<t.length;e++)if(t[e]!=null&&t[e].dom!=null)return t[e].dom;return r}function te(t,e,r){var f=i.createDocumentFragment();Z(t,f,e),W(t,f,r)}function Z(t,e,r){for(;r.dom!=null&&r.dom.parentNode===t;){if(typeof r.tag!="string"){if(r=r.instance,r!=null)continue}else if(r.tag==="<")for(var f=0;f<r.instance.length;f++)e.appendChild(r.instance[f]);else if(r.tag!=="[")e.appendChild(r.dom);else if(r.children.length===1){if(r=r.children[0],r!=null)continue}else for(var f=0;f<r.children.length;f++){var u=r.children[f];u!=null&&Z(t,e,u)}break}}function W(t,e,r){r!=null?t.insertBefore(e,r):t.appendChild(e)}function Ve(t){if(t.attrs==null||t.attrs.contenteditable==null&&t.attrs.contentEditable==null)return!1;var e=t.children;if(e!=null&&e.length===1&&e[0].tag==="<"){var r=e[0].children;t.dom.innerHTML!==r&&(t.dom.innerHTML=r)}else if(e!=null&&e.length!==0)throw new Error("Child node of a contenteditable must be trusted.");return!0}function ie(t,e,r,f){for(var u=r;u<f;u++){var o=e[u];o!=null&&ce(t,o)}}function ce(t,e){var r=0,f=e.state,u,o;if(typeof e.tag!="string"&&typeof e.state.onbeforeremove=="function"){var b=c.call(e.state.onbeforeremove,e);b!=null&&typeof b.then=="function"&&(r=1,u=b)}if(e.attrs&&typeof e.attrs.onbeforeremove=="function"){var b=c.call(e.attrs.onbeforeremove,e);b!=null&&typeof b.then=="function"&&(r|=2,o=b)}if(h(e,f),!r)se(e),we(t,e);else{if(u!=null){var d=function(){r&1&&(r&=2,r||g())};u.then(d,d)}if(o!=null){var d=function(){r&2&&(r&=1,r||g())};o.then(d,d)}}function g(){h(e,f),se(e),we(t,e)}}function Je(t,e){for(var r=0;r<e.instance.length;r++)t.removeChild(e.instance[r])}function we(t,e){for(;e.dom!=null&&e.dom.parentNode===t;){if(typeof e.tag!="string"){if(e=e.instance,e!=null)continue}else if(e.tag==="<")Je(t,e);else{if(e.tag!=="["&&(t.removeChild(e.dom),!Array.isArray(e.children)))break;if(e.children.length===1){if(e=e.children[0],e!=null)continue}else for(var r=0;r<e.children.length;r++){var f=e.children[r];f!=null&&we(t,f)}}break}}function se(t){if(typeof t.tag!="string"&&typeof t.state.onremove=="function"&&c.call(t.state.onremove,t),t.attrs&&typeof t.attrs.onremove=="function"&&c.call(t.attrs.onremove,t),typeof t.tag!="string")t.instance!=null&&se(t.instance);else{var e=t.children;if(Array.isArray(e))for(var r=0;r<e.length;r++){var f=e[r];f!=null&&se(f)}}}function Wt(t,e,r){t.tag==="input"&&e.type!=null&&t.dom.setAttribute("type",e.type);var f=e!=null&&t.tag==="input"&&e.type==="file";for(var u in e)xe(t,u,null,e[u],r,f)}function xe(t,e,r,f,u,o){if(!(e==="key"||e==="is"||f==null||$e(e)||r===f&&!er(t,e)&&typeof f!="object"||e==="type"&&t.tag==="input")){if(e[0]==="o"&&e[1]==="n")return Ge(t,e,f);if(e.slice(0,6)==="xlink:")t.dom.setAttributeNS("http://www.w3.org/1999/xlink",e.slice(6),f);else if(e==="style")We(t.dom,r,f);else if(Xe(t,e,u)){if(e==="value"){if((t.tag==="input"||t.tag==="textarea")&&t.dom.value===""+f&&(o||t.dom===m())||t.tag==="select"&&r!==null&&t.dom.value===""+f||t.tag==="option"&&r!==null&&t.dom.value===""+f)return;if(o&&""+f!=""){console.error("`value` is read-only on file inputs!");return}}t.dom[e]=f}else typeof f=="boolean"?f?t.dom.setAttribute(e,""):t.dom.removeAttribute(e):t.dom.setAttribute(e==="className"?"class":e,f)}}function Gt(t,e,r,f){if(!(e==="key"||e==="is"||r==null||$e(e)))if(e[0]==="o"&&e[1]==="n")Ge(t,e,void 0);else if(e==="style")We(t.dom,r,null);else if(Xe(t,e,f)&&e!=="className"&&e!=="title"&&!(e==="value"&&(t.tag==="option"||t.tag==="select"&&t.dom.selectedIndex===-1&&t.dom===m()))&&!(t.tag==="input"&&e==="type"))t.dom[e]=null;else{var u=e.indexOf(":");u!==-1&&(e=e.slice(u+1)),r!==!1&&t.dom.removeAttribute(e==="className"?"class":e)}}function Yt(t,e){if("value"in e)if(e.value===null)t.dom.selectedIndex!==-1&&(t.dom.value=null);else{var r=""+e.value;(t.dom.value!==r||t.dom.selectedIndex===-1)&&(t.dom.value=r)}"selectedIndex"in e&&xe(t,"selectedIndex",null,e.selectedIndex,void 0)}function Zt(t,e,r,f){if(e&&e===r&&console.warn("Don't reuse attrs object, use new object for every redraw, this will throw in next major"),r!=null){t.tag==="input"&&r.type!=null&&t.dom.setAttribute("type",r.type);var u=t.tag==="input"&&r.type==="file";for(var o in r)xe(t,o,e&&e[o],r[o],f,u)}var b;if(e!=null)for(var o in e)(b=e[o])!=null&&(r==null||r[o]==null)&&Gt(t,o,b,f)}function er(t,e){return e==="value"||e==="checked"||e==="selectedIndex"||e==="selected"&&t.dom===m()||t.tag==="option"&&t.dom.parentNode===i.activeElement}function $e(t){return t==="oninit"||t==="oncreate"||t==="onupdate"||t==="onremove"||t==="onbeforeremove"||t==="onbeforeupdate"}function Xe(t,e,r){return r===void 0&&(t.tag.indexOf("-")>-1||t.attrs!=null&&t.attrs.is||e!=="href"&&e!=="list"&&e!=="form"&&e!=="width"&&e!=="height")&&e in t.dom}var tr=/[A-Z]/g;function rr(t){return"-"+t.toLowerCase()}function qe(t){return t[0]==="-"&&t[1]==="-"?t:t==="cssFloat"?"float":t.replace(tr,rr)}function We(t,e,r){if(e!==r)if(r==null)t.style.cssText="";else if(typeof r!="object")t.style.cssText=r;else if(e==null||typeof e!="object"){t.style.cssText="";for(var f in r){var u=r[f];u!=null&&t.style.setProperty(qe(f),String(u))}}else{for(var f in r){var u=r[f];u!=null&&(u=String(u))!==String(e[f])&&t.style.setProperty(qe(f),u)}for(var f in e)e[f]!=null&&r[f]==null&&t.style.removeProperty(qe(f))}}function _e(){this._=a}_e.prototype=Object.create(null),_e.prototype.handleEvent=function(t){var e=this["on"+t.type],r;typeof e=="function"?r=e.call(t.currentTarget,t):typeof e.handleEvent=="function"&&e.handleEvent(t),this._&&t.redraw!==!1&&(0,this._)(),r===!1&&(t.preventDefault(),t.stopPropagation())};function Ge(t,e,r){if(t.events!=null){if(t.events._=a,t.events[e]===r)return;r!=null&&(typeof r=="function"||typeof r=="object")?(t.events[e]==null&&t.dom.addEventListener(e.slice(2),t.events,!1),t.events[e]=r):(t.events[e]!=null&&t.dom.removeEventListener(e.slice(2),t.events,!1),t.events[e]=void 0)}else r!=null&&(typeof r=="function"||typeof r=="object")&&(t.events=new _e,t.dom.addEventListener(e.slice(2),t.events,!1),t.events[e]=r)}function Ce(t,e,r){typeof t.oninit=="function"&&c.call(t.oninit,e),typeof t.oncreate=="function"&&r.push(c.bind(t.oncreate,e))}function Te(t,e,r){typeof t.onupdate=="function"&&r.push(c.bind(t.onupdate,e))}function nr(t,e){do{if(t.attrs!=null&&typeof t.attrs.onbeforeupdate=="function"){var r=c.call(t.attrs.onbeforeupdate,t,e);if(r!==void 0&&!r)break}if(typeof t.tag!="string"&&typeof t.state.onbeforeupdate=="function"){var r=c.call(t.state.onbeforeupdate,t,e);if(r!==void 0&&!r)break}return!1}while(!1);return t.dom=e.dom,t.domSize=e.domSize,t.instance=e.instance,t.attrs=e.attrs,t.children=e.children,t.text=e.text,!0}var fe;return function(t,e,r){if(!t)throw new TypeError("DOM element being rendered to does not exist.");if(fe!=null&&t.contains(fe))throw new TypeError("Node is currently being rendered to and thus is locked.");var f=a,u=fe,o=[],b=m(),d=t.namespaceURI;fe=t,a=typeof r=="function"?r:void 0;try{t.vnodes==null&&(t.textContent=""),e=De.normalizeChildren(Array.isArray(e)?e:[e]),H(t,t.vnodes,e,o,null,d==="http://www.w3.org/1999/xhtml"?void 0:d),t.vnodes=e,b!=null&&m()!==b&&typeof b.focus=="function"&&b.focus();for(var g=0;g<o.length;g++)o[g]()}finally{a=f,fe=u}}}});var ke=L((cn,yt)=>{"use strict";yt.exports=pt()(typeof window<"u"?window:null)});var wt=L((sn,bt)=>{"use strict";var gt=G();bt.exports=function(n,i,a){var l=[],p=!1,h=-1;function c(){for(h=0;h<l.length;h+=2)try{n(l[h],gt(l[h+1]),m)}catch(y){a.error(y)}h=-1}function m(){p||(p=!0,i(function(){p=!1,c()}))}m.sync=c;function s(y,q){if(q!=null&&q.view==null&&typeof q!="function")throw new TypeError("m.mount expects a component, not a vnode.");var w=l.indexOf(y);w>=0&&(l.splice(w,2),w<=h&&(h-=2),n(y,[])),q!=null&&(l.push(y,q),n(y,gt(q),m))}return{mount:s,redraw:m}}});var me=L((on,xt)=>{"use strict";var _r=ke();xt.exports=wt()(_r,typeof requestAnimationFrame<"u"?requestAnimationFrame:null,typeof console<"u"?console:null)});var Fe=L((hn,qt)=>{"use strict";qt.exports=function(n){if(Object.prototype.toString.call(n)!=="[object Object]")return"";var i=[];for(var a in n)l(a,n[a]);return i.join("&");function l(p,h){if(Array.isArray(h))for(var c=0;c<h.length;c++)l(p+"["+c+"]",h[c]);else if(Object.prototype.toString.call(h)==="[object Object]")for(var c in h)l(p+"["+c+"]",h[c]);else i.push(encodeURIComponent(p)+(h!=null&&h!==""?"="+encodeURIComponent(h):""))}}});var He=L((mn,_t)=>{"use strict";var Cr=ue();_t.exports=Object.assign||function(n,i){for(var a in i)Cr.call(i,a)&&(n[a]=i[a])}});var pe=L((pn,Ct)=>{"use strict";var Tr=Fe(),Er=He();Ct.exports=function(n,i){if(/:([^\/\.-]+)(\.{3})?:/.test(n))throw new SyntaxError("Template parameter names must be separated by either a '/', '-', or '.'.");if(i==null)return n;var a=n.indexOf("?"),l=n.indexOf("#"),p=l<0?n.length:l,h=a<0?p:a,c=n.slice(0,h),m={};Er(m,i);var s=c.replace(/:([^\/\.-]+)(\.{3})?/g,function(x,z,H){return delete m[z],i[z]==null?x:H?i[z]:encodeURIComponent(String(i[z]))}),y=s.indexOf("?"),q=s.indexOf("#"),w=q<0?s.length:q,_=y<0?w:y,C=s.slice(0,_);a>=0&&(C+=n.slice(a,p)),y>=0&&(C+=(a<0?"?":"&")+s.slice(y,w));var O=Tr(m);return O&&(C+=(a<0&&y<0?"?":"&")+O),l>=0&&(C+=n.slice(l)),q>=0&&(C+=(l<0?"":"&")+s.slice(q)),C}});var Nt=L((yn,Et)=>{"use strict";var Nr=pe(),Tt=ue();Et.exports=function(n,i,a){var l=0;function p(m){return new i(m)}p.prototype=i.prototype,p.__proto__=i;function h(m){return function(s,y){typeof s!="string"?(y=s,s=s.url):y==null&&(y={});var q=new i(function(O,x){m(Nr(s,y.params),y,function(z){if(typeof y.type=="function")if(Array.isArray(z))for(var H=0;H<z.length;H++)z[H]=new y.type(z[H]);else z=new y.type(z);O(z)},x)});if(y.background===!0)return q;var w=0;function _(){--w===0&&typeof a=="function"&&a()}return C(q);function C(O){var x=O.then;return O.constructor=p,O.then=function(){w++;var z=x.apply(O,arguments);return z.then(_,function(H){if(_(),w===0)throw H}),C(z)},O}}}function c(m,s){for(var y in m.headers)if(Tt.call(m.headers,y)&&y.toLowerCase()===s)return!0;return!1}return{request:h(function(m,s,y,q){var w=s.method!=null?s.method.toUpperCase():"GET",_=s.body,C=(s.serialize==null||s.serialize===JSON.serialize)&&!(_ instanceof n.FormData||_ instanceof n.URLSearchParams),O=s.responseType||(typeof s.extract=="function"?"":"json"),x=new n.XMLHttpRequest,z=!1,H=!1,$=x,k,E=x.abort;x.abort=function(){z=!0,E.call(this)},x.open(w,m,s.async!==!1,typeof s.user=="string"?s.user:void 0,typeof s.password=="string"?s.password:void 0),C&&_!=null&&!c(s,"content-type")&&x.setRequestHeader("Content-Type","application/json; charset=utf-8"),typeof s.deserialize!="function"&&!c(s,"accept")&&x.setRequestHeader("Accept","application/json, text/*"),s.withCredentials&&(x.withCredentials=s.withCredentials),s.timeout&&(x.timeout=s.timeout),x.responseType=O;for(var j in s.headers)Tt.call(s.headers,j)&&x.setRequestHeader(j,s.headers[j]);x.onreadystatechange=function(T){if(!z&&T.target.readyState===4)try{var I=T.target.status>=200&&T.target.status<300||T.target.status===304||/^file:\/\//i.test(m),A=T.target.response,N;if(O==="json"){if(!T.target.responseType&&typeof s.extract!="function")try{A=JSON.parse(T.target.responseText)}catch{A=null}}else(!O||O==="text")&&A==null&&(A=T.target.responseText);if(typeof s.extract=="function"?(A=s.extract(T.target,s),I=!0):typeof s.deserialize=="function"&&(A=s.deserialize(A)),I)y(A);else{var B=function(){try{N=T.target.responseText}catch{N=A}var X=new Error(N);X.code=T.target.status,X.response=A,q(X)};x.status===0?setTimeout(function(){H||B()}):B()}}catch(X){q(X)}},x.ontimeout=function(T){H=!0;var I=new Error("Request timed out");I.code=T.target.status,q(I)},typeof s.config=="function"&&(x=s.config(x,s,m)||x,x!==$&&(k=x.abort,x.abort=function(){z=!0,k.call(this)})),_==null?x.send():typeof s.serialize=="function"?x.send(s.serialize(_)):_ instanceof n.FormData||_ instanceof n.URLSearchParams?x.send(_):x.send(JSON.stringify(_))}),jsonp:h(function(m,s,y,q){var w=s.callbackName||"_mithril_"+Math.round(Math.random()*1e16)+"_"+l++,_=n.document.createElement("script");n[w]=function(C){delete n[w],_.parentNode.removeChild(_),y(C)},_.onerror=function(){delete n[w],_.parentNode.removeChild(_),q(new Error("JSONP request failed"))},_.src=m+(m.indexOf("?")<0?"?":"&")+encodeURIComponent(s.callbackKey||"callback")+"="+encodeURIComponent(w),n.document.documentElement.appendChild(_)})}}});var Ot=L((gn,dt)=>{"use strict";var dr=Ie(),Or=me();dt.exports=Nt()(typeof window<"u"?window:null,dr,Or.redraw)});var Ue=L((bn,At)=>{"use strict";function Pt(n){try{return decodeURIComponent(n)}catch{return n}}At.exports=function(n){if(n===""||n==null)return{};n.charAt(0)==="?"&&(n=n.slice(1));for(var i=n.split("&"),a={},l={},p=0;p<i.length;p++){var h=i[p].split("="),c=Pt(h[0]),m=h.length===2?Pt(h[1]):"";m==="true"?m=!0:m==="false"&&(m=!1);var s=c.split(/\]\[?|\[/),y=l;c.indexOf("[")>-1&&s.pop();for(var q=0;q<s.length;q++){var w=s[q],_=s[q+1],C=_==""||!isNaN(parseInt(_,10));if(w===""){var c=s.slice(0,q).join();a[c]==null&&(a[c]=Array.isArray(y)?y.length:0),w=a[c]++}else if(w==="__proto__")break;if(q===s.length-1)y[w]=m;else{var O=Object.getOwnPropertyDescriptor(y,w);O!=null&&(O=O.value),O==null&&(y[w]=O=C?[]:{}),y=O}}}return l}});var ye=L((wn,Rt)=>{"use strict";var Pr=Ue();Rt.exports=function(n){var i=n.indexOf("?"),a=n.indexOf("#"),l=a<0?n.length:a,p=i<0?l:i,h=n.slice(0,p).replace(/\/{2,}/g,"/");return h?(h[0]!=="/"&&(h="/"+h),h.length>1&&h[h.length-1]==="/"&&(h=h.slice(0,-1))):h="/",{path:h,params:i<0?{}:Pr(n.slice(i+1,l))}}});var zt=L((xn,jt)=>{"use strict";var Ar=ye();jt.exports=function(n){var i=Ar(n),a=Object.keys(i.params),l=[],p=new RegExp("^"+i.path.replace(/:([^\/.-]+)(\.{3}|\.(?!\.)|-)?|[\\^$*+.()|\[\]{}]/g,function(h,c,m){return c==null?"\\"+h:(l.push({k:c,r:m==="..."}),m==="..."?"(.*)":m==="."?"([^/]+)\\.":"([^/]+)"+(m||""))})+"$");return function(h){for(var c=0;c<a.length;c++)if(i.params[a[c]]!==h.params[a[c]])return!1;if(!l.length)return p.test(h.path);var m=p.exec(h.path);if(m==null)return!1;for(var c=0;c<l.length;c++)h.params[l[c].k]=l[c].r?m[c+1]:decodeURIComponent(m[c+1]);return!0}}});var Se=L((qn,It)=>{"use strict";var Lt=ue(),Mt=new RegExp("^(?:key|oninit|oncreate|onbeforeupdate|onupdate|onbeforeremove|onremove)$");It.exports=function(n,i){var a={};if(i!=null)for(var l in n)Lt.call(n,l)&&!Mt.test(l)&&i.indexOf(l)<0&&(a[l]=n[l]);else for(var l in n)Lt.call(n,l)&&!Mt.test(l)&&(a[l]=n[l]);return a}});var Ht=L((_n,Ft)=>{"use strict";var Rr=G(),jr=ze(),zr=Ie(),Dt=pe(),kt=ye(),Lr=zt(),Mr=He(),Ir=Se(),ve={};function Dr(n){try{return decodeURIComponent(n)}catch{return n}}Ft.exports=function(n,i){var a=n==null?null:typeof n.setImmediate=="function"?n.setImmediate:n.setTimeout,l=zr.resolve(),p=!1,h=!1,c=0,m,s,y=ve,q,w,_,C,O={onbeforeupdate:function(){return c=c?2:1,!(!c||ve===y)},onremove:function(){n.removeEventListener("popstate",H,!1),n.removeEventListener("hashchange",z,!1)},view:function(){if(!(!c||ve===y)){var E=[Rr(q,w.key,w)];return y&&(E=y.render(E[0])),E}}},x=k.SKIP={};function z(){p=!1;var E=n.location.hash;k.prefix[0]!=="#"&&(E=n.location.search+E,k.prefix[0]!=="?"&&(E=n.location.pathname+E,E[0]!=="/"&&(E="/"+E)));var j=E.concat().replace(/(?:%[a-f89][a-f0-9])+/gim,Dr).slice(k.prefix.length),T=kt(j);Mr(T.params,n.history.state);function I(N){console.error(N),$(s,null,{replace:!0})}A(0);function A(N){for(;N<m.length;N++)if(m[N].check(T)){var B=m[N].component,X=m[N].route,te=B,Z=C=function(W){if(Z===C){if(W===x)return A(N+1);q=W!=null&&(typeof W.view=="function"||typeof W=="function")?W:"div",w=T.params,_=j,C=null,y=B.render?B:null,c===2?i.redraw():(c=2,i.redraw.sync())}};B.view||typeof B=="function"?(B={},Z(te)):B.onmatch?l.then(function(){return B.onmatch(T.params,j,X)}).then(Z,j===s?null:I):Z("div");return}if(j===s)throw new Error("Could not resolve default route "+s+".");$(s,null,{replace:!0})}}function H(){p||(p=!0,a(z))}function $(E,j,T){if(E=Dt(E,j),h){H();var I=T?T.state:null,A=T?T.title:null;T&&T.replace?n.history.replaceState(I,A,k.prefix+E):n.history.pushState(I,A,k.prefix+E)}else n.location.href=k.prefix+E}function k(E,j,T){if(!E)throw new TypeError("DOM element being rendered to does not exist.");if(m=Object.keys(T).map(function(A){if(A[0]!=="/")throw new SyntaxError("Routes must start with a '/'.");if(/:([^\/\.-]+)(\.{3})?:/.test(A))throw new SyntaxError("Route parameter names must be separated with either '/', '.', or '-'.");return{route:A,component:T[A],check:Lr(A)}}),s=j,j!=null){var I=kt(j);if(!m.some(function(A){return A.check(I)}))throw new ReferenceError("Default route doesn't match any known routes.")}typeof n.history.pushState=="function"?n.addEventListener("popstate",H,!1):k.prefix[0]==="#"&&n.addEventListener("hashchange",z,!1),h=!0,i.mount(E,O),z()}return k.set=function(E,j,T){C!=null&&(T=T||{},T.replace=!0),C=null,$(E,j,T)},k.get=function(){return _},k.prefix="#!",k.Link={view:function(E){var j=jr(E.attrs.selector||"a",Ir(E.attrs,["options","params","selector","onclick"]),E.children),T,I,A;return(j.attrs.disabled=Boolean(j.attrs.disabled))?(j.attrs.href=null,j.attrs["aria-disabled"]="true"):(T=E.attrs.options,I=E.attrs.onclick,A=Dt(j.attrs.href,E.attrs.params),j.attrs.href=k.prefix+A,j.attrs.onclick=function(N){var B;typeof I=="function"?B=I.call(N.currentTarget,N):I==null||typeof I!="object"||typeof I.handleEvent=="function"&&I.handleEvent(N),B!==!1&&!N.defaultPrevented&&(N.button===0||N.which===0||N.which===1)&&(!N.currentTarget.target||N.currentTarget.target==="_self")&&!N.ctrlKey&&!N.metaKey&&!N.shiftKey&&!N.altKey&&(N.preventDefault(),N.redraw=!1,k.set(A,null,T))}),j}},k.param=function(E){return w&&E!=null?w[E]:w},k}});var St=L((Cn,Ut)=>{"use strict";var kr=me();Ut.exports=Ht()(typeof window<"u"?window:null,kr)});var be=L((Tn,Bt)=>{"use strict";var ge=ot(),vt=Ot(),Kt=me(),v=function(){return ge.apply(this,arguments)};v.m=ge;v.trust=ge.trust;v.fragment=ge.fragment;v.Fragment="[";v.mount=Kt.mount;v.route=St();v.render=ke();v.redraw=Kt.redraw;v.request=vt.request;v.jsonp=vt.jsonp;v.parseQueryString=Ue();v.buildQueryString=Fe();v.parsePathname=ye();v.buildPathname=pe();v.vnode=G();v.PromisePolyfill=Me();v.censor=Se();Bt.exports=v});var P=Re(be());var Ke=Re(be()),Fr=()=>({view:()=>(0,Ke.default)("main",[(0,Ke.default)("b.header","About")])}),Qt=Fr;var Be=Re(be()),Hr=()=>({view:()=>(0,Be.default)("main",[(0,Be.default)("b.header","Credits")])}),Vt=Hr;var Ur=()=>{window.va||(window.va=function(...i){(window.vaq=window.vaq||[]).push(i)})};function Sr(){return typeof window<"u"}function vr(){return typeof process>"u",!1}function Kr(n="auto"){return n==="auto"?vr()?"development":"production":n}var Jt=(n={debug:!0})=>{var i;if(!Sr())return;let a=Kr(n.mode);Ur(),n.beforeSend&&((i=window.va)==null||i.call(window,"beforeSend",n.beforeSend));let l=a==="development"?"https://cdn.vercel-insights.com/v1/script.debug.js":"/_vercel/insights/script.js";if(document.head.querySelector(`script[src*="${l}"]`))return;let p=document.createElement("script");p.src=l,p.defer=!0,a==="development"&&n.debug===!1&&p.setAttribute("data-debug","false"),document.head.appendChild(p)};Jt();var Br=10,Qr=[10,20,50,100,250,500,1e3],$t=(0,P.default)("span"," / "),K={checkboxes:[],checkbox_diff:0,checkbox_lst:[]},Y={startTime:void 0,startTimer:()=>Y.startTime=Date.now(),msToTime:n=>{var i=parseInt(n%1e3/10).toString().padStart(2,"0"),a=Math.floor(n/1e3%60),l=Math.floor(n/(1e3*60)%60),l=l<10?"0"+l:l;return a=a<10?"0"+a:a,l+":"+a+":"+i},time:()=>{if(Y.startTime)return Y.msToTime(Date.now()-Y.startTime)}},Vr=n=>{let i=Math.random()<.5?-1:1;return Math.min(Math.random()*n,window.innerWidth-500)*i},Xt=n=>{if(n===0)return;let i=a=>{K.checkbox_lst.push((0,P.default)("input",{type:"checkbox",class:"checkbox",style:`transform: translateX(${Vr(a)}px)`,onclick:()=>{K.checkboxes[a]=!K.checkboxes[a]}}))};K.checkboxes=[],K.checkbox_lst=K.checkbox_lst.fill(null);for(let a=0;a<n;a++)a!==0&&a%Br==0&&K.checkbox_lst.push((0,P.default)("br")),i(a);K.checkboxes=K.checkboxes.filter(a=>a)},Jr=()=>Qr.map(n=>(0,P.default)("button",{onclick:()=>{Y.startTime=void 0,K.checkbox_diff=n,Xt(K.checkbox_diff)},class:"diff-btn"},n)),Qe=()=>(console.log(K.checkboxes),K.checkboxes.filter(n=>n).length),$r=()=>(Qe()&&!Y.startTime&&Y.startTimer(),!(Qe()-K.checkbox_diff)&K.checkbox_diff!==0?(0,P.default)(".results",[(0,P.default)("b","Results:"),(0,P.default)("p.timer",`Time: ${Y.time()}`)]):(0,P.default)(".results","The results will appear at here after you have finished the game")),Xr=()=>(0,P.default)("footer",[(0,P.default)("a",{href:"#!/about"},"About"),$t,(0,P.default)("a",{href:"#!/credits"},"Credits"),$t,(0,P.default)("a",{href:"mailto:tsukii@disroot.org"},"Contact")]),Wr=()=>(Xt(K.checkbox_diff),{view:()=>(0,P.default)("main",(0,P.default)("pre",[(0,P.default)("p.header",`
 _   _      _    
| |_(_) ___| | __
| __| |/ __| |/ /
| |_| | (__|   < 
\\__|_|\\___|_|\\_\\
        `),(0,P.default)("b.desc","How fast can you tick checkboxes?"),(0,P.default)("br"),(0,P.default)("br"),(0,P.default)("b.diff-btn-desc","Checkbox:"),(0,P.default)("br"),(0,P.default)("br"),Jr(),(0,P.default)("br"),(0,P.default)("br"),(0,P.default)("hr"),(0,P.default)("span.current-box",`${Qe()}/${K.checkbox_diff}`),(0,P.default)("br"),(0,P.default)("br"),(0,P.default)(".checkbox-grid",K.checkbox_lst),(0,P.default)("br"),(0,P.default)("br"),(0,P.default)("hr"),$r(),Xr()]))});P.default.route(document.body,"/",{"/":Wr,"/about":Qt,"/credits":Vt});})();
//# sourceMappingURL=index.js.map
