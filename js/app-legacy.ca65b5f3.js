(function(){"use strict";var e={2761:function(e,t,n){n(6992),n(8674),n(9601),n(7727);var r=n(9963),i=n(6252),a={id:"app__container",class:"el-cover el-cover--space:ms-1 el-cover--minHeight:100%"},u={ref:"sketchIn",class:"sketchIn el-cover__centered el-center el-center--gutters:0"};function l(e,t,n,r,l,o){var s=(0,i.up)("TheHeaderChild"),c=(0,i.up)("TheFooterChild"),d=(0,i.up)("TheDialogRule");return(0,i.wg)(),(0,i.iD)(i.HY,null,[(0,i._)("div",a,[(0,i._)("header",null,[(0,i.Wm)(s)]),(0,i._)("canvas",u,null,512),(0,i._)("footer",null,[(0,i.Wm)(c)])]),(0,i.Wm)(d)],64)}var o=function(e){return(0,i.dD)("data-v-377cfb5f"),e=e(),(0,i.Cn)(),e},s={class:"the-header-child el-center"},c={class:"the-header-child__container el-cluster el-cluster--justify:space-between"},d=o((function(){return(0,i._)("h1",{class:"the-header-child__brand"},"ECA",-1)})),p={class:"the-header-child__statuses el-cluster"};function f(e,t,n,r,a,u){var l=(0,i.up)("BaseStatus");return(0,i.wg)(),(0,i.iD)("div",s,[(0,i._)("div",c,[d,(0,i._)("div",p,[(0,i.Wm)(l,(0,i.dG)({title:"INIT STATE"},e.state),null,16),(0,i.Wm)(l,(0,i.dG)({title:"RULE"},e.rule),null,16)])])])}var h=n(3577);function m(e,t,n,r,a,u){return(0,i.wg)(),(0,i.iD)("div",{class:(0,h.C_)(["base-status el-box el-box--invert el-box--padding:0 nes-text",{"base-status--highlight":n.highlight,"app-util-clickable":r.isClickable}])},[(0,i._)("div",{class:"el-center el-center--gutters:ms-1",onClick:t[0]||(t[0]=function(t){return e.$emit("onclick")})},[(0,i._)("div",null,(0,h.zw)(n.title),1),(0,i._)("div",null,(0,h.zw)(n.content),1)])],2)}var g=n(2262),v={name:"BaseStatus",emits:["onclick"],props:{title:{type:String,required:!0},content:{type:String,required:!0},highlight:{type:Boolean,required:!1}},setup:function(e,t){return{isClickable:(0,g.iH)(t.attrs.onclick)}}},_=n(3744);const b=(0,_.Z)(v,[["render",m],["__scopeId","data-v-7f2ebbbc"]]);var k,w,y,I,S,D,R,T,C,O=b,Z=(n(1539),n(4747),n(9714),n(9653),n(3907)),N=n(2482),B=(n(2526),n(1817),Symbol()),q={RuleType:"RuleType",RuleNumber:"RuleNumber",InitState:"InitState",OpenedDialog:"OpenedDialog"},U={UpdateRuleType:"UpdateRuleType",InputRuleNumber:"InputRuleNumber",UpdateInitState:"UpdateInitState",OpenDialog:"OpenDialog"},M=(0,Z.MT)({state:{ruleType:"random",ruleNumber:"30",initState:"single",openedDialog:"none"},getters:(k={},(0,N.Z)(k,q.RuleType,(function(e){return e.ruleType})),(0,N.Z)(k,q.RuleNumber,(function(e){return e.ruleNumber})),(0,N.Z)(k,q.InitState,(function(e){return e.initState})),(0,N.Z)(k,q.OpenedDialog,(function(e){return e.openedDialog})),k),mutations:(w={},(0,N.Z)(w,U.UpdateRuleType,(function(e,t){e.ruleType=t})),(0,N.Z)(w,U.InputRuleNumber,(function(e,t){e.ruleNumber=t})),(0,N.Z)(w,U.UpdateInitState,(function(e){switch(e.initState){case"single":e.initState="random";break;case"random":e.initState="single";break}})),(0,N.Z)(w,U.OpenDialog,(function(e,t){e.openedDialog=t})),w),actions:{},modules:{}}),V=n(3087),j=n(2833),x=(n(1249),function(){function e(t,n,r){(0,V.Z)(this,e),(0,N.Z)(this,"_rule",void 0),(0,N.Z)(this,"_state",void 0),(0,N.Z)(this,"_spaceSize",void 0),(0,N.Z)(this,"_gen",void 0),this._rule=t,this._state=n,this._spaceSize=n.length,this._gen=r}return(0,j.Z)(e,[{key:"generate",value:function(){var t=this,n=this._state.map((function(e,n){var r=t._state[n>0?n-1:t._spaceSize-1],i=e,a=t._state[(n+1)%t._spaceSize],u=Math.pow(2,2)*r+Math.pow(2,1)*i+Math.pow(2,0)*a;return t._rule>>u&1?1:0}));return this._state=n,this._gen++,new e(this._rule,this._state,this._gen)}},{key:"state",get:function(){return this._state}},{key:"gen",get:function(){return this._gen}}]),e}()),F=function(e,t,n){for(var r=[],i=0;i<t;i++)r.push(0);switch(n){case"single":r[~~(t/2)]=1;break;case"random":r=r.map((function(){return Math.floor(2*Math.random())}));break}return new x(e,r,1)},W=16,z=Math.floor(.9*W),H=0,A=q.InitState,E=q.RuleNumber,L=q.RuleType,P=U.InputRuleNumber,$=function(e){return e*W+(W-z)/2},G=function(){return y.clearRect(0,0,I,S)},Y=function(e,t){y.fillStyle="#00933B",e.forEach((function(e,n){1===e&&y.fillRect($(n),$(t-1),z,z)}))},K=function(){var e=(0,Z.oR)(B),t=e.getters,n=e.commit,r=(0,g.iH)(),a=function(){G(),"random"===t[L]&&n(P,Math.floor(256*Math.random()).toString()),T=F(Number(t[E]),D,t[A]),Y(T.state,T.gen);while(!(T.gen>R))T=T.generate(),Y(T.state,T.gen)},u=function(e){clearTimeout(C),C=setTimeout((function(){e.removeEventListener("click",a),G();var t=e.clientWidth,n=e.clientHeight;D=Math.floor(t/W),R=Math.floor(n/W),I=D*W,S=R*W,e.width=I,e.height=S,e.addEventListener("click",a)}),H)};return(0,i.bv)((function(){var e=r.value;y=e.getContext("2d"),window.addEventListener("resize",(function(){return u(e)})),u(e)})),{sketchIn:r}},J=K,Q=q.OpenedDialog,X=q.RuleNumber,ee=q.RuleType,te=U.OpenDialog,ne=U.InputRuleNumber,re=U.UpdateRuleType,ie=function(){var e=(0,Z.oR)(B),t=e.getters,n=e.commit,r=(0,i.Fl)((function(){return t[Q]})),a=function(){return n(te,"none")},u=(0,g.qj)([{value:"RANDOM"},{value:"INPUT",writeIn:!0}]),l=(0,i.Fl)({get:function(){return t[ee].toUpperCase()},set:function(e){return n(re,e.toLowerCase())}}),o=(0,g.qj)({min:"0",max:"255",disabled:(0,i.Fl)((function(){return"random"===t[ee]}))}),s=(0,i.Fl)({get:function(){return t[X]},set:function(e){return n(ne,e)}});return{openedDialog:r,close:a,ruleItems:u,rulePicked:l,writeinAttrs:o,writeinInput:s}},ae=ie,ue=q.InitState,le=q.OpenedDialog,oe=q.RuleNumber,se=U.OpenDialog,ce=U.UpdateInitState,de=function(){var e=(0,Z.oR)(B),t=e.getters,n=e.commit,r=(0,g.qj)({content:(0,i.Fl)((function(){return t[ue].toUpperCase()})),highlight:(0,i.Fl)((function(){return"state"===t[le]})),onclick:function(){return n(ce)}}),a=(0,g.qj)({content:(0,i.Fl)((function(){return t[oe]})),highlight:(0,i.Fl)((function(){return"rule"===t[le]})),onclick:function(){return n(se,"rule"!==t[le]?"rule":"none")}});return{state:r,rule:a}},pe=de,fe={name:"TheHeaderChild",components:{BaseStatus:O},setup:function(){return pe()}};const he=(0,_.Z)(fe,[["render",f],["__scopeId","data-v-377cfb5f"]]);var me=he,ge={class:"the-footer-child el-center"},ve={class:"the-footer-child__container"},_e=(0,i.Uk)(" / © 2022 l1ck0h");function be(e,t,n,r,a,u){var l=(0,i.up)("BaseLink");return(0,i.wg)(),(0,i.iD)("div",ge,[(0,i._)("small",ve,[(0,i.Wm)(l,{url:"https://github.com/l1ck0h/elementary-cellular-automaton",label:"GitHub"}),_e])])}var ke=["href"];function we(e,t,n,r,a,u){return(0,i.wg)(),(0,i.iD)("a",{class:"base-link",href:n.url,target:"_blank",rel:"noopener noreferrer"},(0,h.zw)(n.label),9,ke)}var ye={name:"BaseLink",props:{url:{type:String,required:!0},label:{type:String,required:!0}}};const Ie=(0,_.Z)(ye,[["render",we],["__scopeId","data-v-b5dc2084"]]);var Se=Ie,De={name:"TheFooterChild",components:{BaseLink:Se}};const Re=(0,_.Z)(De,[["render",be],["__scopeId","data-v-6383439e"]]);var Te=Re;function Ce(e,t,n,r,a,u){var l=(0,i.up)("BaseInputRange"),o=(0,i.up)("BaseSetting"),s=(0,i.up)("BaseDialog");return"rule"===r.openedDialog?((0,i.wg)(),(0,i.j4)(s,{key:0,onClose:r.close},{default:(0,i.w5)((function(){return[(0,i.Wm)(o,{modelValue:r.rulePicked,"onUpdate:modelValue":t[1]||(t[1]=function(e){return r.rulePicked=e}),title:"RULE",name:"rule-select",items:r.ruleItems},{default:(0,i.w5)((function(){return[(0,i.Wm)(l,{modelValue:r.writeinInput,"onUpdate:modelValue":t[0]||(t[0]=function(e){return r.writeinInput=e}),attrs:r.writeinAttrs},null,8,["modelValue","attrs"])]})),_:1},8,["modelValue","items"])]})),_:1},8,["onClose"])):(0,i.kq)("",!0)}var Oe={class:"base-dialog__wrapper el-imposter"};function Ze(e,t,n,a,u,l){return(0,i.wg)(),(0,i.iD)("div",{class:"base-dialog__overlay",onClick:t[2]||(t[2]=(0,r.iM)((function(t){return e.$emit("close")}),["self"]))},[(0,i._)("div",Oe,[(0,i._)("div",{class:"base-dialog",onClick:t[1]||(t[1]=(0,r.iM)((function(t){return e.$emit("close")}),["self"]))},[(0,i._)("i",{class:"base-dialog__close nes-icon close is-small",onClick:t[0]||(t[0]=function(t){return e.$emit("close")})}),(0,i.WI)(e.$slots,"default",{},void 0,!0)])])])}var Ne={name:"BaseDialog",emits:["close"]};const Be=(0,_.Z)(Ne,[["render",Ze],["__scopeId","data-v-2f9f5777"]]);var qe=Be,Ue=["value"];function Me(e,t,n,r,a,u){return(0,i.wg)(),(0,i.iD)("input",(0,i.dG)({class:"input-range",type:"range"},n.attrs,{value:n.modelValue,onInput:t[0]||(t[0]=function(t){return e.$emit("update:modelValue",t.target.value)})}),null,16,Ue)}var Ve={name:"BaseInputRange",emits:["update:modelValue"],props:{attrs:{type:Object,required:!1},modelValue:{type:String,required:!0}}};const je=(0,_.Z)(Ve,[["render",Me]]);var xe=je,Fe=(n(8309),{class:"base-setting nes-container is-rounded with-title is-dark"}),We={class:"title"},ze={class:"el-center"},He={class:"el-box el-box--invert"},Ae={class:"el-stack",style:{"--space":"var(--ms-1)"}},Ee=["name","value","checked"],Le={class:"app-util-clickable"};function Pe(e,t,n,r,a,u){return(0,i.wg)(),(0,i.iD)("div",Fe,[(0,i._)("span",We,(0,h.zw)(n.title),1),(0,i._)("div",ze,[(0,i._)("div",He,[(0,i._)("div",Ae,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(n.items,(function(r,a){return(0,i.wg)(),(0,i.iD)("label",{key:a,class:"el-stack"},[(0,i._)("input",{type:"radio",class:"nes-radio is-dark",name:n.name,value:r.value,checked:r.value===n.modelValue,onChange:t[0]||(t[0]=function(t){return e.$emit("update:modelValue",t.target.value)})},null,40,Ee),(0,i._)("span",Le,(0,h.zw)(r.value),1),r.writeIn?(0,i.WI)(e.$slots,"default",{key:0},void 0,!0):(0,i.kq)("",!0)])})),128))])])])])}var $e={name:"BaseSetting",emits:["update:modelValue"],props:{title:{type:String,required:!0},name:{type:String,required:!0},items:Array,modelValue:{type:String,required:!0}}};const Ge=(0,_.Z)($e,[["render",Pe],["__scopeId","data-v-0dad6b7a"]]);var Ye=Ge,Ke={name:"TheDialogRule",components:{BaseDialog:qe,BaseInputRange:xe,BaseSetting:Ye},setup:function(){var e=ae(),t=e.openedDialog,n=e.close,r=e.ruleItems,i=e.rulePicked,a=e.writeinAttrs,u=e.writeinInput;return{openedDialog:t,close:n,ruleItems:r,rulePicked:i,writeinAttrs:a,writeinInput:u}}};const Je=(0,_.Z)(Ke,[["render",Ce]]);var Qe=Je,Xe={name:"App",components:{TheHeaderChild:me,TheFooterChild:Te,TheDialogRule:Qe},setup:function(){return J()}};const et=(0,_.Z)(Xe,[["render",l]]);var tt=et;(0,r.ri)(tt).use(M,B).mount("#app")}},t={};function n(r){var i=t[r];if(void 0!==i)return i.exports;var a=t[r]={exports:{}};return e[r](a,a.exports,n),a.exports}n.m=e,function(){var e=[];n.O=function(t,r,i,a){if(!r){var u=1/0;for(c=0;c<e.length;c++){r=e[c][0],i=e[c][1],a=e[c][2];for(var l=!0,o=0;o<r.length;o++)(!1&a||u>=a)&&Object.keys(n.O).every((function(e){return n.O[e](r[o])}))?r.splice(o--,1):(l=!1,a<u&&(u=a));if(l){e.splice(c--,1);var s=i();void 0!==s&&(t=s)}}return t}a=a||0;for(var c=e.length;c>0&&e[c-1][2]>a;c--)e[c]=e[c-1];e[c]=[r,i,a]}}(),function(){n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={143:0};n.O.j=function(t){return 0===e[t]};var t=function(t,r){var i,a,u=r[0],l=r[1],o=r[2],s=0;if(u.some((function(t){return 0!==e[t]}))){for(i in l)n.o(l,i)&&(n.m[i]=l[i]);if(o)var c=o(n)}for(t&&t(r);s<u.length;s++)a=u[s],n.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return n.O(c)},r=self["webpackChunkelementary_cellular_automaton"]=self["webpackChunkelementary_cellular_automaton"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(2761)}));r=n.O(r)})();
//# sourceMappingURL=app-legacy.ca65b5f3.js.map