(function(e){function t(t){for(var r,i,u=t[0],o=t[1],l=t[2],b=0,f=[];b<u.length;b++)i=u[b],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&f.push(a[i][0]),a[i]=0;for(r in o)Object.prototype.hasOwnProperty.call(o,r)&&(e[r]=o[r]);s&&s(t);while(f.length)f.shift()();return c.push.apply(c,l||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],r=!0,u=1;u<n.length;u++){var o=n[u];0!==a[o]&&(r=!1)}r&&(c.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},a={app:0},c=[];function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/elementary-cellular-automaton/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],o=u.push.bind(u);u.push=t,u=u.slice();for(var l=0;l<u.length;l++)t(u[l]);var s=o;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},"0052":function(e,t,n){"use strict";n("0ab0")},"0ab0":function(e,t,n){},"230f":function(e,t,n){"use strict";n("8325")},2842:function(e,t,n){},"2a1d":function(e,t,n){"use strict";n("5ebf")},3116:function(e,t,n){"use strict";n("2842")},"34fb":function(e,t,n){"use strict";n("8ebf")},"4fed":function(e,t,n){},"51cb":function(e,t,n){"use strict";n("bff8")},"5aba":function(e,t,n){"use strict";n("4fed")},"5ebf":function(e,t,n){},6801:function(e,t,n){},8159:function(e,t,n){"use strict";n("6801")},8325:function(e,t,n){},"8ebf":function(e,t,n){},b7a1:function(e,t,n){"use strict";n("f066")},bff8:function(e,t,n){},cd49:function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23");function a(e,t,n,a,c,i){var u=Object(r["u"])("Main"),o=Object(r["u"])("Settings"),l=Object(r["u"])("ScrollSnap"),s=Object(r["u"])("Alert"),b=Object(r["u"])("ScreenRotation");return Object(r["n"])(),Object(r["d"])(b,{maxHeight:"599px"},{default:Object(r["x"])((function(){return[Object(r["h"])(l,null,{"section-1":Object(r["x"])((function(){return[Object(r["h"])(u)]})),"section-2":Object(r["x"])((function(){return[Object(r["h"])(o)]})),_:1})]})),mobileLandscape:Object(r["x"])((function(){return[Object(r["h"])(s)]})),_:1})}n("5b09"),n("30fe"),n("d1e0");function c(e,t,n,a,c,i){return a.isMobileLandscape?Object(r["t"])(e.$slots,"mobileLandscape",{key:1}):Object(r["t"])(e.$slots,"default",{key:0})}var i={name:"ScreenRotation",props:{maxHeight:{type:String,require:!0}},setup:function(e){var t=Object(r["r"])(!1),n=window.matchMedia("(max-height: "+e.maxHeight+") and (orientation:landscape)"),a=function(e){return t.value=e.matches};return Object(r["m"])((function(){a(n),n.addEventListener("change",a)})),{isMobileLandscape:t}}},u=n("6b0d"),o=n.n(u);const l=o()(i,[["render",c]]);var s=l,b={class:"ScrollSnap"},f={class:"ScrollSnap-section"},p={class:"ScrollSnap-section"};function d(e,t,n,a,c,i){return Object(r["n"])(),Object(r["f"])("div",b,[Object(r["g"])("section",f,[Object(r["t"])(e.$slots,"section-1",{},void 0,!0)]),Object(r["g"])("section",p,[Object(r["t"])(e.$slots,"section-2",{},void 0,!0)])])}var O={name:"ScrollSnap"};n("51cb");const j=o()(O,[["render",d],["__scopeId","data-v-be0f7552"]]);var h=j,v=function(e){return Object(r["p"])("data-v-2176d224"),e=e(),Object(r["o"])(),e},g={class:"Main"},m={class:"Main-header"},S={class:"Main-contents Sketch",ref:"sketch"},y=v((function(){return Object(r["g"])("footer",{class:"Main-footer"},null,-1)}));function _(e,t,n,a,c,i){var u=Object(r["u"])("Statuses");return Object(r["n"])(),Object(r["f"])("div",g,[Object(r["g"])("header",m,[Object(r["h"])(u)]),Object(r["g"])("main",S,null,512),y])}var k,R,I,w=n("5502"),L=(n("a4d3"),n("e01a"),n("d3b7"),n("25f0"),n("159b"),n("cb29"),n("a9e3"),n("3425")),G=n.n(L),E=(n("fb6a"),n("fd87"),n("907a"),n("9a8c"),n("a975"),n("735e"),n("c1ac"),n("d139"),n("3a7b"),n("d5d6"),n("82f8"),n("e91f"),n("60bd"),n("5f96"),n("3280"),n("3fcc"),n("ca91"),n("25a1"),n("cd26"),n("3c5d"),n("2954"),n("649e"),n("219c"),n("170b"),n("b39a"),n("72f7"),n("d81d"),function(){function e(e,t,n,r){this._rule=e,this._patternEpLeft=t.left,this._patternEpRight=t.right,this._state=n,this._spaceSize=n.length,this._gen=r}return e.prototype.generate=function(){for(var t=this._state.slice(),n=this._spaceSize;n--;){var r=this._state[this._patternEpLeft(n,this._spaceSize)],a=this._state[n],c=this._state[this._patternEpRight(n,this._spaceSize)],i=Math.pow(2,2)*r+Math.pow(2,1)*a+Math.pow(2,0)*c;t[n]=this._rule>>i&1?1:0}return this._state=t,this._gen++,new e(this._rule,{left:this._patternEpLeft,right:this._patternEpRight},this._state,this._gen)},Object.defineProperty(e.prototype,"state",{get:function(){return this._state},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"gen",{get:function(){return this._gen},enumerable:!1,configurable:!0}),e}()),M=function(e,t,n){var r,a=void 0===n?{}:n,c=a.initialState,i=void 0===c?"single":c,u=a.pattern,o=void 0===u?"periodic":u,l=new Int8Array(t);switch(i){case"single":l[~~(t/2)]=1;break;case"random":l=l.map((function(){return Math.floor(2*Math.random())}));break}switch(o){case"periodic":r={left:function(e,t){return e-1>=0?e-1:t-1},right:function(e,t){return(e+1)%t}};break;case"reflective":r={left:function(e,t){return e-1>=0?e-1:e},right:function(e,t){return e+1!==t?(e+1)%t:e}};break}return new E(e,r,l,1)},T=Symbol(),N={Gen:"Gen",RuleType:"RuleType",RuleNumber:"RuleNumber",InitialState:"InitialState",Pattern:"Pattern"},U={UpdateGen:"UpdateGen",UpdateRuleType:"UpdateRuleType",InputRuleNumber:"InputRuleNumber",UpdateInitialState:"UpdateInitialState",UpdatePattern:"UpdatePattern"},P={Sketch:"Sketch"},x=2,A=".Sketch",C=Object(w["a"])({state:{gen:"0",ruleType:"random",ruleNumber:"30",initialState:"single",pattern:"periodic"},getters:(k={},k[N.Gen]=function(e){return e.gen},k[N.RuleType]=function(e){return e.ruleType},k[N.RuleNumber]=function(e){return e.ruleNumber},k[N.InitialState]=function(e){return e.initialState},k[N.Pattern]=function(e){return e.pattern},k),mutations:(R={},R[U.UpdateGen]=function(e,t){e.gen=t.toString()},R[U.UpdateRuleType]=function(e,t){e.ruleType=t},R[U.InputRuleNumber]=function(e,t){e.ruleNumber=t},R[U.UpdateInitialState]=function(e,t){e.initialState=t},R[U.UpdatePattern]=function(e,t){e.pattern=t},R),actions:(I={},I[P.Sketch]=function(e,t){var n=e.commit,r=e.state,a=function(e){var a,c=0,i=0,u=function(t,n){t.forEach((function(t,r){1===t&&(e.fill("#58f898"),e.rect(r*x,(n-1)*x,x,x))}))},o=function(){var n=t.clientWidth,r=t.clientHeight;return c=n/x,i=e.round(r/x),[n,r]},l=function(t){e.clear(),"random"===r.ruleType&&n(U.InputRuleNumber,Math.floor(256*Math.random()).toString()),a=M(Number(r.ruleNumber),c,{initialState:r.initialState,pattern:r.pattern}),u(a.state,a.gen),n(U.UpdateGen,a.gen),e.loop()};e.setup=function(){var t=o(),n=t[0],r=t[1],a=e.createCanvas(n,r);a.style("display","block"),e.selectAll(A).forEach((function(e){return e.mouseClicked(l)}))},e.draw=function(){if(!a||a.gen>i)return e.noLoop();a=a.generate(),u(a.state,a.gen),n(U.UpdateGen,a.gen)},e.windowResized=function(){e.noLoop(),e.clear(),e.noCanvas();var t=o(),r=t[0],a=t[1];e.createCanvas(r,a),n(U.UpdateGen,0)}};new G.a(a,t)},I),modules:{}}),q={class:"Statuses is-dark"};function H(e,t,n,a,c,i){var u=Object(r["u"])("Status"),o=Object(r["u"])("GitHubLink");return Object(r["n"])(),Object(r["f"])("header",q,[Object(r["h"])(u,Object(r["l"])(Object(r["i"])(a.gen)),null,16),Object(r["h"])(u,Object(r["l"])(Object(r["i"])(a.rule)),null,16),Object(r["h"])(o,{url:"https://github.com/l1ck0h/elementary-cellular-automaton"})])}var z={class:"Status nes-text"};function $(e,t,n,a,c,i){return Object(r["n"])(),Object(r["f"])("span",z,[Object(r["g"])("div",null,Object(r["v"])(n.title),1),Object(r["g"])("div",null,Object(r["v"])(n.content),1)])}var D={name:"Status",props:{title:String,content:String}};n("8159");const J=o()(D,[["render",$],["__scopeId","data-v-26972bae"]]);var V=J,F=["href"];function W(e,t,n,a,c,i){return Object(r["n"])(),Object(r["f"])("a",{class:"GitHubLink nes-icon github is-midium",href:n.url,target:"_blank",rel:"noopener noreferrer"},null,8,F)}var Y={name:"GitHubLink",props:{url:String}};n("2a1d");const B=o()(Y,[["render",W],["__scopeId","data-v-e3d85df6"]]);var K=B,Q={name:"Statuses",components:{Status:V,GitHubLink:K},setup:function(){var e=Object(w["b"])(T),t=Object(r["q"])({title:"GEN",content:Object(r["b"])((function(){return e.getters[N.Gen]}))}),n=Object(r["q"])({title:"RULE",content:Object(r["b"])((function(){return e.getters[N.RuleNumber]}))});return{gen:t,rule:n}}};n("34fb");const X=o()(Q,[["render",H]]);var Z=X,ee={name:"Main",components:{Statuses:Z},setup:function(){var e=Object(w["b"])(T),t=Object(r["r"])(null);return Object(r["m"])((function(){return e.dispatch(P.Sketch,t.value)})),{sketch:t}}};n("0052");const te=o()(ee,[["render",_],["__scopeId","data-v-2176d224"]]);var ne=te,re=function(e){return Object(r["p"])("data-v-4e2d3526"),e=e(),Object(r["o"])(),e},ae={class:"Settings nes-container is-rounded with-title is-dark"},ce=re((function(){return Object(r["g"])("span",{class:"Settings-title title"},"ELEMENTARY CELLULAR AUTOMATON",-1)})),ie={class:"Settings-menulist"},ue={class:"Settings-menulist-item"},oe={class:"Settings-menulist-item"},le={class:"Settings-menulist-item"};function se(e,t,n,a,c,i){var u=Object(r["u"])("RadioGroup");return Object(r["n"])(),Object(r["f"])("div",ae,[ce,Object(r["g"])("ul",ie,[Object(r["g"])("li",ue,[Object(r["h"])(u,Object(r["l"])(Object(r["i"])(a.ruleGroup)),null,16)]),Object(r["g"])("li",oe,[Object(r["h"])(u,Object(r["l"])(Object(r["i"])(a.initialStateGroup)),null,16)]),Object(r["g"])("li",le,[Object(r["h"])(u,Object(r["l"])(Object(r["i"])(a.patternGroup)),null,16)])])])}n("b0c0");var be={class:"RadioGroup"},fe={class:"RadioGroup-fieldLabel"},pe={key:0,class:"RadioGroup-attention"},de=["name","value","checked"],Oe={key:0,class:"RadioGroup-writeIn"},je=["onInput"];function he(e,t,n,a,c,i){return Object(r["n"])(),Object(r["f"])("div",be,[Object(r["g"])("label",fe,Object(r["v"])(n.fieldLabel),1),n.attention?(Object(r["n"])(),Object(r["f"])("p",pe,Object(r["v"])(n.attention),1)):Object(r["e"])("",!0),(Object(r["n"])(!0),Object(r["f"])(r["a"],null,Object(r["s"])(n.items,(function(e,c){return Object(r["n"])(),Object(r["f"])("label",{key:c,class:"RadioGroup-radio"},[Object(r["g"])("input",{type:"radio",class:"nes-radio is-dark",name:n.name,value:e.value,checked:e.checked,onChange:t[0]||(t[0]=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return a.onchange&&a.onchange.apply(a,e)})},null,40,de),Object(r["g"])("span",null,Object(r["v"])(e.value),1),e.writeIn?(Object(r["n"])(),Object(r["f"])("div",Oe,[Object(r["g"])("input",Object(r["k"])({class:"nes-input"},e.writeIn.attrs,{class:e.writeIn.hasError?"is-error":"is-dark",onInput:e.writeIn.input}),null,16,je)])):Object(r["e"])("",!0)])})),128))])}var ve={name:"RadioGroup",emits:["onchange"],props:{fieldLabel:{type:String,required:!0},attention:{type:String,required:!1},name:{type:String,required:!0},items:Array},setup:function(e,t){var n=t.emit,r=function(e){return n("onchange",e)};return{onchange:r}}};n("b7a1");const ge=o()(ve,[["render",he],["__scopeId","data-v-37ca0359"]]);var me=ge,Se={name:"Settings",components:{RadioGroup:me},setup:function(){var e=Object(w["b"])(T),t=Object(r["r"])(!1),n=Object(r["r"])(!1),a=Object(r["r"])(""),c=Object(r["r"])(!1),i=Object(r["b"])((function(){return"random"===e.getters[N.RuleType]})),u=Object(r["q"])({fieldLabel:"RULE",attention:"from 0 to 255",name:"rule-select",items:[{value:"RANDOM",checked:!0},{value:"INPUT",checked:!1,writeIn:{attrs:{type:"text",inputmode:"tel",minlength:"0",maxlength:"3",pattern:"[0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5]",required:!0,disabled:i,value:a},hasError:c,input:function(e){c.value=!e.target.checkValidity(),a.value=e.target.value}}}],onchange:function(t){var n=t.target.value;e.commit(U.UpdateRuleType,n.toLowerCase())}}),o=Object(r["q"])({fieldLabel:"INITIAL STATE",name:"initialState-select",items:[{value:"SINGLE",checked:!0},{value:"RANDOM",checked:!1}],onchange:function(t){var n=t.target.value;e.commit(U.UpdateInitialState,n.toLowerCase())}}),l=Object(r["q"])({fieldLabel:"PATTERN",name:"pattern-select",items:[{value:"PERIODIC",checked:!0},{value:"REFLECTIVE",checked:!1}],onchange:function(t){var n=t.target.value;e.commit(U.UpdatePattern,n.toLowerCase())}}),s=function(){i.value?(t.value=!t.value,n.value=!n.value):c.value||(t.value=!t.value,n.value=!n.value,e.commit(U.InputRuleNumber,a.value))};return{toggle:s,isActive:t,isPanelActive:n,ruleGroup:u,initialStateGroup:o,patternGroup:l}}};n("5aba");const ye=o()(Se,[["render",se],["__scopeId","data-v-4e2d3526"]]);var _e=ye,ke=function(e){return Object(r["p"])("data-v-4ddfa1cf"),e=e(),Object(r["o"])(),e},Re={class:"Alert"},Ie=ke((function(){return Object(r["g"])("strong",{class:"nes-text is-warning"}," Sorry! Please rotate your smartphone from landscape to portrait! ",-1)})),we=[Ie];function Le(e,t,n,a,c,i){return Object(r["n"])(),Object(r["f"])("div",Re,we)}var Ge={name:"Alert"};n("3116");const Ee=o()(Ge,[["render",Le],["__scopeId","data-v-4ddfa1cf"]]);var Me=Ee,Te={name:"App",components:{ScreenRotation:s,ScrollSnap:h,Main:ne,Settings:_e,Alert:Me}};n("230f");const Ne=o()(Te,[["render",a]]);var Ue=Ne;Object(r["c"])(Ue).use(C,T).mount("#app")},f066:function(e,t,n){}});
//# sourceMappingURL=app.bd35bd3b.js.map