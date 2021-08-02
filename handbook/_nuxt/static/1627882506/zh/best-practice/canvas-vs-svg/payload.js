__NUXT_JSONP__("/zh/best-practice/canvas-vs-svg", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A){return {data:[{article:{slug:"canvas-vs-svg",toc:[{id:k,depth:x,text:k},{id:l,depth:x,text:l}],body:{type:"root",children:[{type:b,tag:"h1",props:{id:"使用-canvas-或者-svg-渲染"},children:[{type:b,tag:d,props:{href:"#%E4%BD%BF%E7%94%A8-canvas-%E6%88%96%E8%80%85-svg-%E6%B8%B2%E6%9F%93",ariaHidden:n,tabIndex:o},children:[{type:b,tag:p,props:{className:[q,r]},children:[]}]},{type:a,value:"使用 Canvas 或者 SVG 渲染"}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"浏览器端图表库大多会选择 SVG 或者 Canvas 进行渲染。对于绘制图表来说，这两种技术往往是可替换的，效果相近。但是在一些场景中，他们的表现和能力又有一定差异。于是，对它们的选择取舍，就成为了一个一直存在的不易有标准答案的话题。"}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"ECharts 从初始一直使用 Canvas 绘制图表。而 "},{type:b,tag:d,props:{href:"https:\u002F\u002Fgithub.com\u002Fapache\u002Fecharts\u002Freleases",rel:[f,g,h],target:i},children:[{type:a,value:"ECharts v4.0"}]},{type:a,value:" 发布了 SVG 渲染器，从而提供了一种新的选择。只须在初始化一个图表实例时，设置 "},{type:b,tag:d,props:{href:"https:\u002F\u002Fecharts.apache.org\u002F\u002Fapi.html#echarts.init",rel:[f,g,h],target:i},children:[{type:a,value:"renderer 参数"}]},{type:a,value:" 为 "},{type:b,tag:s,props:{},children:[{type:a,value:"'canvas'"}]},{type:a,value:" 或 "},{type:b,tag:s,props:{},children:[{type:a,value:"'svg'"}]},{type:a,value:" 即可指定渲染器，比较方便。"}]},{type:a,value:c},{type:b,tag:"blockquote",props:{},children:[{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"SVG 和 Canvas 这两种使用方式差异很大的技术，能够做到同时被透明支持，主要归功于 ECharts 底层库 "},{type:b,tag:d,props:{href:"https:\u002F\u002Fgithub.com\u002Fecomfe\u002Fzrender",rel:[f,g,h],target:i},children:[{type:a,value:"ZRender"}]},{type:a,value:" 的抽象和实现，形成可互换的 SVG 渲染器和 Canvas 渲染器。"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:y,props:{id:k},children:[{type:b,tag:d,props:{href:"#%E9%80%89%E6%8B%A9%E5%93%AA%E7%A7%8D%E6%B8%B2%E6%9F%93%E5%99%A8",ariaHidden:n,tabIndex:o},children:[{type:b,tag:p,props:{className:[q,r]},children:[]}]},{type:a,value:k}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"一般来说，Canvas 更适合绘制图形元素数量较多（这一般是由数据量大导致）的图表（如热力图、地理坐标系或平行坐标系上的大规模线图或散点图等），也利于实现某些视觉 "},{type:b,tag:d,props:{href:"https:\u002F\u002Fecharts.apache.org\u002F\u002Fexamples\u002Feditor.html?c=lines-bmap-effect",rel:[f,g,h],target:i},children:[{type:a,value:"特效"}]},{type:a,value:"。但是，在不少场景中，SVG 具有重要的优势：它的内存占用更低（这对移动端尤其重要）、并且用户使用浏览器内置的缩放功能时不会模糊。"}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"选择哪种渲染器，我们可以根据软硬件环境、数据量、功能需求综合考虑。"}]},{type:a,value:c},{type:b,tag:z,props:{},children:[{type:a,value:c},{type:b,tag:m,props:{},children:[{type:a,value:"在软硬件环境较好，数据量不大的场景下，两种渲染器都可以适用，并不需要太多纠结。"}]},{type:a,value:c},{type:b,tag:m,props:{},children:[{type:a,value:"在环境较差，出现性能问题需要优化的场景下，可以通过试验来确定使用哪种渲染器。比如有这些经验：\n"},{type:b,tag:z,props:{},children:[{type:a,value:c},{type:b,tag:m,props:{},children:[{type:a,value:"在须要创建很多 ECharts 实例且浏览器易崩溃的情况下（可能是因为 Canvas 数量多导致内存占用超出手机承受能力），可以使用 SVG 渲染器来进行改善。大略得说，如果图表运行在低端安卓机，或者我们在使用一些特定图表如 "},{type:b,tag:d,props:{href:"https:\u002F\u002Fecomfe.github.io\u002Fecharts-liquidfill\u002Fexample\u002F",rel:[f,g,h],target:i},children:[{type:a,value:"水球图"}]},{type:a,value:" 等，SVG 渲染器可能效果更好。"}]},{type:a,value:c},{type:b,tag:m,props:{},children:[{type:a,value:"数据量较大（经验判断 \u003E 1k）、较多交互时，建议选择 Canvas 渲染器。"}]},{type:a,value:c}]},{type:a,value:c}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"我们强烈欢迎开发者们"},{type:b,tag:d,props:{href:"https:\u002F\u002Fgithub.com\u002Fapache\u002Fecharts\u002Fissues\u002Fnew",rel:[f,g,h],target:i},children:[{type:a,value:"反馈"}]},{type:a,value:"给我们使用的体验和场景，帮助我们更好的做优化。"}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"注：当前某些特殊的渲染依然需要依赖 Canvas：如"},{type:b,tag:d,props:{href:"https:\u002F\u002Fecharts.apache.org\u002Foption.html#series-lines.effect",rel:[f,g,h],target:i},children:[{type:a,value:"炫光尾迹特效"}]},{type:a,value:"、"},{type:b,tag:d,props:{href:"https:\u002F\u002Fecharts.apache.org\u002F\u002Fexamples\u002Feditor.html?c=heatmap-bmap",rel:[f,g,h],target:i},children:[{type:a,value:"带有混合效果的热力图"}]},{type:a,value:"等。"}]},{type:a,value:c},{type:b,tag:y,props:{id:l},children:[{type:b,tag:d,props:{href:"#%E5%A6%82%E4%BD%95%E4%BD%BF%E7%94%A8%E6%B8%B2%E6%9F%93%E5%99%A8",ariaHidden:n,tabIndex:o},children:[{type:b,tag:p,props:{className:[q,r]},children:[]}]},{type:a,value:l}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"如果是用如下的方式完整引入"},{type:b,tag:s,props:{},children:[{type:a,value:"echarts"}]},{type:a,value:"，代码中已经包含了 SVG 渲染器和 Canvas 渲染器"}]},{type:a,value:c},{type:b,tag:t,props:{className:[u]},children:[{type:b,tag:v,props:{lang:w,"line-highlights":j,"file-name":j},children:[{type:a,value:"import * as echarts from 'echarts';\n"}]}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"如果你是按照 "},{type:b,tag:d,props:{href:"zh\u002Fbasics\u002Fimport"},children:[{type:a,value:"在项目中引入 Apache ECharts"}]},{type:a,value:" 一文中的介绍使用按需引入，则需要手动引入需要的渲染器"}]},{type:a,value:c},{type:b,tag:t,props:{className:[u]},children:[{type:b,tag:v,props:{lang:w,"line-highlights":j,"file-name":j},children:[{type:a,value:"import * as echarts from 'echarts\u002Fcore';\n\u002F\u002F 可以根据需要选用只用到的渲染器\nimport { SVGRenderer, CanvasRenderer } from 'echarts\u002Frenderers';\n\necharts.use([SVGRenderer, CanvasRenderer]);\n"}]}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"然后，我们就可以在代码中，初始化图表实例时，"},{type:b,tag:d,props:{href:"https:\u002F\u002Fecharts.apache.org\u002F\u002Fapi.html\u002Fapi.html#echarts.init",rel:[f,g,h],target:i},children:[{type:a,value:"传入参数"}]},{type:a,value:" 选择渲染器类型："}]},{type:a,value:c},{type:b,tag:t,props:{className:[u]},children:[{type:b,tag:v,props:{lang:w,"line-highlights":j,"file-name":j},children:[{type:a,value:"\u002F\u002F 使用 Canvas 渲染器（默认）\nvar chart = echarts.init(containerDom, null, { renderer: 'canvas' });\n\u002F\u002F 等价于：\nvar chart = echarts.init(containerDom);\n\n\u002F\u002F 使用 SVG 渲染器\nvar chart = echarts.init(containerDom, null, { renderer: 'svg' });\n"}]}]}]},dir:"\u002Fzh\u002Fbest-practice",path:"\u002Fzh\u002Fbest-practice\u002Fcanvas-vs-svg",extension:".md",createdAt:A,updatedAt:A},postPath:"zh\u002Fbest-practice\u002Fcanvas-vs-svg"}],fetch:{},mutations:[]}}("text","element","\n","a","p","nofollow","noopener","noreferrer","_blank","","选择哪种渲染器","如何使用渲染器","li","true",-1,"span","icon","icon-link","code","div","nuxt-content-highlight","md-code-block","js",2,"h2","ul","2021-08-02T05:33:02.867Z")));