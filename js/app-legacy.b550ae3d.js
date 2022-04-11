(function(){"use strict";var e={9499:function(e,t,n){n(6992),n(8674),n(9601),n(7727);var r=n(9963),i=n(6252),a={id:"app__container",class:"el-cover el-cover--space:ms-1 el-cover--minHeight:100%"},l={ref:"sketchIn",class:"sketchIn el-cover__centered el-center el-center--gutters:0"};function u(e,t,n,r,u,o){var s=(0,i.up)("TheHeaderChild"),c=(0,i.up)("TheFooterChild"),d=(0,i.up)("TheDialogRule");return(0,i.wg)(),(0,i.iD)(i.HY,null,[(0,i._)("div",a,[(0,i._)("header",null,[(0,i.Wm)(s)]),(0,i._)("canvas",l,null,512),(0,i._)("footer",null,[(0,i.Wm)(c)])]),(0,i.Wm)(d)],64)}var o=function(e){return(0,i.dD)("data-v-377cfb5f"),e=e(),(0,i.Cn)(),e},s={class:"the-header-child el-center"},c={class:"the-header-child__container el-cluster el-cluster--justify:space-between"},d=o((function(){return(0,i._)("h1",{class:"the-header-child__brand"},"ECA",-1)})),p={class:"the-header-child__statuses el-cluster"};function f(e,t,n,r,a,l){var u=(0,i.up)("BaseStatus");return(0,i.wg)(),(0,i.iD)("div",s,[(0,i._)("div",c,[d,(0,i._)("div",p,[(0,i.Wm)(u,(0,i.dG)({title:"INIT STATE"},e.state),null,16),(0,i.Wm)(u,(0,i.dG)({title:"RULE"},e.rule),null,16)])])])}var m=n(3577);function h(e,t,n,r,a,l){return(0,i.wg)(),(0,i.iD)("div",{class:(0,m.C_)(["base-status el-box el-box--invert el-box--padding:0 nes-text",{"base-status--highlight":n.highlight,"app-util-clickable":r.isClickable}])},[(0,i._)("div",{class:"el-center el-center--gutters:ms-1",onClick:t[0]||(t[0]=function(t){return e.$emit("onclick")})},[(0,i._)("div",null,(0,m.zw)(n.title),1),(0,i._)("div",null,(0,m.zw)(n.content),1)])],2)}var g=n(2262),v={name:"BaseStatus",emits:["onclick"],props:{title:{type:String,required:!0},content:{type:String,required:!0},highlight:{type:Boolean,required:!1}},setup:function(e,t){return{isClickable:(0,g.iH)(t.attrs.onclick)}}},_=n(3744);const b=(0,_.Z)(v,[["render",h],["__scopeId","data-v-7f2ebbbc"]]);var k,w,y,I,S,D,R,T,C,O=b,Z=(n(1539),n(4747),n(9714),n(9653),n(3907)),N=n(2482),B=(n(2526),n(1817),Symbol()),q={RuleType:"RuleType",RuleNumber:"RuleNumber",InitState:"InitState",OpenedDialog:"OpenedDialog"},U={UpdateRuleType:"UpdateRuleType",InputRuleNumber:"InputRuleNumber",UpdateInitState:"UpdateInitState",OpenDialog:"OpenDialog"},V=(0,Z.MT)({state:{ruleType:"random",ruleNumber:"30",initState:"single",openedDialog:"none"},getters:(k={},(0,N.Z)(k,q.RuleType,(function(e){return e.ruleType})),(0,N.Z)(k,q.RuleNumber,(function(e){return e.ruleNumber})),(0,N.Z)(k,q.InitState,(function(e){return e.initState})),(0,N.Z)(k,q.OpenedDialog,(function(e){return e.openedDialog})),k),mutations:(w={},(0,N.Z)(w,U.UpdateRuleType,(function(e,t){e.ruleType=t})),(0,N.Z)(w,U.InputRuleNumber,(function(e,t){e.ruleNumber=t})),(0,N.Z)(w,U.UpdateInitState,(function(e){switch(e.initState){case"single":e.initState="random";break;case"random":e.initState="single";break}})),(0,N.Z)(w,U.OpenDialog,(function(e,t){e.openedDialog=t})),w),actions:{},modules:{}}),j=n(3087),M=n(2833),x=(n(1249),n(7145),n(8675),n(2990),n(8927),n(3105),n(5035),n(4345),n(7174),n(2846),n(4731),n(7209),n(6319),n(8867),n(7789),n(3739),n(9368),n(4483),n(2056),n(3462),n(678),n(7462),n(3824),n(5021),n(2974),n(5016),function(){function e(t,n,r){(0,j.Z)(this,e),(0,N.Z)(this,"_rule",void 0),(0,N.Z)(this,"_state",void 0),(0,N.Z)(this,"_spaceSize",void 0),(0,N.Z)(this,"_gen",void 0),this._rule=t,this._state=n,this._spaceSize=n.length,this._gen=r}return(0,M.Z)(e,[{key:"generate",value:function(){var t=this,n=this._state.map((function(e,n){var r=t._state[n>0?n-1:t._spaceSize-1],i=e,a=t._state[(n+1)%t._spaceSize],l=Math.pow(2,2)*r+Math.pow(2,1)*i+Math.pow(2,0)*a;return t._rule>>l&1?1:0}));return this._state=n,this._gen++,new e(this._rule,this._state,this._gen)}},{key:"state",get:function(){return this._state}},{key:"gen",get:function(){return this._gen}}]),e}()),F=function(e,t,n){var r=new Int8Array(t);switch(n){case"single":r[~~(t/2)]=1;break;case"random":r=r.map((function(){return Math.floor(2*Math.random())}));break}return new x(e,r,1)},W=16,z=.9,A=W*z,H="#00933B",E=500,L=q.InitState,P=q.RuleNumber,$=q.RuleType,G=U.InputRuleNumber,Y=function(){return y.clearRect(0,0,I,S)},K=function(e,t){y.fillStyle=H,e.forEach((function(e,n){1===e&&y.fillRect(n*W,(t-1)*W,A,A)}))},J=function(){var e=(0,Z.oR)(B),t=e.getters,n=e.commit,r=(0,g.iH)(),a=function(){Y(),"random"===t[$]&&n(G,Math.floor(256*Math.random()).toString()),T=F(Number(t[P]),D,t[L]),K(T.state,T.gen);while(!(T.gen>R))T=T.generate(),K(T.state,T.gen)},l=function(e){clearTimeout(C),C=setTimeout((function(){e.removeEventListener("click",a),Y();var t=e.clientWidth,n=e.clientHeight;D=Math.floor(t/W),R=Math.floor(n/W)-1,I=D*W,S=R*W,e.width=I,e.height=S,e.addEventListener("click",a)}),E)};return(0,i.bv)((function(){var e=r.value;y=e.getContext("2d"),window.addEventListener("resize",(function(){return l(e)})),l(e)})),r},Q=J,X=q.OpenedDialog,ee=q.RuleNumber,te=q.RuleType,ne=U.OpenDialog,re=U.InputRuleNumber,ie=U.UpdateRuleType,ae=function(){var e=(0,Z.oR)(B),t=e.getters,n=e.commit,r=(0,i.Fl)((function(){return t[X]})),a=function(){return n(ne,"none")},l=(0,g.qj)([{value:"RANDOM"},{value:"INPUT",writeIn:!0}]),u=(0,i.Fl)({get:function(){return t[te].toUpperCase()},set:function(e){return n(ie,e.toLowerCase())}}),o=(0,g.qj)({min:"0",max:"255",disabled:(0,i.Fl)((function(){return"random"===t[te]}))}),s=(0,i.Fl)({get:function(){return t[ee]},set:function(e){return n(re,e)}});return{openedDialog:r,close:a,ruleItems:l,rulePicked:u,writeinAttrs:o,writeinInput:s}},le=ae,ue=q.InitState,oe=q.OpenedDialog,se=q.RuleNumber,ce=U.OpenDialog,de=U.UpdateInitState,pe=function(){var e=(0,Z.oR)(B),t=e.getters,n=e.commit,r=(0,g.qj)({content:(0,i.Fl)((function(){return t[ue].toUpperCase()})),highlight:(0,i.Fl)((function(){return"state"===t[oe]})),onclick:function(){return n(de)}}),a=(0,g.qj)({content:(0,i.Fl)((function(){return t[se]})),highlight:(0,i.Fl)((function(){return"rule"===t[oe]})),onclick:function(){return n(ce,"rule"!==t[oe]?"rule":"none")}});return{state:r,rule:a}},fe=pe,me={name:"TheHeaderChild",components:{BaseStatus:O},setup:function(){return fe()}};const he=(0,_.Z)(me,[["render",f],["__scopeId","data-v-377cfb5f"]]);var ge=he,ve={class:"the-footer-child el-center"},_e={class:"the-footer-child__container"},be=(0,i.Uk)(" / © 2022 l1ck0h");function ke(e,t,n,r,a,l){var u=(0,i.up)("BaseLink");return(0,i.wg)(),(0,i.iD)("div",ve,[(0,i._)("small",_e,[(0,i.Wm)(u,{url:"https://github.com/l1ck0h/elementary-cellular-automaton",label:"GitHub"}),be])])}var we=["href"];function ye(e,t,n,r,a,l){return(0,i.wg)(),(0,i.iD)("a",{class:"base-link",href:n.url,target:"_blank",rel:"noopener noreferrer"},(0,m.zw)(n.label),9,we)}var Ie={name:"BaseLink",props:{url:{type:String,required:!0},label:{type:String,required:!0}}};const Se=(0,_.Z)(Ie,[["render",ye],["__scopeId","data-v-b5dc2084"]]);var De=Se,Re={name:"TheFooterChild",components:{BaseLink:De}};const Te=(0,_.Z)(Re,[["render",ke],["__scopeId","data-v-6383439e"]]);var Ce=Te;function Oe(e,t,n,r,a,l){var u=(0,i.up)("BaseInputRange"),o=(0,i.up)("BaseSetting"),s=(0,i.up)("BaseDialog");return"rule"===r.openedDialog?((0,i.wg)(),(0,i.j4)(s,{key:0,onClose:r.close},{default:(0,i.w5)((function(){return[(0,i.Wm)(o,{modelValue:r.rulePicked,"onUpdate:modelValue":t[1]||(t[1]=function(e){return r.rulePicked=e}),title:"RULE",name:"rule-select",items:r.ruleItems},{default:(0,i.w5)((function(){return[(0,i.Wm)(u,{modelValue:r.writeinInput,"onUpdate:modelValue":t[0]||(t[0]=function(e){return r.writeinInput=e}),attrs:r.writeinAttrs},null,8,["modelValue","attrs"])]})),_:1},8,["modelValue","items"])]})),_:1},8,["onClose"])):(0,i.kq)("",!0)}var Ze={class:"base-dialog__wrapper el-imposter"};function Ne(e,t,n,a,l,u){return(0,i.wg)(),(0,i.iD)("div",{class:"base-dialog__overlay",onClick:t[2]||(t[2]=(0,r.iM)((function(t){return e.$emit("close")}),["self"]))},[(0,i._)("div",Ze,[(0,i._)("div",{class:"base-dialog",onClick:t[1]||(t[1]=(0,r.iM)((function(t){return e.$emit("close")}),["self"]))},[(0,i._)("i",{class:"base-dialog__close nes-icon close is-small",onClick:t[0]||(t[0]=function(t){return e.$emit("close")})}),(0,i.WI)(e.$slots,"default",{},void 0,!0)])])])}var Be={name:"BaseDialog",emits:["close"]};const qe=(0,_.Z)(Be,[["render",Ne],["__scopeId","data-v-2f9f5777"]]);var Ue=qe,Ve=["value"];function je(e,t,n,r,a,l){return(0,i.wg)(),(0,i.iD)("input",(0,i.dG)({class:"input-range",type:"range"},n.attrs,{value:n.modelValue,onInput:t[0]||(t[0]=function(t){return e.$emit("update:modelValue",t.target.value)})}),null,16,Ve)}var Me={name:"BaseInputRange",emits:["update:modelValue"],props:{attrs:{type:Object,required:!1},modelValue:{type:String,required:!0}}};const xe=(0,_.Z)(Me,[["render",je]]);var Fe=xe,We=(n(8309),{class:"base-setting nes-container is-rounded with-title is-dark"}),ze={class:"title"},Ae={class:"el-center"},He={class:"el-box el-box--invert"},Ee={class:"el-stack",style:{"--space":"var(--ms-1)"}},Le=["name","value","checked"],Pe={class:"app-util-clickable"};function $e(e,t,n,r,a,l){return(0,i.wg)(),(0,i.iD)("div",We,[(0,i._)("span",ze,(0,m.zw)(n.title),1),(0,i._)("div",Ae,[(0,i._)("div",He,[(0,i._)("div",Ee,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(n.items,(function(r,a){return(0,i.wg)(),(0,i.iD)("label",{key:a,class:"el-stack"},[(0,i._)("input",{type:"radio",class:"nes-radio is-dark",name:n.name,value:r.value,checked:r.value===n.modelValue,onChange:t[0]||(t[0]=function(t){return e.$emit("update:modelValue",t.target.value)})},null,40,Le),(0,i._)("span",Pe,(0,m.zw)(r.value),1),r.writeIn?(0,i.WI)(e.$slots,"default",{key:0},void 0,!0):(0,i.kq)("",!0)])})),128))])])])])}var Ge={name:"BaseSetting",emits:["update:modelValue"],props:{title:{type:String,required:!0},name:{type:String,required:!0},items:Array,modelValue:{type:String,required:!0}}};const Ye=(0,_.Z)(Ge,[["render",$e],["__scopeId","data-v-0dad6b7a"]]);var Ke=Ye,Je={name:"TheDialogRule",components:{BaseDialog:Ue,BaseInputRange:Fe,BaseSetting:Ke},setup:function(){var e=le(),t=e.openedDialog,n=e.close,r=e.ruleItems,i=e.rulePicked,a=e.writeinAttrs,l=e.writeinInput;return{openedDialog:t,close:n,ruleItems:r,rulePicked:i,writeinAttrs:a,writeinInput:l}}};const Qe=(0,_.Z)(Je,[["render",Oe]]);var Xe=Qe,et={name:"App",components:{TheHeaderChild:ge,TheFooterChild:Ce,TheDialogRule:Xe},setup:function(){var e=Q();return{sketchIn:e}}};const tt=(0,_.Z)(et,[["render",u]]);var nt=tt;(0,r.ri)(nt).use(V,B).mount("#app")}},t={};function n(r){var i=t[r];if(void 0!==i)return i.exports;var a=t[r]={exports:{}};return e[r](a,a.exports,n),a.exports}n.m=e,function(){var e=[];n.O=function(t,r,i,a){if(!r){var l=1/0;for(c=0;c<e.length;c++){r=e[c][0],i=e[c][1],a=e[c][2];for(var u=!0,o=0;o<r.length;o++)(!1&a||l>=a)&&Object.keys(n.O).every((function(e){return n.O[e](r[o])}))?r.splice(o--,1):(u=!1,a<l&&(l=a));if(u){e.splice(c--,1);var s=i();void 0!==s&&(t=s)}}return t}a=a||0;for(var c=e.length;c>0&&e[c-1][2]>a;c--)e[c]=e[c-1];e[c]=[r,i,a]}}(),function(){n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={143:0};n.O.j=function(t){return 0===e[t]};var t=function(t,r){var i,a,l=r[0],u=r[1],o=r[2],s=0;if(l.some((function(t){return 0!==e[t]}))){for(i in u)n.o(u,i)&&(n.m[i]=u[i]);if(o)var c=o(n)}for(t&&t(r);s<l.length;s++)a=l[s],n.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return n.O(c)},r=self["webpackChunkelementary_cellular_automaton"]=self["webpackChunkelementary_cellular_automaton"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(9499)}));r=n.O(r)})();
//# sourceMappingURL=app-legacy.b550ae3d.js.map