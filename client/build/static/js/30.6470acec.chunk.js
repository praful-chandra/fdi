(this.webpackJsonpfdi=this.webpackJsonpfdi||[]).push([[30],{173:function(e,t,n){e.exports={wrapper:"register_wrapper__vqxz4",form:"register_form__nM-1g",formButton:"register_formButton__3M6PN"}},660:function(e,t,n){"use strict";n.r(t);var r=n(7),a=n(6),c=n.n(a),s=n(10),o=n(28),i=n(2),u=n(23),l=n(49),p=n(25),b=n(173),j=n.n(b),d=n(29),f=n(677),h=n(175),m=n(684),O=n(685),g=n(30),x=n(55);t.default=Object(u.b)((function(e){return{user:e.user}}),{signInUser:x.a,userLoading:x.c,userLoadingDone:x.d})((function(e){var t=e.signInUser,n=e.userLoading,a=e.userLoadingDone,u=e.history,b=e.user,x=e.location;Object(i.useEffect)((function(){b.user&&u.push("/")}),[b]);var v=x.state,w=Object(i.useState)(""),k=Object(o.a)(w,2),y=k[0],N=k[1],L=Object(i.useState)(""),C=Object(o.a)(L,2),P=C[0],_=C[1],I=Object(i.useState)(void 0),S=Object(o.a)(I,2),D=S[0],T=S[1],E=Object(i.useState)(!1),q=Object(o.a)(E,2),R=q[0],W=q[1],z=Object(d.useToasts)().addToast,B=function(){window.recaptchaVerifier=new l.b.auth.RecaptchaVerifier("recaptcha-container",{size:"invisible",callback:function(e){console.log("Captcha Resolved")},defaultCountry:"IN"})};Object(i.useEffect)((function(){B(),B()}),[]);var V=function(){var e=Object(s.a)(c.a.mark((function e(){var t,r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n(),t=window.recaptchaVerifier,r="+91"+D,console.log(r),l.a.signInWithPhoneNumber(r,t).then((function(e){var t=prompt("Enter OTP");null!==t&&e.confirm(t).then((function(e){a(),A(null,e)})).catch((function(e){z(e.message,{appearance:"error",autoDismiss:!0}),a()}))})).catch((function(e){z(e.message,{appearance:"error",autoDismiss:!0}),a()}));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),A=function(){var e=Object(s.a)(c.a.mark((function e(r,s){var o,i,p,b;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r&&r.preventDefault(),e.prev=1,n(),s){e.next=9;break}return e.next=6,l.a.signInWithEmailAndPassword(y,P);case 6:o=e.sent,e.next=10;break;case 9:o=s;case 10:return e.next=12,o.user.getIdTokenResult();case 12:return i=e.sent,e.next=15,Object(g.a)(i.token);case 15:p=e.sent,b={token:i.token,user:p.data},t(b),Object(g.e)(p.data,u,v),e.next=25;break;case 21:e.prev=21,e.t0=e.catch(1),z(e.t0.message,{appearance:"error",autoDismiss:!0}),a();case 25:case"end":return e.stop()}}),e,null,[[1,21]])})));return function(t,n){return e.apply(this,arguments)}}();return Object(r.jsxs)("div",{className:j.a.wrapper,children:[Object(r.jsx)("div",{id:"recaptcha-container"}),Object(r.jsx)(f.a,{title:"Phone Authentication",visible:R,confirmLoading:b.userLoading,onCancel:function(){W(!1)},onOk:function(){V(),W(!1)},okText:"Get OTP",children:Object(r.jsxs)("form",{onSubmit:V,children:[Object(r.jsx)("input",{type:"tel",name:"phoneNumber",className:"form-control",autoFocus:!0,placeholder:"Enter Phone Number",required:!0,value:D,onChange:function(e){return T(e.target.value)},style:{fontSize:"3rem"}}),Object(r.jsx)("br",{})]})}),Object(r.jsx)("form",{onSubmit:A,children:Object(r.jsxs)("div",{className:j.a.form,children:[Object(r.jsx)("h1",{children:"Welcome back "}),Object(r.jsx)("input",{type:"email",name:"email",className:"form-control",autoFocus:!0,placeholder:"E-mail",required:!0,value:y,onChange:function(e){return N(e.target.value)}}),Object(r.jsx)("br",{}),Object(r.jsx)("input",{type:"password",name:"password",className:"form-control",placeholder:"Password",required:!0,value:P,onChange:function(e){return _(e.target.value)}}),Object(r.jsx)(p.b,{to:"/resetpassword",children:"forgot password?"}),Object(r.jsx)(h.a,{className:j.a.formButton,loading:b.userLoading,onClick:A,disabled:!y||!P,children:"Login"}),Object(r.jsx)("br",{}),Object(r.jsx)(h.a,{danger:!0,type:"primary",icon:Object(r.jsx)(m.a,{}),shape:"round",onClick:function(){n(),l.a.signInWithPopup(l.c).then(function(){var e=Object(s.a)(c.a.mark((function e(n){var r,a,s;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.user.getIdTokenResult();case 2:return r=e.sent,e.next=5,Object(g.a)(r.token);case 5:a=e.sent,s={token:r.token,user:a.data},t(s),Object(g.e)(a.data,u,v);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){z(e.message,{appearance:"error",autoDismiss:!0}),a()}))},children:"Login with google"}),Object(r.jsx)("br",{}),Object(r.jsx)(h.a,{type:"primary",icon:Object(r.jsx)(O.a,{}),shape:"round",onClick:function(){return W(!0)},children:"Login with phoneNumber"}),Object(r.jsx)("br",{}),Object(r.jsxs)("p",{children:["New here?"," ",Object(r.jsx)(p.b,{to:"/register",children:Object(r.jsx)("span",{children:"Signup"})})]})]})})]})}))}}]);
//# sourceMappingURL=30.6470acec.chunk.js.map