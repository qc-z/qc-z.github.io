webpackJsonp([1],{"2Exg":function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var n=e("BO1k"),r=e.n(n),i={name:"productCenter",components:{successCase:e("WUAh").a},data:function(){return{productCenter:[]}},mounted:function(){this.queryproductCenter()},methods:{queryproductCenter:function(){var t=this;console.log("产品中心--"),this.$axios.get(this.BASE_URL+"/website/products/productCenter").then(function(s){var e=s.data.data;console.log("products",e);var n=!0,i=!1,a=void 0;try{for(var c,o=r()(e);!(n=(c=o.next()).done);n=!0){var l=c.value;t.productCenter.push(l.slice(0,3))}}catch(t){i=!0,a=t}finally{try{!n&&o.return&&o.return()}finally{if(i)throw a}}console.log("this.productCenter",t.productCenter)}).catch(function(t){console.log(t)})}}},a={render:function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",[n("div",{staticClass:"container-fluid mini"}),t._v(" "),n("section",{attrs:{id:"main"}},[t._m(0),t._v(" "),t._m(1),t._v(" "),n("div",{staticClass:"single-con container"},[t._m(2),t._v(" "),n("div",{staticClass:"row"},[n("div",{staticClass:"col-md-12"},t._l(t.productCenter,function(s){return n("div",{staticClass:"cp-cats"},[n("div",{staticClass:"cp-title"},[n("h3",[n("a",{attrs:{href:""}},[t._v(t._s(s[0].productClassfiy))])]),t._v(" "),t._m(3,!0)]),t._v(" "),t._l(s,function(s){return n("ul",[n("li",{staticClass:"col-md-3 col-sm-4 col-xs-12"},[n("a",{attrs:{href:"",title:"EBZ160H悬臂式掘进机"}},[n("img",{staticClass:"lazy thumbnail",attrs:{src:e("zheR"),"data-original":"../../../static/picture/1-1FFH155060-L.jpg",alt:s.pro_name}}),t._v(" "),n("p",[t._v("\n                                        "+t._s(s.pro_name)+"\n                                      ")])])])])})],2)}),0)])]),t._v(" "),n("successCase")],1)])},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{attrs:{id:"slider"}},[s("div",{staticClass:"sliders"},[s("div",{staticClass:"item"},[s("img",{attrs:{src:e("pAw7")}})])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("nav",{staticClass:"crumbs"},[s("div",{staticClass:"container"},[s("div",{staticClass:"con",staticStyle:{float:"left"}},[this._v("\n                      当前位置:\n                      "),s("a",{attrs:{href:""}},[this._v("主页")]),this._v("\n                      >\n                      "),s("a",{attrs:{href:""}},[this._v("产品中心")])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"title-con"},[s("h3",[this._v("\n                      产品中心\n                      "),s("span",[this._v("\n                          PRODUCTS CENTER\n                      ")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",{staticClass:"more"},[s("a",{attrs:{href:""}},[this._v("查看更多 +")])])}]};var c=e("VU/8")(i,a,!1,function(t){e("9rlM")},"data-v-5cbb9f10",null);s.default=c.exports},"9rlM":function(t,s){},BO1k:function(t,s,e){t.exports={default:e("fxRn"),__esModule:!0}},fxRn:function(t,s,e){e("+tPU"),e("zQR9"),t.exports=e("g8Ux")},g8Ux:function(t,s,e){var n=e("77Pl"),r=e("3fs2");t.exports=e("FeBl").getIterator=function(t){var s=r(t);if("function"!=typeof s)throw TypeError(t+" is not iterable!");return n(s.call(t))}},pAw7:function(t,s,e){t.exports=e.p+"static/img/s1.1cea378.png"}});
//# sourceMappingURL=1.e874d12200b3a35557a1.js.map