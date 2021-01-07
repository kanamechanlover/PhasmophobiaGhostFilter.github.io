(function(t){function e(e){for(var i,s,o=e[0],u=e[1],c=e[2],f=0,h=[];f<o.length;f++)s=o[f],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&h.push(r[s][0]),r[s]=0;for(i in u)Object.prototype.hasOwnProperty.call(u,i)&&(t[i]=u[i]);l&&l(e);while(h.length)h.shift()();return a.push.apply(a,c||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],i=!0,o=1;o<n.length;o++){var u=n[o];0!==r[u]&&(i=!1)}i&&(a.splice(e--,1),t=s(s.s=n[0]))}return t}var i={},r={app:0},a=[];function s(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=i,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)s.d(n,i,function(e){return t[e]}.bind(null,i));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="PhasmophobiaGhostFilter.github.io/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],u=o.push.bind(o);o.push=e,o=o.slice();for(var c=0;c<o.length;c++)e(o[c]);var l=u;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";n("85ec")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var i=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("GhostFilterTable")],1)},a=[],s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("table",{staticClass:"mx-8 w-75 table table-sm mx-auto border rounded font-weight-bold"},[n("HeaderRow",{attrs:{traits:t.headers},on:{changed:t.traitStatusChanged}}),t._l(t.items,(function(e){return n("GhostRow",{key:e.name,ref:"ghostRows",refInFor:!0,attrs:{ghost:e.name,traits:t.headers,myTraits:e.traits}})}))],2)},o=[],u=(n("c740"),n("4160"),n("d81d"),n("159b"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("tr",[n("td",{staticClass:"text-nowrap"},[n("div",[t._v("ゴースト名")]),n("div",[n("button",{staticClass:"btn btn-outline-warning btn-sm font-weight-bold",on:{click:t.clear}},[t._v(" クリア⇒ ")])])]),t._l(t.traitsObj,(function(e){return n("td",{key:e.key,staticClass:"position-relative pb-2"},[n("div",{staticClass:"w-100 h-100"},[n("div",{staticClass:"text-center"},[t._v(t._s(e.name))]),n("div",{staticClass:"text-center position-absolute fixed-bottom",staticStyle:{bottom:"8px"}},[n("trait-status",{ref:"status",refInFor:!0,on:{changed:function(n){return t.statusChanged(e.key,n)}}})],1),n("div",{staticClass:"invisible"},[n("trait-status")],1)])])}))],2)}),c=[],l=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-button-group",{attrs:{size:"sm"}},t._l(t.options,(function(e,i){return n("b-button",{key:e.value,attrs:{variant:t.variant(i)},on:{click:function(n){return t.changed(e.value)}}},[t._v(" "+t._s(e.text)+" ")])})),1)},f=[],h={methods:{variant:function(t){var e=this.selected===this.options[t].value?"":"outline-";return e+this.options[t].variant},changed:function(t){console.log([this.selected,t]),this.selected!==t&&(this.selected=t,this.$emit("changed",{selected:t}))},reset:function(){this.changed("none")}},data:function(){return{options:[{text:"有",value:"with",variant:"success"},{text:"？",value:"none",variant:"secondary"},{text:"無",value:"without",variant:"danger"}],selected:"none"}}},d=h,b=n("2877"),p=Object(b["a"])(d,l,f,!1,null,null,null),g=p.exports,m={components:{TraitStatus:g},props:{traits:String},methods:{statusChanged:function(t,e){this.$emit("changed",{key:t,status:"none"!==e.selected?e.selected:void 0})},clear:function(){this.$refs["status"].forEach((function(t){t.reset()}))}},data:function(){return{traitsObj:JSON.parse(this.traits)}}},v=m,w=(n("e11c"),Object(b["a"])(v,u,c,!1,null,null,null)),y=w.exports,x=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("tr",t._l(t.columns,(function(e,i){return n("td",{key:i,class:[t.remaining?"table-success":"table-light","text-nowrap"]},["string"===typeof e?n("div",[t._v(" "+t._s(e)+" ")]):"boolean"===typeof e?n("div",[n("b-iconstack",{attrs:{"font-scale":"1"}},[e?n("b-icon",{attrs:{icon:"square",scale:"1"}}):t._e(),e&&t.remaining?n("b-icon",{attrs:{icon:"check",scale:"1"}}):t._e()],1)],1):n("div",[t._v(" "+t._s(t.name)+" "+t._s(typeof e)+" "+t._s(typeof i)+" ")])])})),0)},_=[],k=(n("99af"),n("caad"),n("c975"),n("45fc"),n("b64b"),n("07ac"),n("ac1f"),n("2532"),n("1276"),{props:{ghost:String,traits:String,myTraits:String},methods:{setTrait:function(t,e){t in this.traitStatus&&(this.traitStatus[t].with="with"===e,this.traitStatus[t].without="without"===e),this.remaining=this.isRemaining()},isRemaining:function(){var t=this.myTraits.split(","),e=this;return!Object.keys(this.traitStatus).some((function(n){var i=e.traitStatus[n];return!(!t.includes(n)||!i.without)||!(t.includes(n)||!i.with)}))}},data:function(){var t=this,e=JSON.parse(this.traits),n={};e.forEach((function(t){n[t.key]={with:!1,without:!1}}));var i=Object.values(e).map((function(t){return t.key})),r=this.myTraits.split(","),a=[this.ghost].concat(i.map((function(t){return-1!=r.indexOf(t)})));return console.log(a),{name:function(){return t.ghost},columns:a,traitStatus:n,remaining:!0}}}),O=k,S=(n("9983"),Object(b["a"])(O,x,_,!1,null,null,null)),j=S.exports,C={components:{HeaderRow:y,GhostRow:j},methods:{traitStatusChanged:function(t){console.log(t);var e=this.fields.findIndex((function(e){return e.key===t.key}));if(!(e<0)&&"status"in this.fields[e]){this.fields[e]["status"]=t.status;var n=this.fields[e];this.$refs.ghostRows.forEach((function(e){e.setTrait(t.key,n.status)}))}}},data:function(){var t=[{key:"level5",name:"レベル5"},{key:"box",name:"スピリットボックス"},{key:"finger",name:"指紋"},{key:"orb",name:"ゴーストオーブ"},{key:"writing",name:"ゴーストライティング"},{key:"freezing",name:"氷点下の温度"}],e=t.map((function(t){return Object.assign(t,{changeable:!0,status:""})}));return{fields:e,headers:JSON.stringify(t),items:[{name:"スピリット",traits:"box,finger,writing"},{name:"レイス",traits:"box,finger,freezing"},{name:"ファントム",traits:"level5,orb,freezing"},{name:"ポルターガイスト",traits:"box,finger,orb"},{name:"バンシー",traits:"level5,finger,freezing"},{name:"ジン",traits:"level5,box,orb"},{name:"メア―",traits:"box,orb,freezing"},{name:"レヴナント",traits:"level5,finger,writing"},{name:"シェード",traits:"level5,orb,writing"},{name:"デーモン",traits:"box,writing,freezing"},{name:"幽霊",traits:"orb,writing,freezing"},{name:"鬼",traits:"level5,box,writing"}],traitStatus:{level5:{with:!1,without:!1},box:{with:!1,without:!1},finger:{with:!1,without:!1},orb:{with:!1,without:!1},writing:{with:!1,without:!1},freezing:{with:!1,without:!1}}}}},T=C,$=Object(b["a"])(T,s,o,!1,null,null,null),z=$.exports,P={name:"App",router:{base:"/PhasmophobiaGhostFilter.github.io/"},components:{GhostFilterTable:z}},E=P,R=(n("034f"),Object(b["a"])(E,r,a,!1,null,null,null)),F=R.exports,G=(n("f9e3"),n("2dd8"),n("5f5b")),J=n("b1e0");i["default"].use(G["a"]),i["default"].use(J["a"]),i["default"].config.productionTip=!1,new i["default"]({render:function(t){return t(F)}}).$mount("#app")},"629a":function(t,e,n){},"7e79":function(t,e,n){},"85ec":function(t,e,n){},9983:function(t,e,n){"use strict";n("7e79")},e11c:function(t,e,n){"use strict";n("629a")}});
//# sourceMappingURL=app.a30d1feb.js.map