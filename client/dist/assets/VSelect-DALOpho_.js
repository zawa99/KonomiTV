import{l as kt,b as wt,h as $e,n as Vt,o as Ct,c as Me}from"./VTextField-Bfecc45n.js";import{H as F,T as te,K as W,X as ne,c as p,O as J,S as ve,j as m,Q as G,b2 as fe,bD as N,ab as me,bJ as x,cf as Pe,r as R,ac as Ae,cI as Ge,bK as M,W as qe,cJ as It,I as ie,J as ge,cK as ce,g as ze,y as Pt,cL as re,cM as We,cu as Xe,cN as xe,cC as Je,cB as Qe,cO as At,co as Ye,cP as Ze,R as xt,cQ as Tt,w as Z,cp as et,cR as tt,cS as Lt,cv as nt,cT as Te,cF as at,cH as lt,cU as Ot,s as Bt,cV as Et,F as le,cW as be,cn as Dt,cX as Mt,cY as Y,cw as Rt,cx as Ft,cZ as he,cq as _t,c_ as jt,bh as Nt,a2 as Le,c$ as Re,d0 as Ht,d1 as it,d2 as Ut,c0 as Fe,bl as ot,ck as pe,d3 as Kt,d4 as we,d5 as $t,cj as ye,o as Gt,cg as qt,d6 as zt,A as Wt,d7 as _e,d8 as je}from"./index-Ba_PdrVw.js";import{M as Xt,V as Ve,m as Jt}from"./VAvatar-B5ELo-kZ.js";import{m as Qt,V as Ne,j as Yt,k as ut,h as Zt,l as He,e as Ue,n as en,d as tn}from"./VChip-CTneQxHJ.js";import{u as nn,c as an}from"./ssrBoot-DzkeAo1z.js";const ln=F({indeterminate:Boolean,indeterminateIcon:{type:te,default:"$checkboxIndeterminate"},...Qt({falseIcon:"$checkboxOff",trueIcon:"$checkboxOn"})},"VCheckboxBtn"),on=W()({name:"VCheckboxBtn",props:ln(),emits:{"update:modelValue":e=>!0,"update:indeterminate":e=>!0},setup(e,i){let{slots:t}=i;const n=ne(e,"indeterminate"),l=ne(e,"modelValue");function a(r){n.value&&(n.value=!1)}const o=p(()=>n.value?e.indeterminateIcon:e.falseIcon),u=p(()=>n.value?e.indeterminateIcon:e.trueIcon);return J(()=>{const r=ve(Ne.filterProps(e),["modelValue"]);return m(Ne,G(r,{modelValue:l.value,"onUpdate:modelValue":[f=>l.value=f,a],class:["v-checkbox-btn",e.class],style:e.style,type:"checkbox",falseIcon:o.value,trueIcon:u.value,"aria-checked":n.value?"mixed":void 0}),t)}),{}}}),Ce=Symbol.for("vuetify:list");function st(){const e=fe(Ce,{hasPrepend:N(!1),updateHasPrepend:()=>null}),i={hasPrepend:N(!1),updateHasPrepend:t=>{t&&(i.hasPrepend.value=t)}};return me(Ce,i),e}function rt(){return fe(Ce,null)}const Oe=e=>{const i={activate:t=>{let{id:n,value:l,activated:a}=t;return n=x(n),e&&!l&&a.size===1&&a.has(n)||(l?a.add(n):a.delete(n)),a},in:(t,n,l)=>{let a=new Set;if(t!=null)for(const o of Pe(t))a=i.activate({id:o,value:!0,activated:new Set(a),children:n,parents:l});return a},out:t=>Array.from(t)};return i},ct=e=>{const i=Oe(e);return{activate:n=>{let{activated:l,id:a,...o}=n;a=x(a);const u=l.has(a)?new Set([a]):new Set;return i.activate({...o,id:a,activated:u})},in:(n,l,a)=>{let o=new Set;if(n!=null){const u=Pe(n);u.length&&(o=i.in(u.slice(0,1),l,a))}return o},out:(n,l,a)=>i.out(n,l,a)}},un=e=>{const i=Oe(e);return{activate:n=>{let{id:l,activated:a,children:o,...u}=n;return l=x(l),o.has(l)?a:i.activate({id:l,activated:a,children:o,...u})},in:i.in,out:i.out}},sn=e=>{const i=ct(e);return{activate:n=>{let{id:l,activated:a,children:o,...u}=n;return l=x(l),o.has(l)?a:i.activate({id:l,activated:a,children:o,...u})},in:i.in,out:i.out}},rn={open:e=>{let{id:i,value:t,opened:n,parents:l}=e;if(t){const a=new Set;a.add(i);let o=l.get(i);for(;o!=null;)a.add(o),o=l.get(o);return a}else return n.delete(i),n},select:()=>null},dt={open:e=>{let{id:i,value:t,opened:n,parents:l}=e;if(t){let a=x(l.get(i));for(n.add(i);a!=null&&a!==i;)n.add(a),a=x(l.get(a));return n}else n.delete(i);return n},select:()=>null},cn={open:dt.open,select:e=>{let{id:i,value:t,opened:n,parents:l}=e;if(!t)return n;const a=[];let o=l.get(i);for(;o!=null;)a.push(o),o=l.get(o);return new Set(a)}},Be=e=>{const i={select:t=>{let{id:n,value:l,selected:a}=t;if(n=x(n),e&&!l){const o=Array.from(a.entries()).reduce((u,r)=>{let[f,k]=r;return k==="on"&&u.push(f),u},[]);if(o.length===1&&o[0]===n)return a}return a.set(n,l?"on":"off"),a},in:(t,n,l)=>{let a=new Map;for(const o of t||[])a=i.select({id:o,value:!0,selected:new Map(a),children:n,parents:l});return a},out:t=>{const n=[];for(const[l,a]of t.entries())a==="on"&&n.push(l);return n}};return i},vt=e=>{const i=Be(e);return{select:n=>{let{selected:l,id:a,...o}=n;a=x(a);const u=l.has(a)?new Map([[a,l.get(a)]]):new Map;return i.select({...o,id:a,selected:u})},in:(n,l,a)=>{let o=new Map;return n!=null&&n.length&&(o=i.in(n.slice(0,1),l,a)),o},out:(n,l,a)=>i.out(n,l,a)}},dn=e=>{const i=Be(e);return{select:n=>{let{id:l,selected:a,children:o,...u}=n;return l=x(l),o.has(l)?a:i.select({id:l,selected:a,children:o,...u})},in:i.in,out:i.out}},vn=e=>{const i=vt(e);return{select:n=>{let{id:l,selected:a,children:o,...u}=n;return l=x(l),o.has(l)?a:i.select({id:l,selected:a,children:o,...u})},in:i.in,out:i.out}},fn=e=>{const i={select:t=>{let{id:n,value:l,selected:a,children:o,parents:u}=t;n=x(n);const r=new Map(a),f=[n];for(;f.length;){const w=f.shift();a.set(x(w),l?"on":"off"),o.has(w)&&f.push(...o.get(w))}let k=x(u.get(n));for(;k;){const w=o.get(k),y=w.every(v=>a.get(x(v))==="on"),c=w.every(v=>!a.has(x(v))||a.get(x(v))==="off");a.set(k,y?"on":c?"off":"indeterminate"),k=x(u.get(k))}return e&&!l&&Array.from(a.entries()).reduce((y,c)=>{let[v,g]=c;return g==="on"&&y.push(v),y},[]).length===0?r:a},in:(t,n,l)=>{let a=new Map;for(const o of t||[])a=i.select({id:o,value:!0,selected:new Map(a),children:n,parents:l});return a},out:(t,n)=>{const l=[];for(const[a,o]of t.entries())o==="on"&&!n.has(a)&&l.push(a);return l}};return i},de=Symbol.for("vuetify:nested"),ft={id:N(),root:{register:()=>null,unregister:()=>null,parents:R(new Map),children:R(new Map),open:()=>null,openOnSelect:()=>null,activate:()=>null,select:()=>null,activatable:R(!1),selectable:R(!1),opened:R(new Set),activated:R(new Set),selected:R(new Map),selectedValues:R([])}},mn=F({activatable:Boolean,selectable:Boolean,activeStrategy:[String,Function,Object],selectStrategy:[String,Function,Object],openStrategy:[String,Object],opened:null,activated:null,selected:null,mandatory:Boolean},"nested"),gn=e=>{let i=!1;const t=R(new Map),n=R(new Map),l=ne(e,"opened",e.opened,c=>new Set(x(c)),c=>[...c.values()]),a=p(()=>{if(typeof e.activeStrategy=="object")return e.activeStrategy;if(typeof e.activeStrategy=="function")return e.activeStrategy(e.mandatory);switch(e.activeStrategy){case"leaf":return un(e.mandatory);case"single-leaf":return sn(e.mandatory);case"independent":return Oe(e.mandatory);case"single-independent":default:return ct(e.mandatory)}}),o=p(()=>{if(typeof e.selectStrategy=="object")return e.selectStrategy;if(typeof e.selectStrategy=="function")return e.selectStrategy(e.mandatory);switch(e.selectStrategy){case"single-leaf":return vn(e.mandatory);case"leaf":return dn(e.mandatory);case"independent":return Be(e.mandatory);case"single-independent":return vt(e.mandatory);case"classic":default:return fn(e.mandatory)}}),u=p(()=>{if(typeof e.openStrategy=="object")return e.openStrategy;switch(e.openStrategy){case"list":return cn;case"single":return rn;case"multiple":default:return dt}}),r=ne(e,"activated",e.activated,c=>a.value.in(c,t.value,n.value),c=>a.value.out(c,t.value,n.value)),f=ne(e,"selected",e.selected,c=>o.value.in(c,t.value,n.value),c=>o.value.out(c,t.value,n.value));Ae(()=>{i=!0});function k(c){const v=[];let g=c;for(;g!=null;)v.unshift(g),g=n.value.get(g);return v}const w=Ge("nested"),y={id:N(),root:{opened:l,activatable:M(e,"activatable"),selectable:M(e,"selectable"),activated:r,selected:f,selectedValues:p(()=>{const c=[];for(const[v,g]of f.value.entries())g==="on"&&c.push(v);return c}),register:(c,v,g)=>{v&&c!==v&&n.value.set(c,v),g&&t.value.set(c,[]),v!=null&&t.value.set(v,[...t.value.get(v)||[],c])},unregister:c=>{if(i)return;t.value.delete(c);const v=n.value.get(c);if(v){const g=t.value.get(v)??[];t.value.set(v,g.filter(d=>d!==c))}n.value.delete(c)},open:(c,v,g)=>{w.emit("click:open",{id:c,value:v,path:k(c),event:g});const d=u.value.open({id:c,value:v,opened:new Set(l.value),children:t.value,parents:n.value,event:g});d&&(l.value=d)},openOnSelect:(c,v,g)=>{const d=u.value.select({id:c,value:v,selected:new Map(f.value),opened:new Set(l.value),children:t.value,parents:n.value,event:g});d&&(l.value=d)},select:(c,v,g)=>{w.emit("click:select",{id:c,value:v,path:k(c),event:g});const d=o.value.select({id:c,value:v,selected:new Map(f.value),children:t.value,parents:n.value,event:g});d&&(f.value=d),y.root.openOnSelect(c,v,g)},activate:(c,v,g)=>{if(!e.activatable)return y.root.select(c,!0,g);w.emit("click:activate",{id:c,value:v,path:k(c),event:g});const d=a.value.activate({id:c,value:v,activated:new Set(r.value),children:t.value,parents:n.value,event:g});d&&(r.value=d)},children:t,parents:n}};return me(de,y),y.root},mt=(e,i)=>{const t=fe(de,ft),n=Symbol(qe()),l=p(()=>e.value!==void 0?e.value:n),a={...t,id:l,open:(o,u)=>t.root.open(x(l.value),o,u),openOnSelect:(o,u)=>t.root.openOnSelect(l.value,o,u),isOpen:p(()=>t.root.opened.value.has(x(l.value))),parent:p(()=>t.root.parents.value.get(l.value)),activate:(o,u)=>t.root.activate(l.value,o,u),isActivated:p(()=>t.root.activated.value.has(x(l.value))),select:(o,u)=>t.root.select(l.value,o,u),isSelected:p(()=>t.root.selected.value.get(x(l.value))==="on"),isIndeterminate:p(()=>t.root.selected.value.get(l.value)==="indeterminate"),isLeaf:p(()=>!t.root.children.value.get(l.value)),isGroupActivator:t.isGroupActivator};return!t.isGroupActivator&&t.root.register(l.value,t.id.value,i),Ae(()=>{!t.isGroupActivator&&t.root.unregister(l.value)}),i&&me(de,a),a},yn=()=>{const e=fe(de,ft);me(de,{...e,isGroupActivator:!0})},hn=It({name:"VListGroupActivator",setup(e,i){let{slots:t}=i;return yn(),()=>{var n;return(n=t.default)==null?void 0:n.call(t)}}}),bn=F({activeColor:String,baseColor:String,color:String,collapseIcon:{type:te,default:"$collapse"},expandIcon:{type:te,default:"$expand"},prependIcon:te,appendIcon:te,fluid:Boolean,subgroup:Boolean,title:String,value:null,...ie(),...ge()},"VListGroup"),Ke=W()({name:"VListGroup",props:bn(),setup(e,i){let{slots:t}=i;const{isOpen:n,open:l,id:a}=mt(M(e,"value"),!0),o=p(()=>`v-list-group--id-${String(a.value)}`),u=rt(),{isBooted:r}=nn();function f(c){c.stopPropagation(),l(!n.value,c)}const k=p(()=>({onClick:f,class:"v-list-group__header",id:o.value})),w=p(()=>n.value?e.collapseIcon:e.expandIcon),y=p(()=>({VListItem:{active:n.value,activeColor:e.activeColor,baseColor:e.baseColor,color:e.color,prependIcon:e.prependIcon||e.subgroup&&w.value,appendIcon:e.appendIcon||!e.subgroup&&w.value,title:e.title,value:e.value}}));return J(()=>m(e.tag,{class:["v-list-group",{"v-list-group--prepend":u==null?void 0:u.hasPrepend.value,"v-list-group--fluid":e.fluid,"v-list-group--subgroup":e.subgroup,"v-list-group--open":n.value},e.class],style:e.style},{default:()=>[t.activator&&m(ce,{defaults:y.value},{default:()=>[m(hn,null,{default:()=>[t.activator({props:k.value,isOpen:n.value})]})]}),m(Xt,{transition:{component:kt},disabled:!r.value},{default:()=>{var c;return[ze(m("div",{class:"v-list-group__items",role:"group","aria-labelledby":o.value},[(c=t.default)==null?void 0:c.call(t)]),[[Pt,n.value]])]}})]})),{isOpen:n}}}),Sn=F({opacity:[Number,String],...ie(),...ge()},"VListItemSubtitle"),pn=W()({name:"VListItemSubtitle",props:Sn(),setup(e,i){let{slots:t}=i;return J(()=>m(e.tag,{class:["v-list-item-subtitle",e.class],style:[{"--v-list-item-subtitle-opacity":e.opacity},e.style]},t)),{}}}),kn=an("v-list-item-title"),wn=F({active:{type:Boolean,default:void 0},activeClass:String,activeColor:String,appendAvatar:String,appendIcon:te,baseColor:String,disabled:Boolean,lines:[Boolean,String],link:{type:Boolean,default:void 0},nav:Boolean,prependAvatar:String,prependIcon:te,ripple:{type:[Boolean,Object],default:!0},slim:Boolean,subtitle:[String,Number],title:[String,Number],value:null,onClick:re(),onClickOnce:re(),...We(),...ie(),...Xe(),...xe(),...Je(),...Qe(),...At(),...ge(),...Ye(),...Ze({variant:"text"})},"VListItem"),Se=W()({name:"VListItem",directives:{Ripple:xt},props:wn(),emits:{click:e=>!0},setup(e,i){let{attrs:t,slots:n,emit:l}=i;const a=Tt(e,t),o=p(()=>e.value===void 0?a.href.value:e.value),{activate:u,isActivated:r,select:f,isOpen:k,isSelected:w,isIndeterminate:y,isGroupActivator:c,root:v,parent:g,openOnSelect:d}=mt(o,!1),S=rt(),V=p(()=>{var b;return e.active!==!1&&(e.active||((b=a.isActive)==null?void 0:b.value)||(v.activatable.value?r.value:w.value))}),P=p(()=>e.link!==!1&&a.isLink.value),I=p(()=>!e.disabled&&e.link!==!1&&(e.link||a.isClickable.value||!!S&&(v.selectable.value||v.activatable.value||e.value!=null))),O=p(()=>e.rounded||e.nav),Q=p(()=>e.color??e.activeColor),L=p(()=>({color:V.value?Q.value??e.baseColor:e.baseColor,variant:e.variant}));Z(()=>{var b;return(b=a.isActive)==null?void 0:b.value},b=>{b&&g.value!=null&&v.open(g.value,!0),b&&d(b)},{immediate:!0});const{themeClasses:ee}=et(e),{borderClasses:X}=tt(e),{colorClasses:q,colorStyles:_,variantClasses:T}=Lt(L),{densityClasses:H}=nt(e),{dimensionStyles:oe}=Te(e),{elevationClasses:z}=at(e),{roundedClasses:se}=lt(O),ue=p(()=>e.lines?`v-list-item--${e.lines}-line`:void 0),ae=p(()=>({isActive:V.value,select:f,isOpen:k.value,isSelected:w.value,isIndeterminate:y.value}));function s(b){var A;l("click",b),I.value&&((A=a.navigate)==null||A.call(a,b),!c&&(v.activatable.value?u(!r.value,b):(v.selectable.value||e.value!=null)&&f(!w.value,b)))}function h(b){(b.key==="Enter"||b.key===" ")&&(b.preventDefault(),b.target.dispatchEvent(new MouseEvent("click",b)))}return J(()=>{const b=P.value?"a":e.tag,A=n.title||e.title!=null,U=n.subtitle||e.subtitle!=null,C=!!(e.appendAvatar||e.appendIcon),B=!!(C||n.append),E=!!(e.prependAvatar||e.prependIcon),$=!!(E||n.prepend);return S==null||S.updateHasPrepend($),e.activeColor&&Ot("active-color",["color","base-color"]),ze(m(b,{class:["v-list-item",{"v-list-item--active":V.value,"v-list-item--disabled":e.disabled,"v-list-item--link":I.value,"v-list-item--nav":e.nav,"v-list-item--prepend":!$&&(S==null?void 0:S.hasPrepend.value),"v-list-item--slim":e.slim,[`${e.activeClass}`]:e.activeClass&&V.value},ee.value,X.value,q.value,H.value,z.value,ue.value,se.value,T.value,e.class],style:[_.value,oe.value,e.style],href:a.href.value,tabindex:I.value?S?-2:0:void 0,onClick:s,onKeydown:I.value&&!P.value&&h},{default:()=>{var j;return[Et(I.value||V.value,"v-list-item"),$&&m("div",{key:"prepend",class:"v-list-item__prepend"},[n.prepend?m(ce,{key:"prepend-defaults",disabled:!E,defaults:{VAvatar:{density:e.density,image:e.prependAvatar},VIcon:{density:e.density,icon:e.prependIcon},VListItemAction:{start:!0}}},{default:()=>{var D;return[(D=n.prepend)==null?void 0:D.call(n,ae.value)]}}):m(le,null,[e.prependAvatar&&m(Ve,{key:"prepend-avatar",density:e.density,image:e.prependAvatar},null),e.prependIcon&&m(be,{key:"prepend-icon",density:e.density,icon:e.prependIcon},null)]),m("div",{class:"v-list-item__spacer"},null)]),m("div",{class:"v-list-item__content","data-no-activator":""},[A&&m(kn,{key:"title"},{default:()=>{var D;return[((D=n.title)==null?void 0:D.call(n,{title:e.title}))??e.title]}}),U&&m(pn,{key:"subtitle"},{default:()=>{var D;return[((D=n.subtitle)==null?void 0:D.call(n,{subtitle:e.subtitle}))??e.subtitle]}}),(j=n.default)==null?void 0:j.call(n,ae.value)]),B&&m("div",{key:"append",class:"v-list-item__append"},[n.append?m(ce,{key:"append-defaults",disabled:!C,defaults:{VAvatar:{density:e.density,image:e.appendAvatar},VIcon:{density:e.density,icon:e.appendIcon},VListItemAction:{end:!0}}},{default:()=>{var D;return[(D=n.append)==null?void 0:D.call(n,ae.value)]}}):m(le,null,[e.appendIcon&&m(be,{key:"append-icon",density:e.density,icon:e.appendIcon},null),e.appendAvatar&&m(Ve,{key:"append-avatar",density:e.density,image:e.appendAvatar},null)]),m("div",{class:"v-list-item__spacer"},null)])]}}),[[Bt("ripple"),I.value&&e.ripple]])}),{activate:u,isActivated:r,isGroupActivator:c,isSelected:w,list:S,select:f}}}),Vn=F({color:String,inset:Boolean,sticky:Boolean,title:String,...ie(),...ge()},"VListSubheader"),Cn=W()({name:"VListSubheader",props:Vn(),setup(e,i){let{slots:t}=i;const{textColorClasses:n,textColorStyles:l}=Dt(M(e,"color"));return J(()=>{const a=!!(t.default||e.title);return m(e.tag,{class:["v-list-subheader",{"v-list-subheader--inset":e.inset,"v-list-subheader--sticky":e.sticky},n.value,e.class],style:[{textColorStyles:l},e.style]},{default:()=>{var o;return[a&&m("div",{class:"v-list-subheader__text"},[((o=t.default)==null?void 0:o.call(t))??e.title])]}})}),{}}}),In=F({items:Array,returnObject:Boolean},"VListChildren"),gt=W()({name:"VListChildren",props:In(),setup(e,i){let{slots:t}=i;return st(),()=>{var n,l;return((n=t.default)==null?void 0:n.call(t))??((l=e.items)==null?void 0:l.map(a=>{var y,c;let{children:o,props:u,type:r,raw:f}=a;if(r==="divider")return((y=t.divider)==null?void 0:y.call(t,{props:u}))??m(wt,u,null);if(r==="subheader")return((c=t.subheader)==null?void 0:c.call(t,{props:u}))??m(Cn,u,null);const k={subtitle:t.subtitle?v=>{var g;return(g=t.subtitle)==null?void 0:g.call(t,{...v,item:f})}:void 0,prepend:t.prepend?v=>{var g;return(g=t.prepend)==null?void 0:g.call(t,{...v,item:f})}:void 0,append:t.append?v=>{var g;return(g=t.append)==null?void 0:g.call(t,{...v,item:f})}:void 0,title:t.title?v=>{var g;return(g=t.title)==null?void 0:g.call(t,{...v,item:f})}:void 0},w=Ke.filterProps(u);return o?m(Ke,G({value:u==null?void 0:u.value},w),{activator:v=>{let{props:g}=v;const d={...u,...g,value:e.returnObject?f:u.value};return t.header?t.header({props:d}):m(Se,d,k)},default:()=>m(gt,{items:o,returnObject:e.returnObject},t)}):t.item?t.item({props:u}):m(Se,G(u,{value:e.returnObject?f:u.value}),k)}))}}}),yt=F({items:{type:Array,default:()=>[]},itemTitle:{type:[String,Array,Function],default:"title"},itemValue:{type:[String,Array,Function],default:"value"},itemChildren:{type:[Boolean,String,Array,Function],default:"children"},itemProps:{type:[Boolean,String,Array,Function],default:"props"},returnObject:Boolean,valueComparator:{type:Function,default:Mt}},"list-items");function Ie(e,i){const t=Y(i,e.itemTitle,i),n=Y(i,e.itemValue,t),l=Y(i,e.itemChildren),a=e.itemProps===!0?typeof i=="object"&&i!=null&&!Array.isArray(i)?"children"in i?ve(i,["children"]):i:void 0:Y(i,e.itemProps),o={title:t,value:n,...a};return{title:String(o.title??""),value:o.value,props:o,children:Array.isArray(l)?ht(e,l):void 0,raw:i}}function ht(e,i){const t=[];for(const n of i)t.push(Ie(e,n));return t}function Pn(e){const i=p(()=>ht(e,e.items)),t=p(()=>i.value.some(a=>a.value===null));function n(a){return t.value||(a=a.filter(o=>o!==null)),a.map(o=>e.returnObject&&typeof o=="string"?Ie(e,o):i.value.find(u=>e.valueComparator(o,u.value))||Ie(e,o))}function l(a){return e.returnObject?a.map(o=>{let{raw:u}=o;return u}):a.map(o=>{let{value:u}=o;return u})}return{items:i,transformIn:n,transformOut:l}}function An(e){return typeof e=="string"||typeof e=="number"||typeof e=="boolean"}function xn(e,i){const t=Y(i,e.itemType,"item"),n=An(i)?i:Y(i,e.itemTitle),l=Y(i,e.itemValue,void 0),a=Y(i,e.itemChildren),o=e.itemProps===!0?ve(i,["children"]):Y(i,e.itemProps),u={title:n,value:l,...o};return{type:t,title:u.title,value:u.value,props:u,children:t==="item"&&a?bt(e,a):void 0,raw:i}}function bt(e,i){const t=[];for(const n of i)t.push(xn(e,n));return t}function Tn(e){return{items:p(()=>bt(e,e.items))}}const Ln=F({baseColor:String,activeColor:String,activeClass:String,bgColor:String,disabled:Boolean,expandIcon:String,collapseIcon:String,lines:{type:[Boolean,String],default:"one"},slim:Boolean,nav:Boolean,"onClick:open":re(),"onClick:select":re(),"onUpdate:opened":re(),...mn({selectStrategy:"single-leaf",openStrategy:"list"}),...We(),...ie(),...Xe(),...xe(),...Je(),itemType:{type:String,default:"type"},...yt(),...Qe(),...ge(),...Ye(),...Ze({variant:"text"})},"VList"),On=W()({name:"VList",props:Ln(),emits:{"update:selected":e=>!0,"update:activated":e=>!0,"update:opened":e=>!0,"click:open":e=>!0,"click:activate":e=>!0,"click:select":e=>!0},setup(e,i){let{slots:t}=i;const{items:n}=Tn(e),{themeClasses:l}=et(e),{backgroundColorClasses:a,backgroundColorStyles:o}=Rt(M(e,"bgColor")),{borderClasses:u}=tt(e),{densityClasses:r}=nt(e),{dimensionStyles:f}=Te(e),{elevationClasses:k}=at(e),{roundedClasses:w}=lt(e),{children:y,open:c,parents:v,select:g}=gn(e),d=p(()=>e.lines?`v-list--${e.lines}-line`:void 0),S=M(e,"activeColor"),V=M(e,"baseColor"),P=M(e,"color");st(),Ft({VListGroup:{activeColor:S,baseColor:V,color:P,expandIcon:M(e,"expandIcon"),collapseIcon:M(e,"collapseIcon")},VListItem:{activeClass:M(e,"activeClass"),activeColor:S,baseColor:V,color:P,density:M(e,"density"),disabled:M(e,"disabled"),lines:M(e,"lines"),nav:M(e,"nav"),slim:M(e,"slim"),variant:M(e,"variant")}});const I=N(!1),O=R();function Q(T){I.value=!0}function L(T){I.value=!1}function ee(T){var H;!I.value&&!(T.relatedTarget&&((H=O.value)!=null&&H.contains(T.relatedTarget)))&&_()}function X(T){const H=T.target;if(!(!O.value||["INPUT","TEXTAREA"].includes(H.tagName))){if(T.key==="ArrowDown")_("next");else if(T.key==="ArrowUp")_("prev");else if(T.key==="Home")_("first");else if(T.key==="End")_("last");else return;T.preventDefault()}}function q(T){I.value=!0}function _(T){if(O.value)return he(O.value,T)}return J(()=>m(e.tag,{ref:O,class:["v-list",{"v-list--disabled":e.disabled,"v-list--nav":e.nav,"v-list--slim":e.slim},l.value,a.value,u.value,r.value,k.value,d.value,w.value,e.class],style:[o.value,f.value,e.style],tabindex:e.disabled||I.value?-1:0,role:"listbox","aria-activedescendant":void 0,onFocusin:Q,onFocusout:L,onFocus:ee,onKeydown:X,onMousedown:q},{default:()=>[m(gt,{items:n.value,returnObject:e.returnObject},t)]})),{open:c,select:g,focus:_,children:y,parents:v}}}),Bn=F({id:String,submenu:Boolean,...ve(Yt({closeDelay:250,closeOnContentClick:!0,locationStrategy:"connected",location:void 0,openDelay:300,scrim:!1,scrollStrategy:"reposition",transition:{component:ut}}),["absolute"])},"VMenu"),En=W()({name:"VMenu",props:Bn(),emits:{"update:modelValue":e=>!0},setup(e,i){let{slots:t}=i;const n=ne(e,"modelValue"),{scopeId:l}=Zt(),{isRtl:a}=_t(),o=qe(),u=p(()=>e.id||`v-menu-${o}`),r=R(),f=fe(He,null),k=N(new Set);me(He,{register(){k.value.add(o)},unregister(){k.value.delete(o)},closeParents(d){setTimeout(()=>{var S;!k.value.size&&!e.persistent&&(d==null||(S=r.value)!=null&&S.contentEl&&!jt(d,r.value.contentEl))&&(n.value=!1,f==null||f.closeParents())},40)}}),Ae(()=>f==null?void 0:f.unregister()),Nt(()=>n.value=!1);async function w(d){var P,I,O;const S=d.relatedTarget,V=d.target;await Le(),n.value&&S!==V&&((P=r.value)!=null&&P.contentEl)&&((I=r.value)!=null&&I.globalTop)&&![document,r.value.contentEl].includes(V)&&!r.value.contentEl.contains(V)&&((O=Re(r.value.contentEl)[0])==null||O.focus())}Z(n,d=>{d?(f==null||f.register(),document.addEventListener("focusin",w,{once:!0})):(f==null||f.unregister(),document.removeEventListener("focusin",w))});function y(d){f==null||f.closeParents(d)}function c(d){var S,V,P,I,O;if(!e.disabled)if(d.key==="Tab"||d.key==="Enter"&&!e.closeOnContentClick){if(d.key==="Enter"&&(d.target instanceof HTMLTextAreaElement||d.target instanceof HTMLInputElement&&d.target.closest("form")))return;d.key==="Enter"&&d.preventDefault(),Ht(Re((S=r.value)==null?void 0:S.contentEl,!1),d.shiftKey?"prev":"next",L=>L.tabIndex>=0)||(n.value=!1,(P=(V=r.value)==null?void 0:V.activatorEl)==null||P.focus())}else e.submenu&&d.key===(a.value?"ArrowRight":"ArrowLeft")&&(n.value=!1,(O=(I=r.value)==null?void 0:I.activatorEl)==null||O.focus())}function v(d){var V;if(e.disabled)return;const S=(V=r.value)==null?void 0:V.contentEl;S&&n.value?d.key==="ArrowDown"?(d.preventDefault(),d.stopImmediatePropagation(),he(S,"next")):d.key==="ArrowUp"?(d.preventDefault(),d.stopImmediatePropagation(),he(S,"prev")):e.submenu&&(d.key===(a.value?"ArrowRight":"ArrowLeft")?n.value=!1:d.key===(a.value?"ArrowLeft":"ArrowRight")&&(d.preventDefault(),he(S,"first"))):(e.submenu?d.key===(a.value?"ArrowLeft":"ArrowRight"):["ArrowDown","ArrowUp"].includes(d.key))&&(n.value=!0,d.preventDefault(),setTimeout(()=>setTimeout(()=>v(d))))}const g=p(()=>G({"aria-haspopup":"menu","aria-expanded":String(n.value),"aria-owns":u.value,onKeydown:v},e.activatorProps));return J(()=>{const d=Ue.filterProps(e);return m(Ue,G({ref:r,id:u.value,class:["v-menu",e.class],style:e.style},d,{modelValue:n.value,"onUpdate:modelValue":S=>n.value=S,absolute:!0,activatorProps:g.value,location:e.location??(e.submenu?"end":"bottom"),"onClick:outside":y,onKeydown:c},l),{activator:t.activator,default:function(){for(var S=arguments.length,V=new Array(S),P=0;P<S;P++)V[P]=arguments[P];return m(ce,{root:"VMenu"},{default:()=>{var I;return[(I=t.default)==null?void 0:I.call(t,...V)]}})}})}),$e({id:u,ΨopenChildren:k},r)}}),Dn=F({renderless:Boolean,...ie()},"VVirtualScrollItem"),Mn=W()({name:"VVirtualScrollItem",inheritAttrs:!1,props:Dn(),emits:{"update:height":e=>!0},setup(e,i){let{attrs:t,emit:n,slots:l}=i;const{resizeRef:a,contentRect:o}=it(void 0,"border");Z(()=>{var u;return(u=o.value)==null?void 0:u.height},u=>{u!=null&&n("update:height",u)}),J(()=>{var u,r;return e.renderless?m(le,null,[(u=l.default)==null?void 0:u.call(l,{itemRef:a})]):m("div",G({ref:a,class:["v-virtual-scroll__item",e.class],style:e.style},t),[(r=l.default)==null?void 0:r.call(l)])})}}),Rn=-1,Fn=1,ke=100,_n=F({itemHeight:{type:[Number,String],default:null},height:[Number,String]},"virtual");function jn(e,i){const t=Ut(),n=N(0);Fe(()=>{n.value=parseFloat(e.itemHeight||0)});const l=N(0),a=N(Math.ceil((parseInt(e.height)||t.height.value)/(n.value||16))||1),o=N(0),u=N(0),r=R(),f=R();let k=0;const{resizeRef:w,contentRect:y}=it();Fe(()=>{w.value=r.value});const c=p(()=>{var s;return r.value===document.documentElement?t.height.value:((s=y.value)==null?void 0:s.height)||parseInt(e.height)||0}),v=p(()=>!!(r.value&&f.value&&c.value&&n.value));let g=Array.from({length:i.value.length}),d=Array.from({length:i.value.length});const S=N(0);let V=-1;function P(s){return g[s]||n.value}const I=Kt(()=>{const s=performance.now();d[0]=0;const h=i.value.length;for(let b=1;b<=h-1;b++)d[b]=(d[b-1]||0)+P(b-1);S.value=Math.max(S.value,performance.now()-s)},S),O=Z(v,s=>{s&&(O(),k=f.value.offsetTop,I.immediate(),z(),~V&&Le(()=>{we&&window.requestAnimationFrame(()=>{ue(V),V=-1})}))});ot(()=>{I.clear()});function Q(s,h){const b=g[s],A=n.value;n.value=A?Math.min(n.value,h):h,(b!==h||A!==n.value)&&(g[s]=h,I())}function L(s){return s=pe(s,0,i.value.length-1),d[s]||0}function ee(s){return Nn(d,s)}let X=0,q=0,_=0;Z(c,(s,h)=>{h&&(z(),s<h&&requestAnimationFrame(()=>{q=0,z()}))});function T(){if(!r.value||!f.value)return;const s=r.value.scrollTop,h=performance.now();h-_>500?(q=Math.sign(s-X),k=f.value.offsetTop):q=s-X,X=s,_=h,z()}function H(){!r.value||!f.value||(q=0,_=0,z())}let oe=-1;function z(){cancelAnimationFrame(oe),oe=requestAnimationFrame(se)}function se(){if(!r.value||!c.value)return;const s=X-k,h=Math.sign(q),b=Math.max(0,s-ke),A=pe(ee(b),0,i.value.length),U=s+c.value+ke,C=pe(ee(U)+1,A+1,i.value.length);if((h!==Rn||A<l.value)&&(h!==Fn||C>a.value)){const B=L(l.value)-L(A),E=L(C)-L(a.value);Math.max(B,E)>ke?(l.value=A,a.value=C):(A<=0&&(l.value=A),C>=i.value.length&&(a.value=C))}o.value=L(l.value),u.value=L(i.value.length)-L(a.value)}function ue(s){const h=L(s);!r.value||s&&!h?V=s:r.value.scrollTop=h}const ae=p(()=>i.value.slice(l.value,a.value).map((s,h)=>({raw:s,index:h+l.value})));return Z(i,()=>{g=Array.from({length:i.value.length}),d=Array.from({length:i.value.length}),I.immediate(),z()},{deep:!0}),{calculateVisibleItems:z,containerRef:r,markerRef:f,computedItems:ae,paddingTop:o,paddingBottom:u,scrollToIndex:ue,handleScroll:T,handleScrollend:H,handleItemResize:Q}}function Nn(e,i){let t=e.length-1,n=0,l=0,a=null,o=-1;if(e[t]<i)return t;for(;n<=t;)if(l=n+t>>1,a=e[l],a>i)t=l-1;else if(a<i)o=l,n=l+1;else return a===i?l:n;return o}const Hn=F({items:{type:Array,default:()=>[]},renderless:Boolean,..._n(),...ie(),...xe()},"VVirtualScroll"),Un=W()({name:"VVirtualScroll",props:Hn(),setup(e,i){let{slots:t}=i;const n=Ge("VVirtualScroll"),{dimensionStyles:l}=Te(e),{calculateVisibleItems:a,containerRef:o,markerRef:u,handleScroll:r,handleScrollend:f,handleItemResize:k,scrollToIndex:w,paddingTop:y,paddingBottom:c,computedItems:v}=jn(e,M(e,"items"));return $t(()=>e.renderless,()=>{function g(){var V,P;const S=(arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1)?"addEventListener":"removeEventListener";o.value===document.documentElement?(document[S]("scroll",r,{passive:!0}),document[S]("scrollend",f)):((V=o.value)==null||V[S]("scroll",r,{passive:!0}),(P=o.value)==null||P[S]("scrollend",f))}Gt(()=>{o.value=en(n.vnode.el,!0),g(!0)}),ot(g)}),J(()=>{const g=v.value.map(d=>m(Mn,{key:d.index,renderless:e.renderless,"onUpdate:height":S=>k(d.index,S)},{default:S=>{var V;return(V=t.default)==null?void 0:V.call(t,{item:d.raw,index:d.index,...S})}}));return e.renderless?m(le,null,[m("div",{ref:u,class:"v-virtual-scroll__spacer",style:{paddingTop:ye(y.value)}},null),g,m("div",{class:"v-virtual-scroll__spacer",style:{paddingBottom:ye(c.value)}},null)]):m("div",{ref:o,class:["v-virtual-scroll",e.class],onScrollPassive:r,onScrollend:f,style:[l.value,e.style]},[m("div",{ref:u,class:"v-virtual-scroll__container",style:{paddingTop:ye(y.value),paddingBottom:ye(c.value)}},[g])])}),{calculateVisibleItems:a,scrollToIndex:w}}});function Kn(e,i){const t=N(!1);let n;function l(u){cancelAnimationFrame(n),t.value=!0,n=requestAnimationFrame(()=>{n=requestAnimationFrame(()=>{t.value=!1})})}async function a(){await new Promise(u=>requestAnimationFrame(u)),await new Promise(u=>requestAnimationFrame(u)),await new Promise(u=>requestAnimationFrame(u)),await new Promise(u=>{if(t.value){const r=Z(t,()=>{r(),u()})}else u()})}async function o(u){var k,w;if(u.key==="Tab"&&((k=i.value)==null||k.focus()),!["PageDown","PageUp","Home","End"].includes(u.key))return;const r=(w=e.value)==null?void 0:w.$el;if(!r)return;(u.key==="Home"||u.key==="End")&&r.scrollTo({top:u.key==="Home"?0:r.scrollHeight,behavior:"smooth"}),await a();const f=r.querySelectorAll(":scope > :not(.v-virtual-scroll__spacer)");if(u.key==="PageDown"||u.key==="Home"){const y=r.getBoundingClientRect().top;for(const c of f)if(c.getBoundingClientRect().top>=y){c.focus();break}}else{const y=r.getBoundingClientRect().bottom;for(const c of[...f].reverse())if(c.getBoundingClientRect().bottom<=y){c.focus();break}}}return{onScrollPassive:l,onKeydown:o}}const $n=F({chips:Boolean,closableChips:Boolean,closeText:{type:String,default:"$vuetify.close"},openText:{type:String,default:"$vuetify.open"},eager:Boolean,hideNoData:Boolean,hideSelected:Boolean,listProps:{type:Object},menu:Boolean,menuIcon:{type:te,default:"$dropdown"},menuProps:{type:Object},multiple:Boolean,noDataText:{type:String,default:"$vuetify.noDataText"},openOnClear:Boolean,itemColor:String,...yt({itemChildren:!1})},"Select"),Gn=F({...$n(),...ve(Vt({modelValue:null,role:"combobox"}),["validationValue","dirty","appendInnerIcon"]),...Jt({transition:{component:ut}})},"VSelect"),Qn=W()({name:"VSelect",props:Gn(),emits:{"update:focused":e=>!0,"update:modelValue":e=>!0,"update:menu":e=>!0},setup(e,i){let{slots:t}=i;const{t:n}=qt(),l=R(),a=R(),o=R(),u=ne(e,"menu"),r=p({get:()=>u.value,set:s=>{var h;u.value&&!s&&((h=a.value)!=null&&h.ΨopenChildren.size)||(u.value=s)}}),{items:f,transformIn:k,transformOut:w}=Pn(e),y=ne(e,"modelValue",[],s=>k(s===null?[null]:Pe(s)),s=>{const h=w(s);return e.multiple?h:h[0]??null}),c=p(()=>typeof e.counterValue=="function"?e.counterValue(y.value):typeof e.counterValue=="number"?e.counterValue:y.value.length),v=Ct(),g=p(()=>y.value.map(s=>s.value)),d=N(!1),S=p(()=>r.value?e.closeText:e.openText);let V="",P;const I=p(()=>e.hideSelected?f.value.filter(s=>!y.value.some(h=>e.valueComparator(h,s))):f.value),O=p(()=>e.hideNoData&&!I.value.length||e.readonly||(v==null?void 0:v.isReadonly.value)),Q=p(()=>{var s;return{...e.menuProps,activatorProps:{...((s=e.menuProps)==null?void 0:s.activatorProps)||{},"aria-haspopup":"listbox"}}}),L=R(),ee=Kn(L,l);function X(s){e.openOnClear&&(r.value=!0)}function q(){O.value||(r.value=!r.value)}function _(s){_e(s)&&T(s)}function T(s){var U,C;if(!s.key||e.readonly||v!=null&&v.isReadonly.value)return;["Enter"," ","ArrowDown","ArrowUp","Home","End"].includes(s.key)&&s.preventDefault(),["Enter","ArrowDown"," "].includes(s.key)&&(r.value=!0),["Escape","Tab"].includes(s.key)&&(r.value=!1),s.key==="Home"?(U=L.value)==null||U.focus("first"):s.key==="End"&&((C=L.value)==null||C.focus("last"));const h=1e3;if(e.multiple||!_e(s))return;const b=performance.now();b-P>h&&(V=""),V+=s.key.toLowerCase(),P=b;const A=f.value.find(B=>B.title.toLowerCase().startsWith(V));if(A!==void 0){y.value=[A];const B=I.value.indexOf(A);we&&window.requestAnimationFrame(()=>{var E;B>=0&&((E=o.value)==null||E.scrollToIndex(B))})}}function H(s){let h=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;if(!s.props.disabled)if(e.multiple){const b=y.value.findIndex(U=>e.valueComparator(U.value,s.value)),A=h??!~b;if(~b){const U=A?[...y.value,s]:[...y.value];U.splice(b,1),y.value=U}else A&&(y.value=[...y.value,s])}else{const b=h!==!1;y.value=b?[s]:[],Le(()=>{r.value=!1})}}function oe(s){var h;(h=L.value)!=null&&h.$el.contains(s.relatedTarget)||(r.value=!1)}function z(){var s;e.eager&&((s=o.value)==null||s.calculateVisibleItems())}function se(){var s;d.value&&((s=l.value)==null||s.focus())}function ue(s){d.value=!0}function ae(s){if(s==null)y.value=[];else if(je(l.value,":autofill")||je(l.value,":-webkit-autofill")){const h=f.value.find(b=>b.title===s);h&&H(h)}else l.value&&(l.value.value="")}return Z(r,()=>{if(!e.hideSelected&&r.value&&y.value.length){const s=I.value.findIndex(h=>y.value.some(b=>e.valueComparator(b.value,h.value)));we&&window.requestAnimationFrame(()=>{var h;s>=0&&((h=o.value)==null||h.scrollToIndex(s))})}}),Z(()=>e.items,(s,h)=>{r.value||d.value&&!h.length&&s.length&&(r.value=!0)}),J(()=>{const s=!!(e.chips||t.chip),h=!!(!e.hideNoData||I.value.length||t["prepend-item"]||t["append-item"]||t["no-data"]),b=y.value.length>0,A=Me.filterProps(e),U=b||!d.value&&e.label&&!e.persistentPlaceholder?void 0:e.placeholder;return m(Me,G({ref:l},A,{modelValue:y.value.map(C=>C.props.value).join(", "),"onUpdate:modelValue":ae,focused:d.value,"onUpdate:focused":C=>d.value=C,validationValue:y.externalValue,counterValue:c.value,dirty:b,class:["v-select",{"v-select--active-menu":r.value,"v-select--chips":!!e.chips,[`v-select--${e.multiple?"multiple":"single"}`]:!0,"v-select--selected":y.value.length,"v-select--selection-slot":!!t.selection},e.class],style:e.style,inputmode:"none",placeholder:U,"onClick:clear":X,"onMousedown:control":q,onBlur:oe,onKeydown:T,"aria-label":n(S.value),title:n(S.value)}),{...t,default:()=>m(le,null,[m(En,G({ref:a,modelValue:r.value,"onUpdate:modelValue":C=>r.value=C,activator:"parent",contentClass:"v-select__content",disabled:O.value,eager:e.eager,maxHeight:310,openOnClick:!1,closeOnContentClick:!1,transition:e.transition,onAfterEnter:z,onAfterLeave:se},Q.value),{default:()=>[h&&m(On,G({ref:L,selected:g.value,selectStrategy:e.multiple?"independent":"single-independent",onMousedown:C=>C.preventDefault(),onKeydown:_,onFocusin:ue,tabindex:"-1","aria-live":"polite",color:e.itemColor??e.color},ee,e.listProps),{default:()=>{var C,B,E;return[(C=t["prepend-item"])==null?void 0:C.call(t),!I.value.length&&!e.hideNoData&&(((B=t["no-data"])==null?void 0:B.call(t))??m(Se,{title:n(e.noDataText)},null)),m(Un,{ref:o,renderless:!0,items:I.value},{default:$=>{var De;let{item:j,index:D,itemRef:K}=$;const Ee=G(j.props,{ref:K,key:D,onClick:()=>H(j,null)});return((De=t.item)==null?void 0:De.call(t,{item:j,index:D,props:Ee}))??m(Se,G(Ee,{role:"option"}),{prepend:St=>{let{isSelected:pt}=St;return m(le,null,[e.multiple&&!e.hideSelected?m(on,{key:j.value,modelValue:pt,ripple:!1,tabindex:"-1"},null):void 0,j.props.prependAvatar&&m(Ve,{image:j.props.prependAvatar},null),j.props.prependIcon&&m(be,{icon:j.props.prependIcon},null)])}})}}),(E=t["append-item"])==null?void 0:E.call(t)]}})]}),y.value.map((C,B)=>{function E(K){K.stopPropagation(),K.preventDefault(),H(C,!1)}const $={"onClick:close":E,onKeydown(K){K.key!=="Enter"&&K.key!==" "||(K.preventDefault(),K.stopPropagation(),E(K))},onMousedown(K){K.preventDefault(),K.stopPropagation()},modelValue:!0,"onUpdate:modelValue":void 0},j=s?!!t.chip:!!t.selection,D=j?zt(s?t.chip({item:C,index:B,props:$}):t.selection({item:C,index:B})):void 0;if(!(j&&!D))return m("div",{key:C.value,class:"v-select__selection"},[s?t.chip?m(ce,{key:"chip-defaults",defaults:{VChip:{closable:e.closableChips,size:"small",text:C.title}}},{default:()=>[D]}):m(tn,G({key:"chip",closable:e.closableChips,size:"small",text:C.title,disabled:C.props.disabled},$),null):D??m("span",{class:"v-select__selection-text"},[C.title,e.multiple&&B<y.value.length-1&&m("span",{class:"v-select__selection-comma"},[Wt(",")])])])})]),"append-inner":function(){var $;for(var C=arguments.length,B=new Array(C),E=0;E<C;E++)B[E]=arguments[E];return m(le,null,[($=t["append-inner"])==null?void 0:$.call(t,...B),e.menuIcon?m(be,{class:"v-select__menu-icon",icon:e.menuIcon},null):void 0])}})}),$e({isFocused:d,menu:r,select:H},l)}});export{On as V,Se as a,kn as b,Qn as c};