webpackJsonp([2],{"035s":function(t,e){},"4R4o":function(t,e){},"97Sy":function(t,e){},TFhR:function(t,e,a){"use strict";var s={hotLists:"/index/hotLists",banner:"/index/banner",topList:"/category/topList",rankList:"/category/rank",subList:"/category/subList",searchList:"/search/list",details:"/goods/details",deal:"/goods/deal",addCart:"/cart/add",cartLists:"/cart/list",cartReduce:"/cart/reduce",cartRemove:"/cart/remove",cartMremove:"/cart/mrremove",addressList:"/address/list",addressAdd:"/address/add",addressRemove:"/address/remove",addressUpdate:"/address/update",addressSetDefault:"/address/setDefault"};for(var n in s)s.hasOwnProperty(n)&&(s[n]="http://rap2api.taobao.org/app/mock/7058"+s[n]);e.a=s},U67u:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("97Sy"),n=(a.n(s),a("bCKv")),i=a.n(n),r=a("035s"),o=(a.n(r),a("eChN")),c=(a.n(o),a("7+uW")),l=a("mtWM"),d=a.n(l),u=a("TFhR"),f=a("gN+L"),p=a("nq5D");c.default.use(i.a);new c.default({el:"#app",data:{lists:null,pageNum:1,loading:!1,allLoaded:!1,bannerList:null},created:function(){this.getLists(),this.getBannerList()},methods:{getLists:function(){var t=this;this.allLoaded||(this.loading=!0,d.a.post(u.a.hotLists,{pageNum:this.pageNum,pageSize:this.pageSize}).then(function(e){var a=e.data.lists;a.length<t.pageSize&&(t.allLoaded=!0),t.lists?t.lists=t.lists.concat(a):t.lists=e.data.lists,t.pageNum++,t.loading=!1}))},getBannerList:function(){var t=this;d.a.get(u.a.banner).then(function(e){console.log(e),t.bannerList=e.data.lists})}},components:{Foot:p.a,Swipe:f.a}})},eChN:function(t,e){},"gN+L":function(t,e,a){"use strict";var s=a("DNVT"),n=(a("v2ns"),{name:"swipe",props:{lists:{type:Array,required:!0},name:""},mounted:function(){new s.a(".swiper-container",{loop:!0,effect:"coverflow",autoplay:!0,pagination:{el:".swiper-pagination"}})}}),i={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"swiper-container"},[e("div",{staticClass:"swiper-wrapper"},this._l(this.lists,function(t){return e("div",{key:t.id,staticClass:"swp-page swiper-slide"},[e("a",{staticClass:"js-no-follow",attrs:{href:t.clickUrl}},[e("img",{staticClass:"goods-main-photo fadeIn",attrs:{src:t.img,alt:""}})])])})),this._v(" "),e("div",{staticClass:"swiper-pagination"})])},staticRenderFns:[]};var r=a("VU/8")(n,i,!1,function(t){a("4R4o")},null,null);e.a=r.exports},j7wO:function(t,e){},nq5D:function(t,e,a){"use strict";var s=a("mw3O"),n=a.n(s).a.parse(location.search.substr(1)).index,i=[{name:"首页",icon:"icon-home",href:"index.html"},{name:"分类",icon:"icon-category",href:"category.html"},{name:"购物车",icon:"icon-cart",href:"cart.html"},{name:"我",icon:"icon-user",href:"member.html"}],r={data:function(){return{navConfig:i,curIndex:parseInt(n)||0}},methods:{changeNav:function(t,e){location.href=t.href+"?index="+e,console.log("list.href: "+t.href),console.log("index: "+e)}}},o={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"bottom-nav"},[a("ul",t._l(t.navConfig,function(e,s){return a("li",{key:e.id,class:{active:s==t.curIndex},on:{click:function(a){t.changeNav(e,s)}}},[a("a",[a("i",{class:e.icon}),t._v(" "),a("div",[t._v(t._s(e.name))])])])}))])},staticRenderFns:[]};var c=a("VU/8")(r,o,!1,function(t){a("j7wO")},null,null);e.a=c.exports},v2ns:function(t,e){}},["U67u"]);
//# sourceMappingURL=index.9b7713c963bdd5646dbf.js.map