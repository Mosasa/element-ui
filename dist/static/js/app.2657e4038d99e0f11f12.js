webpackJsonp([0],{DwGj:function(t,n){},NHnr:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=e("7+uW"),i={name:"ElButton",props:{disabled:Boolean,type:{type:String,default:"default"},loading:Boolean},computed:{buttonDisabled:function(){return this.disabled}}},a={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("button",{staticClass:"el-button",class:[t.type?"el-button--"+t.type:"",{"is-disabled":t.buttonDisabled,"is-loading":t.loading}],attrs:{disabled:t.buttonDisabled}},[t.loading?e("i",{staticClass:"el-icon-loading"}):t._e(),t._v(" "),t.icon&&!t.loading?e("i",{class:t.icon}):t._e(),t._v(" "),t._t("default")],2)},staticRenderFns:[]};var l={name:"App",data:function(){return{disabled:!1}},components:{ElButton:e("VU/8")(i,a,!1,function(t){e("o+pm")},null,null).exports},mounted:function(){var t=this;setTimeout(function(){t.disabled=!0},2e3)},methods:{doLoading:function(){console.log("aaa")}}},s={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{attrs:{id:"app"}},[e("el-button",{attrs:{type:"primary",loading:"“isLoading”",icon:"el-icon-edit"}},[t._v("提交")]),t._v(" "),e("el-button",{attrs:{type:"success",icon:"el-icon-loading"}},[t._v("提交")]),t._v(" "),e("el-button",{attrs:{type:"warning"}},[t._v(" 提交")]),t._v(" "),e("el-button",{attrs:{type:"danger",disabled:t.disabled}},[t._v("提交")])],1)},staticRenderFns:[]};var d=e("VU/8")(l,s,!1,function(t){e("DwGj")},null,null).exports;e("tvR6");o.a.config.productionTip=!1,new o.a({el:"#app",components:{App:d},template:"<App/>"})},"o+pm":function(t,n){},tvR6:function(t,n){}},["NHnr"]);
//# sourceMappingURL=app.2657e4038d99e0f11f12.js.map