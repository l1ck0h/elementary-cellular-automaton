(function(e){function t(t){for(var c,i,o=t[0],u=t[1],l=t[2],b=0,p=[];b<o.length;b++)i=o[b],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&p.push(r[i][0]),r[i]=0;for(c in u)Object.prototype.hasOwnProperty.call(u,c)&&(e[c]=u[c]);s&&s(t);while(p.length)p.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],c=!0,o=1;o<n.length;o++){var u=n[o];0!==r[u]&&(c=!1)}c&&(a.splice(t--,1),e=i(i.s=n[0]))}return e}var c={},r={app:0},a=[];function i(t){if(c[t])return c[t].exports;var n=c[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=c,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)i.d(n,c,function(t){return e[t]}.bind(null,c));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/elementary-cellular-automaton/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],u=o.push.bind(o);o.push=t,o=o.slice();for(var l=0;l<o.length;l++)t(o[l]);var s=u;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},"0493":function(e,t,n){"use strict";n("fcde")},1211:function(e,t,n){"use strict";n("4d4d")},"29c9":function(e,t,n){"use strict";n("499c")},3202:function(e,t,n){"use strict";n("a003")},"47df":function(e,t,n){},"499c":function(e,t,n){},"4d4d":function(e,t,n){},"55e3":function(e,t,n){},"6e45":function(e,t,n){"use strict";n("c9f8")},a003:function(e,t,n){},a1c0:function(e,t,n){"use strict";n("47df")},c9f8:function(e,t,n){},cd49:function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var c=n("7a23");function r(e,t,n,r,a,i){var o=Object(c["w"])("ECA");return Object(c["p"])(),Object(c["d"])(o)}n("5b09"),n("30fe");var a=function(e){return Object(c["r"])("data-v-6558c716"),e=e(),Object(c["q"])(),e},i={id:"eca",ref:"eca",class:"el-box el-box--invert el-box--padding:0"},o={class:"el-box el-box--invert",ref:"header"},u={class:"el-center"},l={class:"el-cluster el-cluster--justify:space-between",style:{width:"100%"}},s=a((function(){return Object(c["g"])("h1",null,"ECA",-1)})),b={class:"el-center"};function p(e,t,n,r,a,p){var d=Object(c["w"])("Statuses"),f=Object(c["w"])("SketchIn"),O=Object(c["w"])("Dialogs");return Object(c["p"])(),Object(c["f"])(c["a"],null,[Object(c["g"])("div",i,[Object(c["g"])("header",o,[Object(c["g"])("div",u,[Object(c["g"])("div",l,[s,Object(c["h"])(d)])])],512),Object(c["g"])("main",b,[Object(c["h"])(f)])],512),Object(c["h"])(O)],64)}var d={id:"statuses",class:"el-cluster"};function f(e,t,n,r,a,i){var o=Object(c["w"])("GitHubLink"),u=Object(c["w"])("Status");return Object(c["p"])(),Object(c["f"])("div",d,[Object(c["h"])(o,{url:"https://github.com/l1ck0h/elementary-cellular-automaton"}),Object(c["h"])(u,Object(c["l"])(Object(c["i"])(r.gen)),null,16),Object(c["h"])(u,Object(c["l"])(Object(c["i"])(r.state)),null,16),Object(c["h"])(u,Object(c["l"])(Object(c["i"])(r.rule)),null,16)])}var O,j,g=n("5502"),v=n("ade3"),h=(n("a4d3"),n("e01a"),n("d3b7"),n("25f0"),n("159b"),n("cb29"),n("a9e3"),n("3425")),m=n.n(h),y=n("d4ec"),k=n("bee2"),S=(n("d81d"),n("fd87"),n("907a"),n("9a8c"),n("a975"),n("735e"),n("c1ac"),n("d139"),n("3a7b"),n("d5d6"),n("82f8"),n("e91f"),n("60bd"),n("5f96"),n("3280"),n("3fcc"),n("ca91"),n("25a1"),n("cd26"),n("3c5d"),n("2954"),n("649e"),n("219c"),n("170b"),n("b39a"),n("72f7"),function(){function e(t,n,c,r){Object(y["a"])(this,e),this._rule=t,this._pattern=n,this._state=c,this._spaceSize=c.length,this._gen=r}return Object(k["a"])(e,[{key:"generate",value:function(){var t=this,n=this._state.map((function(e,n){var c,r;switch(t._pattern){case"periodic":c=function(e){return e>0?e-1:t._spaceSize-1},r=function(e){return(e+1)%t._spaceSize};break;case"reflective":c=function(e){return e>0?e-1:e},r=function(e){return e+1!==t._spaceSize?(e+1)%t._spaceSize:e};break}var a=t._state[c(n)],i=e,o=t._state[r(n)],u=Math.pow(2,2)*a+Math.pow(2,1)*i+Math.pow(2,0)*o;return t._rule>>u&1?1:0}));return this._state=n,this._gen++,new e(this._rule,this._pattern,this._state,this._gen)}},{key:"state",get:function(){return this._state}},{key:"gen",get:function(){return this._gen}}]),e}()),w=function(e,t,n,c){var r=new Int8Array(t);switch(n){case"single":r[~~(t/2)]=1;break;case"random":r=r.map((function(){return Math.floor(2*Math.random())}));break}return new S(e,c||"periodic",r,1)},_=Symbol(),I={Gen:"Gen",RuleType:"RuleType",RuleNumber:"RuleNumber",InitialState:"InitialState",OpenDialog:"OpenDialog"},x={UpdateGen:"UpdateGen",UpdateRuleType:"UpdateRuleType",InputRuleNumber:"InputRuleNumber",UpdateInitialState:"UpdateInitialState",OpenDialog:"OpenDialog"},R={ShowModal:"ShowModal",CloseModal:"CloseModal",Sketch:"Sketch"},D=Object(g["a"])({state:{gen:0,ruleType:"random",ruleNumber:"30",initialState:"single",openDialog:"none"},getters:(O={},Object(v["a"])(O,I.Gen,(function(e){return e.gen.toString()})),Object(v["a"])(O,I.RuleType,(function(e){return e.ruleType})),Object(v["a"])(O,I.RuleNumber,(function(e){return e.ruleNumber})),Object(v["a"])(O,I.InitialState,(function(e){return e.initialState})),Object(v["a"])(O,I.OpenDialog,(function(e){return e.openDialog})),O),mutations:(j={},Object(v["a"])(j,x.UpdateGen,(function(e,t){e.gen=t})),Object(v["a"])(j,x.UpdateRuleType,(function(e,t){e.ruleType=t})),Object(v["a"])(j,x.InputRuleNumber,(function(e,t){e.ruleNumber=t})),Object(v["a"])(j,x.UpdateInitialState,(function(e,t){e.initialState=t})),Object(v["a"])(j,x.OpenDialog,(function(e,t){e.openDialog=t})),j),actions:Object(v["a"])({},R.Sketch,(function(e,t){var n=e.commit,c=e.state,r=8,a=function(e){var a,i,o,u=function(t,n){t.forEach((function(t,c){1===t&&e.fill("#00933B").rect(c*r,(n-1)*r,r,r)}))},l=function(){var n=t.clientWidth,c=t.clientHeight;a=Math.round(n/r),i=Math.round(c/r)-2,e.createCanvas(n,c).style("display","block").style("cursor","pointer")},s=function(){e.clear(),"random"===c.ruleType&&n(x.InputRuleNumber,Math.floor(256*Math.random()).toString()),o=w(Number(c.ruleNumber),a,c.initialState),u(o.state,o.gen),n(x.UpdateGen,o.gen),e.removeElements(),e.loop()};e.setup=function(){var n;l(),e.createDiv("CLICK/TOUCH HERE TO START!").style("position","absolute").style("color","var(--color-white)").style("text-align","center").style("cursor","pointer"),null===(n=e.select("#".concat(t.id)))||void 0===n||n.mouseClicked(s)},e.draw=function(){if(!o||o.gen>i)return e.noLoop();o=o.generate(),u(o.state,o.gen),n(x.UpdateGen,o.gen)},e.windowResized=function(){e.noLoop(),e.clear(),e.noCanvas(),l(),n(x.UpdateGen,0)}};new m.a(a,t)})),modules:{}}),C={class:"github-link el-box el-box--invert el-box--padding:0"},T={class:"el-center el-center--gutters:s-1"},N=["href"];function G(e,t,n,r,a,i){return Object(c["p"])(),Object(c["f"])("span",C,[Object(c["g"])("div",T,[Object(c["g"])("a",{class:"nes-icon github",href:n.url,target:"_blank",rel:"noopener noreferrer"},null,8,N)])])}var M={name:"GitHubLink",props:{url:String}},U=(n("6e45"),n("6b0d")),E=n.n(U);const A=E()(M,[["render",G],["__scopeId","data-v-1087a674"]]);var z=A;function L(e,t,n,r,a,i){return Object(c["p"])(),Object(c["f"])("span",{class:"status el-box el-box--invert el-box--padding:0 nes-text",style:Object(c["m"])(n.highlight?"z-index: var(--zIndex-highlight)":"")},[Object(c["g"])("div",{class:"el-center el-center--gutters:s-1",style:Object(c["m"])(r.clickable?"cursor: pointer":""),onClick:t[0]||(t[0]=function(t){return e.$emit("onclick")})},[Object(c["g"])("div",null,Object(c["x"])(n.title),1),Object(c["g"])("div",null,Object(c["x"])(n.content),1)],4)],4)}var P={name:"Status",emits:["onclick"],props:{title:String,content:String,highlight:Boolean},setup:function(e,t){var n=t.attrs;return{clickable:Object(c["t"])(void 0!==n.onclick)}}};n("0493");const H=E()(P,[["render",L],["__scopeId","data-v-7c32be14"]]);var $=H,q={name:"ECA",components:{GitHubLink:z,Status:$},setup:function(){var e=Object(g["b"])(_),t=Object(c["s"])({title:"GEN",content:Object(c["b"])((function(){return e.getters[I.Gen]}))}),n=Object(c["s"])({title:"STATE",content:Object(c["b"])((function(){return e.getters[I.InitialState].toUpperCase()})),highlight:Object(c["b"])((function(){return"state"===e.getters[I.OpenDialog]})),onclick:function(){return e.commit(x.OpenDialog,"state")}}),r=Object(c["s"])({title:"RULE",content:Object(c["b"])((function(){return e.getters[I.RuleNumber]})),highlight:Object(c["b"])((function(){return"rule"===e.getters[I.OpenDialog]})),onclick:function(){return e.commit(x.OpenDialog,"rule")}});return{state:n,gen:t,rule:r}}};const B=E()(q,[["render",f]]);var J=B,K={id:"sketchIn",ref:"sketchIn"};function W(e,t,n,r,a,i){return Object(c["p"])(),Object(c["f"])("div",K,null,512)}var F={name:"SketchIn",setup:function(){var e=Object(g["b"])(_),t=Object(c["t"])(null);return Object(c["o"])((function(){return e.dispatch(R.Sketch,t.value)})),{sketchIn:t}}};n("a1c0");const Q=E()(F,[["render",W],["__scopeId","data-v-07576453"]]);var V=Q;function X(e,t,n,r,a,i){var o=Object(c["w"])("InputRange"),u=Object(c["w"])("Setting"),l=Object(c["w"])("Dialog");return Object(c["p"])(),Object(c["f"])(c["a"],null,["rule"===r.openDialog?(Object(c["p"])(),Object(c["d"])(l,{key:0,onClose:r.close},{default:Object(c["z"])((function(){return[Object(c["h"])(u,Object(c["l"])(Object(c["i"])(r.ruleGroup)),{default:Object(c["z"])((function(){return[Object(c["h"])(o,Object(c["l"])(Object(c["i"])(r.writeIn)),null,16)]})),_:1},16)]})),_:1},8,["onClose"])):Object(c["e"])("",!0),"state"===r.openDialog?(Object(c["p"])(),Object(c["d"])(l,{key:1,onClose:r.close},{default:Object(c["z"])((function(){return[Object(c["h"])(u,Object(c["l"])(Object(c["i"])(r.stateGroup)),null,16)]})),_:1},8,["onClose"])):Object(c["e"])("",!0)],64)}var Y={class:"el-imposter"};function Z(e,t,n,r,a,i){return Object(c["p"])(),Object(c["f"])("div",{class:"overlay",onClick:t[2]||(t[2]=Object(c["A"])((function(t){return e.$emit("close")}),["self"]))},[Object(c["g"])("div",Y,[Object(c["g"])("div",{class:"dialog el-box el-box--invert el-box--padding:0",onClick:t[1]||(t[1]=Object(c["A"])((function(t){return e.$emit("close")}),["self"]))},[Object(c["g"])("i",{class:"nes-icon close is-small",onClick:t[0]||(t[0]=function(t){return e.$emit("close")})}),Object(c["v"])(e.$slots,"default",{},void 0,!0)])])])}var ee={name:"Dialog",emits:["close"]};n("dc32");const te=E()(ee,[["render",Z],["__scopeId","data-v-85c6859a"]]);var ne=te;function ce(e,t,n,r,a,i){return Object(c["p"])(),Object(c["f"])("input",Object(c["k"])({class:"input-range",type:"range"},n.attrs,{onInput:t[0]||(t[0]=function(){return e.oninput&&e.oninput.apply(e,arguments)})}),null,16)}var re={name:"InputRange",emits:["oninput"],props:{attrs:{type:Object,required:!1}}};const ae=E()(re,[["render",ce]]);var ie=ae,oe=(n("b0c0"),{class:"setting nes-container is-rounded with-title is-dark"}),ue={class:"title"},le={class:"el-center"},se={class:"el-box el-box--invert"},be={class:"el-stack",style:{"--space":"var(--s-1)"}},pe=["name","value","checked"],de={style:{cursor:"pointer"}};function fe(e,t,n,r,a,i){return Object(c["p"])(),Object(c["f"])("div",oe,[Object(c["g"])("span",ue,Object(c["x"])(n.title),1),Object(c["g"])("div",le,[Object(c["g"])("div",se,[Object(c["g"])("div",be,[(Object(c["p"])(!0),Object(c["f"])(c["a"],null,Object(c["u"])(n.items,(function(r,a){return Object(c["p"])(),Object(c["f"])("label",{key:a,class:"el-stack"},[Object(c["g"])("input",{type:"radio",class:"nes-radio is-dark",name:n.name,value:r.value,checked:r.checked,onChange:t[0]||(t[0]=function(t){return e.$emit("onchange")})},null,40,pe),Object(c["g"])("span",de,Object(c["x"])(r.value),1),r.writeIn?Object(c["v"])(e.$slots,"default",{key:0},void 0,!0):Object(c["e"])("",!0)])})),128))])])])])}var Oe={name:"Setting",emits:["onchange"],props:{title:{type:String,required:!0},attention:{type:String,required:!1},name:{type:String,required:!0},items:Array}};n("29c9");const je=E()(Oe,[["render",fe],["__scopeId","data-v-cc6705ca"]]);var ge=je,ve={name:"Dialogs",components:{Dialog:ne,InputRange:ie,Setting:ge},setup:function(){var e=Object(g["b"])(_),t=Object(c["b"])((function(){return e.getters[I.OpenDialog]})),n=function(){return e.commit(x.OpenDialog,"none")},r=Object(c["s"])({title:"RULE",name:"rule-select",items:[{value:"RANDOM",checked:Object(c["b"])((function(){return"random"===e.getters[I.RuleType]}))},{value:"INPUT",checked:Object(c["b"])((function(){return"input"===e.getters[I.RuleType]})),writeIn:!0}],onchange:function(t){var n=t.target.value;e.commit(x.UpdateRuleType,n.toLowerCase())}}),a=Object(c["s"])({attrs:{min:"0",max:"255",disabled:Object(c["b"])((function(){return"random"===e.getters[I.RuleType]})),value:Object(c["b"])((function(){return e.getters[I.RuleNumber]}))},oninput:function(t){return e.commit(x.InputRuleNumber,t.target.value)}}),i=Object(c["s"])({title:"STATE",name:"state-select",items:[{value:"SINGLE",checked:Object(c["b"])((function(){return"single"===e.getters[I.InitialState]}))},{value:"RANDOM",checked:Object(c["b"])((function(){return"random"===e.getters[I.InitialState]})),writeIn:!1}],onchange:function(t){var n=t.target.value;e.commit(x.UpdateInitialState,n.toLowerCase())}});return{openDialog:t,close:n,ruleGroup:r,writeIn:a,stateGroup:i}}};const he=E()(ve,[["render",X]]);var me=he,ye={name:"ECA",components:{Statuses:J,SketchIn:V,Dialogs:me},setup:function(){var e=Object(c["t"])(null),t=Object(c["t"])(null),n=function(){var n,c;return null===(n=e.value)||void 0===n?void 0:n.style.setProperty("--space-top","".concat(null===(c=t.value)||void 0===c?void 0:c.clientHeight,"px"))};return Object(c["o"])((function(){n(),window.addEventListener("resize",n)})),Object(c["n"])((function(){return window.removeEventListener("resize",n)})),{eca:e,header:t}}};n("1211");const ke=E()(ye,[["render",p],["__scopeId","data-v-6558c716"]]);var Se=ke,we={name:"App",components:{ECA:Se}};n("3202");const _e=E()(we,[["render",r]]);var Ie=_e;Object(c["c"])(Ie).use(D,_).mount("#app")},dc32:function(e,t,n){"use strict";n("55e3")},fcde:function(e,t,n){}});
//# sourceMappingURL=app.4ae70619.js.map