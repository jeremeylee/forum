(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{149:function(e,t,a){e.exports=a(302)},154:function(e,t,a){},155:function(e,t,a){},216:function(e,t,a){},222:function(e,t,a){},299:function(e,t,a){},300:function(e,t,a){},302:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),l=a(5),c=a.n(l),s=a(22),o=a(43),m=(a(154),a(306)),i=a(313),u=a(303),p=(a(155),a(312)),d=a(304),E=a(9),y=function(e){var t=p.a.SubMenu;return n.a.createElement(u.a,{type:"flex",justify:"space-between"},n.a.createElement(d.a,{xs:2,sm:4,md:6,lg:8,xl:8},n.a.createElement("span",{className:".logo"},n.a.createElement("h1",{style:{color:"rgba(255, 255, 255, 0.65)"}},n.a.createElement(E.a,{type:"frown",style:{color:"rgba(255, 255, 255, 0.65)"}})," ","The Forum"))),n.a.createElement(d.a,{xs:2,sm:2,md:4,lg:5,xl:6},n.a.createElement(p.a,{defaultSelectedKeys:["Home"],mode:"horizontal",theme:"dark",className:"menu"},n.a.createElement(p.a.Item,{key:"Home"},n.a.createElement(s.b,{to:"/"},n.a.createElement(E.a,{type:"home"}),"Home")),n.a.createElement(t,{title:n.a.createElement("span",null,n.a.createElement(E.a,{type:"bars"})," Forum")},n.a.createElement(p.a.Item,{key:"Forum:1"},n.a.createElement(s.b,{to:"/general-discussion"},"General Discussion")),n.a.createElement(p.a.Item,{key:"Forum:2"},n.a.createElement(s.b,{to:"/memes"},"Memes")),n.a.createElement(p.a.Item,{key:"Forum:3"},n.a.createElement(s.b,{to:"/crying-cat"},"Crying Cat Pictures")),n.a.createElement(p.a.Item,{key:"Forum:4"},n.a.createElement(s.b,{to:"/morbid-reality"},"Morbid Reality")),n.a.createElement(p.a.Item,{key:"Forum:5"},n.a.createElement(s.b,{to:"/off-topic"},"Off Topic"))),n.a.createElement(p.a.Item,{key:"Login"},n.a.createElement(s.b,{to:"/login"},n.a.createElement(E.a,{type:"login"}),"Login")),n.a.createElement(p.a.Item,{key:"Signup"},n.a.createElement(s.b,{to:"/signup"},n.a.createElement(E.a,{type:"user-add"}),"Signup")))))},g=a(65),f=a.n(g),b=(a(216),a(307)),h=a(305),x=function(e){return n.a.createElement(u.a,{type:"flex",justify:"center"},n.a.createElement(d.a,{xs:12,sm:14,md:16,lg:18,xl:20},n.a.createElement(b.a,{className:"forum-board-container",itemLayout:"horizontal",dataSource:[{title:"General Discussion",description:"General topics related to the discussion",url:"/general-discussion"},{title:"Memes",description:"Funny memes for the wholesome folks",url:"/memes"},{title:"Crying Cat Pictures",description:"Big moods in here",url:"/crying-cat"},{title:"Morbid Reality",description:"It really be like that",url:"/morbid-reality"},{title:"Off Topic",description:"\uc624\ub298\uc740 \uc5ec\uae30\uae4c\uc9c0",url:"/off-topic"}],renderItem:function(t){return n.a.createElement(b.a.Item,{actions:["Posts: ".concat(e.posts),"Last post: ".concat(e.postDate)]},n.a.createElement(b.a.Item.Meta,{avatar:n.a.createElement(h.a,{src:"https://i.ytimg.com/vi/LrQHgABDdlI/hqdefault.jpg"}),title:n.a.createElement(s.b,{to:t.url},t.title),description:t.description}))}})))},w=function(e){m.a.Header;var t=m.a.Content;m.a.Footer;return n.a.createElement("div",null,n.a.createElement(t,{style:{marginTop:"64px"}},n.a.createElement(x,{posts:"10",postDate:f()().format("MM/DD/YYYY, h:mm a")})))},k=(a(222),a(308)),v=a(311),I=a(310),j=a(91),F=k.a.create()(function(e){var t=e.form,a=t.getFieldDecorator;t.validateFields;return n.a.createElement(u.a,{type:"flex",justify:"center"},n.a.createElement(k.a,{className:"login-container"},n.a.createElement(u.a,{type:"flex",justify:"start"},n.a.createElement(d.a,{xs:8,sm:10,md:12,lg:14,xl:16},n.a.createElement(k.a.Item,null,a("username",{rules:[{required:!0,message:"Please input your username!"}]})(n.a.createElement(v.a,{prefix:n.a.createElement(E.a,{type:"user",style:{color:"rgba(0,0,0,.25)"}}),placeholder:"Username"}))))),n.a.createElement(u.a,{type:"flex",justify:"start"},n.a.createElement(d.a,{xs:8,sm:10,md:12,lg:14,xl:16},n.a.createElement(k.a.Item,null,a("password",{rules:[{required:!0,message:"Please input your Password!"}]})(n.a.createElement(v.a,{prefix:n.a.createElement(E.a,{type:"lock",style:{color:"rgba(0,0,0,.25)"}}),type:"password",placeholder:"Password"}))))),n.a.createElement(u.a,{type:"flex",justify:"start"},n.a.createElement(k.a.Item,null,a("remember",{valuePropName:"checked",initialValue:!0})(n.a.createElement(u.a,{type:"flex",justify:"start"},n.a.createElement(I.a,null,"Remember me"))),n.a.createElement(u.a,{type:"flex",justify:"start"},n.a.createElement(j.a,{type:"primary",htmlType:"submit"},"Log in")),"Or ",n.a.createElement(s.b,{to:"/signup"},"register now!")))))}),N=(a(299),k.a.create()(function(e){var t=e.form,a=t.getFieldDecorator;t.validateFields;return n.a.createElement(u.a,{type:"flex",justify:"center"},n.a.createElement(k.a,{className:"signup-container"},n.a.createElement(u.a,{type:"flex",justify:"start"},n.a.createElement(d.a,{xs:8,sm:10,md:12,lg:14,xl:16},n.a.createElement(k.a.Item,null,a("username",{rules:[{required:!0,message:"Please input your username!"}]})(n.a.createElement(v.a,{prefix:n.a.createElement(E.a,{type:"user",style:{color:"rgba(0,0,0,.25)"}}),placeholder:"Username"}))))),n.a.createElement(u.a,{type:"flex",justify:"start"},n.a.createElement(d.a,{xs:8,sm:10,md:12,lg:14,xl:16},n.a.createElement(k.a.Item,null,a("password",{rules:[{required:!0,message:"Please input your Password!"}]})(n.a.createElement(v.a,{prefix:n.a.createElement(E.a,{type:"lock",style:{color:"rgba(0,0,0,.25)"}}),type:"password",placeholder:"Password"}))))),n.a.createElement(u.a,{type:"flex",justify:"start"},n.a.createElement(k.a.Item,null,n.a.createElement(u.a,{type:"flex",justify:"start"},n.a.createElement(j.a,{type:"primary",htmlType:"submit"},"Sign Up")),"Already have an account? ",n.a.createElement(s.b,{to:"/login"},"Login!")))))})),M=(a(300),a(309).a.Title),P=function(e){var t=e.type,a=e.text;return n.a.createElement("span",null,n.a.createElement(E.a,{type:t,style:{marginRight:8}}),a)},L=function(e){return n.a.createElement(u.a,{type:"flex",justify:"center"},n.a.createElement(d.a,{xs:6,sm:8,md:10,lg:12,xl:14},n.a.createElement(M,{level:2,className:"board-name"},e.boardName),n.a.createElement(b.a,{className:"posts-container",itemLayout:"vertical",size:"large",pagination:{onChange:function(e){console.log(e)},pageSize:5},dataSource:["Racing car sprays burning fuel into crowd.","Japanese princess to wed commoner.","Australian walks 100km after outback crash.","Man charged over missing wedding girl.","Los Angeles battles huge wildfires.","Man charged over missing wedding girl.","Japanese princess to wed commoner.","Racing car sprays burning fuel into crowd.","Man charged over missing wedding girl.","Japanese princess to wed commoner.","Australian walks 100km after outback crash.","Los Angeles battles huge wildfires.","Japanese princess to wed commoner.","Racing car sprays burning fuel into crowd.","Los Angeles battles huge wildfires.","Racing car sprays burning fuel into crowd.","Japanese princess to wed commoner.","Racing car sprays burning fuel into crowd.","Australian walks 100km after outback crash.","Australian walks 100km after outback crash.","Los Angeles battles huge wildfires.","Racing car sprays burning fuel into crowd.","Japanese princess to wed commoner.","Japanese princess to wed commoner."],renderItem:function(e){return n.a.createElement(b.a.Item,{actions:[n.a.createElement(P,{type:"like-o",text:"156",key:"list-vertical-star-o"}),n.a.createElement(P,{type:"dislike-o",text:"156",key:"list-vertical-like-o"}),n.a.createElement(P,{type:"message",text:"2",key:"list-vertical-message"})]},n.a.createElement(b.a.Item.Meta,{avatar:n.a.createElement(h.a,{src:"https://66.media.tumblr.com/736642e05f37a2bcb6f3806f2dcc56b2/tumblr_pgp91sWx0N1vmskmwo1_500.png"}),title:e}))}})))},R=function(e){var t=m.a.Header,a=m.a.Footer;return n.a.createElement("div",null,n.a.createElement(s.a,null,n.a.createElement(m.a,null,n.a.createElement(i.a,null,n.a.createElement(t,null,n.a.createElement(y,null))),n.a.createElement(o.a,{exact:!0,path:"/",component:w}),n.a.createElement(o.a,{exact:!0,path:"/login",component:F}),n.a.createElement(o.a,{exact:!0,path:"/signup",component:N}),n.a.createElement(o.a,{exact:!0,path:"/general-discussion",render:function(e){return n.a.createElement(L,Object.assign({},e,{boardName:"General Discussion"}))}}),n.a.createElement(o.a,{exact:!0,path:"/memes",render:function(e){return n.a.createElement(L,Object.assign({},e,{boardName:"Memes"}))}}),n.a.createElement(o.a,{exact:!0,path:"/crying-cat",render:function(e){return n.a.createElement(L,Object.assign({},e,{boardName:"Crying Cat Pictures"}))}}),n.a.createElement(o.a,{exact:!0,path:"/morbid-reality",render:function(e){return n.a.createElement(L,Object.assign({},e,{boardName:"Morbid Reality"}))}}),n.a.createElement(o.a,{exact:!0,path:"/off-topic",render:function(e){return n.a.createElement(L,Object.assign({},e,{boardName:"Off Topic"}))}}),n.a.createElement(u.a,{type:"flex",justify:"center"},n.a.createElement(a,{style:{position:"absolute",bottom:"0"}},"Forum \xa92019 Created by Jeremey & Kyle")))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(n.a.createElement(R,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[149,1,2]]]);
//# sourceMappingURL=main.ad355eb1.chunk.js.map