/*!
 * @project        retour
 * @name           dashboard.js
 * @author         Andrew Welch
 * @build          Fri Nov 05 2021 18:56:53 GMT+0000 (Coordinated Universal Time)
 * @copyright      Copyright (c) 2021 ©2020 nystudio107.com
 *
 */
"use strict";(self.webpackChunkretour=self.webpackChunkretour||[]).push([[966],{4168:function(t,e,a){var n=a(7495),i=a(6268),s=a.n(i);Vue.use(s());var r={mounted:function(){var t=this;this.$confetti.start({shape:"rect",colors:["DodgerBlue","OliveDrab","Gold","pink","SlateBlue","lightblue","Violet","PaleGreen","SteelBlue","SandyBrown","Chocolate","Crimson"]}),setTimeout((function(){t.$confetti.stop()}),5e3)},methods:{}},l=a(1900),o=(0,l.Z)(r,(function(){var t=this.$createElement;return(this._self._c||t)("main")}),[],!1,null,null,null).exports,c=a(4942),u=a(5861),d=a(7757),f=a.n(d),p=(a(1249),a(9653),a(9601),a(7941),a(2526),a(7327),a(1539),a(5003),a(4747),a(9337),a(9669)),h=a.n(p),g=a(7166);function v(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function m(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?v(Object(a),!0).forEach((function(e){(0,c.Z)(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):v(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var b,P=function(t,e,a,n){t.get(e,{params:a}).then((function(t){n&&n(t.data)})).catch((function(t){console.error(t)}))},x={components:{apexcharts:a.n(g)()},props:{title:String,subTitle:String,range:String,siteId:{type:Number,default:0},refreshIntervalSecs:{type:Number,default:3},apiUrl:{type:String,default:""}},methods:{getSeriesData:(b=(0,u.Z)(f().mark((function t(){var e,a=this;return f().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=h().create({baseURL:this.apiUrl,headers:{"X-Requested-With":"XMLHttpRequest"}}),t.next=3,P(e,"",{range:this.range,siteId:this.siteId},(function(t){var e;if(Object.assign({},a.chartOptions),void 0!==t[0]){var n=Math.round((e=[t[0].data],e.map((function(t){return Math.max.apply(null,t)})))[0]+1.5);a.chartOptions=m(m({},a.chartOptions),{yaxis:{min:0,max:n,labels:{show:!1,minHeight:"20px"}},xaxis:{categories:t[0].labels,type:"category",labels:{show:!1,minHeight:"20px"},crosshairs:{width:1}},labels:t[0].labels}),a.series=t}}));case 3:case"end":return t.stop()}}),t,this)}))),function(){return b.apply(this,arguments)})},created:function(){this.getSeriesData()},mounted:function(){var t=this;this.refreshIntervalSecs&&setInterval((function(){t.getSeriesData()}),1e3*this.refreshIntervalSecs)},data:function(){return{chartOptions:{chart:{id:"vuechart-dashboard",type:"area",height:160,sparkline:{enabled:!0}},colors:["#008FFB","#DCE6EC"],stroke:{curve:"straight",width:3},fill:{opacity:.2,gradient:{enabled:!0}},xaxis:{type:"category",labels:{show:!1,minHeight:"20px"},crosshairs:{width:1}},yaxis:{min:0},title:{text:this.title,offsetX:0,style:{fontSize:"24px",cssClass:"apexcharts-yaxis-title"}},subtitle:{text:this.subTitle,offsetX:0,style:{fontSize:"14px",cssClass:"apexcharts-yaxis-title"}}},series:[{name:"empty",data:[0]}]}}},C=x,_=(0,l.Z)(C,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("apexcharts",{attrs:{width:"100%",height:"200px",type:"area",options:t.chartOptions,series:t.series}})}),[],!1,null,null,null).exports,y=(a(4916),a(5306),a(2222),[{name:"__checkbox",titleClass:"center aligned",dataClass:"center aligned"},{name:"__component:file-not-found-url",sortField:"redirectSrcUrl",title:"404 File Not Found URL",titleClass:"center",dataClass:"center"},{name:"referrerUrl",sortField:"referrerUrl",title:"Last Referrer URL",titleClass:"center",dataClass:"center",callback:"urlFormatter"},{name:"remoteIp",sortField:"remoteIp",title:"Remote IP",titleClass:"center",dataClass:"center",callback:"ipFormatter"},{name:"hitCount",sortField:"hitCount",title:"Hits",titleClass:"text-right",dataClass:"text-right"},{name:"hitLastTime",sortField:"hitLastTime",title:"Last Hit",titleClass:"center",dataClass:"center"},{name:"handledByRetour",sortField:"handledByRetour",title:"Handled",titleClass:"text-center",dataClass:"text-center",callback:"boolFormatter"},{name:"addLink",sortField:"addLink",title:"",titleClass:"text-center",dataClass:"text-center",callback:"addUrlFormatter"}]),w=(a(4603),a(9714),a(6699),a(2023),a(3210),{props:{rowData:{type:Object,required:!0},rowIndex:{type:Number}},computed:{linkHref:function(){var t=this.rowData.redirectSrcUrl;return""===t?"":(new RegExp("^(?:[a-z]+:)?//","i").test(t)||t.includes("$")||(t=Craft.getSiteUrl(Craft.trim(t,"/"))),t)},linkTitle:function(){var t="";return t+="User Agent: "+this.rowData.userAgent+"\n\n",t+="Message: "+this.rowData.exceptionMessage+"\n\n",t+="File Path: "+this.rowData.exceptionFilePath+"\n\n",t+="Line No.: "+this.rowData.exceptionFileLine}}}),S=(0,l.Z)(w,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("a",{staticClass:"go",attrs:{href:t.linkHref,title:t.linkTitle}},[t._v(t._s(t.rowData.redirectSrcUrl))])])}),[],!1,null,null,null).exports,k=a(6545),T=a(4602),$=a(9743),I=a(358),F=a(5177),O=a(7856),D=a.n(O);Vue.component("file-not-found-url",S);var E={components:{vuetable:k.Z,"vuetable-pagination":T.Z,"vuetable-pagination-info":$.Z,"vuetable-filter-bar":I.Z},mixins:[F.Z],props:{siteId:{type:Number,default:0},refreshIntervalSecs:{type:Number,default:3},apiUrl:{type:String,default:""}},data:function(){return{moreParams:{siteId:this.siteId},css:{tableClass:"data fullwidth retour-dashboard",ascendingIcon:"menubtn retour-menubtn-asc",descendingIcon:"menubtn retour-menubtn-desc"},sortOrder:[{field:"hitCount",sortField:"hitCount",direction:"desc"}],fields:y,numSelected:0,perPage:20,selectedIds:[],retourHandled:"all",filterText:""}},computed:{csrfTokenName:function(){return window.Craft.csrfTokenName},csrfTokenValue:function(){return window.Craft.csrfTokenValue}},watch:{retourHandled:function(t){this.moreParams={siteId:this.siteId},this.moreParams={siteId:this.siteId,filter:this.filterText,handled:this.retourHandled},this.$events.fire("refresh-table",this.$refs.vuetable)},perPage:function(t){this.$events.fire("refresh-table",this.$refs.vuetable)}},mounted:function(){var t=this;this.$events.$on("filter-set",(function(e){return t.onFilterSet(e)})),this.$events.$on("filter-reset",(function(e){return t.onFilterReset()})),this.$refs.vuetable.$on("vuetable:checkbox-toggled",(function(e,a){return t.onCheckboxToggled(e,a)})),this.$refs.vuetable.$on("vuetable:checkbox-toggled-all",(function(e){return t.onCheckboxToggled(e,null)})),this.refreshIntervalSecs&&setInterval((function(){void 0!==t.$refs.pagination&&t.$refs.pagination.isOnFirstPage&&void 0!==t.$refs.vuetable&&t.$refs.vuetable.refresh()}),1e3*this.refreshIntervalSecs)},methods:{getSaveStateConfig:function(){return{cacheKey:"retour-dashboard-state-"+Craft.username+Craft.siteId,ignoreProperties:["numSelected","selectedIds"]}},onFilterSet:function(t){this.filterText=t,this.moreParams={siteId:this.siteId,filter:this.filterText,handled:this.retourHandled},this.$events.fire("refresh-table",this.$refs.vuetable)},onFilterReset:function(){this.moreParams={siteId:this.siteId},this.$events.fire("refresh-table",this.$refs.vuetable)},onPaginationData:function(t){this.$refs.paginationTop.setPaginationData(t),this.$refs.paginationInfoTop.setPaginationData(t),this.$refs.pagination.setPaginationData(t),this.$refs.paginationInfo.setPaginationData(t)},onChangePage:function(t){this.$refs.vuetable.changePage(t)},onCheckboxToggled:function(t,e){this.numSelected=0,this.selectedIds=[],void 0!==this.$refs.vuetable&&void 0!==this.$refs.vuetable.selectedTo&&(this.numSelected=this.$refs.vuetable.selectedTo.length,this.selectedIds=this.$refs.vuetable.selectedTo)},urlFormatter:function(t){return""===t?"":(t=t.replace(/[^-A-Za-z0-9+&@#/%?$=~_|!:,.;\(\)]/g,""),t=D().sanitize(t),'\n                <a class="go" href="'.concat(t,'" title="').concat(t,'" target="_blank" rel="noopener">').concat(t,"</a>\n                "))},ipFormatter:function(t){return""===t?"":(t=t.replace(/[^-A-Za-z0-9+&@#/%?$=~_|!:,.;\(\)]/g,""),t=D().sanitize(t),'\n                <a class="go" href="https://whatismyipaddress.com/ip/'.concat(t,'" title="Lookup ').concat(t,'" target="_blank" rel="noopener">').concat(t,"</a>\n                "))},boolFormatter:function(t){return 1==t?'\n                <span style="color: green;">&#x2714;</span>\n                ':'\n                <span style="color: red;">&#x2716;</span>\n                '},addUrlFormatter:function(t){return""===t?"":'\n                <a class="add icon" href="'.concat(t,'" title="Add"></a>\n                ')}}},H=(0,l.Z)(E,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"py-4"},[a("div",{directives:[{name:"show",rawName:"v-show",value:0!==t.numSelected,expression:"numSelected !== 0"}]},[a("form",{attrs:{method:"post","accept-charset":"UTF-8"}},[a("input",{attrs:{type:"hidden",name:t.csrfTokenName},domProps:{value:t.csrfTokenValue}}),t._v(" "),t._l(t.selectedIds,(function(t){return a("input",{attrs:{type:"hidden",name:"statisticIds[]"},domProps:{value:t}})})),t._v(" "),a("label",{staticClass:"text-gray-600"},[t._v(t._s(t.numSelected)+" statistic"),1!==t.numSelected?a("span",[t._v("s")]):t._e(),t._v(":")]),t._v(" "),t._m(0)],2)]),t._v(" "),a("vuetable-filter-bar",{directives:[{name:"show",rawName:"v-show",value:0===t.numSelected,expression:"numSelected === 0"}],attrs:{"initial-filter-text":t.filterText}}),t._v(" "),a("div",{staticClass:"vuetable-pagination clearafter"},[a("vuetable-pagination-info",{ref:"paginationInfoTop"}),t._v(" "),a("div",{staticClass:"floated left pl-3 pt-3 text-gray-600"},[a("div",{staticClass:"select"},[a("select",{directives:[{name:"model",rawName:"v-model",value:t.retourHandled,expression:"retourHandled"}],staticClass:"fieldtoggle",attrs:{"data-target-prefix":"retour-handled-",name:"retourHandled"},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.retourHandled=e.target.multiple?a:a[0]}}},[a("option",{attrs:{value:"all",selected:""}},[t._v("All")]),t._v(" "),a("option",{attrs:{value:"handled"}},[t._v("Handled")]),t._v(" "),a("option",{attrs:{value:"nothandled"}},[t._v("Not Handled")])])])]),t._v(" "),a("vuetable-pagination",{ref:"paginationTop",on:{"vuetable-pagination:change-page":t.onChangePage}}),t._v(" "),a("div",{staticClass:"floated left vuetable-pagination-info py-3"},[a("div",{staticClass:"inline pl-3 text-gray-600"},[t._v("Per-page:")]),t._v(" "),a("div",{staticClass:"inline pl-3 text-gray-600"},[a("div",{staticClass:"select"},[a("select",{directives:[{name:"model",rawName:"v-model",value:t.perPage,expression:"perPage"}],staticClass:"fieldtoggle",attrs:{"data-target-prefix":"per-page-",name:"perPage"},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.perPage=e.target.multiple?a:a[0]}}},[a("option",{attrs:{value:"20",selected:""}},[t._v("20")]),t._v(" "),a("option",{attrs:{value:"50"}},[t._v("50")]),t._v(" "),a("option",{attrs:{value:"100"}},[t._v("100")]),t._v(" "),a("option",{attrs:{value:"500"}},[t._v("500")])])])])])],1),t._v(" "),a("vuetable",{ref:"vuetable",attrs:{"api-url":t.apiUrl,"per-page":t.perPage,fields:t.fields,css:t.css,"sort-order":t.sortOrder,"append-params":t.moreParams},on:{"vuetable:pagination-data":t.onPaginationData}}),t._v(" "),a("div",{staticClass:"vuetable-pagination clearafter"},[a("vuetable-pagination-info",{ref:"paginationInfo"}),t._v(" "),a("vuetable-pagination",{ref:"pagination",on:{"vuetable-pagination:change-page":t.onChangePage}})],1)],1)}),[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"btngroup inline"},[a("div",{staticClass:"btn menubtn",attrs:{"data-icon":"settings"}}),t._v(" "),a("div",{staticClass:"menu",attrs:{"data-align":"right"}},[a("ul",[a("li",[a("a",{staticClass:"formsubmit",attrs:{"data-action":"retour/statistics/delete-statistics"}},[t._v("Delete")])])])])])}],!1,null,null,null).exports;Vue.use(n.Z);new Vue({el:"#cp-nav-content",components:{confetti:o,"dashboard-chart":_,"dashboard-table":H},data:{},methods:{onTableRefresh:function(t){Vue.nextTick((function(){return t.refresh()}))}},mounted:function(){var t=this;this.$events.$on("refresh-table",(function(e){return t.onTableRefresh(e)}))}})},358:function(t,e,a){a.d(e,{Z:function(){return i}});var n={props:{initialFilterText:{type:String,default:""}},data:function(){return{filterText:this.initialFilterText}},methods:{doFilter:function(){this.$events.fire("filter-set",this.filterText)},resetFilter:function(){this.filterText="",this.$events.fire("filter-reset")}}},i=(0,a(1900).Z)(n,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"filter-bar"},[a("div",{staticClass:"ui form"},[a("div",{staticClass:"inline field"},[a("label",{staticClass:"text-gray-600"},[t._v("Search for:")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.filterText,expression:"filterText"}],staticClass:"text nicetext",attrs:{type:"text",placeholder:""},domProps:{value:t.filterText},on:{keyup:t.doFilter,input:function(e){e.target.composing||(t.filterText=e.target.value)}}}),t._v(" "),a("button",{staticClass:"btn delete icon",on:{click:t.resetFilter}},[t._v("Reset")])])])])}),[],!1,null,null,null).exports},4602:function(t,e,a){a.d(e,{Z:function(){return r}});a(9653);var n={props:{css:{type:Object,default:function(){return{wrapperClass:"vuetable pagination float-right py-4",activeClass:"active large",disabledClass:"disabled",pageClass:"item btn",linkClass:"item btn",paginationClass:"ui bottom attached segment grid",paginationInfoClass:"left floated left aligned six wide column",dropdownClass:"ui search dropdown",icons:{first:"",prev:"",next:"",last:""}}}},onEachSide:{type:Number,default:function(){return 2}}},data:function(){return{eventPrefix:"vuetable-pagination:",tablePagination:null}},computed:{totalPage:function(){return null===this.tablePagination?0:this.tablePagination.last_page},isOnFirstPage:function(){return null!==this.tablePagination&&1===this.tablePagination.current_page},isOnLastPage:function(){return null!==this.tablePagination&&this.tablePagination.current_page===this.tablePagination.last_page},notEnoughPages:function(){return this.totalPage<2*this.onEachSide+4},windowSize:function(){return 2*this.onEachSide+1},windowStart:function(){return!this.tablePagination||this.tablePagination.current_page<=this.onEachSide?1:this.tablePagination.current_page>=this.totalPage-this.onEachSide?this.totalPage-2*this.onEachSide:this.tablePagination.current_page-this.onEachSide}},methods:{loadPage:function(t){this.$emit(this.eventPrefix+"change-page",t)},isCurrentPage:function(t){return t===this.tablePagination.current_page},setPaginationData:function(t){this.tablePagination=t},resetData:function(){this.tablePagination=null}}},i=a(1900),s={mixins:[(0,i.Z)(n,undefined,undefined,!1,null,null,null).exports]},r=(0,i.Z)(s,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{directives:[{name:"show",rawName:"v-show",value:t.tablePagination&&t.tablePagination.last_page>1,expression:"tablePagination && tablePagination.last_page > 1"}],class:t.css.wrapperClass},[a("a",{class:["btn-nav",t.css.linkClass,t.isOnFirstPage?t.css.disabledClass:""],on:{click:function(e){return t.loadPage(1)}}},[""!=t.css.icons.first?a("i",{class:[t.css.icons.first]}):a("span",[t._v("«")])]),t._v(" "),a("a",{class:["btn-nav",t.css.linkClass,t.isOnFirstPage?t.css.disabledClass:""],on:{click:function(e){return t.loadPage("prev")}}},[""!=t.css.icons.next?a("i",{class:[t.css.icons.prev]}):a("span",[t._v(" ‹")])]),t._v(" "),t.notEnoughPages?[t._l(t.totalPage,(function(e){return[a("a",{class:[t.css.pageClass,t.isCurrentPage(e)?t.css.activeClass:""],domProps:{innerHTML:t._s(e)},on:{click:function(a){return t.loadPage(e)}}})]}))]:[t._l(t.windowSize,(function(e){return[a("a",{class:[t.css.pageClass,t.isCurrentPage(t.windowStart+e-1)?t.css.activeClass:""],domProps:{innerHTML:t._s(t.windowStart+e-1)},on:{click:function(a){return t.loadPage(t.windowStart+e-1)}}})]}))],t._v(" "),a("a",{class:["btn-nav",t.css.linkClass,t.isOnLastPage?t.css.disabledClass:""],on:{click:function(e){return t.loadPage("next")}}},[""!=t.css.icons.next?a("i",{class:[t.css.icons.next]}):a("span",[t._v("› ")])]),t._v(" "),a("a",{class:["btn-nav",t.css.linkClass,t.isOnLastPage?t.css.disabledClass:""],on:{click:function(e){return t.loadPage(t.totalPage)}}},[""!=t.css.icons.last?a("i",{class:[t.css.icons.last]}):a("span",[t._v("»")])])],2)}),[],!1,null,null,null).exports},9743:function(t,e,a){a.d(e,{Z:function(){return r}});a(4916),a(5306);var n={props:{css:{type:Object,default:function(){return{infoClass:"left floated left py-5 text-gray-600"}}},infoTemplate:{type:String,default:function(){return"Displaying {from} to {to} of {total} items"}},noDataTemplate:{type:String,default:function(){return"No relevant data"}}},data:function(){return{tablePagination:null}},computed:{paginationInfo:function(){return null==this.tablePagination||0==this.tablePagination.total?this.noDataTemplate:this.infoTemplate.replace("{from}",this.tablePagination.from||0).replace("{to}",this.tablePagination.to||0).replace("{total}",this.tablePagination.total||0)}},methods:{setPaginationData:function(t){this.tablePagination=t},resetData:function(){this.tablePagination=null}}},i=a(1900),s={mixins:[(0,i.Z)(n,undefined,undefined,!1,null,null,null).exports]},r=(0,i.Z)(s,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{class:["vuetable-pagination-info",t.css.infoClass],domProps:{innerHTML:t._s(t.paginationInfo)}})}),[],!1,null,null,null).exports}},function(t){t.O(0,[216,532],(function(){return e=4168,t(t.s=e);var e}));t.O()}]);
//# sourceMappingURL=dashboard.js.map