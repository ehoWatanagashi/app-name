(window.webpackJsonpapp1=window.webpackJsonpapp1||[]).push([[0],{102:function(e,t,a){e.exports=a.p+"static/media/persik.4e1ec840.png"},184:function(e,t,a){e.exports=a(289)},280:function(e,t,a){},289:function(e,t,a){"use strict";a.r(t);a(185),a(211),a(213),a(214),a(216),a(217),a(218),a(219),a(220),a(221),a(222),a(223),a(225),a(226),a(227),a(228),a(229),a(230),a(231),a(232),a(233),a(234),a(236),a(237),a(238),a(239),a(240),a(241),a(242),a(243),a(244),a(245),a(246),a(247),a(248),a(249),a(250),a(251),a(252),a(253);var n=a(0),c=a.n(n),r=a(67),i=a.n(r),l=a(38),o=a.n(l),s=a(68),m=a.n(s),u=a(50),p=a(105),d=a.n(p),f=a(104),E=a.n(f),b=(a(262),a(49)),h=a.n(b),g=a(42),v=a.n(g),k=a(99),w=a.n(k),j=a(69),O=a.n(j),x=a(96),y=a.n(x),P=a(98),C=a.n(P),U=a(97),_=a.n(U),A=function(e){var t=e.id,a=e.go,n=e.fetchedUser;return c.a.createElement(h.a,{id:t},c.a.createElement(v.a,null,"Example"),n&&c.a.createElement(O.a,{title:"User Data Fetched with VK Connect"},c.a.createElement(y.a,{before:n.photo_200?c.a.createElement(_.a,{src:n.photo_200}):null,description:n.city&&n.city.title?n.city.title:""},"".concat(n.first_name," ").concat(n.last_name))),c.a.createElement(O.a,{title:"Navigation Example"},c.a.createElement(C.a,null,c.a.createElement(w.a,{size:"xl",level:"2",onClick:a,"data-to":"persik"},"Show me the Persik, please"))))},I=a(70),K=a(103),S=a.n(K),V=a(100),N=a.n(V),W=a(101),z=a.n(W),J=a(102),T=a.n(J),B=(a(280),Object(I.b)()),D=function(e){return c.a.createElement(h.a,{id:e.id},c.a.createElement(v.a,{left:c.a.createElement(S.a,{onClick:e.go,"data-to":"home"},B===I.a?c.a.createElement(N.a,null):c.a.createElement(z.a,null))},"Persik"),c.a.createElement("img",{className:"Persik",src:T.a,alt:"Persik The Cat"}))},F=function(){var e=Object(n.useState)("home"),t=Object(u.a)(e,2),a=t[0],r=t[1],i=Object(n.useState)(null),l=Object(u.a)(i,2),s=l[0],p=l[1],f=Object(n.useState)(c.a.createElement(E.a,{size:"large"})),b=Object(u.a)(f,2),h=b[0],g=b[1];Object(n.useEffect)((function(){o.a.subscribe((function(e){var t=e.detail,a=t.type,n=t.data;if("VKWebAppUpdateConfig"===a){var c=document.createAttribute("scheme");c.value=n.scheme?n.scheme:"client_light",document.body.attributes.setNamedItem(c)}})),function(){var e;m.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,m.a.awrap(o.a.sendPromise("VKWebAppGetUserInfo"));case 2:e=t.sent,p(e),g(null);case 5:case"end":return t.stop()}}))}()}),[]);var v=function(e){r(e.currentTarget.dataset.to)};return c.a.createElement(d.a,{activePanel:a,popout:h},c.a.createElement(A,{id:"home",fetchedUser:s,go:v}),c.a.createElement(D,{id:"persik",go:v}))};o.a.send("VKWebAppInit"),i.a.render(c.a.createElement(F,null),document.getElementById("root"))}},[[184,1,2]]]);
//# sourceMappingURL=main.aa7b166b.chunk.js.map