(function(){"use strict";var e={8802:function(e,t,n){var r=n(9963),a=n(6252);const l={id:"app__container",class:"el-cover el-cover--space:ms-1 el-cover--minHeight:100%"},i={ref:"sketchIn",class:"sketchIn el-cover__centered el-center el-center--gutters:0"};function s(e,t,n,r,s,o){const u=(0,a.up)("TheHeaderChild"),c=(0,a.up)("TheFooterChild"),d=(0,a.up)("TheDialogRule");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a._)("div",l,[(0,a._)("header",null,[(0,a.Wm)(u)]),(0,a._)("canvas",i,null,512),(0,a._)("footer",null,[(0,a.Wm)(c)])]),(0,a.Wm)(d)],64)}const o=e=>((0,a.dD)("data-v-0bccc0e2"),e=e(),(0,a.Cn)(),e),u={class:"the-header-child el-center"},c={class:"the-header-child__container el-cluster el-cluster--justify:space-between"},d=o((()=>(0,a._)("h1",{class:"the-header-child__brand"},"ECA",-1))),p={class:"the-header-child__statuses el-cluster"};function h(e,t,n,r,l,i){const s=(0,a.up)("BaseStatus");return(0,a.wg)(),(0,a.iD)("div",u,[(0,a._)("div",c,[d,(0,a._)("div",p,[(0,a.Wm)(s,(0,a.dG)({title:"INIT STATE"},e.state),null,16),(0,a.Wm)(s,(0,a.dG)({title:"RULE"},e.rule),null,16)])])])}var m=n(3577);function g(e,t,n,r,l,i){return(0,a.wg)(),(0,a.iD)("div",{class:(0,m.C_)(["base-status el-box el-box--invert el-box--padding:0 nes-text",{"app-util-highlight":n.highlight,"app-util-clickable":r.isClickable}])},[(0,a._)("div",{class:"el-center el-center--gutters:ms-1",onClick:t[0]||(t[0]=t=>e.$emit("onclick"))},[(0,a._)("div",null,(0,m.zw)(n.title),1),(0,a._)("div",null,(0,m.zw)(n.content),1)])],2)}var v=n(2262),_={name:"BaseStatus",emits:["onclick"],props:{title:{type:String,required:!0},content:{type:String,required:!0},highlight:{type:Boolean,required:!1}},setup(e,{attrs:t}){return{isClickable:(0,v.iH)(t.onclick)}}},f=n(3744);const b=(0,f.Z)(_,[["render",g],["__scopeId","data-v-7dbe4a02"]]);var w=b,k=n(3907);const y=Symbol(),I={RuleType:"RuleType",RuleNumber:"RuleNumber",InitState:"InitState",OpenedDialog:"OpenedDialog"},S={UpdateRuleType:"UpdateRuleType",InputRuleNumber:"InputRuleNumber",UpdateInitState:"UpdateInitState",OpenDialog:"OpenDialog"},D=(0,k.MT)({state:{ruleType:"random",ruleNumber:"30",initState:"single",openedDialog:"none"},getters:{[I.RuleType](e){return e.ruleType},[I.RuleNumber](e){return e.ruleNumber},[I.InitState](e){return e.initState},[I.OpenedDialog](e){return e.openedDialog}},mutations:{[S.UpdateRuleType](e,t){e.ruleType=t},[S.InputRuleNumber](e,t){e.ruleNumber=t},[S.UpdateInitState](e){switch(e.initState){case"single":e.initState="random";break;case"random":e.initState="single";break}},[S.OpenDialog](e,t){e.openedDialog=t}},actions:{},modules:{}});var R=n(2482);n(8675),n(3462);class T{constructor(e,t,n){(0,R.Z)(this,"_rule",void 0),(0,R.Z)(this,"_state",void 0),(0,R.Z)(this,"_spaceSize",void 0),(0,R.Z)(this,"_gen",void 0),this._rule=e,this._state=t,this._spaceSize=t.length,this._gen=n}generate(){const e=this._state.map(((e,t)=>{const n=this._state[t>0?t-1:this._spaceSize-1],r=e,a=this._state[(t+1)%this._spaceSize],l=4*n+2*r+1*a;return this._rule>>l&1?1:0}));return this._state=e,this._gen++,new T(this._rule,this._state,this._gen)}get state(){return this._state}get gen(){return this._gen}}const C=(e,t,n)=>{let r=new Int8Array(t);switch(n){case"single":r[~~(t/2)]=1;break;case"random":r=r.map((()=>Math.floor(2*Math.random())));break}return new T(e,r,1)},O=()=>{const{getters:e,commit:t}=(0,k.oR)(y),{InitState:n,RuleNumber:r,RuleType:l}=I,{InputRuleNumber:i}=S,s=(0,v.iH)();return(0,a.bv)((()=>{const a=8,o=.95,u="#00933B";let c,d,p,h,m,g,v;const _=s.value,f=()=>c.clearRect(0,0,d,p),b=()=>{clearTimeout(v),v=setTimeout((()=>{f();const e=_.clientWidth,t=_.clientHeight;h=Math.floor(e/a),m=Math.floor(t/a)-1,d=h*a,p=m*a,_.setAttribute("width",d.toString()),_.setAttribute("height",p.toString())}),1e3)},w=(e,t)=>{e.forEach(((e,n)=>{1===e&&(c.fillStyle=u,c.fillRect(n*a,(t-1)*a,a*o,a*o))}))},k=()=>{f(),"random"===e[l]&&t(i,Math.floor(256*Math.random()).toString()),g=C(Number(e[r]),h,e[n]),w(g.state,g.gen);while(!(g.gen>m))g=g.generate(),w(g.state,g.gen)};b(),c=_.getContext("2d"),window.addEventListener("resize",b),window.addEventListener("orientationchange",(()=>dispatchEvent(new Event("resize")))),_.addEventListener("click",k)})),s};var N=O;const B=()=>{const{getters:e,commit:t}=(0,k.oR)(y),{OpenedDialog:n,RuleNumber:r,RuleType:l}=I,{OpenDialog:i,InputRuleNumber:s,UpdateRuleType:o}=S,u=(0,a.Fl)((()=>e[n])),c=()=>t(i,"none"),d=(0,v.qj)([{value:"RANDOM"},{value:"INPUT",writeIn:!0}]),p=(0,a.Fl)({get:()=>e[l].toUpperCase(),set:e=>t(o,e.toLowerCase())}),h=(0,v.qj)({min:"0",max:"255",disabled:(0,a.Fl)((()=>"random"===e[l]))}),m=(0,a.Fl)({get:()=>e[r],set:e=>t(s,e)});return{openedDialog:u,close:c,ruleItems:d,rulePicked:p,writeinAttrs:h,writeinInput:m}};var q=B;const U=()=>{const{getters:e,commit:t}=(0,k.oR)(y),{InitState:n,OpenedDialog:r,RuleNumber:l}=I,{OpenDialog:i,UpdateInitState:s}=S,o=(0,v.qj)({content:(0,a.Fl)((()=>e[n].toUpperCase())),highlight:(0,a.Fl)((()=>"state"===e[r])),onclick:()=>t(s)}),u=(0,v.qj)({content:(0,a.Fl)((()=>e[l])),highlight:(0,a.Fl)((()=>"rule"===e[r])),onclick:()=>t(i,"rule"!==e[r]?"rule":"none")});return{state:o,rule:u}};var V=U,j={name:"TheHeaderChild",components:{BaseStatus:w},setup(){return V()}};const Z=(0,f.Z)(j,[["render",h],["__scopeId","data-v-0bccc0e2"]]);var x=Z;const A={class:"the-footer-child el-center"},F={class:"the-footer-child__container"},z=(0,a.Uk)(" / © 2022 l1ck0h");function E(e,t,n,r,l,i){const s=(0,a.up)("BaseLink");return(0,a.wg)(),(0,a.iD)("div",A,[(0,a._)("small",F,[(0,a.Wm)(s,{url:"https://github.com/l1ck0h/elementary-cellular-automaton",label:"GitHub"}),z])])}const W=["href"];function H(e,t,n,r,l,i){return(0,a.wg)(),(0,a.iD)("a",{class:"base-link",href:n.url,target:"_blank",rel:"noopener noreferrer"},(0,m.zw)(n.label),9,W)}var M={name:"BaseLink",props:{url:{type:String,required:!0},label:{type:String,required:!0}}};const L=(0,f.Z)(M,[["render",H],["__scopeId","data-v-b5dc2084"]]);var P=L,$={name:"TheFooterChild",components:{BaseLink:P}};const G=(0,f.Z)($,[["render",E],["__scopeId","data-v-6383439e"]]);var Y=G;function K(e,t,n,r,l,i){const s=(0,a.up)("BaseInputRange"),o=(0,a.up)("BaseSetting"),u=(0,a.up)("BaseDialog");return"rule"===r.openedDialog?((0,a.wg)(),(0,a.j4)(u,{key:0,onClose:r.close},{default:(0,a.w5)((()=>[(0,a.Wm)(o,{modelValue:r.rulePicked,"onUpdate:modelValue":t[1]||(t[1]=e=>r.rulePicked=e),title:"RULE",name:"rule-select",items:r.ruleItems},{default:(0,a.w5)((()=>[(0,a.Wm)(s,{modelValue:r.writeinInput,"onUpdate:modelValue":t[0]||(t[0]=e=>r.writeinInput=e),attrs:r.writeinAttrs},null,8,["modelValue","attrs"])])),_:1},8,["modelValue","items"])])),_:1},8,["onClose"])):(0,a.kq)("",!0)}const J={class:"base-dialog__wrapper el-imposter"};function Q(e,t,n,l,i,s){return(0,a.wg)(),(0,a.iD)("div",{class:"base-dialog__overlay",onClick:t[2]||(t[2]=(0,r.iM)((t=>e.$emit("close")),["self"]))},[(0,a._)("div",J,[(0,a._)("div",{class:"base-dialog",onClick:t[1]||(t[1]=(0,r.iM)((t=>e.$emit("close")),["self"]))},[(0,a._)("i",{class:"base-dialog__close nes-icon close is-small",onClick:t[0]||(t[0]=t=>e.$emit("close"))}),(0,a.WI)(e.$slots,"default",{},void 0,!0)])])])}var X={name:"BaseDialog",emits:["close"]};const ee=(0,f.Z)(X,[["render",Q],["__scopeId","data-v-2f9f5777"]]);var te=ee;const ne=["value"];function re(e,t,n,r,l,i){return(0,a.wg)(),(0,a.iD)("input",(0,a.dG)({class:"input-range",type:"range"},n.attrs,{value:n.modelValue,onInput:t[0]||(t[0]=t=>e.$emit("update:modelValue",t.target.value))}),null,16,ne)}var ae={name:"BaseInputRange",emits:["update:modelValue"],props:{attrs:{type:Object,required:!1},modelValue:{type:String,required:!0}}};const le=(0,f.Z)(ae,[["render",re]]);var ie=le;const se={class:"base-setting nes-container is-rounded with-title is-dark"},oe={class:"title"},ue={class:"el-center"},ce={class:"el-box el-box--invert"},de={class:"el-stack",style:{"--space":"var(--ms-1)"}},pe=["name","value","checked"],he={class:"app-util-clickable"};function me(e,t,n,r,l,i){return(0,a.wg)(),(0,a.iD)("div",se,[(0,a._)("span",oe,(0,m.zw)(n.title),1),(0,a._)("div",ue,[(0,a._)("div",ce,[(0,a._)("div",de,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(n.items,((r,l)=>((0,a.wg)(),(0,a.iD)("label",{key:l,class:"el-stack"},[(0,a._)("input",{type:"radio",class:"nes-radio is-dark",name:n.name,value:r.value,checked:r.value===n.modelValue,onChange:t[0]||(t[0]=t=>e.$emit("update:modelValue",t.target.value))},null,40,pe),(0,a._)("span",he,(0,m.zw)(r.value),1),r.writeIn?(0,a.WI)(e.$slots,"default",{key:0},void 0,!0):(0,a.kq)("",!0)])))),128))])])])])}var ge={name:"BaseSetting",emits:["update:modelValue"],props:{title:{type:String,required:!0},name:{type:String,required:!0},items:Array,modelValue:{type:String,required:!0}}};const ve=(0,f.Z)(ge,[["render",me],["__scopeId","data-v-6a0cc35e"]]);var _e=ve,fe={name:"TheDialogRule",components:{BaseDialog:te,BaseInputRange:ie,BaseSetting:_e},setup(){const{openedDialog:e,close:t,ruleItems:n,rulePicked:r,writeinAttrs:a,writeinInput:l}=q();return{openedDialog:e,close:t,ruleItems:n,rulePicked:r,writeinAttrs:a,writeinInput:l}}};const be=(0,f.Z)(fe,[["render",K]]);var we=be,ke={name:"App",components:{TheHeaderChild:x,TheFooterChild:Y,TheDialogRule:we},setup(){const e=N();return{sketchIn:e}}};const ye=(0,f.Z)(ke,[["render",s]]);var Ie=ye;(0,r.ri)(Ie).use(D,y).mount("#app")}},t={};function n(r){var a=t[r];if(void 0!==a)return a.exports;var l=t[r]={exports:{}};return e[r](l,l.exports,n),l.exports}n.m=e,function(){var e=[];n.O=function(t,r,a,l){if(!r){var i=1/0;for(c=0;c<e.length;c++){r=e[c][0],a=e[c][1],l=e[c][2];for(var s=!0,o=0;o<r.length;o++)(!1&l||i>=l)&&Object.keys(n.O).every((function(e){return n.O[e](r[o])}))?r.splice(o--,1):(s=!1,l<i&&(i=l));if(s){e.splice(c--,1);var u=a();void 0!==u&&(t=u)}}return t}l=l||0;for(var c=e.length;c>0&&e[c-1][2]>l;c--)e[c]=e[c-1];e[c]=[r,a,l]}}(),function(){n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={143:0};n.O.j=function(t){return 0===e[t]};var t=function(t,r){var a,l,i=r[0],s=r[1],o=r[2],u=0;if(i.some((function(t){return 0!==e[t]}))){for(a in s)n.o(s,a)&&(n.m[a]=s[a]);if(o)var c=o(n)}for(t&&t(r);u<i.length;u++)l=i[u],n.o(e,l)&&e[l]&&e[l][0](),e[l]=0;return n.O(c)},r=self["webpackChunkelementary_cellular_automaton"]=self["webpackChunkelementary_cellular_automaton"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(8802)}));r=n.O(r)})();
//# sourceMappingURL=app.c27d8588.js.map