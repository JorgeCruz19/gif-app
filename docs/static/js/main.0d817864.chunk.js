(this["webpackJsonpgif-expert-app"]=this["webpackJsonpgif-expert-app"]||[]).push([[0],{14:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(6),i=a.n(c),u=(a(14),a(1)),o=a(8),l=function(e){var t=e.setCategories,a=Object(n.useState)(""),c=Object(u.a)(a,2),i=c[0],l=c[1];return r.a.createElement("form",{className:"form",onSubmit:function(e){e.preventDefault(),i.trim().length>2&&(t((function(e){return[i].concat(Object(o.a)(e))})),l(""))}},r.a.createElement("input",{className:"form-control",type:"text",placeholder:"Search Gif...",value:i,onChange:function(e){l(e.target.value)}}))},m=function(e){var t=e.title,a=e.url;return r.a.createElement("div",{className:"card"},r.a.createElement("img",{src:a,alt:t}),r.a.createElement("p",null,t))},s=a(4),f=a.n(s),p=a(7),d=function(){var e=Object(p.a)(f.a.mark((function e(t){var a,n,r,c;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"QvOWAKK2Tqq2PSpYOdWapfm0V1yOg5vT",10,e.next=4,fetch("https://api.giphy.com/v1/gifs/search?q=".concat(encodeURI(t),"&limit=").concat(10,"&api_key=").concat("QvOWAKK2Tqq2PSpYOdWapfm0V1yOg5vT"));case 4:return a=e.sent,e.next=7,a.json();case 7:return n=e.sent,r=n.data,c=r.map((function(e){var t;return{id:e.id,title:e.title,url:null===(t=e.images)||void 0===t?void 0:t.downsized_medium.url}})),e.abrupt("return",c);case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),g=function(e){var t=e.category,a=function(e){var t=Object(n.useState)({data:[],loading:!0}),a=Object(u.a)(t,2),r=a[0],c=a[1];return Object(n.useEffect)((function(){d(e).then((function(e){return c({data:e,loading:!1})}))}),[e]),r}(t),c=a.data,i=a.loading;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",{className:"gif-title animate__animated animate__bounce"},t),i&&"Cargando..",r.a.createElement("div",{className:"card-grid animate__animated animate__fadeIn"},c.map((function(e){return r.a.createElement(m,Object.assign({key:e.id},e))}))))},v=function(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),a=t[0],c=t[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"container"},r.a.createElement("h1",{className:"title"},"GifExpertApp"),r.a.createElement(l,{setCategories:c}),a.map((function(e){return r.a.createElement(g,{key:e,category:e})}))))};i.a.render(r.a.createElement(v,null),document.getElementById("root"))},9:function(e,t,a){e.exports=a(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.0d817864.chunk.js.map