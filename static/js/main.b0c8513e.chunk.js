(this["webpackJsonpreact-plotly-covid-cases-example"]=this["webpackJsonpreact-plotly-covid-cases-example"]||[]).push([[0],{1411:function(t,e,n){"use strict";n.r(e);var c=n(118),a=n(88),o=n.n(a),i=n(575),s=n.n(i),u=(n(589),n(581)),r=n(576),l=n.n(r),d=n(577),p=n.n(d),f=n(580),h=n.n(f)()(p.a);var j=function(){var t=Object(a.useState)([]),e=Object(u.a)(t,2),n=e[0],o=e[1];return Object(a.useEffect)((function(){l.a.get("https://api.covid19api.com/dayone/country/italy/status/confirmed").then((function(t){o(t.data)})).catch((function(t){return console.log("API get failed \u2014 ".concat(t))}))}),[]),Object(c.jsx)("div",{className:"App",children:Object(c.jsx)(h,{data:[{type:"line",x:n.map((function(t){return t.Date})),y:n.map((function(t){return t.Cases}))}],layout:{width:1200,height:600,title:"Italy - Covid-19 Total Cases"}})})},b=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,1417)).then((function(e){var n=e.getCLS,c=e.getFID,a=e.getFCP,o=e.getLCP,i=e.getTTFB;n(t),c(t),a(t),o(t),i(t)}))};s.a.render(Object(c.jsx)(o.a.StrictMode,{children:Object(c.jsx)(j,{})}),document.getElementById("root")),b()},589:function(t,e,n){},909:function(t,e){}},[[1411,1,2]]]);
//# sourceMappingURL=main.b0c8513e.chunk.js.map