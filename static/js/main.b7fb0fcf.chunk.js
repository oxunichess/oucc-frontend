(window["webpackJsonpoucc-react"]=window["webpackJsonpoucc-react"]||[]).push([[0],{148:function(e,t,a){e.exports=a.p+"static/media/oucclogo.2042af54.jpg"},167:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(52),l=a.n(c),i=(a(61),a(2)),s=a(3),o=a(5),u=a(4),m=a(6),p=(a(62),a(11)),h=a(17),d=a(12),b=a.n(d),E=a(22),f=a(53),v=a.n(f),g=a(15),O=a.n(g),w=a(23),_=a(18),j=a.n(_),y=(a(148),{news:[["/curr_news","Current News",!1,!0],["/old_news","News Archive",!1,!0]],leagues:[["/boxleague","Club League",!0,!1],["/leagues","Teams",!1,!0],["/termcard","Termcard",!0,!0],["/1stTeam","1st Team",!1,!0],["/2ndTeam","2nd Team",!1,!0],["/3rdTeam","3rd Team",!1,!0],["/classes","Classes",!1,!0]],members:[["/membership","Membership",!1,!0],["/committee","Current Committee",!1,!0],["/historical_committee","Past Officers",!1,!0]],contact:[["/contact","Contact Us",!1,!0],["/maillists","Join our Mailing Lists",!1,!0]],sponsors:[],tournament:[["/tournament","Tournament",!1,!0],["/other_events","Alumni day",!1,!0]]}),k={news:"News",members:"Membership",leagues:"Play",varsity:"Varsity",contact:"Contact",sponsors:"Sponsors",tournament:"150 Years"},C=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).state={subnav:[]},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;Object.entries(y).forEach((function(t){var a=Object(w.a)(t,2),n=a[0],r=a[1];window.location.pathname.slice(1).includes(n)&&e.setState({subnav:r})}))}},{key:"render",value:function(){return r.a.createElement("div",{className:j.a.header},r.a.createElement("div",{className:j.a.inner_header},r.a.createElement("div",{className:j.a.banner},r.a.createElement(p.b,{className:j.a.oucc_logo,style:{backgroundImage:"/oucc-frontend/images/oucclogo.jpg"},to:"/"}),r.a.createElement("ul",{className:j.a.nav},Object.entries(k).map((function(e){var t=Object(w.a)(e,2),a=t[0],n=t[1];return r.a.createElement("li",{key:a},r.a.createElement(p.b,{to:"/"+a},n))}))))),r.a.createElement("div",{className:j.a.subnav_container},r.a.createElement("ul",{className:j.a.subnav},this.state.subnav.map((function(e){var t=Object(w.a)(e,4),a=t[0],n=t[1];t[2];return t[3]?r.a.createElement("li",{key:a.slice(1)},r.a.createElement(p.b,{to:a},n)):null})))))}}]),t}(r.a.Component);var x=function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{id:"sidebar"},r.a.createElement("div",{id:"facebook_pane"},r.a.createElement("a",{href:"https://www.facebook.com/groups/oxford.chess.club/"},r.a.createElement("img",{alt:"Find us on facebook button",id:"fb_logo",src:"/oucc-frontend/images/fblogo.png"}))),r.a.createElement("div",{id:"next_event"},r.a.createElement("ul",null,r.a.createElement("h1",null,"Upcoming Events:"),r.a.createElement("li",null,"Town vs Gown (May 19th)"),r.a.createElement("li",null,"OUCC celebrates 150th anniversary"))),r.a.createElement("div",{id:"news_hlines"},r.a.createElement("h1",null,"Recent News:"),r.a.createElement("ul",null,r.a.createElement("li",null,"Oxford win Varsity!"),r.a.createElement("li",null,"OUCC 1 win ODCL Div 1")),r.a.createElement(p.b,{to:"/curr_news"},"View current news")),r.a.createElement("div",{id:"puzzle_pane"},r.a.createElement("iframe",{id:"puzzle",width:"256",scrolling:"no",height:"293",frameBorder:"0",title:"puzzle",src:"https://www.shredderchess.com/online/playshredder/gdailytactics.php?mylang=en&mysize=26"})))}}]),t}(r.a.Component),U=a(16),T=a.n(U);T.a.defaults.baseURL="https://oxfordunichess.github.io/oucc-backend/";var M=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).state={page:""},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=Object(E.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.constructor.getPage(this.props.page);case 2:t=e.sent,this.setState({page:t});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(O.a,{title:this.props.title?this.props.title+" | OUCC":"OUCC"}),r.a.createElement(C,null),r.a.createElement("div",{id:"page"},r.a.createElement(x,null),r.a.createElement("div",{id:"main"},this.state.page?r.a.createElement(v.a,{source:this.state.page.trim()}):null)))}}],[{key:"getPage",value:function(){var e=Object(E.a)(b.a.mark((function e(){var t,a,n,r=arguments;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.length>0&&void 0!==r[0]?r[0]:"main",e.prev=1,a="pages/".concat(t+".md","?token=").concat(Math.random().toString(36).slice(2)),e.next=5,T()(a);case 5:return n=e.sent,e.abrupt("return",n.data);case 9:return e.prev=9,e.t0=e.catch(1),console.error(e.t0),e.abrupt("return",null);case 13:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(){return e.apply(this,arguments)}}()}]),t}(r.a.Component);T.a.defaults.baseURL="https://oxfordunichess.github.io/oucc-backend/";var N=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).state={table:null},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=Object(E.a)(b.a.mark((function e(){var a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this.props.file){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,t.generateTable(this.props.subtitle||z(this.props.file),"data/"+this.props.file+".json");case 4:a=e.sent,this.setState({table:a});case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(O.a,{title:this.props.title?this.props.title+" | OUCC":"OUCC"}),r.a.createElement(C,null),r.a.createElement("div",{id:"page"},r.a.createElement(x,null),r.a.createElement("div",{id:"main"},r.a.createElement("h1",null,this.props.subtitle||z(this.props.file)),r.a.createElement("br",null),this.state.table)))}}],[{key:"generateTable",value:function(){var e=Object(E.a)(b.a.mark((function e(t,a){var n,c,l;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t,a),e.next=3,T()(a);case 3:return n=e.sent,c=n.data,l=Object.keys(c[0]),e.abrupt("return",r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",{id:t+"-sub"},t),r.a.createElement("table",null,r.a.createElement("thead",null,l.map((function(e){return r.a.createElement("th",{key:e,scope:"column"},e)}))),r.a.createElement("tbody",null,c.map((function(e){return r.a.createElement("tr",null,l.map((function(t){return r.a.createElement("td",null,t in e?e[t]:null)})))}))))));case 7:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()}]),t}(r.a.Component);function z(e){if("string"!==typeof e)throw new TypeError;return e.slice(0,1).toUpperCase()+e.slice(1).toLowerCase()}var S=function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(O.a,{title:this.props.title?this.props.title+" | OUCC":"OUCC"}),r.a.createElement(C,null),r.a.createElement("div",{id:"page"},r.a.createElement(x,null),r.a.createElement("div",{id:"main"},r.a.createElement("h1",null,"Contact Us"),r.a.createElement("br",null),"If you have any questions or wish to contact the club then please complete the form below and we will get back to you as soon as possible.",r.a.createElement("form",{id:"contact_form",method:"POST",action:"http://users.ox.ac.uk/cgi-bin/safeperl/chess/mailme.pl"},r.a.createElement("table",{id:"contact_table"},r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Name:"),r.a.createElement("td",null,r.a.createElement("input",{type:"text",name:"name",size:"55"}))),r.a.createElement("tr",null,r.a.createElement("th",null,"Email:"),r.a.createElement("td",null,r.a.createElement("input",{type:"text",name:"email",size:"55"}))),r.a.createElement("tr",null,r.a.createElement("th",null,"Subject:"),r.a.createElement("td",null,r.a.createElement("input",{type:"text",name:"subject",size:"55"}))),r.a.createElement("tr",null,r.a.createElement("th",null,"Your Message:"),r.a.createElement("td",null,r.a.createElement("textarea",{name:"message",rows:"6"}))))),r.a.createElement("br",null),r.a.createElement("input",{type:"submit",name:"submit",value:"Send"}),r.a.createElement("input",{type:"reset",value:"Clear Form"})))))}}]),t}(r.a.Component),L=function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(O.a,{title:this.props.title?this.props.title+" | OUCC":"OUCC"}),r.a.createElement(C,null),r.a.createElement("div",{id:"page"},r.a.createElement(x,null),r.a.createElement("h1",null,"404: Not found"),r.a.createElement("h3",null,r.a.createElement(p.b,{to:"/"},"Return to home"))))}}]),t}(r.a.Component);T.a.defaults.baseURL="https://oxfordunichess.github.io/oucc-backend/";var F=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).state={index:null},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return r.a.createElement(p.a,{basename:"/oucc-frontend"},r.a.createElement(h.d,null,r.a.createElement(h.b,{exact:!0,path:"/",render:function(){return r.a.createElement(M,{page:"main"})}}),r.a.createElement(h.b,{exact:!0,path:"/members",render:function(){return r.a.createElement(h.a,{to:"/membership"})}}),r.a.createElement(h.b,{exact:!0,path:"/contact",render:function(){return r.a.createElement(S,null)}}),r.a.createElement(h.b,{exact:!0,path:"/index.html",render:function(){return r.a.createElement(h.a,{to:"/"})}}),r.a.createElement(h.b,{path:"/termcard",render:function(){return window.open("https://unioxfordnexus-my.sharepoint.com/:x:/g/personal/chri5551_ox_ac_uk/EQAUw-Mpt6pMoKx93Y8MFM0BQSwz7Xsqx1vJ54r5SILOrA"),r.a.createElement(h.a,{to:"/leagues"})}}),["1stTeam","2ndTeam","3rdTeam","archive","archive2","classes","curr_news","leagues","maillists","main","membership","termcard","varsity"].map((function(e){return r.a.createElement(h.b,{exact:!0,key:e+"_route",path:"/"+e,render:function(t){return r.a.createElement(M,Object.assign({},t,{page:e}))}})})),r.a.createElement(h.b,{exact:!0,path:"/committee",render:function(e){return r.a.createElement(N,Object.assign({},e,{file:"committee2019"}))}}),r.a.createElement(h.b,{path:"*",component:L,status:404})))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(F,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},18:function(e,t,a){e.exports={header:"header_header__2JDtH",inner_header:"header_inner_header__jZnVe",links:"header_links__1j1cp",oucc_logo:"header_oucc_logo__ntMUg",nav:"header_nav__5Zo-d",banner:"header_banner__2Li7q",subnav_container:"header_subnav_container__1Yzjp",subnav:"header_subnav__1RCVf",selected:"header_selected__2OTKR",empty:"header_empty__2rwYt"}},56:function(e,t,a){e.exports=a(167)},61:function(e,t,a){},62:function(e,t,a){}},[[56,1,2]]]);
//# sourceMappingURL=main.b7fb0fcf.chunk.js.map