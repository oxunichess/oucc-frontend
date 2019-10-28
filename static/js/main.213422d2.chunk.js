(window["webpackJsonpoucc-react"]=window["webpackJsonpoucc-react"]||[]).push([[0],{20:function(e,t,n){e.exports={header:"header_header__2JDtH",inner_header:"header_inner_header__jZnVe",links:"header_links__1j1cp",oucc_logo:"header_oucc_logo__ntMUg",nav:"header_nav__5Zo-d",banner:"header_banner__2Li7q",subnav_container:"header_subnav_container__1Yzjp",subnav:"header_subnav__1RCVf",selected:"header_selected__2OTKR",empty:"header_empty__2rwYt"}},220:function(e,t){},245:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(88),s=n.n(c),u=(n(96),n(24)),o=n(1),l=n.n(o),i=n(9),m=n(3),p=n(4),d=n(6),h=n(5),f=n(7),b=(n(98),n(16)),v=n(19),E=n(31),g=n.n(E),w=n(18),O=n.n(w),j=n(20),y=n.n(j),_=n(52),k={news:"News",members:"Membership",leagues:"Play",varsity:"Varsity",contact:"Contact",sponsors:"Sponsors",tournament:"150 Years"},x=function(e){function t(e){var n;return Object(m.a)(this,t),(n=Object(d.a)(this,Object(h.a)(t).call(this,e))).state={subnav:[]},n}return Object(f.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){var e=this;Object.entries(_).forEach((function(t){var n=Object(u.a)(t,2),a=n[0],r=n[1];window.location.pathname.slice(1).includes(a)&&e.setState({subnav:r})}))}},{key:"render",value:function(){return r.a.createElement("div",{className:y.a.header},r.a.createElement("div",{className:y.a.inner_header},r.a.createElement("div",{className:y.a.banner},r.a.createElement(b.b,{className:y.a.oucc_logo,to:"/",style:{backgroundImage:"url(".concat("/oucc-frontend","/images/oucclogo.jpg")}}),r.a.createElement("ul",{className:y.a.nav},Object.entries(k).map((function(e){var t=Object(u.a)(e,2),n=t[0],a=t[1];return r.a.createElement("li",{key:n},r.a.createElement(b.b,{to:"/"+n},a))}))))),r.a.createElement("div",{className:y.a.subnav_container},r.a.createElement("ul",{className:y.a.subnav},(_[this.props.parent]||this.state.subnav).map((function(e){var t=Object(u.a)(e,4),n=t[0],a=t[1];t[2];return t[3]?r.a.createElement("li",{key:n.slice(1)},r.a.createElement(b.b,{to:n},a)):null})))))}}]),t}(r.a.Component);var C=function(e){function t(){return Object(m.a)(this,t),Object(d.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{id:"sidebar"},r.a.createElement("div",{id:"facebook_pane"},r.a.createElement("a",{href:"https://www.facebook.com/groups/oxford.chess.club/"},r.a.createElement("img",{alt:"Find us on facebook button",id:"fb_logo",src:"/oucc-frontend/images/fblogo.png"}))),r.a.createElement("div",{id:"next_event"},r.a.createElement("ul",null,r.a.createElement("h1",null,"Upcoming Events:"),r.a.createElement("li",null,"Town vs Gown (May 19th)"),r.a.createElement("li",null,"OUCC celebrates 150th anniversary"))),r.a.createElement("div",{id:"news_hlines"},r.a.createElement("h1",null,"Recent News:"),r.a.createElement("ul",null,r.a.createElement("li",null,"Oxford win Varsity!"),r.a.createElement("li",null,"OUCC 1 win ODCL Div 1")),r.a.createElement(b.b,{to:"/curr_news"},"View current news")),r.a.createElement("div",{id:"puzzle_pane"},r.a.createElement("iframe",{id:"puzzle",width:"256",scrolling:"no",height:"293",frameBorder:"0",title:"puzzle",src:"https://www.shredderchess.com/online/playshredder/gdailytactics.php?mylang=en&mysize=26"})))}}]),t}(r.a.Component),N=n(32),T=n.n(N),U=n(28),D=n.n(U),M=n(12),P=n.n(M);P.a.defaults.baseURL="https://oxfordunichess.github.io/oucc-backend/";var S=function(e){function t(e){var n;return Object(m.a)(this,t),(n=Object(d.a)(this,Object(h.a)(t).call(this,e))).state={table:null},n}return Object(f.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){var e=Object(i.a)(l.a.mark((function e(){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this.props.src){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,t.generateTable("data/"+this.props.src);case 4:n=e.sent,this.setState({table:n});case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return this.state.table}}],[{key:"generateTable",value:function(){var e=Object(i.a)(l.a.mark((function e(t){var n,a,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P()(t);case 2:return n=e.sent,a=n.data,c=Object.keys(a[0]),e.abrupt("return",r.a.createElement("table",null,r.a.createElement("thead",null,c.map((function(e){return r.a.createElement("th",{key:e,scope:"column"},z(e))}))),r.a.createElement("tbody",null,a.map((function(e){return r.a.createElement("tr",null,c.map((function(t){return r.a.createElement("td",null,t in e?e[t]:null)})))})))));case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}]),t}(r.a.Component);function z(e){if("string"!==typeof e)throw new TypeError;return e.slice(0,1).toUpperCase()+e.slice(1).toLowerCase()}P.a.defaults.baseURL="https://oxfordunichess.github.io/oucc-backend/";var R=new D.a.ProcessNodeDefinitions(r.a),I=T()({isValidNode:function(e){return"script"!==e.type},processingInstructions:[{shouldProcessNode:function(e){return console.log(e),e.name&&"data-table"===e.name},processNode:function(e,t){return r.a.createElement(S,e.attribs)}},{shouldProcessNode:function(e){return!0},processNode:R.processDefaultNode}]}),L=function(e){function t(e){var n;return Object(m.a)(this,t),(n=Object(d.a)(this,Object(h.a)(t).call(this,e))).state={page:""},n}return Object(f.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){var e=Object(i.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.constructor.getPage(this.props.page);case 2:t=e.sent,this.setState({page:t});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(O.a,{title:this.props.title?this.props.title+" | OUCC":"OUCC"}),r.a.createElement(x,{parent:this.props.parent}),r.a.createElement("div",{id:"page"},r.a.createElement(C,null),r.a.createElement("div",{id:"main"},this.state.page?r.a.createElement(g.a,{source:this.state.page.trim(),escapeHtml:!1,astPlugins:[I]}):null)))}}],[{key:"getPage",value:function(){var e=Object(i.a)(l.a.mark((function e(){var t,n,a,r=arguments;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.length>0&&void 0!==r[0]?r[0]:"main",e.prev=1,n="pages/".concat(t+".md","?token=").concat(Math.random().toString(36).slice(2)),e.next=5,P()(n);case 5:return a=e.sent,e.abrupt("return",a.data);case 9:return e.prev=9,e.t0=e.catch(1),console.error(e.t0),e.abrupt("return",null);case 13:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(){return e.apply(this,arguments)}}()}]),t}(r.a.Component),V=n(33),F=n.n(V),J=new D.a.ProcessNodeDefinitions(r.a),A=T()({isValidNode:function(e){return"script"!==e.type},processingInstructions:[{shouldProcessNode:function(e){return console.log(e),e.name&&"data-table"===e.name},processNode:function(e,t){return r.a.createElement(S,e.attribs)}},{shouldProcessNode:function(e){return!0},processNode:J.processDefaultNode}]}),Y=function(e){function t(e){var n;return Object(m.a)(this,t),(n=Object(d.a)(this,Object(h.a)(t).call(this,e))).state={articles:[]},n}return Object(f.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){var e=Object(i.a)(l.a.mark((function e(){var n,a,r,c,s,u;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getIndex();case 2:return n=e.sent,a=n.data,r=a.map((function(e){return e.name})),c=r.filter((function(e){return e.endsWith(".md")&&/^[0-9]{4}-[0-9]{1,2}-[0-9]{1,2}_/.test(e)})),s=c.sort((function(e,t){var n=new Date(e.split("_")[0]),a=new Date(t.split("_")[0]);return n.getTime()!==n.getTime()?1:a.getTime()!==a.getTime()?-1:a-n})),e.next=9,Promise.all(s.map(t.getArticle));case 9:u=e.sent,this.setState({articles:u});case 11:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(O.a,{title:this.props.title?this.props.title+" | OUCC":"OUCC"}),r.a.createElement(x,{parent:this.props.parent}),r.a.createElement("div",{className:F.a.page},r.a.createElement(C,null),r.a.createElement("div",{className:F.a.main},this.state.articles.map((function(e){return r.a.createElement("div",{className:F.a.article},r.a.createElement(g.a,{source:e,escapeHtml:!1,astPlugins:[A]}),r.a.createElement("hr",null))})))))}}],[{key:"getIndex",value:function(){var e=Object(i.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,P()({url:"https://api.github.com/repos/oxfordunichess/oucc-backend/contents/news/",method:"get",maxRedirects:5});case 3:return e.abrupt("return",e.sent);case 6:return e.prev=6,e.t0=e.catch(0),e.t0&&console.error(e.t0),e.abrupt("return",[]);case 10:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(){return e.apply(this,arguments)}}()},{key:"getArticle",value:function(){var e=Object(i.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,P()({baseURL:"https://oxfordunichess.github.io/oucc-backend/news/",url:t+"?token="+Math.random().toString(36).slice(2),method:"GET",maxRedirects:5}).then((function(e){return e.data}));case 3:return e.abrupt("return",e.sent);case 6:return e.prev=6,e.t0=e.catch(0),e.t0&&console.error(e.t0),e.abrupt("return","");case 10:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t){return e.apply(this,arguments)}}()}]),t}(r.a.Component),B=function(e){function t(){return Object(m.a)(this,t),Object(d.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(O.a,{title:this.props.title?this.props.title+" | OUCC":"OUCC"}),r.a.createElement(x,{parent:this.props.parent}),r.a.createElement("div",{id:"page"},r.a.createElement(C,null),r.a.createElement("div",{id:"main"},r.a.createElement("h1",null,"Contact Us"),r.a.createElement("br",null),"If you have any questions or wish to contact the club then please complete the form below and we will get back to you as soon as possible.",r.a.createElement("form",{id:"contact_form",method:"POST",action:"http://users.ox.ac.uk/cgi-bin/safeperl/chess/mailme.pl"},r.a.createElement("table",{id:"contact_table"},r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Name:"),r.a.createElement("td",null,r.a.createElement("input",{type:"text",name:"name",size:"55"}))),r.a.createElement("tr",null,r.a.createElement("th",null,"Email:"),r.a.createElement("td",null,r.a.createElement("input",{type:"text",name:"email",size:"55"}))),r.a.createElement("tr",null,r.a.createElement("th",null,"Subject:"),r.a.createElement("td",null,r.a.createElement("input",{type:"text",name:"subject",size:"55"}))),r.a.createElement("tr",null,r.a.createElement("th",null,"Your Message:"),r.a.createElement("td",null,r.a.createElement("textarea",{name:"message",rows:"6"}))))),r.a.createElement("br",null),r.a.createElement("input",{type:"submit",name:"submit",value:"Send"}),r.a.createElement("input",{type:"reset",value:"Clear Form"})))))}}]),t}(r.a.Component),G=function(e){function t(){return Object(m.a)(this,t),Object(d.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(O.a,{title:this.props.title?this.props.title+" | OUCC":"OUCC"}),r.a.createElement(x,null),r.a.createElement("div",{id:"page"},r.a.createElement(C,null),r.a.createElement("h1",null,"404: Not found"),r.a.createElement("h3",null,r.a.createElement(b.b,{to:"/"},"Return to home"))))}}]),t}(r.a.Component);P.a.defaults.baseURL="https://oxfordunichess.github.io/oucc-backend/";var H=function(e){function t(e){var n;return Object(m.a)(this,t),(n=Object(d.a)(this,Object(h.a)(t).call(this,e))).state={index:{}},n}return Object(f.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){var e=Object(i.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.constructor.getIndex();case 2:t=e.sent,this.setState({index:t});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement(b.a,{basename:"/oucc-frontend"},r.a.createElement(v.d,null,Object.entries(this.state.index).map((function(e){var t=Object(u.a)(e,2),n=t[0],a=t[1];return r.a.createElement(v.b,{exact:!0,path:"/"+n,key:n+"_route",render:function(e){return a.open&&window.open(a.open),a.redirect?r.a.createElement(v.a,{to:a.redirect}):r.a.createElement(L,Object.assign({},e,{page:n,title:a.title,parent:a.parent}))}})})),r.a.createElement(v.b,{exact:!0,path:"/",render:function(){return r.a.createElement(L,{page:"main"})}}),r.a.createElement(v.b,{exact:!0,path:"/curr_news",render:function(){return r.a.createElement(Y,{title:"Current News",parent:"News"})}}),r.a.createElement(v.b,{exact:!0,path:"/contact",render:function(){return r.a.createElement(B,{title:"Contact",parent:"contact"})}}),r.a.createElement(v.b,{path:"*",component:G,status:404})))}}],[{key:"getIndex",value:function(){var e=Object(i.a)(l.a.mark((function e(){var t,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t="index.json?token="+Math.random().toString(36).slice(2),e.next=4,P()(t);case 4:return n=e.sent,e.abrupt("return",n.data);case 8:return e.prev=8,e.t0=e.catch(0),console.error(e.t0),e.abrupt("return",{});case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}()}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(H,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},33:function(e,t,n){e.exports={main:"page_main__jGfys",page:"page_page__g1c2x"}},52:function(e){e.exports=JSON.parse('{"news":[["/curr_news","Current News",false,true],["/old_news","News Archive",false,true]],"leagues":[["/boxleague","Club League",true,false],["/leagues","Teams",false,true],["/termcard","Termcard",true,true],["/1stTeam","1st Team",false,true],["/2ndTeam","2nd Team",false,true],["/3rdTeam","3rd Team",false,true],["/classes","Classes",false,true]],"members":[["/membership","Membership",false,true],["/committee","Current Committee",false,true],["/historical_committee","Past Officers",false,true]],"contact":[["/contact","Contact Us",false,true],["/maillists","Join our Mailing Lists",false,true]],"sponsors":[],"tournament":[["/tournament","Tournament",false,true],["/other_events","Alumni day",false,true]]}')},91:function(e,t,n){e.exports=n(245)},96:function(e,t,n){},98:function(e,t,n){}},[[91,1,2]]]);
//# sourceMappingURL=main.213422d2.chunk.js.map