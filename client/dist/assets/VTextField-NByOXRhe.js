import{x as w,y as E,cp as ie,A as L,c6 as T,b as i,cr as Fe,cf as we,B as c,cv as Y,c5 as se,cK as q,dl as ve,cj as Z,bv as ae,bj as D,Q as H,be as Me,bC as re,aO as $e,cH as ue,bH as De,b2 as Ae,b3 as Oe,b7 as Le,c_ as de,a$ as ne,c7 as K,ci as Te,ck as Ee,ca as ge,cq as me,cn as le,i as oe,I as ye,dg as We,cz as ze,de as Ne,cF as je,cl as Ue,df as He,F as G,a_ as J,d1 as qe,dm as Ke,cw as Qe,a as Xe,aj as Ye,cy as Ge}from"./index-ndZ4D6My.js";import{i as he,n as Je,a as Ze,s as et,h as tt}from"./index-T_rq9rzx.js";import{m as be,M as Ve}from"./transition-UUEsY4u_.js";import{I as at}from"./VAvatar-KwYm5DOR.js";const ee=Symbol("Forwarded refs");function te(e,r){let l=e;for(;l;){const n=Reflect.getOwnPropertyDescriptor(l,r);if(n)return n;l=Object.getPrototypeOf(l)}}function nt(e){for(var r=arguments.length,l=new Array(r>1?r-1:0),n=1;n<r;n++)l[n-1]=arguments[n];return e[ee]=l,new Proxy(e,{get(a,t){if(Reflect.has(a,t))return Reflect.get(a,t);if(!(typeof t=="symbol"||t.startsWith("$")||t.startsWith("__"))){for(const s of l)if(s.value&&Reflect.has(s.value,t)){const u=Reflect.get(s.value,t);return typeof u=="function"?u.bind(s.value):u}}},has(a,t){if(Reflect.has(a,t))return!0;if(typeof t=="symbol"||t.startsWith("$")||t.startsWith("__"))return!1;for(const s of l)if(s.value&&Reflect.has(s.value,t))return!0;return!1},set(a,t,s){if(Reflect.has(a,t))return Reflect.set(a,t,s);if(typeof t=="symbol"||t.startsWith("$")||t.startsWith("__"))return!1;for(const u of l)if(u.value&&Reflect.has(u.value,t))return Reflect.set(u.value,t,s);return!1},getOwnPropertyDescriptor(a,t){var u;const s=Reflect.getOwnPropertyDescriptor(a,t);if(s)return s;if(!(typeof t=="symbol"||t.startsWith("$")||t.startsWith("__"))){for(const h of l){if(!h.value)continue;const b=te(h.value,t)??("_"in h.value?te((u=h.value._)==null?void 0:u.setupState,t):void 0);if(b)return b}for(const h of l){const b=h.value&&h.value[ee];if(!b)continue;const d=b.slice();for(;d.length;){const o=d.shift(),m=te(o.value,t);if(m)return m;const v=o.value&&o.value[ee];v&&d.push(...v)}}}}})}const lt=w({text:String,clickable:Boolean,...E(),...ie()},"VLabel"),it=L()({name:"VLabel",props:lt(),setup(e,r){let{slots:l}=r;return T(()=>{var n;return i("label",{class:["v-label",{"v-label--clickable":e.clickable},e.class],style:e.style},[e.text,(n=l.default)==null?void 0:n.call(l)])}),{}}});function xe(e){const{t:r}=Fe();function l(n){let{name:a}=n;const t={prepend:"prependAction",prependInner:"prependAction",append:"appendAction",appendInner:"appendAction",clear:"clear"}[a],s=e[`onClick:${a}`],u=s&&t?r(`$vuetify.input.${t}`,e.label??""):void 0;return i(we,{icon:e[`${a}Icon`],"aria-label":u,onClick:s},null)}return{InputIcon:l}}const st=w({active:Boolean,color:String,messages:{type:[Array,String],default:()=>[]},...E(),...be({transition:{component:he,leaveAbsolute:!0,group:!0}})},"VMessages"),rt=L()({name:"VMessages",props:st(),setup(e,r){let{slots:l}=r;const n=c(()=>Y(e.messages)),{textColorClasses:a,textColorStyles:t}=se(c(()=>e.color));return T(()=>i(Ve,{transition:e.transition,tag:"div",class:["v-messages",a.value,e.class],style:[t.value,e.style],role:"alert","aria-live":"polite"},{default:()=>[e.active&&n.value.map((s,u)=>i("div",{class:"v-messages__message",key:`${u}-${n.value}`},[l.message?l.message({message:s}):s]))]})),{}}}),Ce=w({focused:Boolean,"onUpdate:focused":q()},"focus");function Ie(e){let r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:ve();const l=Z(e,"focused"),n=c(()=>({[`${r}--focused`]:l.value}));function a(){l.value=!0}function t(){l.value=!1}return{focusClasses:n,isFocused:l,focus:a,blur:t}}const _e=Symbol.for("vuetify:form"),_t=w({disabled:Boolean,fastFail:Boolean,readonly:Boolean,modelValue:{type:Boolean,default:null},validateOn:{type:String,default:"input"}},"form");function St(e){const r=Z(e,"modelValue"),l=c(()=>e.disabled),n=c(()=>e.readonly),a=ae(!1),t=D([]),s=D([]);async function u(){const d=[];let o=!0;s.value=[],a.value=!0;for(const m of t.value){const v=await m.validate();if(v.length>0&&(o=!1,d.push({id:m.id,errorMessages:v})),!o&&e.fastFail)break}return s.value=d,a.value=!1,{valid:o,errors:s.value}}function h(){t.value.forEach(d=>d.reset())}function b(){t.value.forEach(d=>d.resetValidation())}return H(t,()=>{let d=0,o=0;const m=[];for(const v of t.value)v.isValid===!1?(o++,m.push({id:v.id,errorMessages:v.errorMessages})):v.isValid===!0&&d++;s.value=m,r.value=o>0?!1:d===t.value.length?!0:null},{deep:!0}),Me(_e,{register:d=>{let{id:o,validate:m,reset:v,resetValidation:x}=d;t.value.some(C=>C.id===o),t.value.push({id:o,validate:m,reset:v,resetValidation:x,isValid:null,errorMessages:[]})},unregister:d=>{t.value=t.value.filter(o=>o.id!==d)},update:(d,o,m)=>{const v=t.value.find(x=>x.id===d);v&&(v.isValid=o,v.errorMessages=m)},isDisabled:l,isReadonly:n,isValidating:a,isValid:r,items:t,validateOn:re(e,"validateOn")}),{errors:s,isDisabled:l,isReadonly:n,isValidating:a,isValid:r,items:t,validate:u,reset:h,resetValidation:b}}function ut(){return $e(_e,null)}const ot=w({disabled:{type:Boolean,default:null},error:Boolean,errorMessages:{type:[Array,String],default:()=>[]},maxErrors:{type:[Number,String],default:1},name:String,label:String,readonly:{type:Boolean,default:null},rules:{type:Array,default:()=>[]},modelValue:null,validateOn:String,validationValue:null,...Ce()},"validation");function ct(e){let r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:ve(),l=arguments.length>2&&arguments[2]!==void 0?arguments[2]:ue();const n=Z(e,"modelValue"),a=c(()=>e.validationValue===void 0?n.value:e.validationValue),t=ut(),s=D([]),u=ae(!0),h=c(()=>!!(Y(n.value===""?null:n.value).length||Y(a.value===""?null:a.value).length)),b=c(()=>!!(e.disabled??(t==null?void 0:t.isDisabled.value))),d=c(()=>!!(e.readonly??(t==null?void 0:t.isReadonly.value))),o=c(()=>{var g;return(g=e.errorMessages)!=null&&g.length?Y(e.errorMessages).concat(s.value).slice(0,Math.max(0,+e.maxErrors)):s.value}),m=c(()=>{let g=(e.validateOn??(t==null?void 0:t.validateOn.value))||"input";g==="lazy"&&(g="input lazy");const V=new Set((g==null?void 0:g.split(" "))??[]);return{blur:V.has("blur")||V.has("input"),input:V.has("input"),submit:V.has("submit"),lazy:V.has("lazy")}}),v=c(()=>{var g;return e.error||(g=e.errorMessages)!=null&&g.length?!1:e.rules.length?u.value?s.value.length||m.value.lazy?null:!0:!s.value.length:!0}),x=ae(!1),C=c(()=>({[`${r}--error`]:v.value===!1,[`${r}--dirty`]:h.value,[`${r}--disabled`]:b.value,[`${r}--readonly`]:d.value})),F=c(()=>e.name??De(l));Ae(()=>{t==null||t.register({id:F.value,validate:S,reset:I,resetValidation:M})}),Oe(()=>{t==null||t.unregister(F.value)}),Le(async()=>{m.value.lazy||await S(!0),t==null||t.update(F.value,v.value,o.value)}),de(()=>m.value.input,()=>{H(a,()=>{if(a.value!=null)S();else if(e.focused){const g=H(()=>e.focused,V=>{V||S(),g()})}})}),de(()=>m.value.blur,()=>{H(()=>e.focused,g=>{g||S()})}),H(v,()=>{t==null||t.update(F.value,v.value,o.value)});function I(){n.value=null,ne(M)}function M(){u.value=!0,m.value.lazy?s.value=[]:S(!0)}async function S(){let g=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1;const V=[];x.value=!0;for(const f of e.rules){if(V.length>=+(e.maxErrors??1))break;const y=await(typeof f=="function"?f:()=>f)(a.value);if(y!==!0){if(y!==!1&&typeof y!="string"){console.warn(`${y} is not a valid value. Rule functions must return boolean true or a string.`);continue}V.push(y||"")}}return s.value=V,x.value=!1,u.value=g,s.value}return{errorMessages:o,isDirty:h,isDisabled:b,isReadonly:d,isPristine:u,isValid:v,isValidating:x,reset:I,resetValidation:M,validate:S,validationClasses:C}}const Se=w({id:String,appendIcon:K,centerAffix:{type:Boolean,default:!0},prependIcon:K,hideDetails:[Boolean,String],hideSpinButtons:Boolean,hint:String,persistentHint:Boolean,messages:{type:[Array,String],default:()=>[]},direction:{type:String,default:"horizontal",validator:e=>["horizontal","vertical"].includes(e)},"onClick:prepend":q(),"onClick:append":q(),...E(),...Te(),...ot()},"VInput"),fe=L()({name:"VInput",props:{...Se()},emits:{"update:modelValue":e=>!0},setup(e,r){let{attrs:l,slots:n,emit:a}=r;const{densityClasses:t}=Ee(e),{rtlClasses:s}=ge(),{InputIcon:u}=xe(e),h=ue(),b=c(()=>e.id||`input-${h}`),d=c(()=>`${b.value}-messages`),{errorMessages:o,isDirty:m,isDisabled:v,isReadonly:x,isPristine:C,isValid:F,isValidating:I,reset:M,resetValidation:S,validate:g,validationClasses:V}=ct(e,"v-input",b),f=c(()=>({id:b,messagesId:d,isDirty:m,isDisabled:v,isReadonly:x,isPristine:C,isValid:F,isValidating:I,reset:M,resetValidation:S,validate:g})),P=c(()=>{var y;return(y=e.errorMessages)!=null&&y.length||!C.value&&o.value.length?o.value:e.hint&&(e.persistentHint||e.focused)?e.hint:e.messages});return T(()=>{var z,p,_,B;const y=!!(n.prepend||e.prependIcon),k=!!(n.append||e.appendIcon),W=P.value.length>0,A=!e.hideDetails||e.hideDetails==="auto"&&(W||!!n.details);return i("div",{class:["v-input",`v-input--${e.direction}`,{"v-input--center-affix":e.centerAffix,"v-input--hide-spin-buttons":e.hideSpinButtons},t.value,s.value,V.value,e.class],style:e.style},[y&&i("div",{key:"prepend",class:"v-input__prepend"},[(z=n.prepend)==null?void 0:z.call(n,f.value),e.prependIcon&&i(u,{key:"prepend-icon",name:"prepend"},null)]),n.default&&i("div",{class:"v-input__control"},[(p=n.default)==null?void 0:p.call(n,f.value)]),k&&i("div",{key:"append",class:"v-input__append"},[e.appendIcon&&i(u,{key:"append-icon",name:"append"},null),(_=n.append)==null?void 0:_.call(n,f.value)]),A&&i("div",{class:"v-input__details"},[i(rt,{id:d.value,active:W,messages:P.value},{message:n.message}),(B=n.details)==null?void 0:B.call(n,f.value)])])}),{reset:M,resetValidation:S,validate:g,isValid:F,errorMessages:o}}}),dt=w({color:String,inset:Boolean,length:[Number,String],thickness:[Number,String],vertical:Boolean,...E(),...ie()},"VDivider"),Pt=L()({name:"VDivider",props:dt(),setup(e,r){let{attrs:l}=r;const{themeClasses:n}=me(e),{textColorClasses:a,textColorStyles:t}=se(re(e,"color")),s=c(()=>{const u={};return e.length&&(u[e.vertical?"maxHeight":"maxWidth"]=le(e.length)),e.thickness&&(u[e.vertical?"borderRightWidth":"borderTopWidth"]=le(e.thickness)),u});return T(()=>i("hr",{class:[{"v-divider":!0,"v-divider--inset":e.inset,"v-divider--vertical":e.vertical},n.value,a.value,e.class],style:[s.value,t.value,e.style],"aria-orientation":!l.role||l.role==="separator"?e.vertical?"vertical":"horizontal":void 0,role:`${l.role||"separator"}`},null)),{}}}),ft=w({active:Boolean,max:[Number,String],value:{type:[Number,String],default:0},...E(),...be({transition:{component:he}})},"VCounter"),vt=L()({name:"VCounter",functional:!0,props:ft(),setup(e,r){let{slots:l}=r;const n=c(()=>e.max?`${e.value} / ${e.max}`:String(e.value));return T(()=>i(Ve,{transition:e.transition},{default:()=>[oe(i("div",{class:["v-counter",e.class],style:e.style},[l.default?l.default({counter:n.value,max:e.max,value:e.value}):n.value]),[[ye,e.active]])]})),{}}}),gt=w({floating:Boolean,...E()},"VFieldLabel"),X=L()({name:"VFieldLabel",props:gt(),setup(e,r){let{slots:l}=r;return T(()=>i(it,{class:["v-field-label",{"v-field-label--floating":e.floating},e.class],style:e.style,"aria-hidden":e.floating||void 0},l)),{}}}),mt=["underlined","outlined","filled","solo","solo-inverted","solo-filled","plain"],Pe=w({appendInnerIcon:K,bgColor:String,clearable:Boolean,clearIcon:{type:K,default:"$clear"},active:Boolean,centerAffix:{type:Boolean,default:void 0},color:String,baseColor:String,dirty:Boolean,disabled:{type:Boolean,default:null},error:Boolean,flat:Boolean,label:String,persistentClear:Boolean,prependInnerIcon:K,reverse:Boolean,singleLine:Boolean,variant:{type:String,default:"filled",validator:e=>mt.includes(e)},"onClick:clear":q(),"onClick:appendInner":q(),"onClick:prependInner":q(),...E(),...We(),...ze(),...ie()},"VField"),pe=L()({name:"VField",inheritAttrs:!1,props:{id:String,...Ce(),...Pe()},emits:{"update:focused":e=>!0,"update:modelValue":e=>!0},setup(e,r){let{attrs:l,emit:n,slots:a}=r;const{themeClasses:t}=me(e),{loaderClasses:s}=Ne(e),{focusClasses:u,isFocused:h,focus:b,blur:d}=Ie(e),{InputIcon:o}=xe(e),{roundedClasses:m}=je(e),{rtlClasses:v}=ge(),x=c(()=>e.dirty||e.active),C=c(()=>!e.singleLine&&!!(e.label||a.label)),F=ue(),I=c(()=>e.id||`input-${F}`),M=c(()=>`${I.value}-messages`),S=D(),g=D(),V=D(),f=c(()=>["plain","underlined"].includes(e.variant)),{backgroundColorClasses:P,backgroundColorStyles:y}=Ue(re(e,"bgColor")),{textColorClasses:k,textColorStyles:W}=se(c(()=>e.error||e.disabled?void 0:x.value&&h.value?e.color:e.baseColor));H(x,p=>{if(C.value){const _=S.value.$el,B=g.value.$el;requestAnimationFrame(()=>{const $=Je(_),R=B.getBoundingClientRect(),N=R.x-$.x,j=R.y-$.y-($.height/2-R.height/2),O=R.width/.75,U=Math.abs(O-$.width)>1?{maxWidth:le(O)}:void 0,Q=getComputedStyle(_),ce=getComputedStyle(B),Be=parseFloat(Q.transitionDuration)*1e3||150,ke=parseFloat(ce.getPropertyValue("--v-field-label-scale")),Re=ce.getPropertyValue("color");_.style.visibility="visible",B.style.visibility="hidden",Ze(_,{transform:`translate(${N}px, ${j}px) scale(${ke})`,color:Re,...U},{duration:Be,easing:et,direction:p?"normal":"reverse"}).finished.then(()=>{_.style.removeProperty("visibility"),B.style.removeProperty("visibility")})})}},{flush:"post"});const A=c(()=>({isActive:x,isFocused:h,controlRef:V,blur:d,focus:b}));function z(p){p.target!==document.activeElement&&p.preventDefault()}return T(()=>{var N,j,O;const p=e.variant==="outlined",_=a["prepend-inner"]||e.prependInnerIcon,B=!!(e.clearable||a.clear),$=!!(a["append-inner"]||e.appendInnerIcon||B),R=()=>a.label?a.label({...A.value,label:e.label,props:{for:I.value}}):e.label;return i("div",J({class:["v-field",{"v-field--active":x.value,"v-field--appended":$,"v-field--center-affix":e.centerAffix??!f.value,"v-field--disabled":e.disabled,"v-field--dirty":e.dirty,"v-field--error":e.error,"v-field--flat":e.flat,"v-field--has-background":!!e.bgColor,"v-field--persistent-clear":e.persistentClear,"v-field--prepended":_,"v-field--reverse":e.reverse,"v-field--single-line":e.singleLine,"v-field--no-label":!R(),[`v-field--variant-${e.variant}`]:!0},t.value,P.value,u.value,s.value,m.value,v.value,e.class],style:[y.value,e.style],onClick:z},l),[i("div",{class:"v-field__overlay"},null),i(He,{name:"v-field",active:!!e.loading,color:e.error?"error":typeof e.loading=="string"?e.loading:e.color},{default:a.loader}),_&&i("div",{key:"prepend",class:"v-field__prepend-inner"},[e.prependInnerIcon&&i(o,{key:"prepend-icon",name:"prependInner"},null),(N=a["prepend-inner"])==null?void 0:N.call(a,A.value)]),i("div",{class:"v-field__field","data-no-activator":""},[["filled","solo","solo-inverted","solo-filled"].includes(e.variant)&&C.value&&i(X,{key:"floating-label",ref:g,class:[k.value],floating:!0,for:I.value,style:W.value},{default:()=>[R()]}),i(X,{ref:S,for:I.value},{default:()=>[R()]}),(j=a.default)==null?void 0:j.call(a,{...A.value,props:{id:I.value,class:"v-field__input","aria-describedby":M.value},focus:b,blur:d})]),B&&i(tt,{key:"clear"},{default:()=>[oe(i("div",{class:"v-field__clearable",onMousedown:U=>{U.preventDefault(),U.stopPropagation()}},[a.clear?a.clear():i(o,{name:"clear"},null)]),[[ye,e.dirty]])]}),$&&i("div",{key:"append",class:"v-field__append-inner"},[(O=a["append-inner"])==null?void 0:O.call(a,A.value),e.appendInnerIcon&&i(o,{key:"append-icon",name:"appendInner"},null)]),i("div",{class:["v-field__outline",k.value],style:W.value},[p&&i(G,null,[i("div",{class:"v-field__outline__start"},null),C.value&&i("div",{class:"v-field__outline__notch"},[i(X,{ref:g,floating:!0,for:I.value},{default:()=>[R()]})]),i("div",{class:"v-field__outline__end"},null)]),f.value&&C.value&&i(X,{ref:g,floating:!0,for:I.value},{default:()=>[R()]})])])}),{controlRef:V}}});function yt(e){const r=Object.keys(pe.props).filter(l=>!qe(l)&&l!=="class"&&l!=="style");return Ke(e,r)}const ht=["color","file","time","date","datetime-local","week","month"],bt=w({autofocus:Boolean,counter:[Boolean,Number,String],counterValue:[Number,Function],prefix:String,placeholder:String,persistentPlaceholder:Boolean,persistentCounter:Boolean,suffix:String,role:String,type:{type:String,default:"text"},modelModifiers:Object,...Se(),...Pe()},"VTextField"),pt=L()({name:"VTextField",directives:{Intersect:at},inheritAttrs:!1,props:bt(),emits:{"click:control":e=>!0,"mousedown:control":e=>!0,"update:focused":e=>!0,"update:modelValue":e=>!0},setup(e,r){let{attrs:l,emit:n,slots:a}=r;const t=Z(e,"modelValue"),{isFocused:s,focus:u,blur:h}=Ie(e),b=c(()=>typeof e.counterValue=="function"?e.counterValue(t.value):typeof e.counterValue=="number"?e.counterValue:(t.value??"").toString().length),d=c(()=>{if(l.maxlength)return l.maxlength;if(!(!e.counter||typeof e.counter!="number"&&typeof e.counter!="string"))return e.counter}),o=c(()=>["plain","underlined"].includes(e.variant));function m(f,P){var y,k;!e.autofocus||!f||(k=(y=P[0].target)==null?void 0:y.focus)==null||k.call(y)}const v=D(),x=D(),C=D(),F=c(()=>ht.includes(e.type)||e.persistentPlaceholder||s.value||e.active);function I(){var f;C.value!==document.activeElement&&((f=C.value)==null||f.focus()),s.value||u()}function M(f){n("mousedown:control",f),f.target!==C.value&&(I(),f.preventDefault())}function S(f){I(),n("click:control",f)}function g(f){f.stopPropagation(),I(),ne(()=>{t.value=null,Ge(e["onClick:clear"],f)})}function V(f){var y;const P=f.target;if(t.value=P.value,(y=e.modelModifiers)!=null&&y.trim&&["text","search","password","tel","url"].includes(e.type)){const k=[P.selectionStart,P.selectionEnd];ne(()=>{P.selectionStart=k[0],P.selectionEnd=k[1]})}}return T(()=>{const f=!!(a.counter||e.counter!==!1&&e.counter!=null),P=!!(f||a.details),[y,k]=Qe(l),{modelValue:W,...A}=fe.filterProps(e),z=yt(e);return i(fe,J({ref:v,modelValue:t.value,"onUpdate:modelValue":p=>t.value=p,class:["v-text-field",{"v-text-field--prefixed":e.prefix,"v-text-field--suffixed":e.suffix,"v-input--plain-underlined":o.value},e.class],style:e.style},y,A,{centerAffix:!o.value,focused:s.value}),{...a,default:p=>{let{id:_,isDisabled:B,isDirty:$,isReadonly:R,isValid:N}=p;return i(pe,J({ref:x,onMousedown:M,onClick:S,"onClick:clear":g,"onClick:prependInner":e["onClick:prependInner"],"onClick:appendInner":e["onClick:appendInner"],role:e.role},z,{id:_.value,active:F.value||$.value,dirty:$.value||e.dirty,disabled:B.value,focused:s.value,error:N.value===!1}),{...a,default:j=>{let{props:{class:O,...U}}=j;const Q=oe(i("input",J({ref:C,value:t.value,onInput:V,autofocus:e.autofocus,readonly:R.value,disabled:B.value,name:e.name,placeholder:e.placeholder,size:1,type:e.type,onFocus:I,onBlur:h},U,k),null),[[Xe("intersect"),{handler:m},null,{once:!0}]]);return i(G,null,[e.prefix&&i("span",{class:"v-text-field__prefix"},[i("span",{class:"v-text-field__prefix__text"},[e.prefix])]),a.default?i("div",{class:O,"data-no-activator":""},[a.default(),Q]):Ye(Q,{class:O}),e.suffix&&i("span",{class:"v-text-field__suffix"},[i("span",{class:"v-text-field__suffix__text"},[e.suffix])])])}})},details:P?p=>{var _;return i(G,null,[(_=a.details)==null?void 0:_.call(a,p),f&&i(G,null,[i("span",null,null),i(vt,{active:e.persistentCounter||s.value,value:b.value,max:d.value},a.counter)])])}:void 0})}),nt({},v,x,C)}});export{Pt as V,pt as a,Pe as b,fe as c,pe as d,vt as e,yt as f,nt as g,Ce as h,it as i,bt as j,ut as k,_t as l,Se as m,St as n,Ie as u};