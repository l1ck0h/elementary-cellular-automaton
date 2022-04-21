(function(){"use strict";var e={5076:function(e,t,n){n(6992),n(8674),n(9601),n(7727);var r=n(9963),i=n(6252),a={id:"app__container",class:"el-cover el-cover--space:ms-1 el-cover--minHeight:100%"},l={ref:"sketchIn__container",class:"sketchIn__container"},u={ref:"sketchIn",class:"sketchIn el-cover__centered el-center el-center--gutters:0"};function o(e,t,n,r,o,s){var c=(0,i.up)("TheHeaderChild"),d=(0,i.up)("TheFooterChild"),p=(0,i.up)("TheDialogRule");return(0,i.wg)(),(0,i.iD)(i.HY,null,[(0,i._)("div",a,[(0,i._)("header",null,[(0,i.Wm)(c)]),(0,i._)("main",l,[(0,i._)("canvas",u,null,512)],512),(0,i._)("footer",null,[(0,i.Wm)(d)])]),(0,i.Wm)(p)],64)}var s=function(e){return(0,i.dD)("data-v-377cfb5f"),e=e(),(0,i.Cn)(),e},c={class:"the-header-child el-center"},d={class:"the-header-child__container el-cluster el-cluster--justify:space-between"},p=s((function(){return(0,i._)("h1",{class:"the-header-child__brand"},"ECA",-1)})),f={class:"the-header-child__statuses el-cluster"};function h(e,t,n,r,a,l){var u=(0,i.up)("BaseStatus");return(0,i.wg)(),(0,i.iD)("div",c,[(0,i._)("div",d,[p,(0,i._)("div",f,[(0,i.Wm)(u,(0,i.dG)({title:"INIT STATE"},e.state),null,16),(0,i.Wm)(u,(0,i.dG)({title:"RULE"},e.rule),null,16)])])])}var m=n(3577);function g(e,t,n,r,a,l){return(0,i.wg)(),(0,i.iD)("div",{class:(0,m.C_)(["base-status el-box el-box--invert el-box--padding:0 nes-text",{"base-status--highlight":n.highlight,"app-util-clickable":r.isClickable}])},[(0,i._)("div",{class:"el-center el-center--gutters:ms-1",onClick:t[0]||(t[0]=function(t){return e.$emit("onclick")})},[(0,i._)("div",null,(0,m.zw)(n.title),1),(0,i._)("div",null,(0,m.zw)(n.content),1)])],2)}var v=n(2262),_={name:"BaseStatus",emits:["onclick"],props:{title:{type:String,required:!0},content:{type:String,required:!0},highlight:{type:Boolean,required:!1}},setup:function(e,t){return{isClickable:(0,v.iH)(t.attrs.onclick)}}},b=n(3744);const k=(0,b.Z)(_,[["render",g],["__scopeId","data-v-7f2ebbbc"]]);var w,y,I,S,D,R,T,C,O=k,Z=(n(1539),n(4747),n(9714),n(9653),n(3907)),N=n(2482),B=(n(2526),n(1817),Symbol()),q={RuleType:"RuleType",RuleNumber:"RuleNumber",InitState:"InitState",OpenedDialog:"OpenedDialog"},U={UpdateRuleType:"UpdateRuleType",InputRuleNumber:"InputRuleNumber",UpdateInitState:"UpdateInitState",OpenDialog:"OpenDialog"},M=(0,Z.MT)({state:{ruleType:"random",ruleNumber:"30",initState:"single",openedDialog:"none"},getters:(w={},(0,N.Z)(w,q.RuleType,(function(e){return e.ruleType})),(0,N.Z)(w,q.RuleNumber,(function(e){return e.ruleNumber})),(0,N.Z)(w,q.InitState,(function(e){return e.initState})),(0,N.Z)(w,q.OpenedDialog,(function(e){return e.openedDialog})),w),mutations:(y={},(0,N.Z)(y,U.UpdateRuleType,(function(e,t){e.ruleType=t})),(0,N.Z)(y,U.InputRuleNumber,(function(e,t){e.ruleNumber=t})),(0,N.Z)(y,U.UpdateInitState,(function(e){switch(e.initState){case"single":e.initState="random";break;case"random":e.initState="single";break}})),(0,N.Z)(y,U.OpenDialog,(function(e,t){e.openedDialog=t})),y),actions:{},modules:{}}),V=n(3087),j=n(2833),x=(n(1249),n(7145),n(8675),n(2990),n(8927),n(3105),n(5035),n(4345),n(7174),n(2846),n(4731),n(7209),n(6319),n(8867),n(7789),n(3739),n(9368),n(4483),n(2056),n(3462),n(678),n(7462),n(3824),n(5021),n(2974),n(5016),function(){function e(t,n,r){(0,V.Z)(this,e),(0,N.Z)(this,"_rule",void 0),(0,N.Z)(this,"_state",void 0),(0,N.Z)(this,"_spaceSize",void 0),(0,N.Z)(this,"_gen",void 0),this._rule=t,this._state=n,this._spaceSize=n.length,this._gen=r}return(0,j.Z)(e,[{key:"generate",value:function(){var t=this,n=this._state.map((function(e,n){var r=t._state[n>0?n-1:t._spaceSize-1],i=e,a=t._state[(n+1)%t._spaceSize],l=Math.pow(2,2)*r+Math.pow(2,1)*i+Math.pow(2,0)*a;return t._rule>>l&1?1:0}));return this._state=n,this._gen++,new e(this._rule,this._state,this._gen)}},{key:"state",get:function(){return this._state}},{key:"gen",get:function(){return this._gen}}]),e}()),F=function(e,t,n){var r=new Int8Array(t);switch(n){case"single":r[~~(t/2)]=1;break;case"random":r=r.map((function(){return Math.floor(2*Math.random())}));break}return new x(e,r,1)},H=16,W=Math.floor(.9*H),z=q.InitState,A=q.RuleNumber,E=q.RuleType,L=U.InputRuleNumber,P=function(e){return e*H+(H-W)/2},$=function(){return I.clearRect(0,0,S,D)},G=function(e,t){I.fillStyle="#00933B",e.forEach((function(e,n){1===e&&I.fillRect(P(n),P(t-1),W,W)}))},Y=function(){var e=(0,Z.oR)(B),t=e.getters,n=e.commit,r=(0,v.iH)(),a=(0,v.iH)(),l=function(){$(),"random"===t[E]&&n(L,Math.floor(256*Math.random()).toString()),C=F(Number(t[A]),R,t[z]),G(C.state,C.gen);while(!(C.gen>T))C=C.generate(),G(C.state,C.gen)},u=function(e,t){t.removeEventListener("click",l),$();var n=t.clientWidth,r=t.clientHeight;R=Math.floor(n/H),T=Math.floor(r/H),S=R*H,D=T*H,e.width=S,e.height=D,t.addEventListener("click",l)};return(0,i.bv)((function(){var e=r.value,t=a.value;I=e.getContext("2d"),window.addEventListener("resize",(function(){return u(e,t)})),u(e,t)})),{sketchIn:r,sketchIn__container:a}},K=Y,J=q.OpenedDialog,Q=q.RuleNumber,X=q.RuleType,ee=U.OpenDialog,te=U.InputRuleNumber,ne=U.UpdateRuleType,re=function(){var e=(0,Z.oR)(B),t=e.getters,n=e.commit,r=(0,i.Fl)((function(){return t[J]})),a=function(){return n(ee,"none")},l=(0,v.qj)([{value:"RANDOM"},{value:"INPUT",writeIn:!0}]),u=(0,i.Fl)({get:function(){return t[X].toUpperCase()},set:function(e){return n(ne,e.toLowerCase())}}),o=(0,v.qj)({min:"0",max:"255",disabled:(0,i.Fl)((function(){return"random"===t[X]}))}),s=(0,i.Fl)({get:function(){return t[Q]},set:function(e){return n(te,e)}});return{openedDialog:r,close:a,ruleItems:l,rulePicked:u,writeinAttrs:o,writeinInput:s}},ie=re,ae=q.InitState,le=q.OpenedDialog,ue=q.RuleNumber,oe=U.OpenDialog,se=U.UpdateInitState,ce=function(){var e=(0,Z.oR)(B),t=e.getters,n=e.commit,r=(0,v.qj)({content:(0,i.Fl)((function(){return t[ae].toUpperCase()})),highlight:(0,i.Fl)((function(){return"state"===t[le]})),onclick:function(){return n(se)}}),a=(0,v.qj)({content:(0,i.Fl)((function(){return t[ue]})),highlight:(0,i.Fl)((function(){return"rule"===t[le]})),onclick:function(){return n(oe,"rule"!==t[le]?"rule":"none")}});return{state:r,rule:a}},de=ce,pe={name:"TheHeaderChild",components:{BaseStatus:O},setup:function(){return de()}};const fe=(0,b.Z)(pe,[["render",h],["__scopeId","data-v-377cfb5f"]]);var he=fe,me={class:"the-footer-child el-center"},ge={class:"the-footer-child__container"},ve=(0,i.Uk)(" / © 2022 l1ck0h");function _e(e,t,n,r,a,l){var u=(0,i.up)("BaseLink");return(0,i.wg)(),(0,i.iD)("div",me,[(0,i._)("small",ge,[(0,i.Wm)(u,{url:"https://github.com/l1ck0h/elementary-cellular-automaton",label:"GitHub"}),ve])])}var be=["href"];function ke(e,t,n,r,a,l){return(0,i.wg)(),(0,i.iD)("a",{class:"base-link",href:n.url,target:"_blank",rel:"noopener noreferrer"},(0,m.zw)(n.label),9,be)}var we={name:"BaseLink",props:{url:{type:String,required:!0},label:{type:String,required:!0}}};const ye=(0,b.Z)(we,[["render",ke],["__scopeId","data-v-b5dc2084"]]);var Ie=ye,Se={name:"TheFooterChild",components:{BaseLink:Ie}};const De=(0,b.Z)(Se,[["render",_e],["__scopeId","data-v-6383439e"]]);var Re=De;function Te(e,t,n,r,a,l){var u=(0,i.up)("BaseInputRange"),o=(0,i.up)("BaseSetting"),s=(0,i.up)("BaseDialog");return"rule"===r.openedDialog?((0,i.wg)(),(0,i.j4)(s,{key:0,onClose:r.close},{default:(0,i.w5)((function(){return[(0,i.Wm)(o,{modelValue:r.rulePicked,"onUpdate:modelValue":t[1]||(t[1]=function(e){return r.rulePicked=e}),title:"RULE",name:"rule-select",items:r.ruleItems},{default:(0,i.w5)((function(){return[(0,i.Wm)(u,{modelValue:r.writeinInput,"onUpdate:modelValue":t[0]||(t[0]=function(e){return r.writeinInput=e}),attrs:r.writeinAttrs},null,8,["modelValue","attrs"])]})),_:1},8,["modelValue","items"])]})),_:1},8,["onClose"])):(0,i.kq)("",!0)}var Ce={class:"base-dialog__wrapper el-imposter"};function Oe(e,t,n,a,l,u){return(0,i.wg)(),(0,i.iD)("div",{class:"base-dialog__overlay",onClick:t[2]||(t[2]=(0,r.iM)((function(t){return e.$emit("close")}),["self"]))},[(0,i._)("div",Ce,[(0,i._)("div",{class:"base-dialog",onClick:t[1]||(t[1]=(0,r.iM)((function(t){return e.$emit("close")}),["self"]))},[(0,i._)("i",{class:"base-dialog__close nes-icon close is-small",onClick:t[0]||(t[0]=function(t){return e.$emit("close")})}),(0,i.WI)(e.$slots,"default",{},void 0,!0)])])])}var Ze={name:"BaseDialog",emits:["close"]};const Ne=(0,b.Z)(Ze,[["render",Oe],["__scopeId","data-v-2f9f5777"]]);var Be=Ne,qe=["value"];function Ue(e,t,n,r,a,l){return(0,i.wg)(),(0,i.iD)("input",(0,i.dG)({class:"input-range",type:"range"},n.attrs,{value:n.modelValue,onInput:t[0]||(t[0]=function(t){return e.$emit("update:modelValue",t.target.value)})}),null,16,qe)}var Me={name:"BaseInputRange",emits:["update:modelValue"],props:{attrs:{type:Object,required:!1},modelValue:{type:String,required:!0}}};const Ve=(0,b.Z)(Me,[["render",Ue]]);var je=Ve,xe=(n(8309),{class:"base-setting nes-container is-rounded with-title is-dark"}),Fe={class:"title"},He={class:"el-center"},We={class:"el-box el-box--invert"},ze={class:"el-stack",style:{"--space":"var(--ms-1)"}},Ae=["name","value","checked"],Ee={class:"app-util-clickable"};function Le(e,t,n,r,a,l){return(0,i.wg)(),(0,i.iD)("div",xe,[(0,i._)("span",Fe,(0,m.zw)(n.title),1),(0,i._)("div",He,[(0,i._)("div",We,[(0,i._)("div",ze,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(n.items,(function(r,a){return(0,i.wg)(),(0,i.iD)("label",{key:a,class:"el-stack"},[(0,i._)("input",{type:"radio",class:"nes-radio is-dark",name:n.name,value:r.value,checked:r.value===n.modelValue,onChange:t[0]||(t[0]=function(t){return e.$emit("update:modelValue",t.target.value)})},null,40,Ae),(0,i._)("span",Ee,(0,m.zw)(r.value),1),r.writeIn?(0,i.WI)(e.$slots,"default",{key:0},void 0,!0):(0,i.kq)("",!0)])})),128))])])])])}var Pe={name:"BaseSetting",emits:["update:modelValue"],props:{title:{type:String,required:!0},name:{type:String,required:!0},items:Array,modelValue:{type:String,required:!0}}};const $e=(0,b.Z)(Pe,[["render",Le],["__scopeId","data-v-0dad6b7a"]]);var Ge=$e,Ye={name:"TheDialogRule",components:{BaseDialog:Be,BaseInputRange:je,BaseSetting:Ge},setup:function(){var e=ie(),t=e.openedDialog,n=e.close,r=e.ruleItems,i=e.rulePicked,a=e.writeinAttrs,l=e.writeinInput;return{openedDialog:t,close:n,ruleItems:r,rulePicked:i,writeinAttrs:a,writeinInput:l}}};const Ke=(0,b.Z)(Ye,[["render",Te]]);var Je=Ke,Qe={name:"App",components:{TheHeaderChild:he,TheFooterChild:Re,TheDialogRule:Je},setup:function(){return K()}};const Xe=(0,b.Z)(Qe,[["render",o]]);var et=Xe;(0,r.ri)(et).use(M,B).mount("#app")}},t={};function n(r){var i=t[r];if(void 0!==i)return i.exports;var a=t[r]={exports:{}};return e[r](a,a.exports,n),a.exports}n.m=e,function(){var e=[];n.O=function(t,r,i,a){if(!r){var l=1/0;for(c=0;c<e.length;c++){r=e[c][0],i=e[c][1],a=e[c][2];for(var u=!0,o=0;o<r.length;o++)(!1&a||l>=a)&&Object.keys(n.O).every((function(e){return n.O[e](r[o])}))?r.splice(o--,1):(u=!1,a<l&&(l=a));if(u){e.splice(c--,1);var s=i();void 0!==s&&(t=s)}}return t}a=a||0;for(var c=e.length;c>0&&e[c-1][2]>a;c--)e[c]=e[c-1];e[c]=[r,i,a]}}(),function(){n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={143:0};n.O.j=function(t){return 0===e[t]};var t=function(t,r){var i,a,l=r[0],u=r[1],o=r[2],s=0;if(l.some((function(t){return 0!==e[t]}))){for(i in u)n.o(u,i)&&(n.m[i]=u[i]);if(o)var c=o(n)}for(t&&t(r);s<l.length;s++)a=l[s],n.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return n.O(c)},r=self["webpackChunkelementary_cellular_automaton"]=self["webpackChunkelementary_cellular_automaton"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(5076)}));r=n.O(r)})();
//# sourceMappingURL=app-legacy.f7df4e6b.js.map