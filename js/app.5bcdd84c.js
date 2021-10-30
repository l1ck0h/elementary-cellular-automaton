(function(e){function t(t){for(var a,i,o=t[0],u=t[1],s=t[2],l=0,b=[];l<o.length;l++)i=o[l],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&b.push(r[i][0]),r[i]=0;for(a in u)Object.prototype.hasOwnProperty.call(u,a)&&(e[a]=u[a]);d&&d(t);while(b.length)b.shift()();return c.push.apply(c,s||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],a=!0,i=1;i<n.length;i++){var u=n[i];0!==r[u]&&(a=!1)}a&&(c.splice(t--,1),e=o(o.s=n[0]))}return e}var a={},r={app:0},c=[];function i(e){return o.p+"js/"+({}[e]||e)+"."+{"chunk-2d0b995a":"f39d1c4b","chunk-2d2086a6":"f93a0777"}[e]+".js"}function o(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.e=function(e){var t=[],n=r[e];if(0!==n)if(n)t.push(n[2]);else{var a=new Promise((function(t,a){n=r[e]=[t,a]}));t.push(n[2]=a);var c,u=document.createElement("script");u.charset="utf-8",u.timeout=120,o.nc&&u.setAttribute("nonce",o.nc),u.src=i(e);var s=new Error;c=function(t){u.onerror=u.onload=null,clearTimeout(l);var n=r[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),c=t&&t.target&&t.target.src;s.message="Loading chunk "+e+" failed.\n("+a+": "+c+")",s.name="ChunkLoadError",s.type=a,s.request=c,n[1](s)}r[e]=void 0}};var l=setTimeout((function(){c({type:"timeout",target:u})}),12e4);u.onerror=u.onload=c,document.head.appendChild(u)}return Promise.all(t)},o.m=e,o.c=a,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)o.d(n,a,function(t){return e[t]}.bind(null,a));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/elementary-cellular-automaton/",o.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],s=u.push.bind(u);u.push=t,u=u.slice();for(var l=0;l<u.length;l++)t(u[l]);var d=s;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0a9c":function(e,t,n){"use strict";n("9635")},"0be3":function(e,t,n){},"0ddd":function(e,t,n){"use strict";n("2127")},1984:function(e,t,n){"use strict";n("a967")},2127:function(e,t,n){},"31c8":function(e,t,n){"use strict";n("482d")},4346:function(e,t,n){"use strict";n("8332")},"482d":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("7a23");function r(e,t,n,r,c,i){var o=Object(a["r"])("Main"),u=Object(a["r"])("Alert");return r.isMobileLandscape?(Object(a["k"])(),Object(a["d"])(u,{key:1})):(Object(a["k"])(),Object(a["d"])(o,{key:0}))}n("ac2f"),n("5b09"),n("30fe");var c={class:"Main"};function i(e,t,n,r,i,o){var u=Object(a["r"])("Status"),s=Object(a["r"])("Sketch"),l=Object(a["r"])("Menu"),d=Object(a["r"])("RuleDialog");return Object(a["k"])(),Object(a["e"])(a["a"],null,[Object(a["w"])(Object(a["f"])("div",c,[Object(a["g"])(u),Object(a["g"])(s),Object(a["g"])(l)],512),[[a["t"],r.isMainShow]]),Object(a["g"])(d)],64)}var o=n("5502"),u={class:"Status is-dark"};function s(e,t,n,r,c,i){var o=Object(a["r"])("Gen"),s=Object(a["r"])("Rule"),l=Object(a["r"])("GitHubLink");return Object(a["k"])(),Object(a["e"])("div",u,[Object(a["g"])(o),Object(a["g"])(s),Object(a["g"])(l)])}function l(e,t,n,r,c,i){var o=Object(a["r"])("Text");return Object(a["k"])(),Object(a["d"])(o,{title:"GEN",content:r.gen},null,8,["content"])}var d={class:"Text nes-text"};function b(e,t,n,r,c,i){return Object(a["k"])(),Object(a["e"])("span",d,[Object(a["f"])("div",null,Object(a["s"])(n.title),1),Object(a["f"])("div",null,Object(a["s"])(n.content),1)])}n("a9e3");var f={name:"Text",props:{title:String,content:Number}},O=(n("4346"),n("6b0d")),j=n.n(O);const v=j()(f,[["render",b],["__scopeId","data-v-e0adf5a6"]]);var p=v,h="IsMainShow",m="Mode",g="Rule",k="Gen",w={name:"Gen",components:{Text:p},setup:function(){var e=Object(o["b"])(),t=Object(a["b"])((function(){return e.getters[k]}));return{gen:t}}};const S=j()(w,[["render",l]]);var M=S;function R(e,t,n,r,c,i){var o=Object(a["r"])("Text");return Object(a["k"])(),Object(a["d"])(o,{title:"RULE",content:r.rule},null,8,["content"])}var y={name:"Rule",components:{Text:p},setup:function(){var e=Object(o["b"])(),t=Object(a["b"])((function(){return e.getters[g]}));return{rule:t}}};const _=j()(y,[["render",R]]);var E=_,x={class:"GitHubLink nes-icon github is-midium",href:"https://github.com/l1ck0h/elementary-cellular-automaton",target:"_blank",rel:"noopener noreferrer"};function T(e,t,n,r,c,i){return Object(a["k"])(),Object(a["e"])("a",x)}var A={name:"GitHubLink"};n("829d");const L=j()(A,[["render",T],["__scopeId","data-v-78608a37"]]);var C=L,D={name:"Status",components:{Gen:M,Rule:E,GitHubLink:C}};n("0a9c");const I=j()(D,[["render",s],["__scopeId","data-v-85d8a154"]]);var G=I,N={class:"Sketch",ref:"sketch"};function P(e,t,n,r,c,i){return Object(a["k"])(),Object(a["e"])("div",N,null,512)}var U=n("1da1"),W=(n("96cf"),"RegisterDialog"),H="ShowModal",V="CloseModal",q="SetMode",J="UpdateRule",$="UpdateGen",z="Sketch",B={name:"Sketch",setup:function(){var e=Object(o["b"])(),t=Object(a["o"])(null);return Object(a["j"])(Object(U["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,e.dispatch(z,{node:t.value,startSelectors:"input[name='state-select']"});case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})))),{sketch:t}}};n("d0398");const K=j()(B,[["render",P],["__scopeId","data-v-277c31e6"]]);var Y=K,F={class:"Menu-inner"};function Q(e,t,n,r,c,i){var o=Object(a["r"])("StateSelect"),u=Object(a["r"])("RuleSelect"),s=Object(a["r"])("Container");return Object(a["k"])(),Object(a["d"])(s,{class:"Menu",title:"ELEMENTARY CELLULAR AUTOMATON"},{default:Object(a["v"])((function(){return[Object(a["f"])("div",F,[Object(a["g"])(o),Object(a["g"])(u)])]})),_:1})}var X={class:"nes-container is-rounded with-title is-dark"},Z={class:"title"};function ee(e,t,n,r,c,i){return Object(a["k"])(),Object(a["e"])("div",X,[Object(a["f"])("span",Z,Object(a["s"])(n.title),1),Object(a["q"])(e.$slots,"default")])}var te={name:"Container",props:{title:String}};const ne=j()(te,[["render",ee]]);var ae=ne,re={class:"StateSelect-wrapper"};function ce(e,t,n,r,c,i){var o=Object(a["r"])("Radio"),u=Object(a["r"])("Container");return Object(a["k"])(),Object(a["d"])(u,{title:"STATE SELECT"},{default:Object(a["v"])((function(){return[Object(a["f"])("div",re,[(Object(a["k"])(!0),Object(a["e"])(a["a"],null,Object(a["p"])(r.items,(function(e){return Object(a["k"])(),Object(a["d"])(o,{key:e.type,name:"state-select",label:e,value:e},null,8,["label","value"])})),128))])]})),_:1})}n("b0c0");var ie={class:"Radio"},oe=["name","value","checked"],ue={class:"Radio-label"};function se(e,t,n,r,c,i){return Object(a["k"])(),Object(a["e"])("label",ie,[Object(a["f"])("input",{type:"radio",class:"Radio-input nes-radio is-dark",name:n.name,value:n.value,checked:n.checked,onClick:t[0]||(t[0]=function(){return e.$emit("click")})},null,8,oe),Object(a["f"])("span",ue,Object(a["s"])(n.label),1)])}var le={name:"Radio",emits:["click"],props:{label:String,name:String,value:String,checked:Boolean}};n("31c8");const de=j()(le,[["render",se],["__scopeId","data-v-01ee26c9"]]);var be=de,fe=n("7a88"),Oe={name:"StateSelect",components:{Container:ae,Radio:be},setup:function(){var e=Object(a["o"])([fe["default"].SINGLE_STATE,fe["default"].RANDOM_STATE]);return{items:e}}};n("0ddd");const je=j()(Oe,[["render",ce],["__scopeId","data-v-69e8ab3f"]]);var ve=je,pe={class:"RuleSelect-wrapper"};function he(e,t,n,r,c,i){var o=Object(a["r"])("Radio"),u=Object(a["r"])("Container");return Object(a["k"])(),Object(a["d"])(u,{class:"RuleSelect",title:"RULE SELECT"},{default:Object(a["v"])((function(){return[Object(a["f"])("div",pe,[(Object(a["k"])(!0),Object(a["e"])(a["a"],null,Object(a["p"])(r.items,(function(e){return Object(a["k"])(),Object(a["d"])(o,{key:e.value,name:"rule-select",label:e.value,value:e.value,checked:e.checked,onClick:e.event},null,8,["label","value","checked","onClick"])})),128))])]})),_:1})}n("7db0");var me={name:"RuleSelect",components:{Container:ae,Radio:be},setup:function(){var e=Object(o["b"])(),t=Object(a["o"])([{value:"RANDOM",checked:!0,event:function(){return e.dispatch(q,"random")}},{value:"INPUT",checked:!1,event:function(){return e.dispatch(H)}}]);return e.dispatch(q,t.value.find((function(e){return e.checked})).value),{items:t}}};n("977b");const ge=j()(me,[["render",he],["__scopeId","data-v-9f8bc380"]]);var ke=ge,we={name:"Menu",components:{Container:ae,StateSelect:ve,RuleSelect:ke}};n("c690");const Se=j()(we,[["render",Q],["__scopeId","data-v-7951683c"]]);var Me=Se,Re=function(e){return Object(a["m"])("data-v-7874fbaa"),e=e(),Object(a["l"])(),e},ye={class:"RuleDialog nes-dialog is-rounded is-dark",ref:"ruleDialog"},_e={class:"nes-field"},Ee=Re((function(){return Object(a["f"])("label",null,"RULE",-1)})),xe={class:"RuleDialog-error nes-text is-error"},Te={class:"RuleDialog-btn-wrapper"};function Ae(e,t,n,r,c,i){return Object(a["k"])(),Object(a["e"])("dialog",ye,[Object(a["f"])("div",_e,[Ee,Object(a["f"])("input",{type:"text",inputmode:"tel",ref:"inputRule",class:Object(a["i"])(["RuleDialog-input nes-input",r.hasError?"is-error":"is-dark"]),placeholder:"RULE",minlength:"0",maxlength:"3",pattern:"[0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5]",onInvalid:t[0]||(t[0]=function(){return r.errorHandler&&r.errorHandler.apply(r,arguments)})},null,34)]),Object(a["w"])(Object(a["f"])("div",xe," from 0 to 255 ",512),[[a["t"],r.hasError]]),Object(a["f"])("div",Te,[Object(a["f"])("button",{type:"button",class:"RuleDialog-btn nes-btn",onClick:t[1]||(t[1]=function(){return r.closeModalWithValidator&&r.closeModalWithValidator.apply(r,arguments)})}," OK ")])],512)}var Le={name:"RuleDialog",setup:function(){var e=Object(o["b"])(),t=Object(a["o"])(!1),n=Object(a["o"])(null),r=Object(a["o"])(null),c=function(){return t.value=!0},i=function(e){e.value="",t.value=!1},u=function(){e.dispatch(V,""),i(r.value)},s=function(){var t=r.value;t.checkValidity()&&(e.dispatch(V,t.value),i(t))};return Object(a["j"])(Object(U["a"])(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:a=n.value,e.dispatch(W,n.value),a.addEventListener("cancel",(function(e){e.preventDefault(),u()}));case 3:case"end":return t.stop()}}),t)})))),{hasError:t,inputRule:r,ruleDialog:n,closeModalWithValidator:s,errorHandler:c}}};n("f6dc");const Ce=j()(Le,[["render",Ae],["__scopeId","data-v-7874fbaa"]]);var De=Ce,Ie={name:"Main",components:{Status:G,Sketch:Y,Menu:Me,RuleDialog:De},setup:function(){var e=Object(o["b"])(),t=Object(a["b"])((function(){return e.getters[h]}));return{isMainShow:t}}};n("1984");const Ge=j()(Ie,[["render",i],["__scopeId","data-v-0ec87a7a"]]);var Ne=Ge,Pe=function(e){return Object(a["m"])("data-v-6eaabe02"),e=e(),Object(a["l"])(),e},Ue={class:"Alert"},We=Pe((function(){return Object(a["f"])("strong",{class:"nes-text is-warning"}," Sorry! Please rotate your smartphone from landscape to portrait! ",-1)})),He=[We];function Ve(e,t,n,r,c,i){return Object(a["k"])(),Object(a["e"])("div",Ue,He)}var qe={name:"Alert"};n("a41e");const Je=j()(qe,[["render",Ve],["__scopeId","data-v-6eaabe02"]]);var $e=Je,ze={name:"App",components:{Main:Ne,Alert:$e},setup:function(){var e=Object(a["o"])(!1),t=window.matchMedia("(max-height: 599px) and (orientation:landscape)"),n=function(t){return e.value=t.matches};return Object(a["j"])((function(){n(t),t.addEventListener("change",n)})),{isMobileLandscape:e}}};n("9446");const Be=j()(ze,[["render",r]]);var Ke,Ye,Fe=Be,Qe=n("3835"),Xe=n("ade3"),Ze=(n("d3b7"),n("3ca3"),n("ddb0"),n("159b"),n("cb29"),Object(o["a"])({state:{isMainShow:!0,dialogElem:void 0,mode:"",rule:30,gen:0},getters:(Ke={},Object(Xe["a"])(Ke,h,(function(e){return e.isMainShow})),Object(Xe["a"])(Ke,m,(function(e){return e.mode})),Object(Xe["a"])(Ke,g,(function(e){return e.rule})),Object(Xe["a"])(Ke,k,(function(e){return e.gen})),Ke),mutations:{isMainShow:function(e){e.isMainShow=!e.isMainShow},registerDialog:function(e,t){e.dialogElem=t},setMode:function(e,t){e.mode=t.toLowerCase()},updateRule:function(e,t){e.rule=Number(""!==t?t:e.rule)},updateGen:function(e,t){e.gen=t}},actions:(Ye={},Object(Xe["a"])(Ye,W,(function(e,t){return Object(U["a"])(regeneratorRuntime.mark((function a(){var r,c;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return r=e.commit,a.next=3,n.e("chunk-2d2086a6").then(n.bind(null,"a562"));case 3:return a.next=5,a.sent.default;case 5:c=a.sent,c.registerDialog(t),r("registerDialog",t);case 8:case"end":return a.stop()}}),a)})))()})),Object(Xe["a"])(Ye,H,(function(e){var t=e.commit,n=e.state;t("isMainShow"),n.dialogElem.showModal()})),Object(Xe["a"])(Ye,V,(function(e,t){var n=e.commit,a=e.state;n("updateRule",t),n("setMode",t?"input":"random"),n("isMainShow"),a.dialogElem.close()})),Object(Xe["a"])(Ye,q,(function(e,t){var n=e.commit;n("setMode",t)})),Object(Xe["a"])(Ye,J,(function(e,t){var n=e.commit;n("updateRule",t)})),Object(Xe["a"])(Ye,$,(function(e,t){var n=e.commit;n("updateGen",t)})),Object(Xe["a"])(Ye,z,(function(e,t){return Object(U["a"])(regeneratorRuntime.mark((function a(){var r,c,i,o,u,s;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return r=e.commit,c=e.state,i=t.node,o=t.startSelectors,u=function(e){var t=2,a=0,u=0,s=void 0,l=function(){return Math.floor(256*Math.random())},d=function(n,a){n.forEach((function(n,r){1===n&&(e.fill("#58f898"),e.rect(r*t,(a-1)*t,t,t))}))},b=function(){var n=i.clientWidth,r=i.clientHeight;return a=n/t,u=e.round(r/t),[n,r]},f=function(){var t=Object(U["a"])(regeneratorRuntime.mark((function t(i){var o,u,b;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.clear(),t.next=3,Promise.resolve().then(n.bind(null,"7a88"));case 3:return t.next=5,t.sent.default;case 5:o=t.sent,u=i.target.value,"random"===c.mode&&r("updateRule",l()),b=c.rule,s=new o(b,a,u),d(s.state,s.gen),r("updateGen",s.gen),e.loop();case 13:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();e.setup=function(){var t=b(),n=Object(Qe["a"])(t,2),a=n[0],r=n[1],c=e.createCanvas(a,r);c.style("display","block"),e.selectAll(o).forEach((function(e){return e.mouseClicked(f)}))},e.draw=function(){if(!s||s.gen>u)return e.noLoop();s.generate(),d(s.state,s.gen),r("updateGen",s.gen)},e.windowResized=function(){e.clear(),e.noCanvas();var t=b(),n=Object(Qe["a"])(t,2),a=n[0],c=n[1];e.createCanvas(a,c),r("updateGen",0)}},a.next=5,n.e("chunk-2d0b995a").then(n.t.bind(null,"3425",7));case 5:return a.next=7,a.sent.default;case 7:s=a.sent,new s(u,i);case 9:case"end":return a.stop()}}),a)})))()})),Ye),modules:{}}));Object(a["c"])(Fe).use(Ze).mount("#app")},"6e97":function(e,t,n){},"7a88":function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return j}));var a=n("d4ec"),r=n("bee2"),c=n("ade3"),i=n("d5e4"),o=n("95ac"),u=n("5364"),s=n("9bd1"),l=(n("d3b7"),n("fd87"),n("9a8c"),n("a975"),n("735e"),n("c1ac"),n("d139"),n("3a7b"),n("d5d6"),n("82f8"),n("e91f"),n("60bd"),n("5f96"),n("3280"),n("3fcc"),n("ca91"),n("25a1"),n("cd26"),n("3c5d"),n("2954"),n("649e"),n("219c"),n("170b"),n("b39a"),n("72f7"),n("d81d"),n("3ca3"),n("10d1"),n("ddb0"),new WeakMap),d=new WeakMap,b=new WeakMap,f=new WeakMap,O=new WeakMap,j=function(){function e(t,n,r){Object(a["a"])(this,e),Object(i["a"])(this,l,{writable:!0,value:void 0}),Object(i["a"])(this,d,{writable:!0,value:void 0}),Object(i["a"])(this,b,{writable:!0,value:void 0}),Object(i["a"])(this,f,{writable:!0,value:void 0}),Object(i["a"])(this,O,{writable:!0,value:void 0}),Object(s["a"])(this,l,t),Object(s["a"])(this,d,n),Object(s["a"])(this,b,new Int8Array(n)),r===e.RANDOM_STATE?Object(s["a"])(this,b,new Int8Array(Object(u["a"])(this,b).map((function(){return Math.floor(2*Math.random())})))):Object(u["a"])(this,b)[~~(Object(u["a"])(this,d)/2)]=1,Object(s["a"])(this,f,new Int8Array(n)),Object(s["a"])(this,O,1)}return Object(r["a"])(e,[{key:"generate",value:function(){for(var e=Object(u["a"])(this,d);e--;){var t=Object(u["a"])(this,b)[e-1>=0?e-1:Object(u["a"])(this,d)-1],n=Object(u["a"])(this,b)[e],a=Object(u["a"])(this,b)[(e+1)%Object(u["a"])(this,d)],r=Math.pow(2,2)*t+Math.pow(2,1)*n+Math.pow(2,0)*a;Object(u["a"])(this,f)[e]=Object(u["a"])(this,l)>>r&1?1:0}var c=[Object(u["a"])(this,f),Object(u["a"])(this,b)];Object(o["a"])(this,b).value=c[0],Object(o["a"])(this,f).value=c[1],Object(s["a"])(this,O,1+ +Object(u["a"])(this,O))}},{key:"state",get:function(){return Object(u["a"])(this,b)}},{key:"gen",get:function(){return Object(u["a"])(this,O)}}]),e}();Object(c["a"])(j,"SINGLE_STATE","SINGLE"),Object(c["a"])(j,"RANDOM_STATE","RANDOM")},"7f3c":function(e,t,n){},"829d":function(e,t,n){"use strict";n("c9c3")},8332:function(e,t,n){},"8da9":function(e,t,n){},9446:function(e,t,n){"use strict";n("e484")},9635:function(e,t,n){},"977b":function(e,t,n){"use strict";n("0be3")},a41e:function(e,t,n){"use strict";n("ad93")},a967:function(e,t,n){},ad93:function(e,t,n){},c690:function(e,t,n){"use strict";n("8da9")},c9c3:function(e,t,n){},d0398:function(e,t,n){"use strict";n("6e97")},e484:function(e,t,n){},f6dc:function(e,t,n){"use strict";n("7f3c")}});
//# sourceMappingURL=app.5bcdd84c.js.map