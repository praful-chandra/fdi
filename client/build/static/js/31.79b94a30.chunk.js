(this.webpackJsonpfdi=this.webpackJsonpfdi||[]).push([[31],{173:function(e,t,n){e.exports={wrapper:"register_wrapper__vqxz4",form:"register_form__nM-1g",formButton:"register_formButton__3M6PN"}},661:function(e,t,n){"use strict";n.r(t);var r=n(7),a=n(6),s=n.n(a),c=n(10),i=n(28),o=n(2),u=n(23),l=n(25),p=n(49),f=n(29),d=n(173),j=n.n(d);t.default=function(e){var t=e.history,n=Object(o.useState)(""),a=Object(i.a)(n,2),d=a[0],m=a[1],b=Object(f.useToasts)().addToast,h=Object(u.d)((function(e){return e})).user;Object(o.useEffect)((function(){h.token&&t.push("/")}),[h]);var g=function(){var e=Object(c.a)(s.a.mark((function e(t){var n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n={url:"http://143.110.179.155/register/complete",handleCodeInApp:!0},e.next=4,p.a.sendSignInLinkToEmail(d,n);case 4:b("Email is sent to ".concat(d,". click link to complete registration"),{appearance:"success",autoDismiss:!0}),window.localStorage.setItem("emailForRegistration",d),m("");case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(r.jsx)("div",{className:j.a.wrapper,children:Object(r.jsx)("form",{onSubmit:g,children:Object(r.jsxs)("div",{className:j.a.form,children:[Object(r.jsx)("h1",{children:"Register"}),Object(r.jsx)("input",{type:"email",className:"form-control",autoFocus:!0,placeholder:"E-mail",required:!0,value:d,onChange:function(e){m(e.target.value)}}),Object(r.jsx)("button",{className:j.a.formButton,type:"submit",children:"Sign up"}),Object(r.jsxs)("p",{children:["Already have an account? ",Object(r.jsx)(l.b,{to:"/login",children:Object(r.jsx)("span",{children:"Login"})})]})]})})})}}}]);
//# sourceMappingURL=31.79b94a30.chunk.js.map