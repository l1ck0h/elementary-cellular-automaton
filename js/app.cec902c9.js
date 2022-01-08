(function(e){function t(t){for(var r,u,i=t[0],o=t[1],l=t[2],b=0,d=[];b<i.length;b++)u=i[b],Object.prototype.hasOwnProperty.call(c,u)&&c[u]&&d.push(c[u][0]),c[u]=0;for(r in o)Object.prototype.hasOwnProperty.call(o,r)&&(e[r]=o[r]);s&&s(t);while(d.length)d.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,i=1;i<n.length;i++){var o=n[i];0!==c[o]&&(r=!1)}r&&(a.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},c={app:0},a=[];function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/elementary-cellular-automaton/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],o=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var s=o;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},"0d10":function(e,t,n){},"0f2e":function(e,t,n){},"36d3":function(e,t,n){},"46d6":function(e,t,n){},"70cf":function(e,t,n){},"9b2f":function(e,t,n){},b548:function(e,t,n){"use strict";n("46d6")},b8d2:function(e,t,n){"use strict";n("9b2f")},cd49:function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23");function c(e,t,n,c,a,u){var i=Object(r["v"])("ECA");return Object(r["o"])(),Object(r["d"])(i)}n("5b09"),n("30fe");var a={ref:"eca"},u={class:"el-box",ref:"header"},i={class:"el-box --0 el-with-sidebar"},o={id:"sketchIn-wapper",class:"el-box el-not-sidebar"},l={id:"settings-wapper",class:"el-box el-sidebar --sideWidth-1"};function s(e,t,n,c,s,b){var d=Object(r["v"])("Statuses"),p=Object(r["v"])("SketchIn"),f=Object(r["v"])("Settings");return Object(r["o"])(),Object(r["f"])("div",a,[Object(r["g"])("header",u,[Object(r["h"])(d)],512),Object(r["g"])("main",i,[Object(r["g"])("div",o,[Object(r["h"])(p)]),Object(r["g"])("div",l,[Object(r["h"])(f)])])],512)}var b,d,p=n("5502"),f=n("3835"),O=n("ade3"),j=(n("a4d3"),n("e01a"),n("d3b7"),n("25f0"),n("159b"),n("cb29"),n("a9e3"),n("3425")),v=n.n(j),h=n("d4ec"),g=n("bee2"),m=(n("d81d"),n("fd87"),n("907a"),n("9a8c"),n("a975"),n("735e"),n("c1ac"),n("d139"),n("3a7b"),n("d5d6"),n("82f8"),n("e91f"),n("60bd"),n("5f96"),n("3280"),n("3fcc"),n("ca91"),n("25a1"),n("cd26"),n("3c5d"),n("2954"),n("649e"),n("219c"),n("170b"),n("b39a"),n("72f7"),function(){function e(t,n,r,c){Object(h["a"])(this,e),this._rule=t,this._pattern=n,this._state=r,this._spaceSize=r.length,this._gen=c}return Object(g["a"])(e,[{key:"generate",value:function(){var t=this,n=this._state.map((function(e,n){var r,c;switch(t._pattern){case"periodic":r=function(e){return e>0?e-1:t._spaceSize-1},c=function(e){return(e+1)%t._spaceSize};break;case"reflective":r=function(e){return e>0?e-1:e},c=function(e){return e+1!==t._spaceSize?(e+1)%t._spaceSize:e};break}var a=t._state[r(n)],u=e,i=t._state[c(n)],o=Math.pow(2,2)*a+Math.pow(2,1)*u+Math.pow(2,0)*i;return t._rule>>o&1?1:0}));return this._state=n,this._gen++,new e(this._rule,this._pattern,this._state,this._gen)}},{key:"state",get:function(){return this._state}},{key:"gen",get:function(){return this._gen}}]),e}()),y=function(e,t,n,r){var c=new Int8Array(n);switch(r){case"single":c[~~(n/2)]=1;break;case"random":c=c.map((function(){return Math.floor(2*Math.random())}));break}return new m(e,t,c,1)},S=Symbol(),k={Gen:"Gen",RuleType:"RuleType",RuleNumber:"RuleNumber",InitialState:"InitialState",Pattern:"Pattern"},w={UpdateGen:"UpdateGen",UpdateRuleType:"UpdateRuleType",InputRuleNumber:"InputRuleNumber",UpdateInitialState:"UpdateInitialState",UpdatePattern:"UpdatePattern"},I={ShowModal:"ShowModal",CloseModal:"CloseModal",Sketch:"Sketch"},_=Object(p["a"])({state:{gen:0,ruleType:"random",ruleNumber:"30",initialState:"single",pattern:"periodic"},getters:(b={},Object(O["a"])(b,k.Gen,(function(e){return e.gen.toString()})),Object(O["a"])(b,k.RuleType,(function(e){return e.ruleType})),Object(O["a"])(b,k.RuleNumber,(function(e){return e.ruleNumber})),Object(O["a"])(b,k.InitialState,(function(e){return e.initialState})),Object(O["a"])(b,k.Pattern,(function(e){return e.pattern})),b),mutations:(d={},Object(O["a"])(d,w.UpdateGen,(function(e,t){e.gen=t})),Object(O["a"])(d,w.UpdateRuleType,(function(e,t){e.ruleType=t})),Object(O["a"])(d,w.InputRuleNumber,(function(e,t){e.ruleNumber=t})),Object(O["a"])(d,w.UpdateInitialState,(function(e,t){e.initialState=t})),Object(O["a"])(d,w.UpdatePattern,(function(e,t){e.pattern=t})),d),actions:Object(O["a"])({},I.Sketch,(function(e,t){var n=e.commit,r=e.state,c=8,a=function(e){var a,u,i,o=function(t,n){t.forEach((function(t,r){1===t&&e.fill("#58f898").rect(r*c,(n-1)*c,c,c)}))},l=function(){var e=t.clientWidth,n=t.clientHeight;return a=Math.round(e/c),u=Math.round(n/c),[e,n]},s=function(){e.clear(),"random"===r.ruleType&&n(w.InputRuleNumber,Math.floor(256*Math.random()).toString()),i=y(Number(r.ruleNumber),r.pattern,a,r.initialState),o(i.state,i.gen),n(w.UpdateGen,i.gen),e.removeElements(),e.loop()};e.setup=function(){var n,r=l(),c=Object(f["a"])(r,2),a=c[0],u=c[1];e.createCanvas(a,u).style("display","block"),e.createDiv("CLICK/TOUCH HERE TO START!").style("position","absolute").style("color","#fff"),null===(n=e.select("#".concat(t.id)))||void 0===n||n.mouseClicked(s)},e.draw=function(){if(!i||i.gen>u)return e.noLoop();i=i.generate(),o(i.state,i.gen),n(w.UpdateGen,i.gen)},e.windowResized=function(){e.noLoop(),e.clear(),e.noCanvas();var t=l(),r=Object(f["a"])(t,2),c=r[0],a=r[1];e.createCanvas(c,a),n(w.UpdateGen,0)}};new v.a(a,t)})),modules:{}});function R(e,t,n,c,a,u){var i=Object(r["v"])("Status"),o=Object(r["v"])("GitHubLink");return Object(r["o"])(),Object(r["f"])(r["a"],null,[Object(r["h"])(i,Object(r["l"])(Object(r["i"])(c.gen)),null,16),Object(r["h"])(i,Object(r["l"])(Object(r["i"])(c.rule)),null,16),Object(r["h"])(o,{url:"https://github.com/l1ck0h/elementary-cellular-automaton"})],64)}var T={id:"status",class:"el-box --0 nes-text"};function G(e,t,n,c,a,u){return Object(r["o"])(),Object(r["f"])("span",T,[Object(r["g"])("div",null,Object(r["w"])(n.title),1),Object(r["g"])("div",null,Object(r["w"])(n.content),1)])}var L={name:"Status",props:{title:String,content:String}},N=(n("b8d2"),n("6b0d")),E=n.n(N);const U=E()(L,[["render",G],["__scopeId","data-v-04335f25"]]);var M=U,C={id:"github-link",class:"el-box --0"},x=["href"];function P(e,t,n,c,a,u){return Object(r["o"])(),Object(r["f"])("span",C,[Object(r["g"])("a",{class:"nes-icon github is-midium",href:n.url,target:"_blank",rel:"noopener noreferrer"},null,8,x)])}var A={name:"GitHubLink",props:{url:String}};n("ff01");const z=E()(A,[["render",P],["__scopeId","data-v-139e3ffe"]]);var H=z,q={name:"Statuses",components:{Status:M,GitHubLink:H},setup:function(){var e=Object(p["b"])(S),t=Object(r["r"])({title:"GEN",content:Object(r["b"])((function(){return e.getters[k.Gen]}))}),n=Object(r["r"])({title:"RULE",content:Object(r["b"])((function(){return e.getters[k.RuleNumber]}))});return{gen:t,rule:n}}};const D=E()(q,[["render",R]]);var J=D,W={id:"sketchIn",ref:"sketchIn"};function F(e,t,n,c,a,u){return Object(r["o"])(),Object(r["f"])("div",W,null,512)}var K={name:"SketchIn",setup:function(){var e=Object(p["b"])(S),t=Object(r["s"])(null);return Object(r["n"])((function(){return e.dispatch(I.Sketch,t.value)})),{sketchIn:t}}};n("d819");const V=E()(K,[["render",F],["__scopeId","data-v-69b79e50"]]);var Y=V,$={class:"nes-container is-rounded with-title is-dark"},B=Object(r["g"])("span",{class:"title"},"ELEMENTARY CELLULAR AUTOMATON",-1),Q={class:"el-center"},X={class:"el-stack"};function Z(e,t,n,c,a,u){var i=Object(r["v"])("InputRange"),o=Object(r["v"])("RadioGroup");return Object(r["o"])(),Object(r["f"])("div",$,[B,Object(r["g"])("div",Q,[Object(r["g"])("ul",X,[Object(r["g"])("li",null,[Object(r["h"])(o,Object(r["l"])(Object(r["i"])(c.ruleGroup)),{writeIn:Object(r["y"])((function(){return[Object(r["h"])(i,Object(r["l"])(Object(r["i"])(c.writeIn)),null,16)]})),_:1},16)]),Object(r["g"])("li",null,[Object(r["h"])(o,Object(r["l"])(Object(r["i"])(c.initialStateGroup)),null,16)]),Object(r["g"])("li",null,[Object(r["h"])(o,Object(r["l"])(Object(r["i"])(c.patternGroup)),null,16)])])])])}n("b0c0");var ee={id:"radio-group",class:"el-box"},te={id:"radio-group-wrapper",class:"el-stack"},ne={key:0,class:"el-stack-exception --small"},re=["name","value","checked"],ce={style:{cursor:"pointer"}};function ae(e,t,n,c,a,u){return Object(r["o"])(),Object(r["f"])("div",ee,[Object(r["g"])("div",te,[Object(r["g"])("label",null,Object(r["w"])(n.fieldLabel),1),n.attention?(Object(r["o"])(),Object(r["f"])("p",ne,Object(r["w"])(n.attention),1)):Object(r["e"])("",!0),(Object(r["o"])(!0),Object(r["f"])(r["a"],null,Object(r["t"])(n.items,(function(a,u){return Object(r["o"])(),Object(r["f"])("label",{key:u},[Object(r["g"])("input",{type:"radio",class:"nes-radio is-dark",name:n.name,value:a.value,checked:a.checked,onChange:t[0]||(t[0]=function(){return c.onchange&&c.onchange.apply(c,arguments)})},null,40,re),Object(r["g"])("span",ce,Object(r["w"])(a.value),1),a.writeIn?Object(r["u"])(e.$slots,"writeIn",{key:0},void 0,!0):Object(r["e"])("",!0)])})),128))])])}var ue={name:"RadioGroup",emits:["onchange"],props:{fieldLabel:{type:String,required:!0},attention:{type:String,required:!1},name:{type:String,required:!0},items:Array},setup:function(e,t){var n=t.emit,r=function(e){return n("onchange",e)};return{onchange:r}}};n("e799");const ie=E()(ue,[["render",ae],["__scopeId","data-v-43fcf70a"]]);var oe=ie;function le(e,t,n,c,a,u){return Object(r["o"])(),Object(r["f"])("input",Object(r["k"])({type:"range",class:"el-box --0 nes-input"},n.attrs,{onInput:t[0]||(t[0]=function(){return e.oninput&&e.oninput.apply(e,arguments)})}),null,16)}var se={name:"InputRange",emits:["oninput"],props:{attrs:{type:Object,required:!1}}};const be=E()(se,[["render",le]]);var de=be,pe={name:"Settings",components:{RadioGroup:oe,InputRange:de},setup:function(){var e=Object(p["b"])(S),t=Object(r["r"])({fieldLabel:"INITIAL STATE",name:"initialState-select",items:[{value:"SINGLE",checked:!0},{value:"RANDOM",checked:!1}],onchange:function(t){var n=t.target.value;e.commit(w.UpdateInitialState,n.toLowerCase())}}),n=Object(r["r"])({fieldLabel:"PATTERN",name:"pattern-select",items:[{value:"PERIODIC",checked:!0},{value:"REFLECTIVE",checked:!1}],onchange:function(t){var n=t.target.value;e.commit(w.UpdatePattern,n.toLowerCase())}}),c=Object(r["r"])({fieldLabel:"RULE",attention:"from 0 to 255",name:"rule-select",items:[{value:"RANDOM",checked:!0},{value:"INPUT",checked:!1,writeIn:!0}],onchange:function(t){var n=t.target.value;e.commit(w.UpdateRuleType,n.toLowerCase())}}),a=Object(r["b"])((function(){return"random"===e.getters[k.RuleType]})),u=Object(r["b"])((function(){return e.getters[k.RuleNumber]})),i=Object(r["r"])({attrs:{min:"0",max:"255",disabled:a,value:u},oninput:function(t){return e.commit(w.InputRuleNumber,t.target.value)}});return{initialStateGroup:t,patternGroup:n,ruleGroup:c,writeIn:i}}};const fe=E()(pe,[["render",Z]]);var Oe=fe,je={name:"ECA",components:{Statuses:J,SketchIn:Y,Settings:Oe},setup:function(){var e=Object(p["b"])(S),t=Object(r["s"])(null),n=Object(r["s"])(null),c=function(){var e,r;return null===(e=t.value)||void 0===e?void 0:e.style.setProperty("--space-top","".concat(null===(r=n.value)||void 0===r?void 0:r.clientHeight,"px"))},a=Object(r["r"])({title:"GEN",content:Object(r["b"])((function(){return e.getters[k.Gen]}))}),u=Object(r["r"])({title:"RULE",content:Object(r["b"])((function(){return e.getters[k.RuleNumber]}))});return Object(r["n"])((function(){c(),window.addEventListener("resize",c)})),Object(r["m"])((function(){return window.removeEventListener("resize",c)})),{eca:t,header:n,gen:a,rule:u}}};n("f8dc");const ve=E()(je,[["render",s],["__scopeId","data-v-da57d6d0"]]);var he=ve,ge={name:"App",components:{ECA:he}};n("b548");const me=E()(ge,[["render",c]]);var ye=me;Object(r["c"])(ye).use(_,S).mount("#app")},d819:function(e,t,n){"use strict";n("0f2e")},e799:function(e,t,n){"use strict";n("70cf")},f8dc:function(e,t,n){"use strict";n("36d3")},ff01:function(e,t,n){"use strict";n("0d10")}});
//# sourceMappingURL=app.cec902c9.js.map