(this["webpackJsonpmercado-libre"]=this["webpackJsonpmercado-libre"]||[]).push([[0],{18:function(e){e.exports=JSON.parse('[{"country":"Argentina","code":"MLA","flag":"argentina"},{"country":"Bolivia","code":"MBO","flag":"bolivia"},{"country":"Brasil","code":"MLB","flag":"brazil"},{"country":"Colombia","code":"MCO","flag":"colombia"}]')},25:function(e,t,c){},26:function(e,t,c){},34:function(e,t,c){},35:function(e,t,c){"use strict";c.r(t);var a=c(0),n=c(17),r=c.n(n),s=c(7),i=c(2),l=(c(25),c(26),c(18)),o=c(1);var u=function(e){var t=e.value,c=t.country,a=t.code,n=t.flag;return Object(o.jsxs)(s.b,{to:"/carousel/".concat(a),children:[Object(o.jsx)("img",{src:"images/".concat(n,".png"),alt:"flag",className:"flag"})," ",c]})};var j=function(){return Object(o.jsxs)("div",{className:"app",children:[Object(o.jsx)("img",{src:"https://static.mlstatic.com/org-img/homesnw/img/ml-logo@2x.png?v=4.0",alt:"logo",className:"logoBig"}),Object(o.jsx)("ul",{className:"countryList",children:l.map((function(e,t){return Object(o.jsx)("li",{children:Object(o.jsx)(u,{value:e},t)})}))})]})},b=c(15),m=c.n(b),h=c(20),p=c(10);var d=function(e){var t=e.title,c=e.thumbnail,a=e.price,n=e.permalink;return Object(o.jsx)("div",{className:"article",children:Object(o.jsxs)("a",{className:"link",href:n,alt:t,children:[Object(o.jsx)("img",{className:"thumbnail",src:c,alt:t}),Object(o.jsxs)("div",{className:"box",children:[Object(o.jsxs)("label",{className:"precio",children:["$ ",a]}),Object(o.jsx)("h4",{className:"titulo",children:t})]})]})})};var x=function(e){var t=e.articles;return Object(o.jsx)("div",{className:"articleBox",children:t?t.map((function(e){var t=e.title,c=e.thumbnail,a=e.price,n=e.permalink,r=e.id;return Object(o.jsx)(d,{title:t,thumbnail:c,price:a,permalink:n},r)})):Object(o.jsx)("p",{className:"placeholder",children:"Busc\xe1 el producto que quieras!"})})};var O=function(e){var t=Object(a.useState)(""),c=Object(p.a)(t,2),n=c[0],r=c[1];function i(){e.callback(n),r("")}return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(s.b,{to:"/",children:Object(o.jsx)("img",{src:"https://http2.mlstatic.com/ui/navigation/4.4.4/mercadolibre/logo__large_plus@2x.png",alt:"logo",className:"logoSearch"})}),Object(o.jsx)("input",{type:"text",placeholder:"Ingrese articulo a buscar",id:"userInput",onChange:function(e){var t=e.target.value;r(t)},onKeyPress:function(e){"Enter"===e.key&&i()},value:n}),Object(o.jsx)("button",{onClick:i,className:"boton",children:"Buscar"})]})};c(34);var g=function(){var e=Object(i.e)().id,t=Object(a.useState)(!1),c=Object(p.a)(t,2),n=c[0],r=c[1],s=Object(a.useState)(!1),l=Object(p.a)(s,2),u=l[0],j=l[1];function b(){return(b=Object(h.a)(m.a.mark((function t(){var c,a,r;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c="https://api.mercadolibre.com/sites/".concat(e,"/search?q=").concat(n),t.next=3,fetch(c);case 3:return a=t.sent,t.next=6,a.json();case 6:r=t.sent,j(r.results);case 8:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return Object(a.useEffect)((function(){n&&function(){b.apply(this,arguments)}()}),[n]),Object(o.jsxs)("section",{className:"container",children:[Object(o.jsx)("div",{className:"searchBar",children:Object(o.jsx)(O,{callback:function(e){r(e)}})}),Object(o.jsx)("container",{className:"productBox",children:Object(o.jsx)(x,{articles:u})})]})};var f=function(){return Object(o.jsx)(g,{})},v=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,36)).then((function(t){var c=t.getCLS,a=t.getFID,n=t.getFCP,r=t.getLCP,s=t.getTTFB;c(e),a(e),n(e),r(e),s(e)}))};r.a.render(Object(o.jsxs)(s.a,{children:[Object(o.jsx)(i.a,{exact:!0,path:"/",component:j}),Object(o.jsx)(i.a,{exact:!0,path:"/carousel/:id",component:f})]}),document.getElementById("root")),v()}},[[35,1,2]]]);
//# sourceMappingURL=main.d56c2e74.chunk.js.map