(window["webpackJsonpoucc-react"]=window["webpackJsonpoucc-react"]||[]).push([[0],{124:function(e){e.exports=JSON.parse('{"news":[["/curr_news","Current News",false,true],["/old_news","News Archive",false,true]],"leagues":[["/boxleague","Club League",true,false],["/leagues","Teams",false,true],["/termcard","Termcard",true,true],["/1stTeam","1st Team",false,true],["/2ndTeam","2nd Team",false,true],["/3rdTeam","3rd Team",false,true],["/classes","Classes",false,true]],"members":[["/membership","Membership",false,true],["/committee","Current Committee",false,true],["/historical_committee","Past Officers",false,true]],"contact":[["/contact","Contact Us",false,true],["/maillists","Join our Mailing Lists",false,true]],"sponsors":[],"tournament":[["/tournament","Tournament",false,true],["/other_events","Alumni day",false,true]]}')},206:function(e,t,n){e.exports=n(504)},211:function(e,t,n){},213:function(e,t,n){},32:function(e,t,n){e.exports={header:"header_header__2JDtH",inner_header:"header_inner_header__jZnVe",links:"header_links__1j1cp",oucc_logo:"header_oucc_logo__ntMUg",nav:"header_nav__5Zo-d",banner:"header_banner__2Li7q",subnav_container:"header_subnav_container__1Yzjp",subnav:"header_subnav__1RCVf",selected:"header_selected__2OTKR",empty:"header_empty__2rwYt"}},337:function(e,t){},504:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(6),s=n.n(c),i=(n(211),n(37)),o=n(4),u=n.n(o),l=n(14),m=n(8),p=n(13),h=n(10),d=n(9),f=n(11),b=(n(213),n(24)),v=n(30),E=n(44),g=n.n(E),w=n(28),O=n(43),y=n.n(O),j=n(32),k=n.n(j),_=n(124),x={news:"News",members:"Membership",leagues:"Play",varsity:"Varsity",contact:"Contact",sponsors:"Sponsors",tournament:"150 Years"},C=function(e){function t(e){var n;return Object(m.a)(this,t),(n=Object(h.a)(this,Object(d.a)(t).call(this,e))).state={subnav:[]},n}return Object(f.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){var e=this;Object.entries(_).forEach((function(t){var n=Object(i.a)(t,2),a=n[0],r=n[1];window.location.pathname.slice(1).includes(a)&&e.setState({subnav:r})}))}},{key:"render",value:function(){return r.a.createElement("div",{className:k.a.header},r.a.createElement("div",{className:k.a.inner_header},r.a.createElement("div",{className:k.a.banner},r.a.createElement(b.b,{className:k.a.oucc_logo,to:"/",style:{backgroundImage:"url(".concat("/~chess","/images/oucclogo.jpg")}}),r.a.createElement("ul",{className:k.a.nav},Object.entries(x).map((function(e){var t=Object(i.a)(e,2),n=t[0],a=t[1];return r.a.createElement("li",{key:n},r.a.createElement(b.b,{to:"/"+n},a))}))))),r.a.createElement("div",{className:k.a.subnav_container},r.a.createElement("ul",{className:k.a.subnav},(_[this.props.parent]||this.state.subnav).map((function(e){var t=Object(i.a)(e,4),n=t[0],a=t[1];t[2];return t[3]?r.a.createElement("li",{key:n.slice(1)},r.a.createElement(b.b,{to:n},a)):null})))))}}]),t}(r.a.Component);var N=function(e){function t(){return Object(m.a)(this,t),Object(h.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{id:"sidebar"},r.a.createElement("div",{id:"facebook_pane"},r.a.createElement("a",{href:"https://www.facebook.com/groups/oxford.chess.club/"},r.a.createElement("img",{alt:"Find us on facebook button",id:"fb_logo",src:"/~chess/images/fblogo.png"}))),r.a.createElement("div",{id:"next_event"},r.a.createElement("ul",null,r.a.createElement("h1",null,"Upcoming Events:"),r.a.createElement("li",null,"Town vs Gown (May 19th)"),r.a.createElement("li",null,"OUCC celebrates 150th anniversary"))),r.a.createElement("div",{id:"news_hlines"},r.a.createElement("h1",null,"Recent News:"),r.a.createElement("ul",null,r.a.createElement("li",null,"Oxford win Varsity!"),r.a.createElement("li",null,"OUCC 1 win ODCL Div 1")),r.a.createElement(b.b,{to:"/curr_news"},"View current news")),r.a.createElement("div",{id:"puzzle_pane"},r.a.createElement("iframe",{id:"puzzle",width:"256",scrolling:"no",height:"293",frameBorder:"0",title:"puzzle",src:"https://www.shredderchess.com/online/playshredder/gdailytactics.php?mylang=en&mysize=26"})))}}]),t}(r.a.Component),T=n(76),U=n.n(T),D=n(56),S=n.n(D),M=n(191),R=n.n(M),L=n(16),z=n.n(L);z.a.defaults.baseURL="https://oxfordunichess.github.io/oucc-backend/";var P=function(e){function t(e){var n;return Object(m.a)(this,t),(n=Object(h.a)(this,Object(d.a)(t).call(this,e))).state={table:null},n}return Object(f.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){var e=Object(l.a)(u.a.mark((function e(){var n,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this.props.src){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,t.getData("data/"+this.props.src);case 4:return n=e.sent,this.props.src.endsWith(".csv")&&(n=R.a.parse(n,{header:!0,dynamicTyping:!0}).data),e.next=8,t.generateTablefromJSON(n);case 8:a=e.sent,this.setState({table:a});case 10:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return this.state.table}}],[{key:"getData",value:function(){var e=Object(l.a)(u.a.mark((function e(t){var n,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,z()(t);case 3:return n=e.sent,a=n.data,e.abrupt("return",a);case 8:return e.prev=8,e.t0=e.catch(0),e.t0&&console.error(e.t0),e.abrupt("return",[{}]);case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}()},{key:"generateTablefromJSON",value:function(){var e=Object(l.a)(u.a.mark((function e(t){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=Object.keys(t[0]),e.abrupt("return",r.a.createElement("table",null,r.a.createElement("thead",null,n.map((function(e){return r.a.createElement("th",{key:e,scope:"column"},I(e))}))),r.a.createElement("tbody",null,t.map((function(e){var t=Object.values(e)[0]?Object.values(e)[0].toLowerCase().replace(/\s+/g,"-"):null;return r.a.createElement("tr",{key:t,id:t},n.map((function(t){return r.a.createElement("td",null,t in e?e[t]:null)})))})))));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}]),t}(r.a.Component);function I(e){if("string"!==typeof e)throw new TypeError;return e.slice(0,1).toUpperCase()+e.slice(1).toLowerCase()}z.a.defaults.baseURL="https://oxfordunichess.github.io/oucc-backend/";var W=new S.a.ProcessNodeDefinitions(r.a),H=U()({isValidNode:function(e){return"script"!==e.type},processingInstructions:[{shouldProcessNode:function(e){return e.name&&"data-table"===e.name},processNode:function(e,t){return r.a.createElement(P,e.attribs)}},{shouldProcessNode:function(e){return!0},processNode:W.processDefaultNode}]}),F=function(e){function t(e){var n;return Object(m.a)(this,t),(n=Object(h.a)(this,Object(d.a)(t).call(this,e))).state={page:""},n}return Object(f.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){var e=Object(l.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.constructor.getPage(this.props.page);case 2:t=e.sent,this.setState({page:t});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(w.Helmet,null,r.a.createElement("title",null,this.props.title?this.props.title+" | OUCC":"OUCC")),r.a.createElement(C,{parent:this.props.parent}),r.a.createElement("div",{id:"page"},r.a.createElement(N,null),r.a.createElement("div",{id:"main"},this.state.page?r.a.createElement(g.a,{source:this.state.page.trim(),escapeHtml:!1,astPlugins:[H],transformLinkUri:function(e){return((e=g.a.uriTransformer(e)).startsWith("/")||e.startsWith("./"))&&(e=y.a.join("/~chess",e)),e}}):null)))}}],[{key:"isDev",value:function(){return!1}},{key:"getPage",value:function(){var e=Object(l.a)(u.a.mark((function e(){var n,a,r,c=arguments;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=c.length>0&&void 0!==c[0]?c[0]:"main",e.prev=1,a="pages/".concat(n+".md").concat(t.isDev()?"?token="+Math.random().toString(36).slice(2):""),e.next=5,z()(a);case 5:return r=e.sent,e.abrupt("return",r.data);case 9:return e.prev=9,e.t0=e.catch(1),console.error(e.t0),e.abrupt("return",null);case 13:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(){return e.apply(this,arguments)}}()}]),t}(r.a.Component),J=n(205),V=n(77),A=n.n(V),B=new S.a.ProcessNodeDefinitions(r.a),Y=U()({isValidNode:function(e){return"script"!==e.type},processingInstructions:[{shouldProcessNode:function(e){return!!e.name&&"data-table"===e.name},processNode:function(e,t){switch(e.name){case"data-table":return r.a.createElement(P,e.attribs);default:return null}}},{shouldProcessNode:function(e){return!0},processNode:B.processDefaultNode}]}),G={date:/^[0-9]{4}-[0-9]{1,2}-[0-9]{1,2}_/,letters:/\w+/g,image:/<img\s+.*?src=["'](.*).*?">/},Z=function(e){function t(e){var n;return Object(m.a)(this,t),(n=Object(h.a)(this,Object(d.a)(t).call(this,e))).state={articles:[]},n}return Object(f.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){var e=Object(l.a)(u.a.mark((function e(){var n,a,r,c,s,i,o=this;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getIndex();case 2:n=e.sent,a=n.data,r=a.map((function(e){return e.name})),c=r.filter((function(e){return e.endsWith(".md")&&G.date.test(e)})),s=c.sort((function(e,t){var n=new Date(e.split("_")[0]),a=new Date(t.split("_")[0]);return n.getTime()!==n.getTime()?1:a.getTime()!==a.getTime()?-1:a-n})),i=new Array(s.length),this.setState({articles:i}),s.map((function(e,n){return t.getArticle(e).then((function(e){return i[n]=e})).then((function(){return o.setState({articles:i})})).catch(console.error)}));case 10:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=new Map,n=this.state.articles.map((function(n){if(!n)return console.error("Bad Markdown document:\n"+n),null;for(var a=n.split("\n"),c=a.shift().trim();c.startsWith("#");)c=c.slice(1);var s=(c=c.trim()).match(G.letters).join("-").toLowerCase(),i=["## [".concat(c,"](").concat(t.setSection(window.location,s),")")].concat(Object(J.a)(a)).join("\n");return e.set(s,{title:c+" | OUCC",image:(i.match(G.image)||[])[1],description:a.find((function(e){return e.trim()&&!e.trim().startsWith("#")}))}),r.a.createElement("div",{id:s,key:s,className:A.a.article},r.a.createElement(g.a,{source:i,escapeHtml:!1,astPlugins:[Y],transformLinkUri:function(e){return((e=g.a.uriTransformer(e)).startsWith("/")||e.startsWith("./"))&&(e=y.a.join("/~chess",e)),e}}),r.a.createElement("hr",null))})),a={};return window.location.hash&&e.get(window.location.hash.slice(1))&&(a=e.get(window.location.hash.slice(1))),r.a.createElement(r.a.Fragment,null,r.a.createElement(w.Helmet,{defaultTitle:this.props.title?this.props.title+" | OUCC":"OUCC"},r.a.createElement("title",null,a.title),r.a.createElement("meta",{property:"og:type",content:"article"}),a.description?r.a.createElement("meta",{name:"description",content:a.description}):null,a.image?r.a.createElement("meta",{property:"og:image",content:a.image}):null),r.a.createElement(C,{parent:this.props.parent}),r.a.createElement("div",{className:A.a.page},r.a.createElement(N,null),r.a.createElement("div",{className:A.a.main},n)))}}],[{key:"getIndex",value:function(){var e=Object(l.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,z()({url:"https://api.github.com/repos/oxfordunichess/oucc-backend/contents/news/",method:"get",maxRedirects:5});case 3:return e.abrupt("return",e.sent);case 6:return e.prev=6,e.t0=e.catch(0),e.t0&&console.error(e.t0),e.abrupt("return",[]);case 10:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(){return e.apply(this,arguments)}}()},{key:"isDev",value:function(){return!1}},{key:"getArticle",value:function(){var e=Object(l.a)(u.a.mark((function e(n){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,z()({baseURL:"https://oxfordunichess.github.io/oucc-backend/news/",url:n+(t.isDev()?"?token="+Math.random().toString(36).slice(2):""),method:"GET",maxRedirects:5}).catch(function(){var e=Object(l.a)(u.a.mark((function e(a){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.isDev()){e.next=4;break}e.t0=a,e.next=7;break;case 4:return e.next=6,z()({baseURL:"https://oxfordunichess.github.io/oucc-backend/news/",url:n+"?token="+Math.random().toString(36).slice(2),method:"GET",maxRedirects:5});case 6:e.t0=e.sent;case 7:return e.abrupt("return",e.t0);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).then((function(e){return e.data}));case 3:return e.abrupt("return",e.sent);case 6:return e.prev=6,e.t0=e.catch(0),e.t0&&console.error(e.t0),e.abrupt("return","");case 10:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t){return e.apply(this,arguments)}}()},{key:"setSection",value:function(e,t){return e.href.slice(0,-e.hash.length)+"#"+t}}]),t}(r.a.Component),q=function(e){function t(){return Object(m.a)(this,t),Object(h.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(w.Helmet,null,r.a.createElement("title",null,this.props.title?this.props.title+" | OUCC":"OUCC")),r.a.createElement(C,{parent:this.props.parent}),r.a.createElement("div",{id:"page"},r.a.createElement(N,null),r.a.createElement("div",{id:"main"},r.a.createElement("h1",null,"Contact Us"),r.a.createElement("br",null),"If you have any questions or wish to contact the club then please complete the form below and we will get back to you as soon as possible.",r.a.createElement("form",{id:"contact_form",method:"POST",action:"http://users.ox.ac.uk/cgi-bin/safeperl/chess/mailme.pl"},r.a.createElement("table",{id:"contact_table"},r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Name:"),r.a.createElement("td",null,r.a.createElement("input",{type:"text",name:"name",size:"55"}))),r.a.createElement("tr",null,r.a.createElement("th",null,"Email:"),r.a.createElement("td",null,r.a.createElement("input",{type:"text",name:"email",size:"55"}))),r.a.createElement("tr",null,r.a.createElement("th",null,"Subject:"),r.a.createElement("td",null,r.a.createElement("input",{type:"text",name:"subject",size:"55"}))),r.a.createElement("tr",null,r.a.createElement("th",null,"Your Message:"),r.a.createElement("td",null,r.a.createElement("textarea",{name:"message",rows:"6"}))))),r.a.createElement("br",null),r.a.createElement("input",{type:"submit",name:"submit",value:"Send"}),r.a.createElement("input",{type:"reset",value:"Clear Form"})))))}}]),t}(r.a.Component),K=function(e){function t(){return Object(m.a)(this,t),Object(h.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(w.Helmet,null,r.a.createElement("title",null,this.props.title?this.props.title+" | OUCC":"OUCC")),r.a.createElement(C,null),r.a.createElement("div",{id:"page"},r.a.createElement(N,null),r.a.createElement("h1",null,"404: Not found"),r.a.createElement("h3",null,r.a.createElement(b.b,{to:"/"},"Return to home"))))}}]),t}(r.a.Component),X=n(192),$=n.n(X),Q={api_key:"AIzaSyDahTZUtTKORUdsOY3H7BEeOXbwye0nBHI",calendars:[{name:"Calendar",url:"https://calendar.google.com/calendar/embed?src=oxfordunichess%40gmail.com&ctz=Europe%2FLondon"}],dailyRecurrence:700,weeklyRecurrence:500,monthlyRecurrence:20},ee=function(e){function t(e){var n;return Object(m.a)(this,t),(n=Object(h.a)(this,Object(d.a)(t).call(this,e))).render=function(){return r.a.createElement("div",null,r.a.createElement($.a,{events:n.state.events,config:Q}))},n.state={events:[]},n}return Object(f.a)(t,e),t}(r.a.Component);z.a.defaults.baseURL="https://oxfordunichess.github.io/oucc-backend/";var te=function(e){function t(e){var n;return Object(m.a)(this,t),(n=Object(h.a)(this,Object(d.a)(t).call(this,e))).state={index:{}},n}return Object(f.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){var e=Object(l.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.constructor.getIndex();case 2:t=e.sent,this.setState({index:t});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement(b.a,{basename:"/~chess"},r.a.createElement(v.d,null,Object.entries(this.state.index).map((function(e){var t=Object(i.a)(e,2),n=t[0],a=t[1];return r.a.createElement(v.b,{exact:!0,path:"/"+n,key:n+"_route",render:function(e){return a.open&&window.open(a.open),a.redirect?r.a.createElement(v.a,{to:a.redirect}):r.a.createElement(F,Object.assign({},e,{page:n,title:a.title,parent:a.parent}))}})})),r.a.createElement(v.b,{exact:!0,path:"/",render:function(){return r.a.createElement(F,{page:"main"})}}),r.a.createElement(v.b,{exact:!0,path:"/curr_news",render:function(){return r.a.createElement(Z,{title:"Current News",parent:"News"})}}),r.a.createElement(v.b,{exact:!0,path:"/contact",render:function(){return r.a.createElement(q,{title:"Contact",parent:"contact"})}}),r.a.createElement(v.b,{exact:!0,path:"/calendar",render:function(){return r.a.createElement(ee,{title:"Calendar",parent:"calendar"})}}),r.a.createElement(v.b,{path:"*",component:K,status:404})))}}],[{key:"isDev",value:function(){return!1}},{key:"getIndex",value:function(){var e=Object(l.a)(u.a.mark((function e(){var n,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n="index.json"+(t.isDev()?"?token="+Math.random().toString(36).slice(2):""),e.next=4,z()(n);case 4:return a=e.sent,e.abrupt("return",a.data);case 8:return e.prev=8,e.t0=e.catch(0),console.error(e.t0),e.abrupt("return",{});case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}()}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(te,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},77:function(e,t,n){e.exports={main:"page_main__jGfys",page:"page_page__g1c2x"}}},[[206,1,2]]]);
//# sourceMappingURL=main.e763d60f.chunk.js.map