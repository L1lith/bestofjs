webpackJsonp([3],{261:function(e,t,n){"use strict";function r(e){var t=e.ui;return{myProjects:Object(L.d)(e),ui:t}}function a(e){return{uiActions:Object(j.b)(_,e)}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(13),l=n.n(o),c=n(14),i=n.n(c),u=n(15),s=n.n(u),d=n(16),f=n.n(d),m=n(17),p=n.n(m),g=n(0),h=n(12),j=n(10),b=n(35),v=n(51),y=function(e){var t=e.count;return 0===t?null:g.default.createElement("span",{className:"counter",style:{color:"#999",fontSize:"1rem",marginLeft:".25rem"}},1===t?" (one project)":" ("+t+" projects)")},E=function(e){var t=e.isLoggedin;return g.default.createElement("div",{style:{border:"2px dashed #fa9e59",padding:"2rem"}},t?g.default.createElement("div",null,g.default.createElement("p",null,"You don't have bookmarked any project."),g.default.createElement("p",null,"Add projects you want to follow by using the `ADD BOOKMARK` button.")):g.default.createElement("span",null,"Please sign-in to access this feature!"))},O=function(e){var t=e.projects,n=e.ui,r=e.isLoggedin;return g.default.createElement(b.a,null,g.default.createElement("h3",{className:"no-card-container"},g.default.createElement("span",{className:"icon mega-octicon octicon-bookmark",style:{marginRight:".25rem"}})," ","Bookmarked projects",g.default.createElement(y,{count:t.length})),0===t.length&&g.default.createElement(E,{isLoggedin:r}),t.length>0&&g.default.createElement(v.a,{projects:t,isLoggedin:r,viewOptions:n.viewOptions,showStars:!0,showDelta:!1,deltaFilter:"daily"}))},k=O,w=n(74),L=n(28),P=n(9),_=n(23),A=function(e){function t(){return i()(this,t),f()(this,(t.__proto__||l()(t)).apply(this,arguments))}return p()(t,e),s()(t,[{key:"render",value:function(){Object(P.a)("Render the <MyProjectsPage> container",this.props);var e=this.props,t=e.myProjects,n=e.ui,r=e.isLoggedin;return g.default.createElement(k,{projects:t,ui:n,isLoggedin:r})}}]),t}(g.Component);t.default=Object(h.b)(r,a)(Object(w.a)(A))}});
//# sourceMappingURL=bundle-my-projects.js.map