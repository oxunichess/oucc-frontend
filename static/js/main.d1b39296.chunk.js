(window["webpackJsonpoucc-react"]=window["webpackJsonpoucc-react"]||[]).push([[0],{102:function(e,t,n){},104:function(e,t,n){},15:function(e,t,n){e.exports={header:"header_header__2JDtH",banner:"header_banner__2Li7q",listing:"header_listing__198P8",oucc_logo:"header_oucc_logo__ntMUg",nav:"header_nav__5Zo-d",left:"header_left__2fvQE",right:"header_right__3CMex",subnav:"header_subnav__1RCVf",selected:"header_selected__2OTKR",newsFeed:"header_newsFeed__35rvd",intro:"header_intro__1vMZ4",runner:"header_runner__2doT9"}},17:function(e,t,n){e.exports={key:"calendar_key__10QPp",event:"calendar_event__Fpsnm",eventHeader:"calendar_eventHeader__1LM4e",eventTitle:"calendar_eventTitle__253CO",noEvent:"calendar_noEvent__21QAe",table:"calendar_table__1STq8"}},228:function(e,t){},254:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(91),s=n.n(c),i=(n(102),n(13)),o=n(1),l=n.n(o),u=n(9),m=n(3),d=n(4),p=n(6),h=n(5),f=n(7),v=(n(104),n(20)),b=n(22),E=n(32),g=n(15),y=n.n(g),w=n(37),k=/\w+/g,O={left:{news:"News",leagues:"Play",varsity:"Varsity"},right:{members:"Membership",contact:"Contact",sponsors:"Sponsors",tournament:"150 Years"}},j=function(e){function t(e){var n;return Object(m.a)(this,t),(n=Object(p.a)(this,Object(h.a)(t).call(this,e))).navEnter=n.navEnter.bind(Object(E.a)(n)),n.navLeave=n.navLeave.bind(Object(E.a)(n)),n.state={subnav:"",feedPosition:0},n}return Object(f.a)(t,e),Object(d.a)(t,[{key:"getParents",value:function(e){return w[e]?w[e]:[]}},{key:"getCurrent",value:function(){return(Object.entries(w).find((function(e){var t=Object(i.a)(e,2),n=t[0],a=t[1];if(window.location.pathname.slice(1).includes(n))return console.log(a),a}))||[,null])[0]}},{key:"navEnter",value:function(e){this.setState({subnav:e})}},{key:"navLeave",value:function(){this.setState({subnav:""})}},{key:"renderNav",value:function(e){var t=this;return r.a.createElement("div",{className:y.a.nav+" "+y.a[e]},Object.entries(O[e]).map((function(e,n){var a=Object(i.a)(e,2),c=a[0],s=a[1],o=t.getParents(c);return r.a.createElement("div",{key:[s,n].join("."),className:y.a.listing,onMouseEnter:function(){return t.navEnter(c)},onMouseLeave:function(){return t.navLeave(c)}},r.a.createElement("div",null,r.a.createElement(v.b,{key:c,to:"/"+c},s)),o.length&&t.state.subnav===c?r.a.createElement("ul",{className:y.a.subnav,refs:c},o.map((function(e){var t=Object(i.a)(e,4),n=t[0],a=t[1];t[2];return t[3]?r.a.createElement("li",{key:n.slice(1),className:window.location.pathname.includes(n.slice(1))?y.a.selected:""},r.a.createElement(v.b,{to:n},a)):null}))):null)})))}},{key:"componentDidUpdate",value:function(){this.state._width||this.refs.dummy&&(this.state._width=this.refs.dummy.scrollWidth)}},{key:"componentDidMount",value:function(){var e=this;setInterval((function(){var t=e.state.feedPosition;e.setState({feedPosition:t+.5})}),1e3/60)}},{key:"getNewsFeed",value:function(){var e=this;return this.props.articles.map((function(t,n){if("string"!==typeof t)return null;if(!t||"function"!==typeof t.split)return console.error("Bad Markdown document:\n",t),null;for(var a=t.split("\n").shift().trim();a.startsWith("#");)a=a.slice(1);var c=a.match(k).join("-").toLowerCase();return[r.a.createElement("a",{href:e.constructor.setSection(window.location,c),key:c,style:{left:-e.state.feedPosition}},a)," \u2022 "]}))}},{key:"render",value:function(){var e=-this.state.feedPosition%this.state._width;return r.a.createElement("div",{className:y.a.header},r.a.createElement("div",{className:y.a.banner},this.renderNav("left"),r.a.createElement(v.b,{className:y.a.oucc_logo,to:"/",style:{backgroundImage:"url(".concat("/oucc-frontend","/images/oucclogo.jpg")}}),this.renderNav("right")),r.a.createElement("div",{className:y.a.newsFeed},r.a.createElement("div",{className:y.a.intro},"Latest News:"),r.a.createElement("div",null),r.a.createElement("div",{className:y.a.runner},r.a.createElement("div",{ref:"runner",style:{transform:"translate3d(".concat(e,"px, 0, 0)")}},this.getNewsFeed()),r.a.createElement("div",{ref:"dummy",style:{visibility:"hidden"}},this.getNewsFeed())),r.a.createElement("div",null)))}}],[{key:"setSection",value:function(e,t){return"/oucc-frontend/curr_news#"+t}}]),t}(r.a.Component);var _=n(28),x=n.n(_),N=n(19),C=n(27),D=n.n(C),T=(r.a.Component,n(36)),S=n.n(T),M=n(31),L=n.n(M),U=n(94),P=n.n(U),R=n(8),F=n.n(R);F.a.defaults.baseURL="https://oxfordunichess.github.io/oucc-backend/";var H=function(e){function t(e){var n;return Object(m.a)(this,t),(n=Object(p.a)(this,Object(h.a)(t).call(this,e))).state={table:null},n}return Object(f.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){var e=Object(u.a)(l.a.mark((function e(){var n,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this.props.src){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,t.getData("data/"+this.props.src);case 4:return n=e.sent,this.props.src.endsWith(".csv")&&(n=P.a.parse(n,{header:!0,dynamicTyping:!0}).data),e.next=8,t.generateTablefromJSON(n);case 8:a=e.sent,this.setState({table:a});case 10:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return this.state.table}}],[{key:"getData",value:function(){var e=Object(u.a)(l.a.mark((function e(t){var n,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,F()(t);case 3:return n=e.sent,a=n.data,e.abrupt("return",a);case 8:return e.prev=8,e.t0=e.catch(0),e.t0&&console.error(e.t0),e.abrupt("return",[{}]);case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}()},{key:"generateTablefromJSON",value:function(){var e=Object(u.a)(l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=Object.keys(t[0]),e.abrupt("return",r.a.createElement("table",null,r.a.createElement("thead",null,n.map((function(e){return r.a.createElement("th",{key:e,scope:"column"},I(e))}))),r.a.createElement("tbody",null,t.map((function(e){var t=Object.values(e)[0]?Object.values(e)[0].toLowerCase().replace(/\s+/g,"-"):null;return r.a.createElement("tr",{key:t,id:t},n.map((function(t){return r.a.createElement("td",null,t in e?e[t]:null)})))})))));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}]),t}(r.a.Component);function I(e){if("string"!==typeof e)throw new TypeError;return e.slice(0,1).toUpperCase()+e.slice(1).toLowerCase()}F.a.defaults.baseURL="https://oxfordunichess.github.io/oucc-backend/";var W=new L.a.ProcessNodeDefinitions(r.a),A=S()({isValidNode:function(e){return"script"!==e.type},processingInstructions:[{shouldProcessNode:function(e){return e.name&&"data-table"===e.name},processNode:function(e,t){return r.a.createElement(H,e.attribs)}},{shouldProcessNode:function(e){return!0},processNode:W.processDefaultNode}]}),J=function(e){function t(e){var n;return Object(m.a)(this,t),(n=Object(p.a)(this,Object(h.a)(t).call(this,e))).state={page:""},n}return Object(f.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){var e=Object(u.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.constructor.getPage(this.props.page);case 2:t=e.sent,this.setState({page:t});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(N.Helmet,null,r.a.createElement("title",null,this.props.title?this.props.title+" | OUCC":"OUCC")),r.a.createElement("div",{id:"page"},r.a.createElement("div",{id:"main"},this.state.page?r.a.createElement(x.a,{source:this.state.page.trim(),escapeHtml:!1,astPlugins:[A],transformLinkUri:function(e){return((e=x.a.uriTransformer(e)).startsWith("/")||e.startsWith("./"))&&(e=D.a.join("/oucc-frontend",e)),e}}):null)))}}],[{key:"getPage",value:function(){var e=Object(u.a)(l.a.mark((function e(){var t,n,a,r=arguments;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.length>0&&void 0!==r[0]?r[0]:"main",e.prev=1,n="pages/".concat(t+".md").concat(""),e.next=5,F()(n);case 5:return a=e.sent,e.abrupt("return",a.data);case 9:return e.prev=9,e.t0=e.catch(1),console.error(e.t0),e.abrupt("return",null);case 13:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(){return e.apply(this,arguments)}}()}]),t}(r.a.Component),B=n(96),z=n(38),Y=n.n(z),q=new L.a.ProcessNodeDefinitions(r.a),K=S()({isValidNode:function(e){return"script"!==e.type},processingInstructions:[{shouldProcessNode:function(e){return!!e.name&&"data-table"===e.name},processNode:function(e,t){switch(e.name){case"data-table":return r.a.createElement(H,e.attribs);default:return null}}},{shouldProcessNode:function(e){return!0},processNode:q.processDefaultNode}]}),V=/\w+/g,Z=/<img\s+.*?src=["'](.*).*?">/,G=function(e){function t(){return Object(m.a)(this,t),Object(p.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=new Map,n=this.props.articles.map((function(n){if(!n)return console.error("Bad Markdown document:\n"+n),null;for(var a=n.split("\n"),c=a.shift().trim();c.startsWith("#");)c=c.slice(1);var s=(c=c.trim()).match(V).join("-").toLowerCase(),i=["## [".concat(c,"](").concat(t.setSection(window.location,s),")")].concat(Object(B.a)(a)).join("\n");return e.set(s,{title:c+" | OUCC",image:(i.match(Z)||[])[1],description:a.find((function(e){return e.trim()&&!e.trim().startsWith("#")}))}),r.a.createElement("div",{id:s,key:s,className:Y.a.article},r.a.createElement(x.a,{source:i,escapeHtml:!1,astPlugins:[K],transformLinkUri:function(e){return((e=x.a.uriTransformer(e)).startsWith("/")||e.startsWith("./"))&&(e=D.a.join("/oucc-frontend",e)),e}}),r.a.createElement("hr",null))})),a={};return window.location.hash&&e.get(window.location.hash.slice(1))&&(a=e.get(window.location.hash.slice(1))),r.a.createElement(r.a.Fragment,null,r.a.createElement(N.Helmet,{defaultTitle:this.props.title?this.props.title+" | OUCC":"OUCC"},r.a.createElement("title",null,a.title),r.a.createElement("meta",{property:"og:type",content:"article"}),a.description?r.a.createElement("meta",{name:"description",content:a.description}):null,a.image?r.a.createElement("meta",{property:"og:image",content:a.image}):null),r.a.createElement("div",{className:Y.a.page},r.a.createElement("div",{className:Y.a.main},n)))}}],[{key:"setSection",value:function(e,t){return e.href.slice(0,-e.hash.length)+"#"+t}}]),t}(r.a.Component),Q=function(e){function t(){return Object(m.a)(this,t),Object(p.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(N.Helmet,null,r.a.createElement("title",null,this.props.title?this.props.title+" | OUCC":"OUCC")),r.a.createElement("div",{id:"page"},r.a.createElement("div",{id:"main"},r.a.createElement("h1",null,"Contact Us"),r.a.createElement("br",null),"If you have any questions or wish to contact the club then please complete the form below and we will get back to you as soon as possible.",r.a.createElement("form",{id:"contact_form",method:"POST",action:"http://users.ox.ac.uk/cgi-bin/safeperl/chess/mailme.pl"},r.a.createElement("table",{id:"contact_table"},r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Name:"),r.a.createElement("td",null,r.a.createElement("input",{type:"text",name:"name",size:"55"}))),r.a.createElement("tr",null,r.a.createElement("th",null,"Email:"),r.a.createElement("td",null,r.a.createElement("input",{type:"text",name:"email",size:"55"}))),r.a.createElement("tr",null,r.a.createElement("th",null,"Subject:"),r.a.createElement("td",null,r.a.createElement("input",{type:"text",name:"subject",size:"55"}))),r.a.createElement("tr",null,r.a.createElement("th",null,"Your Message:"),r.a.createElement("td",null,r.a.createElement("textarea",{name:"message",rows:"6"}))))),r.a.createElement("br",null),r.a.createElement("input",{type:"submit",name:"submit",value:"Send"}),r.a.createElement("input",{type:"reset",value:"Clear Form"})))))}}]),t}(r.a.Component),X=function(e){function t(){return Object(m.a)(this,t),Object(p.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(N.Helmet,null,r.a.createElement("title",null,this.props.title?this.props.title+" | OUCC":"OUCC")),r.a.createElement("div",{id:"page"},r.a.createElement("h1",null,"404: Not found"),r.a.createElement("h3",null,r.a.createElement(v.b,{to:"/"},"Return to home"))))}}]),t}(r.a.Component),$=n(95),ee=n.n($),te=n(17),ne=n.n(te),ae={key:null,space:/\s+/g,facebook:/(?:(?:http|https):\/\/)?(?:www.)?facebook.com\/(?:events\/)?(?:[?\w-]*\/).+/},re=function(e){function t(e){var n;return Object(m.a)(this,t),(n=Object(p.a)(this,Object(h.a)(t).call(this,e))).state={start:new Date(e.start||"6 October 2019"),finish:new Date(e.finish||"8 December 2019"),events:{},colours:{},calendarIDs:{},locationReplacers:{},mapsLink:""},n}return Object(f.a)(t,e),Object(d.a)(t,[{key:"renderFrame",value:function(){for(var e=this,t=[],n=0;n<9;n++){var a=new Date(this.state.start);a.setDate(a.getDate()+7*n),t.push(a)}return r.a.createElement("table",{className:ne.a.table},r.a.createElement("thead",null,r.a.createElement("tr",null,["MT'19","SUN","MON","TUES","WED","THURS","FRI","SAT"].map((function(e){return r.a.createElement("th",{scope:"column",key:e},e)})))),r.a.createElement("tbody",null,t.map((function(t,n){for(var a=[],c=function(n){var c=new Date(t).setDate(t.getDate()+n);c=e.constructor.getEventDate(new Date(c));var s=!1;e.constructor.getEventDate(Date.now())===c&&(s=!0),a.push(r.a.createElement("td",{id:c,key:c,style:s?{backgroundColor:"PeachPuff"}:{}},(e.state.events[c]||[]).map((function(t,n){var a,s=t.location.split(",").shift();a=e.state.locationReplacers[s]?e.state.locationReplacers[s]:s;var i="";ae.facebook.test(t.description)&&(i=t.description.match(ae.facebook)[0]);for(var o=t.description,l=o.indexOf("<a");-1!==l;){var u=o.indexOf("/a>")+3;l=(o=o.slice(0,l)+o.slice(u)).indexOf("<a")}return o=o.replace(i,"").trim(),r.a.createElement("div",{className:ne.a.event,key:[c,n].join(".")},r.a.createElement("div",{className:ne.a.eventHeader},r.a.createElement("span",{className:ne.a.status,style:{color:t.color}},"\u2b24 "),r.a.createElement("span",{className:"toolTip"}),i?r.a.createElement("a",{className:ne.a.eventTitle,href:i},r.a.createElement("h4",{className:ne.a.eventName},t.title)):r.a.createElement("h4",{className:ne.a.noEvent},t.title)),r.a.createElement("div",null,r.a.createElement("h5",null,e.constructor.getDisplayTime(t.start)," ",r.a.createElement("a",{href:e.state.mapsLink+t.location.replace(ae.space,"+"),rel:"noopener noreferrer",target:"_blank"},a),"\n",o||null)))}))))},s=0;s<7;s++)c(s);return r.a.createElement("tr",{key:"week."+n},r.a.createElement("th",{scope:"row"},"Week "+n+"\n"+t.toDateString().slice(4,10)),a)}))))}},{key:"renderEvents",value:function(){var e=this,t={};Object.keys(this.state.calendarIDs).forEach((function(n){F()({url:"https://clients6.google.com/calendar/v3/calendars/"+n+"/events",params:{calendarId:n,singleEvents:!0,timeZone:"Europe/London",maxAttendees:1,maxResults:250,sanitizeHtml:!0,timeMin:new Date(e.state.start).toISOString(),timeMax:new Date(e.state.finish).toISOString(),key:"AIzaSyDahTZUtTKORUdsOY3H7BEeOXbwye0nBHI"}}).then((function(e){return[e.data.summary,e.data.items]})).then((function(a){var r=Object(i.a)(a,2),c=r[0],s=r[1].map((function(a){var r=e.state.calendarIDs[n];return t[r]||(t[r]=c),{created:a.created,link:a.htmlLink,title:a.summary,status:a.status,start:new Date(a.start.dateTime),end:new Date(a.end.dateTime),location:a.location,description:ee.a.decode(a.description||""),calendarName:c,color:r}}));return[t,s]})).then((function(t){var n=Object(i.a)(t,2),a=n[0],r=n[1],c=e.state.events;return r.forEach((function(t){var n=e.constructor.getEventDate(t.start);c[n]||(c[n]=[]),c[n].push(t)})),[a,c]})).then((function(t){var n=Object(i.a)(t,2),a=n[0],r=n[1];e.setState({colours:a,events:r})})).catch(console.error)}))}},{key:"renderKey",value:function(){var e=Object.entries(this.state.colours).sort((function(e,t){return e<t?-1:e>t?1:0}));return r.a.createElement("div",{className:ne.a.key},e.map((function(e,t){var n=Object(i.a)(e,2),a=n[0],c=n[1];return r.a.createElement("div",{className:ne.a.key,key:["keyElement",t].join(".")},r.a.createElement("span",{className:ne.a.status,style:{color:a}},"\u2b24"),r.a.createElement("h4",null,"\u200b "+c))})))}},{key:"getSettings",value:function(){return F()("https://oxfordunichess.github.io/oucc-backend/calendar.json").then((function(e){return e.data})).catch(console.error)}},{key:"componentDidMount",value:function(){var e=this;this.getSettings().then((function(t){return e.setState(Object.assign(e.state,t))})).then((function(){return e.renderEvents()}))}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(N.Helmet,null,r.a.createElement("title",null,this.props.title?this.props.title+" | OUCC":"OUCC")),r.a.createElement("div",{id:"page"},r.a.createElement("div",{id:"main",ref:"main",style:{marginLeft:30,marginRight:30}},r.a.createElement("h1",null,"Termcard"),this.renderKey(),this.renderFrame())))}}],[{key:"getEventDate",value:function(e){var t=new Date(e);return t.setHours(0),t.setMinutes(0),t.setSeconds(0),t.setMilliseconds(0),t.valueOf()/1e3}},{key:"isDateEqual",value:function(e,t){return e.getFullYear()===t.getFullYear()&&(e.getMonth()!==t.getMonth()&&e.getDate()!==t.getDate())}},{key:"getDisplayTime",value:function(e){return e.getHours()+":"+"0".repeat(2-e.getMinutes().toString().length)+e.getMinutes()}}]),t}(r.a.Component);F.a.defaults.baseURL="https://oxfordunichess.github.io/oucc-backend/";var ce={date:/^[0-9]{4}-[0-9]{1,2}-[0-9]{1,2}_/},se=function(e){function t(e){var n;return Object(m.a)(this,t),(n=Object(p.a)(this,Object(h.a)(t).call(this,e))).state={index:{},articles:[]},n}return Object(f.a)(t,e),Object(d.a)(t,[{key:"fetchArticles",value:function(){var e=Object(u.a)(l.a.mark((function e(){var n,a,r,c,s,i;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getArticleList();case 2:return n=e.sent,a=n.data,r=a.map((function(e){return e.name})),c=r.filter((function(e){return e.endsWith(".md")&&ce.date.test(e)})),s=c.sort((function(e,t){var n=new Date(e.split("_")[0]),a=new Date(t.split("_")[0]);return n.getTime()!==n.getTime()?1:a.getTime()!==a.getTime()?-1:a-n})),i=new Array(s.length),this.setState({articles:i}),s.forEach((function(e,n){return i[n]=t.getArticle(e).catch(console.error)})),e.next=12,Promise.all(i);case 12:return e.abrupt("return",e.sent);case 13:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"componentDidMount",value:function(){var e=Object(u.a)(l.a.mark((function e(){var t=this;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.constructor.getIndex().then((function(e){return t.setState({index:e})})),this.fetchArticles().then((function(e){return t.setState({articles:e})}));case 2:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return r.a.createElement(v.a,{basename:"/oucc-frontend"},r.a.createElement(j,{articles:this.state.articles}),r.a.createElement(b.d,null,Object.entries(this.state.index).map((function(e){var t=Object(i.a)(e,2),n=t[0],a=t[1];return n.startsWith("_")||"object"!==typeof a?null:r.a.createElement(b.b,{exact:!0,path:"/"+n,key:n+"_route",render:function(e){return a.open&&window.open(a.open),a.redirect?r.a.createElement(b.a,{to:a.redirect}):r.a.createElement(J,Object.assign({},e,{page:n,title:a.title,parent:a.parent}))}})})),r.a.createElement(b.b,{exact:!0,path:"/",render:function(){return r.a.createElement(J,{page:"main"})}}),r.a.createElement(b.b,{exact:!0,path:"/curr_news",render:function(){return r.a.createElement(G,{title:"Current News",articles:e.state.articles})}}),r.a.createElement(b.b,{exact:!0,path:"/contact",render:function(){return r.a.createElement(Q,{title:"Contact"})}}),r.a.createElement(b.b,{exact:!0,path:"/termcard",render:function(){return r.a.createElement(re,{title:"Termcard"})}}),r.a.createElement(b.b,{path:"*",component:X,status:404})))}}],[{key:"getArticle",value:function(){var e=Object(u.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,F()({baseURL:"https://oxfordunichess.github.io/oucc-backend/news/",url:t+"",method:"GET",maxRedirects:5}).catch(function(){var e=Object(u.a)(l.a.mark((function e(n){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:e.next=4;break;case 4:return e.next=6,F()({baseURL:"https://oxfordunichess.github.io/oucc-backend/news/",url:t+"?token="+Math.random().toString(36).slice(2),method:"GET",maxRedirects:5});case 6:e.t0=e.sent;case 7:return e.abrupt("return",e.t0);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).then((function(e){return e.data}));case 3:return e.abrupt("return",e.sent);case 6:return e.prev=6,e.t0=e.catch(0),e.t0&&console.error(e.t0),e.abrupt("return","");case 10:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t){return e.apply(this,arguments)}}()},{key:"getArticleList",value:function(){var e=Object(u.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,F()({url:"https://api.github.com/repos/oxfordunichess/oucc-backend/contents/news/",method:"get",maxRedirects:5});case 3:return e.abrupt("return",e.sent);case 6:return e.prev=6,e.t0=e.catch(0),e.t0&&console.error(e.t0),e.abrupt("return",[]);case 10:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(){return e.apply(this,arguments)}}()},{key:"getIndex",value:function(){var e=Object(u.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,"index.json",e.next=4,F()("index.json");case 4:return t=e.sent,e.abrupt("return",t.data);case 8:return e.prev=8,e.t0=e.catch(0),console.error(e.t0),e.abrupt("return",{});case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}()}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(se,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},37:function(e){e.exports=JSON.parse('{"news":[["/curr_news","Current News",false,true],["/old_news","News Archive",false,true]],"leagues":[["/boxleague","Club League",true,false],["/leagues","Teams",false,true],["/termcard","Termcard",true,true],["/1stTeam","1st Team",false,true],["/2ndTeam","2nd Team",false,true],["/3rdTeam","3rd Team",false,true],["/classes","Classes",false,true]],"members":[["/membership","Membership",false,true],["/committee","Current Committee",false,true],["/historical_committee","Past Officers",false,true]],"contact":[["/contact","Contact Us",false,true],["/maillists","Join our Mailing Lists",false,true]],"sponsors":[],"tournament":[["/tournament","Tournament",false,true],["/other_events","Alumni day",false,true]]}')},38:function(e,t,n){e.exports={main:"page_main__jGfys",page:"page_page__g1c2x"}},97:function(e,t,n){e.exports=n(254)}},[[97,1,2]]]);
//# sourceMappingURL=main.d1b39296.chunk.js.map