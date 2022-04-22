(function(){"use strict";var e={66:function(e,t,n){var r=n(963),l=n(252);const a={id:"app__container",class:"el-cover el-cover--space:ms-1 el-cover--minHeight:100%"},i={ref:"sketchIn",class:"sketchIn el-cover__centered el-center el-center--gutters:0"};function s(e,t,n,r,s,o){const u=(0,l.up)("TheHeaderChild"),c=(0,l.up)("TheFooterChild"),d=(0,l.up)("TheDialogRule");return(0,l.wg)(),(0,l.iD)(l.HY,null,[(0,l._)("div",a,[(0,l._)("header",null,[(0,l.Wm)(u)]),(0,l._)("canvas",i,null,512),(0,l._)("footer",null,[(0,l.Wm)(c)])]),(0,l.Wm)(d)],64)}const o=e=>((0,l.dD)("data-v-377cfb5f"),e=e(),(0,l.Cn)(),e),u={class:"the-header-child el-center"},c={class:"the-header-child__container el-cluster el-cluster--justify:space-between"},d=o((()=>(0,l._)("h1",{class:"the-header-child__brand"},"ECA",-1))),p={class:"the-header-child__statuses el-cluster"};function h(e,t,n,r,a,i){const s=(0,l.up)("BaseStatus");return(0,l.wg)(),(0,l.iD)("div",u,[(0,l._)("div",c,[d,(0,l._)("div",p,[(0,l.Wm)(s,(0,l.dG)({title:"INIT STATE"},e.state),null,16),(0,l.Wm)(s,(0,l.dG)({title:"RULE"},e.rule),null,16)])])])}var m=n(577);function g(e,t,n,r,a,i){return(0,l.wg)(),(0,l.iD)("div",{class:(0,m.C_)(["base-status el-box el-box--invert el-box--padding:0 nes-text",{"base-status--highlight":n.highlight,"app-util-clickable":r.isClickable}])},[(0,l._)("div",{class:"el-center el-center--gutters:ms-1",onClick:t[0]||(t[0]=t=>e.$emit("onclick"))},[(0,l._)("div",null,(0,m.zw)(n.title),1),(0,l._)("div",null,(0,m.zw)(n.content),1)])],2)}var v=n(262),_={name:"BaseStatus",emits:["onclick"],props:{title:{type:String,required:!0},content:{type:String,required:!0},highlight:{type:Boolean,required:!1}},setup(e,t){return{isClickable:(0,v.iH)(t.attrs.onclick)}}},f=n(744);const b=(0,f.Z)(_,[["render",g],["__scopeId","data-v-7f2ebbbc"]]);var k=b,w=n(907);const y=Symbol(),I={RuleType:"RuleType",RuleNumber:"RuleNumber",InitState:"InitState",OpenedDialog:"OpenedDialog"},S={UpdateRuleType:"UpdateRuleType",InputRuleNumber:"InputRuleNumber",UpdateInitState:"UpdateInitState",OpenDialog:"OpenDialog"},D=(0,w.MT)({state:{ruleType:"random",ruleNumber:"30",initState:"single",openedDialog:"none"},getters:{[I.RuleType](e){return e.ruleType},[I.RuleNumber](e){return e.ruleNumber},[I.InitState](e){return e.initState},[I.OpenedDialog](e){return e.openedDialog}},mutations:{[S.UpdateRuleType](e,t){e.ruleType=t},[S.InputRuleNumber](e,t){e.ruleNumber=t},[S.UpdateInitState](e){switch(e.initState){case"single":e.initState="random";break;case"random":e.initState="single";break}},[S.OpenDialog](e,t){e.openedDialog=t}},actions:{},modules:{}});var R=n(482);class T{constructor(e,t,n){(0,R.Z)(this,"_rule",void 0),(0,R.Z)(this,"_state",void 0),(0,R.Z)(this,"_spaceSize",void 0),(0,R.Z)(this,"_gen",void 0),this._rule=e,this._state=t,this._spaceSize=t.length,this._gen=n}generate(){const e=this._state.map(((e,t)=>{const n=this._state[t>0?t-1:this._spaceSize-1],r=e,l=this._state[(t+1)%this._spaceSize],a=4*n+2*r+1*l;return this._rule>>a&1?1:0}));return this._state=e,this._gen++,new T(this._rule,this._state,this._gen)}get state(){return this._state}get gen(){return this._gen}}const C=(e,t,n)=>{let r=[];for(let l=0;l<t;l++)r.push(0);switch(n){case"single":r[~~(t/2)]=1;break;case"random":r=r.map((()=>Math.floor(2*Math.random())));break}return new T(e,r,1)},O=8,N=Math.floor(.9*O),B=100,{InitState:q,RuleNumber:U,RuleType:V}=I,{InputRuleNumber:j}=S;let Z,x,F,M,W,z,H;const A=e=>e*O+(O-N)/2,E=()=>Z.clearRect(0,0,x,F),L=(e,t)=>{Z.fillStyle="#00933B",e.forEach(((e,n)=>{1===e&&Z.fillRect(A(n),A(t-1),N,N)}))},P=()=>{const{getters:e,commit:t}=(0,w.oR)(y),n=(0,v.iH)(),r=()=>{E(),"random"===e[V]&&t(j,Math.floor(256*Math.random()).toString()),z=C(Number(e[U]),M,e[q]),L(z.state,z.gen);while(!(z.gen>W))z=z.generate(),L(z.state,z.gen)},a=e=>{clearTimeout(H),H=setTimeout((()=>{e.removeEventListener("click",r),E();const{clientWidth:t,clientHeight:n}=e;M=Math.floor(t/O),W=Math.floor(n/O),x=M*O,F=W*O,e.width=x,e.height=F,e.addEventListener("click",r)}),B)};return(0,l.bv)((()=>{const e=n.value;Z=e.getContext("2d"),window.addEventListener("resize",(()=>a(e))),a(e)})),{sketchIn:n}};var $=P;const{OpenedDialog:G,RuleNumber:Y,RuleType:K}=I,{OpenDialog:J,InputRuleNumber:Q,UpdateRuleType:X}=S,ee=()=>{const{getters:e,commit:t}=(0,w.oR)(y),n=(0,l.Fl)((()=>e[G])),r=()=>t(J,"none"),a=(0,v.qj)([{value:"RANDOM"},{value:"INPUT",writeIn:!0}]),i=(0,l.Fl)({get:()=>e[K].toUpperCase(),set:e=>t(X,e.toLowerCase())}),s=(0,v.qj)({min:"0",max:"255",disabled:(0,l.Fl)((()=>"random"===e[K]))}),o=(0,l.Fl)({get:()=>e[Y],set:e=>t(Q,e)});return{openedDialog:n,close:r,ruleItems:a,rulePicked:i,writeinAttrs:s,writeinInput:o}};var te=ee;const{InitState:ne,OpenedDialog:re,RuleNumber:le}=I,{OpenDialog:ae,UpdateInitState:ie}=S,se=()=>{const{getters:e,commit:t}=(0,w.oR)(y),n=(0,v.qj)({content:(0,l.Fl)((()=>e[ne].toUpperCase())),highlight:(0,l.Fl)((()=>"state"===e[re])),onclick:()=>t(ie)}),r=(0,v.qj)({content:(0,l.Fl)((()=>e[le])),highlight:(0,l.Fl)((()=>"rule"===e[re])),onclick:()=>t(ae,"rule"!==e[re]?"rule":"none")});return{state:n,rule:r}};var oe=se,ue={name:"TheHeaderChild",components:{BaseStatus:k},setup(){return oe()}};const ce=(0,f.Z)(ue,[["render",h],["__scopeId","data-v-377cfb5f"]]);var de=ce;const pe={class:"the-footer-child el-center"},he={class:"the-footer-child__container"},me=(0,l.Uk)(" / © 2022 l1ck0h");function ge(e,t,n,r,a,i){const s=(0,l.up)("BaseLink");return(0,l.wg)(),(0,l.iD)("div",pe,[(0,l._)("small",he,[(0,l.Wm)(s,{url:"https://github.com/l1ck0h/elementary-cellular-automaton",label:"GitHub"}),me])])}const ve=["href"];function _e(e,t,n,r,a,i){return(0,l.wg)(),(0,l.iD)("a",{class:"base-link",href:n.url,target:"_blank",rel:"noopener noreferrer"},(0,m.zw)(n.label),9,ve)}var fe={name:"BaseLink",props:{url:{type:String,required:!0},label:{type:String,required:!0}}};const be=(0,f.Z)(fe,[["render",_e],["__scopeId","data-v-b5dc2084"]]);var ke=be,we={name:"TheFooterChild",components:{BaseLink:ke}};const ye=(0,f.Z)(we,[["render",ge],["__scopeId","data-v-6383439e"]]);var Ie=ye;function Se(e,t,n,r,a,i){const s=(0,l.up)("BaseInputRange"),o=(0,l.up)("BaseSetting"),u=(0,l.up)("BaseDialog");return"rule"===r.openedDialog?((0,l.wg)(),(0,l.j4)(u,{key:0,onClose:r.close},{default:(0,l.w5)((()=>[(0,l.Wm)(o,{modelValue:r.rulePicked,"onUpdate:modelValue":t[1]||(t[1]=e=>r.rulePicked=e),title:"RULE",name:"rule-select",items:r.ruleItems},{default:(0,l.w5)((()=>[(0,l.Wm)(s,{modelValue:r.writeinInput,"onUpdate:modelValue":t[0]||(t[0]=e=>r.writeinInput=e),attrs:r.writeinAttrs},null,8,["modelValue","attrs"])])),_:1},8,["modelValue","items"])])),_:1},8,["onClose"])):(0,l.kq)("",!0)}const De={class:"base-dialog__wrapper el-imposter"};function Re(e,t,n,a,i,s){return(0,l.wg)(),(0,l.iD)("div",{class:"base-dialog__overlay",onClick:t[2]||(t[2]=(0,r.iM)((t=>e.$emit("close")),["self"]))},[(0,l._)("div",De,[(0,l._)("div",{class:"base-dialog",onClick:t[1]||(t[1]=(0,r.iM)((t=>e.$emit("close")),["self"]))},[(0,l._)("i",{class:"base-dialog__close nes-icon close is-small",onClick:t[0]||(t[0]=t=>e.$emit("close"))}),(0,l.WI)(e.$slots,"default",{},void 0,!0)])])])}var Te={name:"BaseDialog",emits:["close"]};const Ce=(0,f.Z)(Te,[["render",Re],["__scopeId","data-v-2f9f5777"]]);var Oe=Ce;const Ne=["value"];function Be(e,t,n,r,a,i){return(0,l.wg)(),(0,l.iD)("input",(0,l.dG)({class:"input-range",type:"range"},n.attrs,{value:n.modelValue,onInput:t[0]||(t[0]=t=>e.$emit("update:modelValue",t.target.value))}),null,16,Ne)}var qe={name:"BaseInputRange",emits:["update:modelValue"],props:{attrs:{type:Object,required:!1},modelValue:{type:String,required:!0}}};const Ue=(0,f.Z)(qe,[["render",Be]]);var Ve=Ue;const je={class:"base-setting nes-container is-rounded with-title is-dark"},Ze={class:"title"},xe={class:"el-center"},Fe={class:"el-box el-box--invert"},Me={class:"el-stack",style:{"--space":"var(--ms-1)"}},We=["name","value","checked"],ze={class:"app-util-clickable"};function He(e,t,n,r,a,i){return(0,l.wg)(),(0,l.iD)("div",je,[(0,l._)("span",Ze,(0,m.zw)(n.title),1),(0,l._)("div",xe,[(0,l._)("div",Fe,[(0,l._)("div",Me,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(n.items,((r,a)=>((0,l.wg)(),(0,l.iD)("label",{key:a,class:"el-stack"},[(0,l._)("input",{type:"radio",class:"nes-radio is-dark",name:n.name,value:r.value,checked:r.value===n.modelValue,onChange:t[0]||(t[0]=t=>e.$emit("update:modelValue",t.target.value))},null,40,We),(0,l._)("span",ze,(0,m.zw)(r.value),1),r.writeIn?(0,l.WI)(e.$slots,"default",{key:0},void 0,!0):(0,l.kq)("",!0)])))),128))])])])])}var Ae={name:"BaseSetting",emits:["update:modelValue"],props:{title:{type:String,required:!0},name:{type:String,required:!0},items:Array,modelValue:{type:String,required:!0}}};const Ee=(0,f.Z)(Ae,[["render",He],["__scopeId","data-v-0dad6b7a"]]);var Le=Ee,Pe={name:"TheDialogRule",components:{BaseDialog:Oe,BaseInputRange:Ve,BaseSetting:Le},setup(){const{openedDialog:e,close:t,ruleItems:n,rulePicked:r,writeinAttrs:l,writeinInput:a}=te();return{openedDialog:e,close:t,ruleItems:n,rulePicked:r,writeinAttrs:l,writeinInput:a}}};const $e=(0,f.Z)(Pe,[["render",Se]]);var Ge=$e,Ye={name:"App",components:{TheHeaderChild:de,TheFooterChild:Ie,TheDialogRule:Ge},setup(){return $()}};const Ke=(0,f.Z)(Ye,[["render",s]]);var Je=Ke;(0,r.ri)(Je).use(D,y).mount("#app")}},t={};function n(r){var l=t[r];if(void 0!==l)return l.exports;var a=t[r]={exports:{}};return e[r](a,a.exports,n),a.exports}n.m=e,function(){var e=[];n.O=function(t,r,l,a){if(!r){var i=1/0;for(c=0;c<e.length;c++){r=e[c][0],l=e[c][1],a=e[c][2];for(var s=!0,o=0;o<r.length;o++)(!1&a||i>=a)&&Object.keys(n.O).every((function(e){return n.O[e](r[o])}))?r.splice(o--,1):(s=!1,a<i&&(i=a));if(s){e.splice(c--,1);var u=l();void 0!==u&&(t=u)}}return t}a=a||0;for(var c=e.length;c>0&&e[c-1][2]>a;c--)e[c]=e[c-1];e[c]=[r,l,a]}}(),function(){n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={143:0};n.O.j=function(t){return 0===e[t]};var t=function(t,r){var l,a,i=r[0],s=r[1],o=r[2],u=0;if(i.some((function(t){return 0!==e[t]}))){for(l in s)n.o(s,l)&&(n.m[l]=s[l]);if(o)var c=o(n)}for(t&&t(r);u<i.length;u++)a=i[u],n.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return n.O(c)},r=self["webpackChunkelementary_cellular_automaton"]=self["webpackChunkelementary_cellular_automaton"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(66)}));r=n.O(r)})();
//# sourceMappingURL=app.29c06de6.js.map