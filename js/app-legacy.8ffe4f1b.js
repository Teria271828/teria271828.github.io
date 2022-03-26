(function(){"use strict";var e={4111:function(e,t,o){o(6992),o(8674),o(9601),o(7727);var a=o(144),r=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"container"},[o("Search"),o("List")],1)},n=[],i=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("section",{staticClass:"jumbotron"},[o("h2",{staticClass:"sub-header"},[e._v("用于快速查询的表单")]),o("div",{staticClass:"container"},[o("input",{directives:[{name:"model",rawName:"v-model",value:e.keyWord,expression:"keyWord"}],staticClass:"form-control",attrs:{type:"text",placeholder:"请输入检索内容"},domProps:{value:e.keyWord},on:{input:function(t){t.target.composing||(e.keyWord=t.target.value)}}}),o("button",{staticClass:"btn-lg btn-primary btn-block",on:{click:e.getCompanies}},[e._v("搜索")])])])},s=[],c=(o(7327),o(1539),o(6699),o(2023),o(9669)),d=o.n(c),l={name:"sSearch",data:function(){return{keyWord:this.$route.query.keyword||"",companies:{},usersData:{}}},mounted:function(){this.initData()},methods:{getCompanies:function(){var e=this;this.$bus.$emit("updateData",{isLoading:!0,users:[],errMsg:""}),this.usersData=this.companies.company.filter((function(t){return t.title.includes(e.keyWord)||t.category.includes(e.keyWord)||t.product.includes(e.keyWord)})),this.$bus.$emit("updateData",{isLoading:!1,users:this.usersData,errMsg:""})},initData:function(){var e=this;d().get("./end.json").then((function(t){e.companies=Object.assign(e.companies,t.data),e.getCompanies()}),(function(t){e.$bus.$emit("updateData",{users:"",errMsg:t.message})}))}}},u=l,v=o(1001),m=(0,v.Z)(u,i,s,!1,null,"29e9ed06",null),f=m.exports,p=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"card"},[o("div",{staticClass:"table-responsive"},[o("input",{directives:[{name:"model",rawName:"v-model",value:e.loadId,expression:"loadId"}],attrs:{type:"checkbox",id:"id"},domProps:{checked:Array.isArray(e.loadId)?e._i(e.loadId,null)>-1:e.loadId},on:{change:function(t){var o=e.loadId,a=t.target,r=!!a.checked;if(Array.isArray(o)){var n=null,i=e._i(o,n);a.checked?i<0&&(e.loadId=o.concat([n])):i>-1&&(e.loadId=o.slice(0,i).concat(o.slice(i+1)))}else e.loadId=r}}}),o("label",[e._v("统一社会信用代码")]),o("input",{directives:[{name:"model",rawName:"v-model",value:e.loadName,expression:"loadName"}],attrs:{type:"checkbox",id:"name"},domProps:{checked:Array.isArray(e.loadName)?e._i(e.loadName,null)>-1:e.loadName},on:{change:function(t){var o=e.loadName,a=t.target,r=!!a.checked;if(Array.isArray(o)){var n=null,i=e._i(o,n);a.checked?i<0&&(e.loadName=o.concat([n])):i>-1&&(e.loadName=o.slice(0,i).concat(o.slice(i+1)))}else e.loadName=r}}}),o("label",[e._v("公司名称")]),o("input",{directives:[{name:"model",rawName:"v-model",value:e.loadProduct,expression:"loadProduct"}],attrs:{type:"checkbox",id:"product"},domProps:{checked:Array.isArray(e.loadProduct)?e._i(e.loadProduct,null)>-1:e.loadProduct},on:{change:function(t){var o=e.loadProduct,a=t.target,r=!!a.checked;if(Array.isArray(o)){var n=null,i=e._i(o,n);a.checked?i<0&&(e.loadProduct=o.concat([n])):i>-1&&(e.loadProduct=o.slice(0,i).concat(o.slice(i+1)))}else e.loadProduct=r}}}),o("label",[e._v("产品名")]),o("input",{directives:[{name:"model",rawName:"v-model",value:e.loadStock,expression:"loadStock"}],attrs:{type:"checkbox",id:"stock"},domProps:{checked:Array.isArray(e.loadStock)?e._i(e.loadStock,null)>-1:e.loadStock},on:{change:function(t){var o=e.loadStock,a=t.target,r=!!a.checked;if(Array.isArray(o)){var n=null,i=e._i(o,n);a.checked?i<0&&(e.loadStock=o.concat([n])):i>-1&&(e.loadStock=o.slice(0,i).concat(o.slice(i+1)))}else e.loadStock=r}}}),o("label",[e._v("股票")])]),o("div",{staticClass:"table-responsive"},[o("table",{staticClass:"table table-striped"},[o("thead",[o("tr",[o("th",{directives:[{name:"show",rawName:"v-show",value:e.loadId,expression:"loadId"}]},[e._v("统一社会信用代码")]),o("th",{directives:[{name:"show",rawName:"v-show",value:e.loadName,expression:"loadName"}]},[e._v("公司名称")]),o("th",{directives:[{name:"show",rawName:"v-show",value:e.loadProduct,expression:"loadProduct"}]},[e._v("产品名")]),o("th",{directives:[{name:"show",rawName:"v-show",value:e.loadStock,expression:"loadStock"}]},[e._v("股票")])])]),o("tbody",e._l(e.info.users,(function(t){return o("tr",{key:t.id},[o("td",{directives:[{name:"show",rawName:"v-show",value:e.loadId,expression:"loadId"}]},[e._v(e._s(t.id))]),o("td",{directives:[{name:"show",rawName:"v-show",value:e.loadName,expression:"loadName"}]},[e._v(e._s(t.title))]),o("td",{directives:[{name:"show",rawName:"v-show",value:e.loadProduct,expression:"loadProduct"}]},[e._v(e._s(t.product))]),o("td",{directives:[{name:"show",rawName:"v-show",value:e.loadStock,expression:"loadStock"}]},[e._v(e._s(e._f("outputStock")(t)))])])})),0)])]),o("div",[o("p",{directives:[{name:"show",rawName:"v-show",value:e.info.isLoading,expression:"info.isLoading"}]},[e._v("稍等一下喵喵")])]),o("div",[o("p",{directives:[{name:"show",rawName:"v-show",value:e.info.errMsg,expression:"info.errMsg"}]},[e._v(e._s(e.info.errMsg))])])])},h=[],k=o(3019),y={name:"lList",data:function(){return{info:{isLoading:!1,errMsg:"",users:[]},loadId:!1,loadName:!0,loadProduct:!0,loadStock:!1}},mounted:function(){var e=this;this.$bus.$on("updateData",(function(t){e.info=(0,k.Z)((0,k.Z)({},e.info),t)}))},filters:{outputStock:function(e){var t="";return e.stock_hk&&(t+="港股："+e.stock_hk+" "),e.stock_A&&(t+="A股："+e.stock_A),e.stock_nasdaq&&(t+="美股："+e.stock_nasdaq),t}}},w=y,b=(0,v.Z)(w,p,h,!1,null,"9bf745cc",null),_=b.exports,g={name:"App",components:{Search:f,List:_}},N=g,x=(0,v.Z)(N,r,n,!1,null,null,null),P=x.exports,S=o(8345),A=new S.Z({mode:"history",routes:[{path:"/",component:f,name:"search"},{path:"/",component:_,name:"list"}]}),C=o(2032);a["default"].config.productionTip=!1,a["default"].use(C.ZPm),a["default"].use(S.Z),new a["default"]({el:"#app",render:function(e){return e(P)},beforeCreate:function(){a["default"].prototype.$bus=this},router:A})}},t={};function o(a){var r=t[a];if(void 0!==r)return r.exports;var n=t[a]={exports:{}};return e[a](n,n.exports,o),n.exports}o.m=e,function(){var e=[];o.O=function(t,a,r,n){if(!a){var i=1/0;for(l=0;l<e.length;l++){a=e[l][0],r=e[l][1],n=e[l][2];for(var s=!0,c=0;c<a.length;c++)(!1&n||i>=n)&&Object.keys(o.O).every((function(e){return o.O[e](a[c])}))?a.splice(c--,1):(s=!1,n<i&&(i=n));if(s){e.splice(l--,1);var d=r();void 0!==d&&(t=d)}}return t}n=n||0;for(var l=e.length;l>0&&e[l-1][2]>n;l--)e[l]=e[l-1];e[l]=[a,r,n]}}(),function(){o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,{a:t}),t}}(),function(){o.d=function(e,t){for(var a in t)o.o(t,a)&&!o.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){var e={143:0};o.O.j=function(t){return 0===e[t]};var t=function(t,a){var r,n,i=a[0],s=a[1],c=a[2],d=0;if(i.some((function(t){return 0!==e[t]}))){for(r in s)o.o(s,r)&&(o.m[r]=s[r]);if(c)var l=c(o)}for(t&&t(a);d<i.length;d++)n=i[d],o.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return o.O(l)},a=self["webpackChunkmeow"]=self["webpackChunkmeow"]||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))}();var a=o.O(void 0,[998],(function(){return o(4111)}));a=o.O(a)})();
//# sourceMappingURL=app-legacy.8ffe4f1b.js.map