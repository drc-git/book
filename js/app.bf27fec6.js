(function(t){function e(e){for(var a,l,s=e[0],u=e[1],i=e[2],p=0,f=[];p<s.length;p++)l=s[p],Object.prototype.hasOwnProperty.call(n,l)&&n[l]&&f.push(n[l][0]),n[l]=0;for(a in u)Object.prototype.hasOwnProperty.call(u,a)&&(t[a]=u[a]);c&&c(e);while(f.length)f.shift()();return o.push.apply(o,i||[]),r()}function r(){for(var t,e=0;e<o.length;e++){for(var r=o[e],a=!0,s=1;s<r.length;s++){var u=r[s];0!==n[u]&&(a=!1)}a&&(o.splice(e--,1),t=l(l.s=r[0]))}return t}var a={},n={app:0},o=[];function l(e){if(a[e])return a[e].exports;var r=a[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,l),r.l=!0,r.exports}l.m=t,l.c=a,l.d=function(t,e,r){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(l.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)l.d(r,a,function(e){return t[e]}.bind(null,a));return r},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],u=s.push.bind(s);s.push=e,s=s.slice();for(var i=0;i<s.length;i++)e(s[i]);var c=u;o.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"56d7":function(t,e,r){"use strict";r.r(e);r("e260"),r("e6cf"),r("cca6"),r("a79d");var a=r("2b0e"),n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-app",[r("v-app-bar",{attrs:{app:"",color:"primary",dark:""}},[r("div",{staticClass:"d-flex align-center"},[r("v-img",{staticClass:"shrink mr-2",attrs:{alt:"Vuetify Logo",contain:"",src:"https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png",transition:"scale-transition",width:"40"}}),r("v-img",{staticClass:"shrink mt-1 hidden-sm-and-down",attrs:{alt:"Vuetify Name",contain:"","min-width":"100",src:"https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png",width:"100"}})],1),r("v-spacer"),r("v-btn",{attrs:{href:"https://github.com/vuetifyjs/vuetify/releases/latest",target:"_blank",text:""}},[r("span",{staticClass:"mr-2"},[t._v("Latest Release")]),r("v-icon",[t._v("mdi-open-in-new")])],1)],1),r("v-content",[r("Editor")],1)],1)},o=[],l=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-form",{nativeOn:{change:function(e){return t.onChange(e)}}},[r("v-container",[r("v-row",{attrs:{"no-gutters":""}},[r("v-col",{attrs:{cols:"6"}},[r("v-textarea",{attrs:{name:"input",label:"粘贴"},on:{paste:t.onPaste}})],1),r("v-col",{attrs:{cols:"6"}},[r("v-textarea",{ref:"output",attrs:{name:"output",label:"输出"},model:{value:t.output,callback:function(e){t.output=e},expression:"output"}})],1),t._l(t.keys,(function(e){return["-"==e[0]?r("v-col",{key:e,attrs:{cols:"12"}},[r("h3",{staticClass:"title primary--text",attrs:{color:"primary"}},[t._v(t._s(t.labels[e]))])]):t.textareas[e]?r("v-col",{key:e,attrs:{cols:"12",sm:"6",md:"3"}},[r("v-textarea",{attrs:{label:t.labels[e],hint:e},model:{value:t.values[e],callback:function(r){t.$set(t.values,e,r)},expression:"values[key]"}})],1):r("v-col",{key:e,attrs:{cols:"12",sm:"6",md:"3"}},[r("v-text-field",{attrs:{label:t.labels[e],hint:e},model:{value:t.values[e],callback:function(r){t.$set(t.values,e,r)},expression:"values[key]"}})],1)]}))],2)],1),r("v-btn",{attrs:{color:"primary",dark:"",fixed:"",bottom:"",right:"",fab:""},on:{click:t.onDone}},[r("v-icon",[t._v("done")])],1)],1)},s=[],u=(r("4160"),r("d3b7"),r("159b"),r("ddb0"),r("4de4"),r("b64b"),{"-0":"书源",bookSourceUrl:"书源网址",bookSourceName:"书源名称",bookSourceGroup:"书源分组",loginUrl:"登录地址",checkUrl:"验证网址",httpUserAgent:"浏览器模拟","-1":"发现",ruleFindUrl:"发现规则","-2":"搜索",ruleSearchUrl:"搜索网址",ruleSearchList:"搜索列表",ruleSearchAuthor:"搜索里的作者",ruleSearchKind:"搜索里的类型",ruleSearchLastChapter:"搜索里的最新章节",ruleSearchName:"获取搜索里的书名",ruleSearchNoteUrl:"搜索里的书链接",ruleSearchCoverUrl:"搜索里的书封面","-3":"书籍",ruleBookUrlPattern:"简介页URL正则",ruleBookName:"书籍页面里的书名称",ruleBookAuthor:"书籍页面里的作者",ruleIntroduce:"书籍页面里的简介",ruleCoverUrl:"书籍页面里的封面",ruleBookKind:"书籍页面里的分类",ruleBookLastChapter:"书籍页面里的最新章节",ruleChapterUrl:"书籍页面里的目录地址",ruleChapterUrlNext:"目录页面里的下一页目录地址",ruleChapterList:"目录页面的目录列表",ruleChapterName:"目录列表的章节名称",ruleContentUrl:"目录列表的章节链接",ruleContentUrlNext:"目录列表的章节下一页链接",ruleBookContent:"章节内容"}),i={ruleFindUrl:1},c=Object.keys(u),p=c.filter((function(t){return"-"!=t[0]})),f={};p.forEach((function(t){return f[t]=""}));var d={name:"Editor",data:function(){var t=localStorage.getItem("book.source.editor");return t&&Object.assign(f,JSON.parse(t)),{keys:c,textareas:i,labels:u,values:f,output:""}},methods:{onPaste:function(t){var e;try{e=JSON.parse(t.clipboardData.getData("text/plain"))}catch(r){}e&&Object.assign(this.values,e)},onDone:function(){var t=this,e={},r=Object.assign({},this.values);p.forEach((function(t){return e[t]=r[t]})),this.output=JSON.stringify(e,null,2),this.$nextTick((function(){t.$refs.output.$refs.input.select(),document.execCommand("copy")}))},onChange:function(){localStorage.setItem("book.source.editor",JSON.stringify(Object.assign({},this.values)))}}},v=d,h=(r("ef12"),r("2877")),b=r("6544"),m=r.n(b),g=r("8336"),y=r("62ad"),k=r("a523"),x=r("4bd4"),O=r("132d"),S=r("0fd9"),C=r("8654"),j=r("a844"),w=Object(h["a"])(v,l,s,!1,null,"47eabb02",null),V=w.exports;m()(w,{VBtn:g["a"],VCol:y["a"],VContainer:k["a"],VForm:x["a"],VIcon:O["a"],VRow:S["a"],VTextField:C["a"],VTextarea:j["a"]});var _={name:"App",components:{Editor:V},data:function(){return{}}},U=_,N=r("7496"),P=r("40dc"),B=r("a75b"),$=r("adda"),E=r("2fa4"),L=Object(h["a"])(U,n,o,!1,null,null,null),A=L.exports;m()(L,{VApp:N["a"],VAppBar:P["a"],VBtn:g["a"],VContent:B["a"],VIcon:O["a"],VImg:$["a"],VSpacer:E["a"]});var I=r("f309");a["a"].use(I["a"]);var J=new I["a"]({});a["a"].config.productionTip=!1,new a["a"]({vuetify:J,render:function(t){return t(A)}}).$mount("#app")},"82f9":function(t,e,r){},ef12:function(t,e,r){"use strict";var a=r("82f9"),n=r.n(a);n.a}});
//# sourceMappingURL=app.bf27fec6.js.map