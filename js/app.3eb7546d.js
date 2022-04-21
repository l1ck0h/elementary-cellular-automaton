(function(){"use strict";var e={5076:function(e,t,n){var r=n(9963),a=n(6252);const l={id:"app__container",class:"el-cover el-cover--space:ms-1 el-cover--minHeight:100%"},i={ref:"sketchIn__container",class:"sketchIn__container"},s={ref:"sketchIn",class:"sketchIn el-cover__centered el-center el-center--gutters:0"};function o(e,t,n,r,o,u){const c=(0,a.up)("TheHeaderChild"),d=(0,a.up)("TheFooterChild"),p=(0,a.up)("TheDialogRule");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a._)("div",l,[(0,a._)("header",null,[(0,a.Wm)(c)]),(0,a._)("main",i,[(0,a._)("canvas",s,null,512)],512),(0,a._)("footer",null,[(0,a.Wm)(d)])]),(0,a.Wm)(p)],64)}const u=e=>((0,a.dD)("data-v-377cfb5f"),e=e(),(0,a.Cn)(),e),c={class:"the-header-child el-center"},d={class:"the-header-child__container el-cluster el-cluster--justify:space-between"},p=u((()=>(0,a._)("h1",{class:"the-header-child__brand"},"ECA",-1))),h={class:"the-header-child__statuses el-cluster"};function m(e,t,n,r,l,i){const s=(0,a.up)("BaseStatus");return(0,a.wg)(),(0,a.iD)("div",c,[(0,a._)("div",d,[p,(0,a._)("div",h,[(0,a.Wm)(s,(0,a.dG)({title:"INIT STATE"},e.state),null,16),(0,a.Wm)(s,(0,a.dG)({title:"RULE"},e.rule),null,16)])])])}var g=n(3577);function v(e,t,n,r,l,i){return(0,a.wg)(),(0,a.iD)("div",{class:(0,g.C_)(["base-status el-box el-box--invert el-box--padding:0 nes-text",{"base-status--highlight":n.highlight,"app-util-clickable":r.isClickable}])},[(0,a._)("div",{class:"el-center el-center--gutters:ms-1",onClick:t[0]||(t[0]=t=>e.$emit("onclick"))},[(0,a._)("div",null,(0,g.zw)(n.title),1),(0,a._)("div",null,(0,g.zw)(n.content),1)])],2)}var _=n(2262),f={name:"BaseStatus",emits:["onclick"],props:{title:{type:String,required:!0},content:{type:String,required:!0},highlight:{type:Boolean,required:!1}},setup(e,t){return{isClickable:(0,_.iH)(t.attrs.onclick)}}},b=n(3744);const k=(0,b.Z)(f,[["render",v],["__scopeId","data-v-7f2ebbbc"]]);var w=k,I=n(3907);const y=Symbol(),S={RuleType:"RuleType",RuleNumber:"RuleNumber",InitState:"InitState",OpenedDialog:"OpenedDialog"},D={UpdateRuleType:"UpdateRuleType",InputRuleNumber:"InputRuleNumber",UpdateInitState:"UpdateInitState",OpenDialog:"OpenDialog"},R=(0,I.MT)({state:{ruleType:"random",ruleNumber:"30",initState:"single",openedDialog:"none"},getters:{[S.RuleType](e){return e.ruleType},[S.RuleNumber](e){return e.ruleNumber},[S.InitState](e){return e.initState},[S.OpenedDialog](e){return e.openedDialog}},mutations:{[D.UpdateRuleType](e,t){e.ruleType=t},[D.InputRuleNumber](e,t){e.ruleNumber=t},[D.UpdateInitState](e){switch(e.initState){case"single":e.initState="random";break;case"random":e.initState="single";break}},[D.OpenDialog](e,t){e.openedDialog=t}},actions:{},modules:{}});var T=n(2482);n(8675),n(3462);class C{constructor(e,t,n){(0,T.Z)(this,"_rule",void 0),(0,T.Z)(this,"_state",void 0),(0,T.Z)(this,"_spaceSize",void 0),(0,T.Z)(this,"_gen",void 0),this._rule=e,this._state=t,this._spaceSize=t.length,this._gen=n}generate(){const e=this._state.map(((e,t)=>{const n=this._state[t>0?t-1:this._spaceSize-1],r=e,a=this._state[(t+1)%this._spaceSize],l=4*n+2*r+1*a;return this._rule>>l&1?1:0}));return this._state=e,this._gen++,new C(this._rule,this._state,this._gen)}get state(){return this._state}get gen(){return this._gen}}const O=(e,t,n)=>{let r=new Int8Array(t);switch(n){case"single":r[~~(t/2)]=1;break;case"random":r=r.map((()=>Math.floor(2*Math.random())));break}return new C(e,r,1)},N=16,B=Math.floor(.9*N),{InitState:q,RuleNumber:U,RuleType:V}=S,{InputRuleNumber:j}=D;let Z,x,F,H,M,W;const z=e=>e*N+(N-B)/2,A=()=>Z.clearRect(0,0,x,F),E=(e,t)=>{Z.fillStyle="#00933B",e.forEach(((e,n)=>{1===e&&Z.fillRect(z(n),z(t-1),B,B)}))},L=()=>{const{getters:e,commit:t}=(0,I.oR)(y),n=(0,_.iH)(),r=(0,_.iH)(),l=()=>{A(),"random"===e[V]&&t(j,Math.floor(256*Math.random()).toString()),W=O(Number(e[U]),H,e[q]),E(W.state,W.gen);while(!(W.gen>M))W=W.generate(),E(W.state,W.gen)},i=(e,t)=>{t.removeEventListener("click",l),A();const{clientWidth:n,clientHeight:r}=t;H=Math.floor(n/N),M=Math.floor(r/N),x=H*N,F=M*N,e.width=x,e.height=F,t.addEventListener("click",l)};return(0,a.bv)((()=>{const e=n.value,t=r.value;Z=e.getContext("2d"),window.addEventListener("resize",(()=>i(e,t))),i(e,t)})),{sketchIn:n,sketchIn__container:r}};var P=L;const{OpenedDialog:$,RuleNumber:G,RuleType:Y}=S,{OpenDialog:K,InputRuleNumber:J,UpdateRuleType:Q}=D,X=()=>{const{getters:e,commit:t}=(0,I.oR)(y),n=(0,a.Fl)((()=>e[$])),r=()=>t(K,"none"),l=(0,_.qj)([{value:"RANDOM"},{value:"INPUT",writeIn:!0}]),i=(0,a.Fl)({get:()=>e[Y].toUpperCase(),set:e=>t(Q,e.toLowerCase())}),s=(0,_.qj)({min:"0",max:"255",disabled:(0,a.Fl)((()=>"random"===e[Y]))}),o=(0,a.Fl)({get:()=>e[G],set:e=>t(J,e)});return{openedDialog:n,close:r,ruleItems:l,rulePicked:i,writeinAttrs:s,writeinInput:o}};var ee=X;const{InitState:te,OpenedDialog:ne,RuleNumber:re}=S,{OpenDialog:ae,UpdateInitState:le}=D,ie=()=>{const{getters:e,commit:t}=(0,I.oR)(y),n=(0,_.qj)({content:(0,a.Fl)((()=>e[te].toUpperCase())),highlight:(0,a.Fl)((()=>"state"===e[ne])),onclick:()=>t(le)}),r=(0,_.qj)({content:(0,a.Fl)((()=>e[re])),highlight:(0,a.Fl)((()=>"rule"===e[ne])),onclick:()=>t(ae,"rule"!==e[ne]?"rule":"none")});return{state:n,rule:r}};var se=ie,oe={name:"TheHeaderChild",components:{BaseStatus:w},setup(){return se()}};const ue=(0,b.Z)(oe,[["render",m],["__scopeId","data-v-377cfb5f"]]);var ce=ue;const de={class:"the-footer-child el-center"},pe={class:"the-footer-child__container"},he=(0,a.Uk)(" / © 2022 l1ck0h");function me(e,t,n,r,l,i){const s=(0,a.up)("BaseLink");return(0,a.wg)(),(0,a.iD)("div",de,[(0,a._)("small",pe,[(0,a.Wm)(s,{url:"https://github.com/l1ck0h/elementary-cellular-automaton",label:"GitHub"}),he])])}const ge=["href"];function ve(e,t,n,r,l,i){return(0,a.wg)(),(0,a.iD)("a",{class:"base-link",href:n.url,target:"_blank",rel:"noopener noreferrer"},(0,g.zw)(n.label),9,ge)}var _e={name:"BaseLink",props:{url:{type:String,required:!0},label:{type:String,required:!0}}};const fe=(0,b.Z)(_e,[["render",ve],["__scopeId","data-v-b5dc2084"]]);var be=fe,ke={name:"TheFooterChild",components:{BaseLink:be}};const we=(0,b.Z)(ke,[["render",me],["__scopeId","data-v-6383439e"]]);var Ie=we;function ye(e,t,n,r,l,i){const s=(0,a.up)("BaseInputRange"),o=(0,a.up)("BaseSetting"),u=(0,a.up)("BaseDialog");return"rule"===r.openedDialog?((0,a.wg)(),(0,a.j4)(u,{key:0,onClose:r.close},{default:(0,a.w5)((()=>[(0,a.Wm)(o,{modelValue:r.rulePicked,"onUpdate:modelValue":t[1]||(t[1]=e=>r.rulePicked=e),title:"RULE",name:"rule-select",items:r.ruleItems},{default:(0,a.w5)((()=>[(0,a.Wm)(s,{modelValue:r.writeinInput,"onUpdate:modelValue":t[0]||(t[0]=e=>r.writeinInput=e),attrs:r.writeinAttrs},null,8,["modelValue","attrs"])])),_:1},8,["modelValue","items"])])),_:1},8,["onClose"])):(0,a.kq)("",!0)}const Se={class:"base-dialog__wrapper el-imposter"};function De(e,t,n,l,i,s){return(0,a.wg)(),(0,a.iD)("div",{class:"base-dialog__overlay",onClick:t[2]||(t[2]=(0,r.iM)((t=>e.$emit("close")),["self"]))},[(0,a._)("div",Se,[(0,a._)("div",{class:"base-dialog",onClick:t[1]||(t[1]=(0,r.iM)((t=>e.$emit("close")),["self"]))},[(0,a._)("i",{class:"base-dialog__close nes-icon close is-small",onClick:t[0]||(t[0]=t=>e.$emit("close"))}),(0,a.WI)(e.$slots,"default",{},void 0,!0)])])])}var Re={name:"BaseDialog",emits:["close"]};const Te=(0,b.Z)(Re,[["render",De],["__scopeId","data-v-2f9f5777"]]);var Ce=Te;const Oe=["value"];function Ne(e,t,n,r,l,i){return(0,a.wg)(),(0,a.iD)("input",(0,a.dG)({class:"input-range",type:"range"},n.attrs,{value:n.modelValue,onInput:t[0]||(t[0]=t=>e.$emit("update:modelValue",t.target.value))}),null,16,Oe)}var Be={name:"BaseInputRange",emits:["update:modelValue"],props:{attrs:{type:Object,required:!1},modelValue:{type:String,required:!0}}};const qe=(0,b.Z)(Be,[["render",Ne]]);var Ue=qe;const Ve={class:"base-setting nes-container is-rounded with-title is-dark"},je={class:"title"},Ze={class:"el-center"},xe={class:"el-box el-box--invert"},Fe={class:"el-stack",style:{"--space":"var(--ms-1)"}},He=["name","value","checked"],Me={class:"app-util-clickable"};function We(e,t,n,r,l,i){return(0,a.wg)(),(0,a.iD)("div",Ve,[(0,a._)("span",je,(0,g.zw)(n.title),1),(0,a._)("div",Ze,[(0,a._)("div",xe,[(0,a._)("div",Fe,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(n.items,((r,l)=>((0,a.wg)(),(0,a.iD)("label",{key:l,class:"el-stack"},[(0,a._)("input",{type:"radio",class:"nes-radio is-dark",name:n.name,value:r.value,checked:r.value===n.modelValue,onChange:t[0]||(t[0]=t=>e.$emit("update:modelValue",t.target.value))},null,40,He),(0,a._)("span",Me,(0,g.zw)(r.value),1),r.writeIn?(0,a.WI)(e.$slots,"default",{key:0},void 0,!0):(0,a.kq)("",!0)])))),128))])])])])}var ze={name:"BaseSetting",emits:["update:modelValue"],props:{title:{type:String,required:!0},name:{type:String,required:!0},items:Array,modelValue:{type:String,required:!0}}};const Ae=(0,b.Z)(ze,[["render",We],["__scopeId","data-v-0dad6b7a"]]);var Ee=Ae,Le={name:"TheDialogRule",components:{BaseDialog:Ce,BaseInputRange:Ue,BaseSetting:Ee},setup(){const{openedDialog:e,close:t,ruleItems:n,rulePicked:r,writeinAttrs:a,writeinInput:l}=ee();return{openedDialog:e,close:t,ruleItems:n,rulePicked:r,writeinAttrs:a,writeinInput:l}}};const Pe=(0,b.Z)(Le,[["render",ye]]);var $e=Pe,Ge={name:"App",components:{TheHeaderChild:ce,TheFooterChild:Ie,TheDialogRule:$e},setup(){return P()}};const Ye=(0,b.Z)(Ge,[["render",o]]);var Ke=Ye;(0,r.ri)(Ke).use(R,y).mount("#app")}},t={};function n(r){var a=t[r];if(void 0!==a)return a.exports;var l=t[r]={exports:{}};return e[r](l,l.exports,n),l.exports}n.m=e,function(){var e=[];n.O=function(t,r,a,l){if(!r){var i=1/0;for(c=0;c<e.length;c++){r=e[c][0],a=e[c][1],l=e[c][2];for(var s=!0,o=0;o<r.length;o++)(!1&l||i>=l)&&Object.keys(n.O).every((function(e){return n.O[e](r[o])}))?r.splice(o--,1):(s=!1,l<i&&(i=l));if(s){e.splice(c--,1);var u=a();void 0!==u&&(t=u)}}return t}l=l||0;for(var c=e.length;c>0&&e[c-1][2]>l;c--)e[c]=e[c-1];e[c]=[r,a,l]}}(),function(){n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={143:0};n.O.j=function(t){return 0===e[t]};var t=function(t,r){var a,l,i=r[0],s=r[1],o=r[2],u=0;if(i.some((function(t){return 0!==e[t]}))){for(a in s)n.o(s,a)&&(n.m[a]=s[a]);if(o)var c=o(n)}for(t&&t(r);u<i.length;u++)l=i[u],n.o(e,l)&&e[l]&&e[l][0](),e[l]=0;return n.O(c)},r=self["webpackChunkelementary_cellular_automaton"]=self["webpackChunkelementary_cellular_automaton"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(5076)}));r=n.O(r)})();
//# sourceMappingURL=app.3eb7546d.js.map