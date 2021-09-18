(function(e){function t(t){for(var c,o,i=t[0],u=t[1],l=t[2],s=0,b=[];s<i.length;s++)o=i[s],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&b.push(r[o][0]),r[o]=0;for(c in u)Object.prototype.hasOwnProperty.call(u,c)&&(e[c]=u[c]);d&&d(t);while(b.length)b.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],c=!0,o=1;o<n.length;o++){var u=n[o];0!==r[u]&&(c=!1)}c&&(a.splice(t--,1),e=i(i.s=n[0]))}return e}var c={},r={app:0},a=[];function o(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-2d0b995a":"f39d1c4b","chunk-2d2086a6":"f93a0777","chunk-371b413c":"163bd760"}[e]+".js"}function i(t){if(c[t])return c[t].exports;var n=c[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n=r[e];if(0!==n)if(n)t.push(n[2]);else{var c=new Promise((function(t,c){n=r[e]=[t,c]}));t.push(n[2]=c);var a,u=document.createElement("script");u.charset="utf-8",u.timeout=120,i.nc&&u.setAttribute("nonce",i.nc),u.src=o(e);var l=new Error;a=function(t){u.onerror=u.onload=null,clearTimeout(s);var n=r[e];if(0!==n){if(n){var c=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+c+": "+a+")",l.name="ChunkLoadError",l.type=c,l.request=a,n[1](l)}r[e]=void 0}};var s=setTimeout((function(){a({type:"timeout",target:u})}),12e4);u.onerror=u.onload=a,document.head.appendChild(u)}return Promise.all(t)},i.m=e,i.c=c,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)i.d(n,c,function(t){return e[t]}.bind(null,c));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/cellular-automaton/",i.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var s=0;s<u.length;s++)t(u[s]);var d=l;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"124e":function(e,t,n){},"233b":function(e,t,n){"use strict";n("887c")},"28b7":function(e,t,n){},"3e35":function(e,t,n){"use strict";n("eae3")},"42ac":function(e,t,n){"use strict";n("bb94")},"52ae":function(e,t,n){"use strict";n("124e")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var c=n("7a23");function r(e,t,n,r,a,o){var i=Object(c["p"])("Main");return Object(c["j"])(),Object(c["c"])(i)}n("ac2f"),n("5b09"),n("30fe");Object(c["l"])("data-v-7311a3ed");var a={id:"main"};function o(e,t,n,r,o,i){var u=Object(c["p"])("Status"),l=Object(c["p"])("Sketch"),s=Object(c["p"])("Menu"),d=Object(c["p"])("RuleDialog");return Object(c["j"])(),Object(c["d"])("div",a,[Object(c["f"])(u),Object(c["f"])(l),Object(c["f"])(s),Object(c["f"])(d)])}Object(c["k"])(),Object(c["l"])("data-v-1e0a4e87");var i={id:"status",class:"is-dark"};function u(e,t,n,r,a,o){var u=Object(c["p"])("Step"),l=Object(c["p"])("Rule"),s=Object(c["p"])("GitHubLink");return Object(c["j"])(),Object(c["d"])("div",i,[Object(c["f"])(u),Object(c["f"])(l),Object(c["f"])(s)])}function l(e,t,n,r,a,o){var i=Object(c["p"])("Text");return Object(c["j"])(),Object(c["c"])(i,{title:"STEP",content:o.step},null,8,["content"])}Object(c["k"])(),Object(c["l"])("data-v-99701c66");var s={class:"nes-text"};function d(e,t,n,r,a,o){return Object(c["j"])(),Object(c["d"])("span",s,[Object(c["e"])("div",null,Object(c["q"])(n.title),1),Object(c["e"])("div",null,Object(c["q"])(n.content),1)])}Object(c["k"])();n("a9e3");var b={name:"Text",props:{title:String,content:Number}};n("52ae");b.render=d,b.__scopeId="data-v-99701c66";var f=b,p={name:"Step",components:{Text:f},computed:{step:function(){return this.$store.getters.getStep}}};p.render=l;var j=p;function v(e,t,n,r,a,o){var i=Object(c["p"])("Text");return Object(c["j"])(),Object(c["c"])(i,{title:"RULE",content:o.rule},null,8,["content"])}var O={name:"Rule",components:{Text:f},computed:{rule:function(){return this.$store.getters.getRule}}};O.render=v;var h=O;Object(c["l"])("data-v-4dca434c");var m={class:"nes-icon github is-midium",href:"https://github.com/l1ck0h/cellular-automaton",target:"_blank",rel:"noopener noreferrer"};function g(e,t,n,r,a,o){return Object(c["j"])(),Object(c["d"])("a",m)}Object(c["k"])();var k={name:"GitHubLink"};n("42ac");k.render=g,k.__scopeId="data-v-4dca434c";var M=k,R={name:"Status",components:{Step:j,Rule:h,GitHubLink:M}};n("3e35");R.render=u,R.__scopeId="data-v-1e0a4e87";var y=R;Object(c["l"])("data-v-68eeec37");var S={id:"sketch"};function w(e,t,n,r,a,o){return Object(c["j"])(),Object(c["d"])("div",S)}Object(c["k"])();var _=n("3835"),E=n("1da1"),L=(n("96cf"),n("d3b7"),n("3ca3"),n("ddb0"),n("159b"),n("cb29"),{name:"Sketch",mounted:function(){var e=this;n.e("chunk-2d0b995a").then(n.t.bind(null,"3425",7)).then((function(t){return new t.default(e.sketch,e.$el)}))},methods:{sketch:function(e){var t=this,c=4,r=0,a=0,o=[],i=void 0,u=function(){return Math.floor(256*Math.random())},l=function(t,n){t.forEach((function(t,r){1===t&&(e.fill("#58f898"),e.rect(r*c,(n-1)*c,c,c))}))},s=function(){var n=t.$el.clientWidth,o=t.$el.clientHeight;return r=n/c,a=e.round(o/c),[n,o]},d=function(){var c=Object(E["a"])(regeneratorRuntime.mark((function c(a){var s,d,b;return regeneratorRuntime.wrap((function(c){while(1)switch(c.prev=c.next){case 0:return e.clear(),c.next=3,n.e("chunk-371b413c").then(n.bind(null,"78d2"));case 3:s=c.sent,d=a.target.value,"random"===t.$store.getters.getRuleMode&&t.$store.dispatch("updateRule",u()),b=t.$store.getters.getRule,i=new s.default(b,d,r,l),o=[],e.append(o,i.state),t.$store.dispatch("updateStep",i.step),e.loop();case 12:case"end":return c.stop()}}),c)})));return function(e){return c.apply(this,arguments)}}();e.setup=function(){var t=s(),n=Object(_["a"])(t,2),c=n[0],r=n[1],a=e.createCanvas(c,r);a.style("display","block"),e.selectAll("input[name='play-select']").forEach((function(e){return e.mouseClicked(d)}))},e.draw=function(){if(!i||o.length>a)return e.noLoop();i.generate(),t.$store.dispatch("updateStep",i.step),e.append(o,i.state)},e.windowResized=function(){e.noLoop();var n=s(),c=Object(_["a"])(n,2),r=c[0],a=c[1];e.resizeCanvas(r,a),e.clear(),t.$store.dispatch("updateStep",0)}}}});n("709f");L.render=w,L.__scopeId="data-v-68eeec37";var C=L;Object(c["l"])("data-v-050dd8d6");var $={class:"container"};function x(e,t,n,r,a,o){var i=Object(c["p"])("PlaySelect"),u=Object(c["p"])("RuleSelect"),l=Object(c["p"])("Container");return Object(c["j"])(),Object(c["c"])(l,{id:"menu",title:a.title,style:Object(c["i"])({visibility:o.show?"visible":"hidden"})},{default:Object(c["t"])((function(){return[Object(c["e"])("div",$,[Object(c["f"])(i),Object(c["f"])(u)])]})),_:1},8,["title","style"])}Object(c["k"])();var P={class:"nes-container is-rounded with-title is-dark"},T={class:"title"};function I(e,t,n,r,a,o){return Object(c["j"])(),Object(c["d"])("div",P,[Object(c["e"])("span",T,Object(c["q"])(n.title),1),Object(c["o"])(e.$slots,"default")])}var D={name:"Container",props:{title:String}};D.render=I;var V=D;function A(e,t,n,r,a,o){var i=Object(c["p"])("Radio"),u=Object(c["p"])("Container");return Object(c["j"])(),Object(c["c"])(u,{title:"PLAY SELECT"},{default:Object(c["t"])((function(){return[(Object(c["j"])(!0),Object(c["d"])(c["a"],null,Object(c["n"])(a.items,(function(e){return Object(c["j"])(),Object(c["d"])("div",{key:e.type},[Object(c["f"])(i,{name:"play-select",label:e.label,value:e.type},null,8,["label","value"])])})),128))]})),_:1})}n("b0c0");Object(c["l"])("data-v-3fbf38b3");var N=["name","value","checked"];function H(e,t,n,r,a,o){return Object(c["j"])(),Object(c["d"])("label",null,[Object(c["e"])("input",{type:"radio",class:"nes-radio is-dark",name:n.name,value:n.value,checked:n.checked,onClick:t[0]||(t[0]=function(){return e.$emit("click")})},null,8,N),Object(c["e"])("span",null,Object(c["q"])(n.label),1)])}Object(c["k"])();var U={name:"Radio",emits:["click"],props:{label:String,name:String,value:String,checked:Boolean}};n("233b");U.render=H,U.__scopeId="data-v-3fbf38b3";var q=U,G={name:"PlaySelect",components:{Container:V,Radio:q},data:function(){return{items:[{label:"SINGLE CELL",type:"default"},{label:"RANDOM CELLS",type:"random"}]}}};G.render=A;var J=G;Object(c["l"])("data-v-a0514c9c");var z={id:"rule-select-wrapper"};function B(e,t,n,r,a,o){var i=Object(c["p"])("Radio"),u=Object(c["p"])("Container");return Object(c["j"])(),Object(c["c"])(u,{title:"RULE SELECT"},{default:Object(c["t"])((function(){return[Object(c["e"])("div",z,[(Object(c["j"])(!0),Object(c["d"])(c["a"],null,Object(c["n"])(a.items,(function(e){return Object(c["j"])(),Object(c["c"])(i,{key:e.value,name:"rule-select",label:e.value,value:e.value,checked:e.checked,onClick:e.event},null,8,["label","value","checked","onClick"])})),128))])]})),_:1})}Object(c["k"])();n("7db0");var K={name:"RuleSelect",components:{Container:V,Radio:q},data:function(){var e=this;return{items:[{value:"RANDOM",checked:!0,event:function(){return e.setRuleMode("random")}},{value:"INPUT",checked:!1,event:this.showModal}]}},created:function(){this.setRuleMode(this.items.find((function(e){return e.checked})).value)},methods:{setRuleMode:function(e){this.$store.dispatch("setRuleMode",e)},showModal:function(){this.$store.dispatch("showModal")}}};n("d785");K.render=B,K.__scopeId="data-v-a0514c9c";var W=K,Y=n("9224"),F={name:"Menu",components:{Container:V,PlaySelect:J,RuleSelect:W},data:function(){return{title:"CELLULAR AUTOMATON VER. "+Y["a"]}},computed:{show:function(){return this.$store.getters.isMenuVisible}}};n("cb83");F.render=x,F.__scopeId="data-v-050dd8d6";var Q=F;Object(c["l"])("data-v-0ea19a3c");var X={class:"nes-dialog is-rounded is-dark"},Z={method:"dialog"},ee={class:"nes-field"},te=Object(c["e"])("label",{for:"input-rule"},"RULE",-1),ne={id:"dialog-error-message",class:"nes-text is-error"},ce={id:"button-wrapper"};function re(e,t,n,r,a,o){return Object(c["j"])(),Object(c["d"])("dialog",X,[Object(c["e"])("form",Z,[Object(c["e"])("div",ee,[te,Object(c["e"])("input",{type:"text",id:"input-rule",class:Object(c["h"])(["nes-input",a.hasSuccess?"is-dark":"is-error"]),placeholder:"RULE",minlength:"0",maxlength:"3",pattern:"[0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5]",ref:"inputRule",onInvalid:t[0]||(t[0]=function(){return o.errorHandler&&o.errorHandler.apply(o,arguments)})},null,34)]),Object(c["u"])(Object(c["e"])("div",ne," from 0 to 255 ",512),[[c["r"],!a.hasSuccess]]),Object(c["e"])("div",ce,[Object(c["e"])("button",{type:"button",class:"nes-btn",onClick:t[1]||(t[1]=function(){return o.closeModal&&o.closeModal.apply(o,arguments)})},"OK")])])])}Object(c["k"])();var ae={name:"RuleDialog",data:function(){return{hasSuccess:!0}},mounted:function(){this.$store.dispatch("registerDialog",this.$el)},methods:{closeModal:function(){var e=this.$refs.inputRule;if(e.checkValidity()){this.hasSuccess=!0;var t=e.value;this.$store.dispatch("updateRule",t),this.$store.dispatch("setRuleMode",t?"input":"random"),this.$store.dispatch("closeModal")}},errorHandler:function(){this.hasSuccess=!1}}};n("699a");ae.render=re,ae.__scopeId="data-v-0ea19a3c";var oe=ae,ie={name:"Main",components:{Status:y,Sketch:C,Menu:Q,RuleDialog:oe}};n("7b96");ie.render=o,ie.__scopeId="data-v-7311a3ed";var ue=ie,le={name:"App",components:{Main:ue}};n("d44a");le.render=r;var se=le,de=n("5502"),be=Object(de["a"])({state:{dialogElem:void 0,ruleMode:"",rule:90,step:0,isMenuVisible:!0},getters:{getRuleMode:function(e){return e.ruleMode},getRule:function(e){return e.rule},getStep:function(e){return e.step},isMenuVisible:function(e){return e.isMenuVisible}},mutations:{registerDialog:function(e,t){e.dialogElem=t},updateStep:function(e,t){e.step=t},setRuleMode:function(e,t){e.ruleMode=t.toLowerCase()},updateRule:function(e,t){e.rule=Number(""!==t?t:e.rule)},setMenuVisible:function(e,t){e.isMenuVisible=t}},actions:{registerDialog:function(e,t){var c=e.commit;n.e("chunk-2d2086a6").then(n.bind(null,"a562")).then((function(e){e.default.registerDialog(t),c("registerDialog",t)}))},showModal:function(e){var t=e.commit,n=e.state;n.dialogElem.showModal(),t("setMenuVisible",!1)},closeModal:function(e){var t=e.commit,n=e.state;t("setMenuVisible",!0),n.dialogElem.close()},setRuleMode:function(e,t){var n=e.commit;n("setRuleMode",t)},updateRule:function(e,t){var n=e.commit;n("updateRule",t)},updateStep:function(e,t){var n=e.commit;n("updateStep",t)}},modules:{}});Object(c["b"])(se).use(be).mount("#app")},"699a":function(e,t,n){"use strict";n("28b7")},"709f":function(e,t,n){"use strict";n("73ef")},"73ef":function(e,t,n){},"742f":function(e,t,n){},"7b96":function(e,t,n){"use strict";n("e7e0")},"887c":function(e,t,n){},9224:function(e){e.exports=JSON.parse('{"a":"1.0.4"}')},bb94:function(e,t,n){},cb83:function(e,t,n){"use strict";n("d60a")},d44a:function(e,t,n){"use strict";n("742f")},d60a:function(e,t,n){},d785:function(e,t,n){"use strict";n("ffa2")},e7e0:function(e,t,n){},eae3:function(e,t,n){},ffa2:function(e,t,n){}});
//# sourceMappingURL=app.72ed1920.js.map