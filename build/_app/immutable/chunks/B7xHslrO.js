import{a4 as b,a5 as E,a6 as I,a7 as R,M as P,a8 as W,N as Y,a9 as j,aa as N,j as q,e as B,g as C,ab as T,s as w,f as A,E as $,i as p,ac as K,ad as z,ae as F,af as G,ag as J,ah as Q,b as U,K as X,h as S,p as Z,m as x,a as rr}from"./BaK_GqZH.js";import{r as tr}from"./BPbRZzKw.js";import{b as ar}from"./B4vrWiMv.js";const er=["touchstart","touchmove"];function sr(r){return er.includes(r)}function ir(r){var t=I,e=R;b(null),E(null);try{return r()}finally{b(t),E(e)}}const nr=new Set,D=new Set;function or(r,t,e,o={}){function i(a){if(o.capture||y.call(t,a),!a.cancelBubble)return ir(()=>e==null?void 0:e.call(this,a))}return r.startsWith("pointer")||r.startsWith("touch")||r==="wheel"?W(()=>{t.addEventListener(r,i,o)}):t.addEventListener(r,i,o),i}function dr(r,t,e,o,i){var a={capture:o,passive:i},u=or(r,t,e,a);(t===document.body||t===window||t===document)&&P(()=>{t.removeEventListener(r,u,a)})}function y(r){var O;var t=this,e=t.ownerDocument,o=r.type,i=((O=r.composedPath)==null?void 0:O.call(r))||[],a=i[0]||r.target,u=0,_=r.__root;if(_){var l=i.indexOf(_);if(l!==-1&&(t===document||t===window)){r.__root=t;return}var h=i.indexOf(t);if(h===-1)return;l<=h&&(u=l)}if(a=i[u]||r.target,a!==t){Y(r,"currentTarget",{configurable:!0,get(){return a||e}});var m=I,f=R;b(null),E(null);try{for(var s,n=[];a!==null;){var c=a.assignedSlot||a.parentNode||a.host||null;try{var d=a["__"+o];if(d!=null&&(!a.disabled||r.target===a))if(j(d)){var[V,...H]=d;V.apply(a,[r,...H])}else d.call(a,r)}catch(g){s?n.push(g):s=g}if(r.cancelBubble||c===t||c===null)break;a=c}if(s){for(let g of n)queueMicrotask(()=>{throw g});throw s}}finally{r.__root=t,delete r.currentTarget,b(m),E(f)}}}let k=!0;function _r(r,t){var e=t==null?"":typeof t=="object"?t+"":t;e!==(r.__t??(r.__t=r.nodeValue))&&(r.__t=e,r.nodeValue=e+"")}function ur(r,t){return M(r,t)}function hr(r,t){N(),t.intro=t.intro??!1;const e=t.target,o=S,i=p;try{for(var a=q(e);a&&(a.nodeType!==8||a.data!==B);)a=C(a);if(!a)throw T;w(!0),A(a),$();const u=M(r,{...t,anchor:a});if(p===null||p.nodeType!==8||p.data!==K)throw z(),T;return w(!1),u}catch(u){if(u===T)return t.recover===!1&&F(),N(),G(e),w(!1),ur(r,t);throw u}finally{w(o),A(i),tr()}}const v=new Map;function M(r,{target:t,anchor:e,props:o={},events:i,context:a,intro:u=!0}){N();var _=new Set,l=f=>{for(var s=0;s<f.length;s++){var n=f[s];if(!_.has(n)){_.add(n);var c=sr(n);t.addEventListener(n,y,{passive:c});var d=v.get(n);d===void 0?(document.addEventListener(n,y,{passive:c}),v.set(n,1)):v.set(n,d+1)}}};l(J(nr)),D.add(l);var h=void 0,m=Q(()=>{var f=e??t.appendChild(U());return X(()=>{if(a){Z({});var s=x;s.c=a}i&&(o.$$events=i),S&&ar(f,null),k=u,h=r(f,o)||{},k=!0,S&&(R.nodes_end=p),a&&rr()}),()=>{var c;for(var s of _){t.removeEventListener(s,y);var n=v.get(s);--n===0?(document.removeEventListener(s,y),v.delete(s)):v.set(s,n)}D.delete(l),f!==e&&((c=f.parentNode)==null||c.removeChild(f))}});return L.set(h,m),h}let L=new WeakMap;function vr(r,t){const e=L.get(r);return e?(L.delete(r),e(t)):Promise.resolve()}export{k as a,dr as e,hr as h,ur as m,_r as s,vr as u,ir as w};
