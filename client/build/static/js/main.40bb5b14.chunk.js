(this.webpackJsonpfdi=this.webpackJsonpfdi||[]).push([[6],{107:function(e,t,r){"use strict";r.r(t);var n=r(7),a=r(2),c=r.n(a),u=r(22),o=r.n(u),s=(r(56),r(6)),i=r.n(s),p=r(10),d=r(23),l=r(25),f=r(16),b=r(49),O=r(30),A=r(55),h=r(51),E=r(52),j=r(53),g=r(54),T=r(3),_=r(31),v=r(28);var y=function(){var e=Object(a.useState)(10),t=Object(v.a)(e,2),r=t[0],c=t[1],u=Object(f.f)();return Object(a.useEffect)((function(){var e=setInterval((function(){c((function(e){return--e}))}),1e3);return 0===r&&u.push("/"),function(){return clearInterval(e)}}),[r]),Object(n.jsx)("div",{className:"container p-5 text-center",children:Object(n.jsxs)("p",{children:["Redirecting you in ",r," Seconds"]})})};var L=function(e){e.children;var t=Object(_.a)(e,["children"]),r=Object(d.d)((function(e){return e})).user;return r&&r.token?Object(n.jsx)(f.a,Object(T.a)({},t)):Object(n.jsx)(y,{})},m=r(29);var D=function(e){e.children;var t=Object(_.a)(e,["children"]),r=Object(d.d)((function(e){return e})).user.token,c=Object(a.useState)(!1),u=Object(v.a)(c,2),o=u[0],s=u[1],i=Object(m.useToasts)().addToast;return Object(a.useEffect)((function(){r?(Object(O.b)(r).then((function(e){s(!0)})).catch((function(e){i(e&&e.response&&e.response.data.error||e.message,{appearance:"warning",autoDismiss:!0})})),s(!1)):s(!1)}),[r]),o&&r?Object(n.jsx)(f.a,Object(T.a)({},t)):Object(n.jsx)(y,{})};var R=function(e){e.children;var t=Object(_.a)(e,["children"]),r=Object(d.d)((function(e){return e})).user.token,c=Object(a.useState)(!1),u=Object(v.a)(c,2),o=u[0],s=u[1],i=Object(m.useToasts)().addToast;return Object(a.useEffect)((function(){r?(Object(O.c)(r).then((function(e){s(!0)})).catch((function(e){i(e.response.data.error||e.message,{appearance:"warning",autoDismiss:!0})})),s(!1)):s(!1)}),[r]),o&&r?Object(n.jsx)(f.a,Object(T.a)({},t)):Object(n.jsx)(y,{})},G=c.a.lazy((function(){return Promise.all([r.e(0),r.e(1),r.e(2),r.e(3),r.e(15)]).then(r.bind(null,671))})),C=c.a.lazy((function(){return Promise.all([r.e(5),r.e(34),r.e(29)]).then(r.bind(null,682))})),x=c.a.lazy((function(){return Promise.all([r.e(3),r.e(5),r.e(26),r.e(24)]).then(r.bind(null,678))})),S=c.a.lazy((function(){return Promise.all([r.e(0),r.e(1),r.e(4),r.e(22),r.e(30)]).then(r.bind(null,660))})),N=c.a.lazy((function(){return r.e(31).then(r.bind(null,661))})),I=c.a.lazy((function(){return r.e(32).then(r.bind(null,662))})),w=c.a.lazy((function(){return Promise.all([r.e(0),r.e(1),r.e(27)]).then(r.bind(null,663))})),U=c.a.lazy((function(){return Promise.all([r.e(0),r.e(1),r.e(3),r.e(5),r.e(23)]).then(r.bind(null,680))})),P=c.a.lazy((function(){return Promise.all([r.e(0),r.e(1),r.e(2),r.e(3),r.e(8)]).then(r.bind(null,673))})),k=c.a.lazy((function(){return Promise.all([r.e(0),r.e(1),r.e(2),r.e(4),r.e(10)]).then(r.bind(null,674))})),B=c.a.lazy((function(){return Promise.all([r.e(0),r.e(1),r.e(2),r.e(4),r.e(11)]).then(r.bind(null,675))})),Y=c.a.lazy((function(){return Promise.all([r.e(0),r.e(1),r.e(2),r.e(3),r.e(19)]).then(r.bind(null,664))})),z=c.a.lazy((function(){return Promise.all([r.e(0),r.e(1),r.e(2),r.e(3),r.e(18)]).then(r.bind(null,665))})),M=c.a.lazy((function(){return Promise.all([r.e(0),r.e(28)]).then(r.bind(null,666))})),F=c.a.lazy((function(){return Promise.all([r.e(0),r.e(1),r.e(2),r.e(3),r.e(12)]).then(r.bind(null,679))})),V=c.a.lazy((function(){return Promise.all([r.e(0),r.e(1),r.e(2),r.e(3),r.e(17)]).then(r.bind(null,676))})),q=c.a.lazy((function(){return Promise.all([r.e(0),r.e(1),r.e(2),r.e(3),r.e(14)]).then(r.bind(null,608))})),J=c.a.lazy((function(){return Promise.all([r.e(0),r.e(1),r.e(2),r.e(3),r.e(13)]).then(r.bind(null,672))})),W=c.a.lazy((function(){return Promise.all([r.e(0),r.e(1),r.e(2),r.e(3),r.e(20)]).then(r.bind(null,667))})),H=c.a.lazy((function(){return Promise.all([r.e(0),r.e(1),r.e(2),r.e(3),r.e(21)]).then(r.bind(null,668))})),K=c.a.lazy((function(){return Promise.all([r.e(0),r.e(1),r.e(2),r.e(3),r.e(9)]).then(r.bind(null,683))})),Q=c.a.lazy((function(){return Promise.all([r.e(0),r.e(1),r.e(25),r.e(33)]).then(r.bind(null,669))}));var X,Z=Object(d.b)((function(e){return{user:e.user,categories:e.category.categories,subCategories:e.subCategory.subCategories,tags:e.tag.tags,brands:e.brand.brands}}),{signInUser:A.a,listAllCategories:h.c,listAllSubCategories:E.c,listAllTags:j.c,listBrands:g.b})((function(e){var t=e.signInUser,r=e.categories,c=e.subCategories,u=e.tags,o=e.brands,s=e.listAllCategories,d=e.listAllSubCategories,A=e.listAllTags,h=e.listBrands;return Object(a.useEffect)((function(){var e=b.a.onAuthStateChanged(function(){var e=Object(p.a)(i.a.mark((function e(r){var n,a,c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!r){e.next=9;break}return e.next=3,r.getIdTokenResult();case 3:return n=e.sent,e.next=6,Object(O.d)(n.token);case 6:a=e.sent,c={token:n.token,user:a.data},t(c);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());return 0===r.length&&s(),0===c.length&&d(),0===u.length&&A(),0===o.length&&h(),function(){return e()}}),[]),Object(n.jsx)(a.Suspense,{fallback:Object(n.jsx)("div",{children:"Loading..."}),children:Object(n.jsxs)(l.a,{children:[Object(n.jsx)(G,{}),Object(n.jsxs)(f.c,{children:[Object(n.jsx)(f.a,{exact:!0,path:"/",component:x}),Object(n.jsx)(f.a,{exact:!0,path:"/product/:slug",component:F}),Object(n.jsx)(f.a,{exact:!0,path:"/shop",component:V}),Object(n.jsx)(f.a,{exact:!0,path:"/category/:slug",component:W}),Object(n.jsx)(f.a,{exact:!0,path:"/subcategory/:slug",component:H}),Object(n.jsx)(f.a,{exact:!0,path:"/login",component:S}),Object(n.jsx)(f.a,{exact:!0,path:"/register",component:N}),Object(n.jsx)(f.a,{exact:!0,path:"/register/complete",component:I}),Object(n.jsx)(f.a,{exact:!0,path:"/resetpassword",component:w}),Object(n.jsx)(f.a,{exact:!0,path:"/deal",component:Y}),Object(n.jsx)(f.a,{exact:!0,path:"/best",component:z}),Object(n.jsx)(f.a,{exact:!0,path:"/cart",component:q}),Object(n.jsx)(f.a,{exact:!0,path:"/paymentstatus",component:Q}),Object(n.jsx)(L,{exact:!0,path:"/user/dashboard",component:U}),Object(n.jsx)(L,{exact:!0,path:"/wishlist",component:M}),Object(n.jsx)(L,{exact:!0,path:"/checkout",component:J}),Object(n.jsx)(D,{exact:!0,path:"/admin/dashboard",component:P}),Object(n.jsx)(D,{exact:!0,path:"/admin/newproduct",component:k}),Object(n.jsx)(D,{exact:!0,path:"/admin/editProduct/:slug",component:B}),Object(n.jsx)(R,{exact:!0,path:"/manager/dashboard",component:K})]}),Object(n.jsx)(C,{})]})})})),$=function(e){e&&e instanceof Function&&r.e(35).then(r.bind(null,670)).then((function(t){var r=t.getCLS,n=t.getFID,a=t.getFCP,c=t.getLCP,u=t.getTTFB;r(e),n(e),a(e),c(e),u(e)}))},ee=(r(105),r(24)),te=(r(106),r(68)),re=r(4),ne={user:null,token:null,userLoading:!1},ae=r(33),ce=function(e,t){return[].concat(Object(ae.a)(e),[t])},ue=function(e,t){return e.filter((function(e){return e._id!==t}))},oe=function(e,t){return e.map((function(e){return e._id===t._id?t:e}))},se={categories:[],categoryLoading:!1},ie={subCategories:[],subCategoryLoading:!1},pe={tags:[],tagLoading:!1},de={brands:[],brandLoading:!1},le=r(69),fe=r.n(le),be=function(e,t){return e.find((function(e){return e.product===t.product}))?e.map((function(e){return e.product===t.product?Object(T.a)({},t):Object(T.a)({},e)})):[].concat(Object(ae.a)(e),[Object(T.a)({},t)])},Oe=function(e,t){if(console.log(t),t.product.quantity>=t.count){var r=e.filter((function(e){return e.product!=t.product._id}));return r=[].concat(Object(ae.a)(r),[{quantity:t.count,_id:fe()(),product:t.product._id,slug:t.product.slug,name:t.product.slug,price:t.product.price,productImage:"/api/serveImage/product/".concat(t.product.product,"/0/thumb"),addOns:t.addOns,exchange:Object.keys(t.exchangeProduct).length>0?t.exchangeProduct:void 0}]),he(r),r}},Ae=function(e,t){var r=e.filter((function(e){return e.product!==t}));return he(r),r},he=function(e){var t=JSON.stringify(e);window.localStorage.setItem("cart",t)},Ee=function(e){var t=0;return e.map((function(e){var r=e.price,n=0;e.addOns.map((function(e){n+=e.price})),t+=e.quantity*(r+n),e.exchange&&(t-=e.exchange.exchangePrice)})),t},je={items:[],totalPrice:0},ge=[],Te=Object(ee.combineReducers)({user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ne,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case re.f.USER_LOADING:return Object(T.a)(Object(T.a)({},e),{},{userLoading:!0});case re.f.USER_LOADING_DONE:return Object(T.a)(Object(T.a)({},e),{},{userLoading:!1});case re.f.LOGGED_IN_USER:return Object(T.a)(Object(T.a)({},e),{},{user:t.payload.user,token:t.payload.token,userLoading:!1});case re.f.LOGOUT:return Object(T.a)(Object(T.a)({},e),{},{user:null,token:null,userLoading:!1});case re.f.UPDATE_ADDRESS:return Object(T.a)(Object(T.a)({},e),{},{user:Object(T.a)(Object(T.a)({},e.user),{},{address:t.payload})});default:return e}},category:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:se,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case re.c.CATEGORY_LOADING:return Object(T.a)(Object(T.a)({},e),{},{categoryLoading:!0});case re.c.CATEGORY_LOADING_DONE:return Object(T.a)(Object(T.a)({},e),{},{categoryLoading:!1});case re.c.CREATE_CATEGORY:return Object(T.a)(Object(T.a)({},e),{},{categories:ce(e.categories,t.payload),categoryLoading:!1});case re.c.REMOVE_CATEGORY:return Object(T.a)(Object(T.a)({},e),{},{categories:ue(e.categories,t.payload),categoryLoading:!1});case re.c.LIST_ALL_CATEGORY:return Object(T.a)(Object(T.a)({},e),{},{categories:t.payload,categoryLoading:!1});case re.c.UPDATE_CATEGORY:return Object(T.a)(Object(T.a)({},e),{},{categories:oe(e.categories,t.payload),categoryLoading:!1});default:return e}},subCategory:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ie,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case re.d.SUBCATEGORY_LOADING:return Object(T.a)(Object(T.a)({},e),{},{subCategoryLoading:!0});case re.d.SUBCATEGORY_LOADING_DONE:return Object(T.a)(Object(T.a)({},e),{},{subCategoryLoading:!1});case re.d.CREATE_SUBCATEGORY:return Object(T.a)(Object(T.a)({},e),{},{subCategories:ce(e.subCategories,t.payload),subCategoryLoading:!1});case re.d.REMOVE_SUBCATEGORY:return Object(T.a)(Object(T.a)({},e),{},{subCategories:ue(e.subCategories,t.payload),subCategoryLoading:!1});case re.d.LIST_ALL_SUBCATEGORY:return Object(T.a)(Object(T.a)({},e),{},{subCategories:t.payload,subCategoryLoading:!1});case re.d.UPDATE_SUBCATEGORY:return Object(T.a)(Object(T.a)({},e),{},{subCategories:oe(e.subCategories,t.payload),subCategoryLoading:!1});default:return e}},tag:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:pe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case re.e.LIST_TAGS:return Object(T.a)(Object(T.a)({},e),{},{tags:t.payload,tagLoading:!1});case re.e.CREATE_TAG:return Object(T.a)(Object(T.a)({},e),{},{tags:ce(e.tags,t.payload),tagLoading:!1});case re.e.DELETE_TAG:return Object(T.a)(Object(T.a)({},e),{},{tags:ue(e.tags,t.payload),tagLoading:!1});case re.e.UPDATE_TAG:return Object(T.a)(Object(T.a)({},e),{},{tags:oe(e.tags,t.payload),tagLoading:!1});case re.e.TAG_LOADING:return Object(T.a)(Object(T.a)({},e),{},{tagLoading:!0});case re.e.TAG_LOADING_DONE:return Object(T.a)(Object(T.a)({},e),{},{tagLoading:!1});default:return e}},brand:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:de,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case re.a.BRAND_LOADING:return Object(T.a)(Object(T.a)({},e),{},{brandLoading:!0});case re.a.BRAND_LOADING_DONE:return Object(T.a)(Object(T.a)({},e),{},{brandLoading:!1});case re.a.LIST_BRANDS:return Object(T.a)(Object(T.a)({},e),{},{brands:t.payload,brandLoading:!1});case re.a.CREATE_BRAND:return Object(T.a)(Object(T.a)({},e),{},{brands:ce(e.brands,t.payload),brandLoading:!1});case re.a.DELETE_BRAND:return Object(T.a)(Object(T.a)({},e),{},{brands:ue(e.brands,t.payload),brandLoading:!1});case re.a.UPDATE_BRAND:return Object(T.a)(Object(T.a)({},e),{},{brands:oe(e.brands,t.payload),brandLoading:!1});default:return e}},cart:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:je,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case re.b.GET_CART:case re.b.GET_LOCAL_CART:return Object(T.a)(Object(T.a)({},e),{},{items:t.payload,totalPrice:Ee(t.payload)});case re.b.ADD_TO_CART:return Object(T.a)(Object(T.a)({},e),{},{items:be(e.items,t.payload),totalPrice:Ee(be(e.items,t.payload))});case re.b.ADD_TO_LOCAL_CART:return Object(T.a)(Object(T.a)({},e),{},{items:Oe(e.items,t.payload),totalPrice:Ee(Oe(e.items,t.payload))});case re.b.DELETE_LOCAL_CART:return Object(T.a)(Object(T.a)({},e),{},{items:Ae(e.items,t.payload),totalPrice:Ee(Ae(e.items,t.payload))});default:return e}},wishList:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ge,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case re.g.LIST_WISHLIST:return t.payload;default:return e}}}),_e=[te.a];X=Object(ee.createStore)(Te,Object(ee.compose)(ee.applyMiddleware.apply(void 0,_e)));var ve=r(8);r.n(ve).a.defaults.baseURL="/api",o.a.render(Object(n.jsx)(d.a,{store:X,children:Object(n.jsx)(l.a,{children:Object(n.jsx)(m.ToastProvider,{children:Object(n.jsx)(Z,{})})})}),document.getElementById("root")),$()},30:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"d",(function(){return i})),r.d(t,"b",(function(){return p})),r.d(t,"c",(function(){return d})),r.d(t,"e",(function(){return l}));var n=r(6),a=r.n(n),c=r(10),u=r(8),o=r.n(u),s=function(){var e=Object(c.a)(a.a.mark((function e(t){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o.a.defaults.headers.common.authtoken=t,e.next=3,o.a.post("/auth/create-or-update-user",{});case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),i=function(){var e=Object(c.a)(a.a.mark((function e(t){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o.a.defaults.headers.common.authtoken=t,e.next=3,o.a.post("/auth/current-user",{});case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=Object(c.a)(a.a.mark((function e(t){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o.a.defaults.headers.common.authtoken=t,e.next=3,o.a.post("/auth/current-admin",{});case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d=function(){var e=Object(c.a)(a.a.mark((function e(t){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o.a.defaults.headers.common.authtoken=t,e.next=3,o.a.post("/auth/current-manager",{});case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=Object(c.a)(a.a.mark((function e(t,r,n){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n?r.push("".concat(n.from)):"Admin"===t.role?r.push("/admin/dashboard"):"Manager"===t.role?r.push("/manager/dashboard"):r.push("/user/dashboard");case 1:case"end":return e.stop()}}),e)})));return function(t,r,n){return e.apply(this,arguments)}}()},4:function(e,t,r){"use strict";r.d(t,"f",(function(){return n})),r.d(t,"c",(function(){return a})),r.d(t,"d",(function(){return c})),r.d(t,"e",(function(){return u})),r.d(t,"a",(function(){return o})),r.d(t,"b",(function(){return s})),r.d(t,"g",(function(){return i}));var n={LOGGED_IN_USER:"LOGGED_IN_USER",LOGOUT:"LOGOUT",USER_LOADING:"USER_LOADING",USER_LOADING_DONE:"USER_LOADING_DONE",UPDATE_ADDRESS:"UPDATE_ADDRESS"},a={CATEGORY_LOADING:"CATEGORY_LOADING",CATEGORY_LOADING_DONE:"CATEGORY_LOADING_DONE",CREATE_CATEGORY:"CREATE_CATEGORY",UPDATE_CATEGORY:"UPDATE_CATEGORY",LIST_ALL_CATEGORY:"LIST_ALL_CATEGORY",REMOVE_CATEGORY:"REMOVE_CATEGORY"},c={SUBCATEGORY_LOADING:"SUBCATEGORY_LOADING",SUBCATEGORY_LOADING_DONE:"SUBCATEGORY_LOADING_DONE",CREATE_SUBCATEGORY:"CREATE_SUBCATEGORY",UPDATE_SUBCATEGORY:"UPDATE_SUBCATEGORY",LIST_ALL_SUBCATEGORY:"LIST_ALL_SUBCATEGORY",REMOVE_SUBCATEGORY:"REMOVE_SUBCATEGORY"},u={TAG_LOADING:"TAG_LOADING",TAG_LOADING_DONE:"TAG_LOADING_DONE",CREATE_TAG:"CREATE_TAG",DELETE_TAG:"DELETE_TAG",UPDATE_TAG:"UPDATE_TAG",LIST_TAGS:"LIST_TAGS"},o={BRAND_LOADING:"BRAND_LOADING",BRAND_LOADING_DONE:"BRAND_LOADING_DONE",CREATE_BRAND:"CREATE_BRAND",DELETE_BRAND:"DELETE_BRAND",UPDATE_BRAND:"UPDATE_BRAND",LIST_BRANDS:"LIST_BRANDS"},s={ADD_TO_CART:"ADD_TO_CART",ADD_TO_LOCAL_CART:"ADD_TO_LOCAL_CART",DELETE_LOCAL_CART:"DELETE_LOCAL_CART",DECREMENT_CART:"DECREMENT_CART",EMPTY_CART:"EMPTY_CART",GET_CART:"GET_CART",GET_LOCAL_CART:"GET_LOCAL_CART"},i={LIST_WISHLIST:"LIST_WISHLIST"}},49:function(e,t,r){"use strict";r.d(t,"a",(function(){return a})),r.d(t,"c",(function(){return c})),r.d(t,"b",(function(){return u}));var n=r(27);n.a.initializeApp({apiKey:"AIzaSyDavoSPQsTaEt8qJtC-2GKNpAp5aWujj70",authDomain:"fairdeal-international.firebaseapp.com",databaseURL:"https://fairdeal-international.firebaseio.com",projectId:"fairdeal-international",storageBucket:"fairdeal-international.appspot.com",messagingSenderId:"270683153660",appId:"1:270683153660:web:add72ec1c78638671aa379"});var a=n.a.auth(),c=new n.a.auth.GoogleAuthProvider,u=n.a},51:function(e,t,r){"use strict";r.d(t,"a",(function(){return d})),r.d(t,"c",(function(){return l})),r.d(t,"b",(function(){return f})),r.d(t,"d",(function(){return b}));var n=r(6),a=r.n(n),c=r(10),u=r(4),o=r(8),s=r.n(o),i={type:u.c.CATEGORY_LOADING},p={type:u.c.CATEGORY_LOADING_DONE},d=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(r){var n;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r(i),t.prev=1,t.next=4,s.a.post("/category",{name:e});case 4:return n=t.sent,r({type:u.c.CREATE_CATEGORY,payload:n.data}),t.abrupt("return",{success:n.data.name});case 9:return t.prev=9,t.t0=t.catch(1),t.abrupt("return",{error:t.t0.response.data.error});case 12:return t.prev=12,r(p),t.finish(12);case 15:case"end":return t.stop()}}),t,null,[[1,9,12,15]])})));return function(e){return t.apply(this,arguments)}}()},l=function(){return function(){var e=Object(c.a)(a.a.mark((function e(t){var r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(i),e.prev=1,e.next=4,s.a.get("/category");case 4:r=e.sent,t({type:u.c.LIST_ALL_CATEGORY,payload:r.data}),e.next=11;break;case 8:return e.prev=8,e.t0=e.catch(1),e.abrupt("return",{error:"Internal server error has occured! "});case 11:return e.prev=11,t(p),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[1,8,11,14]])})));return function(t){return e.apply(this,arguments)}}()},f=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(r){var n;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r(i),t.prev=1,t.next=4,s.a.delete("/category/".concat(e));case 4:if(n=t.sent,r({type:u.c.REMOVE_CATEGORY,payload:n.data._id}),!n.data){t.next=8;break}return t.abrupt("return",{success:n.data});case 8:t.next=13;break;case 10:return t.prev=10,t.t0=t.catch(1),t.abrupt("return",{error:t.t0.response.data||"Delete Failed"});case 13:return t.prev=13,r(p),t.finish(13);case 16:case"end":return t.stop()}}),t,null,[[1,10,13,16]])})));return function(e){return t.apply(this,arguments)}}()},b=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(r){var n;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r(i),t.prev=1,t.next=4,s.a.patch("/category/".concat(e.slug),{name:e.name});case 4:return n=t.sent,r({type:u.c.UPDATE_CATEGORY,payload:n.data}),t.abrupt("return",{success:n.data.name});case 9:return t.prev=9,t.t0=t.catch(1),t.abrupt("return",{error:t.t0.response.data.error||"Update Failed"});case 12:return t.prev=12,r(p),t.finish(12);case 15:case"end":return t.stop()}}),t,null,[[1,9,12,15]])})));return function(e){return t.apply(this,arguments)}}()}},52:function(e,t,r){"use strict";r.d(t,"a",(function(){return d})),r.d(t,"c",(function(){return l})),r.d(t,"b",(function(){return f})),r.d(t,"d",(function(){return b}));var n=r(6),a=r.n(n),c=r(10),u=r(4),o=r(8),s=r.n(o),i={type:u.d.SUBCATEGORY_LOADING},p={type:u.d.SUBCATEGORY_LOADING_DONE},d=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(r){var n;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r(i),t.prev=1,t.next=4,s.a.post("/subcategory",{name:e.name,parent:e.parent});case 4:return n=t.sent,r({type:u.d.CREATE_SUBCATEGORY,payload:n.data}),t.abrupt("return",{success:n.data.name});case 9:return t.prev=9,t.t0=t.catch(1),t.abrupt("return",{error:t.t0.response.data.error});case 12:return t.prev=12,r(p),t.finish(12);case 15:case"end":return t.stop()}}),t,null,[[1,9,12,15]])})));return function(e){return t.apply(this,arguments)}}()},l=function(){return function(){var e=Object(c.a)(a.a.mark((function e(t){var r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(i),e.prev=1,e.next=4,s.a.get("/subcategory");case 4:return r=e.sent,t({type:u.d.LIST_ALL_SUBCATEGORY,payload:r.data}),e.abrupt("return",{success:!0});case 9:return e.prev=9,e.t0=e.catch(1),e.abrupt("return",{error:e.t0.response.data.error});case 12:return e.prev=12,t(p),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[1,9,12,15]])})));return function(t){return e.apply(this,arguments)}}()},f=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(r){var n;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r(i),t.prev=1,t.next=4,s.a.delete("/subcategory/".concat(e));case 4:if(n=t.sent,r({type:u.d.REMOVE_SUBCATEGORY,payload:n.data._id}),!n.data){t.next=8;break}return t.abrupt("return",{success:n.data.name});case 8:t.next=13;break;case 10:return t.prev=10,t.t0=t.catch(1),t.abrupt("return",{error:t.t0.response.data||"Delete Failed"});case 13:return t.prev=13,r(p),t.finish(13);case 16:case"end":return t.stop()}}),t,null,[[1,10,13,16]])})));return function(e){return t.apply(this,arguments)}}()},b=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(r){var n;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r(i),t.prev=1,t.next=4,s.a.patch("/subcategory/".concat(e.slug),{name:e.name});case 4:return n=t.sent,r({type:u.d.UPDATE_SUBCATEGORY,payload:n.data}),t.abrupt("return",{success:n.data.name});case 9:return t.prev=9,t.t0=t.catch(1),t.abrupt("return",{error:t.t0.response.data.error||"Update Failed"});case 12:return t.prev=12,r(p),t.finish(12);case 15:case"end":return t.stop()}}),t,null,[[1,9,12,15]])})));return function(e){return t.apply(this,arguments)}}()}},53:function(e,t,r){"use strict";r.d(t,"c",(function(){return d})),r.d(t,"a",(function(){return l})),r.d(t,"b",(function(){return f})),r.d(t,"d",(function(){return b}));var n=r(6),a=r.n(n),c=r(10),u=r(4),o=r(8),s=r.n(o),i={type:u.e.TAG_LOADING},p={type:u.e.TAG_LOADING_DONE},d=function(){return function(){var e=Object(c.a)(a.a.mark((function e(t){var r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(i),e.prev=1,e.next=4,s.a.get("/tag");case 4:r=e.sent,t({type:u.e.LIST_TAGS,payload:r.data}),e.next=11;break;case 8:return e.prev=8,e.t0=e.catch(1),e.abrupt("return",{error:e.t0.response.data||"Internal server error "});case 11:return e.prev=11,t(p),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[1,8,11,14]])})));return function(t){return e.apply(this,arguments)}}()},l=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(r){var n;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r(i),t.prev=1,t.next=4,s.a.post("/tag",{name:e});case 4:return n=t.sent,r({type:u.e.CREATE_TAG,payload:n.data}),t.abrupt("return",{success:n.data.name});case 9:return t.prev=9,t.t0=t.catch(1),t.abrupt("return",{error:t.t0.response.data.error||"Error creating Tag"});case 12:return t.prev=12,r(p),t.finish(12);case 15:case"end":return t.stop()}}),t,null,[[1,9,12,15]])})));return function(e){return t.apply(this,arguments)}}()},f=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(r){var n;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r(i),t.prev=1,t.next=4,s.a.delete("/tag/".concat(e));case 4:return n=t.sent,r({type:u.e.DELETE_TAG,payload:n.data._id}),t.abrupt("return",{success:n.data.name});case 9:return t.prev=9,t.t0=t.catch(1),t.abrupt("return",{error:t.t0.response.data||"Error deleting Tag"});case 12:return t.prev=12,r(p),t.finish(12);case 15:case"end":return t.stop()}}),t,null,[[1,9,12,15]])})));return function(e){return t.apply(this,arguments)}}()},b=function(e){var t=e.name,r=e.slug;return function(){var e=Object(c.a)(a.a.mark((function e(n){var c;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(i),e.prev=1,e.next=4,s.a.patch("/tag/".concat(r),{name:t});case 4:return c=e.sent,n({type:u.e.UPDATE_TAG,payload:c.data}),e.abrupt("return",{success:c.data.name});case 9:return e.prev=9,e.t0=e.catch(1),e.abrupt("return",{error:e.t0.response.data.error||"Error updating Tag"});case 12:return e.prev=12,n(p),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[1,9,12,15]])})));return function(t){return e.apply(this,arguments)}}()}},54:function(e,t,r){"use strict";r.d(t,"b",(function(){return d})),r.d(t,"a",(function(){return l})),r.d(t,"d",(function(){return f})),r.d(t,"c",(function(){return b}));var n=r(6),a=r.n(n),c=r(10),u=r(4),o=r(8),s=r.n(o),i={type:u.a.BRAND_LOADING},p={type:u.a.BRAND_LOADING_DONE},d=function(){return function(){var e=Object(c.a)(a.a.mark((function e(t){var r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(i),e.prev=1,e.next=4,s.a.get("/brand");case 4:return r=e.sent,t({type:u.a.LIST_BRANDS,payload:r.data}),e.abrupt("return",{success:r.data});case 9:return e.prev=9,e.t0=e.catch(1),e.abrupt("return",{error:e.t0.response&&e.t0.response.data||"Some error occured"});case 12:return e.prev=12,t(p),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[1,9,12,15]])})));return function(t){return e.apply(this,arguments)}}()},l=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(r){var n;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r(i),t.prev=1,t.next=4,s.a.post("/brand",e);case 4:if(!(n=t.sent).data.error){t.next=7;break}throw new Error(n.data.error);case 7:return r({type:u.a.CREATE_BRAND,payload:n.data}),t.abrupt("return",{success:n.data.name});case 11:return t.prev=11,t.t0=t.catch(1),t.abrupt("return",{error:t.t0.response&&t.t0.response.data||t.t0.message||"Some error occured"});case 14:return t.prev=14,r(p),t.finish(14);case 17:case"end":return t.stop()}}),t,null,[[1,11,14,17]])})));return function(e){return t.apply(this,arguments)}}()},f=function(e,t){return function(){var r=Object(c.a)(a.a.mark((function r(n){var c;return a.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n(i),r.prev=1,r.next=4,s.a.patch("/brand/".concat(e),t);case 4:return c=r.sent,n({type:u.a.UPDATE_BRAND,payload:c.data}),r.abrupt("return",{success:c.data.name});case 9:return r.prev=9,r.t0=r.catch(1),r.abrupt("return",{error:r.t0.response&&r.t0.response.data||"Some error occured"});case 12:return r.prev=12,n(p),r.finish(12);case 15:case"end":return r.stop()}}),r,null,[[1,9,12,15]])})));return function(e){return r.apply(this,arguments)}}()},b=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(r){var n;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r(i),t.prev=1,t.next=4,s.a.delete("/brand/".concat(e));case 4:return n=t.sent,r({type:u.a.DELETE_BRAND,payload:n.data._id}),t.abrupt("return",{success:n.data.name});case 9:return t.prev=9,t.t0=t.catch(1),t.abrupt("return",{error:t.t0.response&&t.t0.response.data||"Some error occured"});case 12:return t.prev=12,r(p),t.finish(12);case 15:case"end":return t.stop()}}),t,null,[[1,9,12,15]])})));return function(e){return t.apply(this,arguments)}}()}},55:function(e,t,r){"use strict";r.d(t,"c",(function(){return p})),r.d(t,"d",(function(){return d})),r.d(t,"a",(function(){return l})),r.d(t,"b",(function(){return f}));var n=r(6),a=r.n(n),c=r(10),u=r(4),o=r(27),s=r(8),i=r.n(s),p=function(){return function(e){e({type:u.f.USER_LOADING})}},d=function(){return function(e){e({type:u.f.USER_LOADING_DONE})}},l=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(r){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:r({type:u.f.LOGGED_IN_USER,payload:e});case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},f=function(){return function(e){o.a.auth().signOut(),i.a.defaults.headers.common.authtoken=null,e({type:u.f.LOGOUT})}}},56:function(e,t,r){}},[[107,7,16]]]);
//# sourceMappingURL=main.40bb5b14.chunk.js.map