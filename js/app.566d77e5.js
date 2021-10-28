(function(e){function t(t){for(var c,i,u=t[0],o=t[1],s=t[2],l=0,b=[];l<u.length;l++)i=u[l],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&b.push(r[i][0]),r[i]=0;for(c in o)Object.prototype.hasOwnProperty.call(o,c)&&(e[c]=o[c]);d&&d(t);while(b.length)b.shift()();return a.push.apply(a,s||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],c=!0,i=1;i<n.length;i++){var o=n[i];0!==r[o]&&(c=!1)}c&&(a.splice(t--,1),e=u(u.s=n[0]))}return e}var c={},r={app:0},a=[];function i(e){return u.p+"js/"+({}[e]||e)+"."+{"chunk-2d0b995a":"f39d1c4b","chunk-2d2086a6":"f93a0777"}[e]+".js"}function u(t){if(c[t])return c[t].exports;var n=c[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n=r[e];if(0!==n)if(n)t.push(n[2]);else{var c=new Promise((function(t,c){n=r[e]=[t,c]}));t.push(n[2]=c);var a,o=document.createElement("script");o.charset="utf-8",o.timeout=120,u.nc&&o.setAttribute("nonce",u.nc),o.src=i(e);var s=new Error;a=function(t){o.onerror=o.onload=null,clearTimeout(l);var n=r[e];if(0!==n){if(n){var c=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;s.message="Loading chunk "+e+" failed.\n("+c+": "+a+")",s.name="ChunkLoadError",s.type=c,s.request=a,n[1](s)}r[e]=void 0}};var l=setTimeout((function(){a({type:"timeout",target:o})}),12e4);o.onerror=o.onload=a,document.head.appendChild(o)}return Promise.all(t)},u.m=e,u.c=c,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)u.d(n,c,function(t){return e[t]}.bind(null,c));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/elementary-cellular-automaton/",u.oe=function(e){throw console.error(e),e};var o=window["webpackJsonp"]=window["webpackJsonp"]||[],s=o.push.bind(o);o.push=t,o=o.slice();for(var l=0;l<o.length;l++)t(o[l]);var d=s;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0a9c":function(e,t,n){"use strict";n("9635")},"0be3":function(e,t,n){},"0ddd":function(e,t,n){"use strict";n("2127")},2127:function(e,t,n){},"31c8":function(e,t,n){"use strict";n("482d")},"382b":function(e,t,n){"use strict";n("534c")},4346:function(e,t,n){"use strict";n("8332")},4377:function(e,t,n){"use strict";n("6f79")},"46e6":function(e,t,n){"use strict";n("5752")},"482d":function(e,t,n){},"4e68":function(e,t,n){},"534c":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var c=n("7a23");function r(e,t,n,r,a,i){var u=Object(c["r"])("Main"),o=Object(c["r"])("RuleDialog");return Object(c["k"])(),Object(c["e"])(c["a"],null,[Object(c["g"])(u),Object(c["g"])(o)],64)}n("ac2f"),n("5b09"),n("30fe");function a(e,t,n,r,a,i){var u=Object(c["r"])("Status"),o=Object(c["r"])("Sketch"),s=Object(c["r"])("Menu");return Object(c["k"])(),Object(c["e"])("div",{class:Object(c["i"])(["Main",{"is-hidden":r.isHidden}])},[Object(c["g"])(u),Object(c["g"])(o),Object(c["g"])(s)],2)}var i=n("5502"),u={class:"Status is-dark"};function o(e,t,n,r,a,i){var o=Object(c["r"])("Gen"),s=Object(c["r"])("Rule"),l=Object(c["r"])("GitHubLink");return Object(c["k"])(),Object(c["e"])("div",u,[Object(c["g"])(o),Object(c["g"])(s),Object(c["g"])(l)])}function s(e,t,n,r,a,i){var u=Object(c["r"])("Text");return Object(c["k"])(),Object(c["d"])(u,{title:"GEN",content:r.gen},null,8,["content"])}var l={class:"Text nes-text"};function d(e,t,n,r,a,i){return Object(c["k"])(),Object(c["e"])("span",l,[Object(c["f"])("div",null,Object(c["s"])(n.title),1),Object(c["f"])("div",null,Object(c["s"])(n.content),1)])}n("a9e3");var b={name:"Text",props:{title:String,content:Number}},f=(n("4346"),n("6b0d")),O=n.n(f);const j=O()(b,[["render",d],["__scopeId","data-v-e0adf5a6"]]);var v=j,p="IsHidden",h="Mode",m="Rule",g="Gen",k={name:"Gen",components:{Text:v},setup:function(){var e=Object(i["b"])(),t=Object(c["b"])((function(){return e.getters[g]}));return{gen:t}}};const w=O()(k,[["render",s]]);var R=w;function S(e,t,n,r,a,i){var u=Object(c["r"])("Text");return Object(c["k"])(),Object(c["d"])(u,{title:"RULE",content:r.rule},null,8,["content"])}var M={name:"Rule",components:{Text:v},setup:function(){var e=Object(i["b"])(),t=Object(c["b"])((function(){return e.getters[m]}));return{rule:t}}};const y=O()(M,[["render",S]]);var _=y,E={class:"GitHubLink nes-icon github is-midium",href:"https://github.com/l1ck0h/elementary-cellular-automaton",target:"_blank",rel:"noopener noreferrer"};function T(e,t,n,r,a,i){return Object(c["k"])(),Object(c["e"])("a",E)}var x={name:"GitHubLink"};n("829d");const L=O()(x,[["render",T],["__scopeId","data-v-78608a37"]]);var C=L,A={name:"Status",components:{Gen:R,Rule:_,GitHubLink:C}};n("0a9c");const D=O()(A,[["render",o],["__scopeId","data-v-85d8a154"]]);var I=D,G={class:"Sketch",ref:"sketch"};function H(e,t,n,r,a,i){return Object(c["k"])(),Object(c["e"])("div",G,null,512)}var N=n("1da1"),P=(n("96cf"),"RegisterDialog"),U="ShowModal",W="CloseModal",V="SetMode",q="UpdateRule",J="UpdateGen",$="Sketch",z={name:"Sketch",setup:function(){var e=Object(i["b"])(),t=Object(c["o"])(null);return Object(c["j"])(Object(N["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,e.dispatch($,{node:t.value,startSelectors:"input[name='state-select']"});case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})))),{sketch:t}}};n("d0398");const B=O()(z,[["render",H],["__scopeId","data-v-277c31e6"]]);var K=B,Y={class:"Menu-inner"};function F(e,t,n,r,a,i){var u=Object(c["r"])("StateSelect"),o=Object(c["r"])("RuleSelect"),s=Object(c["r"])("Container");return Object(c["k"])(),Object(c["d"])(s,{class:"Menu",title:"ELEMENTARY CELLULAR AUTOMATON"},{default:Object(c["v"])((function(){return[Object(c["f"])("div",Y,[Object(c["g"])(u),Object(c["g"])(o)])]})),_:1})}var Q={class:"nes-container is-rounded with-title is-dark"},X={class:"title"};function Z(e,t,n,r,a,i){return Object(c["k"])(),Object(c["e"])("div",Q,[Object(c["f"])("span",X,Object(c["s"])(n.title),1),Object(c["q"])(e.$slots,"default")])}var ee={name:"Container",props:{title:String}};const te=O()(ee,[["render",Z]]);var ne=te,ce={class:"StateSelect-wrapper"};function re(e,t,n,r,a,i){var u=Object(c["r"])("Radio"),o=Object(c["r"])("Container");return Object(c["k"])(),Object(c["d"])(o,{title:"STATE SELECT"},{default:Object(c["v"])((function(){return[Object(c["f"])("div",ce,[(Object(c["k"])(!0),Object(c["e"])(c["a"],null,Object(c["p"])(r.items,(function(e){return Object(c["k"])(),Object(c["d"])(u,{key:e.type,name:"state-select",label:e,value:e},null,8,["label","value"])})),128))])]})),_:1})}n("b0c0");var ae={class:"Radio"},ie=["name","value","checked"],ue={class:"Radio-label"};function oe(e,t,n,r,a,i){return Object(c["k"])(),Object(c["e"])("label",ae,[Object(c["f"])("input",{type:"radio",class:"Radio-input nes-radio is-dark",name:n.name,value:n.value,checked:n.checked,onClick:t[0]||(t[0]=function(){return e.$emit("click")})},null,8,ie),Object(c["f"])("span",ue,Object(c["s"])(n.label),1)])}var se={name:"Radio",emits:["click"],props:{label:String,name:String,value:String,checked:Boolean}};n("31c8");const le=O()(se,[["render",oe],["__scopeId","data-v-01ee26c9"]]);var de=le,be=n("7a88"),fe={name:"StateSelect",components:{Container:ne,Radio:de},setup:function(){var e=Object(c["o"])([be["default"].SINGLE_STATE,be["default"].RANDOM_STATE]);return{items:e}}};n("0ddd");const Oe=O()(fe,[["render",re],["__scopeId","data-v-69e8ab3f"]]);var je=Oe,ve={class:"RuleSelect-wrapper"};function pe(e,t,n,r,a,i){var u=Object(c["r"])("Radio"),o=Object(c["r"])("Container");return Object(c["k"])(),Object(c["d"])(o,{class:"RuleSelect",title:"RULE SELECT"},{default:Object(c["v"])((function(){return[Object(c["f"])("div",ve,[(Object(c["k"])(!0),Object(c["e"])(c["a"],null,Object(c["p"])(r.items,(function(e){return Object(c["k"])(),Object(c["d"])(u,{key:e.value,name:"rule-select",label:e.value,value:e.value,checked:e.checked,onClick:e.event},null,8,["label","value","checked","onClick"])})),128))])]})),_:1})}n("7db0");var he={name:"RuleSelect",components:{Container:ne,Radio:de},setup:function(){var e=Object(i["b"])(),t=Object(c["o"])([{value:"RANDOM",checked:!0,event:function(){return e.dispatch(V,"random")}},{value:"INPUT",checked:!1,event:function(){return e.dispatch(U)}}]);return e.dispatch(V,t.value.find((function(e){return e.checked})).value),{items:t}}};n("977b");const me=O()(he,[["render",pe],["__scopeId","data-v-9f8bc380"]]);var ge=me,ke={name:"Menu",components:{Container:ne,StateSelect:je,RuleSelect:ge}};n("382b");const we=O()(ke,[["render",F],["__scopeId","data-v-286c330e"]]);var Re=we,Se={name:"Main",components:{Status:I,Sketch:K,Menu:Re},setup:function(){var e=Object(i["b"])(),t=Object(c["b"])((function(){return e.getters[p]}));return{isHidden:t}}};n("cc61");const Me=O()(Se,[["render",a],["__scopeId","data-v-63222038"]]);var ye=Me,_e=function(e){return Object(c["m"])("data-v-443ca278"),e=e(),Object(c["l"])(),e},Ee={class:"RuleDialog nes-dialog is-rounded is-dark",ref:"ruleDialog"},Te={class:"nes-field"},xe=_e((function(){return Object(c["f"])("label",null,"RULE",-1)})),Le={class:"RuleDialog-error nes-text is-error"},Ce={class:"RuleDialog-btn-wrapper"};function Ae(e,t,n,r,a,i){return Object(c["k"])(),Object(c["e"])("dialog",Ee,[Object(c["f"])("div",Te,[xe,Object(c["f"])("input",{type:"text",ref:"inputRule",class:Object(c["i"])(["RuleDialog-input nes-input",r.hasSuccess?"is-dark":"is-error"]),placeholder:"RULE",minlength:"0",maxlength:"3",pattern:"[0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5]",onInvalid:t[0]||(t[0]=function(){return r.errorHandler&&r.errorHandler.apply(r,arguments)})},null,34)]),Object(c["w"])(Object(c["f"])("div",Le," from 0 to 255 ",512),[[c["t"],!r.hasSuccess]]),Object(c["f"])("div",Ce,[Object(c["f"])("button",{type:"button",class:"RuleDialog-btn nes-btn",onClick:t[1]||(t[1]=function(){return r.closeModalWithValidator&&r.closeModalWithValidator.apply(r,arguments)})}," OK ")])],512)}n("d3b7"),n("3ca3"),n("ddb0");var De={name:"RuleDialog",setup:function(){var e=Object(i["b"])(),t=Object(c["o"])(!0),r=Object(c["o"])(null),a=Object(c["o"])(null),u=function(){return t.value=!1},o=function(){var n=a.value;n.checkValidity()&&(t.value=!0,e.dispatch(W,n.value),n.value="")};return Object(c["j"])(Object(N["a"])(regeneratorRuntime.mark((function t(){var c;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,n.e("chunk-2d2086a6").then(n.bind(null,"a562"));case 2:return t.next=4,t.sent.default;case 4:c=t.sent,c.registerDialog(r.value),e.dispatch(P,r.value);case 7:case"end":return t.stop()}}),t)})))),{hasSuccess:t,inputRule:a,ruleDialog:r,closeModalWithValidator:o,errorHandler:u}}};n("4377");const Ie=O()(De,[["render",Ae],["__scopeId","data-v-443ca278"]]);var Ge=Ie,He={name:"App",components:{Main:ye,RuleDialog:Ge},setup:function(){Object(c["j"])((function(){window.screen.orientation.addEventListener("change",(function(){return console.log(window.screen.orientation.type)}))}))}};n("46e6");const Ne=O()(He,[["render",r]]);var Pe,Ue,We=Ne,Ve=n("3835"),qe=n("ade3"),Je=(n("159b"),n("cb29"),Object(i["a"])({state:{isHidden:!1,dialogElem:void 0,mode:"",rule:30,gen:0},getters:(Pe={},Object(qe["a"])(Pe,p,(function(e){return e.isHidden})),Object(qe["a"])(Pe,h,(function(e){return e.mode})),Object(qe["a"])(Pe,m,(function(e){return e.rule})),Object(qe["a"])(Pe,g,(function(e){return e.gen})),Pe),mutations:{isHidden:function(e){e.isHidden=!e.isHidden},registerDialog:function(e,t){e.dialogElem=t},setMode:function(e,t){e.mode=t.toLowerCase()},updateRule:function(e,t){e.rule=Number(""!==t?t:e.rule)},updateGen:function(e,t){e.gen=t}},actions:(Ue={},Object(qe["a"])(Ue,P,(function(e,t){var n=e.commit;n("registerDialog",t)})),Object(qe["a"])(Ue,U,(function(e){var t=e.state;this.commit("isHidden"),t.dialogElem.showModal()})),Object(qe["a"])(Ue,W,(function(e,t){var n=e.commit,c=e.state;n("updateRule",t),n("setMode",t?"input":"random"),this.commit("isHidden"),c.dialogElem.close()})),Object(qe["a"])(Ue,V,(function(e,t){var n=e.commit;n("setMode",t)})),Object(qe["a"])(Ue,q,(function(e,t){var n=e.commit;n("updateRule",t)})),Object(qe["a"])(Ue,J,(function(e,t){var n=e.commit;n("updateGen",t)})),Object(qe["a"])(Ue,$,(function(e,t){return Object(N["a"])(regeneratorRuntime.mark((function c(){var r,a,i,u,o,s;return regeneratorRuntime.wrap((function(c){while(1)switch(c.prev=c.next){case 0:return r=e.commit,a=e.state,i=t.node,u=t.startSelectors,o=function(e){var t=2,c=0,o=0,s=void 0,l=function(){return Math.floor(256*Math.random())},d=function(n,c){n.forEach((function(n,r){1===n&&(e.fill("#58f898"),e.rect(r*t,(c-1)*t,t,t))}))},b=function(){var n=i.clientWidth,r=i.clientHeight;return c=n/t,o=e.round(r/t),[n,r]},f=function(){var t=Object(N["a"])(regeneratorRuntime.mark((function t(i){var u,o,b;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.clear(),t.next=3,Promise.resolve().then(n.bind(null,"7a88"));case 3:return t.next=5,t.sent.default;case 5:u=t.sent,o=i.target.value,"random"===a.mode&&r("updateRule",l()),b=a.rule,s=new u(b,c,o),d(s.state,s.gen),r("updateGen",s.gen),e.loop();case 13:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();e.setup=function(){var t=b(),n=Object(Ve["a"])(t,2),c=n[0],r=n[1],a=e.createCanvas(c,r);a.style("display","block"),e.selectAll(u).forEach((function(e){return e.mouseClicked(f)}))},e.draw=function(){return!s||s.gen>o?e.noLoop():(s.generate(),s.state.some((function(e){return 1===e}))?(d(s.state,s.gen),void r("updateGen",s.gen)):e.noLoop())},e.windowResized=function(){e.clear(),e.noCanvas();var t=b(),n=Object(Ve["a"])(t,2),c=n[0],a=n[1];e.createCanvas(c,a),r("updateGen",0)}},c.next=5,n.e("chunk-2d0b995a").then(n.t.bind(null,"3425",7));case 5:return c.next=7,c.sent.default;case 7:s=c.sent,new s(o,i);case 9:case"end":return c.stop()}}),c)})))()})),Ue),modules:{}}));Object(c["c"])(We).use(Je).mount("#app")},5752:function(e,t,n){},"6e97":function(e,t,n){},"6f79":function(e,t,n){},"7a88":function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return j}));var c=n("d4ec"),r=n("bee2"),a=n("ade3"),i=n("d5e4"),u=n("95ac"),o=n("5364"),s=n("9bd1"),l=(n("d3b7"),n("fd87"),n("9a8c"),n("a975"),n("735e"),n("c1ac"),n("d139"),n("3a7b"),n("d5d6"),n("82f8"),n("e91f"),n("60bd"),n("5f96"),n("3280"),n("3fcc"),n("ca91"),n("25a1"),n("cd26"),n("3c5d"),n("2954"),n("649e"),n("219c"),n("170b"),n("b39a"),n("72f7"),n("d81d"),n("3ca3"),n("10d1"),n("ddb0"),new WeakMap),d=new WeakMap,b=new WeakMap,f=new WeakMap,O=new WeakMap,j=function(){function e(t,n,r){Object(c["a"])(this,e),Object(i["a"])(this,l,{writable:!0,value:void 0}),Object(i["a"])(this,d,{writable:!0,value:void 0}),Object(i["a"])(this,b,{writable:!0,value:void 0}),Object(i["a"])(this,f,{writable:!0,value:void 0}),Object(i["a"])(this,O,{writable:!0,value:void 0}),Object(s["a"])(this,l,t),Object(s["a"])(this,d,n),Object(s["a"])(this,b,new Int8Array(n)),r===e.RANDOM_STATE?Object(s["a"])(this,b,new Int8Array(Object(o["a"])(this,b).map((function(){return Math.floor(2*Math.random())})))):Object(o["a"])(this,b)[~~(Object(o["a"])(this,d)/2)]=1,Object(s["a"])(this,f,new Int8Array(n)),Object(s["a"])(this,O,1)}return Object(r["a"])(e,[{key:"generate",value:function(){for(var e=Object(o["a"])(this,d);e--;){var t=Object(o["a"])(this,b)[e-1>=0?e-1:Object(o["a"])(this,d)-1],n=Object(o["a"])(this,b)[e],c=Object(o["a"])(this,b)[(e+1)%Object(o["a"])(this,d)],r=Math.pow(2,2)*t+Math.pow(2,1)*n+Math.pow(2,0)*c;Object(o["a"])(this,f)[e]=Object(o["a"])(this,l)>>r&1?1:0}var a=[Object(o["a"])(this,f),Object(o["a"])(this,b)];Object(u["a"])(this,b).value=a[0],Object(u["a"])(this,f).value=a[1],Object(s["a"])(this,O,1+ +Object(o["a"])(this,O))}},{key:"state",get:function(){return Object(o["a"])(this,b)}},{key:"gen",get:function(){return Object(o["a"])(this,O)}}]),e}();Object(a["a"])(j,"SINGLE_STATE","SINGLE"),Object(a["a"])(j,"RANDOM_STATE","RANDOM")},"829d":function(e,t,n){"use strict";n("c9c3")},8332:function(e,t,n){},9635:function(e,t,n){},"977b":function(e,t,n){"use strict";n("0be3")},c9c3:function(e,t,n){},cc61:function(e,t,n){"use strict";n("4e68")},d0398:function(e,t,n){"use strict";n("6e97")}});
//# sourceMappingURL=app.566d77e5.js.map