(this.webpackJsonpfdi=this.webpackJsonpfdi||[]).push([[24],{155:function(e,r,t){"use strict";var n=t(7),c=(t(2),t(318));r.a=function(e){return Object(n.jsx)(c.a,{thousandSeparator:!0,displayType:"text",thousandsGroupStyle:"lakh",prefix:"\u20b9",value:e})}},186:function(e,r,t){"use strict";t.d(r,"c",(function(){return i})),t.d(r,"a",(function(){return o})),t.d(r,"b",(function(){return d})),t.d(r,"d",(function(){return p}));var n=t(6),c=t.n(n),a=t(10),s=t(8),u=t.n(s),i=function(){var e=Object(a.a)(c.a.mark((function e(r,t){var n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.a.get("/dow",{params:{limit:r,skip:t}});case 3:return n=e.sent,e.abrupt("return",n.data);case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",{error:"Error occured while fetching data"});case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(r,t){return e.apply(this,arguments)}}(),o=function(){var e=Object(a.a)(c.a.mark((function e(r){var t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.a.post("/dow",r);case 3:return t=e.sent,e.abrupt("return",t.data);case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",{error:"Error occured while fetching data"});case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(r){return e.apply(this,arguments)}}(),d=function(){var e=Object(a.a)(c.a.mark((function e(r){var t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.a.get("/dow/".concat(r));case 3:return t=e.sent,e.abrupt("return",t.data);case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",{error:"Error occured while fetching data"});case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(r){return e.apply(this,arguments)}}(),p=function(){var e=Object(a.a)(c.a.mark((function e(r){var t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.a.delete("/dow/".concat(r));case 3:return t=e.sent,e.abrupt("return",t.data);case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",{error:"Error occured while fetching data"});case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(r){return e.apply(this,arguments)}}()},190:function(e,r,t){"use strict";t.d(r,"a",(function(){return i})),t.d(r,"i",(function(){return o})),t.d(r,"g",(function(){return d})),t.d(r,"e",(function(){return p})),t.d(r,"c",(function(){return l})),t.d(r,"d",(function(){return b})),t.d(r,"f",(function(){return f})),t.d(r,"b",(function(){return j})),t.d(r,"h",(function(){return h}));var n=t(6),c=t.n(n),a=t(10),s=t(8),u=t.n(s),i=function(){var e=Object(a.a)(c.a.mark((function e(r){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.a.post("/product",r,{headers:{"content-type":"multipart/form-data"}});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),o=function(){var e=Object(a.a)(c.a.mark((function e(r,t){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.a.patch("/product/".concat(r),t,{headers:{"content-type":"multipart/form-data"}});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(r,t){return e.apply(this,arguments)}}(),d=function(){var e=Object(a.a)(c.a.mark((function e(r,t,n){var a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.a.get("/product",{params:{limit:r,skip:t,search:n}});case 3:return a=e.sent,e.abrupt("return",{success:a.data});case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",{error:"Some error occured"});case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(r,t,n){return e.apply(this,arguments)}}(),p=function(){var e=Object(a.a)(c.a.mark((function e(r,t){var n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(!0),e.prev=1,e.next=4,u.a.get("/product/".concat(r));case 4:return n=e.sent,e.abrupt("return",{success:n.data});case 8:return e.prev=8,e.t0=e.catch(1),e.abrupt("return",{error:"Some error occured"});case 11:return e.prev=11,t(!1),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[1,8,11,14]])})));return function(r,t){return e.apply(this,arguments)}}(),l=function(){var e=Object(a.a)(c.a.mark((function e(r){var t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.a.delete("/product/".concat(r));case 3:if(!(t=e.sent).data.success){e.next=6;break}return e.abrupt("return",{success:t.data.success});case 6:e.next=11;break;case 8:return e.prev=8,e.t0=e.catch(0),e.abrupt("return",{error:"Some error occured"});case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(r){return e.apply(this,arguments)}}(),b=function(){var e=Object(a.a)(c.a.mark((function e(r){var t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.a.get("/product/fromcolor/".concat(r));case 3:if((t=e.sent).error){e.next=10;break}if(!t.data.redirect){e.next=9;break}window.location.href="".concat(t.data.redirect),e.next=10;break;case 9:return e.abrupt("return",t.data);case 10:e.next=15;break;case 12:return e.prev=12,e.t0=e.catch(0),e.abrupt("return",{error:"Some error occured"});case 15:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(r){return e.apply(this,arguments)}}(),f=function(){var e=Object(a.a)(c.a.mark((function e(r){var t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.a.get("/product/related/".concat(r));case 3:if((t=e.sent).error){e.next=6;break}return e.abrupt("return",t.data);case 6:e.next=11;break;case 8:return e.prev=8,e.t0=e.catch(0),e.abrupt("return",{error:"Some error occured"});case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(r){return e.apply(this,arguments)}}(),j=function(){var e=Object(a.a)(c.a.mark((function e(r,t){var n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.a.post("/product/review/".concat(r),t);case 3:if((n=e.sent).error){e.next=6;break}return e.abrupt("return",n.data);case 6:e.next=11;break;case 8:return e.prev=8,e.t0=e.catch(0),e.abrupt("return",{error:"Some error occured"});case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(r,t){return e.apply(this,arguments)}}(),h=function(){var e=Object(a.a)(c.a.mark((function e(r,t,n,a,s){var i;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.a.get("/product/withVariance",{params:{limit:r,skip:t,search:n,sort:a}});case 3:return i=e.sent,e.abrupt("return",{success:i.data});case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",{error:"Some error occured"});case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(r,t,n,c,a){return e.apply(this,arguments)}}()},222:function(e,r,t){"use strict";t.d(r,"b",(function(){return o})),t.d(r,"a",(function(){return d}));var n=t(6),c=t.n(n),a=t(10),s=t(8),u=t.n(s),i=t(4),o=function(e){return function(){var r=Object(a.a)(c.a.mark((function r(t){var n;return c.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,u.a.post("/user/wishlist/".concat(e));case 3:if(!r.sent.success){r.next=8;break}return r.abrupt("return",{success:!0});case 8:return r.abrupt("return",{error:!0});case 9:r.next=14;break;case 11:return r.prev=11,r.t0=r.catch(0),r.abrupt("return",{error:"Internal server error"});case 14:return r.prev=14,r.next=17,u.a.get("/user/wishlist/list");case 17:return(n=r.sent).data&&t({type:i.g.LIST_WISHLIST,payload:n.data}),r.finish(14);case 20:case"end":return r.stop()}}),r,null,[[0,11,14,20]])})));return function(e){return r.apply(this,arguments)}}()},d=function(){return function(){var e=Object(a.a)(c.a.mark((function e(r){var t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.a.get("/user/wishlist/list");case 3:(t=e.sent).data&&r({type:i.g.LIST_WISHLIST,payload:t.data}),e.next=10;break;case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",{error:"Internal server error"});case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(r){return e.apply(this,arguments)}}()}},249:function(e,r,t){"use strict";r.a=t.p+"static/media/deal_of_the_week.d8be2ba7.svg"},251:function(e,r,t){"use strict";t.d(r,"b",(function(){return i})),t.d(r,"c",(function(){return o})),t.d(r,"a",(function(){return d}));var n=t(6),c=t.n(n),a=t(10),s=t(8),u=t.n(s),i=function(){var e=Object(a.a)(c.a.mark((function e(r){var t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.a.get("/bestseller/".concat(r));case 3:return t=e.sent,e.abrupt("return",t.data);case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",{error:"Some error had occured"});case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(r){return e.apply(this,arguments)}}(),o=function(){var e=Object(a.a)(c.a.mark((function e(r,t){var n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.a.get("/bestseller",{params:{limit:r,skip:t}});case 3:return n=e.sent,e.abrupt("return",n.data);case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",{error:"Some error had occured"});case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(r,t){return e.apply(this,arguments)}}(),d=function(){var e=Object(a.a)(c.a.mark((function e(r){var t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.a.post("/bestseller/".concat(r));case 3:return t=e.sent,e.abrupt("return",t.data);case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",{error:"Some error had occured"});case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(r){return e.apply(this,arguments)}}()},309:function(e,r,t){"use strict";r.a=t.p+"static/media/best_seller.6b7164e0.svg"},377:function(e,r,t){e.exports={card:"smallProductCard_customer_card___cX00",cardBadge:"smallProductCard_customer_cardBadge__KNZ-Y",cardContents:"smallProductCard_customer_cardContents__2Mt0o",cardContentsImages:"smallProductCard_customer_cardContentsImages__2KTpL",cardContentsBottom:"smallProductCard_customer_cardContentsBottom__ZF78m",addCart:"smallProductCard_customer_addCart__1VKgC",cardContentsWishList:"smallProductCard_customer_cardContentsWishList__268fX",mobileWishlist:"smallProductCard_customer_mobileWishlist__2T0eI"}},432:function(e,r,t){"use strict";var n=t(7),c=t(2),a=t(23),s=t(168),u=t(25),i=t(165),o=t(250),d=t(155),p=t(186),l=t(377),b=t.n(l),f=t(249),j=t(309),h=t(222);r.a=Object(a.b)(null,{toggleWishlist:h.b})((function(e){var r=e.item,t=e.deal,l=e.best,h=e.toggleWishlist,v=Object(a.d)((function(e){return e})).wishList;return Object(c.useEffect)((function(){t||Object(p.b)(r.product._id).then((function(e){e&&(r.discountPrice=e.discountPrice)}))})),Object(n.jsx)(n.Fragment,{children:Object(n.jsxs)("div",{className:b.a.card,title:"".concat(r.product.product.name," (").concat(r.product.product.model,") (").concat(r.product.variance.title,") - ").concat(r.product.name),children:[t&&Object(n.jsx)("div",{className:b.a.cardBadge,children:Object(n.jsx)("img",{src:f.a,alt:""})}),l&&Object(n.jsx)("div",{className:b.a.cardBadge,children:Object(n.jsx)("img",{src:j.a,alt:""})}),Object(n.jsxs)("div",{className:b.a.cardContents,children:[Object(n.jsxs)("h3",{children:["".concat(r.product.product.name," (").concat(r.product.product.model,") (").concat(r.product.variance.title,") - ").concat(r.product.name)," "]}),Object(n.jsx)(u.b,{to:"/product/".concat(r.product.slug),children:Object(n.jsx)("div",{className:b.a.cardContentsImages,children:Object(n.jsx)("img",{src:"".concat("").concat(r.product.product.images[0].thumb),alt:"tv1"})})}),Object(n.jsxs)("div",{className:b.a.cardContentsBottom,children:[r.discountPrice?Object(n.jsxs)("div",{children:[Object(n.jsx)("span",{children:Object(d.a)(r.discountPrice)}),Object(n.jsx)("span",{children:Object(d.a)(r.product.price)})]}):Object(n.jsxs)("div",{children:[Object(n.jsx)("span",{children:Object(d.a)(r.product.price)}),Object(n.jsx)("span",{})]}),Object(n.jsx)("div",{children:Object(n.jsx)("div",{className:b.a.addCart,style:{color:v.find((function(e){return e.product.toString()===r.product._id.toString()}))?"red":"#000"},onClick:function(){return h(r.product._id)},children:Object(n.jsx)(s.a,{icon:v.find((function(e){return e.product.toString()===r.product._id.toString()}))?i.f:o.a})})})]})]})]})})}))},486:function(e,r,t){"use strict";t.d(r,"a",(function(){return i})),t.d(r,"c",(function(){return o})),t.d(r,"b",(function(){return d}));var n=t(6),c=t.n(n),a=t(10),s=t(8),u=t.n(s),i=function(){var e=Object(a.a)(c.a.mark((function e(r){var t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.a.post("/homepage/banner",r);case 3:return t=e.sent,e.abrupt("return",t.data);case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",{error:"Internal server error"});case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(r){return e.apply(this,arguments)}}(),o=function(){var e=Object(a.a)(c.a.mark((function e(){var r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.a.get("/homepage/banner");case 3:return r=e.sent,e.abrupt("return",r.data);case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",{error:"Internal server error"});case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),d=function(){var e=Object(a.a)(c.a.mark((function e(r){var t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.a.delete("/homepage/banner/".concat(r));case 3:return t=e.sent,e.abrupt("return",t.data);case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",{error:"Internal server error"});case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(r){return e.apply(this,arguments)}}()},505:function(e,r,t){"use strict";t.d(r,"a",(function(){return s}));var n=t(7),c=(t(2),t(506)),a=t.n(c);function s(e){var r=e.banner;return Object(n.jsx)("div",{className:a.a.bannerMain,style:{backgroundImage:'url("'.concat("").concat(r.backgroundImage,'")')},children:Object(n.jsxs)("div",{className:"".concat(a.a.content," , center"),children:[Object(n.jsxs)("div",{children:[Object(n.jsx)("h1",{children:r.title}),Object(n.jsx)("h4",{children:r.description})]}),Object(n.jsx)("div",{children:Object(n.jsx)("img",{src:"".concat("").concat(r.foregroundImage),alt:"banner"})})]})})}},506:function(e,r,t){e.exports={bannerMain:"bannerMain_bannerMain__1eNRD",content:"bannerMain_content__1WiUJ"}},507:function(e,r,t){e.exports={sliderCarousel:"recommended_sliderCarousel__1ufFY",wrapper:"recommended_wrapper__1LqmY",head:"recommended_head__OTEf0",itemsWrapper:"recommended_itemsWrapper__1YxuL",button:"recommended_button__1Qifs",buttonLeft:"recommended_buttonLeft__1-AYy"}},593:function(e,r,t){"use strict";t.d(r,"a",(function(){return f}));var n=t(7),c=(t(2),t(507)),a=t.n(c),s=t(487),u=t.n(s),i=(t(488),t(168),t(155)),o=t(377),d=t.n(o),p=t(249),l=t(309);function b(e){var r=e.item,t=e.deal,c=e.best;return Object(n.jsx)(n.Fragment,{children:Object(n.jsxs)("div",{className:d.a.card,title:r.name,children:[t&&Object(n.jsx)("div",{className:d.a.cardBadge,children:Object(n.jsx)("img",{src:p.a,alt:""})}),c&&Object(n.jsx)("div",{className:d.a.cardBadge,children:Object(n.jsx)("img",{src:l.a,alt:""})}),Object(n.jsxs)("div",{className:d.a.cardContents,children:[Object(n.jsxs)("h3",{children:[r.name," "]}),Object(n.jsx)("a",{href:"/product/".concat(r.slug),children:Object(n.jsx)("div",{className:d.a.cardContentsImages,children:Object(n.jsx)("img",{src:"".concat("").concat(r.images[0].thumb),alt:"tv1"})})}),Object(n.jsxs)("div",{className:d.a.cardContentsBottom,children:[Object(n.jsxs)("div",{children:[Object(n.jsx)("span",{children:r.minPrice===r.maxPrice?Object(i.a)(r.minPrice):Object(n.jsxs)("span",{children:[" ",Object(i.a)(r.minPrice)," - ",Object(i.a)(r.maxPrice)]})}),Object(n.jsx)("span",{})]}),Object(n.jsx)("div",{})]})]})]})})}function f(e){var r=e.items,t=e.title,c=e.bestBadge,s=e.invert;return Object(n.jsx)("div",{className:s?a.a.wrapper:"",children:Object(n.jsxs)("div",{className:"center",children:[Object(n.jsx)("div",{className:a.a.head,children:Object(n.jsx)("div",{children:Object(n.jsx)("h5",{children:t})})}),r.length>0&&Object(n.jsx)("div",{className:a.a.sliderCarousel,children:Object(n.jsx)(u.a,{arrows:!0,slidesPerPage:4,slidesPerScroll:2,animationSpeed:1500,offset:50,infinite:!0,breakpoints:{590:{slidesPerPage:2,arrows:!1}},children:function(){var e=[];return r.map((function(r){e.push(Object(n.jsx)(b,{item:r,best:c||!1}))})),e}()})})]})})}},602:function(e,r,t){e.exports={wrapper:"bannerSmall_wrapper__cHQXw",card:"bannerSmall_card__10BQ8",cardTexts:"bannerSmall_cardTexts__2Mgcd"}},635:function(e,r,t){e.exports={wrapper:"carousel_wrapper__Jh5TC",slide:"carousel_slide__6caDc"}},636:function(e,r,t){e.exports={card:"infoCard_card__2kt8I"}},637:function(e,r,t){e.exports={wrapper:"offerSlider_wrapper__R9sq2",sliderCarousel:"offerSlider_sliderCarousel__25POy",head:"offerSlider_head__ks8-B",button:"offerSlider_button__17-NB",buttonLeft:"offerSlider_buttonLeft__1DL44"}},678:function(e,r,t){"use strict";t.r(r),t.d(r,"default",(function(){return B}));var n=t(7),c=t(28),a=t(2),s=t(23),u=t(629),i=(t(634),t(635)),o=t.n(i),d=t(505),p=t(486);var l=function(){var e=Object(a.useState)([]),r=Object(c.a)(e,2),t=r[0],s=r[1];return Object(a.useEffect)((function(){Object(p.c)().then((function(e){e&&!e.error&&s(e)}))}),[]),Object(n.jsx)("div",{className:o.a.wrapper,children:Object(n.jsx)(u.Carousel,{infiniteLoop:!0,showStatus:!1,children:t.map((function(e){return Object(n.jsx)(d.a,{banner:e},"homepage carousel banner ".concat(e._id))}))})})},b=t(636),f=t.n(b),j=t(168),h=t(165);function v(){return Object(n.jsx)("div",{className:"center",children:Object(n.jsx)("div",{className:f.a.card,children:Object(n.jsxs)("ul",{children:[Object(n.jsxs)("li",{children:[Object(n.jsx)(j.a,{icon:h.l}),Object(n.jsxs)("p",{children:[Object(n.jsx)("span",{children:"Express"}),"Delivery"]})]}),Object(n.jsxs)("li",{children:[Object(n.jsx)(j.a,{icon:h.t}),Object(n.jsxs)("p",{children:[Object(n.jsx)("span",{children:"Positive"}),"Feedback"]})]}),Object(n.jsxs)("li",{children:[Object(n.jsx)(j.a,{icon:h.q}),Object(n.jsxs)("p",{children:[Object(n.jsx)("span",{children:"All days"}),"Support"]})]}),Object(n.jsxs)("li",{children:[Object(n.jsx)(j.a,{icon:h.h}),Object(n.jsxs)("p",{children:[Object(n.jsx)("span",{children:"Secure"}),"Payments"]})]}),Object(n.jsxs)("li",{children:[Object(n.jsx)(j.a,{icon:h.s}),Object(n.jsxs)("p",{children:[Object(n.jsx)("span",{children:"Best"}),"Offers"]})]})]})})})}var m=t(3),x=t(25),O=t(637),_=t.n(O),w=t(432),g=t(487),k=t.n(g);t(488);function y(e){var r=e.invert,t=e.items,c=e.deal,a=e.best,s=e.title,u=e.link;return Object(n.jsx)("div",{style:r?Object(m.a)({},{backgroundColor:"#F8F8F8",padding:"5rem 0",margin:"5rem 0"}):{},children:Object(n.jsx)("div",{className:"center",children:Object(n.jsxs)("div",{className:_.a.wrapper,children:[Object(n.jsx)("div",{className:_.a.head,children:Object(n.jsxs)("div",{children:[Object(n.jsx)("h5",{children:s}),Object(n.jsx)(x.b,{to:u,children:Object(n.jsx)("button",{children:"View All"})})]})}),Object(n.jsx)("div",{className:_.a.sliderCarousel,children:Object(n.jsx)(k.a,{arrows:!0,slidesPerPage:4,slidesPerScroll:2,animationSpeed:1500,offset:50,infinite:!0,breakpoints:{590:{slidesPerPage:2,arrows:!1}},children:function(){var e=[];return t.map((function(r){e.push(Object(n.jsx)(w.a,{item:r,deal:c,best:a}))})),e}()})})]})})})}t(602);var S=t(593),C=t(190);var P=function(e){var r=e.category,t=e.invert,s=Object(a.useState)([]),u=Object(c.a)(s,2),i=u[0],o=u[1];return Object(a.useEffect)((function(){Object(C.g)(6,0,{category:r._id}).then((function(e){e.success&&o(e.success.products)}))}),[]),Object(n.jsx)(S.a,{invert:t,items:i,title:r.name})},N=t(186),I=t(251);function B(){var e=Object(a.useState)([]),r=Object(c.a)(e,2),t=r[0],u=r[1],i=Object(a.useState)([]),o=Object(c.a)(i,2),d=o[0],p=o[1],b=Object(s.d)((function(e){return e})).category.categories;return Object(a.useEffect)((function(){Object(N.c)(10).then((function(e){e&&u(e.deals)})),Object(I.c)(10).then((function(e){e&&p(e.bests)}))}),[]),Object(n.jsxs)("div",{children:[Object(n.jsx)(l,{}),Object(n.jsx)(v,{}),Object(n.jsx)(y,{items:t,deal:!0,title:"deal of the week",link:"/deal"}),Object(n.jsx)(y,{invert:!0,items:d,best:!0,title:"Best Sellers",link:"/best"}),b.map((function(e,r){return Object(n.jsx)(P,{invert:(r+1)%2===0,category:e})}))]})}}}]);
//# sourceMappingURL=24.d7c7d506.chunk.js.map