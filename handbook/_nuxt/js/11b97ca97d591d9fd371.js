(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{207:function(t,e,n){t.exports={}},214:function(t,e,n){t.exports={}},215:function(t,e,n){t.exports={}},216:function(t,e,n){t.exports={}},217:function(t,e,n){t.exports={}},218:function(t,e,n){"use strict";n(207)},235:function(t,e,n){"use strict";n(214)},236:function(t,e,n){"use strict";n(215)},244:function(t,e,n){"use strict";n(216)},247:function(t,e,n){"use strict";n(217)},261:function(t,e,n){"use strict";n.r(e);var c=n(2),o=(n(20),n(0)),r=n(206),l=(n(155),n(32),n(105)),d=Object(r.c)({props:{width:{type:[String,Number],default:"100%"},height:{type:[String,Number],default:"350"},src:String},setup:function(t,e){return{fullSrc:Object(r.a)((function(){return l.a.exampleViewPath.replace("${lang}",e.root.$i18n.locale)+t.src}))}}}),v=n(8),m=Object(v.a)(d,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("iframe",{attrs:{width:t.width,height:t.height,src:t.fullSrc}})}),[],!1,null,null,null).exports,h=(n(25),o.default.extend({props:{type:{type:String,default:"info",validator:function(t){return["info","success","warning","danger"].includes(t)}}}})),f=(n(218),Object(v.a)(h,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("blockquote",{class:"md-alert md-alert-"+t.type},[n("p",[t._t("default")],2)])}),[],!1,null,"a47f983e",null).exports),O=(n(15),n(219)),z=(n(220),n(221)),y=(n(208),n(209),n(210),n(26),n(27),n(21),n(63),{});var w=n(222),k=n(223),_=n.n(k),j=n(14);function C(){var t={},e=[],n=[],c=window.setTimeout,o=window.setInterval;function r(t,e){var o=c(t,e);return n.push(o),o}function l(t,n){var c=o(t,n);return e.push(c),c}var d,v=[];return{resize:function(){d&&d.resize()},dispose:function(){d&&(d.dispose(),d=null)},getDataURL:function(){return d.getDataURL({pixelRatio:2,excludeComponents:["toolbox"]})},getOption:function(){return d.getOption()},getInstance:function(){return d},run:function(c,code,o){var m,h,f;o=o||{},d||(d=echarts.init(c,o.darkMode?"dark":"",{renderer:o.renderer,useDirtyRect:o.useDirtyRect}),h=(m=d).on,f=m.setOption,m.on=function(t){var e=h.apply(m,arguments);return v.push(t),e},m.setOption=function(){return f.apply(this,arguments)}),function(){for(var i=0;i<e.length;i++)clearInterval(e[i]);for(i=0;i<n.length;i++)clearTimeout(n[i]);e=[],n=[]}(),function(t){v.forEach((function(e){t&&t.off(e)})),v.length=0}(d),t.config=null;var option=new Function("myChart","app","setTimeout","setInterval","ROOT_PATH","var option;\n"+code+"\nreturn option;")(d,t,r,l);if(option&&"object"===Object(j.a)(option)){var O=+new Date;d.setOption(option,!0),+new Date-O}}}}var x=n(234),S=n.n(x),P=Object(r.c)({components:{},props:{source:{type:String}},setup:function(t){var e=Object(r.f)(null),n=Object(r.f)(!1);return Object(r.d)((function(){new S.a(e.value,{text:function(e){return t.source}}).on("success",(function(t){t.clearSelection(),n.value=!0,window.setTimeout((function(){n.value=!1}),2e3)}))})),{clipboardChecked:n,copyButton:e}}}),R=(n(235),Object(v.a)(P,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"copyButton",staticClass:"clipboard"},[t.clipboardChecked?n("svg",{staticClass:"h-6 w-6",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"}},[n("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"}})]):n("svg",{staticClass:"h-6 w-6",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"}},[n("svg",{staticClass:"h-6 w-6",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"}},[n("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"}})])])])}),[],!1,null,"479657ca",null).exports);function $(){return"undefined"==typeof echarts?(t=["https://cdn.jsdelivr.net/npm/echarts/dist/echarts.js"],Promise.all(t.map((function(t){return"string"==typeof t?{url:t,type:t.match(/\.css$/)?"css":"js"}:t})).map((function(t){if(y[t.url])return y[t.url];var e=new Promise((function(e,n){if("js"===t.type){var script=document.createElement("script");script.src=t.url,script.async=!1,script.onload=function(){e(null)},script.onerror=function(){n()},document.body.appendChild(script)}else if("css"===t.type){var link=document.createElement("link");link.rel="stylesheet",link.href=t.url,link.onload=function(){e(null)},link.onerror=function(){n()},document.body.appendChild(link)}}));return y[t.url]=e,e})))).then((function(){})):Promise.resolve();var t}var E=Object(r.c)({components:{PrismEditor:O.a,CodeBlockCopyClipboard:R},props:{lang:{type:String,default:"js"},layout:{type:String,default:"tb",validator:function(t){return["lr","tb","rl","bt"].includes(t)}}},setup:function(t,e){var n,c=Object(r.f)(""),o=Object(r.f)(null);function l(){n&&n.resize()}var d=_()((function(){$().then((function(){n||(Object(w.a)(Object(r.g)(o),l),n=C());try{Object(r.g)(o)&&n.run(Object(r.g)(o),Object(r.g)(c))}catch(t){console.error(t)}}))}),500,{trailing:!0});return Object(r.h)(c,(function(){d()})),Object(r.d)((function(){var t=e.slots.default&&e.slots.default();c.value=(t&&t[0].text||"").trim()})),Object(r.e)((function(){Object(w.b)(Object(r.g)(o),l)})),{innerCode:c,previewContainer:o,highlighter:function(code){return Object(z.highlight)(code,z.languages[t.lang]||z.languages.js)}}}}),M=(n(236),Object(v.a)(E,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.innerCode?n("div",{class:"md-live layout-"+t.layout},[n("div",{staticClass:"md-live-editor"},[n("div",{staticClass:"md-live-editor-container"},[n("prism-editor",{attrs:{highlight:t.highlighter},model:{value:t.innerCode,callback:function(e){t.innerCode=e},expression:"innerCode"}})],1),t._v(" "),n("div",{staticClass:"md-live-tag"},[t._v("live")]),t._v(" "),n("code-block-copy-clipboard",{attrs:{source:t.innerCode}})],1),t._v(" "),n("div",{ref:"previewContainer",staticClass:"md-live-preview"})]):t._e()}),[],!1,null,null,null).exports),H=n(237),B=n.n(H),T=(n(238),n(239),n(240),n(241),n(242),n(243),/^(diff)-([\w-]+)/i);var D=Object(r.c)({components:{CodeBlockCopyClipboard:R},props:{lang:{type:String,default:"js"},lineHighlights:String,fileName:String},setup:function(t,e){var n=Object(r.f)(""),c=Object(r.a)((function(){return function(t,e){var n="",c=(t=t||"").match(T);c&&(t=c[2],n=B.a.languages.diff),t="vue"===t?"html":t,n||(n=B.a.languages[t]);var o=c?"diff-".concat(t):t,code=n?B.a.highlight(e,n,o):e;return t&&n||(t="text",code=code.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;")),{lang:t,code:code}}(t.lang,n.value)}));return Object(r.d)((function(){var t=e.slots.default&&e.slots.default();n.value=(t&&t[0].text||"").trim()})),{rawCode:n,highlightResult:c}}}),L=(n(244),Object(v.a)(D,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"md-code-block"},[n("div",{staticClass:"nuxt-content-highlight"},[n("pre",{class:"language-"+t.highlightResult.lang+" line-numbers"},[n("code",{domProps:{innerHTML:t._s(t.highlightResult.code)}})])]),t._v(" "),t.fileName?n("span",{staticClass:"filename"},[t._v(t._s(t.fileName))]):t._e(),t._v(" "),n("code-block-copy-clipboard",{attrs:{source:t.rawCode}})],1)}),[],!1,null,null,null).exports),N=(n(245),Object(r.c)({props:{link:String},setup:function(t){return{fullLink:Object(r.a)((function(){return l.a.optionPath+t.link}))}}})),I=Object(v.a)(N,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("a",{attrs:{href:t.fullLink,target:"_blank"}},[t._v(t._s(t.link))])}),[],!1,null,null,null).exports;o.default.use(r.b),o.default.component("md-example",m),o.default.component("md-alert",f),o.default.component("md-live",M),o.default.component("md-code-block",L),o.default.component("md-option",I);var U={"contents/zh/meta/edit-guide.md":["Ovilia"],"contents/zh/get-started.md":["Ovilia"],"contents/zh/concepts/visual-map.md":["Ovilia"],"contents/zh/concepts/tooltip.md":["Ovilia"],"contents/zh/concepts/style.md":["Ovilia"],"contents/zh/concepts/series.md":["Ovilia"],"contents/zh/concepts/options.md":["Ovilia"],"contents/zh/concepts/legend.md":["Ovilia"],"contents/zh/concepts/event.md":["Ovilia"],"contents/zh/concepts/dataset.md":["Ovilia"],"contents/zh/concepts/data-transform.md":["Ovilia"],"contents/zh/concepts/coordinate.md":["Ovilia"],"contents/zh/concepts/chart-size.md":["Ovilia"],"contents/zh/concepts/axis.md":["Ovilia"],"contents/zh/best-practice/specification/scatter/scatter.md":["Ovilia"],"contents/zh/best-practice/specification/scatter/bubble.md":["Ovilia"],"contents/zh/best-practice/specification/radar.md":["Ovilia"],"contents/zh/best-practice/specification/pie/basic-pie.md":["Ovilia"],"contents/zh/best-practice/specification/line/stacked-area.md":["Ovilia"],"contents/zh/best-practice/specification/line/basic-line.md":["Ovilia"],"contents/zh/best-practice/specification/line/area.md":["Ovilia"],"contents/zh/best-practice/specification/gauge.md":["Ovilia"],"contents/zh/best-practice/specification/funnel.md":["Ovilia"],"contents/zh/best-practice/specification/bar/stacked-bar.md":["Ovilia"],"contents/zh/best-practice/specification/bar/grouped-bar.md":["Ovilia"],"contents/zh/best-practice/specification/bar/bi-directional-bar.md":["Ovilia"],"contents/zh/best-practice/specification/bar/basic-bar.md":["Ovilia"],"contents/zh/best-practice/mobile.md":["Ovilia"],"contents/zh/best-practice/design/color-enhance.md":["Ovilia"],"contents/zh/best-practice/canvas-vs-svg.md":["Ovilia"],"contents/zh/best-practice/aria.md":["Ovilia"],"contents/zh/basics/resource.md":["Ovilia"],"contents/zh/basics/release-note/v5-upgrade-guide.md":["Ovilia"],"contents/zh/basics/release-note/v5-feature.md":["Ovilia"],"contents/zh/basics/release-note/5-2-0.md":["Ovilia"],"contents/zh/basics/inspiration.md":["Ovilia"],"contents/zh/basics/import.md":["Ovilia"],"contents/zh/basics/help.md":["Ovilia"],"contents/zh/basics/download.md":["Ovilia"],"contents/zh/application/mobile.md":["Ovilia"],"contents/zh/application/label/rich-text.md":["Ovilia"],"contents/zh/application/interaction/drag.md":["Ovilia"],"contents/zh/application/data/dynamic-data.md":["Ovilia"],"contents/zh/application/data/drilldown.md":["Ovilia"],"contents/zh/application/cross-platform/wechat-app.md":["Ovilia"],"contents/zh/application/cross-platform/server.md":["Ovilia"],"contents/zh/application/cross-platform/baidu-app.md":["Ovilia"],"contents/zh/application/connect.md":["Ovilia"],"contents/zh/application/chart-types/scatter/basic-scatter.md":["Ovilia"],"contents/zh/application/chart-types/pie/rose.md":["Ovilia"],"contents/zh/application/chart-types/pie/doughnut.md":["Ovilia"],"contents/zh/application/chart-types/pie/basic-pie.md":["Ovilia"],"contents/zh/application/chart-types/line/step-line.md":["Ovilia"],"contents/zh/application/chart-types/line/stacked-line.md":["Ovilia"],"contents/zh/application/chart-types/line/smooth-line.md":["Ovilia"],"contents/zh/application/chart-types/line/basic-line.md":["Ovilia"],"contents/zh/application/chart-types/line/area-line.md":["Ovilia"],"contents/zh/application/chart-types/bar/waterfall.md":["Ovilia"],"contents/zh/application/chart-types/bar/stacked-bar.md":["Ovilia"],"contents/zh/application/chart-types/bar/polar-bar.md":["Ovilia"],"contents/zh/application/chart-types/bar/basic-bar.md":["Ovilia"],"contents/zh/application/chart-types/bar/bar-race.md":["Ovilia"],"contents/en/posts.yml":["Ovilia"],"contents/en/meta/edit-guide.md":["Ovilia"],"contents/en/get-started.md":["Ovilia"],"contents/en/concepts/visual-map.md":["Ovilia"],"contents/en/concepts/tooltip.md":["Ovilia"],"contents/en/concepts/style.md":["Ovilia"],"contents/en/concepts/series.md":["Ovilia"],"contents/en/concepts/options.md":["Ovilia"],"contents/en/concepts/legend.md":["Ovilia"],"contents/en/concepts/event.md":["Ovilia"],"contents/en/concepts/dataset.md":["Ovilia"],"contents/en/concepts/data-transform.md":["Ovilia"],"contents/en/concepts/coordinate.md":["Ovilia"],"contents/en/concepts/chart-size.md":["Ovilia"],"contents/en/concepts/axis.md":["Ovilia"],"contents/en/best-practice/specification/scatter/scatter.md":["Ovilia"],"contents/en/best-practice/specification/scatter/bubble.md":["Ovilia"],"contents/en/best-practice/specification/radar.md":["Ovilia"],"contents/en/best-practice/specification/pie/basic-pie.md":["Ovilia"],"contents/en/best-practice/specification/line/stacked-area.md":["Ovilia"],"contents/en/best-practice/specification/line/basic-line.md":["Ovilia"],"contents/en/best-practice/specification/line/area.md":["Ovilia"],"contents/en/best-practice/specification/gauge.md":["Ovilia"],"contents/en/best-practice/specification/funnel.md":["Ovilia"],"contents/en/best-practice/specification/bar/stacked-bar.md":["Ovilia"],"contents/en/best-practice/specification/bar/grouped-bar.md":["Ovilia"],"contents/en/best-practice/specification/bar/bi-directional-bar.md":["Ovilia"],"contents/en/best-practice/specification/bar/basic-bar.md":["Ovilia"],"contents/en/best-practice/mobile.md":["Ovilia"],"contents/en/best-practice/design/color-enhance.md":["Ovilia"],"contents/en/best-practice/canvas-vs-svg.md":["Ovilia"],"contents/en/best-practice/aria.md":["Ovilia"],"contents/en/basics/release-note/v5-upgrade-guide.md":["Ovilia"],"contents/en/basics/release-note/v5-feature.md":["Ovilia"],"contents/en/basics/inspiration.md":["Ovilia"],"contents/en/basics/import.md":["Ovilia"],"contents/en/basics/help.md":["Ovilia"],"contents/en/basics/download.md":["Ovilia"],"contents/en/application/label/rich-text.md":["Ovilia"],"contents/en/application/interaction/drag.md":["Ovilia"],"contents/en/application/data/dynamic-data.md":["Ovilia"],"contents/en/application/data/drilldown.md":["Ovilia"],"contents/en/application/cross-platform/server.md":["Ovilia"],"contents/en/application/chart-types/scatter/basic-scatter.md":["Ovilia"],"contents/en/application/chart-types/pie/rose.md":["Ovilia"],"contents/en/application/chart-types/pie/doughnut.md":["Ovilia"],"contents/en/application/chart-types/pie/basic-pie.md":["Ovilia"],"contents/en/application/chart-types/line/step-line.md":["Ovilia"],"contents/en/application/chart-types/line/stacked-line.md":["Ovilia"],"contents/en/application/chart-types/line/smooth-line.md":["Ovilia"],"contents/en/application/chart-types/line/basic-line.md":["Ovilia"],"contents/en/application/chart-types/line/area-line.md":["Ovilia"],"contents/en/application/chart-types/bar/waterfall.md":["Ovilia"],"contents/en/application/chart-types/bar/stacked-bar.md":["Ovilia"],"contents/en/application/chart-types/bar/polar-bar.md":["Ovilia"],"contents/en/application/chart-types/bar/basic-bar.md":["Ovilia"],"contents/en/application/chart-types/bar/bar-race.md":["Ovilia"],"contents/.prettierrc":["Ovilia"],"contents/zh/meta/writing.md":["Ovilia"],"contents/zh/posts.yml":["Ovilia"]};n(154);var J=Object(r.c)({props:{path:String},setup:function(t){return{contributors:Object(r.a)((function(){return U["contents/".concat(t.path||"",".md")]})),sourcePath:Object(r.a)((function(){return(e=t.path).endsWith(".md")||(e+=".md"),n&&(e+="#".concat(decodeURIComponent(n))),"https://github.com/".concat(l.a.gitRepo,"/tree/master/contents/").concat(e);var e,n}))}}}),V=(n(247),Object(v.a)(J,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"post-contributors"},[n("h3",[n("span",{staticClass:"inline-block align-middle"},[t._v("本文贡献者")]),t._v(" "),n("a",{staticClass:"inline-block align-middle text-sm",attrs:{target:"_blank",href:t.sourcePath,title:"编辑本文"}},[n("svg",{staticClass:"h-8 w-8 inline-block align-middle",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"}},[n("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"}})]),t._v(" "),n("span",{staticClass:"inline-block align-middle"},[t._v("在 GitHub 上编辑本页")])])]),t._v(" "),t.contributors&&t.contributors.length?n("div",{staticClass:"post-contributors-list"},t._l(t.contributors,(function(e){return n("a",{key:e,staticClass:"post-contributor",attrs:{href:"https://github.com/"+e,target:"_blank"}},[n("img",{attrs:{alt:e,src:"https://avatars.githubusercontent.com/"+e+"?size=60"}}),t._v(" "),n("span",[t._v(t._s(e))])])})),0):t._e()])}),[],!1,null,null,null).exports),A=o.default.extend({components:{Contributors:V},asyncData:function(t){return Object(c.a)(regeneratorRuntime.mark((function e(){var n,c,o,r,article;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$content,c=t.params,o=t.i18n,r="".concat(o.locale,"/").concat(c.pathMatch),e.next=4,n(r).fetch();case 4:return article=e.sent,e.abrupt("return",{article:article,postPath:r});case 6:case"end":return e.stop()}}),e)})))()}}),F=Object(v.a)(A,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"post-inner"},[n("nuxt-content",{attrs:{document:t.article}}),t._v(" "),n("div",{staticClass:"table-of-contents"},[n("h4",{staticClass:"toc-container-header"},[t._v(t._s(t.$t("inThisPage")))]),t._v(" "),n("ul",t._l(t.article.toc,(function(link){return n("li",{key:link.id,class:{toc2:2===link.depth,toc3:3===link.depth}},[n("NuxtLink",{attrs:{to:"#"+link.id}},[t._v(t._s(link.text))])],1)})),0)])],1),t._v(" "),n("contributors",{attrs:{path:t.postPath}})],1)}),[],!1,null,null,null);e.default=F.exports}}]);