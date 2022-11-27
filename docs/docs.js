/*! For license information please see docs.js.LICENSE.txt */
(()=>{"use strict";const t=window,e=t.ShadowRoot&&(void 0===t.ShadyCSS||t.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,i=Symbol(),s=new WeakMap;class n{constructor(t,e,s){if(this._$cssResult$=!0,s!==i)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const i=this.t;if(e&&void 0===t){const e=void 0!==i&&1===i.length;e&&(t=s.get(i)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),e&&s.set(i,t))}return t}toString(){return this.cssText}}const o=e?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new n("string"==typeof t?t:t+"",void 0,i))(e)})(t):t;var r;const l=window,h=l.trustedTypes,c=h?h.emptyScript:"",a=l.reactiveElementPolyfillSupport,d={toAttribute(t,e){switch(e){case Boolean:t=t?c:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},u=(t,e)=>e!==t&&(e==e||t==t),v={attribute:!0,type:String,converter:d,reflect:!1,hasChanged:u};class p extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(t){var e;this.finalize(),(null!==(e=this.h)&&void 0!==e?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((e,i)=>{const s=this._$Ep(i,e);void 0!==s&&(this._$Ev.set(s,i),t.push(s))})),t}static createProperty(t,e=v){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i="symbol"==typeof t?Symbol():"__"+t,s=this.getPropertyDescriptor(t,i,e);void 0!==s&&Object.defineProperty(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(s){const n=this[t];this[e]=s,this.requestUpdate(t,n,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||v}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),void 0!==t.h&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const i of e)this.createProperty(i,t[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(o(t))}else void 0!==t&&e.push(o(t));return e}static _$Ep(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}u(){var t;this._$E_=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(t=this.constructor.h)||void 0===t||t.forEach((t=>t(this)))}addController(t){var e,i;(null!==(e=this._$ES)&&void 0!==e?e:this._$ES=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(i=t.hostConnected)||void 0===i||i.call(t))}removeController(t){var e;null===(e=this._$ES)||void 0===e||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach(((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])}))}createRenderRoot(){var i;const s=null!==(i=this.shadowRoot)&&void 0!==i?i:this.attachShadow(this.constructor.shadowRootOptions);return((i,s)=>{e?i.adoptedStyleSheets=s.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):s.forEach((e=>{const s=document.createElement("style"),n=t.litNonce;void 0!==n&&s.setAttribute("nonce",n),s.textContent=e.cssText,i.appendChild(s)}))})(s,this.constructor.elementStyles),s}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)}))}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)}))}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EO(t,e,i=v){var s;const n=this.constructor._$Ep(t,i);if(void 0!==n&&!0===i.reflect){const o=(void 0!==(null===(s=i.converter)||void 0===s?void 0:s.toAttribute)?i.converter:d).toAttribute(e,i.type);this._$El=t,null==o?this.removeAttribute(n):this.setAttribute(n,o),this._$El=null}}_$AK(t,e){var i;const s=this.constructor,n=s._$Ev.get(t);if(void 0!==n&&this._$El!==n){const t=s.getPropertyOptions(n),o="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==(null===(i=t.converter)||void 0===i?void 0:i.fromAttribute)?t.converter:d;this._$El=n,this[n]=o.fromAttribute(e,t.type),this._$El=null}}requestUpdate(t,e,i){let s=!0;void 0!==t&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||u)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),!0===i.reflect&&this._$El!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,i))):s=!1),!this.isUpdatePending&&s&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach(((t,e)=>this[e]=t)),this._$Ei=void 0);let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)})),this.update(i)):this._$Ek()}catch(t){throw e=!1,this._$Ek(),t}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;null===(e=this._$ES)||void 0===e||e.forEach((t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){void 0!==this._$EC&&(this._$EC.forEach(((t,e)=>this._$EO(e,this[e],t))),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}}var g;p.finalized=!0,p.elementProperties=new Map,p.elementStyles=[],p.shadowRootOptions={mode:"open"},null==a||a({ReactiveElement:p}),(null!==(r=l.reactiveElementVersions)&&void 0!==r?r:l.reactiveElementVersions=[]).push("1.4.2");const m=window,y=m.trustedTypes,f=y?y.createPolicy("lit-html",{createHTML:t=>t}):void 0,$=`lit$${(Math.random()+"").slice(9)}$`,_="?"+$,b=`<${_}>`,A=document,E=(t="")=>A.createComment(t),S=t=>null===t||"object"!=typeof t&&"function"!=typeof t,C=Array.isArray,w=t=>C(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator]),N=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,M=/-->/g,P=/>/g,x=RegExp(">|[ \t\n\f\r](?:([^\\s\"'>=/]+)([ \t\n\f\r]*=[ \t\n\f\r]*(?:[^ \t\n\f\r\"'`<>=]|(\"|')|))|$)","g"),I=/'/g,T=/"/g,L=/^(?:script|style|textarea|title)$/i,D=t=>(e,...i)=>({_$litType$:t,strings:e,values:i}),j=D(1),U=(D(2),Symbol.for("lit-noChange")),k=Symbol.for("lit-nothing"),z=new WeakMap,H=A.createTreeWalker(A,129,null,!1),O=(t,e)=>{const i=t.length-1,s=[];let n,o=2===e?"<svg>":"",r=N;for(let e=0;e<i;e++){const i=t[e];let l,h,c=-1,a=0;for(;a<i.length&&(r.lastIndex=a,h=r.exec(i),null!==h);)a=r.lastIndex,r===N?"!--"===h[1]?r=M:void 0!==h[1]?r=P:void 0!==h[2]?(L.test(h[2])&&(n=RegExp("</"+h[2],"g")),r=x):void 0!==h[3]&&(r=x):r===x?">"===h[0]?(r=null!=n?n:N,c=-1):void 0===h[1]?c=-2:(c=r.lastIndex-h[2].length,l=h[1],r=void 0===h[3]?x:'"'===h[3]?T:I):r===T||r===I?r=x:r===M||r===P?r=N:(r=x,n=void 0);const d=r===x&&t[e+1].startsWith("/>")?" ":"";o+=r===N?i+b:c>=0?(s.push(l),i.slice(0,c)+"$lit$"+i.slice(c)+$+d):i+$+(-2===c?(s.push(void 0),e):d)}const l=o+(t[i]||"<?>")+(2===e?"</svg>":"");if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return[void 0!==f?f.createHTML(l):l,s]};class Z{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let n=0,o=0;const r=t.length-1,l=this.parts,[h,c]=O(t,e);if(this.el=Z.createElement(h,i),H.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(s=H.nextNode())&&l.length<r;){if(1===s.nodeType){if(s.hasAttributes()){const t=[];for(const e of s.getAttributeNames())if(e.endsWith("$lit$")||e.startsWith($)){const i=c[o++];if(t.push(e),void 0!==i){const t=s.getAttribute(i.toLowerCase()+"$lit$").split($),e=/([.?@])?(.*)/.exec(i);l.push({type:1,index:n,name:e[2],strings:t,ctor:"."===e[1]?K:"?"===e[1]?V:"@"===e[1]?Y:G})}else l.push({type:6,index:n})}for(const e of t)s.removeAttribute(e)}if(L.test(s.tagName)){const t=s.textContent.split($),e=t.length-1;if(e>0){s.textContent=y?y.emptyScript:"";for(let i=0;i<e;i++)s.append(t[i],E()),H.nextNode(),l.push({type:2,index:++n});s.append(t[e],E())}}}else if(8===s.nodeType)if(s.data===_)l.push({type:2,index:n});else{let t=-1;for(;-1!==(t=s.data.indexOf($,t+1));)l.push({type:7,index:n}),t+=$.length-1}n++}}static createElement(t,e){const i=A.createElement("template");return i.innerHTML=t,i}}function R(t,e,i=t,s){var n,o,r,l;if(e===U)return e;let h=void 0!==s?null===(n=i._$Co)||void 0===n?void 0:n[s]:i._$Cl;const c=S(e)?void 0:e._$litDirective$;return(null==h?void 0:h.constructor)!==c&&(null===(o=null==h?void 0:h._$AO)||void 0===o||o.call(h,!1),void 0===c?h=void 0:(h=new c(t),h._$AT(t,i,s)),void 0!==s?(null!==(r=(l=i)._$Co)&&void 0!==r?r:l._$Co=[])[s]=h:i._$Cl=h),void 0!==h&&(e=R(t,h._$AS(t,e.values),h,s)),e}class Q{constructor(t,e){this.u=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}v(t){var e;const{el:{content:i},parts:s}=this._$AD,n=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:A).importNode(i,!0);H.currentNode=n;let o=H.nextNode(),r=0,l=0,h=s[0];for(;void 0!==h;){if(r===h.index){let e;2===h.type?e=new B(o,o.nextSibling,this,t):1===h.type?e=new h.ctor(o,h.name,h.strings,this,t):6===h.type&&(e=new W(o,this,t)),this.u.push(e),h=s[++l]}r!==(null==h?void 0:h.index)&&(o=H.nextNode(),r++)}return n}p(t){let e=0;for(const i of this.u)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class B{constructor(t,e,i,s){var n;this.type=2,this._$AH=k,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cm=null===(n=null==s?void 0:s.isConnected)||void 0===n||n}get _$AU(){var t,e;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$Cm}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=R(this,t,e),S(t)?t===k||null==t||""===t?(this._$AH!==k&&this._$AR(),this._$AH=k):t!==this._$AH&&t!==U&&this.g(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):w(t)?this.k(t):this.g(t)}O(t,e=this._$AB){return this._$AA.parentNode.insertBefore(t,e)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}g(t){this._$AH!==k&&S(this._$AH)?this._$AA.nextSibling.data=t:this.T(A.createTextNode(t)),this._$AH=t}$(t){var e;const{values:i,_$litType$:s}=t,n="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=Z.createElement(s.h,this.options)),s);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===n)this._$AH.p(i);else{const t=new Q(n,this),e=t.v(this.options);t.p(i),this.T(e),this._$AH=t}}_$AC(t){let e=z.get(t.strings);return void 0===e&&z.set(t.strings,e=new Z(t)),e}k(t){C(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const n of t)s===e.length?e.push(i=new B(this.O(E()),this.O(E()),this,this.options)):i=e[s],i._$AI(n),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){var i;for(null===(i=this._$AP)||void 0===i||i.call(this,!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$Cm=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}}class G{constructor(t,e,i,s,n){this.type=1,this._$AH=k,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=n,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=k}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,s){const n=this.strings;let o=!1;if(void 0===n)t=R(this,t,e,0),o=!S(t)||t!==this._$AH&&t!==U,o&&(this._$AH=t);else{const s=t;let r,l;for(t=n[0],r=0;r<n.length-1;r++)l=R(this,s[i+r],e,r),l===U&&(l=this._$AH[r]),o||(o=!S(l)||l!==this._$AH[r]),l===k?t=k:t!==k&&(t+=(null!=l?l:"")+n[r+1]),this._$AH[r]=l}o&&!s&&this.j(t)}j(t){t===k?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class K extends G{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===k?void 0:t}}const X=y?y.emptyScript:"";class V extends G{constructor(){super(...arguments),this.type=4}j(t){t&&t!==k?this.element.setAttribute(this.name,X):this.element.removeAttribute(this.name)}}class Y extends G{constructor(t,e,i,s,n){super(t,e,i,s,n),this.type=5}_$AI(t,e=this){var i;if((t=null!==(i=R(this,t,e,0))&&void 0!==i?i:k)===U)return;const s=this._$AH,n=t===k&&s!==k||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,o=t!==k&&(s===k||n);n&&this.element.removeEventListener(this.name,this,s),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;"function"==typeof this._$AH?this._$AH.call(null!==(i=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==i?i:this.element,t):this._$AH.handleEvent(t)}}class W{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){R(this,t)}}const J=m.litHtmlPolyfillSupport;null==J||J(Z,B),(null!==(g=m.litHtmlVersions)&&void 0!==g?g:m.litHtmlVersions=[]).push("2.4.0");var F,q;class tt extends p{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,e;const i=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=i.firstChild),i}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,i)=>{var s,n;const o=null!==(s=null==i?void 0:i.renderBefore)&&void 0!==s?s:e;let r=o._$litPart$;if(void 0===r){const t=null!==(n=null==i?void 0:i.renderBefore)&&void 0!==n?n:null;o._$litPart$=r=new B(e.insertBefore(E(),t),t,void 0,null!=i?i:{})}return r._$AI(t),r})(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!1)}render(){return U}}tt.finalized=!0,tt._$litElement$=!0,null===(F=globalThis.litElementHydrateSupport)||void 0===F||F.call(globalThis,{LitElement:tt});const et=globalThis.litElementPolyfillSupport;null==et||et({LitElement:tt});(null!==(q=globalThis.litElementVersions)&&void 0!==q?q:globalThis.litElementVersions=[]).push("3.2.2");const it=(t,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(i){i.createProperty(e.key,t)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(i){i.createProperty(e.key,t)}};function st(t){return(e,i)=>void 0!==i?((t,e,i)=>{e.constructor.createProperty(i,t)})(t,e,i):it(t,e)}const nt=({finisher:t,descriptor:e})=>(i,s)=>{var n;if(void 0===s){const s=null!==(n=i.originalKey)&&void 0!==n?n:i.key,o=null!=e?{kind:"method",placement:"prototype",key:s,descriptor:e(i.key)}:{...i,key:s};return null!=t&&(o.finisher=function(e){t(e,s)}),o}{const n=i.constructor;void 0!==e&&Object.defineProperty(i,s,e(s)),null==t||t(n,s)}};function ot(t,e){return nt({descriptor:i=>{const s={get(){var e,i;return null!==(i=null===(e=this.renderRoot)||void 0===e?void 0:e.querySelector(t))&&void 0!==i?i:null},enumerable:!0,configurable:!0};if(e){const e="symbol"==typeof i?Symbol():"__"+i;s.get=function(){var i,s;return void 0===this[e]&&(this[e]=null!==(s=null===(i=this.renderRoot)||void 0===i?void 0:i.querySelector(t))&&void 0!==s?s:null),this[e]}}return s}})}var rt;null===(rt=window.HTMLSlotElement)||void 0===rt||rt.prototype.assignedElements;const lt=((t,...e)=>{const s=1===t.length?t[0]:e.reduce(((e,i,s)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[s+1]),t[0]);return new n(s,t,i)})`
  :host {
    position: relative;
    width: 200px;
    height: 200px;
    border-radius: 1rem;
    display: block;
    overflow: hidden;
  }

  ::slotted(*) {
    position: relative;
    flex-shrink: 0;
    height: 100%;
    width: 100%;
  }

  .container {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
    display: flex;
  }

  .left {
    left: -100%;
  }

  .move-right {
    left: -100%;
  }

  .move-left {
    left: 0%;
  }

  .left-chevron,
  .right-chevron {
    position: absolute;
    top: calc(50% - 1rem);
    width: 2rem;
    height: 2rem;
    cursor: pointer;
    user-selection: none;
    padding: 0;
    margin: 0;
    background-color: transparent;
    border: none;
    opacity: 0.75;
  }

  .left-chevron {
    left: 1rem;
  }

  .right-chevron {
    right: 1rem;
  }

  .indicators {
    position: absolute;
    bottom: 10px;
    left: 0;
    right: 0;
    margin: 0 auto;
    width: 100%;
    height: 20px;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  .indicator {
    position: relative;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    border: 0;
    padding: 0;
    margin: 0;
    background-color: white;
    opacity: 0.75;
    cursor: pointer;
  }

  .selected {
    background-color: black;
  }
`,ht=lt;var ct=function(t,e,i,s){var n,o=arguments.length,r=o<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,s);else for(var l=t.length-1;l>=0;l--)(n=t[l])&&(r=(o<3?n(r):o>3?n(e,i,r):n(e,i))||r);return o>3&&r&&Object.defineProperty(e,i,r),r};let at=class extends tt{constructor(){super(...arguments),this.ride=!1,this.time=5e3,this.dir="right",this.duration="0.5",this.touchStartX=0,this.touchEndX=0,this.touchMoveX=0,this.touchStartY=0,this.touchEndY=0,this.touchMoveY=0,this.maxSelected=this.childElementCount-1,this.activeTransition=t=>{"move-left"===t&&this.container.classList.add("left"),setTimeout((()=>{this.container.style.setProperty("transition",`all ${this.duration}s linear`),this.container.classList.add(t)}),100)},this.changeIndicator=(t,e)=>{this.indicators[e].classList.add("selected"),this.indicators[t].classList.remove("selected"),this.selectedIndicator=e},this.handleTransition=()=>{this.container.removeEventListener("transitionend",this.handleTransition),this.container.style.removeProperty("transition"),this.selected.assignedElements()[0].removeAttribute("slot"),this.container.classList.contains("move-right")?(this.container.classList.remove("move-right"),this.next.assignedElements()[0].setAttribute("slot","selected")):(this.container.classList.remove("left"),this.container.classList.remove("move-left"),this.prev.assignedElements()[0].setAttribute("slot","selected")),Array.from(this.indicators).map((t=>t.removeAttribute("disabled"))),this.leftChevron.removeAttribute("disabled"),this.rightChevron.removeAttribute("disabled"),this.selected.addEventListener("touchstart",this.handleTouchStart),this.selected.addEventListener("touchend",this.handleTouchEnd)},this.moveLeft=()=>{null===this.selected.assignedElements()[0].previousElementSibling?(this.children[this.maxSelected].setAttribute("slot","prev"),this.changeIndicator(0,this.maxSelected)):(this.selected.assignedElements()[0].previousElementSibling.setAttribute("slot","prev"),this.changeIndicator(this.selectedIndicator,this.selectedIndicator-1)),this.activeTransition("move-left"),this.container.addEventListener("transitionend",this.handleTransition)},this.moveRight=()=>{null===this.selected.assignedElements()[0].nextElementSibling?(this.children[0].setAttribute("slot","next"),this.changeIndicator(this.maxSelected,0)):(this.selected.assignedElements()[0].nextElementSibling.setAttribute("slot","next"),this.changeIndicator(this.selectedIndicator,this.selectedIndicator+1)),this.activeTransition("move-right"),this.container.addEventListener("transitionend",this.handleTransition)},this.handleMove=t=>{let e;switch(this.leftChevron.setAttribute("disabled","true"),this.rightChevron.setAttribute("disabled","true"),this.selected.removeEventListener("touchstart",this.handleTouchStart),this.selected.removeEventListener("touchend",this.handleTouchEnd),e=void 0===t?this.touchMoveX>0?"left-chevron":this.touchMoveX<0||"right"===this.dir?"right-chevron":"left-chevron":t.currentTarget.id,this.touchMoveX=0,this.touchMoveY=0,e){case"left-chevron":this.moveLeft();break;case"right-chevron":this.moveRight();break;default:t.currentTarget.classList.contains("selected")||(Array.from(this.indicators).map((t=>t.setAttribute("disabled","true"))),t.currentTarget.dataset.indicator>this.selectedIndicator.toString()?(this.children[t.currentTarget.dataset.indicator].setAttribute("slot","next"),this.activeTransition("move-right")):(this.children[t.currentTarget.dataset.indicator].setAttribute("slot","prev"),this.activeTransition("move-left")),t.currentTarget.classList.add("selected"),this.changeIndicator(this.selectedIndicator,Number(t.currentTarget.dataset.indicator)),this.container.addEventListener("transitionend",this.handleTransition))}},this.handleTouchStart=t=>{this.touchStartX=t.touches[0].clientX,this.touchStartY=t.touches[0].clientY},this.handleTouchEnd=t=>{this.touchEndX=t.changedTouches[0].clientX,this.touchEndY=t.changedTouches[0].clientY,this.touchMoveX=this.touchEndX-this.touchStartX,this.touchMoveY=this.touchEndY-this.touchStartY,Math.abs(this.touchMoveX)>Math.abs(this.touchMoveY)&&this.handleMove(void 0)}}firstUpdated(){this.children[0].setAttribute("slot","selected"),this.indicators[0].classList.add("selected"),this.selectedIndicator=0,this.selected.addEventListener("touchstart",this.handleTouchStart),this.selected.addEventListener("touchend",this.handleTouchEnd),this.ride&&setInterval((()=>this.handleMove(void 0)),this.time||5e3)}render(){const t=[];for(let e=0;e<=this.maxSelected;++e)t.push(j`<button
          class="indicator"
          data-indicator=${e}
          @click=${this.handleMove}
        ></button>`);return j`
      <div class="container"">
        <slot name="prev"></slot>
        <slot name="selected"></slot>
        <slot name="next"></slot>
      </div>
      <button class="left-chevron" id="left-chevron" @click=${this.handleMove}>
      <img src=${"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgdmlld0JveD0iMCAwIDQ1NSA0NTUiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQ1NSA0NTU7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik0yMjcuNSwwQzEwMS44NTUsMCwwLDEwMS44NTUsMCwyMjcuNVMxMDEuODU1LDQ1NSwyMjcuNSw0NTVTNDU1LDM1My4xNDUsNDU1LDIyNy41UzM1My4xNDUsMCwyMjcuNSwweiBNMjc2Ljc3MiwzMzQuNDExDQoJbC0yMS4yNDgsMjEuMTc4TDEyNy44NTIsMjI3LjVMMjU1LjUyNCw5OS40MTFsMjEuMjQ4LDIxLjE3OEwxNzAuMjA5LDIyNy41TDI3Ni43NzIsMzM0LjQxMXoiLz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjwvc3ZnPg0K"} />
      </button>
      <button
        class="right-chevron"
        id="right-chevron"
        @click=${this.handleMove}
      >
        <img src=${"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgdmlld0JveD0iMCAwIDQ1NSA0NTUiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQ1NSA0NTU7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik0yMjcuNSwwQzEwMS44NTUsMCwwLDEwMS44NTUsMCwyMjcuNVMxMDEuODU1LDQ1NSwyMjcuNSw0NTVTNDU1LDM1My4xNDUsNDU1LDIyNy41UzM1My4xNDUsMCwyMjcuNSwweiBNMTk5LjQ3NiwzNTUuNTg5DQoJbC0yMS4yNDgtMjEuMTc4TDI4NC43OTEsMjI3LjVMMTc4LjIyOCwxMjAuNTg5bDIxLjI0OC0yMS4xNzhMMzI3LjE0OCwyMjcuNUwxOTkuNDc2LDM1NS41ODl6Ii8+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8L3N2Zz4NCg=="} />
      </button>
      <div class="indicators">${t}</div>
    `}};at.styles=ht,ct([ot("slot[name=selected]",!0)],at.prototype,"selected",void 0),ct([ot("slot[name=prev]",!0)],at.prototype,"prev",void 0),ct([ot("slot[name=next]",!0)],at.prototype,"next",void 0),ct([ot(".container",!0)],at.prototype,"container",void 0),ct([ot(".left-chevron",!0)],at.prototype,"leftChevron",void 0),ct([ot(".right-chevron",!0)],at.prototype,"rightChevron",void 0),ct([function(t){return nt({descriptor:e=>({get(){var e,i;return null!==(i=null===(e=this.renderRoot)||void 0===e?void 0:e.querySelectorAll(t))&&void 0!==i?i:[]},enumerable:!0,configurable:!0})})}(".indicator")],at.prototype,"indicators",void 0),ct([st({type:Boolean,reflect:!1})],at.prototype,"ride",void 0),ct([st({type:Number,reflect:!1})],at.prototype,"time",void 0),ct([st({type:String,reflect:!1})],at.prototype,"dir",void 0),ct([st({type:String,reflect:!1})],at.prototype,"duration",void 0),at=ct([(t=>e=>"function"==typeof e?((t,e)=>(customElements.define(t,e),e))(t,e):((t,e)=>{const{kind:i,elements:s}=e;return{kind:i,elements:s,finisher(e){customElements.define(t,e)}}})(t,e))("lulit-carousel")],at)})();
//# sourceMappingURL=docs.js.map